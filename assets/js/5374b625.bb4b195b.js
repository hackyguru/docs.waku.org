"use strict";(self.webpackChunkwaku_guide=self.webpackChunkwaku_guide||[]).push([[495],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>v});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(r),m=o,v=c["".concat(s,".").concat(m)]||c[m]||d[m]||a;return r?n.createElement(v,i(i({ref:t},p),{},{components:r})):n.createElement(v,i({ref:t},p))}));function v(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1555:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>f,frontMatter:()=>s,metadata:()=>p,toc:()=>d});var n=r(87462),o=(r(67294),r(3905));const a={toc:[]},i="wrapper";function l(e){let{components:t,...r}=e;return(0,o.kt)(i,(0,n.Z)({},a,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("mermaid",{value:'%%{init: { \'gitGraph\': {\'showBranches\': true, \'showCommitLabel\': true, \'mainBranchName\': \'HISTORY\'}} }%%\ngitGraph\n\tcommit id:"2013"\n    commit id:"2015" tag:"R&D"\n    commit id:"2018" tag:"R&D" type: HIGHLIGHT\n    branch v1\n    checkout v1\n    commit id:"2020" tag:"release"\n    checkout HISTORY\n    merge v1\n    branch v2\n    checkout v2\n    commit id:"2021" tag:"release"\n    checkout HISTORY\n    merge v2\n    commit id:"\ud83d\udd25"'}))}l.isMDXComponent=!0;const s={title:"History of Waku"},u=void 0,p={unversionedId:"overview/history",id:"overview/history",title:"History of Waku",description:"Waku v1 was a fork of Whisper with some added tweaks for efficiency. Waku v2 introduces a fully revamped suite of protocols designed to address the goals set out previously.",source:"@site/docs/overview/history.md",sourceDirName:"overview",slug:"/overview/history",permalink:"/overview/history",draft:!1,editUrl:"https://github.com/waku-org/docs.waku.org/tree/develop/docs/overview/history.md",tags:[],version:"current",lastUpdatedAt:1690918744,formattedLastUpdatedAt:"1 Aug 2023",frontMatter:{title:"History of Waku"},sidebar:"main",previous:{title:"Introduction to Waku",permalink:"/"},next:{title:"Why Waku?",permalink:"/overview/why-waku"}},c={},d=[{value:"2013",id:"2013",level:3},{value:"2015-2018",id:"2015-2018",level:3},{value:"2018",id:"2018",level:3},{value:"2020",id:"2020",level:3},{value:"2021",id:"2021",level:3},{value:"Present Day",id:"present-day",level:3}],m={toc:d},v="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(v,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Waku v1")," was a fork of Whisper with some added tweaks for efficiency. ",(0,o.kt)("inlineCode",{parentName:"p"},"Waku v2")," introduces a fully revamped suite of protocols designed to address the goals set out ",(0,o.kt)("a",{parentName:"p",href:"/#motivation-and-goals"},"previously"),"."),(0,o.kt)(l,{mdxType:"History"}),(0,o.kt)("h3",{id:"2013"},"2013"),(0,o.kt)("p",null,"The Ethereum White Paper was published, unveiling the holy trinity of web3, comprising:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Ethereum for consensus."),(0,o.kt)("li",{parentName:"ul"},"Swarm for decentralised storage."),(0,o.kt)("li",{parentName:"ul"},"Whisper for peer-to-peer messaging.")),(0,o.kt)("h3",{id:"2015-2018"},"2015-2018"),(0,o.kt)("p",null,"The development of the Whisper protocol lagged behind the advancements made by the Ethereum EVM and Swarm, primarily because there was no dedicated team working on building the protocol."),(0,o.kt)("h3",{id:"2018"},"2018"),(0,o.kt)("p",null,"Owing to the lack of progress made on Whisper and growing concerns around scalability, ",(0,o.kt)("a",{parentName:"p",href:"https://vac.dev/"},"Vac")," was established to focus on researching and developing more scalable peer-to-peer messaging solutions."),(0,o.kt)("h3",{id:"2020"},"2020"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Waku v1")," replaces Whisper as the messaging protocol in Status, resulting in the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Enhanced performance."),(0,o.kt)("li",{parentName:"ul"},"Better scalability."),(0,o.kt)("li",{parentName:"ul"},"Capability to work in resource-limited environments."),(0,o.kt)("li",{parentName:"ul"},"And many more.")),(0,o.kt)("h3",{id:"2021"},"2021"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Waku v2")," releases with a fully revamped suite of protocols that not only supersedes but also surpasses the performance of ",(0,o.kt)("inlineCode",{parentName:"p"},"Waku v1"),"."),(0,o.kt)("h3",{id:"present-day"},"Present Day"),(0,o.kt)("p",null,"Waku has continued to evolve and enhance itself, enabling privacy-focused and uncompromised web3 communication at scale."))}f.isMDXComponent=!0}}]);