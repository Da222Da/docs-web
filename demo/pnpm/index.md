---
outline: deep
---

# Pnpm 包管理器

## Pnpm 是什么？

PNPM 是一个 JavaScript 包管理器，类似于 npm 和 Yarn。它有助于加快安装依赖项的速度，减少磁盘空间的使用，并支持并行安装依赖项。PNPM 还提供了一些其他功能，例如离线支持和版本锁定。[想要了解 pnpm 更多内容，请移步官网。](https://pnpm.io/motivation)


## Workspace 工作区

Workspace 是 PNPM 中的一个功能，它允许您在同一个项目中管理多个包。

### - 如何想使用 workspace 功能？

要在 PNPM 中使用 workspace，您需要在项目的根目录下配置 `pnpm-workspace.yaml` 文件。

For example:

```yaml
# 默认情况下，包含所有目录下的所有子包。

packages:
  # all packages in direct subdirs of packages/
  - 'packages/*'
  # all packages in subdirs of components/
  - 'components/**'
  # exclude packages that are inside test directories
  - '!**/test/**'
```


### - 如何执行工作区子包的命令？

如果想要执行 PNPM 工作区中子包的某个命令的话。可以通过`--filter,-F`选项来实现。例如，要在名为 my-package 的子包中运行命令，可以使用以下命令：

```bash
# `<command>`  是您想要运行的命令的名称，例如  `build` 。
# `--filter`  选项指定了要运行命令的工作区子包的名称。

pnpm --filter my-package <command>
```

除此之外，你还可以将多个子包作为过滤器传递给  `--filter`  选项，例如：

```bash
# 这将在名为  `my-package-1`  和  `my-package-2`  的子包中运行命令。

pnpm --filter my-package-1,my-package-2 <command>
```



[想要了解 filtering 更多内容，请移步官网。](https://pnpm.io/filtering)