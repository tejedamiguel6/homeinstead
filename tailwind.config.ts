import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      clipPath: {
        wave: 'polygon(0 0, 100% 0, 100% 80%, 75% 100%, 25% 100%, 0 80%)',
      },
    },
  },
  plugins: [],
}
export default config
