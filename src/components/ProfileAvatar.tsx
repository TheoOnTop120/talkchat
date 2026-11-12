import { useState } from "react";

type ProfileAvatarProps = {
  name: string;
  url: string | null;
  className?: string;
};

function ProfileAvatar({ name, url, className = "" }: ProfileAvatarProps) {
  const [failedUrl, setFailedUrl] = useState<string | null>(null);
  const imageUrl = url?.trim() ?? "";
  const initial = name.trim().slice(0, 1).toUpperCase() || "?";

  return (
    <span
      aria-hidden="true"
      className={`profile-avatar ${className}`.trim()}
    >
      {initial}
      {imageUrl && failedUrl !== imageUrl && (
        <img
          alt=""
          className="profile-avatar-image"
          onError={() => setFailedUrl(imageUrl)}
          src={imageUrl}
        />
      )}
    </span>
  );
}

export default ProfileAvatar;
