"use strict";(self.webpackChunkwaku_guide=self.webpackChunkwaku_guide||[]).push([[531],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>v});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(r),m=n,v=c["".concat(l,".").concat(m)]||c[m]||d[m]||i;return r?a.createElement(v,o(o({ref:t},u),{},{components:r})):a.createElement(v,o({ref:t},u))}));function v(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:n,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},96192:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const i={title:"What is Waku?",slug:"/"},o=void 0,s={unversionedId:"overview/index",id:"overview/index",title:"What is Waku?",description:"Waku has risks and limitations as it is still developing and preparing for extensive adoption. However, it is already demonstrating its capabilities by powering various applications. Join our community to stay updated on our progress.",source:"@site/docs/overview/index.md",sourceDirName:"overview",slug:"/",permalink:"/",draft:!1,editUrl:"https://github.com/waku-org/docs.waku.org/tree/develop/docs/overview/index.md",tags:[],version:"current",lastUpdatedAt:1686713698,formattedLastUpdatedAt:"Jun 14, 2023",frontMatter:{title:"What is Waku?",slug:"/"},sidebar:"main",next:{title:"History of Waku",permalink:"/overview/history"}},l={},p=[{value:"Motivation and Goals",id:"motivation-and-goals",level:2},{value:"Generalized",id:"generalized",level:3},{value:"Peer-to-Peer",id:"peer-to-peer",level:3},{value:"Platform Agnostic",id:"platform-agnostic",level:3},{value:"Privacy-Preserving",id:"privacy-preserving",level:3},{value:"Modular Design",id:"modular-design",level:3},{value:"Service Network",id:"service-network",level:3},{value:"How Does Waku Work?",id:"how-does-waku-work",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Waku has risks and limitations as it is still developing and preparing for extensive adoption. However, it is already demonstrating its capabilities by ",(0,n.kt)("a",{parentName:"p",href:"/powered-by-waku"},"powering various applications"),". ",(0,n.kt)("a",{parentName:"p",href:"/community"},"Join our community")," to stay updated on our progress.")),(0,n.kt)("p",null,"Waku, the standard of Web3 communication, is a family of protocols that offer secure, private, and peer-to-peer communication in a decentralized environment. It is designed to operate in resource-limited environments but can also be used as a node or desktop application."),(0,n.kt)("p",null,"Waku protocols ensure that users communication remains censorship-resistant and privacy-preserving, giving them complete control over their data. By integrating Waku into your dApp, you can add decentralized communication features to your application without compromising security or privacy."),(0,n.kt)("h2",{id:"motivation-and-goals"},"Motivation and Goals"),(0,n.kt)("p",null,"The Waku family of protocols is designed for diverse applications due to their properties, such as:"),(0,n.kt)("h3",{id:"generalized"},"Generalized"),(0,n.kt)("p",null,"Waku aims to solve the problem of ephemeral messaging between subsystems and nodes through a flexible, secure, and private protocol. It supports human-to-human and machine-to-machine messaging scenarios but is not designed for data storage."),(0,n.kt)("h3",{id:"peer-to-peer"},"Peer-to-Peer"),(0,n.kt)("p",null,"Waku is suitable for applications that require a peer-to-peer approach, offering the following advantages:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Censorship resistance with no single point of failure."),(0,n.kt)("li",{parentName:"ul"},"Adaptive and scalable network."),(0,n.kt)("li",{parentName:"ul"},"Shared infrastructure, leveraging the capabilities of Waku as a service network.")),(0,n.kt)("h3",{id:"platform-agnostic"},"Platform Agnostic"),(0,n.kt)("p",null,"Waku can run on any platform or environment, even settings with limited resources like bandwidth, CPU, memory, disk, battery, etc. It can also function when the nodes are not publicly connected or are mostly offline."),(0,n.kt)("h3",{id:"privacy-preserving"},"Privacy-Preserving"),(0,n.kt)("p",null,"Waku can cater to applications that require privacy guarantees, such as:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Pseudonymity and not being tied to any Personally Identifiable Information (PII)."),(0,n.kt)("li",{parentName:"ul"},"Metadata protection in transit."),(0,n.kt)("li",{parentName:"ul"},"Various forms of ",(0,n.kt)("a",{parentName:"li",href:"/overview/reference/security-features#anonymityunlinkability"},"unlinkability"),".")),(0,n.kt)("h3",{id:"modular-design"},"Modular Design"),(0,n.kt)("p",null,"Waku nodes are adaptive and can be customized based on the application's requirements and environment. Users can adjust multiple parameters, such as:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Low privacy/low resource usage vs. high privacy/increased latency + bandwidth usage."),(0,n.kt)("li",{parentName:"ul"},"Providing resources to the network vs. consuming resources."),(0,n.kt)("li",{parentName:"ul"},"Stronger guarantees for spam protection vs. economic registration cost.")),(0,n.kt)("p",null,"These options are part of the ",(0,n.kt)("a",{parentName:"p",href:"https://eprint.iacr.org/2017/954.pdf"},"Anonymity Trilemma"),", which Waku addresses through its adjustable protocol."),(0,n.kt)("h3",{id:"service-network"},"Service Network"),(0,n.kt)("p",null,"Waku provides developers with a convenient solution for building decentralized communication systems, eliminating the need to build a peer-to-peer network from scratch. Node operators can offer multiple services, such as:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Storing messages for offline devices."),(0,n.kt)("li",{parentName:"ul"},"Enabling bandwidth-saving access to the ",(0,n.kt)("a",{parentName:"li",href:"/overview/concepts/protocols#relay"},"Relay")," network through ",(0,n.kt)("a",{parentName:"li",href:"/overview/concepts/protocols#light-push"},"Light Push")," and ",(0,n.kt)("a",{parentName:"li",href:"/overview/concepts/protocols#filter"},"Filter")," protocols."),(0,n.kt)("li",{parentName:"ul"},"Implementing spam prevention and DoS mitigation features."),(0,n.kt)("li",{parentName:"ul"},"Providing a resilient and shared ",(0,n.kt)("a",{parentName:"li",href:"/overview/concepts/protocols#relay"},"Relay")," infrastructure that applications can leverage to enhance reliability and efficiency.")),(0,n.kt)("h2",{id:"how-does-waku-work"},"How Does Waku Work?"),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"/overview/concepts/protocols#relay"},"Relay")," protocol is the foundation of the Waku Network, which employs a Pub/Sub architecture built on the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/libp2p/specs/blob/master/pubsub/gossipsub/README.md"},"libp2p GossipSub protocol"),". Additionally, various other Waku protocols have been created to facilitate specific functionalities, including but not limited to:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Facilitating the retrieval of historical messages for mostly offline devices."),(0,n.kt)("li",{parentName:"ol"},"Providing solutions for encrypted communication, such as symmetric encryption, ECIES/asymmetric encryption, and noise handshake-based key turns."),(0,n.kt)("li",{parentName:"ol"},"Preserving bandwidth usage for resource-limited environments."),(0,n.kt)("li",{parentName:"ol"},"Implementing economic spam protection (rate limits) while ensuring privacy."),(0,n.kt)("li",{parentName:"ol"},"Developing methods to protect against mass deanonymization (currently being researched)."),(0,n.kt)("li",{parentName:"ol"},"Designing strategies to scale ",(0,n.kt)("inlineCode",{parentName:"li"},"Relay/GossipSub")," securely.")),(0,n.kt)("p",null,"If you want to learn more about how Waku works, the ",(0,n.kt)("a",{parentName:"p",href:"https://rfc.vac.dev/spec/10/"},"WAKU2 RFC")," provides an in-depth look under the hood."))}d.isMDXComponent=!0}}]);