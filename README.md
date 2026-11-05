<div align="center">

# TalkChat

**A modern, multilingual and accessible messaging application.**

![React](https://img.shields.io/badge/React-TypeScript-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-build-646CFF?logo=vite&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-Auth%20%26%20Realtime-3ECF8E?logo=supabase&logoColor=white)
![i18n](https://img.shields.io/badge/languages-41-blueviolet)
![PWA](https://img.shields.io/badge/PWA-manifest-5A0FC8)
![Status](https://img.shields.io/badge/status-prototype-orange)

[Quick start](#quick-start) |
[Features](#features) |
[Authentication](#authentication) |
[Internationalization](#internationalization) |
[Project structure](#project-structure)

</div>

---

## Overview

TalkChat is a **React and TypeScript messaging application** with a responsive inbox, direct conversations, optimistic message sending, and Supabase Realtime updates. Its interface is available in **41 languages**, with account authentication through Supabase Auth.

The public landing page remains available to signed-out visitors. Signed-in users see their inbox at `/` and can start direct conversations by searching for a username.

## Features

| Feature | Details |
|---|---|
| **Light / dark theme** | The only UI preference TalkChat stores locally |
| **41 languages** | On-demand catalogs, RTL support, `Intl` for dates, numbers and plurals |
| **Authentication** | Sign-up, sign-in, session restoration, sign-out, email confirmation, password recovery |
| **Direct messaging** | Username search, conversation list, message history, optimistic sending and realtime updates |
| **Chat security** | Supabase tables with row-level security; only conversation participants can read its messages |
| **Dependency-free routing** | Built directly on the browser History API |
| **Lazy loading** | Route-based page splitting, Supabase SDK imported asynchronously |
| **PWA-ready** | Manifest in place; service worker and offline caching not configured yet |
| **Legal pages** | Five multilingual working drafts (see [Legal pages](#legal-pages)) |

## Requirements

- **Node.js** 24 or newer
- **npm** 11 or newer

## Quick start

```sh
npm install
npm run dev
```

Vite prints the local address in the terminal.

### Supabase configuration

For local Supabase development, create a `.env.local` file and set:

```sh
VITE_SUPABASE_URL=...
VITE_SUPABASE_PUBLISHABLE_KEY=...
```

> [!WARNING]
> Only the **publishable key** is intended for browser use. Never put a secret or service-role key in frontend environment variables.

Without valid public configuration, the application remains usable and displays a translated authentication warning.

### Set up chat storage

Run `supabase/migrations/20261105000000_chat_storage.sql` in the Supabase SQL Editor. It creates profiles when users sign up, the conversation and message tables, RLS policies, and the `get_or_create_direct_conversation` RPC. The migration also adds `messages` to the `supabase_realtime` publication when that publication is available.

In the Supabase Dashboard, open **Database > Publications**, verify that `messages` is enabled for `supabase_realtime`, and enable it there if necessary. Both steps are needed on the project before messaging can be tested. Usernames are generated from the signup display name, normalized to lowercase letters, numbers and underscores; users can search by the resulting exact username.

## Checks

```sh
npm run lint
npm run build
node --experimental-strip-types --test tests/i18n.test.mjs
```

## Authentication

Authentication uses **Supabase Auth**. Public forms call the Supabase Auth SDK: email and password are sent to the configured Supabase project, and the display name is attached as user metadata. Birth date and terms acceptance are validated locally and are **not sent**. The SDK manages session storage and auth tokens.

Password recovery returns a generic response to avoid revealing whether an email address belongs to an account.

### Redirect URLs

The frontend uses fixed same-origin callback paths. Add them to the Supabase project's allowed redirect URLs for each deployment:

- `/verify-email`
- `/reset-password`

> [!NOTE]
> Email delivery, SMTP configuration, email templates and the redirect allowlist depend on the remote Supabase project. These settings are neither inspected nor changed here, and email delivery has not been verified.

### Route protection

The inbox and `/chat/<conversation-id>` require an authenticated session. `RequireAuth` protects navigation in the client; Supabase RLS is the actual data boundary and remains effective regardless of frontend routing.

### Available routes

| Category | Routes |
|---|---|
| **Authentication** | `/login`, `/register`, `/forgot-password`, `/verify-email`, `/reset-password` |
| **Messaging** | `/` (signed-in inbox), `/chat/<conversation-id>` |
| **States** | `/error`, `/access-denied`, `/unavailable`, `/not-found` |
| **Legal** | `/legal/terms`, `/legal/privacy`, `/legal/community`, `/legal/report`, `/legal/security` |

Unknown paths show the not-found page. The `/error`, `/access-denied` and `/unavailable` pages are presentational states for future flows.

## Internationalization

The interface supports **41 languages**:

<details>
<summary><b>Show the full list</b></summary>

| Code | Language | Code | Language |
|---|---|---|---|
| `fr` | French | `en` | English |
| `nl` | Dutch | `de` | German |
| `es` | Spanish | `pt` | Portuguese |
| `it` | Italian | `pl` | Polish |
| `uk` | Ukrainian | `ru` | Russian |
| `tr` | Turkish | `ar` | Arabic |
| `he` | Hebrew | `fa` | Persian |
| `hi` | Hindi | `bn` | Bengali |
| `ur` | Urdu | `zh-Hans` | Simplified Chinese |
| `zh-Hant` | Traditional Chinese | `ja` | Japanese |
| `ko` | Korean | `id` | Indonesian |
| `vi` | Vietnamese | `th` | Thai |
| `sv` | Swedish | `nb` | Norwegian Bokmal |
| `da` | Danish | `fi` | Finnish |
| `el` | Greek | `ro` | Romanian |
| `cs` | Czech | `sk` | Slovak |
| `hu` | Hungarian | `bg` | Bulgarian |
| `hr` | Croatian | `sr-Latn` | Serbian (Latin script) |
| `sl` | Slovenian | `lt` | Lithuanian |
| `lv` | Latvian | `et` | Estonian |
| `ca` | Catalan | | |

</details>

### Behavior

- Native language selector with **keyboard type-ahead**.
- The selected language is persisted separately as `talkchat-locale`. On a first visit, TalkChat detects a supported browser language and otherwise starts in French.
- Language catalogs are **loaded on demand** by locale group.
- **RTL** direction is set on the document root for Arabic, Hebrew, Persian and Urdu.
- Dates, numbers and plural categories use the browser's `Intl` APIs.
- Language choices apply immediately across the current client-side navigation.

The language preference is local to the browser and is not synchronized to a remote account profile. Profiles currently store a username and optional avatar URL only.

> [!NOTE]
> Only TalkChat-provided interface copy is localized. User-authored messages, names, profile descriptions, attachments, captions and transcriptions are not translated, sent to a translation service, or modified when the interface language changes.

### Adding a locale

1. Add its BCP 47 code, native name and text direction to `src/i18n/locales.ts`.
2. Add every `MessageKey` to a catalog group.
3. Map the locale to that group in `src/i18n/messages.ts`.
4. Add translated legal documents.
5. Run the i18n test to check catalog parity, persistence, direction, formatting and message-key behavior.

Keep all catalogs complete: missing keys intentionally throw instead of silently showing another language.

Interface catalogs live in `src/i18n/messages.ts` and `src/i18n/catalogs/`. Legal documents are maintained separately in `src/i18n/legal.ts` and its legal catalogs.

## Legal pages

The five `/legal/*` pages contain **multilingual working drafts** and prototype information, not reviewed legal terms or a compliance guarantee.

- Non-French translations are explicitly marked as unofficial and unreviewed.
- No operator is identified and no contact details are invented.
- Collection purposes, legal bases, recipients, retention periods and applicable rights remain to be defined and reviewed before any public launch.
- There is no working report submission channel and no implemented moderation system.

## Project structure

```text
public/           Static files and PWA manifest
src/
  components/     Shared interface components
  i18n/           Locale dictionaries and translation helper
  pages/          Page-level views, including inbox and chat
  services/       Supabase authentication and chat requests
  styles/         Global and page styles
  types/          Shared application and database types
  utils/          Small reusable helpers
tests/            Tests (including i18n)
```

## Next step

- [x] Landing page and light/dark theme
- [x] Interface in 41 languages
- [x] Supabase authentication (sign-up, sign-in, confirmation, recovery)
- [x] Direct messaging, profiles and server-side RLS policies
- [x] Web app manifest
- [ ] Service worker and offline caching
- [ ] Legal review of the legal pages
- [ ] Report channel and moderation

The next implementation step is a service worker with a deliberate offline experience; chat data and authentication tokens should not be cached by a generic offline strategy.