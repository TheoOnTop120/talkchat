import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import { useAuth } from "../auth/AuthContext";
import AuthLayout from "../components/AuthLayout";
import { FormField } from "../components/FormFields";
import ProfileAvatar from "../components/ProfileAvatar";
import RequireAuth from "../components/RequireAuth";
import { getOwnProfile, ProfileServiceError, updateOwnProfile } from "../services/profiles";
import type { EditableProfile } from "../services/profiles";
import { normalizeUsername, validateProfileUsername } from "../utils/forms";
import type { MessageKey } from "../i18n/messages";
import type { AppPageProps } from "../types/app";

function ProfileEditor(props: AppPageProps) {
  const { session } = useAuth();
  const userId = session?.user.id;
  const [profile, setProfile] = useState<EditableProfile | null>(null);
  const [username, setUsername] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  const [errors, setErrors] = useState<Partial<Record<"username" | "displayName" | "avatarUrl", MessageKey>>>({});
  const [loadError, setLoadError] = useState(false);
  const [saveError, setSaveError] = useState<MessageKey | null>(null);
  const [saved, setSaved] = useState(false);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!userId) return;
    let active = true;
    void getOwnProfile(userId)
      .then((loadedProfile) => {
        if (!active) return;
        setProfile(loadedProfile);
        setUsername(loadedProfile.username);
        setDisplayName(loadedProfile.display_name ?? "");
        setAvatarUrl(loadedProfile.avatar_url ?? "");
      })
      .catch(() => {
        if (active) setLoadError(true);
      });
    return () => {
      active = false;
    };
  }, [userId]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!userId) return;
    setSaveError(null);
    setSaved(false);
    const nextErrors: typeof errors = {};
    const usernameError = validateProfileUsername(username, profile?.username ?? "");
    if (usernameError) {
      nextErrors.username =
        usernameError === "required"
          ? "errorRequired"
          : usernameError === "reserved"
            ? "errorUsernameReserved"
            : "errorUsernameInvalid";
    }
    if (displayName.trim().length < 2 || displayName.trim().length > 40) {
      nextErrors.displayName = "errorDisplayName";
    }
    if (avatarUrl.trim()) {
      try {
        const parsedUrl = new URL(avatarUrl.trim());
        if (parsedUrl.protocol !== "https:" && parsedUrl.protocol !== "http:") {
          nextErrors.avatarUrl = "errorAvatarUrl";
        }
      } catch {
        nextErrors.avatarUrl = "errorAvatarUrl";
      }
    }
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    setSaving(true);
    try {
      const updatedProfile = await updateOwnProfile(userId, {
        username: normalizeUsername(username),
        display_name: displayName.trim(),
        avatar_url: avatarUrl.trim() || null,
      });
      setProfile(updatedProfile);
      setUsername(updatedProfile.username);
      setDisplayName(updatedProfile.display_name ?? "");
      setAvatarUrl(updatedProfile.avatar_url ?? "");
      setSaved(true);
    } catch (error) {
      setSaveError(
        error instanceof ProfileServiceError && error.code === "23505"
          ? "errorUsernameTaken"
          : "profileSaveError",
      );
    } finally {
      setSaving(false);
    }
  }

  return (
    <AuthLayout
      {...props}
      intro={props.t("profileIntro")}
      title={props.t("profileTitle")}
      wide
    >
      {loadError ? (
        <p className="form-error-summary" role="alert">
          {props.t("profileLoadError")}
        </p>
      ) : !profile ? (
        <p role="status">{props.t("authCheckingSession")}</p>
      ) : (
        <form className="auth-form" noValidate onSubmit={handleSubmit}>
          {saveError && (
            <p className="form-error-summary" role="alert">
              {props.t(saveError)}
            </p>
          )}
          {saved && <p className="form-status" role="status">{props.t("profileSaved")}</p>}
          <ProfileAvatar
            className="profile-avatar-preview"
            name={displayName || username}
            url={avatarUrl}
          />
          <FormField
            error={errors.username ? props.t(errors.username) : undefined}
            hint={props.t("usernameHint")}
            id="username"
            label={props.t("usernameLabel")}
          >
            <input
              autoCapitalize="none"
              autoComplete="username"
              className="text-input"
              id="username"
              maxLength={20}
              onChange={(event) => setUsername(event.target.value)}
              value={username}
            />
          </FormField>
          <FormField
            error={errors.displayName ? props.t(errors.displayName) : undefined}
            id="displayName"
            label={props.t("displayNameLabel")}
          >
            <input
              autoComplete="nickname"
              className="text-input"
              id="displayName"
              maxLength={40}
              onChange={(event) => setDisplayName(event.target.value)}
              value={displayName}
            />
          </FormField>
          <FormField
            error={errors.avatarUrl ? props.t(errors.avatarUrl) : undefined}
            id="avatarUrl"
            label={props.t("avatarUrlLabel")}
          >
            <input
              autoComplete="url"
              className="text-input"
              id="avatarUrl"
              onChange={(event) => setAvatarUrl(event.target.value)}
              type="url"
              value={avatarUrl}
            />
          </FormField>
          <button aria-busy={saving} className="form-submit" disabled={saving} type="submit">
            {props.t("profileSave")}
          </button>
        </form>
      )}
    </AuthLayout>
  );
}

function ProfilePage(props: AppPageProps) {
  return (
    <RequireAuth t={props.t}>
      <ProfileEditor {...props} />
    </RequireAuth>
  );
}

export default ProfilePage;