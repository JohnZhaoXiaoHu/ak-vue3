var t=Object.defineProperty,a=Object.defineProperties,e=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,c=(a,e,s)=>e in a?t(a,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[e]=s;import{a as r,o as d,c as l,f as p,F as h,b as i,d as v,r as u,l as b,C as g,B as m,t as k,S as f}from"./vendor.393926ba.js";const j={},_=i("div",{style:{height:"900px"}},"滚动页面试试",-1);j.render=function(t,a){const e=r("ak-backTop");return d(),l(h,null,[_,p(e)],64)};const y=v({components:{vdpv_0:j},setup(t){const r=u(),d=[r],l=b({vdpv_0Height:0});return p=((t,a)=>{for(var e in a||(a={}))o.call(a,e)&&c(t,e,a[e]);if(s)for(var e of s(a))n.call(a,e)&&c(t,e,a[e]);return t})({toggleCode:t=>{const a="vdpv_"+t;0===l[a+"Height"]?l[a+"Height"]=(d[t].value?d[t].value.offsetHeight:0)||0:l[a+"Height"]=0}},g(l)),a(p,e({vdpv_0Ref:r}));var p}});y.$vd={matter:{},toc:[{content:"BackTop 返回顶部",anchor:"backtop-返回顶部",level:1},{content:"用法",anchor:"用法",level:3},{content:"API",anchor:"api",level:2},{content:"BackTop Props",anchor:"backtop-props",level:3},{content:"BackTop Event",anchor:"backtop-event",level:3}]};const w=y,T={class:"vuedoc  "},O=f('<h1 id="backtop-返回顶部" data-source-line="3"><a class="markdownIt-Anchor" href="#backtop-返回顶部">#</a> BackTop 返回顶部</h1><h3 id="用法" data-source-line="5"><a class="markdownIt-Anchor" href="#用法">#</a> 用法</h3><pre style="display:none;"></pre>',3),P={class:"vuedoc-demo "},B={class:"vuedoc-demo__inner"},I={class:"vuedoc-demo__preview"},A={ref:"vdpv_0Ref",class:"vuedoc-demo__sourceref"},H=[f('<div class="vuedoc__code "><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n   <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;height:900px&quot;</span>&gt;</span>滚动页面试试<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n   <span class="hljs-tag">&lt;<span class="hljs-name">ak-backTop</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ak-backTop</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n</span></code></pre></div>',1)],x=f('<h2 id="api" data-source-line="14"><a class="markdownIt-Anchor" href="#api">#</a> API</h2><h3 id="backtop-props" data-source-line="16"><a class="markdownIt-Anchor" href="#backtop-props">#</a> BackTop Props</h3><table data-source-line="18"><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>height</td><td>Number/200</td><td>页面滚动高度达到该值时才显示BackTop组件</td></tr><tr><td>bottom</td><td>Number/30</td><td>组件距离底部的距离</td></tr><tr><td>right</td><td>Number/30</td><td>组件距离右部的距离</td></tr><tr><td>text</td><td>String</td><td>显示文本</td></tr></tbody></table><h3 id="backtop-event" data-source-line="25"><a class="markdownIt-Anchor" href="#backtop-event">#</a> BackTop Event</h3><table data-source-line="27"><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>click</td><td>-</td></tr></tbody></table>',5);w.render=function(t,a,e,s,o,n){const c=r("vdpv_0");return d(),l("div",T,[O,i("div",P,[i("div",B,[i("div",I,[p(c)]),i("div",{style:m({height:t.vdpv_0Height+"px"}),class:"vuedoc-demo__source"},[i("div",A,H,512)],4),i("div",{class:"vuedoc-demo__footer",onClick:a[0]||(a[0]=a=>t.toggleCode(0))},k(t.vdpv_0Height>0?"hidden":"show"),1)])]),x])};export{w as default};
