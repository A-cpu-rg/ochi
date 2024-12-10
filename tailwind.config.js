/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        lineGrow: {
          '0%': { width: '0%' },  // Start at 0% width
          '100%': { width: '100%' }  // End at 100% width
        },
        blast: {  
          '0%': {
            opacity: 0,
            transform: 'scale(0.5)'
          },
          '50%': {
            opacity: 1,
            transform: 'scale(1.2)'
          },
          '100%': {
            opacity: 1,  
            transform: 'scale(1)'  
          }
        }
      },
      animation: {
        lineGrow: 'lineGrow 2s ease-in-out forwards',
        blast: 'blast 1.5s ease-out forwards',  
      },
    },
  },
  plugins: [],
}
