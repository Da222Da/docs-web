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
				],
			},
		],

		sidebar: [
			{
				text: "话题",
				items: [
					{
						text: "User Interface 用户界面",
						// link: "/src/web-engineering.md",
					},
					{
						text: "Web 工程化",
						link: "/src/web-engineering.md",
						items: [
							{
								text: "Web 开发规范",
								link: "/src/web-engineering-standard.md",
							},
						],
					},
				],
			},
			{
				text: "附录A: 实践",
				items: [
					{
						text: "实现一个 React.js",
						link: "/experiments/lerna-react/",
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
