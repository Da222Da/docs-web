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
let person = new Person("张三", 30);
person.sayHello(); // 输出：Hello, my name is Alice and I am 30 years old.
