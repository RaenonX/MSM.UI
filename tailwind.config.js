/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      colors: {
        bull: {
          50: '#e0f2f1',
          100: '#b2dfdb',
          200: '#80cbc3',
          300: '#4db6ab',
          400: '#26a699',
          500: '#009687',
          600: '#00897a',
          700: '#00796a',
          800: '#00695b',
          900: '#004d3f',
        },
        bear: {
          50: '#ffebee',
          100: '#ffcdd2',
          200: '#ef9a9a',
          300: '#e57373',
          400: '#ef5350',
          500: '#f44236',
          600: '#e53835',
          700: '#d32e2f',
          800: '#c62728',
          900: '#b71b1c',
        },
      },
    },
  },
};
