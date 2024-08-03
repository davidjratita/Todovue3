/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0px 4px 16px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.08)',
      },
      colors: {
        customColor1: '#003A61', // Custom color code
        customColor2: '#38A3A5', // Another custom color code
        customColor3: '#38A3A530', // Another custom color code
        customColor4: '#E0EEF0', // Another custom color code
      },
      borderRadius: {
        'custom-sm': '4px',
        'custom-md': '8px',
        'custom-lg': '16px',
        'custom-xl': '32px',
        'custom-2xl': '64px',
      }
    },
  },
  plugins: [],
}

