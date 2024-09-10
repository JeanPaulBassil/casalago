import { nextui } from '@nextui-org/theme'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        'shine-pulse': {
          '0%': {
            'background-position': '0% 0%',
          },
          '50%': {
            'background-position': '100% 100%',
          },
          to: {
            'background-position': '0% 0%',
          },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      red: {
        50: '#fff1f2',
        100: '#ffdfe1',
        200: 'ffc5c9',
        300: '#ff9ca3',
        400: '#ff646f',
        500: '#ff3342',
        600: '#ee1424',
        700: '#c80d1a',
        800: '#a90f1a',
        900: '#89131b',
        950: '#4b0409',
      },
      yellow: {
        50: '#fffeea',
        100: '#fffdc5',
        200: '#fffa87',
        300: '#fff148',
        400: '#ffe31e',
        500: '#fcc504',
        600: '#eda200',
        700: '#b96d04',
        800: '#96540a',
        900: '#7b440c',
        950: '#472301',
      },
      green: {
        50: '#f4f9f4',
        100: '#e5f3e8',
        200: '#cce6d1',
        300: '#a3d2ac',
        400: '#73b580',
        500: '#59a869',
        600: '#3d7c4a',
        700: '#33623d',
        800: '#2c4f33',
        900: '#26412d',
        950: '#102315',
      },
      primary: {
        50: '#f0f8fe',
        100: '#ddedfc',
        200: '#c2e1fb',
        300: '#99cff7',
        400: '#68b5f2',
        500: '#4e9ced',
        600: '#307be0',
        700: '#2766ce',
        800: '#2652a7',
        900: '#244884',
        950: '#1a2d51',
      },
      blackHaze: {
        50: 'f7f7f7',
        100: '#efefef',
        200: '#dcdcdc',
        300: '#bdbdbd',
        400: '#989898',
        500: '#7c7c7c',
        600: '#656565',
        700: '#525252',
        800: '#464646',
        900: '#3d3d3d',
        950: '#292929',
      },
    },
    screens: {
      xs: '320px',
      sm: '375px',
      md: '425px',
      lg: '768px',
      xl: '1024px',
      '2xl': '1440px',
      '3xl': '2560px',
    },
    transitionDuration: {
      '1000': '1000ms',
      '2000': '2000ms',
      '3000': '3000ms',
      '4000': '4000ms',
      '5000': '5000ms',
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
}
export default config
