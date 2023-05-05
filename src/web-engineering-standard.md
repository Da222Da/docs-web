# Web 开发规范

## 前言：制定 Web 开发规范的目的是什么？

将 Web 软件开发过程进行规范化、标准化，不仅减少团队成员之间不必要的争端，还可以提高开发效率、质量和可维护性。

## 1. 如何统一 git commit 提交信息？

NodeJS 项目，想要规范 Git 提交消息，可以借助以下工具：
- commitizen，基于 Node.js 的命令行工具，辅助生成标准化规范化的 commit message。
- [cz-git](https://cz-git.qbb.sh/zh/guide/introduction)，一款工程性更强，轻量级，高度自定义，标准输出格式的 commitizen 适配器。
- husky，Git Hooks 管理工具。
- @commitlint/cli，commit message 校验工具。

具体步骤如下：

::: code-group

```md [第一步：配置 commitizen 与 cz-git]
# 1. 全局安装 commitizen

`npm i -g commitizen`，为了直接使用 commitizen 提供的 git-cz 指令。

# 2. 局部安装 commitizen 与 cz-git `pnpm add -D commitizen cz-git`

# 3. 在 package.json 中，指定 cz-git 适配器

```json
"config": {
  "commitizen": {
  	"path": "./node_modules/cz-git"
  }
}

```

```md [第二步：配置 husky 和 commitlint]
# 1. 局部安装 husky 和 commitlint `pnpm add -D husky commitlint`

# 2. 初始化 .husky 配置文件 `husky install`

# 3. 初始化 Git Hook 脚本文件 commit-msg `npx husky add .husky/commit-msg`

补充：commit-msg 钩子，在 commit message 被创建之后触发。

# 4. 编辑 commit-msg 脚本文件

`npx --no-install commitlint --edit $1`

# 5. cz-git 与 commitlint 进行联动给予校验信息

cz-git 允许我们直接写一个 .commitlintrc.js 文件

```

```md [最后：测试]
git add . && git commit -m 'error message'
git add . && git cz
```
:::
