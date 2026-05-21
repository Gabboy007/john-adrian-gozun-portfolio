/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        canvas: 'var(--color-canvas)',
        panel: 'var(--color-panel)',
        ink: 'var(--color-ink)',
        oxide: 'var(--color-oxide)',
        teal: 'var(--color-teal)',
        amber: 'var(--color-amber)',
        leaf: 'var(--color-leaf)',
      },
      boxShadow: {
        workbench: '0 28px 80px var(--color-shadow)',
        lift: '0 14px 34px rgba(25, 22, 17, 0.14)',
      },
      fontFamily: {
        sans: ['var(--font-body)'],
        display: ['var(--font-display)'],
        mono: ['var(--font-mono)'],
      },
      backgroundImage: {
        grid:
          'linear-gradient(rgba(4, 125, 120, 0.08) var(--rule-thin), transparent var(--rule-thin)), linear-gradient(90deg, rgba(211, 77, 52, 0.07) var(--rule-thin), transparent var(--rule-thin))',
      },
    },
  },
  plugins: [],
};
