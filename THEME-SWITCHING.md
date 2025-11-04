# Theme Switching Guide

Your Megabite website now supports two color themes:

## Current Theme: Navy + Coral (Matches Logo)
- **Primary Color**: Coral/Salmon (#ef5350)
- **Secondary Color**: Navy Blue (#0c4a6e)
- Matches the colors in your logo

## Original Theme: Pink
- **Primary Color**: Pink (#ec4899)
- Clean, modern pink aesthetic

---

## How to Switch Back to Pink Theme

### Option 1: Quick Switch (Recommended)
Edit `tailwind.config.mjs`:

1. **Comment out** lines 7-31 (Navy + Coral theme)
2. **Uncomment** lines 33-46 (Pink theme)

```javascript
// Comment out this section:
/*
primary: {
  50: '#fef2f2',
  ...
  900: '#7f1d1d',
},
secondary: {
  ...
},
*/

// Uncomment this section:
primary: {
  50: '#fdf2f8',
  100: '#fce7f3',
  ...
  900: '#831843',
},
```

3. Run `npm run build` to rebuild
4. Deploy with `npm run deploy`

---

## Current Color Usage

All colors now use the `primary-*` and `secondary-*` classes:
- `primary-500` = Main brand color (Coral or Pink depending on theme)
- `primary-600` = Darker shade for hover states
- `secondary-900` = Navy blue (only in Navy theme)

This means switching themes only requires changing the Tailwind config!

---

## Files Modified
- `tailwind.config.mjs` - Theme colors
- All `.astro` files - Changed from `pink-*` to `primary-*` classes
- `src/styles/themes.css` - CSS variable definitions (optional, not currently used)

---

## Need Help?
If you want to try other colors or create a custom theme, just edit the color values in `tailwind.config.mjs`.
