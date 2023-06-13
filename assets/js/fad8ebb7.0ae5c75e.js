"use strict";(self.webpackChunkwaku_guide=self.webpackChunkwaku_guide||[]).push([[683],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),d=a,k=c["".concat(s,".").concat(d)]||c[d]||m[d]||i;return n?r.createElement(k,o(o({ref:t},p),{},{components:n})):r.createElement(k,o({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7718:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const i={title:"Why Waku?"},o=void 0,l={unversionedId:"overview/why-waku",id:"overview/why-waku",title:"Why Waku?",description:"Communication in the present day is heavily influenced by third-party intervention, ranging from censorship and deplatforming to intermediaries that seek to profit from rent and the misuse of data in the surveillance economy.",source:"@site/docs/overview/why-waku.md",sourceDirName:"overview",slug:"/overview/why-waku",permalink:"/overview/why-waku",draft:!1,editUrl:"https://github.com/waku-org/waku.guide/tree/develop/docs/overview/why-waku.md",tags:[],version:"current",frontMatter:{title:"Why Waku?"},sidebar:"main",previous:{title:"History of Waku",permalink:"/overview/history"},next:{title:"Use Cases",permalink:"/overview/use-cases"}},s={},u=[{value:"Why Waku is Necessary",id:"why-waku-is-necessary",level:2}],p={toc:u},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Communication in the present day is heavily influenced by third-party intervention, ranging from censorship and deplatforming to intermediaries that seek to profit from rent and the misuse of data in the surveillance economy."),(0,a.kt)("p",null,"Waku is intended to empower individuals by returning control of communication to them. It is the go-to standard for Web3 communication, offering a scalable decentralized communication solution."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Waku improves upon Whisper's capabilities by overcoming limitations and addressing functional gaps."),(0,a.kt)("li",{parentName:"ul"},"It provides a public infrastructure for the Ethereum and multi-chain ecosystem, serving as a common good."),(0,a.kt)("li",{parentName:"ul"},"It is not confined to a particular blockchain."),(0,a.kt)("li",{parentName:"ul"},"It is modular, adaptable, and can cater to various use cases."),(0,a.kt)("li",{parentName:"ul"},"It allows developers to decentralize communication in their dApps or move actions off-chain while maintaining decentralization."),(0,a.kt)("li",{parentName:"ul"},"It can run on various platforms, including mobile devices, cloud environments, web browsers, desktop apps, or even a ",(0,a.kt)("a",{parentName:"li",href:"https://dappnode.com/"},"Dappnode"),"!")),(0,a.kt)("h2",{id:"why-waku-is-necessary"},"Why Waku is Necessary"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null}),(0,a.kt)("th",{parentName:"tr",align:null},"Whisper"),(0,a.kt)("th",{parentName:"tr",align:null},"Waku"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Scalability")),(0,a.kt)("td",{parentName:"tr",align:null},"Whisper does not scale very well, specifically when it comes to bandwidth usage on mobile devices."),(0,a.kt)("td",{parentName:"tr",align:null},"Uses GossipSub and Content Topics.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Spam Resistance")),(0,a.kt)("td",{parentName:"tr",align:null},"Proof of work requires too much battery and compute power making it a poor mechanism for heterogeneous nodes."),(0,a.kt)("td",{parentName:"tr",align:null},"Uses innovative p2p economic spam protection mechanism RLN Relay.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Incentivization Infrastructure")),(0,a.kt)("td",{parentName:"tr",align:null},"There is no incentive to run a Whisper node."),(0,a.kt)("td",{parentName:"tr",align:null},"Research in progress to design incentivization for node operators.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Formal Specification/Documentation")),(0,a.kt)("td",{parentName:"tr",align:null},"Lack of formal and unambiguous specification."),(0,a.kt)("td",{parentName:"tr",align:null},"The specs and docs are open-source and licensed under CC0, making them freely available for anyone to read, modify and improve without restrictions.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Portability")),(0,a.kt)("td",{parentName:"tr",align:null},"Runs over devp2p which limits where Whisper can run and how."),(0,a.kt)("td",{parentName:"tr",align:null},"Waku is built using libp2p, making it easy to run Waku anywhere.")))))}m.isMDXComponent=!0}}]);