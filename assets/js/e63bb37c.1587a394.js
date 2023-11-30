"use strict";(self.webpackChunkwaku_guide=self.webpackChunkwaku_guide||[]).push([[321],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(r),m=o,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[d]="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},77362:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>y,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var n=r(87462),o=(r(67294),r(3905));const a={toc:[]},i="wrapper";function c(e){let{components:t,...r}=e;return(0,o.kt)(i,(0,n.Z)({},a,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("mermaid",{value:"sequenceDiagram\nAlice->>Bob: Connect to Bob (static peer details)\nAlice->>Carol: Connect to Carol (static peer details)"}),(0,o.kt)("p",null,"Alice establishes connections with Bob and Carol using their node details, which are predefined (hard-coded) into Alice's node."))}c.isMDXComponent=!0;const s={title:"Static Peers",hide_table_of_contents:!0},l=void 0,p={unversionedId:"learn/concepts/static-peers",id:"learn/concepts/static-peers",title:"Static Peers",description:"Waku applications have the flexibility to embed bootstrap node addresses directly into their codebase. Developers can either use static peers operated by Status or run a node.",source:"@site/docs/learn/concepts/static-peers.md",sourceDirName:"learn/concepts",slug:"/learn/concepts/static-peers",permalink:"/learn/concepts/static-peers",draft:!1,editUrl:"https://github.com/waku-org/docs.waku.org/tree/develop/docs/learn/concepts/static-peers.md",tags:[],version:"current",lastUpdatedAt:1700737292,formattedLastUpdatedAt:"23 Nov 2023",frontMatter:{title:"Static Peers",hide_table_of_contents:!0},sidebar:"learn",previous:{title:"Peer Discovery",permalink:"/learn/concepts/peer-discovery"},next:{title:"DNS Discovery",permalink:"/learn/concepts/dns-discovery"}},d={},u=[{value:"Pros",id:"pros",level:4},{value:"Cons",id:"cons",level:4},{value:"Overview",id:"overview",level:2}],m={toc:u},f="wrapper";function y(e){let{components:t,...r}=e;return(0,o.kt)(f,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Waku applications have the flexibility to embed bootstrap node addresses directly into their codebase. Developers can either use static peers operated by Status or ",(0,o.kt)("a",{parentName:"p",href:"/#run-a-waku-node"},"run a node"),"."),(0,o.kt)("h4",{id:"pros"},"Pros"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Low latency."),(0,o.kt)("li",{parentName:"ul"},"Low resource requirements.")),(0,o.kt)("h4",{id:"cons"},"Cons"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Vulnerable to censorship: Node IPs can be blocked or restricted."),(0,o.kt)("li",{parentName:"ul"},"Limited scalability: The number of nodes is fixed and cannot easily be expanded."),(0,o.kt)("li",{parentName:"ul"},"Maintenance challenges: Updating the node list requires modifying the code, which can be cumbersome and involves releasing and deploying.")),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)(c,{mdxType:"StaticPeers"}))}y.isMDXComponent=!0}}]);