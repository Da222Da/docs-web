import initData from "./data/01.json";

// 实例化 minimap 插件
const minimap = new G6.Minimap({
	size: [100, 100],
	className: 'minimap',
	type: 'delegate',
});

// 实例化 Image Minimap 插件
const imageMinimap = new G6.ImageMinimap({
	width: 200,
	graphImg: 'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*eD7nT6tmYgAAAAAAAAAAAABkARQnAQ'
});
const grid = new G6.Grid();
console.log(G6, G6.minimap);
// 创建 G6 图实例
const graph = new G6.Graph({
	container: 'mountNode', // 指定图画布的容器 id，与第 9 行的容器对应
	// 画布宽高
	width: 800,
	height: 500,
	// fitView: true, // 元素默认占满画布
	fitViewPadding: [20, 40, 50, 20],
	defaultNode: { // 节点默认样式
		size: 30,
		style: {
			fill: "steelblue",
			stroke: "#666",
			lineWidth: 1
		},
		labelCfg: {
			style: {
				fill: "#fff",
			}
		}
	},
	defaultEdge: { // 边线配置
		style: {
			opacity: 0.6,
			stroke: "grey"
		},
		labelCfg: {
			autoRotate: true,
		}
	},
	layout: {
		type: 'fruchterman',
		preventOverlap: true, // 防止节点重叠
	},
	modes: {
		default: [
			'drag-canvas',
			'zoom-canvas',
			'drag-node',
			{
				type: 'tooltip', // 提示框
				formatText(model) {
					// 提示框文本内容
					const text = 'label: ' + model.label + '<br/> class: ' + model.class;
					return text;
				}
			},
			{
				type: 'edge-tooltip', // 边提示框
				formatText(model) {
					// 边提示框文本内容
					const text =
						'source: ' +
						model.source +
						'<br/> target: ' +
						model.target;
					return text;
				},
			},
		], // 允许拖拽画布、放缩画布、拖拽节点
	},
	plugins: [minimap, imageMinimap, grid]
});



const main = () => {
	// 读取数据
	graph.data(initData);
	// 渲染图
	graph.render();
}

main();
