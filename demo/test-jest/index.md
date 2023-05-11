# Jest：JavaScript 单元测试框架

## 1. Jest 是什么？

Jest 是一个 JavaScript 单元测试框架。[点击官网，查看更多内容→→](https://jestjs.io/) 

## 2. Jest 知识体系？

- **脚手架 Jest CLI**

|   指令名称    |             说明              |
| :-----------: | :---------------------------: |
| `jest --init` | 初始化配置文件 jest.config.js |

- **配置文件 Jest Configuration**

- **使用 Usage**
  - Expect 预期
    - `expect(value)` 预期函数
    - Modifiers 修改器
      - .not 取反 `例如，expect(2).not.toBe(3)`
    - Matchers 校验器
      - .toBe(value) 校验原始值`===`
      - .toBeCloseTo(number, numDigits?) 校验浮点数`0.1 + 0.2 == 0.3`
