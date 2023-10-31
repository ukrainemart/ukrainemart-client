import type { Config } from 'tailwindcss';

export default <Partial<Config>>{
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '15px',
        xl: '20px',
      },
    },
    screens: {
      xs: '320px',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      '2xl': '1400px',
      '3xl': '1600px',
      '4xl': '1780px',
    },
    fontFamily: {
      montserrat: ['Montserrat', 'sans'],
      namu: ['Namu'],
    },
    extend: {
      opacity: {
        hover: '60%',
      },
      screens: {
        'is-hover': { raw: '(hover: hover)' },
      },
    },
  },
  plugins: [],
};
