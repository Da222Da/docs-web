# 玩一下 Sandpack

> Sandpack 在网页中创建交互式代码。

## Sandpack 是什么？

Sandpack是一个在线代码编辑器和web开发环境，允许您实时创建、编辑和协作web项目。它提供了一个用于测试和试验代码的沙盒环境，以及用于构建和部署web应用程序的一系列工具和特性。Sandpack支持多种编程语言和框架，包括React、Vue.js、Angular、Node.js等。

总结一句话，使用 Sandpack，你可以轻松地创建交互式组件并实时测试代码，而无需离开浏览器。

## 快速开始 Quickstart

```js
import React from "react";
import { createRoot } from "react-dom/client";
import { Sandpack } from "@codesandbox/sandpack-react";

// Render your React component instead
const root = createRoot(document.getElementById("app"));
root.render(<>
		<Sandpack />
</>);
```

## 样式主题 themes

`@codesandbox/sandpack-react` 默认给我们提供了十几种主题，除此之外，还支持自定义主题样式。[具体实现细节，请移步官网](https://sandpack.codesandbox.io/docs/getting-started/themes)

For Example:

```js
import { Sandpack } from "@codesandbox/sandpack-react";
import { atomDark } from "@codesandbox/sandpack-themes";

export default function () {
	return <Sandpack theme={atomDark} />
}
```

## 项目模板 Template

模板是指预定义项目结构`类似于 cli 初始化的功能`。能让我们快速地设置具有基本结构和样式的项目，而不是从头开始。[具体实现细节，请移步官网](https://sandpack.codesandbox.io/docs/getting-started/usage)

For Example:

```js
import { Sandpack } from "@codesandbox/sandpack-react";

export default function () {
	return <Sandpack template="react" />
}
```

## 自定义代码 Files

如果你很希望能将自定义代码传递到 Sandpack 实例中。要做到这一点，最简单的方法是通过files prop 添加和覆盖文件。[具体实现细节，请移步官网](https://sandpack.codesandbox.io/docs/getting-started/usage#files)

For Example:

```js
import { Sandpack } from "@codesandbox/sandpack-react";

export default function () {
	return <Sandpack
		template="react"
		files={{
			"/App.js": `import Content from "./content.js";\nexport default function App() { \n\treturn <Content />\n}`,
			"/content.js": {
				code: `export default function Content() { \n\treturn <h1>Hello Sandpack</h1>\n}`,
				action: true, // 设置默认选中
				readOnly: true, // 设置只读
			}
		}}
	/>
}
```


