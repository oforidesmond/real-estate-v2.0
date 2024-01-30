/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {}, 
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'Color':'#1F2937',
      'brown': {
        "light": '#8b522d',
        500: '#6c4023',
        600: '#5c371e',
        "main": '#3b2313',
        800: '#1f120a',
        "deepest": '#0f0905',
      },
      'slate': {
        100: '#F1F5F9',
        200: '#E2E8F0',
        500: '#64748B',
        600: '#475569',
        700: '#334155',
        800: '#1E293B',
       
      },
      'blue': {
        800: '#1E40AF',
        700: '#1D4ED8',
       
      },
      'gray': {
        300: '#D1D5DB',
        400: '#9CA3AF',
        600: '#4B5563',
       
      },
     
      'white':'#ffffff',

      'black':'#000000',


      'green': {
        900: '#14532D',
        700: '#15803D'
       
      },
      'orange': {
        "main": "#f4951c",
        "light": '#f6a53c',
        500: '#ea890b',
        800: '#754506',
        "deepest": '#3a2203'
      },
      'red': {
        "900": "#c20103",
        "light": '#df0105',
        500: '#8e0103',
        "deepest": '#650102'
      },
      'night': {
        "main": "#151515",
        "light": '#292929',
        500: '#1f1f1f',
        "deepest": '#0a0a0a'
      }

    }

  },
  plugins: [
   // require('@tailwindcss/line-clamp'),
    // ...
  ],
};
