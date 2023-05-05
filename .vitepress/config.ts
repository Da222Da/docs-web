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
						text: "Web 工程化",
						link: "/src/web-engineering.md",
						items: [
							{
								text: "Web 开发规范",
								link: "/src/web-engineering-standard.md",
							}
						]
					},
				],
			},
		],

		socialLinks: [
			{ icon: "github", link: "https://github.com/Da222Da/docs-web" },
		],
	},
	markdown: {
		config: md => {
			md.use(require('markdown-it-katex'), {
				katex: require('katex'),
				delimiters: 'dollars',
				throwOnError: false
			})
		}
	}
});
