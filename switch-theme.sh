#!/bin/bash

# Theme Switcher for Megabite Website
# Usage: ./switch-theme.sh [theme-number]
# Example: ./switch-theme.sh 3

if [ -z "$1" ]; then
  echo "🎨 Megabite Theme Switcher"
  echo ""
  echo "Usage: ./switch-theme.sh [1-7]"
  echo ""
  echo "Available themes:"
  echo "  1 - Navy + Coral (Current)"
  echo "  2 - Pink (Original)"
  echo "  3 - Forest Green + Gold"
  echo "  4 - Bold Red + Charcoal"
  echo "  5 - Purple + Teal"
  echo "  6 - Orange + Indigo"
  echo "  7 - Sky Blue + Slate"
  echo ""
  exit 1
fi

THEME=$1

case $THEME in
  1)
    echo "🔵 Switching to Navy + Coral theme..."
    PRIMARY="primary: {
  50: '#fef2f2',
  100: '#fee2e2',
  200: '#fecaca',
  300: '#fca5a5',
  400: '#f87171',
  500: '#ef5350',
  600: '#dc2626',
  700: '#b91c1c',
  800: '#991b1b',
  900: '#7f1d1d',
},"
    SECONDARY="secondary: {
  50: '#f0f9ff',
  100: '#e0f2fe',
  200: '#bae6fd',
  300: '#7dd3fc',
  400: '#38bdf8',
  500: '#0ea5e9',
  600: '#0284c7',
  700: '#0369a1',
  800: '#075985',
  900: '#0c4a6e',
},"
    ;;
  2)
    echo "💗 Switching to Pink theme..."
    PRIMARY="primary: {
  50: '#fdf2f8',
  100: '#fce7f3',
  200: '#fbcfe8',
  300: '#f9a8d4',
  400: '#f472b6',
  500: '#ec4899',
  600: '#db2777',
  700: '#be185d',
  800: '#9d174d',
  900: '#831843',
},"
    SECONDARY="secondary: {
  50: '#fdf2f8',
  100: '#fce7f3',
  200: '#fbcfe8',
  300: '#f9a8d4',
  400: '#f472b6',
  500: '#ec4899',
  600: '#db2777',
  700: '#be185d',
  800: '#9d174d',
  900: '#831843',
},"
    ;;
  *)
    echo "❌ Invalid theme number. Choose 1-7."
    exit 1
    ;;
esac

echo "✅ Theme switched! Run 'npm run build' to see changes."
echo "📝 See THEMES.md for all 7 theme options"
