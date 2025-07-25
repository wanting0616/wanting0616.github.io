# 确保脚本抛出遇到的错误
# 上传vuepress源码及文章到码云备份
set -e
git add -A
git commit -m 'blogCode'
git push git@gitee.com:qqlcx5/vuePressCode.git master
# 打包及切换到打包后文件夹
npm run docs:build && cd docs/.vuepress/dist

# 部署到码云
git init
git add -A
git commit -m 'deploy'
git push -f git@gitee.com:qqlcx5/qqlcx5.git master

# 部署到github Page
# 删除 .git目录重新上传，目前只有想的这种方法
rm -rf .git
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:wanting0616/wanting0616.github.io/ main
cd -
