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
        DEFAULT: VAR.CONTAINER_PADDING_XS,
        md: VAR.CONTAINER_PADDING_MD,
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
      width: {
        'screen-4xl': VAR.BREAKPOINTS_4XL,
      },
      gridTemplateColumns: {
        'category-item': 'repeat(6, minmax(0, 275px))',
      },
      maxWidth: {
        'cards-product-slider-container-xs': `calc(${VAR.BREAKPOINTS_4XL} + (${VAR.PADDING_CARD_XS} * 2))`,
        'cards-product-slider-container-lg': `calc(${VAR.BREAKPOINTS_4XL} + (${VAR.PADDING_CARD_LG} * 2))`,
        'cards-product-slider-container-2xl': `calc(${VAR.BREAKPOINTS_4XL} + (${VAR.PADDING_CARD_2XL} * 2))`,
      },
      spacing: {
        'padding-x-card-product-xs': VAR.PADDING_CARD_XS,
        'padding-x-card-product-lg': VAR.PADDING_CARD_LG,
        'padding-x-card-product-2xl': VAR.PADDING_CARD_2XL,

        'padding-x-slider-container-xs': `calc(${VAR.CONTAINER_PADDING_XS} - ${VAR.PADDING_CARD_XS})`,
        'padding-x-slider-container-md': `calc(${VAR.CONTAINER_PADDING_MD} - ${VAR.PADDING_CARD_XS})`,
        'padding-x-slider-container-lg': `calc(${VAR.CONTAINER_PADDING_MD} - ${VAR.PADDING_CARD_LG})`,
        'padding-x-slider-container-2xl': `calc(${VAR.CONTAINER_PADDING_MD} - ${VAR.PADDING_CARD_2XL})`,
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
        red: '#CF0000',
        'background-primary': '#F1F1F1',
        'color-gray': '#B6B6B6',
      },
    },
  },
  // eslint-disable-next-line global-require
  plugins: [require('@tailwindcss/line-clamp')],
};
