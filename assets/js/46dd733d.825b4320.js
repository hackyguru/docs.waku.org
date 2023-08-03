"use strict";(self.webpackChunkwaku_guide=self.webpackChunkwaku_guide||[]).push([[675],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(a),d=o,h=m["".concat(l,".").concat(d)]||m[d]||p[d]||r;return a?n.createElement(h,i(i({ref:t},u),{},{components:a})):n.createElement(h,i({ref:t},u))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},72417:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var n=a(87462),o=(a(67294),a(3905));const r={title:"Use Cases"},i=void 0,s={unversionedId:"overview/use-cases",id:"overview/use-cases",title:"Use Cases",description:"Waku is a decentralised communication network, facilitating secure and private person-to-person and machine-to-machine communication without a central authority. It supports various use cases, including but not limited to:",source:"@site/docs/overview/use-cases.md",sourceDirName:"overview",slug:"/overview/use-cases",permalink:"/overview/use-cases",draft:!1,editUrl:"https://github.com/waku-org/docs.waku.org/tree/develop/docs/overview/use-cases.md",tags:[],version:"current",lastUpdatedAt:1690918744,formattedLastUpdatedAt:"1 Aug 2023",frontMatter:{title:"Use Cases"},sidebar:"main",previous:{title:"Why Waku?",permalink:"/overview/why-waku"},next:{title:"Protocols",permalink:"/overview/concepts/protocols"}},l={},c=[{value:"Chat Messengers",id:"chat-messengers",level:3},{value:"Demos",id:"demos",level:4},{value:"Polls",id:"polls",level:3},{value:"Demos",id:"demos-1",level:4},{value:"NFT Marketplaces",id:"nft-marketplaces",level:3},{value:"Demos",id:"demos-2",level:4},{value:"State Channels",id:"state-channels",level:3},{value:"Voting and Proposals",id:"voting-and-proposals",level:3},{value:"Demos",id:"demos-3",level:4},{value:"Signature Exchange for Multi-Signature Wallets",id:"signature-exchange-for-multi-signature-wallets",level:3},{value:"Game Mechanics Communication",id:"game-mechanics-communication",level:3},{value:"Demos",id:"demos-4",level:4},{value:"DApp to Wallet Communication",id:"dapp-to-wallet-communication",level:3},{value:"Demos",id:"demos-5",level:4},{value:"Layer 2 Coordination (Open Market, Spam Protected Mempool)",id:"layer-2-coordination-open-market-spam-protected-mempool",level:3},{value:"Generalised Marketplaces",id:"generalised-marketplaces",level:3},{value:"Demos",id:"demos-6",level:4},{value:"Social Media Platforms",id:"social-media-platforms",level:3}],u={toc:c},m="wrapper";function p(e){let{components:t,...a}=e;return(0,o.kt)(m,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Waku is a decentralised communication network, facilitating secure and private person-to-person and machine-to-machine communication without a central authority. It supports various use cases, including but not limited to:"),(0,o.kt)("h3",{id:"chat-messengers"},"Chat Messengers"),(0,o.kt)("p",null,"Waku can be used as the communication layer when building a private, decentralised, and censorship resistant messenger."),(0,o.kt)("h4",{id:"demos"},"Demos"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/status-im/status-web"},"Status Web"))),(0,o.kt)("h3",{id:"polls"},"Polls"),(0,o.kt)("p",null,"With Waku, you can create, answer, and view censorship resistant polls, promoting a democratic and transparent voting environment immune to manipulation and censorship."),(0,o.kt)("h4",{id:"demos-1"},"Demos"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/status-im/wakuconnect-vote-poll-sdk"},"Waku Connect Poll SDK"))),(0,o.kt)("h3",{id:"nft-marketplaces"},"NFT Marketplaces"),(0,o.kt)("p",null,"Waku can be used to take NFT bids and offers off-chain, enabling gas savings. Additionally, it allows for adding a social media layer, enabling NFT owners to like, comment, and perform other social actions."),(0,o.kt)("h4",{id:"demos-2"},"Demos"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/Agusx1211/smolpuddle-web"},"SmolPuddle Marketplace"))),(0,o.kt)("h3",{id:"state-channels"},"State Channels"),(0,o.kt)("p",null,"Waku can enable two parties to establish and sustain a state channel effortlessly, facilitating message exchange and seamless updates to their shared agreement without direct blockchain involvement."),(0,o.kt)("h3",{id:"voting-and-proposals"},"Voting and Proposals"),(0,o.kt)("p",null,"To save on gas fees, votes for proposals submitted on the blockchain can be exchanged over Waku. These votes can then be aggregated and submitted to the blockchain to commit the result."),(0,o.kt)("h4",{id:"demos-3"},"Demos"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/status-im/wakuconnect-vote-poll-sdk"},"Waku Connect Poll SDK"))),(0,o.kt)("h3",{id:"signature-exchange-for-multi-signature-wallets"},"Signature Exchange for Multi-Signature Wallets"),(0,o.kt)("p",null,"Waku can enable multiple owners of a given multi-signature wallet to exchange signatures in a decentralised, private, and censorship resistant manner, allowing for the approval of transactions."),(0,o.kt)("h3",{id:"game-mechanics-communication"},"Game Mechanics Communication"),(0,o.kt)("p",null,"Waku can be used as the communication layer for a peer-to-peer, decentralised game, eliminating the need for a centralised infrastructure for gameplay communications."),(0,o.kt)("h4",{id:"demos-4"},"Demos"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/fjij/ethonline-2021"},"Super Card Game"))),(0,o.kt)("h3",{id:"dapp-to-wallet-communication"},"DApp to Wallet Communication"),(0,o.kt)("p",null,"DApp operators can use communication between a user's wallet and their DApp to notify users (e.g., governance token holders can be notified to vote on a proposal) or to request transaction signatures from the wallet."),(0,o.kt)("h4",{id:"demos-5"},"Demos"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://walletconnect.com/"},"WalletConnect 2.0")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.hashpack.app/hashconnect"},"HashPack"))),(0,o.kt)("h3",{id:"layer-2-coordination-open-market-spam-protected-mempool"},"Layer 2 Coordination (Open Market, Spam Protected Mempool)"),(0,o.kt)("p",null,"Waku can broadcast and aggregate Layer 2 transactions to enhance privacy, anonymity, and resilience. Aggregating transactions reduces network load and improves scalability, ensuring a more robust Layer 2 ecosystem."),(0,o.kt)("h3",{id:"generalised-marketplaces"},"Generalised Marketplaces"),(0,o.kt)("p",null,"Waku can enable users to offer, bid, accept, and trade goods and services, making it possible to create ride-sharing or trading apps."),(0,o.kt)("h4",{id:"demos-6"},"Demos"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/TheBojda/waku-uber"},"Waku-Uber"))),(0,o.kt)("h3",{id:"social-media-platforms"},"Social Media Platforms"),(0,o.kt)("p",null,"While chat messengers are a type of social media that can be decentralised and made censorship resistant through Waku, other forms of social media, such as news feeds, blog posts, and audio or video sharing, can also benefit from using Waku."))}p.isMDXComponent=!0}}]);