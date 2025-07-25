import path from 'path'
const rootpath = path.dirname(__dirname);
import utils from './utils/index';
import filehelper from './utils/initPage.js';

export default {
        nav: [
          {
            text: 'JavaScript',
            link: '../JavaScript/',
          },
          {
            text: 'Vuejs',
            link: '../vue/',
          },
        //   {
        //     text: '其它',
        //     ariaLabel: 'Menu',
        //     items: [
        //       { text: 'VuePress', link: '/other/vuepress/' },
        //       { text: '开发工具', link: '/other/ide/' }
        //     ]
        //   },
        //   {
        //     text: '主页',
        //     ariaLabel: 'Menu',
        //     items: [
        //       { text: '主页一', link: '/404/' },
        //       { text: '主页二', link: '/404/Personal' }
        //     ]
        //   },
        ],
        
        // sidebar: {
        //   '../JavaScript/': concatJs(),
        // },
  }

// JavaScript
// function concatJs() {
//   const arr = utils.genSidebar( 'JStst', filehelper.getFileName(rootpath + '/JavaScript/'), false);
//   arr.push(...utils.genSidebar('Js-Vue',filehelper.getFileName(rootpath + '/JavaScript/vue/', 'vue/'),false));
//   return arr;
// }


