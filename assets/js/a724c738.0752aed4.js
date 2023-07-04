"use strict";(self.webpackChunkwaku_guide=self.webpackChunkwaku_guide||[]).push([[288],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>k});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),u=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),c=u(r),f=n,k=c["".concat(p,".").concat(f)]||c[f]||m[f]||o;return r?a.createElement(k,i(i({ref:t},l),{},{components:r})):a.createElement(k,i({ref:t},l))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=f;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:n,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},38521:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=r(87462),n=(r(67294),r(3905));const o={title:"Introduction",slug:"/clients/js-waku"},i="JS-Waku Documentation",s={unversionedId:"clients/js-waku/index",id:"clients/js-waku/index",title:"Introduction",description:"JS-Waku is the TypeScript implementation of the Waku protocol,",source:"@site/docs/clients/js-waku/index.md",sourceDirName:"clients/js-waku",slug:"/clients/js-waku",permalink:"/clients/js-waku",draft:!1,editUrl:"https://github.com/waku-org/docs.waku.org/tree/develop/docs/clients/js-waku/index.md",tags:[],version:"current",lastUpdatedAt:1686339124,formattedLastUpdatedAt:"Jun 9, 2023",frontMatter:{title:"Introduction",slug:"/clients/js-waku"}},p={},u=[{value:"Bugs, Questions &amp; Support",id:"bugs-questions--support",level:2}],l={toc:u},c="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,a.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"js-waku-documentation"},"JS-Waku Documentation"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/waku-org/js-waku"},"JS-Waku")," is the TypeScript implementation of the Waku protocol,\nspecifically designed for the browser environment.\nThis powerful, easy-to-use library enables you to integrate Waku into your web applications seamlessly."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"If you wish to use Waku with a NodeJS application, you can either:"),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"Use ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/status-im/nwaku"},"nwaku"),"'s ",(0,n.kt)("a",{parentName:"li",href:"https://rfc.vac.dev/spec/16/"},"JSON RPC API")),(0,n.kt)("li",{parentName:"ul"},"Or, attempt to use go-waku's ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/waku-org/go-waku/tree/master/examples/c-bindings"},"c-bindings")," in NodeJS"))),(0,n.kt)("p",null,"To get started, the ",(0,n.kt)("a",{parentName:"p",href:"/"},"Quick Start")," guide offers a simple way to integrate Waku into your web app.\nFor a more comprehensive tutorial, follow the ",(0,n.kt)("a",{parentName:"p",href:"/"},"Build a Chat App")," guide,\nwhich demonstrates how to create a chat app from scratch."),(0,n.kt)("p",null,"Explore the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/waku-org/js-waku-examples"},"js-waku-examples repository")," to find various working Proof-of-Concepts that showcase how to use JS-Waku effectively.\nYou can also interact with these examples live:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://examples.waku.org/web-chat"},"web-chat"),": A simple public chat."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://examples.waku.org/eth-pm"},"eth-pm"),": End-to-end encrypted private messages."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://examples.waku.org/rln-js"},"rln-js"),": Demonstration of ",(0,n.kt)("a",{parentName:"li",href:"https://rfc.vac.dev/spec/32/"},"RLN"),",\nan economic spam protection protocol that rate limit using zero-knowledge for privacy preserving purposes.")),(0,n.kt)("p",null,"To gain a deeper understanding of Waku, visit the ",(0,n.kt)("a",{parentName:"p",href:"/"},"overview documentation"),".\nIf you are interested in learning how Waku works under the hood, check out the specs at ",(0,n.kt)("a",{parentName:"p",href:"https://rfc.vac.dev/"},"rfc.vac.dev"),"."),(0,n.kt)("h2",{id:"bugs-questions--support"},"Bugs, Questions & Support"),(0,n.kt)("p",null,"If you encounter any bug or would like to propose new features, feel free to ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/waku-org/js-waku/issues/new/"},"open an issue"),"."),(0,n.kt)("p",null,"For general discussion, get help or latest news,\njoin ",(0,n.kt)("strong",{parentName:"p"},"#js-waku")," on ",(0,n.kt)("a",{parentName:"p",href:"https://discord.gg/Nrac59MfSX"},"Vac Discord")," or the ",(0,n.kt)("a",{parentName:"p",href:"https://t.me/waku_org"},"Waku Telegram Group"),"."))}m.isMDXComponent=!0}}]);