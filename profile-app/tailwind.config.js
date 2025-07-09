// tailwind.config.js
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      scale: {
        500: '5',
      },
      opacity: {
        12: '0.12',
        15: '0.15',
        20: '0.2',
      },
 
       fontFamily: {
        poppins: ['Poppins', 'sans-serif'], 
        lora: ['Lora', 'serif']// custom font name
      },
        keyframes: {
        waterBalloon: {
          '0%, 100%': {
            borderRadius: '50%',
            transform: 'scale(1)',
          },
          '50%': {
            borderRadius: '60% 40% 55% 45% / 50% 60% 40% 50%',
            transform: 'scale(1.1)',
          },
        },
      },
      animation: {
        waterBalloon: 'waterBalloon 0.6s ease-in-out',
      },
    },
  },
  plugins: [],
}
