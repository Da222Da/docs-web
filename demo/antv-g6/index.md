# G6: 图可视化引擎

::: tip

G6 是一个图可视化引擎，它提供了图的绘制、布局、分析、交互、动画等图可视化的基础能力。旨在让关系变得透明，简单。

[前往 antv-g6 官网 →→](https://g6.antv.antgroup.com/manual/introduction)

:::

## 前言：G6 的实现动机？

G6 实现动机：提供一种图业务的解决方案。[阅读更多关于 antv-g6 的内容](https://gw.alipayobjects.com/os/bmw-prod/c8ddbda8-c742-4c11-9c68-3783dd5954b9.pdf)

## 1. 什么是图？

图(Graph)，是一种数据结构，用于描述主体（objects）与关系（relationships）的数据集合。

表达式：G = { V: [v1, v2, v3, ……], E: [e1, e2, e3, ...]}，其中，节点 v 表示主体；边/关系 e 表示实体之间的关联。

## 2. 什么是图可视化呢？

图可视化，就是将图数据结构直观地展示给终端用户的手段，用于辅助用户分析复杂关系数据。

## 3. G6 知识体系

- 图元素 graph element
  - node 节点
    - shape 形状
    - style 样式
  - edge 边线
    - shape 形状
    - style 样式
- 图布局 graph layout
  - mindmap 思维导图
- 图交互模式 graph interaction Mode
  - 交互行为 behavior
    - drag-canvas：拖拽画布
    - zoom-canvas：缩放画布
  - 交互状态 State
    - click 点击
    - hover 悬浮
  - 交互工具 Tools
    - tooltip 节点提示框
    - edge-tooltip 边线提示框
- 插件 plugins
  - 缩略图 (Minimap) 是一种常见的用于快速预览和探索图的工具，可作为导航辅助用户探索大规模图。
  - Grid 网格，可用于辅助用户在拖拽节点时对齐到网格。
- 动画
  - 全局动画：图整体变化时的动画过渡
  - 元素动画：节点和边的动画效果
