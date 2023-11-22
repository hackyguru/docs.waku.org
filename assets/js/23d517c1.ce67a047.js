"use strict";(self.webpackChunkwaku_guide=self.webpackChunkwaku_guide||[]).push([[5135],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),l=p(r),h=o,k=l["".concat(s,".").concat(h)]||l[h]||d[h]||n;return r?a.createElement(k,i(i({ref:t},c),{},{components:r})):a.createElement(k,i({ref:t},c))}));function k(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=h;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u[l]="string"==typeof e?e:o,i[1]=u;for(var p=2;p<n;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},9639:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>u,toc:()=>p});var a=r(87462),o=(r(67294),r(3905));const n={title:"The Waku Network"},i=void 0,u={unversionedId:"overview/waku-network",id:"overview/waku-network",title:"The Waku Network",description:"The public Waku Network replaces the previous experimental shared routing layer based on a default pubsub topic (/waku/2/default-waku/proto). If your project currently uses this or any other shared pubsub topics, we encourage you to migrate to the public Waku Network with built-in DoS protection, better scalability, etc.",source:"@site/docs/overview/waku-network.md",sourceDirName:"overview",slug:"/overview/waku-network",permalink:"/overview/waku-network",draft:!1,editUrl:"https://github.com/waku-org/docs.waku.org/tree/develop/docs/overview/waku-network.md",tags:[],version:"current",lastUpdatedAt:1700654044,formattedLastUpdatedAt:"22 Nov 2023",frontMatter:{title:"The Waku Network"},sidebar:"main",previous:{title:"Introduction to Waku",permalink:"/"},next:{title:"History of Waku",permalink:"/overview/history"}},s={},p=[{value:"Why Join the Waku Network?",id:"why-join-the-waku-network",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Running a Waku Network Node",id:"running-a-waku-network-node",level:2}],c={toc:p},l="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(l,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The public Waku Network replaces the previous experimental shared routing layer based on a default pubsub topic (",(0,o.kt)("inlineCode",{parentName:"p"},"/waku/2/default-waku/proto"),"). If your project currently uses this or any other shared pubsub topics, we encourage you to migrate to the public Waku Network with built-in DoS protection, better scalability, etc.")),(0,o.kt)("p",null,"The Waku Network is a shared p2p messaging network that is open-access, useful for generalized messaging, privacy-preserving, scalable and accessible even to resource-restricted devices. Some of the most prominent features include:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"DoS/spam protection with privacy-preserving ",(0,o.kt)("a",{parentName:"li",href:"https://rfc.vac.dev/spec/64/#rln-rate-limiting"},"Rate-Limiting Nullifiers"),"."),(0,o.kt)("li",{parentName:"ol"},"Scalability by ",(0,o.kt)("a",{parentName:"li",href:"https://rfc.vac.dev/spec/64/#network-shards"},"sharding traffic")," into 8 pubsub topics."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://rfc.vac.dev/spec/64/#autosharding"},"Automatic shard selection")," based on content topic."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://rfc.vac.dev/spec/64/#default-services"},"Services")," for resource-restricted nodes, including historical message storage and retrieval, filtering, etc.")),(0,o.kt)("p",null,"If you want to learn more about the Waku Network, the ",(0,o.kt)("a",{parentName:"p",href:"https://rfc.vac.dev/spec/64/"},"WAKU2-NETWORK RFC")," provides an in-depth look under the hood."),(0,o.kt)("h2",{id:"why-join-the-waku-network"},"Why Join the Waku Network?"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Applications or projects can build decentralized communication components on this network, gaining from the fault-tolerance of shared infrastructure, the out-of-the-box censorship resistance of a p2p network and the privacy-preservation of Waku protocols."),(0,o.kt)("li",{parentName:"ol"},"Supporters of public goods and decentralized infrastructure can run their nodes to support the network."),(0,o.kt)("li",{parentName:"ol"},"We are also working on incentivisation vectors to encourage more node operators to provide services to the network.")),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Ethereum Sepolia WebSocket Endpoint"),", which can be yours or from a third party. Have a look at the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/waku-org/nwaku/blob/master/docs/tutorial/pre-requisites-of-running-on-chain-spam-protected-chat2.md#3-access-a-node-on-the-sepolia-testnet-using-infura"},"Access a Sepolia Node Using Infura")," guide for a free Infura option. This node is used to interact with the ",(0,o.kt)("a",{parentName:"li",href:"https://rfc.vac.dev/spec/17/"},"on-chain RLN membership contract"),"."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Wallet with Sepolia Ethereum")," (less than 0.1 Sepolia ETH). Have a look at the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/waku-org/nwaku/blob/master/docs/tutorial/pre-requisites-of-running-on-chain-spam-protected-chat2.md#1-create-a-sepolia-ethereum-account-and-obtain-its-private-key"},"Create a Sepolia Ethereum Wallet")," and ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/waku-org/nwaku/blob/master/docs/tutorial/pre-requisites-of-running-on-chain-spam-protected-chat2.md#2-obtain-sepolia-eth-from-faucet"},"Obtain Sepolia Ethereum from Faucet")," guides to get a Sepolia wallet and fund it with some Sepolia Ethereum. This wallet is required to register ",(0,o.kt)("a",{parentName:"li",href:"https://rfc.vac.dev/spec/17/#setup-and-registration"},"RLN membership"),", which is essential for publishing on the network.")),(0,o.kt)("h2",{id:"running-a-waku-network-node"},"Running a Waku Network Node"),(0,o.kt)("p",null,"Have a look at the ",(0,o.kt)("a",{parentName:"p",href:"/guides/nwaku/run-docker-compose"},"Run Nwaku with Docker Compose")," guide for instructions on running a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/waku-org/nwaku"},"nwaku")," node in the Waku Network. Use the Sepolia node and wallet you obtained above."))}d.isMDXComponent=!0}}]);