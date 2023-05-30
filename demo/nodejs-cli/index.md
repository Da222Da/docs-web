---
outline: deep
---

# 开发 CLI 脚手架

## 什么是 CLI？

CLI `Command Line Interface`。它是一种基于文本的用户界面，允许用户通过在终端或控制台中输入命令来与程序或操作系统进行交互。CLI工具是为在命令行环境中使用而设计的软件应用程序，开发人员、系统管理员和其他技术用户通常使用它来管理和自动化计算机或服务器上的任务。

## Core 核心内容

### 快速创建

使用 Node.js CLI 工具，您可以遵循以下步骤：

1. 创建项目结构：创建一个新的文件夹，在其中创建  bin  文件夹。在  bin  文件夹中创建一个命令行脚本，这将是您 CLI 工具的入口点。 
```md
your-cli-tool/
├── bin/
│   └── index.js
├── package.json
└── README.md
```

2. 在  package.json  文件中添加必需的信息，特别是用于指定入口点脚本位置的`bin属性`。 
```json
{
    "bin": {
        "your-cli-bin": "./bin/index.js"
    }
}
```

3. 在  bin  文件夹中创建一个命令行脚本，使用  #!/usr/bin/env node  指定 Node.js 作为解释器，并在从此编写你脚手架的逻辑代码。

```js
#!/usr/bin/env node

console.log("hello your-cli");
```

4. 最后，使用  npm link  命令链接到该包，以便您可以全局访问这个工具

```bash
cd your-cli-tool
npm link
npm list --depth=0 -g
```
现在您可以在终端中运行  `your-cli-bin`  命令，并在命令行中看到输出。

### 本地调试

### 需求方案

--- 

#### 如何做日志记录？

> 需求：如何在 CLI 应用中做日志记录？

在 Node.js 中，您可以使用内置的  console  模块来进行简单的日志记录，也可以使用第三方模块来进行更有趣的日志记录，例如`npmlog，支持级别和颜色，增强交互性`。 

For Example:

::: code-group

```js [1. npmlog 基本使用]
var log = require('npmlog')

// additional stuff ---------------------------+
// message ----------+                         |
// prefix ----+      |                         |
// level -+   |      |                         |
//        v   v      v                         v
    log.info('fyi', 'I have a kitty cat: %j', myKittyCat)
```


```js [2. 定制 npmlog]
const log = require('npmlog');

// 默认 level 等级
log.level = process.env.LOG_LEVEL ? process.env.LOG_LEVEL : 'info';

// 修改前缀
log.heading = "Web CLI";
log.headingStyle = { fg: 'red', bg: 'white' };

// 添加自定义 level
log.addLevel('success', 2000, { fg: 'green', bold: true });

module.exports = log;
```
:::

::: danger 补充说明： 如果你觉得无法灵活地控制输出文字颜色的话，可以使用 `colors` 模块。

For Example:

```js
const npmlog = require('npmlog');
const colors = require('colors');

colors.setTheme({
    error: 'red',
    warn: 'yellow',
    info: 'green',
    debug: 'blue'
});

npmlog.info('prefix', 'hello world', 'suffix'.error);
```
:::

### 发布上线

要将您的 npm 包发布到 npmjs.com，需要遵循以下步骤：

1. 创建一个 npm 账户：如果您还没有 npm 账户，请在 npmjs.com 上注册一个账户。

2. 初始化您的 npm 包：在您的包文件夹中，运行  `npm init`  命令来初始化您的包。根据提示输入相关信息并确认。

3. 登录到您的 npm 账户：使用  `npm login`  命令输入您的用户名、密码和邮箱来登录到您的 npm 账户。如果您使用的是 npm Enterprise Server，则需要使用  `npm login --registry=<registry-url>`  命令指定您的 registry URL。

4. 发布您的包：在您的包文件夹中，使用  `npm publish`  命令来发布您的包。如果您的包是私有的，则需要使用  `npm publish --access=<access>`  命令，并指定为  `restricted` 。

::: danger 特别提示

注意！npm 的私有包是要充钱的！

如果发布公用包最好配置一下 package.json，内容如下

```json 
"publishConfig": {
  "access": "public",
  "registry": "https://registry.npmjs.org/"
},
```

:::

5. 验证您的包：使用  `npm view <your-package-name>`  命令来验证您的包已成功发布到 npmjs.com 或您的私有 registry 上。

6. 更新您的包：如果您需要更新您的包，只需更新代码并重复运行  `npm publish`  命令即可。请注意，每次发布后，您的包版本号都必须增加，否则发布将失败。

请注意，发布到 npm 上的包应该遵循一些最佳实践，如添加版本号、更新说明、引用正确的版本等。在发布前，请花时间熟悉并遵循 npm 的官方指南和建议。


