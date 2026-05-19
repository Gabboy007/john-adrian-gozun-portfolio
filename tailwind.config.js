/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        obsidian: '#071014',
        panel: '#0d181d',
        steel: '#182930',
        circuit: '#20f2a6',
        electric: '#2ed3ff',
        warning: '#ffb75e',
      },
      boxShadow: {
        glow: '0 0 40px rgba(32, 242, 166, 0.18)',
        electric: '0 0 32px rgba(46, 211, 255, 0.22)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        grid:
          'linear-gradient(rgba(46, 211, 255, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(46, 211, 255, 0.08) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
};
