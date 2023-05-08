import initData from "./data/01.json";

// 创建 G6 图实例
const graph = new G6.Graph({
	container: "mountNode", // 指定图画布的容器 id，与第 9 行的容器对应
	// 画布宽高
	width: 800,
	height: 500,
	nodeStateStyles: {
		// 各状态下的样式，平铺的配置项仅在 keyShape 上生效。需要在其他 shape 样式上响应状态变化则写法不同，参见上文提到的 配置状态样式 链接
		hover: {
			fillOpacity: 0.1,
			lineWidth: 10,
		},
	},
	// fitView: true, // 元素默认占满画布
	fitViewPadding: [20, 40, 50, 20],
	defaultNode: {
		// 节点默认样式
		size: 30,
		style: {
			fill: "steelblue",
			stroke: "#666",
			lineWidth: 1,
		},
		labelCfg: {
			style: {
				fill: "#fff",
			},
		},
	},
	defaultEdge: {
		// 边线配置
		style: {
			opacity: 0.6,
			stroke: "grey",
		},
		labelCfg: {
			autoRotate: true,
		},
	},
	layout: {
		// type: 'fruchterman',
		preventOverlap: true, // 防止节点重叠
	},
	modes: {
		default: [
			"drag-canvas",
			"zoom-canvas",
			"drag-node",
			{
				type: "tooltip", // 提示框
				formatText(model) {
					// 提示框文本内容
					const text = "label: " + model.label + "<br/> class: " + model.class;
					return text;
				},
			},
			{
				type: "edge-tooltip", // 边提示框
				formatText(model) {
					// 边提示框文本内容
					const text = "source: " + model.source + "<br/> target: " + model.target;
					return text;
				},
			},
		], // 允许拖拽画布、放缩画布、拖拽节点
	},
	plugins: [
		new G6.Minimap({
			size: [100, 100],
			className: "minimap",
			type: "delegate",
		}),
		new G6.Grid(),
	],
	animate: true, // Boolean，可选，全局变化时否使用动画过渡
});

const main = () => {
	// 读取数据
	graph.data(initData);
	// 渲染图
	graph.render();

	// 监听鼠标进入节点事件
	graph.on("node:mouseenter", (evt) => {
		const node = evt.item;
		// 激活该节点的 hover 状态
		graph.setItemState(node, "hover", true);
	});
	// 监听鼠标离开节点事件
	graph.on("node:mouseleave", (evt) => {
		const node = evt.item;
		// 关闭该节点的 hover 状态
		graph.setItemState(node, "hover", false);
	});
};

main();
