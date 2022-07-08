var s=Object.defineProperty,a=Object.defineProperties,n=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,e=Object.prototype.propertyIsEnumerable,p=(a,n,l)=>n in a?s(a,n,{enumerable:!0,configurable:!0,writable:!0,value:l}):a[n]=l;import{a as c,o as r,c as h,f as i,b as o,r as d,d as j,l as g,C as m,B as u,t as v,S as b,g as k}from"./vendor.393926ba.js";const y=o("p",null,"dark主题",-1),_=o("p",null,"trigger=click",-1),w={setup(s){const a=[{label:"用户管理",key:"user",icon:"user",children:[{label:"用户列表",key:"aa"},{label:"添加用户",key:"ab"}]},{label:"Navigator Two",key:"b",icon:"search",children:[{label:"item one",key:"b1",children:[{label:"item two",key:"b2"},{label:"item three",key:"b3"}]},{label:"item one",key:"b4"},{label:"item one",key:"b5"}]},{label:"系统设置",key:"set",icon:"date",disabled:!0}];return(s,n)=>{const l=c("ak-menu");return r(),h("div",null,[i(l,{items:a,mode:"horizontal"}),y,i(l,{items:a,mode:"horizontal",theme:"dark"}),_,i(l,{items:a,mode:"horizontal",trigger:"click"})])}}},f={style:{width:"200px"}},q=o("p",null,"dark主题",-1),H={setup(s){const a=[{label:"用户管理",key:"user",icon:"user",children:[{label:"用户列表",key:"aa"},{label:"添加用户",key:"ab"}]},{label:"Navigator Two",key:"b",icon:"search",children:[{label:"item one",key:"b1",children:[{label:"item two",key:"b2"},{label:"item three",key:"b3"}]},{label:"item one",key:"b4"},{label:"item one",key:"b5"}]},{label:"系统设置",key:"set",icon:"date",disabled:!0}];return(s,n)=>{const l=c("ak-menu");return r(),h("div",f,[i(l,{items:a,mode:"vertical"}),q,i(l,{items:a,mode:"vertical",theme:"dark"})])}}},I={style:{width:"200px"}},C=o("p",null,"dark主题",-1),x=j({components:{vdpv_0:w,vdpv_1:H,vdpv_2:{setup(s){const a=d(!1),n=s=>{console.log("click"),console.log(s)},l=s=>{console.log("select"),console.log(s)},t=[{label:"用户管理",key:"user",icon:"user",children:[{label:"用户列表",key:"aa"},{label:"添加用户",key:"ab"}]},{label:"Navigator Two",key:"b",icon:"search",children:[{label:"item one",key:"b1",children:[{label:"item two",key:"b2"},{label:"item three",key:"b3"}]},{label:"item one",key:"b4"},{label:"item one",key:"b5"}]},{label:"系统设置",key:"set",icon:"date",disabled:!0}];return(s,e)=>{const p=c("ak-switch"),d=c("ak-menu");return r(),h("div",I,[o("div",null,[i(p,{modelValue:a.value,"onUpdate:modelValue":e[0]||(e[0]=s=>a.value=s)},null,8,["modelValue"])]),i(d,{items:t,mode:"vertical",collapse:a.value,onClick:n,onSelect:l},null,8,["collapse"]),C,i(d,{items:t,mode:"vertical",theme:"dark",collapse:a.value,onClick:n,onSelect:l},null,8,["collapse"])])}}}},setup(s){const c=d(),r=d(),h=d(),i=[c,r,h],o=g({vdpv_0Height:0,vdpv_1Height:0,vdpv_2Height:0});return j=((s,a)=>{for(var n in a||(a={}))t.call(a,n)&&p(s,n,a[n]);if(l)for(var n of l(a))e.call(a,n)&&p(s,n,a[n]);return s})({toggleCode:s=>{const a="vdpv_"+s;0===o[a+"Height"]?o[a+"Height"]=(i[s].value?i[s].value.offsetHeight:0)||0:o[a+"Height"]=0}},m(o)),a(j,n({vdpv_0Ref:c,vdpv_1Ref:r,vdpv_2Ref:h}));var j}});x.$vd={matter:{},toc:[{content:"Menu 菜单导航",anchor:"menu-菜单导航",level:1},{content:"基本用法",anchor:"基本用法",level:3},{content:"垂直菜单",anchor:"垂直菜单",level:3},{content:"Collapse",anchor:"collapse",level:3},{content:"API",anchor:"api",level:2},{content:"Menu",anchor:"menu",level:3},{content:"Menu Items",anchor:"menu-items",level:3},{content:"Menu Event",anchor:"menu-event",level:3}]};const A=x,O={class:"vuedoc  "},z=b('<h1 id="menu-菜单导航" data-source-line="1"><a class="markdownIt-Anchor" href="#menu-菜单导航">#</a> Menu 菜单导航</h1><h3 id="基本用法" data-source-line="3"><a class="markdownIt-Anchor" href="#基本用法">#</a> 基本用法</h3><pre style="display:none;"></pre>',3),M={class:"vuedoc-demo "},P={class:"vuedoc-demo__inner"},N={class:"vuedoc-demo__preview"},R={ref:"vdpv_0Ref",class:"vuedoc-demo__sourceref"},S=[b('<div class="vuedoc__code "><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">ak-menu</span> <span class="hljs-attr">:items</span>=<span class="hljs-string">items</span> <span class="hljs-attr">mode</span>=<span class="hljs-string">&quot;horizontal&quot;</span> /&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>dark主题<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">ak-menu</span> <span class="hljs-attr">:items</span>=<span class="hljs-string">items</span> <span class="hljs-attr">mode</span>=<span class="hljs-string">&quot;horizontal&quot;</span> <span class="hljs-attr">theme</span>=<span class="hljs-string">&#39;dark&#39;</span> /&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>trigger=click<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">ak-menu</span> <span class="hljs-attr">:items</span>=<span class="hljs-string">items</span> <span class="hljs-attr">mode</span>=<span class="hljs-string">&quot;horizontal&quot;</span> <span class="hljs-attr">trigger</span>=<span class="hljs-string">&#39;click&#39;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">\n<span class="hljs-keyword">const</span> items = [\n  {\n    <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;用户管理&#39;</span>,\n    <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;user&#39;</span>,\n    <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;user&#39;</span>,\n    <span class="hljs-attr">children</span>: [\n      {\n        <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;用户列表&#39;</span>,\n        <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;aa&#39;</span>\n      },\n      {\n        <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;添加用户&#39;</span>,\n        <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;ab&#39;</span>\n      }\n    ]\n  },\n  {\n    <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;Navigator Two&#39;</span>,\n    <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;b&#39;</span>,\n    <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;search&#39;</span>,\n    <span class="hljs-attr">children</span>: [\n      {\n        <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;item one&#39;</span>,\n        <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;b1&#39;</span>,\n        <span class="hljs-attr">children</span>: [\n          {\n            <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;item two&#39;</span>,\n            <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;b2&#39;</span>,\n          },\n          {\n            <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;item three&#39;</span>,\n            <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;b3&#39;</span>,\n          }\n        ]\n      },\n      {\n        <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;item one&#39;</span>,\n        <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;b4&#39;</span>,\n      },\n      {\n        <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;item one&#39;</span>,\n        <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;b5&#39;</span>,\n      }\n    ]\n  },\n  {\n    <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;系统设置&#39;</span>,\n    <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;set&#39;</span>,\n    <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;date&#39;</span>,\n    <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span>\n  }\n]\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n</span></code></pre></div>',1)],T=o("h3",{id:"垂直菜单","data-source-line":"71"},[o("a",{class:"markdownIt-Anchor",href:"#垂直菜单"},"#"),k(" 垂直菜单")],-1),E=o("pre",{style:{display:"none"}},null,-1),V={class:"vuedoc-demo "},K={class:"vuedoc-demo__inner"},B={class:"vuedoc-demo__preview"},D={ref:"vdpv_1Ref",class:"vuedoc-demo__sourceref"},U=[b('<div class="vuedoc__code "><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;width:200px&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">ak-menu</span> <span class="hljs-attr">:items</span>=<span class="hljs-string">items</span> <span class="hljs-attr">mode</span>=<span class="hljs-string">&quot;vertical&quot;</span> /&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>dark主题<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">ak-menu</span> <span class="hljs-attr">:items</span>=<span class="hljs-string">items</span> <span class="hljs-attr">mode</span>=<span class="hljs-string">&quot;vertical&quot;</span> <span class="hljs-attr">theme</span>=<span class="hljs-string">&#39;dark&#39;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">\n<span class="hljs-keyword">const</span> items = [\n  {\n    <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;用户管理&#39;</span>,\n    <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;user&#39;</span>,\n    <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;user&#39;</span>,\n    <span class="hljs-attr">children</span>: [\n      {\n        <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;用户列表&#39;</span>,\n        <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;aa&#39;</span>\n      },\n      {\n        <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;添加用户&#39;</span>,\n        <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;ab&#39;</span>\n      }\n    ]\n  },\n  {\n    <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;Navigator Two&#39;</span>,\n    <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;b&#39;</span>,\n    <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;search&#39;</span>,\n    <span class="hljs-attr">children</span>: [\n      {\n        <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;item one&#39;</span>,\n        <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;b1&#39;</span>,\n        <span class="hljs-attr">children</span>: [\n          {\n            <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;item two&#39;</span>,\n            <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;b2&#39;</span>,\n          },\n          {\n            <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;item three&#39;</span>,\n            <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;b3&#39;</span>,\n          }\n        ]\n      },\n      {\n        <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;item one&#39;</span>,\n        <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;b4&#39;</span>,\n      },\n      {\n        <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;item one&#39;</span>,\n        <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;b5&#39;</span>,\n      }\n    ]\n  },\n  {\n    <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;系统设置&#39;</span>,\n    <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;set&#39;</span>,\n    <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;date&#39;</span>,\n    <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span>\n  }\n]\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n</span></code></pre></div>',1)],$=o("h3",{id:"collapse","data-source-line":"137"},[o("a",{class:"markdownIt-Anchor",href:"#collapse"},"#"),k(" Collapse")],-1),F=o("pre",{style:{display:"none"}},null,-1),G={class:"vuedoc-demo "},J={class:"vuedoc-demo__inner"},L={class:"vuedoc-demo__preview"},Q={ref:"vdpv_2Ref",class:"vuedoc-demo__sourceref"},W=[b('<div class="vuedoc__code "><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;width: 200px&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">ak-switch</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;collapse&quot;</span> /&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">ak-menu</span>\n      <span class="hljs-attr">:items</span>=<span class="hljs-string">&quot;items&quot;</span>\n      <span class="hljs-attr">mode</span>=<span class="hljs-string">&quot;vertical&quot;</span>\n      <span class="hljs-attr">:collapse</span>=<span class="hljs-string">&quot;collapse&quot;</span>\n      @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;click&quot;</span>\n      @<span class="hljs-attr">select</span>=<span class="hljs-string">&quot;select&quot;</span>\n    /&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>dark主题<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">ak-menu</span>\n      <span class="hljs-attr">:items</span>=<span class="hljs-string">&quot;items&quot;</span>\n      <span class="hljs-attr">mode</span>=<span class="hljs-string">&quot;vertical&quot;</span>\n      <span class="hljs-attr">theme</span>=<span class="hljs-string">&quot;dark&quot;</span>\n      <span class="hljs-attr">:collapse</span>=<span class="hljs-string">&quot;collapse&quot;</span>\n      @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;click&quot;</span>\n      @<span class="hljs-attr">select</span>=<span class="hljs-string">&quot;select&quot;</span>\n    /&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">\n  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n\n  <span class="hljs-keyword">const</span> collapse = ref(<span class="hljs-literal">false</span>)\n  <span class="hljs-keyword">const</span> click = <span class="hljs-function">(<span class="hljs-params">item</span>) =&gt;</span> {\n    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;click&#39;</span>)\n    <span class="hljs-built_in">console</span>.log(item)\n  }\n  <span class="hljs-keyword">const</span> select = <span class="hljs-function">(<span class="hljs-params">item</span>) =&gt;</span> {\n    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;select&#39;</span>)\n    <span class="hljs-built_in">console</span>.log(item)\n  }\n  <span class="hljs-keyword">const</span> items = [\n    {\n      <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;用户管理&#39;</span>,\n      <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;user&#39;</span>,\n      <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;user&#39;</span>,\n      <span class="hljs-attr">children</span>: [\n        {\n          <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;用户列表&#39;</span>,\n          <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;aa&#39;</span>\n        },\n        {\n          <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;添加用户&#39;</span>,\n          <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;ab&#39;</span>\n        }\n      ]\n    },\n    {\n      <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;Navigator Two&#39;</span>,\n      <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;b&#39;</span>,\n      <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;search&#39;</span>,\n      <span class="hljs-attr">children</span>: [\n        {\n          <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;item one&#39;</span>,\n          <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;b1&#39;</span>,\n          <span class="hljs-attr">children</span>: [\n            {\n              <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;item two&#39;</span>,\n              <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;b2&#39;</span>\n            },\n            {\n              <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;item three&#39;</span>,\n              <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;b3&#39;</span>\n            }\n          ]\n        },\n        {\n          <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;item one&#39;</span>,\n          <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;b4&#39;</span>\n        },\n        {\n          <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;item one&#39;</span>,\n          <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;b5&#39;</span>\n        }\n      ]\n    },\n    {\n      <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;系统设置&#39;</span>,\n      <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;set&#39;</span>,\n      <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;date&#39;</span>,\n      <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span>\n    }\n  ]\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n\n</span></code></pre></div>',1)],X=b('<h2 id="api" data-source-line="231"><a class="markdownIt-Anchor" href="#api">#</a> API</h2><h3 id="menu" data-source-line="233"><a class="markdownIt-Anchor" href="#menu">#</a> Menu</h3><table data-source-line="235"><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>mode</td><td>string</td><td>菜单类型，现在垂直、水平 <code>vertical、 horizontal</code>，默认<code>vertical</code></td></tr><tr><td>collapse</td><td>boolean</td><td>是否水平折叠收起菜单（仅在 mode 为 vertical 时可用）</td></tr><tr><td>items</td><td>Items[]</td><td>菜单内容</td></tr><tr><td>trigger</td><td>string</td><td>子菜单打开的触发方式，只在 mode 为 horizontal 时有效， ‘hover’（默认） 、 “click”</td></tr><tr><td>theme</td><td>string</td><td>主题颜色 <code>light(默认) 、 dark</code></td></tr><tr><td>style</td><td>CSSProperties</td><td>根节点样式</td></tr><tr><td>liHeight</td><td>number</td><td>子菜单项高，仅在mode为vertical时，用于计算高度平滑动画效果</td></tr><tr><td>openKeys</td><td>string[]</td><td>初始展开的项</td></tr><tr><td>router</td><td>boolean</td><td>是否启用router模式，开启会在点击导航时以key作为path进行路由跳转</td></tr><tr><td>selectedKey</td><td>string</td><td>当前选中的项</td></tr></tbody></table><h3 id="menu-items" data-source-line="248"><a class="markdownIt-Anchor" href="#menu-items">#</a> Menu Items</h3><table data-source-line="250"><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>label</td><td>string</td><td>显示的名称</td></tr><tr><td>key</td><td>string</td><td>唯一标识符</td></tr><tr><td>icon</td><td>string</td><td>名称前icon图标</td></tr><tr><td>disabled</td><td>boolean</td><td>是否可用</td></tr></tbody></table><h3 id="menu-event" data-source-line="257"><a class="markdownIt-Anchor" href="#menu-event">#</a> Menu Event</h3><table data-source-line="259"><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>select</td><td>被选中时调用</td></tr><tr><td>click</td><td>点击item项时调用</td></tr></tbody></table>',7);A.render=function(s,a,n,l,t,e){const p=c("vdpv_0"),d=c("vdpv_1"),j=c("vdpv_2");return r(),h("div",O,[z,o("div",M,[o("div",P,[o("div",N,[i(p)]),o("div",{style:u({height:s.vdpv_0Height+"px"}),class:"vuedoc-demo__source"},[o("div",R,S,512)],4),o("div",{class:"vuedoc-demo__footer",onClick:a[0]||(a[0]=a=>s.toggleCode(0))},v(s.vdpv_0Height>0?"hidden":"show"),1)])]),T,E,o("div",V,[o("div",K,[o("div",B,[i(d)]),o("div",{style:u({height:s.vdpv_1Height+"px"}),class:"vuedoc-demo__source"},[o("div",D,U,512)],4),o("div",{class:"vuedoc-demo__footer",onClick:a[1]||(a[1]=a=>s.toggleCode(1))},v(s.vdpv_1Height>0?"hidden":"show"),1)])]),$,F,o("div",G,[o("div",J,[o("div",L,[i(j)]),o("div",{style:u({height:s.vdpv_2Height+"px"}),class:"vuedoc-demo__source"},[o("div",Q,W,512)],4),o("div",{class:"vuedoc-demo__footer",onClick:a[2]||(a[2]=a=>s.toggleCode(2))},v(s.vdpv_2Height>0?"hidden":"show"),1)])]),X])};export{A as default};
