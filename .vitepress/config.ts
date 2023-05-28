import { defineConfig } from "vitepress";

export default defineConfig({
	base: "/docs-web/",
	title: "互联网 Web",
	description: "Understand the Internet",
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
								text: "网页基础",
								items: [
									{
										text: "JavaScript: 网页逻辑",
										items: [
											{
												text: "ECMAScript: JS 标准",
												// link: "/demo/ts/",
											},
											{
												text: "TypeScript: JS 超集",
												link: "/demo/ts/",
											},
											// {
											// 	text: "JS 面向对象编程范式",
											// 	link: "/demo/ts-oop/",
											// },
											{
												text: "JS 设计模式",
												link: "/demo/design-patterns/",
											},
										],
									},
								]
							},
						]
					},
					{
						text: "客户端 Client",
						items: [
							{
								text: "Component 组件化",
								items: [
									{
										text: "React: 组件化解决方案",
										link: "/demo/react/",
									},
								],
							},
							{
								text: "数据可视化",
								link: "/src/web-data-visualization.md",
								items: [
									{
										text: "Canvas: 绘制 2D 图形",
										link: "/demo/canvas/",
									},
									{
										text: "G6：图可视化引擎",
										link: "/demo/antv-g6/",
									},
								],
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
									{ text: "开发一个 CLI 工具", link: "/demo/nodejs-cli/" },
								]
							},
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
