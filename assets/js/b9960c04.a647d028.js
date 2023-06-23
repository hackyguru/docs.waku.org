"use strict";(self.webpackChunkwaku_guide=self.webpackChunkwaku_guide||[]).push([[895],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),l=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(a),h=n,k=d["".concat(p,".").concat(h)]||d[h]||u[h]||o;return a?r.createElement(k,i(i({ref:t},c),{},{components:a})):r.createElement(k,i({ref:t},c))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=h;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},8400:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=a(87462),n=(a(67294),a(3905));const o={title:"Glossary"},i="Waku Docs Glossary",s={unversionedId:"overview/reference/glossary",id:"overview/reference/glossary",title:"Glossary",description:"Definitions and usage of the terminology used in the Waku ecosystem.",source:"@site/docs/overview/reference/glossary.md",sourceDirName:"overview/reference",slug:"/overview/reference/glossary",permalink:"/overview/reference/glossary",draft:!1,editUrl:"https://github.com/waku-org/docs.waku.org/tree/develop/docs/overview/reference/glossary.md",tags:[],version:"current",lastUpdatedAt:1687261315,formattedLastUpdatedAt:"Jun 20, 2023",frontMatter:{title:"Glossary"},sidebar:"main",previous:{title:"Peer Exchange",permalink:"/overview/concepts/peer-exchange"},next:{title:"Security Features",permalink:"/overview/reference/security-features"}},p={},l=[{value:"Bootstrapping",id:"bootstrapping",level:3},{value:"Content Topic",id:"content-topic",level:3},{value:"Dappnode",id:"dappnode",level:3},{value:"Discv5",id:"discv5",level:3},{value:"DNS Discovery",id:"dns-discovery",level:3},{value:"ENR",id:"enr",level:3},{value:"Filter",id:"filter",level:3},{value:"GossipSub",id:"gossipsub",level:3},{value:"Libp2p",id:"libp2p",level:3},{value:"Light Node",id:"light-node",level:3},{value:"Light Push",id:"light-push",level:3},{value:"Mostly Offline",id:"mostly-offline",level:3},{value:"Node",id:"node",level:3},{value:"Node Key",id:"node-key",level:3},{value:"Payload",id:"payload",level:3},{value:"Peer",id:"peer",level:3},{value:"Peer Discovery",id:"peer-discovery",level:3},{value:"Peer Exchange",id:"peer-exchange",level:3},{value:"Peer ID",id:"peer-id",level:3},{value:"Protocol",id:"protocol",level:3},{value:"Pub/Sub",id:"pubsub",level:3},{value:"Pub/Sub Topic",id:"pubsub-topic",level:3},{value:"Rate Limit Nullifiers",id:"rate-limit-nullifiers",level:3},{value:"Relay",id:"relay",level:3},{value:"Resource-Limited",id:"resource-limited",level:3},{value:"RLN Relay",id:"rln-relay",level:3},{value:"SDK",id:"sdk",level:3},{value:"Store",id:"store",level:3},{value:"Transport",id:"transport",level:3},{value:"Waku",id:"waku",level:3},{value:"Waku Message",id:"waku-message",level:3},{value:"Waku Message Payload Encryption",id:"waku-message-payload-encryption",level:3},{value:"Waku Noise",id:"waku-noise",level:3}],c={toc:l},d="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"waku-docs-glossary"},"Waku Docs Glossary"),(0,n.kt)("p",null,"Definitions and usage of the terminology used in the Waku ecosystem."),(0,n.kt)("h3",{id:"bootstrapping"},"Bootstrapping"),(0,n.kt)("p",null,"Bootstrapping is the initial entry point of a ",(0,n.kt)("a",{parentName:"p",href:"#node"},"node")," to the ",(0,n.kt)("a",{parentName:"p",href:"#waku"},"Waku Network"),". Once connected, other ",(0,n.kt)("a",{parentName:"p",href:"#peer-discovery"},"peer discovery")," methods can be employed to locate other ",(0,n.kt)("a",{parentName:"p",href:"#peer"},"peers")," in the network."),(0,n.kt)("h3",{id:"content-topic"},(0,n.kt)("a",{parentName:"h3",href:"/overview/concepts/content-topics"},"Content Topic")),(0,n.kt)("p",null,"A content topic is a string attached to ",(0,n.kt)("a",{parentName:"p",href:"#waku-message"},"messages")," to enable ",(0,n.kt)("a",{parentName:"p",href:"#protocol"},"protocol-level")," features like selective message processing and retrieval based on specific criteria."),(0,n.kt)("h3",{id:"dappnode"},(0,n.kt)("a",{parentName:"h3",href:"https://dappnode.com/"},"Dappnode")),(0,n.kt)("p",null,"Dappnode is an open-source platform that simplifies the hosting and management of decentralized applications and blockchain nodes, including ",(0,n.kt)("a",{parentName:"p",href:"#waku"},"Waku"),"."),(0,n.kt)("h3",{id:"discv5"},(0,n.kt)("a",{parentName:"h3",href:"/overview/concepts/discv5"},"Discv5")),(0,n.kt)("p",null,"Discv5 is a ",(0,n.kt)("a",{parentName:"p",href:"#peer-discovery"},"peer discovery")," mechanism using a Distributed Hash Table (DHT) to store ",(0,n.kt)("a",{parentName:"p",href:"#enr"},"ENR")," records, providing censorship resistance, load distribution, and enhanced network resilience."),(0,n.kt)("h3",{id:"dns-discovery"},(0,n.kt)("a",{parentName:"h3",href:"/overview/concepts/dns-discovery"},"DNS Discovery")),(0,n.kt)("p",null,"DNS discovery is a ",(0,n.kt)("a",{parentName:"p",href:"#peer-discovery"},"peer discovery")," mechanism that allows the retrieval of an ",(0,n.kt)("a",{parentName:"p",href:"#enr"},"ENR")," tree from the TXT field of a domain name, enabling the storage of ",(0,n.kt)("a",{parentName:"p",href:"#node"},"node")," connection details and promoting decentralization."),(0,n.kt)("h3",{id:"enr"},(0,n.kt)("a",{parentName:"h3",href:"https://rfc.vac.dev/spec/31/"},"ENR")),(0,n.kt)("p",null,"Ethereum Node Record (ENR) is a specification used to represent and identify ",(0,n.kt)("a",{parentName:"p",href:"#node"},"nodes"),", facilitating ",(0,n.kt)("a",{parentName:"p",href:"#peer-discovery"},"discovery")," and communication within the network. Besides connection details, ",(0,n.kt)("inlineCode",{parentName:"p"},"Waku ENR")," also includes node configuration information like enabled protocol and shards."),(0,n.kt)("h3",{id:"filter"},(0,n.kt)("a",{parentName:"h3",href:"/overview/concepts/protocols#filter"},"Filter")),(0,n.kt)("p",null,"Filter is a ",(0,n.kt)("a",{parentName:"p",href:"#protocol"},"protocol")," that enables ",(0,n.kt)("a",{parentName:"p",href:"#light-node"},"light nodes")," to selectively subscribe to specific ",(0,n.kt)("a",{parentName:"p",href:"#waku-message"},"messages")," transmitted by ",(0,n.kt)("a",{parentName:"p",href:"#peer"},"peers")," using ",(0,n.kt)("a",{parentName:"p",href:"#content-topic"},"content topics"),". It is designed to be a lightweight alternative for accessing the ",(0,n.kt)("a",{parentName:"p",href:"#relay"},"Relay")," network."),(0,n.kt)("h3",{id:"gossipsub"},(0,n.kt)("a",{parentName:"h3",href:"/overview/concepts/network-domains#gossip-domain"},"GossipSub")),(0,n.kt)("p",null,"GossipSub is a ",(0,n.kt)("a",{parentName:"p",href:"#protocol"},"protocol")," for efficient and scalable information dissemination in decentralized networks commonly used in blockchain systems."),(0,n.kt)("h3",{id:"libp2p"},(0,n.kt)("a",{parentName:"h3",href:"https://libp2p.io/"},"Libp2p")),(0,n.kt)("p",null,"Libp2p is a modular network stack and protocol suite that allows developers to build decentralized, peer-to-peer applications across various network protocols."),(0,n.kt)("h3",{id:"light-node"},"Light Node"),(0,n.kt)("p",null,"A light node is a ",(0,n.kt)("a",{parentName:"p",href:"#resource-limited"},"resource-limited")," device or client that leverages service nodes to access the ",(0,n.kt)("a",{parentName:"p",href:"#relay"},"Relay")," network."),(0,n.kt)("h3",{id:"light-push"},(0,n.kt)("a",{parentName:"h3",href:"/overview/concepts/protocols#light-push"},"Light Push")),(0,n.kt)("p",null,"Light push is a protocol enabling ",(0,n.kt)("a",{parentName:"p",href:"#light-node"},"light nodes")," to send ",(0,n.kt)("a",{parentName:"p",href:"#waku-message"},"messages")," to the ",(0,n.kt)("a",{parentName:"p",href:"#relay"},"Relay")," network and receive acknowledgments confirming that a ",(0,n.kt)("a",{parentName:"p",href:"#peer"},"peer")," has received them."),(0,n.kt)("h3",{id:"mostly-offline"},"Mostly Offline"),(0,n.kt)("p",null,"Mostly offline devices refer to clients who spend most of their time offline or disconnected from the internet and only occasionally to the internet and ",(0,n.kt)("a",{parentName:"p",href:"#waku"},"Waku Network"),". Examples include browsers and mobile phones."),(0,n.kt)("h3",{id:"node"},"Node"),(0,n.kt)("p",null,"A node is a device or client that implements Waku ",(0,n.kt)("a",{parentName:"p",href:"#protocol"},"protocols")," and leverages the ",(0,n.kt)("a",{parentName:"p",href:"#waku"},"Waku Network")," to enable secure and private peer-to-peer Web3 communication."),(0,n.kt)("h3",{id:"node-key"},"Node Key"),(0,n.kt)("p",null,"A node key is a ",(0,n.kt)("a",{parentName:"p",href:"https://en.bitcoin.it/wiki/Secp256k1"},"Secp256k1")," (64 char hex string) private key for generating the ",(0,n.kt)("a",{parentName:"p",href:"#peer-id"},"PeerID"),", ",(0,n.kt)("a",{parentName:"p",href:"#transport"},"listening")," addresses, and ",(0,n.kt)("a",{parentName:"p",href:"#peer-discovery"},"discovery")," addresses of a Waku node."),(0,n.kt)("h3",{id:"payload"},"Payload"),(0,n.kt)("p",null,"The payload field in a ",(0,n.kt)("a",{parentName:"p",href:"#waku-message"},"Waku Message")," contains the application data, serving as the business logic message transmitted between clients over Waku. Applications can encrypt the payload or employ encryption methods specified in ",(0,n.kt)("a",{parentName:"p",href:"#waku-message-payload-encryption"},"Waku Message Payload Encryption"),"."),(0,n.kt)("h3",{id:"peer"},"Peer"),(0,n.kt)("p",null,"A peer refers to other ",(0,n.kt)("a",{parentName:"p",href:"#node"},"nodes")," and participants of the ",(0,n.kt)("a",{parentName:"p",href:"#waku"},"Waku Network")," with whom communication and interaction are possible."),(0,n.kt)("h3",{id:"peer-discovery"},(0,n.kt)("a",{parentName:"h3",href:"/overview/concepts/peer-discovery"},"Peer Discovery")),(0,n.kt)("p",null,"Peer discovery is when a ",(0,n.kt)("a",{parentName:"p",href:"#node"},"node")," locates and gets information about other ",(0,n.kt)("a",{parentName:"p",href:"#peer"},"peers")," in the ",(0,n.kt)("a",{parentName:"p",href:"#waku"},"Waku Network"),"."),(0,n.kt)("h3",{id:"peer-exchange"},(0,n.kt)("a",{parentName:"h3",href:"/overview/concepts/peer-exchange"},"Peer Exchange")),(0,n.kt)("p",null,"Peer exchange is a ",(0,n.kt)("a",{parentName:"p",href:"#peer-discovery"},"peer discovery")," mechanism that enables ",(0,n.kt)("a",{parentName:"p",href:"#light-node"},"light nodes")," to request and receive peers from other nodes in the network, allowing them to bootstrap and expand their connections without depending on ",(0,n.kt)("a",{parentName:"p",href:"#discv5"},"Discv5"),"."),(0,n.kt)("h3",{id:"peer-id"},"Peer ID"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"PeerID")," is the unique identifier of a ",(0,n.kt)("a",{parentName:"p",href:"#node"},"node")," in the ",(0,n.kt)("a",{parentName:"p",href:"#waku"},"Waku Network")," generated from the cryptographic hash of the node's public key."),(0,n.kt)("h3",{id:"protocol"},(0,n.kt)("a",{parentName:"h3",href:"/overview/concepts/protocols"},"Protocol")),(0,n.kt)("p",null,"A protocol is a set of rules that enables ",(0,n.kt)("a",{parentName:"p",href:"#node"},"nodes")," within the ",(0,n.kt)("a",{parentName:"p",href:"#waku"},"Waku Network")," to perform various functionalities such as message sending, relaying, filtering, storing, retrieving, and more."),(0,n.kt)("h3",{id:"pubsub"},"Pub/Sub"),(0,n.kt)("p",null,"Publish/Subscribe (Pub/Sub) is an asynchronous messaging pattern where publishers send messages to topics, and subscribers receive messages from topics of interest, allowing efficient one-to-many communication."),(0,n.kt)("h3",{id:"pubsub-topic"},"Pub/Sub Topic"),(0,n.kt)("p",null,"A Pub/Sub topic is a string that serves as an identifier for the topic of interest among ",(0,n.kt)("a",{parentName:"p",href:"#gossipsub"},"GossipSub")," peers. Peers interested in the same topic are likely to maintain a connection and forward messages received on that topic."),(0,n.kt)("h3",{id:"rate-limit-nullifiers"},(0,n.kt)("a",{parentName:"h3",href:"https://rfc.vac.dev/spec/32/"},"Rate Limit Nullifiers")),(0,n.kt)("p",null,"Rate Limit Nullifiers (RLN) are a construct based on zero-knowledge proofs that enables rate limiting functionality while preserving the users's anonymity."),(0,n.kt)("h3",{id:"relay"},(0,n.kt)("a",{parentName:"h3",href:"/overview/concepts/protocols#relay"},"Relay")),(0,n.kt)("p",null,"Relay is a ",(0,n.kt)("a",{parentName:"p",href:"#protocol"},"protocol")," that extends the ",(0,n.kt)("a",{parentName:"p",href:"#gossipsub"},"GossipSub protocol")," to enable secure and censorship-resistant ",(0,n.kt)("a",{parentName:"p",href:"#waku-message"},"message")," dissemination among ",(0,n.kt)("a",{parentName:"p",href:"#peer"},"peers")," while preserving privacy. It also scales the ",(0,n.kt)("a",{parentName:"p",href:"#waku"},"Waku Network")," to accommodate many nodes efficiently."),(0,n.kt)("h3",{id:"resource-limited"},"Resource-Limited"),(0,n.kt)("p",null,"Resource-limited refers to environments or devices restricting available resources, including bandwidth, CPU, memory, disk, and battery power."),(0,n.kt)("h3",{id:"rln-relay"},(0,n.kt)("a",{parentName:"h3",href:"/overview/concepts/protocols#rln-relay"},"RLN Relay")),(0,n.kt)("p",null,"RLN Relay is an extension of the ",(0,n.kt)("a",{parentName:"p",href:"#relay"},"Relay protocol")," that uses ",(0,n.kt)("a",{parentName:"p",href:"#rate-limit-nullifiers"},"Rate Limit Nullifiers (RLN)")," to prevent spam economically by enforcing a rate limit on messages over time, imposing penalties, and facilitating network removal for spammers."),(0,n.kt)("h3",{id:"sdk"},(0,n.kt)("a",{parentName:"h3",href:"/guides/nodes-and-sdks"},"SDK")),(0,n.kt)("p",null,"SDKs are tools, libraries, and resources to integrate Waku's private, secure, and censorship-free communication features into various applications."),(0,n.kt)("h3",{id:"store"},(0,n.kt)("a",{parentName:"h3",href:"/overview/concepts/protocols#store"},"Store")),(0,n.kt)("p",null,"Store is a ",(0,n.kt)("a",{parentName:"p",href:"#protocol"},"protocol")," that enables the storage of relayed ",(0,n.kt)("a",{parentName:"p",href:"#waku-message"},"messages")," in the network, allowing offline peers to retrieve missed messages upon reconnecting to the network."),(0,n.kt)("h3",{id:"transport"},(0,n.kt)("a",{parentName:"h3",href:"/overview/concepts/transports"},"Transport")),(0,n.kt)("p",null,"A transport is a network mechanism that establishes connections between ",(0,n.kt)("a",{parentName:"p",href:"#peer"},"peers")," and enables efficient transmission, routing, and delivery of data packets."),(0,n.kt)("h3",{id:"waku"},"Waku"),(0,n.kt)("p",null,"Waku is a family of private, secure, decentralized, and peer-to-peer Web3 communication ",(0,n.kt)("a",{parentName:"p",href:"#protocol"},"protocols")," designed to operate in ",(0,n.kt)("a",{parentName:"p",href:"#resource-limited"},"resource-limited")," environments and suitable for ",(0,n.kt)("a",{parentName:"p",href:"#node"},"node")," or desktop application use. Additionally, these protocols collectively form the Waku Network."),(0,n.kt)("h3",{id:"waku-message"},(0,n.kt)("a",{parentName:"h3",href:"/overview/concepts/protocols#waku-message"},"Waku Message")),(0,n.kt)("p",null,"Waku Message defines the structure of messages in the ",(0,n.kt)("a",{parentName:"p",href:"#waku"},"Waku Network"),", including the ",(0,n.kt)("a",{parentName:"p",href:"#content-topic"},"content topic"),", ",(0,n.kt)("a",{parentName:"p",href:"#payload"},"payload"),", and metadata for application-specific processing."),(0,n.kt)("h3",{id:"waku-message-payload-encryption"},(0,n.kt)("a",{parentName:"h3",href:"https://rfc.vac.dev/spec/26/"},"Waku Message Payload Encryption")),(0,n.kt)("p",null,"Waku Message Payload Encryption provides guidelines for implementing secure and private communication in the ",(0,n.kt)("a",{parentName:"p",href:"#waku"},"Waku Network"),". It covers encryption, decryption, and signing methods for message ",(0,n.kt)("a",{parentName:"p",href:"#payload"},"payloads"),", focusing on confidentiality, authenticity, integrity, and unlinkability."),(0,n.kt)("h3",{id:"waku-noise"},(0,n.kt)("a",{parentName:"h3",href:"https://rfc.vac.dev/spec/35/"},"Waku Noise")),(0,n.kt)("p",null,"Waku Noise is a specified way to use the ",(0,n.kt)("a",{parentName:"p",href:"http://noiseprotocol.org/"},"Noise Protocol Framework")," to build protocols that enable secure key-exchange mechanisms for encrypted communication with confidentiality, authenticity, integrity, strong forward secrecy, and identity-hiding properties."))}u.isMDXComponent=!0}}]);