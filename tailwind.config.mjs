/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Coral Pink + Brown theme (Theme 13)
        primary: {
          50: '#fff5f7',
          100: '#ffe3e8',
          200: '#ffc7d1',
          300: '#ff9fb0',
          400: '#ff6b8a',
          500: '#ff6b6b',  // Coral Pink
          600: '#f43f5e',
          700: '#e11d48',
          800: '#be123c',
          900: '#9f1239',
        },
        secondary: {
          50: '#fdf8f6',
          100: '#f2e8e5',
          200: '#eaddd7',
          300: '#d4b5a8',
          400: '#b8917f',
          500: '#9c6644',  // Rich Brown
          600: '#8b5a3c',
          700: '#6f4518',
          800: '#5c3610',
          900: '#3e2723',
        },
        // Semantic accent colors for data visualization and system categorization
        // These maintain consistent meaning across the site:
        accent: {
          // Labor/Savings/Positive metrics
          labor: {
            50: '#f0fdf4',
            100: '#dcfce7',
            500: '#22c55e',  // green-500
            600: '#16a34a',
            700: '#15803d',
          },
          // Inventory/Food/Operations
          inventory: {
            50: '#eff6ff',
            100: '#dbeafe',
            500: '#3b82f6',  // blue-500
            600: '#2563eb',
            700: '#1d4ed8',
          },
          // CRM/Revenue/Customer-facing
          customer: {
            50: '#faf5ff',
            100: '#f3e8ff',
            500: '#a855f7',  // purple-500
            600: '#9333ea',
            700: '#7e22ce',
          },
          // Accounting/Financial/Fees
          financial: {
            50: '#fff7ed',
            100: '#ffedd5',
            500: '#f97316',  // orange-500
            600: '#ea580c',
            700: '#c2410c',
          },
        },
        // To revert to pink, uncomment this and comment out the above:
        /*
        primary: {
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
        },
        */
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
