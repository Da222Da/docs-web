---
outline: deep
---

# React.js

## 1. React.js 是什么？

React.js 是一个使用 `Components 组件` 来构建用户界面的 JavaScript 库。开发者选择使用 React 的原因有以下几点：


| 优点       | 描述                                                                                                                                                         |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 组件化架构 | React 建立在可重用组件的概念上。这使得将复杂的 UI 拆分成更小、更易于管理的部分变得容易。组件可以在应用程序的不同部分重复使用，这可以节省时间并减少代码重复。 |
| 虚拟 DOM   | React 使用虚拟 DOM，它是实际 DOM 的轻量级表示。这使得 React 更有效地更新 UI，因为它只更新了已更改的 DOM 部分。这可以导致更快的渲染时间和更流畅的用户体验。   |
| 声明式语法 | React 使用声明式语法，这意味着开发者描述他们想要的 UI 的外观，React 负责其余部分。这可以使代码更易于理解，并减少错误的可能性。                               |
| 庞大的社区 | React 拥有庞大而活跃的开发者社区，这意味着有大量的资源可用于学习和故障排除。还有许多第三方库和工具可用于 React，这可以帮助开发者更加高效。                   |


总的来说，React 可以是构建复杂、动态用户界面的绝佳选择。然而，需要注意的是，React 只是开发者工具箱中的一个工具，它可能不是每个项目的最佳选择。与任何技术一样，评估其优缺点并选择适合工作的正确工具非常重要。


## 2. 如何学习 React.js

要学习 React，首先需要掌握 JavaScript 的基础知识和基本的前端技术，例如 HTML 和 CSS。接下来可以通过下面的步骤学习 React：

1. 阅读文档：React 官方提供了非常好的文档和教程，可以从官网开始阅读和学习 React 的基础知识和组件化；
2. 做项目：做小项目或练习可以帮助你更好地掌握 React 的特性和开发方式，同时也可以提高你的编程能力；
3. 参加社区：参加 React 社区或参加线下活动可以帮助你更好地了解 React 生态系统和最佳实践；
4. 阅读优秀的源码：阅读一些开源 React 项目的源代码，可以让你了解 React 的内部机制和最佳实践。

以下是一些学习 React 的链接，希望对你有所帮助：

1. [React 官方文档](https://reactjs.org/docs/getting-started.html)：React 官方文档是学习 React 的最佳资源之一。它提供了全面的指南、教程和示例，适合初学者和有经验的开发者。
3. [React 学习路径](https://github.com/adam-golab/react-developer-roadmap)：这是一个 React 学习路径图，它列出了学习 React 所需的所有技能和工具。它适合那些想要深入学习 React 的开发者。
<!-- 
6. React 实战教程和项目： https://www.codecademy.com/catalog/language/reactjs
7. React 源码解读： https://react.jokcy.me/ -->



## 附录A: Tips 小贴士

### 基础概念

--- 

#### 模板语法 JSX 


::: tip 特别说明：JSX 语法是什么？

JSX 是 JS 的语法扩展，是为了将 HTML 网页内容和 JS 网页逻辑都能写到 .js 文件中，核心如下:

1. 将 `JS 变量、表达式等脚本逻辑部分`写在 JSX 花括号 {} 里面
2. 将 `Style 样式`写在一个对象 {} 中，再将这个对象塞到 JSX 花括号 {} 里面

:::

::: danger 注意！

注意！JSX 和 React 是两个独立的东西。它们经常一起使用，但你也可以单独使用它们。JSX 是一个语法扩展，而 React 是一个 JavaScript 库。

:::

JSX 是 JavaScript 的语法扩展，允许您在 JavaScript 文件中编写类似 HTML 的代码。它通常用于 React.js 中定义组件的结构和内容。在代码执行之前，JSX 代码由转换器（如 Babel ）编译为常规 JavaScript 代码。

需要注意的是，虽然 JSX 看起来像 HTML，但它实际上不是 HTML。它是 JavaScript 的语法扩展，允许您在 JavaScript 文件中编写类似 HTML 的代码。这意味着您可以在 JSX 代码中使用 JavaScript 表达式和变量，例如：

```jsx
const name = "JSX";

// JSX 模板
const JSXTemplate = <>
	{/* 1.将 JS 逻辑写在 JSX 花括号 {} 里面 */}
	<h1>Hello, {name}!</h1>

	{/* 2.将 Style 样式写在一个对象 {} 中，再将这个对象塞到 JSX 花括号 {} 里面 */}
	<p style={{ fontSize: '16px' }}>JSX is a syntax extension to JavaScript</p>
</>;
```

#### 组件 Component

> React.js 里面的 `component` 组件，本质上是一个返回 `JSX` 的 `function` 函数。


组件是 UI(用户界面)的一部分，它有自己的逻辑和外观。组件可以小到一个按钮，也可以大到整个页面。例如

::: code-group 

```js [组件定义 page.js]
import React from "react";

// 网页组件
function Page() {
	const listData = [
		{ id: 1, text: 'item 1', isShown: true },
		{ id: 2, text: 'item 2', isShown: false },
		{ id: 3, text: 'item 3', isShown: true },
	]
	return <>
		<h3>Page Title</h3>
		<PageBody content="Page Content" listData={listData} />
		<footer>Page Footer</footer>
	</>
}

// 子组件
// 组件通信：将 markup attribute 当做形参传给 JSX Function
// 组件条件渲染: 与 JS 差不多
// 组件列表渲染: 与 JS Array 差不多，不过需要注意 key，因为组件可能会发生变化，需要用到唯一标识。
function PageBody(props) {
	const { content, listData } = props;
	return <main>
		<h3>{content}</h3>
		<ul>
			{listData.map(item => item.isShown && <li key={item.id}>{item.text}</li>)}
		</ul>
	</main>
}

export default Page;

```

```js [入口文件 main.js]
import React from "react";
import { createRoot } from "react-dom/client";
import Page from "./pages";

const root = createRoot(document.getElementById("app"));
root.render(<Page />);

```
:::

<!-- #### 状态 State

::: tip 特别说明：什么是状态？

状态 State，就是会发生变化的数据。导致数据发生变化的因素可能是“用户交互”、“时间”等等

总之，我们需要知道 —— 如何对 `State 状态`进行“增删改查”、统一管理？

::: -->






