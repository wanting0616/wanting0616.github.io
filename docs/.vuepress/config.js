import themeConfig from './themeConfig.js'

// module.exports = {
//     title: 'Hello VuePress', //网站的标题
//     description: 'Just playing around', //网站的描述
//     themeConfig
//   }

  module.exports = {
    title: '我的博客',
    description: 'XXX',
    themeConfig: {
      nav: [
        { text: "首页", link: "/" },
        {
          text: "codinglin 的博客",
          items: [
            { text: "掘金", link: "https://juejin.cn/user/726107228492253" },
            { text: "Github", link: "https://github.com/coding-lin" }
          ]
        }
      ]
    }
  }
  