# Robin Cai 个人主页维护说明

正式网址：`https://crobinz.github.io/`

## 日常修改

绝大多数文字内容都在 `site/content.js` 中，包括个人简介、教育经历、研究方向、动态、论文和随笔。用文本编辑器打开它，按照文件内的中文注释修改即可。

- 修改内容：编辑 `site/content.js`
- 修改颜色或排版：编辑 `site/styles.css`
- 更换页面结构：编辑 `site/index.html`
- 更换分享预览图：替换 `site/og.png`

## 在线修改并发布

1. 打开 GitHub 仓库 `crobinz/crobinz.github.io`。
2. 进入 `site/content.js`，点击右上角铅笔图标。
3. 修改内容后点击 **Commit changes**。
4. 等待约 1–3 分钟，GitHub Pages 会自动更新正式网址。

每次推送到 `main` 分支时，`.github/workflows/pages.yml` 都会自动发布 `site` 目录。

