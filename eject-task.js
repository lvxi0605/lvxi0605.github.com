const path_1 = require('path')
var fs_extra_1 = require('fs-extra')
const sourceDir = path_1.resolve("./docs/.vuepress/mytheme");
const targetDir = path_1.resolve("./docs/.vuepress/theme");
console.log(sourceDir+' => ' + targetDir);
fs_extra_1.copy(sourceDir, targetDir, {
}).then(()=>{
  console.log('复制完成');
});