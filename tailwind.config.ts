import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      colors: {
        'primary-blue': '#007CC3',
        'primary-pink': '#F173AC',
        'secondary-pink': '#F5A4C7',
        'secondary-blush': '#F5A4C7',
        'secondary-green': '#52C973',
        'secondary-red': '#F65959',
        'secondary-yellow': '#F7D55B',
        'secondary-orange': '#F58D53',
        'secondary-purple': '#D677D9',
        'secondary-skyblue': '#92DEEF',
        'gray-1': '#384B56',
        'gray-2': '#7C8E98',
        'gray-3': '#C4CACE',
        'gray-4': '#E8E9E9'
      }
    }
  },
  plugins: []
}
export default config
