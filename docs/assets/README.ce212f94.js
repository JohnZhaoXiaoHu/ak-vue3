var s=Object.defineProperty,a=Object.defineProperties,t=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,e=(a,t,n)=>t in a?s(a,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[t]=n;import{a as o,o as c,c as r,f as d,w as h,g as i,d as v,r as j,l as u,C as g,b as m,B as f,t as b,S as _}from"./vendor.393926ba.js";const k={class:"popover-demo"},q=i("删除确认"),y=i("删除确认"),w=i(" 这是一段内容这是一段内容确定删除吗？ "),P=v({components:{vdpv_0:{setup(s){const a=()=>{alert("点击了确定")};return(s,t)=>{const n=o("ak-button"),l=o("ak-popover");return c(),r("div",k,[d(l,{content:"这是一段内容这是一段内容确定删除吗？",confirm:"确定",cancel:"取消",callback:a},{default:h((()=>[d(n,null,{default:h((()=>[q])),_:1})])),_:1}),d(l,{confirm:"确定",cancel:"取消",callback:a},{content:h((()=>[w])),default:h((()=>[d(n,null,{default:h((()=>[y])),_:1})])),_:1})])}}}},setup(s){const o=j(),c=[o],r=u({vdpv_0Height:0});return d=((s,a)=>{for(var t in a||(a={}))l.call(a,t)&&e(s,t,a[t]);if(n)for(var t of n(a))p.call(a,t)&&e(s,t,a[t]);return s})({toggleCode:s=>{const a="vdpv_"+s;0===r[a+"Height"]?r[a+"Height"]=(c[s].value?c[s].value.offsetHeight:0)||0:r[a+"Height"]=0}},g(r)),a(d,t({vdpv_0Ref:o}));var d}});P.$vd={matter:{},toc:[{content:"popover（Tooltip） 弹出框",anchor:"popovertooltip-弹出框",level:1},{content:"基本用法",anchor:"基本用法",level:3},{content:"API",anchor:"api",level:2},{content:"Popover Props",anchor:"popover-props",level:3}]};const O=P,H={class:"vuedoc  "},I=_('<h1 id="popovertooltip-弹出框" data-source-line="1"><a class="markdownIt-Anchor" href="#popovertooltip-弹出框">#</a> popover（Tooltip） 弹出框</h1><h3 id="基本用法" data-source-line="3"><a class="markdownIt-Anchor" href="#基本用法">#</a> 基本用法</h3><p data-source-line="5">基于<code>tooltip</code>提示</p><pre style="display:none;"></pre>',4),A={class:"vuedoc-demo "},C={class:"vuedoc-demo__inner"},x={class:"vuedoc-demo__preview"},T={ref:"vdpv_0Ref",class:"vuedoc-demo__sourceref"},R=[_('<div class="vuedoc__code "><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;popover-demo&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">ak-popover</span>\n        <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;这是一段内容这是一段内容确定删除吗？&quot;</span>\n        <span class="hljs-attr">confirm</span>=<span class="hljs-string">&quot;确定&quot;</span>\n        <span class="hljs-attr">cancel</span>=<span class="hljs-string">&quot;取消&quot;</span>\n        <span class="hljs-attr">:callback</span>=<span class="hljs-string">&quot;callback&quot;</span>\n      &gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span>&gt;</span>删除确认<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">ak-popover</span>&gt;</span>\n     \n      <span class="hljs-tag">&lt;<span class="hljs-name">ak-popover</span> <span class="hljs-attr">confirm</span>=<span class="hljs-string">&quot;确定&quot;</span> <span class="hljs-attr">cancel</span>=<span class="hljs-string">&quot;取消&quot;</span> <span class="hljs-attr">:callback</span>=<span class="hljs-string">&quot;callback&quot;</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span>&gt;</span>删除确认<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">content</span>&gt;</span> 这是一段内容这是一段内容确定删除吗？ <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">ak-popover</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">\n  <span class="hljs-keyword">const</span> callback = <span class="hljs-function">() =&gt;</span> {\n    alert(<span class="hljs-string">&#39;点击了确定&#39;</span>)\n  }\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n\n\n</span></code></pre></div>',1)],S=_('<h2 id="api" data-source-line="34"><a class="markdownIt-Anchor" href="#api">#</a> API</h2><h3 id="popover-props" data-source-line="36"><a class="markdownIt-Anchor" href="#popover-props">#</a> Popover Props</h3><table data-source-line="38"><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>confirm</td><td>string</td><td>确认按钮文案</td></tr><tr><td>cancel</td><td>string</td><td>取消按钮文案</td></tr><tr><td>callback</td><td>function</td><td>确认按钮事件</td></tr><tr><td>-</td><td>-</td><td>其他同<a href="/#/tooltip">Tooltip</a></td></tr></tbody></table>',3);O.render=function(s,a,t,n,l,p){const e=o("vdpv_0");return c(),r("div",H,[I,m("div",A,[m("div",C,[m("div",x,[d(e)]),m("div",{style:f({height:s.vdpv_0Height+"px"}),class:"vuedoc-demo__source"},[m("div",T,R,512)],4),m("div",{class:"vuedoc-demo__footer",onClick:a[0]||(a[0]=a=>s.toggleCode(0))},b(s.vdpv_0Height>0?"hidden":"show"),1)])]),S])};export{O as default};
