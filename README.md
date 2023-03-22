# PKMUON 网站

## 本地测试

克隆仓库后进入项目根目录，执行：

```bash
npm install
hexo server
```

## 添加、删除或修改页面

所有页面位于 source/\_posts 中，按照 category 分为 blogs 和 publications 两类。可以使用手动或 hexo 命令方式创建新页面，hexo 方式参见 https://hexo.io/docs/writing。

## 在 PKU farm 上编辑页面

ssh 登录的同时将 farm 的 4000 端口映射到本地（如被占用可改为其它）：

```bash
ssh farm -L 4000:localhost:4000
```

进入 farm 后，执行以下命令进入打包好的 singularity 容器：

```bash
/data/pubfs/lyazj/pkmuon
```

程序会自动使用 `pushd` 命令切换到项目根目录。该目录及部分子目录已设置为对 pku 组可写。一般需要先执行 `git pull` 拉取远程仓库中的更改。如包依赖发生改变，需要执行 `npm install`。而后与之前一样，执行 `hexo server &` 即可开启本地测试服务器。

已为 github config 添加对仓库可写的 https token，可以直接执行 `git push` 推送更改。执行项目根目录下的 `deploy` 脚本可以方便地将源码更改应用于编译后的静态网站。
