/* eslint-disable import/no-default-export */
export default {
  content: ['./components/**/*.{js,jsx,ts,tsx}'],
  corePlugins: {
    // preflight: false
  },
  plugins: [],
  theme: {
    extend: {
      borderRadius: {
        '41xl': '60px',
        '81xl': '100px',
        sm: '10px',
      },
      colors: {
        background: '#fff',
        black: '#000',
        white: '#fff',
      },
      fontFamily: {},
      spacing: {},
    },
    fontSize: {
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
      '7xl': '4.5rem',
      '8xl': '6rem',
      '9xl': '8rem',
      base: '1rem',
      lg: '1.125rem',
      md: '1rem',
      sm: '0.875rem',
      small: '0.625rem',
      xl: '1.25rem',
      xs: '0.75rem',
    },
    screens: {
      lg: '680px',
      md: '420px',
      sm: '380px',
      tablet: '1024px',
    },
  },
}
