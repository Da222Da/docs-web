---
outline: deep
---

# Design Patterns 设计模式

## 什么是设计模式？

> 业务需求关注于做什么`What`？而设计模式则是针对于业务需求怎么做`How`？

设计模式是一种被广泛使用的解决特定问题的经验性方法。它们是在软件开发中经过多年实践和总结的最佳实践，可以帮助开发人员更有效地解决常见问题，并提高代码的可重用性、可维护性和可扩展性。程序设计模式通常被分为三类：创建型模式、结构型模式和行为型模式。

创建型模式用于处理对象的创建，包括工厂模式、抽象工厂模式、单例模式、建造者模式和原型模式等。

结构型模式用于处理对象之间的关系，包括适配器模式、桥接模式、组合模式、装饰器模式、外观模式、享元模式和代理模式等。

行为型模式用于处理对象之间的通信和交互，包括责任链模式、命令模式、解释器模式、迭代器模式、中介者模式、备忘录模式、观察者模式、状态模式、策略模式、模板方法模式和访问者模式等。

以上是一些常见的程序设计模式，每种模式都有其特定的应用场景和解决问题的方法。学习设计模式需要掌握一些基本概念和原则，并且需要不断地练习和实践。可以参考经典的设计模式书籍、设计模式网站和博客，以及在实际项目中应用设计模式来提高自己的设计模式应用能力。 

::: danger 特别说明: 如何判断一个设计模式的好坏呢？

设计模式的好坏取决于它是否能够解决特定问题并提高代码的可重用性、可维护性和可扩展性。以下是一些评估设计模式好坏的标准：

1. 适用性：设计模式是否适用于当前的问题？如果一个设计模式被错误地应用于一个不适合的问题上，那么它可能会导致代码变得更加复杂和难以维护。

2. 简单性：设计模式是否简单易懂？一个好的设计模式应该是易于理解和实现的，而不是过于复杂和难以理解的。

3. 可重用性：设计模式是否可以在不同的场景中重复使用？一个好的设计模式应该是通用的，可以在不同的应用程序和场景中重复使用。

4. 可扩展性：设计模式是否可以轻松地扩展和修改？一个好的设计模式应该是灵活的，可以轻松地扩展和修改以适应不同的需求。

5. 性能：设计模式是否会影响程序的性能？一个好的设计模式应该是高效的，不会对程序的性能产生负面影响。

总之，一个好的设计模式应该是适用于当前问题、简单易懂、可重用、可扩展和高效的。如果一个设计模式无法满足这些标准，那么它可能不是一个好的设计模式。 


:::

## 编程范式

### 面向对象编程范式

面向对象编程范式，全称 Object-Oriented Programming。就是以对象和类作为组织代码的基本单位进行编码。其目的就是为了实现可复用、可扩展、且高效的程序。

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

#### 静态属性 Static Property
静态属性是指一个类的属性，换句话说，就是跟实例没有关系。

在 TypeScript 中，我们可以使用  `static`  关键字来定义静态属性。下面是一个 TypeScript 类的例子，其中包含一个静态属性：
```ts
class MyClass {
  static myStaticProperty: string = "Hello, world!";
}
```
在这个例子中， `myStaticProperty`  属性是属于  `MyClass`  类的，而不是它的实例。因此，在使用时可以像这样访问它：
console.log(MyClass.myStaticProperty);

```ts
console.log(MyClass.myStaticProperty);
```

这将输出  `Hello, world!` 。请注意，我们不需要创建  `MyClass`  的实例来访问  `myStaticProperty` 。


#### 继承 extends

在面向对象编程(OOP)中，继承是一个概念，其中一个类可以继承另一个类的属性和方法。在 TypeScript 中，您可以使用 `extends` 关键字实现继承。
以下是 TypeScript 中继承的示例：
```ts
class Animal {
	name: string;
	age: number;
	constructor(name: string, age: number) {
		this.name = name;
		this.age = age;
	}
  	getName(): string {
    	return this.name;
    }
	getAge(): number {
		return this.age;
	}
}
class Dog extends Animal {
	breed: string;
	constructor(name: string, age: number, breed: string) {
		super(name, age);
		this.breed = breed;
	}
	getBreed(): string {
		return this.breed;
	}
}
let myDog = new Dog("Fido", 2, "Golden Retriever");
console.log(myDog.getName()); // 输出："Fido"
console.log(myDog.getAge()); // 输出：2
console.log(myDog.getBreed()); // 输出："Golden Retriever"
```
在此示例中，我们有一个名为 `Animal` 的基类，具有 `name` 和 `age` 属性，以及 `getName()` 和 `getAge()` 方法。 `Dog` 类使用 `extends` 关键字扩展 `Animal` 类，并添加了一个新的属性 `breed` 和一个新的方法 `getBreed()` 。我们创建了一个名为 `myDog` 的 `Dog` 实例，并调用它的方法以获取它的名字、年龄和品种。




