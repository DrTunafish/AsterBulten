/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Futuristic astronomy theme - strict palette
        cosmos: {
          dark: '#0B0F19', // Deep navy background
          card: '#0F1422', // Card background (slightly lighter)
          text: '#E6EEF3', // Soft white with bluish tone
          muted: '#98A8C8', // Grey-blue for secondary text
          gold: '#FFD700', // Golden yellow (star glow / hover)
          neon: '#00C9FF', // Bright turquoise (neon glow)
        },
      },
      fontFamily: {
        heading: ['Montserrat', 'Poppins', 'sans-serif'],
        body: ['Inter', 'Lato', 'sans-serif'],
      },
      backgroundImage: {
        stars: "url('/stars-pattern.svg')",
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
    },
  },
  plugins: [],
}
