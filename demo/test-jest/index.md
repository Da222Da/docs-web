---
outline: deep
lastUpdated: true
---

# Jest：JavaScript 单元测试框架

## Jest 是什么？

Jest <Badge type="info" text="^29.5.0" /> 是一个 JavaScript 单元测试框架。[点击官网，查看更多内容 →→](https://jestjs.io/)

## 为什么选 Jest 作为单元测试框架?

选用 Jest 作为单元测试框架的优点：

1. 集成度高：Jest 可以与 React、Vue、Angular 等主流 JavaScript 框架及 Babel、Webpack 等工具集成，使得编写测试用例更加便捷。
2. 缺陷定位快速：Jest 提供了丰富的测试 API 和高度的自动化，可以快速发现代码缺陷及修复。
3. 运行速度快：Jest 采用并行执行测试用例的策略，同时支持多线程执行，使得测试运行速度更快。
4. 覆盖率报告全面：Jest 的测试覆盖率报告功能可以帮助开发者更全面地了解测试用例的质量和代码覆盖情况。
  
综上，Jest 是一款功能强大、易于使用、性能高效的 JavaScript 单元测试框架。


## 如何学习 Jest 呢？

学习 Jest 可以按照以下步骤进行：
 1. 安装 Jest: 首先在自己的项目中安装 Jest，可以使用 npm 或者 Yarn 安装，比如 npm install jest。安装完成后，在 package.json 文件中，可以看到 Jest 相关的配置和命令。
 2. 编写测试用例：根据自己的项目和业务场景，编写测试用例，并检查测试用例的正确性和覆盖率。这一步需要了解 Jest 的语言规范和测试 API。
 3. 运行测试用例：使用 Jest 提供的命令行工具或者编辑器插件，运行测试用例并查看测试报告。
 4. 集成其他工具：可以将 Jest 与其他工具集成，如 Babel、Webpack、ESLint 等，以便更好地利用 Jest 的特性和功能。
 5. 深入学习：可以通过阅读 Jest 的官方文档、博客、GitHub 等渠道，深入学习 Jest 的原理和应用，从而优化自己的测试代码和实践。
 在学习的过程中，需要注重实践和经验积累，通过不断编写测试用例和运行测试，逐渐熟悉 Jest 的语法和功能，形成自己的测试习惯和风格。

## 附录 A：Tips 小贴士

### Jest Configuration

- 初始化配置文件 jest.config.js `jest --init`


### Jest Usage

---

#### Matcher 匹配器

在 Jest 中，Matcher 是用于断言测试结果是否符合预期的一种机制。Matcher 由 Jest 提供，可以匹配不同类型的值，包括布尔值、数字、字符串、正则表达式、对象、数组等。使用 Matcher 可以方便地验证测试结果是否符合预期，并输出错误信息帮助调试。
Jest 提供了多种 Matcher，如  `.toBe()` 、 `.toEqual()` 、 `.toContain()` 、 `.toMatch()`  等。这些 Matcher 可以根据实际情况进行选择，并搭配使用，以输出更清晰、更准确的测试结果。
下面是几种常用的 Matcher：
-  `.toBe()` ：比较两个值是否完全相等，包括类型和值。
-  `.toEqual()` ：比较两个值是否相等，只比较值是否相等，而不比较类型。
-  `.toContain()` ：检查某个元素是否包含在数组或字符串中。
-  `.toMatch()` ：匹配字符串是否符合正则表达式的规则。
-  `.toThrow()` ：检查一个函数是否抛出某个异常。
所有 Matcher 的使用方法都类似，以  `.toBe()`  为例，示例如下：

```js
test('two plus two is four', () => {
  expect(2 + 2).toBe(4);
});
```
以上代码中， `.toBe()`  匹配两个值是否相等，并输出错误信息，以帮助调试。Jest 的 Matcher 非常灵活，可以根据实际情况满足不同的测试需求。

#### Asynchronous Code 异步代码

为了测试异步代码，Jest 提供了多种方式：

1. 使用  `.then()/.catch()` ：通过  `.then()/.catch()`  方法来检查异步代码的返回结果，并处理错误。
```js
test('test async function', () => {
  return fetchData().then(data => {
    expect(data).toEqual('hello');
  });
});
 // fetchData() 定义
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('hello');
    }, 1000);
  });
}
```

2. 使用  `.resolves/.rejects` ：使用  `.resolves/.rejects`  声明期望返回值是否符合预期，这种方法简洁明了。
```js
test('test async function', () => {
  return expect(fetchData()).resolves.toEqual('hello');
});
// fetchData() 定义
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('hello');
    }, 1000);
  });
}
```

3. 使用  `async/await` ：使用  `async/await`  异步函数语法来处理异步代码，这种方法也很直观。
```js
test('test async function', async () => {
  const data = await fetchData();
  expect(data).toEqual('hello');
});
 // fetchData() 定义
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('hello');
    }, 1000);
  });
}
```
以上是几种常用的测试异步代码的方式。使用 Jest，可以很方便地处理异步测试，提高测试代码品质和开发效率。


#### Mock Functions 模拟函数

Mock Functions 是 Jest 中的一种内置模拟函数，主要用于模拟被测试代码中的函数、模块、对象等。Mock Functions 可以帮助在测试时，控制函数调用和返回值，以便更精确地测试被测试代码的逻辑和行为。
使用 Mock Functions 可以模拟被测函数的返回结果，以便测试其他函数的逻辑。另外，Mock Functions 还可以模拟 API 请求、数据库查询等场景，以便在测试环境中轻松进行集成测试。
在 Jest 中，可以使用  `jest.fn()`  方法创建一个 Mock Function，具体用法如下：
```js
const fn = jest.fn();
test('mock function test', () => {
  fn('hello');

	// 检测模拟函数是否被调用
  expect(fn).toHaveBeenCalled();

	// 检测模拟函数调用时，传的参数是不是 'hello'
  expect(fn).toHaveBeenCalledWith('hello');
});
```
以上代码中，首先使用  `jest.fn()`  方法创建了一个 Mock Function，然后在测试用例中调用该函数并检查函数是否被调用，以及传入的参数是否正确。
除了基本的调用、传参和返回值功能，Mock Functions 还支持其他属性和方法，如  `.mock.calls`  可以获取调用次数和参数， `.mock.results`  可以获取所有调用的结果等。Mock Functions 提供了丰富的功能和 API，可以满足多种测试场景的需求。
