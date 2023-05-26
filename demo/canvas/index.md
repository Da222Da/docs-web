---
outline: deep
---

# Canvas: 绘制 2D 图形

::: tip Title: Canvas 是什么？

Canvas 是一个 HTML5 元素，用于在 Web 页面上绘制 2D 和 3D 图形。它是 HTML5 标准的一部分，被广泛用于游戏、数据可视化、图表、动画和其他图形应用程序的开发。使用 Canvas，开发人员可以使用 JavaScript 和其他 Web 技术创建交互式和实时的图形应用程序。

不过，这里我们只关注 2D 图形的绘制。

:::


## 基础知识

### 2D 绘图上下文 

2D 绘图上下文提供了绘制 2D 图形的方法，包括矩形、弧形和路径。

2D 上下文的坐标原点(0, 0)在 `<canvas>` 元素的左上角。所有坐标值都相对于该点计算，因此 x 坐标向右增长，y 坐标向下增长。

获取 2D 绘图上下文的代码如下：

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
```

### 绘制图形

---

#### 矩形 Rect

矩形是唯一一个可以直接在 2D 绘图上下文中绘制的形状。

与绘制矩形相关的方法有 3 个：fillRect()、strokeRect()和 clearRect()。

这些方法都接收 4 个参数：矩形 x 坐标、矩形 y 坐标、矩形宽度和矩形高度。

::: code-group

```js [示例1: 绘制填充矩形 && 轮廓矩形]
// 绘制半透明蓝色矩形
ctx.fillStyle = "rgba(0,0,255,0.5)";
ctx.fillRect(30, 30, 50, 50);

// 绘制半透明蓝色轮廓的矩形
ctx.strokeStyle = "rgba(0,0,255,0.5)";
ctx.strokeRect(120, 30, 50, 50);
```
:::


#### 路径 Path

路径，必须首先调用 beginPath()方法以表示要开始绘制新路径。然后，再调用下列方法来绘制路径。

| 方法 | 描述  |
| --- | --- |
| arc(x, y, radius, startAngle, endAngle, counterclockwise) | 以坐标(x, y)为圆心，以 radius 为半径绘制一条弧线，起始角度为 startAngle，结束角度为 endAngle（都是弧度）。最后一个参数 counterclockwise 表示是否逆时针计算起始角度和结束角度（默认为顺时针）。 |
| arcTo(x1, y1, x2, y2, radius) | 以给定半径 radius，经由(x1, y1)绘制一条从上一点到(x2, y2)的弧线。 |
| bezierCurveTo(c1x, c1y, c2x, c2y, x, y) | 以(c1x, c1y)和(c2x, c2y)为控制点，绘制一条从上一点到(x, y)的弧线（三次贝塞尔曲线）。 |
| lineTo(x, y) | 绘制一条从上一点到(x, y)的直线。 |
| moveTo(x, y) | 不绘制线条，只把绘制光标移动到(x, y)。 |
| quadraticCurveTo(cx, cy, x, y) | 以(cx, cy)为控制点，绘制一条从上一点到(x, y)的弧线（二次贝塞尔曲线）。 |
| rect(x, y, width, height) | 以给定宽度和高度在坐标点(x, y)绘制一个矩形。这个方法与 strokeRect()和 fillRect()的区别在于，它创建的是一条路径，而不是独立的图形。 |


创建路径之后，可以使用 closePath()方法绘制一条返回起点的线。

如果路径已经完成，则既可以指定 fillStyle 属性并调用 fill()方法来填充路径，也可以指定 strokeStyle 属性并调用stroke()方法来描画路径。

::: code-group

```js [示例1: 绘制时钟]
// 创建路径
ctx.beginPath();

// 绘制外圆
ctx.arc(300, 100, 99, 0, 2 * Math.PI, false);

// 绘制内圆
ctx.arc(300, 100, 94, 0, 2 * Math.PI, false);

// 绘制分针
ctx.moveTo(300, 100);
ctx.lineTo(300, 15);

// 绘制时针
ctx.moveTo(300, 100);
ctx.lineTo(240, 100);

// 描画路径
ctx.stroke();
```
:::


#### 文本 Text

2D绘图上下文还提供了绘制文本的方法，即fillText()和 strokeText()。

这两个方法都接收 4 个参数：要绘制的字符串、x 坐标、y 坐标和可选的最大像素宽度。而且，这两个方法最终绘制的结果都取决于以下 3 个属性。
 
| 方法 | 描述 |
| --- | --- |
| font | 以 CSS 语法指定的字体样式、大小、字体族等，比如"10px Arial"。 |
| textAlign | 指定文本的对齐方式，可能的值包括"start"、"end"、和"center"。 |
| textBaseline | 指定文本的基线，可能的值包括 "top" 、 "hanging" 、 "middle" 、"alphabetic"、"ideographic"和"bottom"。 |

::: danger 特别说明: 在浏览器中，字体族是什么？

字体族，就是文字的样式。

浏览器使用的默认字体系列通常是无衬线字体，如Arial或Helvetica。但是，这取决于用户的操作系统和浏览器设置。在CSS中，font-family属性可用于指定用于特定元素的字体系列列表。如果列表中的第一个字体族不可用，浏览器将尝试下一个，依此类推，直到找到合适的字体。

:::

::: code-group

```js [示例1: 绘制文本]
// 设置字体
ctx.font = "30px Arial";

// 设置文本颜色
ctx.fillStyle = "red";

// 绘制文本
ctx.fillText("Hello World", 10, 50);
```
:::



