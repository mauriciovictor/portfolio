module.exports = {
  content: [
    './src/**/*.{astro,vue,js,ts}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Segoe UI', 'Arial', 'sans-serif'],
        mono: ['Fira Mono', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      colors: {
        zinc: {
          800: '#23272f',
          900: '#18181b',
        },
        teal: {
          400: '#2dd4bf',
          900: '#134e4a',
        },
        cyan: {
          400: '#22d3ee',
          900: '#164e63',
        },
        lime: {
          400: '#a3e635',
          900: '#365314',
        },
      },
    },
  },
  plugins: [],
}
