import{_ as u}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as p,c as m,a as t,w as s,f as r,b as e,d as n,e as v}from"./app-9184d182.js";const b={},h=e("p",null,"Embed videos in Markdown files.",-1),_=e("p",null,[n("Install "),e("code",null,"plyr"),n(" package in your project first to use this component:")],-1),k=e("div",{class:"language-bash","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"pnpm"),n(),e("span",{class:"token function"},"add"),n(),e("span",{class:"token parameter variable"},"-D"),n(` plyr
`)])])],-1),g=e("div",{class:"language-bash","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"yarn"),n(),e("span",{class:"token function"},"add"),n(),e("span",{class:"token parameter variable"},"-D"),n(` plyr
`)])])],-1),y=e("div",{class:"language-bash","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"npm"),n(" i "),e("span",{class:"token parameter variable"},"-D"),n(` plyr
`)])])],-1),f=e("h2",{id:"demo",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#demo","aria-hidden":"true"},"#"),n(" Demo")],-1),w=e("div",{class:"language-markdown","data-ext":"md"},[e("pre",{class:"language-markdown"},[e("code",null,[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),n("VideoPlayer")]),n(),e("span",{class:"token attr-name"},"src"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),n("https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4"),e("span",{class:"token punctuation"},'"')]),n(),e("span",{class:"token punctuation"},"/>")]),n(`
`)])])],-1),T=e("div",{class:"language-markdown line-numbers-mode","data-ext":"md"},[e("pre",{class:"language-markdown"},[e("code",null,[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),n("VideoPlayer")]),n(`
  `),e("span",{class:"token attr-name"},":src"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),n(`[
    {
      src: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4',
      type: 'video/mp4',
      size: 576,
    },
    {
      src: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4',
      type: 'video/mp4',
      size: 720,
    },
    {
      src: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-1080p.mp4',
      type: 'video/mp4',
      size: 1080,
    },
  ]`),e("span",{class:"token punctuation"},'"')]),n(`
  `),e("span",{class:"token attr-name"},"poster"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),n("https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg"),e("span",{class:"token punctuation"},'"')]),n(`
  `),e("span",{class:"token attr-name"},":tracks"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),n(`[
    {
      src: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.en.vtt',
      label: 'English',
      language: 'en',
      kind: 'subtitles',
      default: true,
    },
    {
      src: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.fr.vtt',
      label: 'French',
      language: 'fr',
      kind: 'subtitles',
    },
  ]`),e("span",{class:"token punctuation"},'"')]),n(`
  `),e("span",{class:"token attr-name"},"crossorigin"),n(`
  `),e("span",{class:"token attr-name"},":options"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),n(`{
    title: 'View From A Blue Moon',
    iconUrl: 'https://cdn.plyr.io/3.7.8/demo.svg',
    keyboard: {
      global: true,
    },
    tooltips: {
      controls: true,
    },
    captions: {
      active: true,
    },
    previewThumbnails: {
      enabled: true,
      src: [
        'https://cdn.plyr.io/static/demo/thumbs/100p.vtt',
        'https://cdn.plyr.io/static/demo/thumbs/240p.vtt'
      ],
    },
    vimeo: {
      referrerPolicy: 'no-referrer',
    },
    mediaMetadata: {
      title: 'View From A Blue Moon',
      album: 'Sports',
      artist: 'Brainfarm',
      artwork: [
        {
          src: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg',
          type: 'image/jpeg',
        },
      ],
    },
    markers: {
      enabled: true,
      points: [
        {
          time: 10,
          label: 'first marker',
        },
        {
          time: 40,
          label: 'second marker',
        },
        {
          time: 120,
          label: '<strong>third</strong> marker',
        }
      ],
    },
  }
  `),e("span",{class:"token punctuation"},'"')]),n(`
`),e("span",{class:"token punctuation"},"/>")]),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),V=v(`<h2 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h2><h3 id="src" tabindex="-1"><a class="header-anchor" href="#src" aria-hidden="true">#</a> src</h3><ul><li>Type: <code>string</code></li><li>Required: Yes</li></ul><p>Video source link</p><h3 id="width" tabindex="-1"><a class="header-anchor" href="#width" aria-hidden="true">#</a> width</h3><ul><li>Type: <code>string | number</code></li><li>Default: <code>100%</code></li></ul><p>Video component width.</p><h3 id="type" tabindex="-1"><a class="header-anchor" href="#type" aria-hidden="true">#</a> type</h3><ul><li>Type: <code>string</code></li><li>Required: No</li></ul><p>Video type.</p><div class="hint-container note"><p class="hint-container-title">Note</p><p>If your server cannot return a correct mime type for your video files, you should specify it. (e.g.: <code>video/mp4</code>)</p></div><h3 id="poster" tabindex="-1"><a class="header-anchor" href="#poster" aria-hidden="true">#</a> poster</h3><ul><li>Type: <code>string</code></li><li>Required: No</li></ul><p>Video poster</p><h3 id="title" tabindex="-1"><a class="header-anchor" href="#title" aria-hidden="true">#</a> title</h3><ul><li>Type: <code>string</code></li><li>Required: No</li></ul><p>Video title</p><h3 id="tracks" tabindex="-1"><a class="header-anchor" href="#tracks" aria-hidden="true">#</a> tracks</h3><ul><li><p>Type: <code>UseMediaTextTrackSource[]</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">UseMediaTextTrackSource</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Indicates that the track should be enabled unless the user&#39;s preferences indicate
   * that another track is more appropriate
   */</span>
  <span class="token keyword">default</span><span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * How the text track is meant to be used. If omitted the default kind is subtitles.
   */</span>
  kind<span class="token operator">:</span> TextTrackKind<span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * A user-readable title of the text track which is used by the browser
   * when listing available text tracks.
   */</span>
  label<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * Address of the track (.vtt file). Must be a valid URL. This attribute
   * must be specified and its URL value must have the same origin as the document
   */</span>
  src<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * Language of the track text data. It must be a valid BCP 47 language tag.
   * If the kind attribute is set to subtitles, then srcLang must be defined.
   */</span>
  srcLang<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Required: No</p></li></ul><p>Tracks for video.</p>`,20);function A(M,x){const d=l("CodeTabs"),o=l("VideoPlayer"),c=l("MdDemo");return p(),m("div",null,[h,_,t(d,{id:"6",data:[{id:"pnpm"},{id:"yarn"},{id:"npm"}],"tab-id":"shell"},{title0:s(({value:a,isActive:i})=>[n("pnpm")]),title1:s(({value:a,isActive:i})=>[n("yarn")]),title2:s(({value:a,isActive:i})=>[n("npm")]),tab0:s(({value:a,isActive:i})=>[k]),tab1:s(({value:a,isActive:i})=>[g]),tab2:s(({value:a,isActive:i})=>[y]),_:1}),r(" more "),f,r(" #region demo "),t(c,{title:"A video player",id:"md-demo-22"},{default:s(()=>[t(o,{src:"https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4"})]),code:s(()=>[w]),_:1}),t(c,{title:"A video player with poster, multiple sources, tracks, thumbnails and markers",id:"md-demo-27"},{default:s(()=>[t(o,{src:[{src:"https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4",type:"video/mp4",size:576},{src:"https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4",type:"video/mp4",size:720},{src:"https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-1080p.mp4",type:"video/mp4",size:1080}],poster:"https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg",tracks:[{src:"https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.en.vtt",label:"English",language:"en",kind:"subtitles",default:!0},{src:"https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.fr.vtt",label:"French",language:"fr",kind:"subtitles"}],crossorigin:"",options:{title:"View From A Blue Moon",iconUrl:"https://cdn.plyr.io/3.7.8/demo.svg",keyboard:{global:!0},tooltips:{controls:!0},captions:{active:!0},previewThumbnails:{enabled:!0,src:["https://cdn.plyr.io/static/demo/thumbs/100p.vtt","https://cdn.plyr.io/static/demo/thumbs/240p.vtt"]},vimeo:{referrerPolicy:"no-referrer"},mediaMetadata:{title:"View From A Blue Moon",album:"Sports",artist:"Brainfarm",artwork:[{src:"https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg",type:"image/jpeg"}]},markers:{enabled:!0,points:[{time:10,label:"first marker"},{time:40,label:"second marker"},{time:120,label:"<strong>third</strong> marker"}]}}},null,8,["src","tracks","options"])]),code:s(()=>[T]),_:1}),r(" #endregion demo "),V])}const D=u(b,[["render",A],["__file","videoplayer.html.vue"]]);export{D as default};
