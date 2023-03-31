import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "endlessyoung's blog",
  description: "这是endlessyoung的个人博客",
  // base: "/ran/", // 部署到github上时访问的根目录
  lastUpdated: true, // 页面上展示最后更新的时间
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }], // 也是放在/public目录中
  ],
  themeConfig: {
    logo: '/panda.png', // 也是放在/public目录中
    siteTitle: "endlessyoung's blog",
    socialLinks: [
      { icon: 'github', link: 'https://github.com/endlessYoung' }
    ],
    nav: [ // 页面最上面一行的导航栏
      { text: "首页", link: "/page/" }, // 导航栏名字和目录地址，如果文件名叫index.md可以省略不写，路径只写到目录
    ],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2022-11-11",
    },
    sidebar: [
      {
        text: '目录',
        items: [
          { text: 'java', link: '/page/2.md' },
          { text: 'SQL', link: '/page/3.md' },
        ]
      }
    ]
  },
  markdown: {
    lineNumbers: true
  }
});
