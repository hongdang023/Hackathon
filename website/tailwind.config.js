/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#f26625',
          hover: '#d5531b',
        },
        foreground: '#111827',
        secondary: '#f9fafb',
        border: '#e5e7eb',
        muted: {
          DEFAULT: '#f3f4f6',
          foreground: '#6b7280',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
