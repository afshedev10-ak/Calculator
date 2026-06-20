# Glass Calculator

A clean, fully responsive calculator built with vanilla HTML, CSS, and JavaScript — featuring a glassmorphism UI with a light purple / lilac theme and a dark mode toggle.


## 🔗 Live Demo
[View Project on Netlify](https://afshedev10-calculator.netlify.app)


## Preview

| Light Theme | Dark Theme |

## Features

- **Glassmorphism design** — frosted-glass calculator shell with backdrop blur, soft borders, and layered ambient color blobs
- **Light & dark mode** — toggle button (sun/moon icon) in the top-right of the calculator card, with the choice saved to `localStorage` so it persists across visits
- **Light purple theme** — lilac/orchid backdrop, purple operator and equals buttons, soft pink AC/DEL buttons
- **Dark theme** — deep indigo/charcoal glass with glowing mint and violet accents
- **Full keyboard support** — number keys, `+ - * /`, `Enter`/`=` to calculate, `Backspace` to delete, `Escape`/`Delete` to clear
- **Operation chaining** — supports expressions like `5 + 3 * 2` by resolving the pending operation before applying the next one
- **Inline error handling** — division by zero shows a non-blocking error banner (no `alert()`) that auto-dismisses after 2 seconds
- **Accurate results** — rounds to 10 significant digits to avoid floating-point artifacts (e.g. `0.1 + 0.2`)
- **Fully responsive** — tuned breakpoints for small phones, large phones, tablets, and large desktop screens
- **Accessible** — ARIA labels and live regions on the display, error banner, and theme toggle; visible focus states; respects `prefers-reduced-motion`

## Demo

Open `index.html` in any modern browser — no build step or server required.

## Project Structure

```
.
├── index.html      # Markup: calculator layout, display, button grid, theme toggle
├── style.css       # Styling: glassmorphism design, light/dark theme tokens, responsive rules
├── script.js       # Logic: calculator engine, keyboard support, and theme toggle
└── README.md       # Project documentation
```

## Tech Stack

- **HTML5** — semantic, accessible markup
- **CSS3** — custom properties (CSS variables) for theming, `backdrop-filter` for the glass effect, CSS Grid for the button layout
- **Vanilla JavaScript** — no frameworks or dependencies for the calculator logic
- **[Bootstrap 5.3.3](https://getbootstrap.com/)** — loaded via CDN (base reset/utilities only; all custom visuals are hand-written)
- **Google Fonts** — [Outfit](https://fonts.google.com/specimen/Outfit) for UI text, [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) for the numeric display

## How It Works

### Calculator logic (`script.js`)
The calculator tracks a `firstNumber`, `operator`, and `secondNumber` as separate pieces of state rather than evaluating a raw string, which avoids `eval()` and makes chained operations predictable:

- `appendNumber()` / `appendDecimal()` build up the current operand
- `setOperator()` records the operator and, if a previous operation is already pending, silently resolves it first (enables chaining)
- `calculate()` performs the arithmetic and rounds the result to 10 significant digits
- `clearDisplay()` / `deleteLast()` handle full and partial resets
- A `keydown` listener maps the physical keyboard to the same functions

### Theming (`style.css` + `script.js`)
Both themes are defined as CSS custom properties on `:root` (light, default) and `[data-theme="dark"]` (dark override). The toggle button in `script.js`:

1. Flips the `data-theme` attribute on `<html>`
2. Updates the toggle's `aria-pressed` / `aria-label` state
3. Saves the chosen theme to `localStorage`

An inline script in the `<head>` of `index.html` reads the saved theme (or falls back to the OS's `prefers-color-scheme`) and applies it **before first paint**, so there's no flash of the wrong theme on load.

## Color Palette

### Light theme (default)
| Token | Value | Used for |
|---|---|---|
| `--bg-1` | `#f1e9ff` | Lilac mist background |
| `--bg-2` | `#e8defc` | Soft purple background |
| `--bg-3` | `#fbf0ff` | Orchid white background |
| `--accent` / `--accent-deep` | `#a78bfa` / `#8b5cf6` | Operator & equals buttons |
| `--func` / `--func-deep` | `#f0a8d8` / `#e069b4` | AC & DEL buttons |
| `--ink` | `#3c2f54` | Primary text |

### Dark theme
| Token | Value | Used for |
|---|---|---|
| `--bg-1` | `#1a1530` | Deep indigo background |
| `--bg-2` | `#14202e` | Charcoal blue background |
| `--accent` / `--accent-deep` | `#7df9d8` / `#34e0bb` | Glowing mint operator & equals buttons |
| `--func` / `--func-deep` | `#c9a8ff` / `#a571f5` | Glowing violet AC & DEL buttons |
| `--ink` | `#ede9fb` | Primary text |

## Browser Support

Works in all modern browsers that support `backdrop-filter` (Chrome, Edge, Safari, Firefox 103+). On unsupported browsers the glass panels will render as solid translucent backgrounds without the blur effect — layout and functionality are unaffected.

## License

Free to use for personal or educational projects.
