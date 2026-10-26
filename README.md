# TalkChat

TalkChat is a React and TypeScript starter for a responsive messaging app. This
initial stage contains a temporary landing page, a light/dark theme toggle, a
basic French/English message dictionary, and a web app manifest. It does not
include authentication, messaging, a database, encryption, or a backend.

## Requirements

- Node.js 24 or newer
- npm 11 or newer

## Local development

```sh
npm install
npm run dev
```

Vite prints the local address in the terminal.

## Checks

```sh
npm run lint
npm run build
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

## Authentication UI (demo only)

The frontend currently includes these client-side routes:

- `/login`
- `/register`
- `/forgot-password`
- `/verify-email`
- `/error`
- `/access-denied`
- `/unavailable`
- `/not-found`
- `/legal/terms` and `/legal/privacy` (unavailable placeholders)

Unknown paths show the not-found page. The forms validate fields and simulate a
short loading state, but do not create accounts or sessions, send email, or
contact a backend. Form values are held only in page memory and passwords are
cleared after the simulated action. Recovery displays the same generic result
for any valid email address. The verification page explicitly explains that a
resend is only simulated.

The `/error`, `/access-denied`, and `/unavailable` pages are presentational
states for future flows; no real authorization or server errors are handled.
Terms and privacy links currently lead to the unavailable page because no legal
documents have been provided.

Navigation uses the browser History API directly, so no routing dependency is
required. Language choices apply immediately across the current client-side
navigation and default to French on a fresh load. The theme preference is the
only UI preference saved locally; authentication form data is not persisted.