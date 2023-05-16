---
outline: deep
---

# OOP 编程范式

## 什么是 OOP 编程范式？

OOP 是面向对象编程（Object-Oriented Programming）的缩写。它是一种程序设计范式，它将数据和数据上的操作封装在一起，形成一个独立的对象。这种编程方式提高了代码的可重用性、灵活性和可维护性，使程序设计更加模块化和高效。在面向对象编程中，一个模块化的程序是由各种对象和对象之间的相互作用组成的。每个对象都包含了自己的数据和操作，并能够与其他对象相互协作完成一个复杂的任务。

| 优点                                                                         | 缺点                                                                                    |
| ---------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| 可维护性强：程序被分解成了多个独立的对象，便于管理和修改。                   | 较为复杂：OOP编程需要使用多个类，类与类之间的关系比较复杂。                             |
| 代码重用性高：多个对象可以共享同一块代码，避免重复编写。                     | 运行速度较慢：使用OOP编程的程序运行速度较慢，因为需要创建多个对象。                     |
| 可扩展性强：增加新功能时，只需要添加一个新的对象，不需要修改程序的原有结构。 | 学习门槛较高：对于初学者而言，OOP编程有一定的学习曲线，需要花费较多的时间去理解和掌握。 |
| 抽象化程度高：程序代码与现实世界中的问题相对应，易于理解。                   |                                                                                         |
| 安全性强：数据被封装在对象内部，其他对象不能直接访问。                       |                                                                                         |
 
综上所述，OOP编程适用于对实体进行建模的应用程序，包括游戏、3D图形、Web应用程序、数据库等领域。OOP编程可以实现较高的可维护性和代码重用性，使得程序结构更加清晰，易于维护和扩展，因此广泛应用于工业和商业领域中。

## 为什么学习 OOP 编程范式？

学习 OOP 编程范式的原因有以下几个：
1. 提高代码的可重用性：使用 OOP，您可以将特定的功能打包成包含数据和操作的对象，这些对象可以在程序中多次使用。这样可以减少代码的重复编写。
2. 提高代码的灵活性：使用 OOP，您可以根据不同的需求来创建对象，从而可以编写更加通用、可扩展的代码。
3. 提高代码的可维护性：OOP编程将数据和操作封装在一起，使代码更加模块化。这样，如果要进行更改或修复程序代码，只需要在特定的对象中进行更改，而不必查找整个代码库。
4. 提高程序的开发效率：OOP编程让程序员可以对程序的不同部分进行并行开发，这样可以大大减少开发时间。
总之，OOP 编程范式是一种强大的编程范式，可以帮助程序员更加高效地编写代码。


## 如何学习 OOP 编程范式？

以 TypeScript 为例，学习 OOP 编程范式，建议从以下几个方面入手：

1. 学习 TypeScript 的基础语法，包括变量、数据类型、函数、类、模块等。
2. 了解 TypeScript 的面向对象编程特性，包括封装、继承、多态、抽象类、接口等。
3. 实践编写 TypeScript OOP 编程范式的代码，例如实现一个简单的类和对象、继承、多态等。
   
以下是一些可以参考的 TypeScript OOP 学习教程：

| No. | Title                                     | Link                                                                               |
| --- | ----------------------------------------- | ---------------------------------------------------------------------------------- |
| 1.  | TypeScript documentation                  | https://www.typescriptlang.org/docs/handbook/classes.html                          |
| 2.  | Object-Oriented Programming in TypeScript | https://www.sitepoint.com/object-oriented-programming-in-typescript/               |
| 3.  | TypeScript OOP Concepts                   | https://www.tutorialsteacher.com/typescript/typescript-object-oriented-programming |

此外，还有一些在线教育平台，例如 Udemy、Pluralsight 等，提供了 TypeScript OOP 编程相关的课程，可以根据个人需求选择适合自己的在线教程。


## 附录 A: Tips 小贴士

### 基础知识

---

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

实例对象 instance 就是类的一个具体表现，是一个具体属性和方法的实体·。

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
