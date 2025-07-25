import themeConfig from './themeConfig.js'

module.exports = {
    title: 'Hello VuePress', //网站的标题
    description: 'Just playing around', //网站的描述
    // themeConfig
    themeConfig: {
        nav: [
            {
              text: 'JavaScript',
              link: '/JavaScript/',
            },
            {
              text: 'Vuejs',
              link: '/vue/',
            },
          ],
          sidebar: [
              {
                title: "欢迎学习",
                path: "/",
                collapsable: false,  // 是否折叠
                children: [{ title: "博客简介", path: "/" }],
              },
              {
                title: "基础篇",
                path: "/Vue/1",
                collapsable: true,
                children: [
                  { title: "第一篇", path: "/Vue/1" },
                  { title: "第二篇", path: "/Vue/2" },
                ]
              } 
            ]
      }
  }