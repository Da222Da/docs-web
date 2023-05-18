---
outline: deep
---

# TypeScript

## 1. TypeScript 是什么？

TypeScript 是一种由微软开发的开源编程语言`静态语言`。它是 JavaScript 的超集，能够在编写 JavaScript 代码时提供更好的类型检查和编译时错误检查。TypeScript 还具有许多其他功能，例如接口、类、命名空间和模块等。TypeScript 编译器将 TypeScript 代码转换为 JavaScript 代码，从而可以在任何支持 JavaScript 的平台上运行。它被广泛应用于构建大型、复杂的 web 应用程序、框架和库等领域。。[点击官网，查看更多内容 →→](https://www.typescriptlang.org/)

## 2. 为什么使用 TypeScript？

与 JavaScript 相比，使用 TypeScript 有以下优点：

1.  更好的可读性和可维护性：TypeScript 提供了强类型和代码提示的功能，让代码更易于阅读和理解，减少了出错的可能性，提高了代码的可维护性。
2.  更好的开发体验：TypeScript 提供了更高级的语法和工具支持，让开发者可以更快速地编写代码，提高了开发效率。
3.  更好的代码组织：TypeScript 支持面向对象编程和模块化编程，可以更好地组织代码，让代码更易于管理和扩展。
4.  更高的自动化测试效率：TypeScript 可在编译时进行类型检查，让问题可以在编译时被检查到，避免了运行时的一些错误，提高了自动化测试效率。
5.  与 JavaScript 的兼容性：TypeScript 可以无缝地集成到 JavaScript 项目中，也可以使用 JavaScript 库和框架，具有很好的兼容性。

综上所述，TypeScript 在 JavaScript 项目中的使用可以提高代码的可读性、可维护性、开发效率和自动化测试效率。

## 3. 如何学习 TypeScript？

建议阅读以下内容：

- [阅读 TypeScript 官网](https://www.typescriptlang.org/)

## 附录 A: Tips 小贴士

### A1. Configuration 配置

---

#### 在 NodeJS 环境下，运行 ts?

要在 Node 环境下直接运行 TypeScript 文件，需要进行以下步骤：

1. 全局安装 TypeScript：  `npm install -g typescript` 

2. 在 TypeScript 文件中编写代码，例如：
```js
const message: string = "Hello, TypeScript!";
console.log(message);
```
3. 使用 TypeScript 编译器将 TypeScript 文件编译成 JavaScript 文件： `tsc index.ts` 
4. 运行编译后的 JavaScript 文件： `node index.js` 

::: danger 特别说明：使用 ts-node 直接运行 TypeScript（无需编译）
如果你想要在运行 TypeScript 文件的同时自动编译 TypeScript 代码，可以使用  `ts-node`  工具。 

`ts-node`  是一个基于 Node.js 的 TypeScript 运行环境，可以直接运行 TypeScript 脚本文件，省去了手动将 TypeScript 语法转换为 JavaScript 语法，然后再运行的过程，类似于 Node.js 自带的 REPL (Read-Eval-Print Loop)，但是可以直接支持 TypeScript 语法。 

具体操作步骤如下：
1. 安装  `ts-node` ： `npm install --save-dev nodemon ts-node` 
2. 在 package.json 中添加开发环境的配置项：

      ```json
      "scripts": {
        "dev": "nodemon --exec ts-node src/index.ts"
      }

      ```
3. 运行  npm run dev ，即可启动热更新模式。 

   在运行  npm run dev  后， nodemon  会监听 TypeScript 文件的变化，并在文件发生变化时自动重启应用。同时， ts-node  会自动编译 TypeScript 文件，这样就可以实现 TypeScript 文件的热更新了。 

需要注意的是，使用  ts-node  作为开发环境的运行工具虽然方便，但是性能较差。在生产环境中，我们通常会使用 TypeScript 编译器将 TypeScript 文件编译为 JavaScript 文件后再进行部署和运行。
:::

#### 如何使用 Jest 测试 ts 代码？

使用 Jest 测试 TypeScript 代码通常需要进行以下步骤：

1. 安装 Jest 和 ts-jest`npm install --save-dev jest ts-jest @types/jest`

::: warning 特别说明: ts-jest 是什么？

`ts-jest`  是一个 Jest 的预设 (preset)，用于在 Jest 中使用 TypeScript。使用它，你可以在 Jest 中编写 TypeScript 测试，并享受 TypeScript 的类型检查和其他功能。具体而言， `ts-jest`  提供了一个 TypeScript 编译器，用于在运行测试前将 TypeScript 代码编译成 JavaScript 代码。这样，就可以在 Jest 中运行 TypeScript 代码，并对其进行测试。

:::

1. 新建  `jest.config.js`  文件，配置 Jest 的 TypeScript 相关选项：
```js
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
};
```

1. 在  `package.json`  中添加 Jest 的测试脚本：
```json
{
  // ...
  "scripts": {
    "test": "jest"
  }
}
```

1. 编写测试文件，例如：
```ts
// math.test.ts
import { sum } from './math';
 test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
```
1. 最后，运行测试 `npm test`

### A2. Usage 用法

---

####  函数重载

函数重载，全称“函数签名重载（function signature overload）”，是指对函数签名进行细分的一种编程技术，可以提高代码的可读性和可维护性，但是，需要注意合理使用，避免引起代码错误和混乱。

::: warning Title: 什么是函数签名 function signature?

一个函数 function = 函数签名(function signature) + 函数体（function body）

函数签名(function signature) = 函数名称 + 函数参数 + 函数参数类型 + 函数返回值类型

:::

::: code-group 

```ts [示例1: 不使用函数签名重载]

type MessageType = "image" | "audio" | string;
type Message = {
	id: number;
	type: MessageType;
	content: string;
};

const message: Array<Message> = [
	{ id: 0, type: "text", content: "text 1" },
	{ id: 1, type: "image", content: "image 1" },
	{ id: 2, type: "image", content: "image 2" },
	{ id: 3, type: "audio", content: "audio 1" },
	{ id: 4, type: "audio", content: "audio 2" },
	{ id: 5, type: "audio", content: "audio 3" },
];


// 缺点：函数结构不清晰、可读性差、可维护性差。
function getMessage(value: number | MessageType): Message | Array<Message> | undefined {
	if (typeof value === "number") {
		return message.find((msg) => value === msg.id);
	} else {
		return message.filter((msg) => value === msg.type);
	}
}


export default getMessage;


```

```ts [示例2: 使用函数签名重载]

type MessageType = "image" | "audio" | string;
type Message = {
	id: number;
	type: MessageType;
	content: string;
};

const message: Array<Message> = [
	{ id: 0, type: "text", content: "text 1" },
	{ id: 1, type: "image", content: "image 1" },
	{ id: 2, type: "image", content: "image 2" },
	{ id: 3, type: "audio", content: "audio 1" },
	{ id: 4, type: "audio", content: "audio 2" },
	{ id: 5, type: "audio", content: "audio 3" },
];

// 函数签名重载
function getMessage(value: number): Message | undefined; 
function getMessage(value: MessageType, count?: number): Array<Message>; 

// 函数签名
// 函数签名的参数类型与返回值类型一定得包含函数重载签名的参数类型与返回值类型，例如 any 类型就包含了 number 类型与 messageType 类型。
// 注意！此处之所以省略返回值类型，是因为 TS 有类型推断的能力。
function getMessage(value: any, count?: number) {
	if (typeof value === "number") {
		return message.find((msg) => value === msg.id);
	} else {
		return message.filter((msg) => value === msg.type).splice(0, count);
	}
}

export default getMessage;


```

:::


