"use strict";(self.webpackChunkwaku_guide=self.webpackChunkwaku_guide||[]).push([[292],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),h=a,m=u["".concat(c,".").concat(h)]||u[h]||d[h]||o;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},82844:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const o={title:"Peer Discovery",hide_table_of_contents:!0},i=void 0,s={unversionedId:"learn/concepts/peer-discovery",id:"learn/concepts/peer-discovery",title:"Peer Discovery",description:"When initialising a Waku node, it must connect with other peers to enable message sending, receiving, and retrieval. To achieve this, a discovery mechanism is employed to locate other peers in the network. This process is known as bootstrapping.",source:"@site/docs/learn/concepts/peer-discovery.md",sourceDirName:"learn/concepts",slug:"/learn/concepts/peer-discovery",permalink:"/learn/concepts/peer-discovery",draft:!1,editUrl:"https://github.com/waku-org/docs.waku.org/tree/develop/docs/learn/concepts/peer-discovery.md",tags:[],version:"current",lastUpdatedAt:1700737292,formattedLastUpdatedAt:"23 Nov 2023",frontMatter:{title:"Peer Discovery",hide_table_of_contents:!0},sidebar:"learn",previous:{title:"Transports",permalink:"/learn/concepts/transports"},next:{title:"Static Peers",permalink:"/learn/concepts/static-peers"}},c={},l=[],p={toc:l},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"When initialising a Waku node, it must connect with other peers to enable message sending, receiving, and retrieval. To achieve this, a discovery mechanism is employed to locate other peers in the network. This process is known as bootstrapping."),(0,a.kt)("p",null,"Once a connection is established, the node must actively seek out additional peers to have:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Sufficient peers in the ",(0,a.kt)("a",{parentName:"li",href:"/learn/concepts/protocols#relay"},"Relay")," mesh: The goal is to have at least 6 peers in the mesh. This ensures a robust network where messages can be efficiently relayed."),(0,a.kt)("li",{parentName:"ul"},"Reserve peers for backup: It is essential to have a surplus of peers available as reserves. These reserves are backups when the current peers become overloaded or experience unexpected disconnections."),(0,a.kt)("li",{parentName:"ul"},"Peers with specific capabilities: The node seeks out peers with specific capabilities, such as ",(0,a.kt)("a",{parentName:"li",href:"/learn/concepts/protocols#store"},"Store"),", ",(0,a.kt)("a",{parentName:"li",href:"/learn/concepts/protocols#light-push"},"Light Push"),", or ",(0,a.kt)("a",{parentName:"li",href:"/learn/concepts/protocols#filter"},"Filter"),". This allows for targeted interactions and enhanced functionality based on the desired capabilities.")),(0,a.kt)("p",null,"Waku supports multiple peer discovery mechanisms, such as:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/learn/concepts/static-peers"},"Configuring Static Peers")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/learn/concepts/dns-discovery"},"Peer Discovery via DNS")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/learn/concepts/discv5"},"Discv5 Ambient Peer Discovery")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/learn/concepts/peer-exchange"},"Peer Exchange"))))}d.isMDXComponent=!0}}]);