#### 子类 subclass

子类是继承自基类（也称为父类）的一个派生类，它继承了基类的属性和行为。换句话说，子类是基类的一个更具体的版本。
在面向对象编程中，子类通过声明一个新类并扩展现有类来创建。新类继承了现有类的所有属性和方法，并且还可以添加其自己的特定属性和方法。

例如，考虑具有 `name` 和 `age` 属性以及 `eat()` 和 `sleep()` 方法的 `Animal` 类。可以通过扩展 `Animal` 类并添加新的 `breed` 属性和 `bark()` 方法来创建一个 `Dog` 子类。 `Dog` 子类将继承 `Animal` 类的所有属性和方法，并且可以访问和修改它们。

以下是 TypeScript 中一个 `Dog` 子类的示例：
```ts
class Animal {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  eat() {
    console.log(`${this.name} is eating`);
  }
  sleep() {
    console.log(`${this.name} is sleeping`);
  }
}
class Dog extends Animal {
  breed: string;
  constructor(name: string, age: number, breed: string) {
    super(name, age);
    this.breed = breed;
  }
  bark() {
    console.log(`${this.name} is barking`);
  }
}
let myDog = new Dog('Fido', 2, 'Golden Retriever');
console.log(myDog.name); // 输出： "Fido"
console.log(myDog.age); // 输出： 2
console.log(myDog.breed); // 输出： "Golden Retriever"
myDog.eat(); // 输出： "Fido is eating"
myDog.bark(); // 输出： "Fido is barking"
```
在这个例子中， `Dog` 是 `Animal` 的一个子类或派生类，它通过添加一个新的属性 `breed` 和一个新的方法 `bark()` 来扩展 `Animal` 。 `Dog` 继承了 `Animal` 的属性和方法，因此我们也可以访问它的 `name` ， `age` ， `eat()` 和 `sleep()` 方法。



## 设计模式
### Singleton 单例设计模式 

单例设计模式是一种创建型设计模式，它确保一个类只有一个实例，并提供全局访问点，使得其他对象可以轻松地访问该实例。这种模式通常用于管理共享资源或状态，例如数据库连接池或应用程序配置。

在 TypeScript 中，可以使用类和静态属性来实现单例模式。以下是一个示例代码块，演示如何使用 TypeScript 实现单例模式：

```ts
// 单例设计模式的做法，注意以下两点：
// 1. 不允许在类的外部创建类的实例，而是，使用类的静态属性来创建对象实例。
// 2. 使用类的静态属性来存储实例的原因，除了确保实例的唯一性之外，也是为了在程序的其他地方能够轻松地访问到。
class Singleton {
  // public static instance: new Singleton();
  private static instance: Singleton;

  // 将构造函数设置为私有属性，防止外界实例化对象
  private constructor() {}

  // 提供静态方法 getInstance，用于创建唯一的对象实例
  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }

    return Singleton.instance;
  }

  public someMethod() {
    console.log("Hello, world!");
  }
}

const singletonInstance1 = Singleton.getInstance();
const singletonInstance2 = Singleton.getInstance();

console.log(singletonInstance1 === singletonInstance2); // true
singletonInstance1.someMethod(); // "Hello, world!"
```

在这个示例中，Singleton 类有一个私有的静态属性 instance，它存储了类的唯一实例。getInstance 方法是一个公共的静态方法，它返回 Singleton 类的实例。如果实例不存在，getInstance 方法将创建一个新的实例并将其存储在 instance 属性中。最后，我们可以使用 getInstance 方法来获取 Singleton 类的实例，并调用 someMethod 方法来输出 "Hello, world!"。

::: danger 特别说明: 在单例模式中，为什么非要定义类，而不是直接定义一个对象？
如果我们直接定义实例对象，那么我们将无法确保只有一个实例存在，并且我们也无法提供全局访问点。因此，我们需要定义一个类来管理实例，并使用静态属性来存储实例。这样，我们就可以使用类的方法来访问实例，并确保只有一个实例存在。
:::
