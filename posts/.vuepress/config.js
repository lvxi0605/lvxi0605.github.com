const { config } = require("vuepress-theme-hope");
module.exports = config({
  typescript:true,
  plugins: {
    "@mr-hope/vuepress-plugin-comment": {
      type: "vssue",
      // set `platform` rather than `api`
      platform: "github",

      // all other options of Vssue are allowed
      owner: "lvxi0605",
      repo: "lvxi0605.github.com",
      clientId: "e59001f499867faabc38",
      clientSecret: "bbb2ca3474f88d35383e67590b31605eea959427",
      autoCreateIssue:true
    },
  },
   chainWebpack: (config, isServer) => {
   
  },
  title: "Lvxi",
  description: "学习、工作、生活。",
  dest: "./docs",
  head: [
    [
      "script",
      { src: "https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" },
    ],
    [
      "script",
      {
        src: "https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js",
      },
    ],
    ["script", { src: "https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js" }],
    [
      "script",
      { src: "https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js" },
    ],
  ],

  locales: {
    "/": {
      lang: "zh-CN",
      title:'Lvxi' 
    }
  },

  themeConfig: {
    logo: "/logo.svg",
    hostname: "https://lvxi0605.github.io",
    author: "lvxi",

    repoDisplay: false,
    repo: "https://gitee.com/lvxi/vuepress-xiblog",
    docsDir: "posts",
    // 假如文档放在一个特定的分支下，默认为 'main':
    docsBranch: "master",
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: "帮助我们改善此页面！",
     
    comment: {
      type: "Vssue", // "valine" 或 "vssue"
    },
    nav: [
      { text: "主页", link: "/", icon: "home" },
      { text: "时间轴", link: "/timeline/", icon: "timeline" },
      { text: "关于", link: "/about", icon: "about" },
/*
      {
        text: "如何使用",
        icon: "creative",
        link: "/guide/",
      },
      {
        text: "主题文档",
        icon: "note",
        link: "https://vuepress-theme-hope.github.io/zh/",
      },
*/
    ],
    /*
    sidebar: {
      "/": [
        "",
        "home",
        "slides",
        "layout",
        {
          title: "如何使用",
          icon: "creative",
          prefix: "guide/",
          children: ["", "page", "markdown", "disable", "encrypt"],
        },
      ],
    },
    */
/*
    locales: {
      "/zh/": {
        nav: [
          { text: "博客主页", link: "/zh/", icon: "home" },
          { text: "项目主页", link: "/zh/home/", icon: "home" },
          {
            text: "如何使用",
            icon: "creative",
            link: "/zh/guide/",
          },
          {
            text: "主题文档",
            icon: "note",
            link: "https://vuepress-theme-hope.github.io/zh/",
          },
        ],
        sidebar: {
          "/zh/": [
            "",
            "home",
            "slides",
            "layout",
            {
              title: "如何使用",
              icon: "creative",
              prefix: "guide/",
              children: ["", "page", "markdown", "disable", "encrypt"],
            },
          ],
        },
      },
    },
*/
    blog: {
      intro: "/intro/",
      sidebarDisplay: "mobile",
      links: {
        Email: "mailto:a874047493@qq.com",
        Gitee: "https://gitee.com/lvxi",
        Github: "https://github.com/lvxi0605",
      },
    },
    algolia: {
      apiKey: "d131d055e1f8f2c602329fbc040883f1",
      indexName: "vuepress-xiblog",
    },
    footer: {
      display: true,
      content: "默认页脚",
    },

    comment: {
      type: "waline",
      serverURL: "https://vuepress-theme-hope-comment.vercel.app",
    },

    copyright: {
      status: "global",
    },

    git: {
      timezone: "Asia/Shanghai",
    },

    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: [
          "highlight",
          "math",
          "search",
          "notes",
          "zoom",
          "anything",
          "audio",
          "chalkboard",
        ],
      },
    },

    pwa: {
      favicon: "/favicon.ico",
      cachePic: true,
      apple: {
        icon: "/assets/icon/apple-icon-152.png",
        statusBarColor: "black",
      },
      msTile: {
        image: "/assets/icon/ms-icon-144.png",
        color: "#ffffff",
      },
      manifest: {
        icons: [
          {
            src: "/assets/icon/chrome-mask-512.png",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-mask-192.png",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
        shortcuts: [
          {
            name: "Guide",
            short_name: "Guide",
            url: "/guide/",
            icons: [
              {
                src: "/assets/icon/guide-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
              {
                src: "/assets/icon/guide-monochrome.png",
                sizes: "192x192",
                purpose: "monochrome",
                type: "image/png",
              },
            ],
          },
        ],
      },
    },
  },
});
