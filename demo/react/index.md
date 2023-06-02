---
outline: deep
---

# React.js

## #Started 开始

### React.js 是什么？

在2013年 React 发布时，主流的UI开发方式仍然是基于浏览器DOM API，精确控制DOM节点的创建、修改和删除。为了保证UI的一致性，我们需要非常小心地处理因为UI更改中的各种数据的更改。

React 通过 JSX 语法，用声明性的方式来描述数据和 UI 之间的关系，当数据发生变化时，UI也会自动发生变化。这样，我们将不再需要关心 DOM 更改了哪些细节`例如，使用 JS 控制某个 DOM 节点的显示和隐藏啊`。而是通过定义数据模型`Model`来映射视图`View`，这样的话，很容易就能保证 UI 的一致性。

所以说，React.js 就是一个构建用户界面的 JavaScript 库。开发者选择使用 React 的原因有以下几点：


| 优点       | 描述                                                                                                                                                         |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 组件化架构 | React 建立在可重用组件的概念上。这使得将复杂的 UI 拆分成更小、更易于管理的部分变得容易。组件可以在应用程序的不同部分重复使用，这可以节省时间并减少代码重复。 |
| 虚拟 DOM   | React 使用虚拟 DOM，它是实际 DOM 的轻量级表示。这使得 React 更有效地更新 UI，因为它只更新了已更改的 DOM 部分。这可以导致更快的渲染时间和更流畅的用户体验。   |
| 声明式语法 | React 使用声明式语法，这意味着开发者描述他们想要的 UI 的外观，React 负责其余部分。这可以使代码更易于理解，并减少错误的可能性。                               |
| 庞大的社区 | React 拥有庞大而活跃的开发者社区，这意味着有大量的资源可用于学习和故障排除。还有许多第三方库和工具可用于 React，这可以帮助开发者更加高效。                   |


