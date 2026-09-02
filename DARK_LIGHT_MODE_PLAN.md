# Dark / Light Mode — Implementation Plan

## Current state

- React 18 + Vite, styling via SCSS Modules (one `*.module.scss` per component).
- No theming system exists today — every component hardcodes its own hex colors
  (e.g. `#07111f`, `#e5142e`, `#ffffff`, `#9aa1af`, ...). Audited hardcoded colors:
  `Header`, `Hero`, `ValueStrip`, `Categories`, `BrandCards`, `Brands`, `OrderSteps`,
  `QuoteRequest`, `Coverage`, `Footer`.
- The site is effectively dark-themed only right now (dark navy backgrounds,
  white text, red/crimson accents).
- `src/index.css` sets global `direction: rtl` and font-family only.

## Goal

1. Introduce a proper theme system with **dark** (current look, default) and a new
   **light** variant.
2. Add a toggle button (in the `Header`) to switch between modes.
3. Persist the user's choice across reloads.

## Approach

### 1. Design tokens (CSS custom properties)

Create `src/styles/themes.css` defining semantic tokens as CSS variables, scoped
under a `[data-theme="dark"]` / `[data-theme="light"]` attribute on `<html>` (or `<body>`):

```css
:root,
[data-theme="dark"] {
  --color-bg: #07111f;
  --color-bg-alt: #0b1220;
  --color-surface: #14213d;
  --color-text: #ffffff;
  --color-text-muted: #9aa1af;
  --color-border: rgba(255, 255, 255, 0.25);
  --color-accent: #e5142e;
  --color-accent-hover: #a80d26;
  --color-accent-strong: #c8102e;
}

[data-theme="light"] {
  --color-bg: #ffffff;
  --color-bg-alt: #f4f5f7;
  --color-surface: #ffffff;
  --color-text: #0b1220;
  --color-text-muted: #5b6472;
  --color-border: rgba(0, 0, 0, 0.12);
  --color-accent: #e5142e;
  --color-accent-hover: #a80d26;
  --color-accent-strong: #c8102e;
}
```

Exact light-mode palette to be refined during implementation (needs enough
contrast against white for accessibility, especially for red accents).

### 2. Theme state (Context + hook)

- Add `src/context/ThemeContext.jsx`:
  - `ThemeProvider` — holds `theme` state (`"dark" | "light"`), defaults to
    `localStorage.getItem("theme")` if present, otherwise `"dark"` (matches
    current behavior), otherwise could respect `prefers-color-scheme` later.
  - Sets `document.documentElement.dataset.theme = theme` on change.
  - Persists to `localStorage` on change.
  - Exposes `useTheme()` hook returning `{ theme, toggleTheme }`.
- Wrap `<App />` with `<ThemeProvider>` in `src/main.jsx`.

### 3. Toggle button component

- New `src/components/ThemeToggle/ThemeToggle.jsx` (+ `.module.scss`).
- Simple icon button (sun/moon icon) using `useTheme()`.
- Mount it inside `Header.jsx`, near the CTA button.

### 4. Refactor component styles to use tokens

Go through each `*.module.scss` file and replace hardcoded hex values with the
corresponding `var(--color-*)` token:

- `Header/header.module.scss`
- `Hero/hero.module.scss`
- `ValueStrip/valueStrip.module.scss`
- `Categories/categories.module.scss`
- `BrandCards/brandCards.module.scss`
- `Brands/brands.module.scss`
- `OrderSteps/orderSteps.module.scss`
- `QuoteRequest/quoteRequest.module.scss`
- `Coverage/coverage.module.scss`
- `Footer/footer.module.scss`

Add any new tokens as needed if a component uses a color that doesn't map
cleanly to the base palette (e.g. gradient overlays in `Coverage`).

### 5. Global setup

- Import `src/styles/themes.css` in `src/main.jsx` (before `index.css`).
- Add `body { background: var(--color-bg); color: var(--color-text); transition: background 0.2s ease, color 0.2s ease; }` for a smooth switch.

### 6. Testing

- Manually verify every section (Header, Hero, ValueStrip, Categories,
  BrandCards, Brands, OrderSteps, QuoteRequest, Coverage, Footer) in both
  themes for contrast/readability.
- Verify toggle state persists after page reload.
- Verify default (first-visit, no localStorage) still renders dark mode
  identically to today.
- Run `npm run lint`.

## Rollout order

1. Add theme tokens CSS + ThemeContext/hook (no visual change yet, dark stays default).
2. Add ThemeToggle component, wire into Header.
3. Migrate components one-by-one to use tokens, verifying dark mode is
   pixel-identical to current state after each migration.
4. Tune the light palette for contrast/accessibility.
5. Final pass: full manual QA in both themes.

## Open questions / decisions needed

- Should the toggle also respect system preference (`prefers-color-scheme`) on
  first visit, or always default to dark until the user explicitly switches?
- Any brand guideline for the light-mode palette, or is it open to design
  discretion (dark navy → white/light gray backgrounds, keep red accent)?
