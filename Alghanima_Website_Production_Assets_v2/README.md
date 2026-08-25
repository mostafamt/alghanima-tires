# Alghanima Website — Production Image Assets v2

Final high-quality assets for the approved V2 website direction.

## Contents

- 10 website image roles: 3 slider heroes, 4 category cards, 1 About image, and 2 supporting slider images.
- 3 primary logos: Alghanima, DRC, and Mitas.
- Alghanima is supplied in four complete Figma lockups: Arabic Light, Arabic Dark, English Light, and English Dark.

## Recommended implementation

- Use files inside `webp/` in production.
- Keep `source-png/` as the uncompressed visual masters.
- Desktop hero images are `2880 × 1300` and designed with copy-safe negative space on the left.
- Mobile hero images are dedicated `1080 × 1440` compositions with copy-safe space at the top. Do not crop the desktop hero for mobile.
- Category images are `1200 × 1120` (2× export for a `600 × 560` UI slot).
- Category cards and supporting slider crops are shared between desktop and mobile; they do not need duplicated mobile files.
- The About image includes a landscape responsive master and a dedicated tall crop.
- Use `object-fit: cover` and `object-position: center` unless the manifest states otherwise.
- Do not bake text, gradients, buttons, arrows, or logos into the photography; keep them as HTML/CSS layers.

## Folder map

- `webp/hero/` — three V2 slider backgrounds.
- `webp/mobile/hero/` — three dedicated mobile slider backgrounds.
- `webp/mobile/about/` — dedicated mobile About crop.
- `webp/categories/` — passenger, light-truck, heavy-truck, and agriculture cards.
- `webp/about/` — landscape master and tall About-section crop.
- `webp/insets/` — slider supporting crops.
- `webp/logos/alghanima/` — the four complete Figma lockups.
- `webp/logos/brands/` — DRC and Mitas brand panels.
- `source-png/` — uncompressed photography and logo masters.

## Quality notes

- WebP photography: quality 95, metadata stripped.
- Logos: lossless WebP exported from the approved Figma artwork; no AI logo generation.
- No text, watermark, or vehicle-brand mark is embedded in the new photography.
