const { description } = require('../../package')

module.exports = {
    base: '/vuepresspoo/',

    dest: 'docs',

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
    //theme: 'ououe',

    themeConfig: {
        smoothScroll: true,
        repo: 'leandro-costa/vuepresspoo',
        //repoLabel: '',
        docsDir: 'src',
        editLinks: true,
        editLinkText: 'Edit',
        //lastUpdated: true,

        nav: [
            {
                text: 'Praticar',
                items: [
                    {
                        text: 'Exercícios Java', items: [
                            { text: 'Tipos Primitivos', link: '/Exercicios/Java/TiposPrimitivos.md' },
                            { text: 'Exercicios Caelum', link: '/Exercicios/Java/Caelum.md' },
                            { text: 'Exercicios K19', link: '/Exercicios/Java/ExerciciosK19.md' },
                            { text: 'JOptionPane', link: '/Exercicios/Java/JOption.md' },
                        ]
                    },
                    {
                        text: 'Modelagem', items: [
                            { text: 'Modelagem 1', link: '/Exercicios/ExercicioModelagem/Modelagem1.md' },
                            { text: 'Modelagem 2', link: '/Exercicios/ExercicioModelagem/Modelagem2.md' },
                            { text: 'Modelagem 4', link: '/Exercicios/ExercicioModelagem/Modelagem4.md' },
                        ]
                    },
                    {
                        text: 'Herança', items: [
                          { text: 'Herança 1', link: '/Exercicios/ExercicioHeranca/Heranca1.md' }
                         ,{ text: 'Modelagem 3', link: '/Exercicios/ExercicioModelagem/Modelagem3.md' }
                         ,{ text: 'Modelagem 5', link: '/Exercicios/ExercicioModelagem/Modelagem5.md' }
                         ,{ text: 'Modelagem 5v2', link: '/Exercicios/ExercicioModelagem/Modelagem5v2.md' }
                         ,{ text: 'Herança 2', link: '/Exercicios/ExercicioHeranca/Heranca2.md' }
                         ,{ text: 'Herança 3', link: '/Exercicios/ExercicioHeranca/Heranca3.md' }
                        ]
                    },
                    {
                        text: 'Polimorfismo', items: [
                            { text: 'Sistema Bancario', link: '/Exercicios/SistemaBancario/' }
                        ]
                    },
                    {
                        text: 'Abstract', items: [
                            { text: 'Exercicios Abstract', link: '/Exercicios/ExercicioAbstract/' }
                        ]
                    },

                    
                    {
                        text: 'Exception', items: [
                            { text: 'Exception', link: '/Exercicios/ExercicioException/' }
                        ]
                    },
                ]
            }

        ],

        sidebarDepth: 2,
        sidebar: [
            'home',
            '/01_paradigmas/',
            '/02_java/',
            '/02_java/01_codificando',
            '/03_conceitos_OO/',
            '/03_conceitos_OO/02_objeto',
            '/03_conceitos_OO/03_classe',
            '/03_conceitos_OO/03_Construtor_sobrecarga',
            '/03_conceitos_OO/07_pacotes',
            '/03_conceitos_OO/04_dominio_aplicacao.md',
            '/03_conceitos_OO/05_assossiacao',
            '/03_conceitos_OO/06_encapsulamento',
            '/03_conceitos_OO/04_static.md',
            '/03_conceitos_OO/08_Heranca',
            '/03_conceitos_OO/09_polimorfismo',
            '/03_conceitos_OO/10_abstratas_interface.md',
            '/05_Exceptions/',
            //'/04_colecoes/',
            //'/05_Generics/',
            //'/06_threads/'

        ]

    },

    markdown: {

        extendMarkdown: md => {
            md.use(require("markdown-it-plantuml"))
            md.use(require("markdown-it-footnote"))
            md.use(require("markdown-it-deflist"))
            md.use(require("markdown-it-katex"))
            md.use(require("markdown-it-include"))
            md.use(require("markdown-it-task-lists"))            
        },
        lineNumbers: true

    },

    /**
     * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
     */
    plugins: [
        '@vuepress/plugin-back-to-top',
        ['@vuepress/plugin-medium-zoom', {
            options: {
                margin: 0,
                background: '#252525'
            }
        }],
        ['container', {
            type: 'col-wrapper',
            defaultTitle: '',
        }],
        ['container', {
            type: 'col-half',
            defaultTitle: '',
        }],
        [
            '@vuepress/pwa',
            {
                serviceWorker: true,
                updatePopup: true
            }
        ]
    ]
}
