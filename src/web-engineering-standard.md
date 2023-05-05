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

#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"
npx --no-install commitlint --edit $1

# 5. cz-git 与 commitlint 进行联动给予校验信息

cz-git 允许我们直接写一个 .commitlintrc.js 文件
```js
// @see: https://cz-git.qbenben.com/zh/guide
/** @type {import('cz-git').UserConfig} */

module.exports = {
	ignores: [commit => commit === "init"],
	// extends: ["@commitlint/config-conventional"],
	rules: {
		// @see: https://commitlint.js.org/#/reference-rules
		"body-leading-blank": [2, "always"],
		"footer-leading-blank": [1, "always"],
		"header-max-length": [2, "always", 108],
		"subject-empty": [2, "never"],
		"type-empty": [2, "never"],
		"subject-case": [0],
		"type-enum": [
			2,
			"always",
			[
				"feat",
				"fix",
				"docs",
				"style",
				"refactor",
				"perf",
				"test",
				"build",
				"ci",
				"chore",
				"revert",
				"wip",
				"workflow",
				"types",
				"release"
			]
		]
	},
	prompt: {
		messages: {
			type: "选择你要提交的类型 :",
			scope: "选择一个提交范围（可选）:",
			customScope: "请输入自定义的提交范围 :",
			subject: "填写简短精炼的变更描述 :\n",
			body: '填写更加详细的变更描述（可选）。使用 "|" 换行 :\n',
			breaking: '列举非兼容性重大的变更（可选）。使用 "|" 换行 :\n',
			footerPrefixsSelect: "选择关联issue前缀（可选）:",
			customFooterPrefixs: "输入自定义issue前缀 :",
			footer: "列举关联issue (可选) 例如: #31, #I3244 :\n",
			confirmCommit: "是否提交或修改commit ?"
		},
		types: [
			// { value: "feat", name: "特性:   🚀  新增功能", emoji: "🚀" },
			// { value: "fix", name: "修复:   🧩  修复缺陷", emoji: "🧩" },
			// { value: "docs", name: "文档:   📚  文档变更", emoji: "📚" },
			// { value: "style", name: "格式:   🎨  代码格式（不影响功能，例如空格、分号等格式修正）", emoji: "🎨" },
			// { value: "refactor", name: "重构:   ♻️  代码重构（不包括 bug 修复、功能新增）", emoji: "♻️" },
			// { value: "性能", name: "性能:   ⚡️  性能优化", emoji: "⚡️" },
			// { value: "test", name: "测试:   ✅  添加疏漏测试或已有测试改动", emoji: "✅" },
			// { value: "build", name: "构建:   📦️  构建流程、外部依赖变更（如升级 npm 包、修改 webpack 配置等）", emoji: "📦️" },
			// { value: "ci", name: "集成:   🎡  修改 CI 配置、脚本", emoji: "🎡" },
			// { value: "revert", name: "回退:   ⏪️  回滚 commit", emoji: "⏪️" },
			// { value: "else", name: "其他:   🔨  对构建过程或辅助工具和库的更改（不影响源文件、测试用例）", emoji: "🔨" }
		],
		useEmoji: true,
	}
};

```

```md [最后：测试]
git add . && git cz
```
:::
