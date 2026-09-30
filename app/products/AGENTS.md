# Products page maintenance

- `/products` is linked from the footer's Company column. Keep Appnary itself out of the collection; retain CloudPloy, SkaleAgents, Crontinel, Toolblip, AmazingPlugins, and harun.dev in that order.
- The approved reference is `https://binarylabssoft.com/products`. Its source is `/Users/rayhan/Code/binary-labs-website`. Reuse the real product logos and artwork components; do not substitute generic icons or rewrite approved product copy without a request.
- Local brand assets live in `public/products/`. Preserve their original colors and suitable logo backings.
- Match Appnary's own fonts and theme. Use shared `--font-sans`, `--font-mono`, background, foreground, surface, border, and aqua accent tokens from `app/globals.css`. Do not restore the reference's Inter font, cream background, or orange theme.
- `products.css` must stay scoped to `.binary-products`. Artwork backgrounds and panels must follow the existing `data-theme` system; do not add another theme state.
- Verify the actual light/dark toggle on desktop and mobile, including cards, artwork, search, filters, and overflow. Wait for lazy logos to load before judging image failures; image decoding may stall in hidden tabs.
- A passing build or merged PR is not a deployment. Confirm Railway's status for the exact merge commit, then verify the canonical public page and assets.
