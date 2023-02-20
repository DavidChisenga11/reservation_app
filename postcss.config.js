const algacss = require('alga-css')

module.exports = {
  plugins: [
    algacss({
      extract: ['./src/**/*.vue', './src/**/*.html', './src/**/*.svelte', './src/**/*.astro']
    })
  ]
}