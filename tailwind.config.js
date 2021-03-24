module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito'],
      },
      height: {
        screen90: '90vh',
        screen80: '80vh',
        screen70: '70vh',
        screen60: '60vh',
      },
      keyframes: {
        upDown: {
          '0%, 100%': { transform: 'translate(0, -1rem)' },
          '50%': { transform: 'translate(0, 0rem)' },
        },
        bgUp: {
          '0%, 100%': { transform: 'translate(0, 0rem)' },
          '50%': { transform: 'translate(0, 1rem)' },
        },
        bgDown: {
          '0%, 100%': { transform: 'translate(0, 1rem)' },
          '50%': { transform: 'translate(0, 0rem)' },
        },
        navDown: {
          '0%': { transform: 'translate(0, -4rem)' },
          '100%': { transform: 'translate(0, 0rem)' },
        },
        modalDown: {
          '0%': { transform: 'translate(-50%, -40%)', opacity: '0%' },
          '100%': { transform: 'translate(-50%, -50%)', opacity: '100%' },
        },
      },
      animation: {
        upDown: 'upDown 2s ease-in-out infinite',
        bgUp: 'bgUp 15s ease-in-out infinite',
        bgDown: 'bgDown 15s ease-in-out infinite',
        navDown: 'navDown .2s ease-out',
        modalDown: 'modalDown .3s ease-out',
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '2rem',
        '3xl': '3rem',
        '4xl': '4rem',
        '5xl': '5rem',
      },
      scale: {
        165: '1.65',
        170: '1.70',
        175: '1.75',
        200: '2',
      },
      rotate: {
        20: '20deg',
        25: '25deg',
      },
      fontSize: {
        '12xl': '12rem',
        '15xl': '15rem',
        '20xl': '20rem',
      },
    },
  },
  variants: {
    extend: { borderWidth: ['hover', 'focus'] },
  },
  plugins: [],
};
