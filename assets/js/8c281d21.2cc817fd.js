"use strict";(self.webpackChunkwaku_guide=self.webpackChunkwaku_guide||[]).push([[9781],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),s=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},v=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(r),v=n,m=u["".concat(l,".").concat(v)]||u[v]||d[v]||i;return r?o.createElement(m,a(a({ref:t},p),{},{components:r})):o.createElement(m,a({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=v;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:n,a[1]=c;for(var s=2;s<i;s++)a[s]=r[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}v.displayName="MDXCreateElement"},48700:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var o=r(87462),n=(r(67294),r(3905));const i={toc:[]},a="wrapper";function c(e){let{components:t,...r}=e;return(0,n.kt)(a,(0,o.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("mermaid",{value:"sequenceDiagram\n    Alice->>DNS Server: (1) Execute DNS Discovery\n    DNS Server--\x3e>Alice: (2) Bob's multiaddr (websocket)\n    Alice--\x3e>Bob: (3) Dial\n    Alice->>Bob: (4) Peer Exchange Query\n    Bob--\x3e>Alice: (5) Carol's ENR, David's ENR\n    Alice->>Alice: (6) Decode ENRs\n    Alice->>Carol: (7) Dial\n    Alice->>David: (7) Dial\n    Alice--\x3e>Bob: (8) Disconnect"}),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"DNS Discovery protocol is executed."),(0,n.kt)("li",{parentName:"ol"},"Alice retrieves Bob's websocket multiaddr from DNS Server."),(0,n.kt)("li",{parentName:"ol"},"Alice dials Bob using libp2p protocols."),(0,n.kt)("li",{parentName:"ol"},"Alice executes a Peer Exchange query to Bob."),(0,n.kt)("li",{parentName:"ol"},"Bob returns Carol's and David's ENR to Alice."),(0,n.kt)("li",{parentName:"ol"},"Alice decodes ENRs and extracts Carol's and David's websocket multiaddrs."),(0,n.kt)("li",{parentName:"ol"},"Alice dials Carol and David."),(0,n.kt)("li",{parentName:"ol"},"Alice can now drop the connection with Bob (bootstrap node); Alice has 2 connections to the Waku Network.")))}c.isMDXComponent=!0;const l={title:"Peer Exchange"},s=void 0,p={unversionedId:"overview/concepts/peer-exchange",id:"overview/concepts/peer-exchange",title:"Peer Exchange",description:"The primary objective of this protocol is to facilitate peer connectivity for resource-limited devices without relying on Discv5. The peer exchange protocol enables light nodes to request peers from other nodes within the network. Have a look at the Peer Exchange specification to learn more.",source:"@site/docs/overview/concepts/peer-exchange.md",sourceDirName:"overview/concepts",slug:"/overview/concepts/peer-exchange",permalink:"/overview/concepts/peer-exchange",draft:!1,editUrl:"https://github.com/waku-org/docs.waku.org/tree/develop/docs/overview/concepts/peer-exchange.md",tags:[],version:"current",lastUpdatedAt:1690918744,formattedLastUpdatedAt:"1 Aug 2023",frontMatter:{title:"Peer Exchange"},sidebar:"main",previous:{title:"Discv5",permalink:"/overview/concepts/discv5"},next:{title:"Glossary",permalink:"/overview/reference/glossary"}},u={},d=[{value:"Pros",id:"pros",level:4},{value:"Cons",id:"cons",level:4},{value:"Overview",id:"overview",level:2}],v={toc:d},m="wrapper";function f(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,o.Z)({},v,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The primary objective of this protocol is to facilitate peer connectivity for resource-limited devices without relying on ",(0,n.kt)("inlineCode",{parentName:"p"},"Discv5"),". The peer exchange protocol enables light nodes to request peers from other nodes within the network. Have a look at the ",(0,n.kt)("a",{parentName:"p",href:"https://rfc.vac.dev/spec/34/"},"Peer Exchange")," specification to learn more."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("inlineCode",{parentName:"p"},"Peer Exchange")," enables requesting random peers from other network nodes without revealing information about their connectivity or neighbourhood.")),(0,n.kt)("h4",{id:"pros"},"Pros"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Low resource requirements."),(0,n.kt)("li",{parentName:"ul"},"Decentralised with random sampling of nodes from a global view using ",(0,n.kt)("inlineCode",{parentName:"li"},"Discv5"),".")),(0,n.kt)("h4",{id:"cons"},"Cons"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Decreased anonymity."),(0,n.kt)("li",{parentName:"ul"},"Imposes additional load on responder nodes.")),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)(c,{mdxType:"PeerExchange"}))}f.isMDXComponent=!0}}]);