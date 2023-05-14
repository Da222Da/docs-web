---
outline: deep
---

# Jest：JavaScript 单元测试框架

## Jest 是什么？

Jest 是一个 JavaScript 单元测试框架。[点击官网，查看更多内容 →→](https://jestjs.io/)

## Jest 如何使用？

## 附录 A：Jest 知识体系

### Jest CLI [脚手架]

|   指令名称    |             说明              |
| :-----------: | :---------------------------: |
| `jest --init` | 初始化配置文件 jest.config.js |

### Jest Configuration [配置文件]

### Jest API

- Globals 全局设定
  - `describe(name, fn)` 用于创建一个测试块
  - `test(name, fn, timeout)` 用于编写测试用例
- Expect 断言
  - `expect(value)` 预期函数
  - Modifiers 修改器
    - .not 取反 `例如，expect(2).not.toBe(3)`
  - Matchers 匹配器
    - .toEqual(value) 检验值相等`原始值 & 引用集合`
    - .toBe(value) 校验原始值相等`===`
    - .toBeGreaterThan(value) 大于`>`
    - .toBeGreaterThanOrEqual(value) 大于等于`>=`
    - .toBeLessThan(value) 小于`<`
    - .toBeLessThanOrEqual(value) 大于`<=`
    - .toBeCloseTo(number, numDigits?) 校验浮点数`0.1 + 0.2 == 0.3`
    - .toBeNull() 只校验 null 值 `null`
    - .toBeUndefined() 只校验 undefined 值 `undefined`
    - .toBeTruthy() 匹配 if 语句视为 true 的任何内容`if true`
    - .toBeFalsy() 匹配 if 语句视为 false 的任何内容`if false`
    - .toMatch(regexp) 检测字符串是否满足正则表达式`string`
    - .toContain(regexp) 检查可迭代对象中是否包含某一项`iterables`
- Mock Function 模拟函数
