/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#2596be',
        'secondary-blue': '#56cee1',
        'blue': {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#2596be',
          600: '#2596be',
          700: '#1e7a9a',
          800: '#1e7a9a',
          900: '#0c4a6e',
        },
        'cyan': {
          50: '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#56cee1',
          600: '#56cee1',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
        }
      },
    },
  },
  plugins: [],
}
