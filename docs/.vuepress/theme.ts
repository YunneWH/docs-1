import { hopeTheme } from 'vuepress-theme-hope';
import { enNavbar, zhNavbar } from './navbar/index.js';
import { enSidebar, zhSidebar } from './sidebar/index.js';


export default hopeTheme({
  author: {
    name: 'CnosDB',
    url: 'https://github.com/cnosdb/cnosdb',
  },

  iconAssets: 'iconfont',

  logo: '/logo.png',
  logoDark: 'https://www.cnosdb.com/wp-content/uploads/2022/05/CnosDB_%E7%99%BD-300x108.png',

  repo: 'cnosdb/docs',

  docsDir: 'docs',

  pageInfo: ['Author', 'Original', 'Date', 'Category', 'Tag', 'ReadingTime', 'Word'],
  

  locales: {
    /**
     * Chinese locale config
     */
    '/en/': {
      // navbar
      navbar: enNavbar,

      // sidebar
      sidebar: enSidebar,

      displayFooter: true,

      copyright: false,
    },
    '/': {
      // navbar
      navbar: zhNavbar,

      // sidebar
      sidebar: zhSidebar,

      displayFooter: true,

      copyright: false,
    },
  },

  encrypt: {
    config: {
      '/en/demo/encrypt.html': ['1234'],
      '/demo/encrypt.html': ['1234'],
    },
  },

  plugins: {
    // Disable features you don't want here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      container: true,
      demo: true,
      echarts: true,
      flowchart: true,
      gfm: true,
      imageMark: {
        light: ["lightmode"],
        dark: ["darkmode"],
      },
      imageSize: true,
      include: true,
      katex: true,
      lazyLoad: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ['ts', 'vue'],
      },
      presentation: {
        plugins: ['highlight', 'math', 'search', 'notes', 'zoom'],
      },
      stylize: [
        {
          matcher: 'Recommanded',
          replacer: ({ tag }) => {
            if (tag === 'em')
              return {
                tag: 'Badge',
                attrs: { type: 'tip' },
                content: 'Recommanded',
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vpre: true,
      vuePlayground: true,
    },
  },
});
