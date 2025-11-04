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
