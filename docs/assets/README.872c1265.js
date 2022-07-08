var s=Object.defineProperty,a=Object.defineProperties,n=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,e=Object.prototype.propertyIsEnumerable,p=(a,n,t)=>n in a?s(a,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[n]=t;import{d as c,a as o,o as r,c as d,b as h,F as i,e as g,t as j,f as m,r as v,l as u,C as f,B as w,S as y}from"./vendor.393926ba.js";const b={class:"image-demo"},_=h("div",null,[h("p",null,"fill:默认，不保证保持原有的比例，内容拉伸填充整个内容容器"),h("p",null,"contain:保持原有尺寸比例。内容被缩放"),h("p",null,"cover:保持原有尺寸比例。但部分内容可能被剪切"),h("p",null,"none:保留原有元素内容的长度和宽度，也就是说内容不会被重置"),h("p",null,"scale-down:保持原有尺寸比例。内容的尺寸与 none 或 contain 中的一个相同，取决于它们两个之间谁得到的对象尺寸会更小一些")],-1);var k=c({setup(s){const a=["fill","contain","cover","none","scale-down"];return(s,n)=>{const t=o("ak-image");return r(),d(i,null,[h("div",b,[(r(),d(i,null,g(a,(s=>h("div",{key:s},[h("span",null,j(s),1),m(t,{style:{width:"100px",height:"100px"},src:"./image/img2.png",fit:s},null,8,["fit"])]))),64))]),_],64)}}});const q=c({components:{vdpv_0:k},setup(s){const c=v(),o=[c],r=u({vdpv_0Height:0});return d=((s,a)=>{for(var n in a||(a={}))l.call(a,n)&&p(s,n,a[n]);if(t)for(var n of t(a))e.call(a,n)&&p(s,n,a[n]);return s})({toggleCode:s=>{const a="vdpv_"+s;0===r[a+"Height"]?r[a+"Height"]=(o[s].value?o[s].value.offsetHeight:0)||0:r[a+"Height"]=0}},f(r)),a(d,n({vdpv_0Ref:c}));var d}});q.$vd={matter:{},toc:[{content:"Image 图片",anchor:"image-图片",level:1},{content:"基本使用",anchor:"基本使用",level:3},{content:"API",anchor:"api",level:2},{content:"Image Props",anchor:"image-props",level:3},{content:"Image Slots",anchor:"image-slots",level:3}]};const I=q,x={class:"vuedoc  "},O=y('<h1 id="image-图片" data-source-line="1"><a class="markdownIt-Anchor" href="#image-图片">#</a> Image 图片</h1><h3 id="基本使用" data-source-line="3"><a class="markdownIt-Anchor" href="#基本使用">#</a> 基本使用</h3><p data-source-line="5">通过<code>fit</code>确定图片如何适应到容器框</p><pre style="display:none;"></pre>',4),P={class:"vuedoc-demo "},A={class:"vuedoc-demo__inner"},H={class:"vuedoc-demo__preview"},C={ref:"vdpv_0Ref",class:"vuedoc-demo__sourceref"},S=[y('<div class="vuedoc__code "><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;image-demo&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;fit in fits&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;fit&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>{{ fit }}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">ak-image</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;width: 100px; height: 100px&quot;</span> <span class="hljs-attr">:src</span>=<span class="hljs-string">&quot;url&quot;</span> <span class="hljs-attr">:fit</span>=<span class="hljs-string">&quot;fit&quot;</span> /&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>fill:默认，不保证保持原有的比例，内容拉伸填充整个内容容器<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>contain:保持原有尺寸比例。内容被缩放<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>cover:保持原有尺寸比例。但部分内容可能被剪切<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>none:保留原有元素内容的长度和宽度，也就是说内容不会被重置<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>scale-down:保持原有尺寸比例。内容的尺寸与 none 或 contain 中的一个相同，取决于它们两个之间谁得到的对象尺寸会更小一些<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span>&gt;</span><span class="javascript">\n  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n  <span class="hljs-keyword">const</span> fits = [<span class="hljs-string">&#39;fill&#39;</span>, <span class="hljs-string">&#39;contain&#39;</span>, <span class="hljs-string">&#39;cover&#39;</span>, <span class="hljs-string">&#39;none&#39;</span>, <span class="hljs-string">&#39;scale-down&#39;</span>]\n  <span class="hljs-keyword">const</span> intro=[<span class="hljs-string">&#39;&#39;</span>]\n  <span class="hljs-keyword">const</span> url = <span class="hljs-string">&#39;./image/img2.png&#39;</span>\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n\n</span></code></pre></div>',1)],z=y('<h2 id="api" data-source-line="31"><a class="markdownIt-Anchor" href="#api">#</a> API</h2><h3 id="image-props" data-source-line="33"><a class="markdownIt-Anchor" href="#image-props">#</a> Image Props</h3><table data-source-line="35"><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>src</td><td>string</td><td>图片源地址，同原生属性一致</td></tr><tr><td>fit</td><td>string</td><td>图片如何适应容器框，同原生 object-fit，可选<code>&#39;fill&#39;｜&#39;contain&#39;｜&#39;cover&#39;｜&#39;none&#39;｜&#39;scale-down&#39;</code></td></tr><tr><td>alt</td><td>string</td><td>原生alt属性</td></tr><tr><td>preview-src-list</td><td>string[]</td><td>开启图片预览功能</td></tr><tr><td>z-index</td><td>number</td><td>设置图片预览的 z-index</td></tr></tbody></table><h3 id="image-slots" data-source-line="43"><a class="markdownIt-Anchor" href="#image-slots">#</a> Image Slots</h3><table data-source-line="45"><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>error</td><td>加载失败内容</td></tr><tr><td>placeholder</td><td>自定义占位内容</td></tr></tbody></table>',5);I.render=function(s,a,n,t,l,e){const p=o("vdpv_0");return r(),d("div",x,[O,h("div",P,[h("div",A,[h("div",H,[m(p)]),h("div",{style:w({height:s.vdpv_0Height+"px"}),class:"vuedoc-demo__source"},[h("div",C,S,512)],4),h("div",{class:"vuedoc-demo__footer",onClick:a[0]||(a[0]=a=>s.toggleCode(0))},j(s.vdpv_0Height>0?"hidden":"show"),1)])]),z])};export{I as default};
