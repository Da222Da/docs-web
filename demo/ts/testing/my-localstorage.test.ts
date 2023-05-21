import { JSDOM } from "jsdom";
import MyLocalStorage from "../src/my-localstorage";

// 创建虚拟 DOM
const dom = new JSDOM("", { url: "http://localhost" });
// 将全局变量设置为虚拟 DOM 中的对象
global.document = dom.window.document;
global.localStorage = dom.window.localStorage;

// 测试 getItem 函数
test("getItem 获取本地存储中存在的键对应的 value", () => {
	// 设置
	const key = "testKey";
	const expectedValue = { name: "test", age: 25 };
	localStorage.setItem(key, JSON.stringify(expectedValue));
	// 执行
	const result = MyLocalStorage.getIntance().getItem(key);
	// 断言
	expect(result).toEqual(expectedValue);

	// 删除
	localStorage.removeItem(key);
});
test("getItem 获取本地存储中不存在的键返回 null", () => {
	// 设置
	const key = "testKey";
	// 执行
	const result = MyLocalStorage.getIntance().getItem(key);
	// 断言
	expect(result).toBeNull();
});

// 测试 setItem 函数
test("setItem 对于字符串类型输入，正确设置键值对", () => {
	// 设置
	const key = "testKey";
	const value = "testValue";
	// 执行
	MyLocalStorage.getIntance().setItem(key, value);
	// 断言
	expect(localStorage.getItem(key)).toBe(value);

	// 删除
	localStorage.removeItem(key);
});
test("setItem 对于对象类型输入，正确设置键值对", () => {
	// 设置
	const key = "testKey";
	const value = { name: "test", age: 25 };
	// 执行
	MyLocalStorage.getIntance().setItem(key, value);
	// 断言
	expect(localStorage.getItem(key)).toBe(JSON.stringify(value));

	// 删除
	localStorage.removeItem(key);
});
