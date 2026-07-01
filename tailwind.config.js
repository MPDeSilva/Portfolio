/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#ffffff',
        foreground: '#000000',
        paper: '#ffffff',
        ink: {
          100: '#f1f1f3',
          200: '#e5e5e7',
          300: '#c7c7cc',
          400: '#9a9aa0',
          500: '#6b6b70',
          600: '#3a3a3c',
          700: '#1d1d1f',
          800: '#111111',
          900: '#000000',
        },
        accent: {
          DEFAULT: '#0070f3',
          100: '#e6f0ff',
          500: '#0070f3',
          600: '#0059c2',
        },
      },
      fontFamily: {
        sans: ['"adobe-garamond-pro"', '"EB Garamond"', 'serif'],
        serif: ['"adobe-garamond-pro"', '"EB Garamond"', 'serif'],
        heading: ['"Orpheus Pro"', 'serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      transitionTimingFunction: {
        'ease-out-soft': 'cubic-bezier(0.22, 1, 0.36, 1)',
        'ease-inout-soft': 'cubic-bezier(0.65, 0, 0.35, 1)',
        'ease-image': 'cubic-bezier(0.43, 0.13, 0.23, 0.96)',
      },
      animation: {
        'marquee': 'marquee 46s linear infinite',
        'marquee-rev': 'marquee 54s linear infinite reverse',
        'pulse-dot': 'pulse-dot 2.4s ease-out infinite',
        'bob': 'bob 1.8s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'pulse-dot': {
          '0%': { boxShadow: '0 0 0 0 rgba(22,163,74,.45)' },
          '70%': { boxShadow: '0 0 0 7px rgba(22,163,74,0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(22,163,74,0)' },
        },
        bob: {
          '50%': { transform: 'translateY(5px)' },
        },
      },
    },
  },
  plugins: [],
}
