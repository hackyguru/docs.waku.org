"use strict";(self.webpackChunkwaku_guide=self.webpackChunkwaku_guide||[]).push([[572],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),u=o,h=d["".concat(l,".").concat(u)]||d[u]||m[u]||r;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},54213:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));const r={title:"Protocols"},i=void 0,s={unversionedId:"overview/concepts/protocols",id:"overview/concepts/protocols",title:"Protocols",description:"Waku takes a modular approach, providing a range of protocols that enable applications to control the trade-offs involved in the Anonymity Trilemma. This flexibility empowers applications to make informed choices regarding the desired balance between anonymity, scalability, and latency. Here are the main protocols provided by Waku:",source:"@site/docs/overview/concepts/protocols.md",sourceDirName:"overview/concepts",slug:"/overview/concepts/protocols",permalink:"/overview/concepts/protocols",draft:!1,editUrl:"https://github.com/waku-org/docs.waku.org/tree/develop/docs/overview/concepts/protocols.md",tags:[],version:"current",lastUpdatedAt:1689097958,formattedLastUpdatedAt:"Jul 11, 2023",frontMatter:{title:"Protocols"},sidebar:"main",previous:{title:"Use Cases",permalink:"/overview/use-cases"},next:{title:"Content Topics",permalink:"/overview/concepts/content-topics"}},l={},p=[{value:"Relay",id:"relay",level:2},{value:"RLN Relay",id:"rln-relay",level:2},{value:"Filter",id:"filter",level:2},{value:"Store",id:"store",level:2},{value:"Light Push",id:"light-push",level:2},{value:"Waku Message",id:"waku-message",level:2}],c={toc:p},d="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Waku takes a modular approach, providing a range of protocols that enable applications to control the trade-offs involved in the ",(0,o.kt)("a",{parentName:"p",href:"https://eprint.iacr.org/2017/954.pdf"},"Anonymity Trilemma"),". This flexibility empowers applications to make informed choices regarding the desired balance between anonymity, scalability, and latency. Here are the main protocols provided by Waku:"),(0,o.kt)("h2",{id:"relay"},(0,o.kt)("a",{parentName:"h2",href:"https://rfc.vac.dev/spec/11/"},"Relay")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Relay")," protocol employs a Pub/Sub architecture to facilitate the sending and receiving of messages among peers. It extends the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/libp2p/specs/blob/master/pubsub/gossipsub/README.md"},"libp2p GossipSub protocol")," to create a privacy-focused peer-to-peer messaging protocol that enables secure communication channels, encryption, and protection against censorship. It also scales the Waku Network to accommodate many nodes efficiently."),(0,o.kt)("h2",{id:"rln-relay"},(0,o.kt)("a",{parentName:"h2",href:"https://rfc.vac.dev/spec/17/"},"RLN Relay")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"RLN Relay")," protocol extends the ",(0,o.kt)("inlineCode",{parentName:"p"},"Relay")," protocol by using ",(0,o.kt)("a",{parentName:"p",href:"https://rfc.vac.dev/spec/32/"},"Rate Limit Nullifiers (RLN)")," to provide efficient and economic spam prevention. It enforces a rate limit on messages over time for all peers in the network, economically preventing spam, and imposes financial penalties and network removal for spammers. You can find more details in the ",(0,o.kt)("a",{parentName:"p",href:"https://vac.dev/rln-relay"},"RLN Relay blog post"),"."),(0,o.kt)("h2",{id:"filter"},(0,o.kt)("a",{parentName:"h2",href:"https://rfc.vac.dev/spec/12/"},"Filter")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Filter")," protocol allows light nodes to selectively subscribe to specific messages relayed by other peers using ",(0,o.kt)("a",{parentName:"p",href:"/overview/concepts/content-topics"},"content topics"),". It is designed to be a lightweight alternative for accessing the ",(0,o.kt)("inlineCode",{parentName:"p"},"Relay")," network, particularly tailored for devices with limited bandwidth."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"Filter")," protocol helps optimize bandwidth usage, but it has fewer privacy guarantees as it must disclose the content topic to its peers to retrieve messages.")),(0,o.kt)("h2",{id:"store"},(0,o.kt)("a",{parentName:"h2",href:"https://rfc.vac.dev/spec/13/"},"Store")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Store")," protocol is responsible for storing messages relayed in the network, making it possible to query and retrieve them later. This functionality benefits offline peers by enabling them to retrieve missed messages upon reconnection."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Using ",(0,o.kt)("inlineCode",{parentName:"p"},"Relay")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Filter")," protocols is recommended when a node is online, as ",(0,o.kt)("inlineCode",{parentName:"p"},"Store")," does not guarantee data availability. The ",(0,o.kt)("inlineCode",{parentName:"p"},"Store")," protocol is suitable for retrieving messages when connecting to the network, like when a dApp starts.")),(0,o.kt)("h2",{id:"light-push"},(0,o.kt)("a",{parentName:"h2",href:"https://rfc.vac.dev/spec/19/"},"Light Push")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Light Push")," is a ",(0,o.kt)("a",{parentName:"p",href:"/overview/concepts/network-domains#requestresponse-domain"},"Request/Response")," protocol for nodes with limited bandwidth and short connection windows. It allows a client to receive an acknowledgment when sending messages, indicating that at least one peer has received them. Subsequently, the remote peer forwards these messages to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Relay")," network."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"While the ",(0,o.kt)("inlineCode",{parentName:"p"},"Light Push")," protocol acknowledges the receipt by the remote peer, it does not guarantee network-wide propagation.")),(0,o.kt)("h2",{id:"waku-message"},(0,o.kt)("a",{parentName:"h2",href:"https://rfc.vac.dev/spec/14"},"Waku Message")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Waku Message")," specifies the structure and format of messages in the Waku Network. It includes the following attributes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"content_topic")," attribute for ",(0,o.kt)("a",{parentName:"li",href:"/overview/concepts/content-topics"},"content-based filtering"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"payload")," attribute containing the message data payload to be sent."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"meta")," attribute for conveying additional details to various protocols for application-specific processing."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"timestamp")," attribute signifying the time at which the message was generated by its sender."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ephemeral")," attribute specifying whether the network should not persist the message.")))}m.isMDXComponent=!0}}]);