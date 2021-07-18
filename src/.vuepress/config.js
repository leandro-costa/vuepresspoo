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
    ['link', { rel: 'icon', href: '/vuepresspoo/logo.png' }],
    ['link', { rel: 'manifest', href: '/vuepresspoo/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/vuepresspoo/icon-192x192.png' }],
    ['link', { rel: 'mask-icon', href: '/vuepresspoo/icon-192x192.png', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/vuepresspoo/icon-192x192.png' }],
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
    displayAllHeaders: true,
    sidebar: {
      '/01_paradigmas/': [
        '',
        '01_introducao',
        '02_Linguagens',
        '03_Paradigmas'
      ],
      '/02_java/': 'auto'
    }

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
    '@vuepress/plugin-medium-zoom',
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: true
      }
    ]
  ]
}
