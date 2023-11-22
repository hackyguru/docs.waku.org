"use strict";(self.webpackChunkwaku_guide=self.webpackChunkwaku_guide||[]).push([[161],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,k=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(k,s(s({ref:t},l),{},{components:n})):r.createElement(k,s({ref:t},l))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(67294),a=n(86010);const o={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:n,className:s}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.default)(o.tabItem,s),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(87462),a=n(67294),o=n(86010),s=n(12466),i=n(70989),p=n(72389);const c={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function l(e){let{className:t,block:n,selectedValue:i,selectValue:p,tabValues:l}=e;const d=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.o5)(),m=e=>{const t=e.currentTarget,n=d.indexOf(t),r=l[n].value;r!==i&&(u(t),p(r))},k=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;t=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;t=d[n]??d[d.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.default)("tabs",{"tabs--block":n},t)},l.map((e=>{let{value:t,label:n,attributes:s}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>d.push(e),onKeyDown:k,onClick:m},s,{className:(0,o.default)("tabs__item",c.tabItem,s?.className,{"tabs__item--active":i===t})}),n??t)})))}function d(e){let{lazy:t,children:n,selectedValue:r}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function u(e){const t=(0,i.Y)(e);return a.createElement("div",{className:(0,o.default)("tabs-container",c.tabList)},a.createElement(l,(0,r.Z)({},e,t)),a.createElement(d,(0,r.Z)({},e,t)))}function m(e){const t=(0,p.default)();return a.createElement(u,(0,r.Z)({key:String(t)},e))}},46771:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>k,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var r=n(87462),a=(n(67294),n(3905)),o=n(65488),s=n(85162);const i={title:"Bootstrap Nodes and Discover Peers"},p=void 0,c={unversionedId:"guides/js-waku/configure-discovery",id:"guides/js-waku/configure-discovery",title:"Bootstrap Nodes and Discover Peers",description:"This guide provides detailed steps to bootstrap your your node using Static Peers and discover peers in the Waku Network using DNS Discovery.",source:"@site/docs/guides/js-waku/configure-discovery.md",sourceDirName:"guides/js-waku",slug:"/guides/js-waku/configure-discovery",permalink:"/guides/js-waku/configure-discovery",draft:!1,editUrl:"https://github.com/waku-org/docs.waku.org/tree/develop/docs/guides/js-waku/configure-discovery.md",tags:[],version:"current",lastUpdatedAt:1700692134,formattedLastUpdatedAt:"22 Nov 2023",frontMatter:{title:"Bootstrap Nodes and Discover Peers"},sidebar:"guides",previous:{title:"Scaffold DApps Using @waku/create-app",permalink:"/guides/js-waku/use-waku-create-app"},next:{title:"Run @waku/sdk in a NodeJS Application",permalink:"/guides/js-waku/run-waku-nodejs"}},l={},d=[{value:"Default Bootstrap Method",id:"default-bootstrap-method",level:2},{value:"Configure Static Peers",id:"configure-static-peers",level:2},{value:"Configure DNS Discovery",id:"configure-dns-discovery",level:2},{value:"Configure DNS Discovery and Static Peers",id:"configure-dns-discovery-and-static-peers",level:2}],u={toc:d},m="wrapper";function k(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This guide provides detailed steps to bootstrap your your node using ",(0,a.kt)("a",{parentName:"p",href:"/overview/concepts/static-peers"},"Static Peers")," and discover peers in the Waku Network using ",(0,a.kt)("a",{parentName:"p",href:"/overview/concepts/dns-discovery"},"DNS Discovery"),"."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Until ",(0,a.kt)("a",{parentName:"p",href:"/overview/reference/research-in-progress#prevention-of-denial-of-service-dos-and-node-incentivisation"},"node incentivisation")," is in place, you should ",(0,a.kt)("a",{parentName:"p",href:"/guides/nodes-and-sdks#run-a-waku-node"},"operate extra nodes")," alongside the ones provided by the Waku Network. When running a node, we recommend using the ",(0,a.kt)("a",{parentName:"p",href:"#configure-dns-discovery-and-static-peers"},"DNS Discovery and Static Peers")," configuration to connect to both the Waku Network and your node.")),(0,a.kt)("h2",{id:"default-bootstrap-method"},"Default Bootstrap Method"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"@waku/sdk")," package provides a built-in bootstrapping method that uses ",(0,a.kt)("a",{parentName:"p",href:"/overview/concepts/dns-discovery"},"DNS Discovery")," to locate peers from the ",(0,a.kt)("inlineCode",{parentName:"p"},"waku v2.prod")," ",(0,a.kt)("inlineCode",{parentName:"p"},"ENR")," tree."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import { createLightNode } from "@waku/sdk";\n\n// Bootstrap node using the default bootstrap method\nconst node = await createLightNode({ defaultBootstrap: true });\n')),(0,a.kt)("h2",{id:"configure-static-peers"},"Configure Static Peers"),(0,a.kt)("p",null,"To bootstrap a node using ",(0,a.kt)("a",{parentName:"p",href:"/overview/concepts/static-peers"},"static peers"),", first install the ",(0,a.kt)("inlineCode",{parentName:"p"},"@libp2p/bootstrap")," package:"),(0,a.kt)(o.Z,{groupId:"package-manager",mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"npm",label:"NPM",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @libp2p/bootstrap\n"))),(0,a.kt)(s.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @libp2p/bootstrap\n")))),(0,a.kt)("p",null,"Then, use the ",(0,a.kt)("inlineCode",{parentName:"p"},"bootstrap()")," function to provide a list of ",(0,a.kt)("inlineCode",{parentName:"p"},"multiaddr")," to bootstrap the node:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import { createLightNode } from "@waku/sdk";\nimport { bootstrap } from "@libp2p/bootstrap";\n\n// Bootstrap node using static peers\nconst node = await createLightNode({\n    libp2p: {\n        peerDiscovery: [\n            bootstrap({ list: ["[PEER MULTIADDR]"] }),\n        ],\n    },\n});\n')),(0,a.kt)("p",null,"For example, consider a node that connects to two static peers on the same local host (IP: ",(0,a.kt)("inlineCode",{parentName:"p"},"0.0.0.0"),") using TCP ports ",(0,a.kt)("inlineCode",{parentName:"p"},"60002")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"60003")," with WebSocket enabled:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'// Define the list of static peers to bootstrap\nconst peers = [\n    "/ip4/0.0.0.0/tcp/60002/ws/p2p/16Uiu2HAkzjwwgEAXfeGNMKFPSpc6vGBRqCdTLG5q3Gmk2v4pQw7H",\n    "/ip4/0.0.0.0/tcp/60003/ws/p2p/16Uiu2HAmFBA7LGtwY5WVVikdmXVo3cKLqkmvVtuDu63fe8safeQJ",\n];\n\n// Bootstrap node using the static peers\nconst node = await createLightNode({\n    libp2p: {\n        peerDiscovery: [\n            bootstrap({ list: peers }),\n        ],\n    },\n});\n')),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"For local development using a ",(0,a.kt)("inlineCode",{parentName:"p"},"nwaku")," node, use a ",(0,a.kt)("inlineCode",{parentName:"p"},"ws")," address instead of ",(0,a.kt)("inlineCode",{parentName:"p"},"wss"),". Remember that this setup is functional only when your web server is running locally.")),(0,a.kt)("h2",{id:"configure-dns-discovery"},"Configure DNS Discovery"),(0,a.kt)("p",null,"To bootstrap a node using ",(0,a.kt)("a",{parentName:"p",href:"/overview/concepts/dns-discovery"},"DNS Discovery"),", first install the ",(0,a.kt)("inlineCode",{parentName:"p"},"@waku/dns-discovery")," package:"),(0,a.kt)(o.Z,{groupId:"package-manager",mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"npm",label:"NPM",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @waku/dns-discovery\n"))),(0,a.kt)(s.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @waku/dns-discovery\n")))),(0,a.kt)("p",null,"Then, use the ",(0,a.kt)("inlineCode",{parentName:"p"},"wakuDnsDiscovery()")," function to provide a list of URLs for DNS node list in the format ",(0,a.kt)("inlineCode",{parentName:"p"},"enrtree://<key>@<fqdn>"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import { createLightNode } from "@waku/sdk";\nimport { wakuDnsDiscovery } from "@waku/dns-discovery";\n\n// Define DNS node list\nconst enrTree = "enrtree://[PUBLIC KEY]@[DOMAIN NAME]";\n\n// Define node requirements\nconst NODE_REQUIREMENTS = {\n    store: 3,\n    lightPush: 3,\n    filter: 3,\n};\n\n// Bootstrap node using DNS Discovery\nconst node = await createLightNode({\n    libp2p: {\n        peerDiscovery: [\n            wakuDnsDiscovery(\n                [enrTree],\n                NODE_REQUIREMENTS,\n            ),\n        ],\n    },\n});\n')),(0,a.kt)("p",null,"For example, consider a node that uses the ",(0,a.kt)("inlineCode",{parentName:"p"},"waku v2.prod")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"waku v2.test")," ",(0,a.kt)("inlineCode",{parentName:"p"},"ENR")," trees for ",(0,a.kt)("inlineCode",{parentName:"p"},"DNS Discovery"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import { enrTree } from "@waku/dns-discovery";\n\n// Bootstrap node using DNS Discovery\nconst node = await createLightNode({\n    libp2p: {\n        peerDiscovery: [\n            wakuDnsDiscovery(\n                [enrTree["PROD"], enrTree["TEST"]],\n                NODE_REQUIREMENTS,\n            ),\n        ],\n    },\n});\n')),(0,a.kt)("h2",{id:"configure-dns-discovery-and-static-peers"},"Configure DNS Discovery and Static Peers"),(0,a.kt)("p",null,"You can also bootstrap your node using ",(0,a.kt)("a",{parentName:"p",href:"/overview/concepts/dns-discovery"},"DNS Discovery")," and ",(0,a.kt)("a",{parentName:"p",href:"/overview/concepts/static-peers"},"Static Peers")," simultaneously:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import { createLightNode } from "@waku/sdk";\nimport { bootstrap } from "@libp2p/bootstrap";\nimport { enrTree, wakuDnsDiscovery } from "@waku/dns-discovery";\n\n// Define the list of static peers to bootstrap\nconst peers = [\n    "/ip4/0.0.0.0/tcp/60002/ws/p2p/16Uiu2HAkzjwwgEAXfeGNMKFPSpc6vGBRqCdTLG5q3Gmk2v4pQw7H",\n    "/ip4/0.0.0.0/tcp/60003/ws/p2p/16Uiu2HAmFBA7LGtwY5WVVikdmXVo3cKLqkmvVtuDu63fe8safeQJ",\n];\n\n// Define node requirements\nconst NODE_REQUIREMENTS = {\n    store: 3,\n    lightPush: 3,\n    filter: 3,\n};\n\n// Bootstrap node using DNS Discovery\nconst node = await createLightNode({\n    libp2p: {\n        peerDiscovery: [\n            bootstrap({ list: peers }),\n            wakuDnsDiscovery(\n                [enrTree["PROD"]],\n                NODE_REQUIREMENTS,\n            ),\n        ],\n    },\n});\n')),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"If you do not set up a bootstrap node or discovery mechanism, your node will not connect to any remote peer.")))}k.isMDXComponent=!0}}]);