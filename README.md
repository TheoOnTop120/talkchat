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