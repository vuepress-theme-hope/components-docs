import{_ as h}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,a as e,g as a,b as t,d as l,f as r,r as s,o as c}from"./app-D1Iv0o30.js";const p={};function k(u,i){const d=s("StackBlitz"),o=s("MdDemo");return c(),n("div",null,[i[2]||(i[2]=e("p",null,"在 Markdown 文件中嵌入 StackBlitz 演示。",-1)),a(" more "),i[3]||(i[3]=e("h2",{id:"示例",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#示例"},[e("span",null,"示例")])],-1)),a(" #region demo "),t(o,{title:"一个 StackBlitz 项目",id:"md-demo-8"},{default:l(()=>[t(d,{id:"vuepress-theme-hope"})]),code:l(()=>i[0]||(i[0]=[e("div",{class:"language-md","data-highlighter":"shiki","data-ext":"md","data-title":"md",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[e("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"<"),e("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},"StackBlitz"),e("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}}," id"),e("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"="),e("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},'"vuepress-theme-hope"'),e("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}}," />")])])])],-1)])),_:1}),t(o,{title:"一个自定义设置的 StackBlitz 项目",id:"md-demo-15"},{default:l(()=>[t(d,{id:"vuepress-theme-hope",hideExplorer:"",hideNavigation:"",hideDevtools:""})]),code:l(()=>i[1]||(i[1]=[e("div",{class:"language-md","data-highlighter":"shiki","data-ext":"md","data-title":"md",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[e("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"<"),e("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},"StackBlitz"),e("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}}," id"),e("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"="),e("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},'"vuepress-theme-hope"'),e("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}}," hideExplorer"),e("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}}," hideNavigation"),e("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}}," hideDevtools"),e("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}}," />")])])])],-1)])),_:1}),a(" #endregion demo "),i[4]||(i[4]=r('<h2 id="属性" tabindex="-1"><a class="header-anchor" href="#属性"><span>属性</span></a></h2><h3 id="id" tabindex="-1"><a class="header-anchor" href="#id"><span>id</span></a></h3><ul><li>类型: <code>string</code></li><li>必填: 是</li></ul><p>StackBlitz id</p><h3 id="type" tabindex="-1"><a class="header-anchor" href="#type"><span>type</span></a></h3><ul><li>类型: <code>&quot;project&quot; | &quot;github&quot;</code></li><li>默认值: <code>&quot;project&quot;</code></li></ul><p>StackBlitz 项目类型。</p><h3 id="width" tabindex="-1"><a class="header-anchor" href="#width"><span>width</span></a></h3><ul><li>类型: <code>string | number</code></li><li>默认值: <code>100%</code></li></ul><p>StackBlitz 组件宽度。</p><h3 id="height" tabindex="-1"><a class="header-anchor" href="#height"><span>height</span></a></h3><ul><li>类型: <code>string | number</code></li><li>必填：否</li></ul><p>StackBlitz 组件高度。</p><h3 id="ratio" tabindex="-1"><a class="header-anchor" href="#ratio"><span>ratio</span></a></h3><ul><li>类型: <code>number</code></li><li>默认值: <code>16 / 9</code></li></ul><p>StackBlitz 组件高度宽高比，只有当未指定 <code>height</code> 时有效。</p><h3 id="file" tabindex="-1"><a class="header-anchor" href="#file"><span>file</span></a></h3><ul><li>类型: <code>string[] | string</code></li><li>必填: 否</li></ul><p>在编辑器中打开的默认文件。</p><h3 id="initialpath" tabindex="-1"><a class="header-anchor" href="#initialpath"><span>initialPath</span></a></h3><ul><li>类型: <code>string</code></li><li>必填: 否</li></ul><p>预览时应打开的初始 URL 路径。</p><h3 id="embed" tabindex="-1"><a class="header-anchor" href="#embed"><span>embed</span></a></h3><ul><li>类型: <code>boolean</code></li><li>默认值: <code>false</code></li></ul><p>嵌入 StackBlitz 演示。</p><h3 id="load" tabindex="-1"><a class="header-anchor" href="#load"><span>load</span></a></h3><ul><li>类型: <code>boolean</code></li><li>默认值: <code>false</code></li></ul><p>是否直接加载嵌入演示。(仅在嵌入视图中有效)</p><h3 id="theme" tabindex="-1"><a class="header-anchor" href="#theme"><span>theme</span></a></h3><ul><li>类型: <code>&quot;dark&quot; | &quot;light&quot;</code></li><li>默认值: <code>&quot;dark&quot;</code></li></ul><p>编辑器主题。(仅在嵌入视图中有效)</p><h3 id="view" tabindex="-1"><a class="header-anchor" href="#view"><span>view</span></a></h3><ul><li>类型: <code>&quot;default&quot; | &quot;editor&quot; | &quot;preview&quot;</code></li><li>默认值: <code>&quot;preview&quot;</code></li></ul><p>默认打开的视图。</p><h3 id="text" tabindex="-1"><a class="header-anchor" href="#text"><span>text</span></a></h3><ul><li>类型: <code>string</code></li><li>默认值: <code>&quot;Open in StackBlitz&quot;</code></li></ul><p>打开 StackBlitz 按钮的文本。</p><h3 id="hideexplorer" tabindex="-1"><a class="header-anchor" href="#hideexplorer"><span>hideExplorer</span></a></h3><ul><li>类型: <code>boolean</code></li><li>默认值: <code>false</code></li></ul><p>在嵌入视图中隐藏文件资源管理器面板。</p><h3 id="hidenavigation" tabindex="-1"><a class="header-anchor" href="#hidenavigation"><span>hideNavigation</span></a></h3><ul><li>类型: <code>boolean</code></li><li>默认值: <code>false</code></li></ul><p>在嵌入视图中隐藏导航面板。</p><h3 id="hidedevtools" tabindex="-1"><a class="header-anchor" href="#hidedevtools"><span>hideDevtools</span></a></h3><ul><li>类型: <code>boolean</code></li><li>默认值: <code>false</code></li></ul><p>在编辑器预览中隐藏调试控制台。</p>',46))])}const v=h(p,[["render",k],["__file","stack-blitz.html.vue"]]),b=JSON.parse('{"path":"/zh/guide/code/stack-blitz.html","title":"StackBlitz","lang":"zh-CN","frontmatter":{"title":"StackBlitz","description":"在 Markdown 文件中嵌入 StackBlitz 演示。 示例 属性 id 类型: string 必填: 是 StackBlitz id type 类型: \\"project\\" | \\"github\\" 默认值: \\"project\\" StackBlitz 项目类型。 width 类型: string | number 默认值: 100% StackBl...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://plugin-components.vuejs.press/guide/code/stack-blitz.html"}],["meta",{"property":"og:url","content":"https://plugin-components.vuejs.press/zh/guide/code/stack-blitz.html"}],["meta",{"property":"og:site_name","content":"组件库"}],["meta",{"property":"og:title","content":"StackBlitz"}],["meta",{"property":"og:description","content":"在 Markdown 文件中嵌入 StackBlitz 演示。 示例 属性 id 类型: string 必填: 是 StackBlitz id type 类型: \\"project\\" | \\"github\\" 默认值: \\"project\\" StackBlitz 项目类型。 width 类型: string | number 默认值: 100% StackBl..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-11-10T07:38:58.000Z"}],["meta",{"property":"article:modified_time","content":"2023-11-10T07:38:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"StackBlitz\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-11-10T07:38:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"示例","slug":"示例","link":"#示例","children":[]},{"level":2,"title":"属性","slug":"属性","link":"#属性","children":[{"level":3,"title":"id","slug":"id","link":"#id","children":[]},{"level":3,"title":"type","slug":"type","link":"#type","children":[]},{"level":3,"title":"width","slug":"width","link":"#width","children":[]},{"level":3,"title":"height","slug":"height","link":"#height","children":[]},{"level":3,"title":"ratio","slug":"ratio","link":"#ratio","children":[]},{"level":3,"title":"file","slug":"file","link":"#file","children":[]},{"level":3,"title":"initialPath","slug":"initialpath","link":"#initialpath","children":[]},{"level":3,"title":"embed","slug":"embed","link":"#embed","children":[]},{"level":3,"title":"load","slug":"load","link":"#load","children":[]},{"level":3,"title":"theme","slug":"theme","link":"#theme","children":[]},{"level":3,"title":"view","slug":"view","link":"#view","children":[]},{"level":3,"title":"text","slug":"text","link":"#text","children":[]},{"level":3,"title":"hideExplorer","slug":"hideexplorer","link":"#hideexplorer","children":[]},{"level":3,"title":"hideNavigation","slug":"hidenavigation","link":"#hidenavigation","children":[]},{"level":3,"title":"hideDevtools","slug":"hidedevtools","link":"#hidedevtools","children":[]}]}],"git":{"createdTime":1653495670000,"updatedTime":1699601938000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1}]},"readingTime":{"minutes":1.13,"words":338},"filePathRelative":"zh/guide/code/stack-blitz.md","localizedDate":"2022年5月25日","autoDesc":true}');export{v as comp,b as data};
