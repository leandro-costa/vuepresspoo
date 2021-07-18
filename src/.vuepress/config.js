const { description } = require('../../package')

module.exports = {
  base: '/vuepresspoo/',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Programação Orientada a Objetos',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: 'Material para as aulas da disciplina de Programação Orientada a Objetos',

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.13.11/katex.min.css' }],
    //PWA
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/icon-192x192.png' }],
    ['link', { rel: 'mask-icon', href: '/icon-192x192.png', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icon-192x192.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    sidebarDepth: 2,
    sidebar: [
      'home',
      '/01_paradigmas/',
      '/01_paradigmas/01_introducao',
      '/01_paradigmas/02_Linguagens',
      '/01_paradigmas/03_Paradigmas',
      '/02_java/',
      '/02_java/01_codificando',
      '/03_conceitos_OO/',
      '/03_conceitos_OO/01_abstracao',
      '/03_conceitos_OO/02_objeto',
      '/03_conceitos_OO/03_classe',
      '/03_conceitos_OO/04_referencia']

  },

  markdown: {

    extendMarkdown: md => {
      md.use(require("markdown-it-plantuml"))
      md.use(require("markdown-it-footnote"))
      md.use(require("markdown-it-deflist"))
      md.use(require("markdown-it-katex"))
    },

  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    [
      '@vuepress/medium-zoom',
      {
        options: {
          margin: 200,
          background: '#252525'
        }
      }
    ],
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: true
      }
    ]
  ]
}
