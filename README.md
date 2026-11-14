# Zentro Blocks

A WordPress plugin containing a collection of 15 highly interactive, customizable, and premium Gutenberg blocks.

## Blocks Included

| Block | Description | Namespace |
|---|---|---|
| **Tabs Block** | Switchable tab panels with ARIA keyboard navigation. | `zentro-blocks/tabs-block` |
| **Popup Block** | Modal dialog with focus trap, ESC key close, and overlay click close. | `zentro-blocks/popup-block` |
| **Animated Counter** | Count-up animation on scroll into view using Intersection Observer. | `zentro-blocks/animated-counter` |
| **CTA Banner** | Call-to-action banner supporting stacked or inline layouts. | `zentro-blocks/cta-banner-block` |
| **Accordion Block** | Collapsible detail panels with smooth CSS height transitions and ARIA accessibility. | `zentro-blocks/accordion-block` |
| **Pricing Card** | Clean, high-converting product/service pricing tables with badge highlighting. | `zentro-blocks/pricing-card-block` |
| **Container Block** | Flexible section wrapper with grid/flex layouts, custom backgrounds, and shape dividers. | `zentro-blocks/container-block` |
| **Progress Tracker** | Dynamic circular or horizontal bar showing animated progress indicators. | `zentro-blocks/progress-tracker` |
| **Image Hotspot** | Interactive pins placed on an image with rich descriptive tooltips. | `zentro-blocks/image-hotspot` |
| **Advanced Map** | Premium maps with OpenStreetMap and Google Maps support with viewport lazy-loading. | `zentro-blocks/advanced-map-block` |
| **Timeline & Roadmap** | Beautiful interactive vertical/horizontal chronological milestone roadmap block. | `zentro-blocks/timeline-roadmap` |
| **Before/After Image Comparison** | Interactive slider to compare before and after images side-by-side or stacked. | `zentro-blocks/image-comparison` |
| **Testimonials Carousel** | Interactive review and testimonial slide carousel layout with star ratings and custom layouts. | `zentro-blocks/testimonials-carousel` |
| **Button Block** | High-performance interactive call-to-action button with custom sizes, hover highlights, and active animations. | `zentro-blocks/button-block` |
| **Box Card Block** | Premium feature grid card supporting badge labels, media icons, custom borders, and dynamic hover float effects. | `zentro-blocks/box-card-block` |

## Requirements

- WordPress 6.5+
- PHP 7.4+
- Node.js 18+ (for development)

## Development Setup

To modify blocks and rebuild assets:

```bash
npm install
npm run build      # production build
npm run start      # watch mode
```

Note: If running on Windows and PowerShell script execution is restricted, run scripts via cmd (e.g. `npm.cmd run build`).

## Installation

1. Run `npm run build` to compile assets into `build/`
2. Zip the entire plugin folder (excluding `node_modules` and source files if desired)
3. Upload via **Plugins → Add New → Upload Plugin**
4. Activate **Zentro Blocks**

## Plugin Structure

```
zentro-blocks/
├── zentro-blocks.php        # Main plugin file
├── package.json
├── webpack.config.js          # Multi-block entry points
├── readme.txt                 # WordPress.org metadata
├── README.md                  # Developer instructions
├── src/
│   ├── tabs-block/
│   │   ├── block.json
│   │   ├── index.js           # Editor JS
│   │   ├── view.js            # Frontend JS
│   │   ├── render.php         # Server-side render template
│   │   ├── editor.scss        # Editor styles
│   │   └── style.scss         # Frontend styles
│   ├── accordion-block/
│   │   └── ... (same structure)
│   └── ... (other blocks)
│── build/                     # Compiled outputs
```

## Technical Notes

- `apiVersion: 3` on all blocks.
- `save: () => null` — all blocks use server-side rendering via `render.php`.
- Frontend JS uses clean, vanilla JS (no jQuery or heavy library dependencies).
- Textdomain `'zentro-blocks'` standardized across all blocks, code blocks, and block.json files.
- Focus trap listener leaks resolved on popups.
- Accordion height transitions achieved using modern CSS Grid auto-sizing.
- GPL-2.0-or-later licensed.
