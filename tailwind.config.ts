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
      xs: `${VAR.BREAKPOINTS_XS}px`,
      sm: `${VAR.BREAKPOINTS_SM}px`,
      md: `${VAR.BREAKPOINTS_MD}px`,
      lg: `${VAR.BREAKPOINTS_LG}px`,
      xl: `${VAR.BREAKPOINTS_XL}px`,
      '2xl': `${VAR.BREAKPOINTS_2XL}px`,
      '3xl': `${VAR.BREAKPOINTS_3XL}px`,
      '4xl': `${VAR.BREAKPOINTS_4XL}px`,
    },
    fontFamily: {
      montserrat: ['Montserrat', 'sans'],
      namu: ['Namu'],
    },
    extend: {
      width: {
        'screen-4xl': `${VAR.BREAKPOINTS_4XL}px`,
      },
      height: {
        'header-sm': `calc(100vh - ${VAR.HEADER_SM})`,
        'header-lg': `calc(100vh - ${VAR.HEADER_LG})`,
        'header-4xl': `calc(100vh - ${VAR.HEADER_4XL})`,

        'mobile-menu': `${VAR.MOBILE_BOTTOM_MENU_HEIGHT}`,
      },
      gridTemplateColumns: {
        'category-item': 'repeat(6, minmax(0, 275px))',
      },
      maxWidth: {
        'cards-product-slider-container-xs': `calc(${VAR.BREAKPOINTS_4XL}px + (${VAR.PADDING_CARD_XS} * 2))`,
        'cards-product-slider-container-lg': `calc(${VAR.BREAKPOINTS_4XL}px + (${VAR.PADDING_CARD_LG} * 2))`,
        'cards-product-slider-container-2xl': `calc(${VAR.BREAKPOINTS_4XL}px + (${VAR.PADDING_CARD_2XL} * 2))`,
      },
      spacing: {
        'padding-x-card-product-xs': VAR.PADDING_CARD_XS,
        'padding-x-card-product-lg': VAR.PADDING_CARD_LG,
        'padding-x-card-product-2xl': VAR.PADDING_CARD_2XL,

        'padding-x-slider-container-xs': `calc(${VAR.CONTAINER_PADDING_XS} - ${VAR.PADDING_CARD_XS})`,
        'padding-x-slider-container-md': `calc(${VAR.CONTAINER_PADDING_MD} - ${VAR.PADDING_CARD_XS})`,
        'padding-x-slider-container-lg': `calc(${VAR.CONTAINER_PADDING_MD} - ${VAR.PADDING_CARD_LG})`,
        'padding-x-slider-container-2xl': `calc(${VAR.CONTAINER_PADDING_MD} - ${VAR.PADDING_CARD_2XL})`,

        'padding-b-footer-xs': `calc(30px + ${VAR.MOBILE_BOTTOM_MENU_HEIGHT})`,
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
        black: '#111111',
        status_red: '#CF0000',
        'background-primary': '#F1F1F1',
        status_gray: '#B6B6B6',
        'dark-transparent': '#0000001f',
      },
    },
  },
  // eslint-disable-next-line global-require
  plugins: [require('@tailwindcss/line-clamp'), require('tailwind-hamburgers')],
};
