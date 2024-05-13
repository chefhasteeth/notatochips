/** @type {import('tailwindcss').Config} */
export default {
  content: ['./app/views/**/*.erb', './app/frontend/**/*.vue'],
  theme: {
    extend: {
      animation: {
        handwavy: 'handwavy 3.5s linear 1',
      },

      fontFamily: {
        'sans': ['Inter'],
      },

      keyframes: {
        handwavy: {
          '0%, 60%, 100%': { transform: 'rotate(0deg)' },
          '10%, 30%': { transform: 'rotate(18deg)' },
          '20%': { transform: 'rotate(-12deg)' },
          '40%': { transform: 'rotate(-6deg)' },
          '50%': { transform: 'rotate(10deg)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
