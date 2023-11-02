import type { Config } from 'tailwindcss';

import VAR from './global/variables';

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
        DEFAULT: '20px',
        md: '40px',
      },
    },
    screens: {
      xs: VAR.BREAKPOINTS_XS,
      sm: VAR.BREAKPOINTS_SM,
      md: VAR.BREAKPOINTS_MD,
      lg: VAR.BREAKPOINTS_LG,
      xl: VAR.BREAKPOINTS_XL,
      '2xl': VAR.BREAKPOINTS_2XL,
      '3xl': VAR.BREAKPOINTS_3XL,
      '4xl': VAR.BREAKPOINTS_4XL,
    },
    fontFamily: {
      montserrat: ['Montserrat', 'sans'],
      namu: ['Namu'],
    },
    extend: {
      maxWidth: {
        'cards-product-slider-container':`calc(${VAR.BREAKPOINTS_4XL} + ${})`,
      },
      spacing: {
        'padding-card-product-xs': VAR.PADDING_CARD_XS,
        'padding-card-product-lg': VAR.PADDING_CARD_LG,
        'padding-card-product-xl': VAR.PADDING_CARD_XL,
      },
      opacity: {
        hover: '60%',
      },
      transitionDuration: {
        hover: '200ms',
      },
      screens: {
        'is-hover': { raw: '(hover: hover)' },
      },
      colors: {
        test: '#E33629',
        black: '#111111',
        'background-primary': '#F1F1F1',
        'color-gray': '#B6B6B6',
      },
    },
  },
  // eslint-disable-next-line global-require
  plugins: [require('@tailwindcss/line-clamp')],
};
