# TalkChat

TalkChat is a React and TypeScript starter for a responsive messaging app. This
initial stage contains a landing page, a light/dark theme toggle, a localized
French/English interface expanded to 41 languages, and a web app manifest.
Account authentication is provided by Supabase Auth; messaging and chat storage
are not implemented.

## Requirements

- Node.js 24 or newer
- npm 11 or newer

## Local development

```sh
npm install
npm run dev
```

Vite prints the local address in the terminal.

For local Supabase development, create a `.env.local` file from `.env.example`
and set `VITE_SUPABASE_URL` and `VITE_SUPABASE_PUBLISHABLE_KEY`. Only the
publishable key is intended for browser use; never put a secret or service-role
key in frontend environment variables. Without valid public configuration the
application remains usable and displays a translated authentication warning.

Authentication uses Supabase Auth for account creation, sign-in, session
restoration, sign-out, email confirmation, and password recovery. The frontend
uses fixed same-origin callback paths (`/verify-email` and `/reset-password`);
add those paths to the Supabase project's allowed redirect URLs for each
deployment. Email delivery and SMTP configuration are external and have not
been verified. No message/profile tables, messaging feature, or server-side
authorization policies are provided by this frontend.

## Checks

```sh
npm run lint
npm run build
node --experimental-strip-types --test tests/i18n.test.mjs
```

## Project structure

```text
public/           Static files and PWA manifest
src/
  components/     Shared interface components
  i18n/           Locale dictionaries and translation helper
  pages/          Page-level views
  styles/         Global and page styles
  types/          Shared TypeScript types
  utils/          Small reusable helpers
```

The current homepage is a visual placeholder. Its call-to-action is intentionally
inactive until product flows are designed. The manifest prepares the app for a
future PWA; offline caching and a service worker are not configured yet.

## Authentication

The frontend currently includes these client-side routes:

- `/login`
- `/register`
- `/forgot-password`
- `/verify-email`
- `/reset-password`
- `/error`
- `/access-denied`
- `/unavailable`
- `/not-found`
- `/legal/terms`
- `/legal/privacy`
- `/legal/community`
- `/legal/report`
- `/legal/security`

Unknown paths show the not-found page. Public authentication forms call the
Supabase Auth SDK. Email/password credentials are sent to the configured
Supabase project; display name is attached as user metadata. Birth date and
terms acceptance are validated locally and are not sent. Supabase's SDK
manages session storage and auth tokens. Recovery uses a generic response to
avoid revealing whether an email address belongs to an account.

Email confirmation and password recovery depend on the remote project's auth
settings, email templates, SMTP delivery, and redirect allowlist. These remote
settings are not inspected or changed here. The reusable `RequireAuth`
component is available for future private routes; it is a frontend navigation
guard only and does not replace server-side authorization or Supabase RLS.

The `/error`, `/access-denied`, and `/unavailable` pages are presentational
states for future flows. The five `/legal/*` pages contain multilingual working
drafts and prototype information, not reviewed legal terms or a compliance
guarantee. Non-French legal translations are explicitly marked as unofficial
and unreviewed.
They do not
identify an operator or invent contact details. Actual collection purposes,
legal bases, recipients, retention periods, and applicable rights remain to be
defined and reviewed before any public launch. There is no working report
submission channel or implemented moderation system.

Navigation uses the browser History API directly, so no routing dependency is
required. Language choices apply immediately across the current client-side
navigation and default to French on a fresh load. The theme preference is the
only UI preference saved locally by TalkChat; Supabase Auth manages its own
session persistence in the browser.

## Internationalization

The interface supports French (`fr`), English (`en`), Dutch (`nl`), German
(`de`), Spanish (`es`), Portuguese (`pt`), Italian (`it`), Polish (`pl`),
Ukrainian (`uk`), Russian (`ru`), Turkish (`tr`), Arabic (`ar`), Hebrew (`he`),
Persian (`fa`), Hindi (`hi`), Bengali (`bn`), Urdu (`ur`), Simplified Chinese
(`zh-Hans`), Traditional Chinese (`zh-Hant`), Japanese (`ja`), Korean (`ko`),
Indonesian (`id`), Vietnamese (`vi`), Thai (`th`), Swedish (`sv`), Norwegian
Bokmål (`nb`), Danish (`da`), Finnish (`fi`), Greek (`el`), Romanian (`ro`),
Czech (`cs`), Slovak (`sk`), Hungarian (`hu`), Bulgarian (`bg`), Croatian
(`hr`), Serbian in Latin script (`sr-Latn`), Slovenian (`sl`), Lithuanian
(`lt`), Latvian (`lv`), Estonian (`et`), and Catalan (`ca`).

The native language selector supports keyboard type-ahead. The selected
language is persisted separately as `talkchat-locale`; on a first visit,
TalkChat detects a supported browser language and otherwise starts in French.
Language catalogs are loaded on demand by locale group. RTL direction is set
on the document root for Arabic, Hebrew, Persian, and Urdu. Dates, numbers, and
plural categories use the browser's `Intl` APIs.

The language preference is local to this browser and is not synchronized to a
remote account profile; TalkChat does not yet have a profile preference field.

Interface catalogs live in `src/i18n/messages.ts` and `src/i18n/catalogs/`;
legal documents are maintained separately in `src/i18n/legal.ts` and its legal
catalogs. To add a locale, add its BCP 47 code, native name, and text direction
to `src/i18n/locales.ts`, add every `MessageKey` to a catalog group, map the
locale to that group in `src/i18n/messages.ts`, and add translated legal
documents. Keep all catalogs complete: missing keys intentionally throw
instead of silently showing another language. Run the i18n test command above
to check catalog parity, persistence, direction, formatting, and message-key
behavior.

Only TalkChat-provided interface copy is localized. User-authored messages,
names, profile descriptions, attachments, captions, and transcriptions are not
translated, sent to a translation service, or modified when the interface
language changes. TalkChat does not yet implement messaging.