module.exports = {
  content: [
    './config/*.json',
    './layout/*.liquid',
    './assets/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid',
    './templates/*.liquid',
    './templates/*.json',
    './templates/customers/*.liquid',
  ],
  theme: {
    container: {
      center: true,//使容器在默认情况下居中
    },
    colors: {
      brand: 'var(--bg-brand)',
      // ...
    },
    extend: {},
  },
  plugins: [],
}
