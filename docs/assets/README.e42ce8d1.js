var y=Object.defineProperty,$=Object.defineProperties;var C=Object.getOwnPropertyDescriptors;var _=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var j=(t,s,a)=>s in t?y(t,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[s]=a,m=(t,s)=>{for(var a in s||(s={}))D.call(s,a)&&j(t,a,s[a]);if(_)for(var a of _(s))A.call(s,a)&&j(t,a,s[a]);return t},f=(t,s)=>$(t,C(s));import{d as k,b as h,e as u,o as w,c as b,j as p,h as r,k as d,_ as E,r as H,t as V,l as o,n as I,m as B,a as v}from"./index.23beb73c.js";const N=d("\u5DE6\u8FB9"),R=d("\u9879\u90E8"),x=d("\u53F3\u8FB9"),F=d("\u5E95\u90E8"),S=d("this content"),P=k({setup(t){const s=h("left"),a=h(!1),e=i=>{s.value=i,a.value=!0};return(i,n)=>{const l=u("ak-button"),g=u("ak-drawer");return w(),b("div",null,[p(l,{onClick:n[0]||(n[0]=c=>e("left"))},{default:r(()=>[N]),_:1}),p(l,{onClick:n[1]||(n[1]=c=>e("top"))},{default:r(()=>[R]),_:1}),p(l,{onClick:n[2]||(n[2]=c=>e("right"))},{default:r(()=>[x]),_:1}),p(l,{onClick:n[3]||(n[3]=c=>e("bottom"))},{default:r(()=>[F]),_:1}),p(g,{modelValue:a.value,"onUpdate:modelValue":n[4]||(n[4]=c=>a.value=c),title:"title",direction:s.value},{default:r(()=>[S]),_:1},8,["modelValue","direction"])])}}}),q=k({components:{vdpv_0:P},setup(t){const s=h(),a=[s],e=H({vdpv_0Height:0});return f(m({toggleCode:n=>{const l="vdpv_"+n;e[l+"Height"]===0?e[l+"Height"]=(a[n].value?a[n].value.offsetHeight:0)||0:e[l+"Height"]=0}},V(e)),{vdpv_0Ref:s})}});q.$vd={matter:{},toc:[{content:"Drawer \u62BD\u5C49\u5BF9\u8BDD\u6846",anchor:"drawer-\u62BD\u5C49\u5BF9\u8BDD\u6846",level:1},{content:"\u57FA\u672C\u7528\u6CD5",anchor:"\u57FA\u672C\u7528\u6CD5",level:3},{content:"API",anchor:"api",level:2},{content:"Drawer",anchor:"drawer",level:3}]};const z=q,M={class:"vuedoc"},T=v('<h1 id="drawer-\u62BD\u5C49\u5BF9\u8BDD\u6846" data-source-line="1"><a class="markdownIt-Anchor" href="#drawer-\u62BD\u5C49\u5BF9\u8BDD\u6846">#</a> Drawer \u62BD\u5C49\u5BF9\u8BDD\u6846</h1><h3 id="\u57FA\u672C\u7528\u6CD5" data-source-line="3"><a class="markdownIt-Anchor" href="#\u57FA\u672C\u7528\u6CD5">#</a> \u57FA\u672C\u7528\u6CD5</h3><p data-source-line="5">\u7528\u6CD5\u548C\u6240\u6709\u53C2\u6570\u540C<code>Dialog</code>\u4E00\u6837</p><pre style="display:none;"></pre>',4),U={class:"vuedoc-demo"},G={class:"vuedoc-demo__inner"},J={class:"vuedoc-demo__preview"},K={ref:"vdpv_0Ref",class:"vuedoc-demo__sourceref"},L=v(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;open(&#39;left&#39;)&quot;</span>&gt;</span>\u5DE6\u8FB9<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;open(&#39;top&#39;)&quot;</span>&gt;</span>\u9879\u90E8<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;open(&#39;right&#39;)&quot;</span>&gt;</span>\u53F3\u8FB9<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;open(&#39;bottom&#39;)&quot;</span>&gt;</span>\u5E95\u90E8<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-drawer</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;visible&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;title&quot;</span> <span class="hljs-attr">:direction</span>=<span class="hljs-string">&quot;direction&quot;</span>
      &gt;</span>this content&lt;/ak-drawer
    &gt;
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

  <span class="hljs-keyword">const</span> direction = ref(<span class="hljs-string">&#39;left&#39;</span>)
  <span class="hljs-keyword">const</span> visible = ref(<span class="hljs-literal">false</span>)
  <span class="hljs-keyword">const</span> open = <span class="hljs-function">(<span class="hljs-params">type: string</span>) =&gt;</span> {
    direction.value = type
    visible.value = <span class="hljs-literal">true</span>
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>


</span></code></pre></div>`,1),O=[L],Q=v('<h2 id="api" data-source-line="33"><a class="markdownIt-Anchor" href="#api">#</a> API</h2><h3 id="drawer" data-source-line="35"><a class="markdownIt-Anchor" href="#drawer">#</a> Drawer</h3><table data-source-line="37"><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>direction</td><td>string/right</td><td>\u663E\u793A\u65B9\u5411\uFF0Cleft/right/top/bottom</td></tr><tr><td>-</td><td>-</td><td>\u5176\u4ED6\u6240\u6709\u53C2\u6570\u540C<a href="/#/dialog">dialog</a></td></tr></tbody></table>',3);function W(t,s,a,e,i,n){const l=u("vdpv_0");return w(),b("div",M,[T,o("div",U,[o("div",G,[o("div",J,[p(l)]),o("div",{style:I({height:t.vdpv_0Height+"px"}),class:"vuedoc-demo__source"},[o("div",K,O,512)],4),o("div",{class:"vuedoc-demo__footer",onClick:s[0]||(s[0]=g=>t.toggleCode(0))},B(t.vdpv_0Height>0?"hidden":"show"),1)])]),Q])}var Z=E(z,[["render",W]]);export{Z as default};
