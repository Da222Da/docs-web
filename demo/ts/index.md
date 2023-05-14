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

### CLI 脚手架

|   指令名称   |            说明            |
| :----------: | :------------------------: |
| `tsc --init` | 初始化配置文件 tsconfig.js |

### tsconfig.js 配置文件

- compilerOptions
  - outDir, 设置编译文件保存目录
  - rootDir, 设置 .ts 源文件所在目录
  -

### TS 类

#### 类 class

类，是一种抽象概念，是从众多具有相同属性和方法的对象中抽象而来，能够起到一个“模具”的作用。例如，下面代码中抽象的人类？

```ts
class Person {
	// 类上定义的属性有什么要求呢？
	// 注意！类上定义的属性，一定得是用来描述该类本身的变量，不要写无关变量。
	private name: string;
	public age: number;
	constructor(name: string, age: number) {
		this.name = name;
		this.age = age;
	}
	public sayHello(): void {
		console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
	}
}
```

#### 实例对象 instance

::: danger Title: 什么是实例对象？

实例对象 instance 就是类的一个具体表现，是一个具体属性和方法的实体想·想·。

:::

实例对象 instance，是指从类中创建出的具体对象，使用 new 关键字创建对象实例时，会调用类的构造函数来进行对象的初始化。每个对象实例都有自己独立的属性和方法，可以对这些属性和方法进行读取和修改。同时，对象实例也能够继承父类的属性和方法，并可以复写父类中的方法。下面是一个 TypeScript 对象实例的示例：

```ts
class Person {
	private name: string;
	public age: number;
	constructor(name: string, age: number) {
		this.name = name;
		this.age = age;
	}
	public sayHello(): void {
		console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
	}
}
class Student extends Person {
	private grade: string;
	constructor(name: string, age: number, grade: string) {
		super(name, age);
		this.grade = grade;
	}
	public sayHello(): void {
		console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and I am in grade ${this.grade}.`);
	}
}
let person = new Person("Alice", 30);
let student = new Student("Bob", 20, "A");
person.sayHello(); // 输出：Hello, my name is Alice and I am 30 years old.
student.sayHello(); // 输出：Hello, my name is Bob, I am 20 years old, and I am in grade A.
```

#### 构造器 constructor

在 TypeScript 中，构造器是用来创建和初始化类的对象实例的特殊方法，它是在 `new` 关键字调用类时自动执行的。构造器方法的名称必须为 `constructor` ，它可以接受多个参数，并可以进行一些初始化操作。构造器方法可以使用访问修饰符来控制属性的访问权限，例如 `private` 、 `public` 和 `protected` 。构造器方法不需要显式地返回任何值，它会自动返回实例对象本身。下面是一个 TypeScript 构造器的示例：

```ts
class Person {
	private name: string;
	public age: number;
	constructor(name: string, age: number) {
		this.name = name;
		this.age = age;
	}
	public sayHello(): void {
		console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
	}
}
let person = new Person("Alice", 30);
person.sayHello(); // 输出：Hello, my name is Alice and I am 30 years old.
```
