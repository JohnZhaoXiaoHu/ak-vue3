var H=Object.defineProperty,C=Object.defineProperties;var I=Object.getOwnPropertyDescriptors;var V=Object.getOwnPropertySymbols;var U=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable;var y=(e,s,d)=>s in e?H(e,s,{enumerable:!0,configurable:!0,writable:!0,value:d}):e[s]=d,w=(e,s)=>{for(var d in s||(s={}))U.call(s,d)&&y(e,d,s[d]);if(V)for(var d of V(s))G.call(s,d)&&y(e,d,s[d]);return e},R=(e,s)=>C(e,I(s));import{r as m,e as u,o as _,c as f,f as a,i as r,w as i,u as n,g as p,h as c,F as $,_ as E,d as B,b,t as N,n as k,a as v}from"./index.8e9b675c.js";const S=p("\u9009\u98791"),x=p("\u9009\u98792"),D=p("\u7981\u75285"),F=p("\u7981\u75286"),P={setup(e){const s=m({radio1:!0,radio2:!1,radio3:!0,radio4:!1});return(d,t)=>{const o=u("ak-radio");return _(),f($,null,[a("p",null,[r(o,{modelValue:n(s).radio1,"onUpdate:modelValue":t[0]||(t[0]=l=>n(s).radio1=l)},{default:i(()=>[S]),_:1},8,["modelValue"]),p(" \u5F53\u524D\u503C\uFF1A"+c(n(s).radio1),1)]),a("p",null,[r(o,{modelValue:n(s).radio2,"onUpdate:modelValue":t[1]||(t[1]=l=>n(s).radio2=l)},{default:i(()=>[x]),_:1},8,["modelValue"]),p(" \u5F53\u524D\u503C\uFF1A"+c(n(s).radio2),1)]),a("p",null,[r(o,{modelValue:n(s).radio3,"onUpdate:modelValue":t[2]||(t[2]=l=>n(s).radio3=l),disabled:!0},{default:i(()=>[D]),_:1},8,["modelValue"]),p(" \u5F53\u524D\u503C\uFF1A"+c(n(s).radio3),1)]),a("p",null,[r(o,{modelValue:n(s).radio4,"onUpdate:modelValue":t[3]||(t[3]=l=>n(s).radio4=l),disabled:!0},{default:i(()=>[F]),_:1},8,["modelValue"]),p(" \u5F53\u524D\u503C\uFF1A"+c(n(s).radio4),1)])],64)}}},z=p("\u9009\u98791"),K=p("\u9009\u98792"),M=p("\u9009\u98793"),T=p("\u9009\u98794"),J={setup(e){const s=m({radio1:"",radio2:"",radio3:"",radio4:"ab"});return(d,t)=>{const o=u("ak-radio");return _(),f("div",null,[a("p",null,[r(o,{modelValue:n(s).radio1,"onUpdate:modelValue":t[0]||(t[0]=l=>n(s).radio1=l),value:"a"},{default:i(()=>[z]),_:1},8,["modelValue"]),p(" \u5F53\u524D\u503C\uFF1A"+c(n(s).radio1),1)]),a("p",null,[r(o,{modelValue:n(s).radio2,"onUpdate:modelValue":t[1]||(t[1]=l=>n(s).radio2=l),value:1},{default:i(()=>[K]),_:1},8,["modelValue"]),p(" \u5F53\u524D\u503C\uFF1A"+c(n(s).radio2),1)]),a("p",null,[r(o,{modelValue:n(s).radio3,"onUpdate:modelValue":t[2]||(t[2]=l=>n(s).radio3=l),value:!0},{default:i(()=>[M]),_:1},8,["modelValue"]),p(" \u5F53\u524D\u503C\uFF1A"+c(n(s).radio3),1)]),a("p",null,[r(o,{modelValue:n(s).radio4,"onUpdate:modelValue":t[3]||(t[3]=l=>n(s).radio4=l),value:"ab"},{default:i(()=>[T]),_:1},8,["modelValue"]),p(" \u5F53\u524D\u503C\uFF1A"+c(n(s).radio4),1)])])}}},L={setup(e){const s=m({radio1:"a2",radio2:"a3",data1:[{label:"\u9009\u98791",value:"a1"},{label:"\u9009\u98792",value:"a2"},{label:"\u9009\u98793",value:"a3"},{label:"\u9009\u98794",value:"a4"},{label:"\u7981\u7528",value:"a5",disabled:!0}]}),d=(t,o)=>{console.log(t),console.log(o)};return(t,o)=>{const l=u("ak-radio-group");return _(),f($,null,[a("p",null,[a("div",null,"\u5F53\u524D\u503C\uFF1A"+c(n(s).radio1),1),r(l,{options:n(s).data1,modelValue:n(s).radio1,"onUpdate:modelValue":o[0]||(o[0]=h=>n(s).radio1=h),onChange:d},null,8,["options","modelValue"])]),a("p",null,[a("div",null,"\u6574\u4E2A\u7EC4\u4E0D\u53EF\u9009\uFF0C\u5F53\u524D\u503C\uFF1A"+c(n(s).radio2),1),r(l,{options:n(s).data1,modelValue:n(s).radio2,"onUpdate:modelValue":o[1]||(o[1]=h=>n(s).radio2=h),disabled:!0},null,8,["options","modelValue"])])],64)}}},A=B({components:{vdpv_0:P,vdpv_1:J,vdpv_2:L},setup(e){const s=b(),d=b(),t=b(),o=[s,d,t],l=m({vdpv_0Height:0,vdpv_1Height:0,vdpv_2Height:0});return R(w({toggleCode:j=>{const g="vdpv_"+j;l[g+"Height"]===0?l[g+"Height"]=(o[j].value?o[j].value.offsetHeight:0)||0:l[g+"Height"]=0}},N(l)),{vdpv_0Ref:s,vdpv_1Ref:d,vdpv_2Ref:t})}});A.$vd={matter:{},toc:[{content:"Radio \u5355\u9009\u6846",anchor:"radio-\u5355\u9009\u6846",level:1},{content:"\u57FA\u7840\u7528\u6CD5",anchor:"\u57FA\u7840\u7528\u6CD5",level:3},{content:"\u6307\u5B9A\u9009\u4E2D\u72B6\u6001\u7684\u503C",anchor:"\u6307\u5B9A\u9009\u4E2D\u72B6\u6001\u7684\u503C",level:3},{content:"\u5355\u9009\u7EC4",anchor:"\u5355\u9009\u7EC4",level:3},{content:"API",anchor:"api",level:2},{content:"Radio",anchor:"radio",level:3},{content:"Radio Event",anchor:"radio-event",level:3},{content:"Radio Group",anchor:"radio-group",level:3},{content:"Radio Group Event",anchor:"radio-group-event",level:3},{content:"Radio Group options",anchor:"radio-group-options",level:3}]};const O=A,Q={class:"vuedoc"},W=v('<h1 id="radio-\u5355\u9009\u6846" data-source-line="3"><a class="markdownIt-Anchor" href="#radio-\u5355\u9009\u6846">#</a> Radio \u5355\u9009\u6846</h1><h3 id="\u57FA\u7840\u7528\u6CD5" data-source-line="5"><a class="markdownIt-Anchor" href="#\u57FA\u7840\u7528\u6CD5">#</a> \u57FA\u7840\u7528\u6CD5</h3><p data-source-line="7">\u5355\u4E2A\u4F7F\u7528\u65F6\uFF0C<code>v-model</code>\u4E3Atrue\u65F6\u9009\u4E2D\u72B6\u6001</p><pre style="display:none;"></pre>',4),X={class:"vuedoc-demo"},Y={class:"vuedoc-demo__inner"},Z={class:"vuedoc-demo__preview"},ss={ref:"vdpv_0Ref",class:"vuedoc-demo__sourceref"},as=v(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-radio</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;state.radio1&quot;</span>&gt;</span>\u9009\u98791<span class="hljs-tag">&lt;/<span class="hljs-name">ak-radio</span>&gt;</span>
    \u5F53\u524D\u503C\uFF1A{{ state.radio1 }}
  <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-radio</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;state.radio2&quot;</span>&gt;</span>\u9009\u98792<span class="hljs-tag">&lt;/<span class="hljs-name">ak-radio</span>&gt;</span>
    \u5F53\u524D\u503C\uFF1A{{ state.radio2 }}
  <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-radio</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;state.radio3&quot;</span> <span class="hljs-attr">:disabled</span>=<span class="hljs-string">&quot;true&quot;</span>&gt;</span>\u7981\u75285<span class="hljs-tag">&lt;/<span class="hljs-name">ak-radio</span>&gt;</span>
    \u5F53\u524D\u503C\uFF1A{{ state.radio3 }}
  <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-radio</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;state.radio4&quot;</span> <span class="hljs-attr">:disabled</span>=<span class="hljs-string">&quot;true&quot;</span>&gt;</span>\u7981\u75286<span class="hljs-tag">&lt;/<span class="hljs-name">ak-radio</span>&gt;</span>
    \u5F53\u524D\u503C\uFF1A{{ state.radio4 }}
  <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { reactive } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

  <span class="hljs-keyword">const</span> state = reactive({
    <span class="hljs-attr">radio1</span>: <span class="hljs-literal">true</span>,
    <span class="hljs-attr">radio2</span>: <span class="hljs-literal">false</span>,
    <span class="hljs-attr">radio3</span>: <span class="hljs-literal">true</span>,
    <span class="hljs-attr">radio4</span>: <span class="hljs-literal">false</span>
  })
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>


</span></code></pre></div>`,1),ns=[as],ts=a("h3",{id:"\u6307\u5B9A\u9009\u4E2D\u72B6\u6001\u7684\u503C","data-source-line":"42"},[a("a",{class:"markdownIt-Anchor",href:"#\u6307\u5B9A\u9009\u4E2D\u72B6\u6001\u7684\u503C"},"#"),p(" \u6307\u5B9A\u9009\u4E2D\u72B6\u6001\u7684\u503C")],-1),ls=a("p",{"data-source-line":"44"},[p("\u4F7F\u7528"),a("code",null,"value"),p("\u65F6\uFF0C\u9009\u4E2D\u72B6\u6001\u8FD4\u56DE"),a("code",null,"value"),p("\u7684\u503C\uFF0C\u5F53"),a("code",null,"v-model=value"),p("\u65F6\u4E3A\u9009\u4E2D\u72B6\u6001\u3002")],-1),es=a("pre",{style:{display:"none"}},null,-1),ps={class:"vuedoc-demo"},os={class:"vuedoc-demo__inner"},ds={class:"vuedoc-demo__preview"},rs={ref:"vdpv_1Ref",class:"vuedoc-demo__sourceref"},cs=v(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-radio</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;state.radio1&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;a&quot;</span>&gt;</span>\u9009\u98791<span class="hljs-tag">&lt;/<span class="hljs-name">ak-radio</span>&gt;</span>
      \u5F53\u524D\u503C\uFF1A{{ state.radio1 }}
    <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-radio</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;state.radio2&quot;</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;1&quot;</span>&gt;</span>\u9009\u98792<span class="hljs-tag">&lt;/<span class="hljs-name">ak-radio</span>&gt;</span>
      \u5F53\u524D\u503C\uFF1A{{ state.radio2 }}
    <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-radio</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;state.radio3&quot;</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;true&quot;</span>&gt;</span>\u9009\u98793<span class="hljs-tag">&lt;/<span class="hljs-name">ak-radio</span>&gt;</span>
      \u5F53\u524D\u503C\uFF1A{{ state.radio3 }}
    <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ak-radio</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;state.radio4&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;ab&quot;</span>&gt;</span>\u9009\u98794<span class="hljs-tag">&lt;/<span class="hljs-name">ak-radio</span>&gt;</span>
      \u5F53\u524D\u503C\uFF1A{{ state.radio4 }}
    <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { reactive } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

  <span class="hljs-keyword">const</span> state = reactive({
    <span class="hljs-attr">radio1</span>: <span class="hljs-string">&#39;&#39;</span>,
    <span class="hljs-attr">radio2</span>: <span class="hljs-string">&#39;&#39;</span>,
    <span class="hljs-attr">radio3</span>: <span class="hljs-string">&#39;&#39;</span>,
    <span class="hljs-attr">radio4</span>: <span class="hljs-string">&#39;ab&#39;</span>
  })
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>


</span></code></pre></div>`,1),is=[cs],hs=a("h3",{id:"\u5355\u9009\u7EC4","data-source-line":"81"},[a("a",{class:"markdownIt-Anchor",href:"#\u5355\u9009\u7EC4"},"#"),p(" \u5355\u9009\u7EC4")],-1),us=a("pre",{style:{display:"none"}},null,-1),js={class:"vuedoc-demo"},gs={class:"vuedoc-demo__inner"},vs={class:"vuedoc-demo__preview"},ms={ref:"vdpv_2Ref",class:"vuedoc-demo__sourceref"},_s=v(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml">
<span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\u5F53\u524D\u503C\uFF1A{{state.radio1}}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">ak-radio-group</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;state.data1&quot;</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;state.radio1&quot;</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;changeGroup&quot;</span>/&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\u6574\u4E2A\u7EC4\u4E0D\u53EF\u9009\uFF0C\u5F53\u524D\u503C\uFF1A{{state.radio2}}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">ak-radio-group</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;state.data1&quot;</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;state.radio2&quot;</span> <span class="hljs-attr">:disabled</span>=<span class="hljs-string">&quot;true&quot;</span>/&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
<span class="hljs-keyword">import</span> {reactive} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

<span class="hljs-keyword">const</span> state = reactive({
  <span class="hljs-attr">radio1</span>: <span class="hljs-string">&#39;a2&#39;</span>,
  <span class="hljs-attr">radio2</span>: <span class="hljs-string">&#39;a3&#39;</span>,
  <span class="hljs-attr">data1</span>: [
    {<span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u9009\u98791&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;a1&#39;</span>},
    {<span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u9009\u98792&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;a2&#39;</span>},
    {<span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u9009\u98793&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;a3&#39;</span>},
    {<span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u9009\u98794&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;a4&#39;</span>},
    {<span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u7981\u7528&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;a5&#39;</span>, <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span>}
  ]
})
<span class="hljs-keyword">const</span> changeGroup = <span class="hljs-function">(<span class="hljs-params">value,item</span>)=&gt;</span>{
  <span class="hljs-built_in">console</span>.log(value)
  <span class="hljs-built_in">console</span>.log(item)
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),fs=[_s],bs=v('<h2 id="api" data-source-line="118"><a class="markdownIt-Anchor" href="#api">#</a> API</h2><h3 id="radio" data-source-line="120"><a class="markdownIt-Anchor" href="#radio">#</a> Radio</h3><table data-source-line="122"><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>v-model</td><td>string/boolean/number</td><td>Radio \u7684 v-model</td></tr><tr><td>value</td><td>string/boolean/number</td><td>\u9009\u4E2D\u7684\u503C\uFF0C\u5F53v-model\uFF1Dvalue\u65F6\u4E3A\u9009\u4E2D\u72B6\u6001</td></tr><tr><td>disabled</td><td>boolean/false</td><td>\u662F\u5426\u7981\u7528</td></tr><tr><td>label</td><td>String</td><td>\u663E\u793A\u7684\u6587\u672C\u503C\uFF0C\u4E5F\u53EF\u4EE5\u662Fslot</td></tr></tbody></table><h3 id="radio-event" data-source-line="129"><a class="markdownIt-Anchor" href="#radio-event">#</a> Radio Event</h3><table data-source-line="131"><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>change</td><td>\u6539\u53D8\u4E8B\u4EF6</td></tr></tbody></table><h3 id="radio-group" data-source-line="135"><a class="markdownIt-Anchor" href="#radio-group">#</a> Radio Group</h3><table data-source-line="137"><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>v-model</td><td>string</td><td>Radio\u7EC4 \u7684 v-model</td></tr><tr><td>options</td><td>array</td><td>\u7EC4\u6570\u636E</td></tr><tr><td>optionsKey</td><td>object</td><td>\u6307\u5B9A\u9009\u62E9\u6570\u636E\u7684label\u548Cvalue\u5C5E\u4E8E\uFF0C\u9ED8\u8BA4{label:\u2018label\u2019,value:\u2018value\u2019}</td></tr><tr><td>disabled</td><td>Boolean/false</td><td>\u7981\u7528\u7EC4</td></tr></tbody></table><h3 id="radio-group-event" data-source-line="144"><a class="markdownIt-Anchor" href="#radio-group-event">#</a> Radio Group Event</h3><table data-source-line="146"><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>change</td><td>\u6539\u53D8\u4E8B\u4EF6,\u8FD4\u56DE(value,item) value\u4E3A\u5F53\u524D\u9009\u4E2D\u7684\u503C\uFF0Citem\u4E3A\u5F53\u524Ddata\u4E2D\u9009\u4E2D\u7684\u9879</td></tr></tbody></table><h3 id="radio-group-options" data-source-line="150"><a class="markdownIt-Anchor" href="#radio-group-options">#</a> Radio Group options</h3><table data-source-line="152"><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>label</td><td>string</td><td>\u663E\u793A\u7684\u6587\u672C\u503C</td></tr><tr><td>value</td><td>string</td><td>\u5F53\u524D\u9009\u9879\u503C</td></tr><tr><td>disabled</td><td>boolean/false</td><td>\u662F\u5426\u7981\u7528</td></tr></tbody></table>',11);function ks(e,s,d,t,o,l){const h=u("vdpv_0"),j=u("vdpv_1"),g=u("vdpv_2");return _(),f("div",Q,[W,a("div",X,[a("div",Y,[a("div",Z,[r(h)]),a("div",{style:k({height:e.vdpv_0Height+"px"}),class:"vuedoc-demo__source"},[a("div",ss,ns,512)],4),a("div",{class:"vuedoc-demo__footer",onClick:s[0]||(s[0]=q=>e.toggleCode(0))},c(e.vdpv_0Height>0?"hidden":"show"),1)])]),ts,ls,es,a("div",ps,[a("div",os,[a("div",ds,[r(j)]),a("div",{style:k({height:e.vdpv_1Height+"px"}),class:"vuedoc-demo__source"},[a("div",rs,is,512)],4),a("div",{class:"vuedoc-demo__footer",onClick:s[1]||(s[1]=q=>e.toggleCode(1))},c(e.vdpv_1Height>0?"hidden":"show"),1)])]),hs,us,a("div",js,[a("div",gs,[a("div",vs,[r(g)]),a("div",{style:k({height:e.vdpv_2Height+"px"}),class:"vuedoc-demo__source"},[a("div",ms,fs,512)],4),a("div",{class:"vuedoc-demo__footer",onClick:s[2]||(s[2]=q=>e.toggleCode(2))},c(e.vdpv_2Height>0?"hidden":"show"),1)])]),bs])}var ys=E(O,[["render",ks]]);export{ys as default};
