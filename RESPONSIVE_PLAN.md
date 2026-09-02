# Responsive Layout — Implementation Plan

## Current state

- `index.html` already has the correct `<meta name="viewport" content="width=device-width, initial-scale=1.0">`.
- Styling is SCSS Modules, one file per component. Some components already have
  a single desktop-first `@media (max-width: ...)` breakpoint:
  `Hero` (768px), `Categories` (768px), `BrandCards` (900px), `Brands` (640px),
  `QuoteRequest` (900px), `Coverage` (900px).
- `Header`, `ValueStrip`, and `Footer` have **no** responsive handling at all.
- `Header` is the biggest risk: logo + 6 nav links + CTA button + theme toggle
  all sit in one flex row with no wrapping — this breaks (overlaps/overflows)
  well before tablet width, and there is no mobile navigation pattern (no
  hamburger menu) today.
- No shared breakpoint values exist — each component hardcodes its own
  `max-width` numbers, inconsistently (640 / 768 / 900).
- No global `box-sizing: border-box` reset — padding-heavy sections
  (`padding: 56px 40px`, etc.) can cause horizontal overflow on narrow screens.

## Goal

Make every section usable and visually correct from ~360px (small phones) up
through desktop, with a real mobile navigation pattern in the header.

## Breakpoint scale

Keep the existing desktop-first (`max-width`) convention already used in the
codebase, but standardize the values via a shared Sass mixin partial so every
component uses the same breakpoints instead of inventing new ones:

```scss
// src/styles/_breakpoints.scss
@mixin tablet { @media (max-width: 1024px) { @content; } }
@mixin mobile { @media (max-width: 768px)  { @content; } }
@mixin small  { @media (max-width: 480px)  { @content; } }
```

Each `*.module.scss` adds `@use "../../styles/breakpoints" as *;` at the top
and wraps rules in `@include tablet { }` / `@include mobile { }` / `@include small { }`
instead of ad hoc `@media` blocks.

- **tablet (≤1024px):** header switches to hamburger nav; multi-column grids
  drop from 4 → 2 columns where not already handled.
- **mobile (≤768px):** stacked/single-column layouts, reduced font sizes and
  section padding.
- **small (≤480px):** final tightening — smaller hero height, 1-column grids
  everywhere, full-width buttons where useful.

## Global changes

- `src/index.css`: add `*, *::before, *::after { box-sizing: border-box; }`
  and `img, svg { max-width: 100%; display: block; }` to prevent overflow.
- Reduce the global section side-padding (`40px`) on mobile — most components
  share the same `padding: Npx 40px` pattern, so this becomes part of each
  component's `@include mobile` block (`padding-inline: 20px`).

## Per-component plan

### Header (biggest change — needs a mobile nav)
- Add a hamburger toggle button (visible only ≤1024px) and mobile-menu state
  (`useState`) in `Header.jsx`.
- ≤1024px: hide the horizontal `<ul>` nav by default; hamburger click opens it
  as a dropdown/drawer panel anchored under the header (`position: absolute`,
  full width, themed background, stacked links). Add a click-outside/backdrop
  to close it, and close on link click.
- CTA button and theme toggle stay visible in the top bar at all sizes;
  only the nav links move into the drawer.
- ≤480px: shrink logo height, reduce header horizontal padding.

### Hero
- Already stacks content at 768px — keep, but add an `@include small` pass:
  shorter hero height (~420px), smaller title/subtitle font sizes, smaller
  arrow buttons (32px), tighter content padding so text doesn't crowd the
  edges on narrow phones.

### ValueStrip
- Currently a single flex row of 4 items with no wrapping — add
  `flex-wrap: wrap` at `@include tablet` (2×2 grid) and full single column at
  `@include small`.

### Categories
- Grid already wraps to 2 columns at 768px — add `@include small` to drop to
  a single column and reduce card height.

### BrandCards ("why choose us" + video)
- Already stacks media/content at 900px — add `@include mobile`/`@include small`
  pass for the `.features` row (3 feature boxes): wrap to 2+1 or stack to a
  single column, and shrink the media height further on small screens.

### Brands
- Cards already stack at 640px — no major change, just confirm padding/logo
  box sizing looks right at `@include small`.

### OrderSteps (timeline — currently has zero responsive handling)
- 5 steps in one row with a connecting line will not fit tablet/mobile widths.
- `@include tablet`: wrap steps into 2 rows (flex-wrap), hide or adapt the
  connecting `::before` line (it assumes a single row).
- `@include mobile`: switch the timeline to a vertical stacked list (column
  direction), replacing the horizontal connector with a vertical one (or
  removing it for simplicity).

### QuoteRequest
- Already stacks info/form panels at 900px — add `@include mobile` tuning for
  the two-column `.features`-style reasons list (already single column, fine)
  and `@include small` for form input/button sizing (full-width submit button).

### Coverage
- Already stacks `points`/`mapCard` at 900px and the CTA banner at the same
  breakpoint — add `@include small`: reduce banner padding, stack `.cta`
  button under text with `width: 100%`.

### Footer (currently zero responsive handling)
- Three-column `justify-content: space-between` row → wrap to a stacked,
  centered column layout at `@include mobile`, with consistent gap spacing
  between the logo/brand/categories blocks.

## Rollout order

1. Add `src/styles/_breakpoints.scss` and the global `index.css` reset.
2. Fix `Header` (hamburger nav) — highest risk, test first.
3. Fix `OrderSteps` and `Footer` (currently fully non-responsive).
4. Sweep remaining components to adopt the shared mixins and add the missing
   `@include small` pass where only one breakpoint exists today.
5. Manual QA at 1440 / 1024 / 768 / 480 / 360px widths for every section, in
   both dark and light theme.

## Testing

- Resize the running dev app (or use browser device emulation) at the
  breakpoints above for each of the 10 sections.
- Verify the header hamburger menu opens/closes, closes on link click, and
  no horizontal scrollbar appears at any width.
- Re-run `npm run lint` after the JS changes to `Header.jsx`.