总的来说，React 可以是构建复杂、动态用户界面的绝佳选择。然而，需要注意的是，React 只是开发者工具箱中的一个工具，它可能不是每个项目的最佳选择。与任何技术一样，评估其优缺点并选择适合工作的正确工具非常重要。[想要了解更多细节，请移步 React 官方文档](https://react.dev/learn)


### 如何学习 React.js ?

要学习 React，首先需要掌握 JavaScript 的基础知识和基本的前端技术，例如 HTML 和 CSS。接下来可以通过下面的步骤学习 React：

1. 阅读文档：React 官方提供了非常好的文档和教程，可以从官网开始阅读和学习 React 的基础知识和组件化；
2. 做项目：做小项目或练习可以帮助你更好地掌握 React 的特性和开发方式，同时也可以提高你的编程能力；
3. 参加社区：参加 React 社区或参加线下活动可以帮助你更好地了解 React 生态系统和最佳实践；
4. 阅读优秀的源码：阅读一些开源 React 项目的源代码，可以让你了解 React 的内部机制和最佳实践。

以下是一些学习 React 的链接，希望对你有所帮助：

1. [React 官方文档](https://reactjs.org/docs/getting-started.html)：React 官方文档是学习 React 的最佳资源之一。它提供了全面的指南、教程和示例，适合初学者和有经验的开发者。
2. [React 学习路径](https://github.com/adam-golab/react-developer-roadmap)：这是一个 React 学习路径图，它列出了学习 React 所需的所有技能和工具。它适合那些想要深入学习 React 的开发者。



## #Basic Concept 基础概念

> 基本概念：一个主题或领域中最基本、最核心的思想或原理。
>
> React 的核心内容：就是 Component 组件、JSX 模板语法、以及 State 状态。
>
> React 的核心机制: 就是能够在数据发生变化的时候重新渲染 UI`Model => View`.

### 组件 Component

组件是 UI(用户界面)的一部分，它有自己的逻辑和外观。组件可以小到一个按钮，也可以大到整个页面。

在 React 中，所有的 UI 都是通过组件描述和组织的。你可以认为，React 中的所有元素都是组件，具体可以分为以下两种：
1. 内置组件：内置组件是映射到HTML节点的组件，比如div、input、table等，作为一种约定，它们都是小写字母。
2. 自定义组件：自定义组件实际上是创建组件，例如使用时必须以大写字母开头 PageBody。

和 DOM 节点类似，React 组件是以**树状结构**的形式组织在一起的，所以，一个 React 应用通常会有一个根组件 App。

For Example:

::: code-group

```jsx [示例1. 组件声明]
import React from "react";
import { createRoot } from "react-dom/client";
import Page from "./pages";

const root = createRoot(document.getElementById("app"));
root.render(<App />);

// 声明根组件 App
function App() {
	return <>
		<h3>Page Title</h3>
		<main>Page Content</main>
		<footer>Page Footer</footer>
	</>
}
```
:::


### 模板语法 JSX 

> JSX 就是 HTML + JS，把 JS 逻辑写到花括号里面`{}`，放到 HTML 标签里面。

::: danger 注意！

注意！JSX 和 React 是两个独立的东西。它们经常一起使用，但你也可以单独使用它们。JSX 是一个语法扩展，而 React 是一个 JavaScript 库。

:::

JSX 是 JavaScript 的语法扩展，允许您在 JavaScript 文件中编写类似 HTML 的代码。它通常用于 React.js 中定义组件的结构和内容。在代码执行之前，JSX 代码由转换器（如 Babel ）编译为常规 JavaScript 代码。

需要注意的是，虽然 JSX 看起来像 HTML，但它实际上不是 HTML。它是 JavaScript 的语法扩展，允许您在 JavaScript 文件中编写类似 HTML 的代码。这意味着您可以在 JSX 代码中使用 JavaScript 表达式和变量，例如：

所以说，JSX 只是 JS 的语法扩展，其设计目的是为了将 HTML 网页内容和 JS 网页逻辑都能写到 .js 文件中。

For Example:

::: code-group

```jsx [示例1. JS 逻辑]
import React from "react";

function App() {
	var name = "jsx";
	var isConditional = (c) => {
		if (c) {
			return '✔'
		}
		return "false"
	}

	return <>
		{/* JS 变量 */}
		<p>{name}</p>

		{/* JS 表达式 */}
		<p>1 + 1 = {1 + 1}</p>

		{/* 条件渲染 */}
		<div>{true ? '✔' : 'false'}</div>
		<div>{true && '✔'}</div>
		<div>{isConditional(true)}</div>

		{/* 列表渲染 */}
		<List />
	</>
}

function List() {
   var arr = [
      { id: 1, name: '1' },
      { id: 2, name: '2' },
      { id: 3, name: '3' },
   ];
   var listItems = arr.map((item) => <li key={item.id}>{item.name}</li>);
   return <ul>{listItems}</ul>
}
```

```jsx [示例2. Style 样式]
const styleObject = { fontSize: '16px', color: 'red' };

// JSX 模板
const JSXTemplate = <>
	{/* 将 Style 样式写在一个对象 {} 中，再将这个对象塞到 JSX 花括号 {} 里面 */}
	<p Style={styleObject}>JSX is a syntax extension to JavaScript</p>
</>;
```

```jsx [示例3. 绑定事件处理器 Event Handler]
const handleClickEvent = () => alert('You clicked me!');

// JSX 模板
const JSXTemplate = <>
	{/* 绑定事件处理程序 */}
	<button onClick={handleClickEvent}>click me 1</button>
	<button onClick={(e) => {
			e.stopPropagation(); 
			e.preventDefault();
			alert('You clicked me!');
		}
	}> click me 2</button>
</>;
```

:::


### 状态 State

::: tip 特别说明：什么是状态？—— `State Is A Component's Memory`

状态，是定义动态组件的关键`动态组件就是有逻辑的组件`。

组件经常需要在交互过程中改变屏幕上的内容。例如，在表单中输入应该会更新输入字段，在图像转盘上单击“next”应该会更改显示的图像，单击“buy”应该会将产品放入购物车。组件需要“记住”一些东西:当前输入值、当前图像、购物车。在React中，这种类似于组件的内存，被称为状态。

所以说，State 就是 React 保存状态的机制、就是会被 React 记住的值。

梳理一下，React 的核心就是定义数据模型 `Model` 去映射视图 `View`，且当数据模型中的数据发生变化的时候，自动地更新视图。而这里的状态就是数据模型的一部分，即`Modle(props + state) => View`。

:::

#### Hooks

> Hooks，钩子函数，是使用函数组件的关键。
>
> 函数组件，相较于 class 组件而言，更加的简洁、直观、以及逻辑复用。

##### useState

useState，是一个用于定义组件状态的 React 钩子函数，它接受初始状态值作为参数，并返回一个包含两个元素的数组:当前状态值`value`和更新状态值的函数`setValue`。**当使用 setter 函数更新状态值时，将会使用新的状态值重新渲染组件。**

For example:

```js
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
   return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

##### useEffect

- useEffect
	1. 定义：一个用于执行副作用代码的 React 钩子函数。
	2. 函数签名`useEffect(callback, dependencies?)`
    	- 2-1. callback，被执行回调函数。
        	- 2-1-1. 如果 callback 返回了一个回调函数，那么该函数会在组件被卸载和销毁之前执行，用于处理一些清理任务`例如，事件解绑，释放内存`，类似于`componentWillUnmount`生命周期方法。
    	- 2-2. dependencies，依赖项数组（可选参数）。
        	- 2-2-1. 如果没有指定，则回调将在每个函数中的所有组件之后执行。
        	- 2-2-2. 如果指定了依赖项，只有当值发生变化时才会执行。
	3. 执行时机：**useEffect 会在每次组件 Render 完之后，判断依赖项并执行。**

For Example:

::: code-group

```js [示例1：没有依赖项]
import React, { useState, useEffect } from "react";

export function Count() {
	const [count, setCount] = useState(0);

	// 没有第二个参数依赖项，每次组件渲染完之后，就会执行
	useEffect(() => console.log('effect'));

	return (
		<div>
			<p>You clicked {count} times</p>
			<button onClick={() => setCount(count + 1)}>Click me</button>
		</div>
	);
}

```

```js [示例2：有依赖项]
import React, { useState, useEffect } from "react";

export function Count() {
	const [count, setCount] = useState(0);
	const [name, setName] = useState('');

	function handleNameChange(event) {
		setName(event.target.value);
	}

	// 有依赖项，第一次渲染以及依赖项 count 发生变化之后，就会执行
	useEffect(() => console.log('effect'), [count]);

	return (
		<div>
			<p>You clicked {count} times</p>
			<button onClick={() => setCount(count + 1)}>Click me</button>
			<hr />
			<input type="text" value={name} onChange={handleNameChange} />
			<p>Hello, {name}!</p>
		</div>
	);
}

```

```js [示例3：依赖项为空数组]
import React, { useState, useEffect } from "react";

export function Count() {
	const [count, setCount] = useState(0);

	// 组件首次渲染时执行，类似于 class 组件中的 componentDidMount 生命周期函数
	useEffect(() => console.log('effect'), []);

	return (
		<div>
			<p>You clicked {count} times</p>
			<button onClick={() => setCount(count + 1)}>Click me</button>
		</div>
	);
}

```

:::

::: warning 特别说明：什么是副作用函数呢？

什么是副作用函数呢?通常，副作用是指一段与当前执行结果无关的代码。例如，修改函数外部的变量，发起请求，等等。换句话说，在函数组件的当次执行过程中，useEffect 中代码执行不会影响到渲染出来的 UI 结果。

:::

##### useCallback

- useCallback 缓存回调函数
	1. 定义：一个用于缓存函数的 React 钩子函数。
	2. 函数签名`useCallback(callback, dependencies?)`
    	- 2-1. callback，被执行回调函数。
    	- 2-2. dependencies，依赖项数组（可选参数）。只有当某个依赖变量发生变化时，才会重新申明 callback 回调函数。
	3. 意义：提高系统性能。

For Example:

```js
import React, { useState, useCallback } from 'react';
 function MyComponent() {
  const [count, setCount] = useState(0);
   const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]); // 只有当 count 发生变化时，才会重新创建回调函数。
   return (
    <div>
      <p>You clicked {count} times</p>
      <ChildComponent onClick={handleClick} />
    </div>
  );
}
 function ChildComponent({ onClick }) {
  return <button onClick={onClick}>Click me</button>;
}
```

::: danger 为什么要使用 useCallback 呢?
假设上述示例中，没有使用 useCallback 来缓存 handleClick 的话。无论 count 状态是否改变，只要组件重新发生渲染。那么，handleClick 函数会被重新定义，与之相关的 ChildComponent 组件也会被重新渲染，影响系统性能。  
:::
