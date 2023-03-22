# PKMUON 网站

**要求**：`node.js 14+`，最好`node.js 18+`（[下载主页](https://nodejs.org/en/download)，[各大 Linux 安装包下载页面](https://nodejs.org/en/download/package-manager)）。

**说明**：如果你可以访问 PKU farm，而不想或不便配置 node.js 开发环境，请看 [在 PKU farm 上编辑页面](#farm)。

## 本地测试

克隆仓库后进入项目根目录，执行：

```bash
npm install hexo -g
npm install
npm run server
```

## 添加、删除或修改页面

所有页面位于 source/\_posts 中，按照 category 分为 blogs 和 publications 两类。可以使用手动或 hexo 命令方式创建新页面，hexo 方式参见 [hexo 官方文档](https://hexo.io/docs/writing)。


## 部署修改后的页面

根据需要生成 \_deploy.yml 后（如不需要可以留空），执行：
```bash
npm run deploy
```

## <span id="farm">在 PKU farm 上编辑页面</span>

ssh 登录的同时将 farm 的 4000 端口映射到本地（如被占用可改为其它）：

```bash
ssh farm -L 4000:localhost:4000
```

进入 farm 后，执行以下命令进入打包好的 singularity 容器：

```bash
/data/pubfs/lyazj/pkmuon
```

程序会自动使用 `pushd` 命令切换到项目根目录，并执行 `umask 0002` 以维持同组成员的 rwx 权限。一般需要先执行 `git pull` 拉取远程仓库中的更改。如包依赖发生改变，需要执行 `npm install`。而后与之前一样，执行 `npm run server &` 即可开启本地测试服务器。

已为 git config 添加对仓库可写的 https token，可以直接执行 `git push` 推送更改。\_deploy.yml 中也已写好 token，可以直接使用 `npm run deploy` 命令部署页面至静态页面仓库。
