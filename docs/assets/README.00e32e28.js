var V=Object.defineProperty,$=Object.defineProperties;var C=Object.getOwnPropertyDescriptors;var y=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var w=(t,a,n)=>a in t?V(t,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[a]=n,q=(t,a)=>{for(var n in a||(a={}))A.call(a,n)&&w(t,n,a[n]);if(y)for(var n of y(a))N.call(a,n)&&w(t,n,a[n]);return t},I=(t,a)=>$(t,C(a));import{d as i,b as p,e as d,o as v,j,_ as R,r as x,t as E,c as B,f as s,i as _,n as m,h as g,a as r,g as b}from"./index.8e9b675c.js";const U=i({setup(t){const a=p(1);return(n,e)=>{const l=d("ak-input-number");return v(),j(l,{modelValue:a.value,"onUpdate:modelValue":e[0]||(e[0]=o=>a.value=o)},null,8,["modelValue"])}}}),S=i({setup(t){const a=p(1);return(n,e)=>{const l=d("ak-input-number");return v(),j(l,{modelValue:a.value,"onUpdate:modelValue":e[0]||(e[0]=o=>a.value=o),disabled:!0},null,8,["modelValue"])}}}),z=i({setup(t){const a=p(1);return(n,e)=>{const l=d("ak-input-number");return v(),j(l,{modelValue:a.value,"onUpdate:modelValue":e[0]||(e[0]=o=>a.value=o),max:10,min:1},null,8,["modelValue"])}}}),D=i({setup(t){const a=p(1);return(n,e)=>{const l=d("ak-input-number");return v(),j(l,{modelValue:a.value,"onUpdate:modelValue":e[0]||(e[0]=o=>a.value=o),step:5},null,8,["modelValue"])}}}),H=i({components:{vdpv_0:U,vdpv_1:S,vdpv_2:z,vdpv_3:D},setup(t){const a=p(),n=p(),e=p(),l=p(),o=[a,n,e,l],c=x({vdpv_0Height:0,vdpv_1Height:0,vdpv_2Height:0,vdpv_3Height:0});return I(q({toggleCode:u=>{const h="vdpv_"+u;c[h+"Height"]===0?c[h+"Height"]=(o[u].value?o[u].value.offsetHeight:0)||0:c[h+"Height"]=0}},E(c)),{vdpv_0Ref:a,vdpv_1Ref:n,vdpv_2Ref:e,vdpv_3Ref:l})}});H.$vd={matter:{},toc:[{content:"InputNumber \u8BA1\u6570\u5668",anchor:"inputnumber-\u8BA1\u6570\u5668",level:1},{content:"\u57FA\u7840\u7528\u6CD5",anchor:"\u57FA\u7840\u7528\u6CD5",level:3},{content:"\u7981\u7528\u72B6\u6001",anchor:"\u7981\u7528\u72B6\u6001",level:3},{content:"\u8BBE\u7F6E\u6700\u5927\u6700\u5C0F\u503C",anchor:"\u8BBE\u7F6E\u6700\u5927\u6700\u5C0F\u503C",level:3},{content:"\u8BBE\u7F6E\u6B65\u957F",anchor:"\u8BBE\u7F6E\u6B65\u957F",level:3},{content:"API",anchor:"api",level:2},{content:"InputNumber",anchor:"inputnumber",level:3},{content:"InputNumber Events",anchor:"inputnumber-events",level:3}]};const P=H,M={class:"vuedoc"},O=r('<h1 id="inputnumber-\u8BA1\u6570\u5668" data-source-line="3"><a class="markdownIt-Anchor" href="#inputnumber-\u8BA1\u6570\u5668">#</a> InputNumber \u8BA1\u6570\u5668</h1><h3 id="\u57FA\u7840\u7528\u6CD5" data-source-line="5"><a class="markdownIt-Anchor" href="#\u57FA\u7840\u7528\u6CD5">#</a> \u57FA\u7840\u7528\u6CD5</h3><pre style="display:none;"></pre>',3),T={class:"vuedoc-demo"},F={class:"vuedoc-demo__inner"},G={class:"vuedoc-demo__preview"},J={ref:"vdpv_0Ref",class:"vuedoc-demo__sourceref"},K=r(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">ak-input-number</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
  <span class="hljs-keyword">const</span> value = ref(<span class="hljs-number">1</span>)
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),L=[K],Q=s("h3",{id:"\u7981\u7528\u72B6\u6001","data-source-line":"18"},[s("a",{class:"markdownIt-Anchor",href:"#\u7981\u7528\u72B6\u6001"},"#"),b(" \u7981\u7528\u72B6\u6001")],-1),W=s("pre",{style:{display:"none"}},null,-1),X={class:"vuedoc-demo"},Y={class:"vuedoc-demo__inner"},Z={class:"vuedoc-demo__preview"},ss={ref:"vdpv_1Ref",class:"vuedoc-demo__sourceref"},as=r(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">ak-input-number</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">:disabled</span>=<span class="hljs-string">&quot;true&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

  <span class="hljs-keyword">const</span> value = ref(<span class="hljs-number">1</span>)
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>


</span></code></pre></div>`,1),ts=[as],ns=s("h3",{id:"\u8BBE\u7F6E\u6700\u5927\u6700\u5C0F\u503C","data-source-line":"33"},[s("a",{class:"markdownIt-Anchor",href:"#\u8BBE\u7F6E\u6700\u5927\u6700\u5C0F\u503C"},"#"),b(" \u8BBE\u7F6E\u6700\u5927\u6700\u5C0F\u503C")],-1),es=s("p",{"data-source-line":"35"},[s("code",null,'max="10" min="1"')],-1),ls=s("pre",{style:{display:"none"}},null,-1),os={class:"vuedoc-demo"},ps={class:"vuedoc-demo__inner"},ds={class:"vuedoc-demo__preview"},cs={ref:"vdpv_2Ref",class:"vuedoc-demo__sourceref"},rs=r(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">ak-input-number</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">:max</span>=<span class="hljs-string">&quot;10&quot;</span> <span class="hljs-attr">:min</span>=<span class="hljs-string">&quot;1&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

  <span class="hljs-keyword">const</span> value = ref(<span class="hljs-number">1</span>)
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>


</span></code></pre></div>`,1),us=[rs],hs=s("h3",{id:"\u8BBE\u7F6E\u6B65\u957F","data-source-line":"50"},[s("a",{class:"markdownIt-Anchor",href:"#\u8BBE\u7F6E\u6B65\u957F"},"#"),b(" \u8BBE\u7F6E\u6B65\u957F")],-1),is=s("p",{"data-source-line":"52"},[s("code",null,'step="5"')],-1),vs=s("pre",{style:{display:"none"}},null,-1),_s={class:"vuedoc-demo"},ms={class:"vuedoc-demo__inner"},gs={class:"vuedoc-demo__preview"},js={ref:"vdpv_3Ref",class:"vuedoc-demo__sourceref"},fs=r(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">ak-input-number</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">:step</span>=<span class="hljs-string">&quot;5&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

  <span class="hljs-keyword">const</span> value = ref(<span class="hljs-number">1</span>)
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),bs=[fs],ks=r('<h2 id="api" data-source-line="66"><a class="markdownIt-Anchor" href="#api">#</a> API</h2><h3 id="inputnumber" data-source-line="68"><a class="markdownIt-Anchor" href="#inputnumber">#</a> InputNumber</h3><table data-source-line="70"><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>v-model</td><td>number</td><td>\u7ED1\u5B9A\u503C\uFF0C\u9ED8\u8BA40</td></tr><tr><td>max</td><td>number</td><td>\u5141\u8BB8\u7684\u6700\u5927\u503C</td></tr><tr><td>min</td><td>number</td><td>\u5141\u8BB8\u7684\u6700\u5C0F\u503C</td></tr><tr><td>step</td><td>number</td><td>\u6B65\u957F</td></tr><tr><td>disabled</td><td>boolean/false</td><td>\u662F\u5426\u7981\u7528</td></tr><tr><td>placeholder</td><td>string</td><td>\u8F93\u5165\u6846\u70B9\u4F4D\u7B26</td></tr><tr><td>readOnly</td><td>boolean/true</td><td>\u5141\u8BB8\u624B\u52A8\u8F93\u5165</td></tr><tr><td>size</td><td>string</td><td>\u6DFB\u52A0\u7684\u5927\u5C0F\u5C3A\u5BF8\u6837\u5F0F</td></tr></tbody></table><h3 id="inputnumber-events" data-source-line="81"><a class="markdownIt-Anchor" href="#inputnumber-events">#</a> InputNumber Events</h3><table data-source-line="83"><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>change</td><td>\u7ED1\u5B9A\u503C\u88AB\u6539\u53D8\u65F6\u89E6\u53D1</td></tr><tr><td>blur</td><td>\u5728\u7EC4\u4EF6 Input \u5931\u53BB\u7126\u70B9\u65F6\u89E6\u53D1</td></tr><tr><td>focus</td><td>\u5728\u7EC4\u4EF6 Input \u83B7\u5F97\u7126\u70B9\u65F6\u89E6\u53D1</td></tr></tbody></table>',5);function ys(t,a,n,e,l,o){const c=d("vdpv_0"),k=d("vdpv_1"),u=d("vdpv_2"),h=d("vdpv_3");return v(),B("div",M,[O,s("div",T,[s("div",F,[s("div",G,[_(c)]),s("div",{style:m({height:t.vdpv_0Height+"px"}),class:"vuedoc-demo__source"},[s("div",J,L,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[0]||(a[0]=f=>t.toggleCode(0))},g(t.vdpv_0Height>0?"hidden":"show"),1)])]),Q,W,s("div",X,[s("div",Y,[s("div",Z,[_(k)]),s("div",{style:m({height:t.vdpv_1Height+"px"}),class:"vuedoc-demo__source"},[s("div",ss,ts,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[1]||(a[1]=f=>t.toggleCode(1))},g(t.vdpv_1Height>0?"hidden":"show"),1)])]),ns,es,ls,s("div",os,[s("div",ps,[s("div",ds,[_(u)]),s("div",{style:m({height:t.vdpv_2Height+"px"}),class:"vuedoc-demo__source"},[s("div",cs,us,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[2]||(a[2]=f=>t.toggleCode(2))},g(t.vdpv_2Height>0?"hidden":"show"),1)])]),hs,is,vs,s("div",_s,[s("div",ms,[s("div",gs,[_(h)]),s("div",{style:m({height:t.vdpv_3Height+"px"}),class:"vuedoc-demo__source"},[s("div",js,bs,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[3]||(a[3]=f=>t.toggleCode(3))},g(t.vdpv_3Height>0?"hidden":"show"),1)])]),ks])}var Is=R(P,[["render",ys]]);export{Is as default};
