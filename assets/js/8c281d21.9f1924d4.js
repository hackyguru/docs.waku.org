"use strict";(self.webpackChunkwaku_guide=self.webpackChunkwaku_guide||[]).push([[781],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(r),v=o,m=d["".concat(l,".").concat(v)]||d[v]||u[v]||i;return r?n.createElement(m,a(a({ref:t},p),{},{components:r})):n.createElement(m,a({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=v;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[d]="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}v.displayName="MDXCreateElement"},48700:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var n=r(87462),o=(r(67294),r(3905));const i={toc:[]},a="wrapper";function c(e){let{components:t,...r}=e;return(0,o.kt)(a,(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("mermaid",{value:"sequenceDiagram\n    Alice->>DNS Server: (1) Execute DNS Discovery\n    DNS Server--\x3e>Alice: (2) Bob's multiaddr (websocket)\n    Alice--\x3e>Bob: (3) Dial\n    Alice->>Bob: (4) Peer Exchange Query\n    Bob--\x3e>Alice: (5) Carol's ENR, David's ENR\n    Alice->>Alice: (6) Decode ENRs\n    Alice->>Carol: (7) Dial\n    Alice->>David: (7) Dial\n    Alice--\x3e>Bob: (8) Disconnect"}),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"DNS Discovery protocol is executed."),(0,o.kt)("li",{parentName:"ol"},"Alice's retrieves Bob's websocket multiaddr from DNS Server."),(0,o.kt)("li",{parentName:"ol"},"Alice dials Bob using libp2p protocols."),(0,o.kt)("li",{parentName:"ol"},"Alice executes a Peer Exchange Query to Bob."),(0,o.kt)("li",{parentName:"ol"},"Bob returns Carol's and David's ENR to Alice."),(0,o.kt)("li",{parentName:"ol"},"Alice Decodes ENRs and extracts Carol's and David's websocket multiaddrs."),(0,o.kt)("li",{parentName:"ol"},"Alice dials Carol and David."),(0,o.kt)("li",{parentName:"ol"},"Alice can now drop the connection with Bob (bootstrap node), Alice has 2 connections to the Waku Network.")))}c.isMDXComponent=!0;const l={title:"Peer Exchange"},s=void 0,p={unversionedId:"overview/concepts/peer-exchange",id:"overview/concepts/peer-exchange",title:"Peer Exchange",description:"The primary objective of this protocol is to facilitate peer connectivity for resource-limited devices. The peer exchange protocol enables lightweight nodes to request peers from other nodes within the network. Light nodes can bootstrap and expand their mesh independently without relying on Discv5. Please refer to the Peer Exchange specification to learn more.",source:"@site/docs/overview/concepts/peer-exchange.md",sourceDirName:"overview/concepts",slug:"/overview/concepts/peer-exchange",permalink:"/overview/concepts/peer-exchange",draft:!1,editUrl:"https://github.com/waku-org/docs.waku.org/tree/develop/docs/overview/concepts/peer-exchange.md",tags:[],version:"current",lastUpdatedAt:1686702415,formattedLastUpdatedAt:"Jun 14, 2023",frontMatter:{title:"Peer Exchange"},sidebar:"main",previous:{title:"Discv5",permalink:"/overview/concepts/discv5"},next:{title:"Transports",permalink:"/overview/concepts/transports"}},d={},u=[{value:"Pros",id:"pros",level:2},{value:"Cons",id:"cons",level:2},{value:"Overview",id:"overview",level:2}],v={toc:u},m="wrapper";function h(e){let{components:t,...r}=e;return(0,o.kt)(m,(0,n.Z)({},v,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The primary objective of this protocol is to facilitate peer connectivity for resource-limited devices. The peer exchange protocol enables lightweight nodes to request peers from other nodes within the network. Light nodes can bootstrap and expand their mesh independently without relying on ",(0,o.kt)("inlineCode",{parentName:"p"},"Discv5"),". Please refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://rfc.vac.dev/spec/34/"},"Peer Exchange")," specification to learn more."),(0,o.kt)("h2",{id:"pros"},"Pros"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Low resource requirements."),(0,o.kt)("li",{parentName:"ul"},"Decentralized with random sampling of nodes from a global view using ",(0,o.kt)("inlineCode",{parentName:"li"},"Discv5"),".")),(0,o.kt)("h2",{id:"cons"},"Cons"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Decreased anonymity."),(0,o.kt)("li",{parentName:"ul"},"Imposes additional load on responder nodes.")),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)(c,{mdxType:"PeerExchange"}))}h.isMDXComponent=!0}}]);