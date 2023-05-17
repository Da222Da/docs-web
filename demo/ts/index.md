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

### A1. Config 配置

---

#### A1-1. tsconfig.js 配置文件说明

- 初始化配置文件 tsconfig.js `pnpm add -g typescript && tsc --init`
- compilerOptions
  - rootDir, 设置 .ts 源文件所在目录
  - outDir, 设置编译文件保存目录

### A2. Usage 用法

---

#### A2-1. 函数重载

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
function getMessage(value: number): Message | undefined; // 函数重载签名
function getMessage(value: MessageType, count?: number): Array<Message>; // 函数重载签名

// 函数签名
// 函数签名的参数类型与返回值类型一定得包含函数重载签名的参数类型与返回值类型
function getMessage(value: any, count?: number): Message | undefined | Array<Message> {
	if (typeof value === "number") {
		return message.find((msg) => value === msg.id);
	} else {
		return message.filter((msg) => value === msg.type).splice(0, count);
	}
}

export default getMessage;


```

:::

