var s=Object.defineProperty,a=Object.defineProperties,n=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,e=(a,n,t)=>n in a?s(a,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[n]=t;import{a as o,o as d,h as c,w as r,b as h,c as g,e as i,f as j,g as u,t as m,F as v,d as w,r as _,l as k,C as f,B as y,S as q}from"./vendor.393926ba.js";const b={},x=u(" 下拉菜单 ");b.render=function(s,a){const n=o("ak-dropdown-item"),t=o("ak-dropdown");return d(),c(t,null,{dropdown:r((()=>[h("ul",null,[(d(),g(v,null,i(5,(s=>j(n,{key:s},{default:r((()=>[u("菜单选项"+m(s),1)])),_:2},1024))),64))])])),default:r((()=>[x])),_:1})};const I={},D=u("下拉菜单"),H=h("i",{class:"icon-arrow"},null,-1),A=h("span",null,"文字无触发事件",-1),C=h("i",{class:"icon-arrow",style:{"margin-left":"15px"}},null,-1),O=u("点击下拉"),P=h("i",{class:"icon-arrow"},null,-1),R=h("span",null,"点击箭头下拉",-1),S=h("i",{class:"icon-arrow",style:{"margin-left":"15px"}},null,-1);I.render=function(s,a){const n=o("ak-button"),t=o("ak-dropdown-item"),l=o("ak-dropdown");return d(),g("div",null,[j(l,null,{dropdown:r((()=>[h("ul",null,[(d(),g(v,null,i(5,(s=>j(t,{key:s},{default:r((()=>[u("2菜单选项"+m(s),1)])),_:2},1024))),64))])])),default:r((()=>[j(n,null,{default:r((()=>[D,H])),_:1})])),_:1}),j(l,{style:{border:"1px solid #ddd",padding:"8px 12px"}},{trigger:r((()=>[C])),dropdown:r((()=>[h("ul",null,[(d(),g(v,null,i(5,(s=>j(t,{key:s},{default:r((()=>[u("2菜单选项"+m(s),1)])),_:2},1024))),64))])])),default:r((()=>[A])),_:1}),j(l,{trigger:"click"},{dropdown:r((()=>[h("ul",null,[(d(),g(v,null,i(5,(s=>j(t,{key:s},{default:r((()=>[u("2菜单选项"+m(s),1)])),_:2},1024))),64))])])),default:r((()=>[j(n,null,{default:r((()=>[O,P])),_:1})])),_:1}),j(l,{trigger:"click",style:{border:"1px solid #ddd",padding:"8px 12px"}},{trigger:r((()=>[S])),dropdown:r((()=>[h("ul",null,[(d(),g(v,null,i(5,(s=>j(t,{key:s},{default:r((()=>[u("2菜单选项"+m(s),1)])),_:2},1024))),64))])])),default:r((()=>[R])),_:1})])};const B=u(" 下拉菜单 "),E=w({components:{vdpv_0:b,vdpv_1:I,vdpv_2:{setup(s){const a=()=>{alert("菜单选项")};return(s,n)=>{const t=o("ak-dropdown-item"),l=o("ak-dropdown");return d(),c(l,{ref:dropdown},{dropdown:r((()=>[h("ul",null,[(d(),g(v,null,i(5,(s=>j(t,{onClick:a,key:s},{default:r((()=>[u("菜单选项"+m(s),1)])),_:2},1024))),64))])])),default:r((()=>[B])),_:1},512)}}}},setup(s){const o=_(),d=_(),c=_(),r=[o,d,c],h=k({vdpv_0Height:0,vdpv_1Height:0,vdpv_2Height:0});return g=((s,a)=>{for(var n in a||(a={}))l.call(a,n)&&e(s,n,a[n]);if(t)for(var n of t(a))p.call(a,n)&&e(s,n,a[n]);return s})({toggleCode:s=>{const a="vdpv_"+s;0===h[a+"Height"]?h[a+"Height"]=(r[s].value?r[s].value.offsetHeight:0)||0:h[a+"Height"]=0}},f(h)),a(g,n({vdpv_0Ref:o,vdpv_1Ref:d,vdpv_2Ref:c}));var g}});E.$vd={matter:{},toc:[{content:"Dropdown 下拉菜单",anchor:"dropdown-下拉菜单",level:1},{content:"用法",anchor:"用法",level:3},{content:"触发对象",anchor:"触发对象",level:3},{content:"事件",anchor:"事件",level:3},{content:"API",anchor:"api",level:2},{content:"Dropdown",anchor:"dropdown",level:3},{content:"DropdownItem",anchor:"dropdownitem",level:3},{content:"Dropdown Event",anchor:"dropdown-event",level:3},{content:"Dropdown Methods",anchor:"dropdown-methods",level:3},{content:"Dropdown Slot",anchor:"dropdown-slot",level:3}]};const M=E,N={class:"vuedoc  "},F=q('<h1 id="dropdown-下拉菜单" data-source-line="1"><a class="markdownIt-Anchor" href="#dropdown-下拉菜单">#</a> Dropdown 下拉菜单</h1><h3 id="用法" data-source-line="3"><a class="markdownIt-Anchor" href="#用法">#</a> 用法</h3><p data-source-line="5">通过具名<code>slot</code>为<code>dropdown</code> 来设置下拉菜单。默认情况下，下拉按钮只要<code>hover</code>即可，无需点击也会显示下拉菜单</p><pre style="display:none;"></pre>',4),T={class:"vuedoc-demo "},U={class:"vuedoc-demo__inner"},$={class:"vuedoc-demo__preview"},z={ref:"vdpv_0Ref",class:"vuedoc-demo__sourceref"},G=[q('<div class="vuedoc__code "><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">ak-dropdown</span>&gt;</span>\n    下拉菜单\n    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">dropdown</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">ul</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">ak-dropdown-item</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;item in 5&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;item&quot;</span>\n          &gt;</span>菜单选项{{ item }}&lt;/ak-dropdown-item\n        &gt;\n      <span class="hljs-tag">&lt;/<span class="hljs-name">ul</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">ak-dropdown</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n\n</span></code></pre></div>',1)],J=h("h3",{id:"触发对象","data-source-line":"24"},[h("a",{class:"markdownIt-Anchor",href:"#触发对象"},"#"),u(" 触发对象")],-1),K=h("p",{"data-source-line":"26"},[u("通过具名"),h("code",null,"slot"),u("为"),h("code",null,"dropdown"),u(" 来设置下拉菜单。默认情况下，下拉按钮只要"),h("code",null,"hover"),u("即可，无需点击也会显示下拉菜单")],-1),L=h("pre",{style:{display:"none"}},null,-1),Q={class:"vuedoc-demo "},V={class:"vuedoc-demo__inner"},W={class:"vuedoc-demo__preview"},X={ref:"vdpv_1Ref",class:"vuedoc-demo__sourceref"},Y=[q('<div class="vuedoc__code "><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">ak-dropdown</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span>&gt;</span>下拉菜单<span class="hljs-tag">&lt;<span class="hljs-name">i</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;icon-arrow&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">dropdown</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">ul</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">ak-dropdown-item</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;item in 5&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;item&quot;</span>\n            &gt;</span>2菜单选项{{ item }}&lt;/ak-dropdown-item\n          &gt;\n        <span class="hljs-tag">&lt;/<span class="hljs-name">ul</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">ak-dropdown</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">ak-dropdown</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;border: 1px solid #ddd; padding: 8px 12px&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>文字无触发事件<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">trigger</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">i</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;icon-arrow&quot;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;margin-left: 15px&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">dropdown</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">ul</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">ak-dropdown-item</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;item in 5&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;item&quot;</span>\n            &gt;</span>2菜单选项{{ item }}&lt;/ak-dropdown-item\n          &gt;\n        <span class="hljs-tag">&lt;/<span class="hljs-name">ul</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">ak-dropdown</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">ak-dropdown</span> <span class="hljs-attr">trigger</span>=<span class="hljs-string">&quot;click&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span>&gt;</span>点击下拉<span class="hljs-tag">&lt;<span class="hljs-name">i</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;icon-arrow&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">dropdown</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">ul</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">ak-dropdown-item</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;item in 5&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;item&quot;</span>\n            &gt;</span>2菜单选项{{ item }}&lt;/ak-dropdown-item\n          &gt;\n        <span class="hljs-tag">&lt;/<span class="hljs-name">ul</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">ak-dropdown</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">ak-dropdown</span>\n      <span class="hljs-attr">trigger</span>=<span class="hljs-string">&quot;click&quot;</span>\n      <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;border: 1px solid #ddd; padding: 8px 12px&quot;</span>\n    &gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>点击箭头下拉<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">trigger</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">i</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;icon-arrow&quot;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;margin-left: 15px&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">dropdown</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">ul</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">ak-dropdown-item</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;item in 5&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;item&quot;</span>\n            &gt;</span>2菜单选项{{ item }}&lt;/ak-dropdown-item\n          &gt;\n        <span class="hljs-tag">&lt;/<span class="hljs-name">ul</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">ak-dropdown</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">&lt;/script&gt;\n\n\n</span></code></pre></div>',1)],Z=h("h3",{id:"事件","data-source-line":"87"},[h("a",{class:"markdownIt-Anchor",href:"#事件"},"#"),u(" 事件")],-1),ss=h("pre",{style:{display:"none"}},null,-1),as={class:"vuedoc-demo "},ns={class:"vuedoc-demo__inner"},ts={class:"vuedoc-demo__preview"},ls={ref:"vdpv_2Ref",class:"vuedoc-demo__sourceref"},ps=[q('<div class="vuedoc__code "><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">ak-dropdown</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;dropdown&quot;</span>&gt;</span>\n    下拉菜单\n    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">dropdown</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">ul</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">ak-dropdown-item</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;item in 5&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;click&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;item&quot;</span>\n          &gt;</span>菜单选项{{ item }}&lt;/ak-dropdown-item\n        &gt;\n      <span class="hljs-tag">&lt;/<span class="hljs-name">ul</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">ak-dropdown</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">\n  <span class="hljs-keyword">const</span> click = <span class="hljs-function">() =&gt;</span> {\n    alert(<span class="hljs-string">&#39;菜单选项&#39;</span>)\n  }\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n\n\n</span></code></pre></div>',1)],es=q('<h2 id="api" data-source-line="111"><a class="markdownIt-Anchor" href="#api">#</a> API</h2><h3 id="dropdown" data-source-line="113"><a class="markdownIt-Anchor" href="#dropdown">#</a> Dropdown</h3><table data-source-line="115"><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>trigger</td><td>String/hover</td><td>触发下拉的行为,hover和click</td></tr><tr><td>appendToBody</td><td>Boolean/false</td><td>插入到body</td></tr><tr><td>direction</td><td>Number/0</td><td>下拉弹出方向，0自动，1向上，2向下</td></tr><tr><td>downClass</td><td>string</td><td>展开面板类名</td></tr></tbody></table><h3 id="dropdownitem" data-source-line="122"><a class="markdownIt-Anchor" href="#dropdownitem">#</a> DropdownItem</h3><table data-source-line="124"><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>disabled</td><td>Boolean/false</td><td>禁用状态</td></tr><tr><td>className</td><td>String</td><td>类名</td></tr></tbody></table><h3 id="dropdown-event" data-source-line="129"><a class="markdownIt-Anchor" href="#dropdown-event">#</a> Dropdown Event</h3><table data-source-line="131"><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>click</td><td>点击事件</td></tr><tr><td>toggle</td><td>展开或收起下拉事件,function(down){true为展开状态,false收起}</td></tr></tbody></table><h3 id="dropdown-methods" data-source-line="136"><a class="markdownIt-Anchor" href="#dropdown-methods">#</a> Dropdown Methods</h3><table data-source-line="138"><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>slideUp</td><td>用于收起下拉，仅当<code>trigger</code>为<code>click</code>时</td></tr></tbody></table><h3 id="dropdown-slot" data-source-line="143"><a class="markdownIt-Anchor" href="#dropdown-slot">#</a> Dropdown Slot</h3><table data-source-line="145"><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>dropdown</td><td>下拉内容</td></tr><tr><td>trigger</td><td>触发下拉标签</td></tr></tbody></table>',11);M.render=function(s,a,n,t,l,p){const e=o("vdpv_0"),c=o("vdpv_1"),r=o("vdpv_2");return d(),g("div",N,[F,h("div",T,[h("div",U,[h("div",$,[j(e)]),h("div",{style:y({height:s.vdpv_0Height+"px"}),class:"vuedoc-demo__source"},[h("div",z,G,512)],4),h("div",{class:"vuedoc-demo__footer",onClick:a[0]||(a[0]=a=>s.toggleCode(0))},m(s.vdpv_0Height>0?"hidden":"show"),1)])]),J,K,L,h("div",Q,[h("div",V,[h("div",W,[j(c)]),h("div",{style:y({height:s.vdpv_1Height+"px"}),class:"vuedoc-demo__source"},[h("div",X,Y,512)],4),h("div",{class:"vuedoc-demo__footer",onClick:a[1]||(a[1]=a=>s.toggleCode(1))},m(s.vdpv_1Height>0?"hidden":"show"),1)])]),Z,ss,h("div",as,[h("div",ns,[h("div",ts,[j(r)]),h("div",{style:y({height:s.vdpv_2Height+"px"}),class:"vuedoc-demo__source"},[h("div",ls,ps,512)],4),h("div",{class:"vuedoc-demo__footer",onClick:a[2]||(a[2]=a=>s.toggleCode(2))},m(s.vdpv_2Height>0?"hidden":"show"),1)])]),es])};export{M as default};
