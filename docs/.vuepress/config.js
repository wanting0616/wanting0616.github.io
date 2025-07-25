import themeConfig from './themeConfig.js'

module.exports = {
    title: 'Hello VuePress', //网站的标题
    description: 'Just playing around', //网站的描述
    themeConfig
    // themeConfig: {
    //     nav: [
    //       { text: '首页', link: '/' },
    //       { text: '指南', link: '/guide/' },
    //       { text: 'Google', link: 'https://google.com' },
    //     ],
    //     sidebar: [
    //         {
    //           title: 'Group 1',   // 必要的
    //           path: '/foo/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
    //           collapsable: false, // 可选的, 默认值是 true,
    //           sidebarDepth: 1,    // 可选的, 默认值是 1
    //           children: [
    //             '/'
    //           ]
    //         },
    //         {
    //           title: 'Group 2',
    //           children: [ /* ... */ ]
    //         }
    //       ]
    //   }
  }