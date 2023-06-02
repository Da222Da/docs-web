import { defineConfig } from "vitepress";

export default defineConfig({
	base: "/docs-web/",
	title: "互联网 Web",
	description: "web docs: 笔记！就是找到节点，记到纸上，然后在大脑中忘记它。",
	themeConfig: {
		nav: [
			{ text: "Home", link: "/" },
			{
				text: "项目支持",
				items: [
					{
						text: "vitepress 官网",
						link: "https://github.com/vuejs/vitepress",
					},
					{
						text: "objtube 前端学习路线总结",
						link: "https://objtube.github.io/front-end-roadmap/?ref=www.tboxn.com#/",
					},
					{
						text: "adam react2019 学习路线总结",
						link: "https://github.com/adam-golab/react-developer-roadmap",
					},
				],
			},
		],

		sidebar: [
			{
				text: "话题",
				items: [
					{
						text: '基础知识',
						items: [
							{
								text: 'View: 网页绘制',
								items: [
									{ text: "HTML: 文本标记" },
									{
										text: "Canvas: 绘制 2D 图形",
										link: "/demo/canvas/",
										// items: [
										// 	{
										// 		text: "G6：图可视化引擎",
										// 		link: "/demo/antv-g6/",
										// 	},
										// ],
									},
								]
							},
							{
								text: "JavaScript: 网页逻辑",
								items: [
									{
										text: "ECMAScript: JS 标准",
										// link: "/demo/ts/",
									},
									{
										text: "JavaScript 设计模式",
										link: "/demo/design-patterns/",
									},
								]
							},
							{
								text: "DOM 文档对象模型",
								items: [
									{
										text: "React: 组件化解决方案",
										link: "/demo/react/",
									},
								],
							},
						]
					},
					{
						text: "客户端 Client",
						items: [
							{
								text: "Browser 浏览器",
							},
						],
					},
					{
						text: "服务器 Server",
						items: [
							{
								text: "NodeJS: JS 运行时环境",
								link: "/demo/nodejs/",
								items: [
									{ text: "pnpm: 包管理工具", link: "/demo/pnpm/" },
								]
							},
							{ text: "开发一个 CLI 工具", link: "/demo/nodejs-cli/" },
						]
					},
					{
						text: "Web 项目工程",
						link: "/src/web-engineering.md",
						items: [
							{
								text: "开发规范 Standard",
								link: "/src/web-engineering-standard.md",
							},
							{
								text: "软件测试 Testing",
								link: "/src/web-engineering-testing.md",
								items: [
									{
										text: "Jest：JS 单元测试框架",
										link: "/demo/test-jest/",
									},
								],
							},
						],
					},
				],
			},
		],

		socialLinks: [{ icon: "github", link: "https://github.com/Da222Da/docs-web" }],
	},
	markdown: {
		config: (md) => {
			md.use(require("markdown-it-katex"), {
				katex: require("katex"),
				delimiters: "dollars",
				throwOnError: false,
			});
		},
	},
});
