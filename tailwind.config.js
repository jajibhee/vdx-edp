/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {

    extend: {
      colors: {
        main: '#6f42c1',
        secondary: '#6610f2',
        white: '#ffffff',
        tabs: 'rgb(215, 225, 254)',
        mediumGrey: '#f0eff9',
        vdxColor: '#543fed',
        vdxBlue: '#462ac8',
        vdxLightBlue: '#f1f1fc',
        vdxRedPurple: '#cd5b8d',
        vdxPurple: '#a04fd5',
        vdxYellowOrange: '#f7b500',
        vdxRedOrange: '#da7263',
        vdxOrange: '#de7c55',
        vdxGreen: '#39ba3a',
        vdxSalmon: '#f97171',
        vdxLightColor: '#ffffff',
        cdxDarkColor: '#000000',
        vdxBlack: '#202022',
        vdxMuterColor: 'rgba(0, 0, 0, 0.38)',
        vdxGrey: '#9e9e9e',
        vdxLightGrey: '#faf9ff',
        vdxLightestGrey: '#f2f1fc',
        vdxMediumGrey: '#f0eff9',
        vdxDarkerGrey: '#747195',
        vdxDarkestGrey: '#5a5878',
        vdxGrey100: '#f6f9fc',
        vdxGrey200: '#e9ecef',
        vdxGrey300: '#dee2e6',
        vdxGrey400: '#ced4da',
        vdxGrey500: '#adb5bd',
        vdxGrey600: '#8898aa',
        vdxGrey700: '#525f7f',
        vdxGrey800: '#32325d',
        vdxGrey900: '#212529',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

    },
  },
  plugins: [],
}
