import{_ as a,c as s,o as n,O as p}from"./chunks/framework.dd35b821.js";const h=JSON.parse('{"title":"Pnpm 包管理器","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"demo/pnpm/index.md","filePath":"demo/pnpm/index.md"}'),e={name:"demo/pnpm/index.md"},l=p(`<h1 id="pnpm-包管理器" tabindex="-1">Pnpm 包管理器 <a class="header-anchor" href="#pnpm-包管理器" aria-label="Permalink to &quot;Pnpm 包管理器&quot;">​</a></h1><h2 id="pnpm-是什么" tabindex="-1">Pnpm 是什么？ <a class="header-anchor" href="#pnpm-是什么" aria-label="Permalink to &quot;Pnpm 是什么？&quot;">​</a></h2><p>PNPM 是一个 JavaScript 包管理器，类似于 npm 和 Yarn。它有助于加快安装依赖项的速度，减少磁盘空间的使用，并支持并行安装依赖项。PNPM 还提供了一些其他功能，例如离线支持和版本锁定。<a href="https://pnpm.io/motivation" target="_blank" rel="noreferrer">想要了解 pnpm 更多内容，请移步官网。</a></p><h2 id="workspace-工作区" tabindex="-1">Workspace 工作区 <a class="header-anchor" href="#workspace-工作区" aria-label="Permalink to &quot;Workspace 工作区&quot;">​</a></h2><p>Workspace 是 PNPM 中的一个功能，它允许您在同一个项目中管理多个包。</p><h3 id="如何想使用-workspace-功能" tabindex="-1">- 如何想使用 workspace 功能？ <a class="header-anchor" href="#如何想使用-workspace-功能" aria-label="Permalink to &quot;- 如何想使用 workspace 功能？&quot;">​</a></h3><p>要在 PNPM 中使用 workspace，您需要在项目的根目录下配置 <code>pnpm-workspace.yaml</code> 文件。</p><p>For example:</p><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 默认情况下，包含所有目录下的所有子包。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">packages</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;"># all packages in direct subdirs of packages/</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">packages/*</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;"># all packages in subdirs of components/</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">components/**</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;"># exclude packages that are inside test directories</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">!**/test/**</span><span style="color:#89DDFF;">&#39;</span></span></code></pre></div><h3 id="如何执行工作区子包的命令" tabindex="-1">- 如何执行工作区子包的命令？ <a class="header-anchor" href="#如何执行工作区子包的命令" aria-label="Permalink to &quot;- 如何执行工作区子包的命令？&quot;">​</a></h3><p>如果想要执行 PNPM 工作区中子包的某个命令的话。可以通过<code>--filter,-F</code>选项来实现。例如，要在名为 my-package 的子包中运行命令，可以使用以下命令：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># \`&lt;command&gt;\`  是您想要运行的命令的名称，例如  \`build\` 。</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \`--filter\`  选项指定了要运行命令的工作区子包的名称。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">pnpm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--filter</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">my-package</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">comman</span><span style="color:#A6ACCD;">d</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>除此之外，你还可以将多个子包作为过滤器传递给 <code>--filter</code> 选项，例如：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 这将在名为  \`my-package-1\`  和  \`my-package-2\`  的子包中运行命令。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">pnpm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--filter</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">my-package-1,my-package-2</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">comman</span><span style="color:#A6ACCD;">d</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p><a href="https://pnpm.io/filtering" target="_blank" rel="noreferrer">想要了解 filtering 更多内容，请移步官网。</a></p>`,15),o=[l];function t(c,r,i,y,d,m){return n(),s("div",null,o)}const C=a(e,[["render",t]]);export{h as __pageData,C as default};