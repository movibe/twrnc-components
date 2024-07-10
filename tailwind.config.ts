/* eslint-disable import/no-default-export */
export default {
  content: ['./src/**/*.{ts,tsx}'],
  darkMode: ['class', '[data-mode="dark"]'],
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
        primary: {
          DEFAULT: '#FF5A5F',
          foreground: '#fff',
          '80': 'rgba(255, 90, 95, 0.8)',
        },
        secondary: {
          DEFAULT: '#00A699',
          foreground: '#fff',
          '80': 'rgba(0, 166, 153, 0.8)',
        },
        destructive: {
          DEFAULT: '#FF5A5F',
          foreground: '#fff',
          '80': 'rgba(255, 90, 95, 0.8)',
        },
        background: '#fff',
        'dark-background': '#333',
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
