"use strict";(self.webpackChunkwaku_guide=self.webpackChunkwaku_guide||[]).push([[855],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),u=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(d.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),k=r,m=p["".concat(d,".").concat(k)]||p[k]||c[k]||o;return n?a.createElement(m,i(i({ref:t},s),{},{components:n})):a.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=k;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(86010);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.default)(o.tabItem,i),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>k});var a=n(87462),r=n(67294),o=n(86010),i=n(12466),l=n(70989),d=n(72389);const u={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function s(e){let{className:t,block:n,selectedValue:l,selectValue:d,tabValues:s}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),k=e=>{const t=e.currentTarget,n=p.indexOf(t),a=s[n].value;a!==l&&(c(t),d(a))},m=e=>{let t=null;switch(e.key){case"Enter":k(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.default)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:k},i,{className:(0,o.default)("tabs__item",u.tabItem,i?.className,{"tabs__item--active":l===t})}),n??t)})))}function p(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function c(e){const t=(0,l.Y)(e);return r.createElement("div",{className:(0,o.default)("tabs-container",u.tabList)},r.createElement(s,(0,a.Z)({},e,t)),r.createElement(p,(0,a.Z)({},e,t)))}function k(e){const t=(0,d.default)();return r.createElement(c,(0,a.Z)({key:String(t)},e))}},89472:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var a=n(87462),r=(n(67294),n(3905)),o=n(65488),i=n(85162);const l={title:"Run a Nwaku Node",hide_table_of_contents:!0},d=void 0,u={unversionedId:"guides/nwaku/run-node",id:"guides/nwaku/run-node",title:"Run a Nwaku Node",description:"Nwaku is a lightweight and robust Nim client for running a Waku node, equipped with tools to monitor and maintain a running node. Nwaku is highly configurable, enabling operators to select the protocols they want to support based on their needs, motivations, and available resources.",source:"@site/docs/guides/nwaku/run-node.md",sourceDirName:"guides/nwaku",slug:"/guides/nwaku/run-node",permalink:"/guides/nwaku/run-node",draft:!1,editUrl:"https://github.com/waku-org/docs.waku.org/tree/develop/docs/guides/nwaku/run-node.md",tags:[],version:"current",lastUpdatedAt:1700737292,formattedLastUpdatedAt:"23 Nov 2023",frontMatter:{title:"Run a Nwaku Node",hide_table_of_contents:!0},sidebar:"guides",previous:{title:"Getting Started",permalink:"/"},next:{title:"Build Nwaku from Source",permalink:"/guides/nwaku/build-source"}},s={},p=[{value:"Get the node binary",id:"get-the-node-binary",level:2},{value:"Download the binary",id:"download-the-binary",level:4},{value:"Build the binary",id:"build-the-binary",level:4},{value:"Run nwaku in Docker",id:"run-nwaku-in-docker",level:4},{value:"Run the node",id:"run-the-node",level:2},{value:"Bootstrap the node",id:"bootstrap-the-node",level:2},{value:"Interact with the node",id:"interact-with-the-node",level:2},{value:"Find the node addresses",id:"find-the-node-addresses",level:2},{value:"Listening addresses",id:"listening-addresses",level:3},{value:"Discoverable ENR addresses",id:"discoverable-enr-addresses",level:3},{value:"ENR for DNS discovery",id:"enr-for-dns-discovery",level:4},{value:"ENR for Discv5",id:"enr-for-discv5",level:4}],c={toc:p},k="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(k,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Nwaku is a lightweight and robust Nim client for running a Waku node, equipped with tools to monitor and maintain a running node. Nwaku is highly configurable, enabling operators to select the ",(0,r.kt)("a",{parentName:"p",href:"/learn/concepts/protocols"},"protocols")," they want to support based on their needs, motivations, and available resources."),(0,r.kt)("p",null,"This guide provides detailed steps to download, build, configure, and connect a ",(0,r.kt)("inlineCode",{parentName:"p"},"nwaku")," node to the Waku Network. It also includes interacting with the node and finding its addresses."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"We recommend running a ",(0,r.kt)("inlineCode",{parentName:"p"},"nwaku")," node with at least 2GB of RAM, especially if you have ",(0,r.kt)("inlineCode",{parentName:"p"},"WSS")," enabled. If running just a ",(0,r.kt)("inlineCode",{parentName:"p"},"Relay")," node, 0.5GB of RAM is sufficient.")),(0,r.kt)("h2",{id:"get-the-node-binary"},"Get the node binary"),(0,r.kt)("p",null,"To run a node, you must have the ",(0,r.kt)("inlineCode",{parentName:"p"},"nwaku")," binary. Nwaku provides multiple options for acquiring the node binary:"),(0,r.kt)("h4",{id:"download-the-binary"},"Download the binary"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Documentation"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Precompiled Binary"),(0,r.kt)("td",{parentName:"tr",align:null},"Download a precompiled binary of the ",(0,r.kt)("inlineCode",{parentName:"td"},"nwaku")," node"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/waku-org/nwaku/tags"},"Download Nwaku Binary"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Nightly Release"),(0,r.kt)("td",{parentName:"tr",align:null},"Try the latest ",(0,r.kt)("inlineCode",{parentName:"td"},"nwaku")," updates without compiling the binaries"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/waku-org/nwaku/releases/tag/nightly"},"Download Nightly Release"))))),(0,r.kt)("h4",{id:"build-the-binary"},"Build the binary"),(0,r.kt)("p",null,"You can build the node binary directly from the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/waku-org/nwaku"},"nwaku source code"),". Have a look at the ",(0,r.kt)("a",{parentName:"p",href:"/guides/nwaku/build-source"},"Build Nwaku from Source")," guide to learn more."),(0,r.kt)("h4",{id:"run-nwaku-in-docker"},"Run nwaku in Docker"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Documentation"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Docker Container"),(0,r.kt)("td",{parentName:"tr",align:null},"Run a ",(0,r.kt)("inlineCode",{parentName:"td"},"nwaku")," node in a Docker Container"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/guides/nwaku/run-docker"},"Run Nwaku in a Docker Container"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Docker Compose"),(0,r.kt)("td",{parentName:"tr",align:null},"Run a ",(0,r.kt)("inlineCode",{parentName:"td"},"nwaku")," node with Docker Compose"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/guides/nwaku/run-docker-compose"},"Run Nwaku with Docker Compose"))))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can run the ",(0,r.kt)("inlineCode",{parentName:"p"},"nwaku")," binaries and Docker images on cloud service providers like ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/"},"Google Cloud"),", ",(0,r.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/"},"Microsoft Azure"),", ",(0,r.kt)("a",{parentName:"p",href:"https://aws.amazon.com/"},"Amazon Web Services"),", and ",(0,r.kt)("a",{parentName:"p",href:"https://www.digitalocean.com/"},"DigitalOcean"),".")),(0,r.kt)("h2",{id:"run-the-node"},"Run the node"),(0,r.kt)("p",null,"Once you have gotten the ",(0,r.kt)("inlineCode",{parentName:"p"},"nwaku")," binary, run it using the ",(0,r.kt)("a",{parentName:"p",href:"/guides/nwaku/config-methods#default-configuration-values"},"default configuration"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# Run with default configuration\n./build/wakunode2\n\n# See available command line options\n./build/wakunode2 --help\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"To learn how to customise the configuration of a ",(0,r.kt)("inlineCode",{parentName:"p"},"nwaku")," node, have a look at the ",(0,r.kt)("a",{parentName:"p",href:"/guides/nwaku/config-methods"},"Node Configuration Methods")," and ",(0,r.kt)("a",{parentName:"p",href:"/guides/nwaku/config-options"},"Node Configuration Options")," guides.")),(0,r.kt)("h2",{id:"bootstrap-the-node"},"Bootstrap the node"),(0,r.kt)("p",null,"To join the Waku Network, nodes must ",(0,r.kt)("a",{parentName:"p",href:"/learn/glossary#bootstrapping"},"bootstrap")," for an entry point before discovering more peers. Nwaku provides multiple ",(0,r.kt)("a",{parentName:"p",href:"/learn/concepts/peer-discovery"},"peer discovery")," mechanisms:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Documentation"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Static Peers"),(0,r.kt)("td",{parentName:"tr",align:null},"Configure the bootstrap nodes that ",(0,r.kt)("inlineCode",{parentName:"td"},"nwaku")," should establish connections upon startup"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/guides/nwaku/configure-discovery#configure-static-peers"},"Configure Static Peers"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DNS Discovery"),(0,r.kt)("td",{parentName:"tr",align:null},"Enable ",(0,r.kt)("inlineCode",{parentName:"td"},"nwaku")," to bootstrap nodes using the ",(0,r.kt)("a",{parentName:"td",href:"/learn/concepts/dns-discovery"},"DNS Discovery")," mechanism"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/guides/nwaku/configure-discovery#configure-dns-discovery"},"Configure DNS Discovery"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Discv5"),(0,r.kt)("td",{parentName:"tr",align:null},"Enable ",(0,r.kt)("inlineCode",{parentName:"td"},"nwaku")," to discover peers using the ",(0,r.kt)("a",{parentName:"td",href:"/learn/concepts/discv5"},"Discv5")," mechanism"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/guides/nwaku/configure-discovery#configure-discv5"},"Configure Discv5"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Peer Exchange"),(0,r.kt)("td",{parentName:"tr",align:null},"Enable ",(0,r.kt)("a",{parentName:"td",href:"/learn/concepts/peer-exchange"},"Peer Exchange")," protocol for light nodes to request peers from your ",(0,r.kt)("inlineCode",{parentName:"td"},"nwaku")," node"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/guides/nwaku/configure-discovery#configure-peer-exchange"},"Configure Peer Exchange"))))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"You can configure a ",(0,r.kt)("inlineCode",{parentName:"p"},"nwaku")," node to use multiple peer discovery mechanisms simultaneously.")),(0,r.kt)("h2",{id:"interact-with-the-node"},"Interact with the node"),(0,r.kt)("p",null,"You can interact with a running  ",(0,r.kt)("inlineCode",{parentName:"p"},"nwaku")," node through the ",(0,r.kt)("a",{parentName:"p",href:"https://waku-org.github.io/waku-rest-api/"},"REST API"),", such as querying the node information using the ",(0,r.kt)("a",{parentName:"p",href:"https://waku-org.github.io/waku-rest-api/#get-/debug/v1/info"},"Get node info")," endpoint:"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"request",label:"Request",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location 'http://127.0.0.1:8645/debug/v1/info' \\\n--header 'Accept: application/json'\n"))),(0,r.kt)(i.Z,{value:"response",label:"Response",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "listenAddresses": [\n        "/ip4/0.0.0.0/tcp/60000/p2p/16Uiu2HAmUbPquFQqje3jiqoB5YoiUbBya59NB4qqEzeiTNGHeA6w"\n    ],\n    "enrUri": "enr:-Iu4QCQZXZDb_JsYmLoYor0F5E_95HbIywgO_wgx2rIdDbmCJZkTzmlCr0wmMzV47lgik_tVwww5mIng90Ris83TisMBgmlkgnY0gmlwhAAAAACJc2VjcDI1NmsxoQPszztG-Ev52ZB7tk0jF8s6Md4KvyY_rhzNZokaaB_ABIN0Y3CC6mCFd2FrdTIB"\n}\n')))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"listenAddresses")," field stores the node's listening addresses, while the ",(0,r.kt)("inlineCode",{parentName:"p"},"enrUri")," field stores the discoverable ",(0,r.kt)("inlineCode",{parentName:"p"},"ENR")," URI for peer discovery.")),(0,r.kt)("h2",{id:"find-the-node-addresses"},"Find the node addresses"),(0,r.kt)("p",null,"You can find the addresses of a running node through its logs or by calling the ",(0,r.kt)("a",{parentName:"p",href:"https://waku-org.github.io/waku-rest-api/#get-/debug/v1/info"},"Get node info")," endpoint of the ",(0,r.kt)("a",{parentName:"p",href:"https://waku-org.github.io/waku-rest-api/"},"REST API"),"."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"When starting the node, ",(0,r.kt)("inlineCode",{parentName:"p"},"nwaku")," will display all the public listening and discovery addresses at the ",(0,r.kt)("inlineCode",{parentName:"p"},"INFO")," log level.")),(0,r.kt)("h3",{id:"listening-addresses"},"Listening addresses"),(0,r.kt)("p",null,"Look for the log entry that begins with ",(0,r.kt)("inlineCode",{parentName:"p"},"Listening on"),", for example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-txt",metastring:'title="Nwaku Log Output"',title:'"Nwaku',Log:!0,'Output"':!0},'INF 2023-06-15 16:09:54.448+01:00 Listening on                               topics="waku node" tid=1623445 file=waku_node.nim:922 full=[/ip4/0.0.0.0/tcp/60000/p2p/16Uiu2HAmQCsH9V81xoqTwGuT3qwkZWbwY1TtTQwpr3DjHU2TSwMn][/ip4/0.0.0.0/tcp/8000/ws/p2p/16Uiu2HAmQCsH9V81xoqTwGuT3qwkZWbwY1TtTQwpr3DjHU2TSwMn]\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# Listening TCP transport address\n/ip4/0.0.0.0/tcp/60000/p2p/16Uiu2HAmQCsH9V81xoqTwGuT3qwkZWbwY1TtTQwpr3DjHU2TSwMn\n\n# Listening WebSocket address\n/ip4/0.0.0.0/tcp/8000/ws/p2p/16Uiu2HAmQCsH9V81xoqTwGuT3qwkZWbwY1TtTQwpr3DjHU2TSwMn\n")),(0,r.kt)("h3",{id:"discoverable-enr-addresses"},"Discoverable ENR addresses"),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"nwaku")," node can encode its addressing information in an ",(0,r.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-778"},"Ethereum Node Record (ENR)")," following the ",(0,r.kt)("a",{parentName:"p",href:"https://rfc.vac.dev/spec/31/"},"WAKU2-ENR")," specification, primarily for peer discovery."),(0,r.kt)("h4",{id:"enr-for-dns-discovery"},"ENR for DNS discovery"),(0,r.kt)("p",null,"Look for the log entry that begins with ",(0,r.kt)("inlineCode",{parentName:"p"},"DNS: discoverable ENR"),", for example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-txt",metastring:'title="Nwaku Log Output"',title:'"Nwaku',Log:!0,'Output"':!0},'INF 2023-06-15 16:09:54.448+01:00 DNS: discoverable ENR                      topics="waku node" tid=1623445 file=waku_node.nim:923 enr=enr:-Iu4QBKYj8Ovxwz4fIalxZ_1a8dOCU2WC-1LQrcBCCb4Np93f9-UuSZXn3vagJL1S3k3hwRYfOp3JSbW7_VqwtqMIeMBgmlkgnY0gmlwhAAAAACJc2VjcDI1NmsxoQOrmyV59dAzY4ZKrvrj32VOoZbLby8dCKFnXnqhIdQ0NYN0Y3CC6mCFd2FrdTIB\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# ENR the node addresses are encoded in\nenr:-Iu4QBKYj8Ovxwz4fIalxZ_1a8dOCU2WC-1LQrcBCCb4Np93f9-UuSZXn3vagJL1S3k3hwRYfOp3JSbW7_VqwtqMIeMBgmlkgnY0gmlwhAAAAACJc2VjcDI1NmsxoQOrmyV59dAzY4ZKrvrj32VOoZbLby8dCKFnXnqhIdQ0NYN0Y3CC6mCFd2FrdTIB\n")),(0,r.kt)("h4",{id:"enr-for-discv5"},"ENR for Discv5"),(0,r.kt)("p",null,"Look for the log entry that begins with ",(0,r.kt)("inlineCode",{parentName:"p"},"Discv5: discoverable ENR"),", for example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-txt",metastring:'title="Nwaku Log Output"',title:'"Nwaku',Log:!0,'Output"':!0},'INF 2023-06-15 16:09:54.448+01:00 Discv5: discoverable ENR                   topics="waku node" tid=1623445 file=waku_node.nim:924 enr=enr:-IO4QDxToTg86pPCK2KvMeVCXC2ADVZWrxXSvNZeaoa0JhShbM5qed69RQz1s1mWEEqJ3aoklo_7EU9iIBcPMVeKlCQBgmlkgnY0iXNlY3AyNTZrMaEDdBHK1Gx6y_zv5DVw5Qb3DtSOMmVHTZO1WSORrF2loL2DdWRwgiMohXdha3UyAw\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# ENR the node addresses are encoded in\nenr:-IO4QDxToTg86pPCK2KvMeVCXC2ADVZWrxXSvNZeaoa0JhShbM5qed69RQz1s1mWEEqJ3aoklo_7EU9iIBcPMVeKlCQBgmlkgnY0iXNlY3AyNTZrMaEDdBHK1Gx6y_zv5DVw5Qb3DtSOMmVHTZO1WSORrF2loL2DdWRwgiMohXdha3UyAw\n")),(0,r.kt)("admonition",{title:"Congratulations!",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You have successfully started, configured, and connected a ",(0,r.kt)("inlineCode",{parentName:"p"},"nwaku")," node to the Waku Network. Have a look at the ",(0,r.kt)("a",{parentName:"p",href:"/guides/nwaku/configure-nwaku"},"Node Configuration Examples")," guide to learn how to configure ",(0,r.kt)("inlineCode",{parentName:"p"},"nwaku")," for different use cases.")))}m.isMDXComponent=!0}}]);