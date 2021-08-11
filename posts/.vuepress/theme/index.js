"use strict";
const alias_1 = require("./node/alias");
const config_1 = require("./node/config");
const eject_1 = require("./node/eject");
const plugins_1 = require("./node/plugins");
const blogAddtionalPages = [
    {
        path: "/article/",
        frontmatter: { layout: "Blog" ,title:'全部文章'},
    },
    {
        path: "/star/",
        frontmatter: { layout: "Blog",title:'收藏文章' },
    },
    // {
    //     path: "/encrypt/",
    //     frontmatter: { layout: "Blog" },
    // },
    // {
    //     path: "/slide/",
    //     frontmatter: { layout: "Blog" },
    // },
    {
        path: "/timeline/",
        frontmatter: { layout: "Blog",title:'时间轴' },
    },
];
// Theme API.
const themeAPI = (themeConfig, ctx) => ({
    alias: alias_1.getAlias(themeConfig, ctx),
    plugins: plugins_1.getPluginConfig(themeConfig),
    additionalPages: themeConfig.blog === false ? [] : blogAddtionalPages,
    extendCli: (cli) => {
        cli
            .command("eject-hope [targetDir]", "copy vuepress-theme-hope into .vuepress/theme for customization.")
            .option("--debug", "eject in debug mode")
            .action((dir = ".") => {
            void eject_1.eject(dir);
        });
    },
});
themeAPI.config = config_1.config;
// helper functions
themeAPI.themeConfig = (themeConfig) => themeConfig;
themeAPI.navbarConfig = (navbarConfig) => navbarConfig;
themeAPI.sidebarConfig = (sidebarConfig) => sidebarConfig;
module.exports = themeAPI;
//# sourceMappingURL=index.js.map