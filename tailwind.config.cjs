const plugin = require('tailwindcss/plugin')

module.exports = {
  mode: 'jit',
  content: ['./src/**/*.tsx'],
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [
    plugin(({ addComponents }) => {
      addComponents({
        '.input': {
          height: '2.625rem',
          padding: '0 12px',
          borderRadius: 6,
          border: '1px solid #E6E5E5',
          background: '#EDEDED',
          outline: 0,

          fontSize: 14,
        },
      })
    }),
  ],
}
