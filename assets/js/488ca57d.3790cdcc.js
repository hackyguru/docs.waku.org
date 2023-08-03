"use strict";(self.webpackChunkwaku_guide=self.webpackChunkwaku_guide||[]).push([[839],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(a),m=r,k=c["".concat(l,".").concat(m)]||c[m]||d[m]||s;return a?n.createElement(k,o(o({ref:t},u),{},{components:a})):n.createElement(k,o({ref:t},u))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<s;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),r=a(86010);const s={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.default)(s.tabItem,o),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(87462),r=a(67294),s=a(86010),o=a(12466),i=a(70989),l=a(72389);const p={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function u(e){let{className:t,block:a,selectedValue:i,selectValue:l,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),m=e=>{const t=e.currentTarget,a=c.indexOf(t),n=u[a].value;n!==i&&(d(t),l(n))},k=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.default)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:k,onClick:m},o,{className:(0,s.default)("tabs__item",p.tabItem,o?.className,{"tabs__item--active":i===t})}),a??t)})))}function c(e){let{lazy:t,children:a,selectedValue:n}=e;const s=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function d(e){const t=(0,i.Y)(e);return r.createElement("div",{className:(0,s.default)("tabs-container",p.tabList)},r.createElement(u,(0,n.Z)({},e,t)),r.createElement(c,(0,n.Z)({},e,t)))}function m(e){const t=(0,l.default)();return r.createElement(d,(0,n.Z)({key:String(t)},e))}},76201:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>k,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var n=a(87462),r=(a(67294),a(3905)),s=a(65488),o=a(85162);const i={title:"JavaScript Waku SDK"},l=void 0,p={unversionedId:"guides/js-waku/index",id:"guides/js-waku/index",title:"JavaScript Waku SDK",description:"The JavaScript Waku SDK (@waku/sdk) provides a TypeScript implementation of the Waku protocol designed for web browser environments. Developers can seamlessly integrate Waku functionalities into web applications, enabling efficient communication and collaboration among users using the @waku/sdk package.",source:"@site/docs/guides/js-waku/index.md",sourceDirName:"guides/js-waku",slug:"/guides/js-waku/",permalink:"/guides/js-waku/",draft:!1,editUrl:"https://github.com/waku-org/docs.waku.org/tree/develop/docs/guides/js-waku/index.md",tags:[],version:"current",lastUpdatedAt:1691041257,formattedLastUpdatedAt:"3 Aug 2023",frontMatter:{title:"JavaScript Waku SDK"},sidebar:"guides",previous:{title:"Configure Peer Discovery",permalink:"/guides/nwaku/configure-discovery"},next:{title:"Send and Receive Messages Using Light Push and Filter",permalink:"/guides/js-waku/light-send-receive"}},u={},c=[{value:"Installation",id:"installation",level:2},{value:"Message Structure",id:"message-structure",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Get Help and Report Issues",id:"get-help-and-report-issues",level:2}],d={toc:c},m="wrapper";function k(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/waku-org/js-waku"},"JavaScript Waku SDK")," (",(0,r.kt)("inlineCode",{parentName:"p"},"@waku/sdk"),") provides a TypeScript implementation of the ",(0,r.kt)("a",{parentName:"p",href:"/"},"Waku protocol")," designed for web browser environments. Developers can seamlessly integrate Waku functionalities into web applications, enabling efficient communication and collaboration among users using the ",(0,r.kt)("inlineCode",{parentName:"p"},"@waku/sdk")," package."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"Install the ",(0,r.kt)("inlineCode",{parentName:"p"},"@waku/sdk")," package using your preferred package manager:"),(0,r.kt)(s.Z,{groupId:"package-manager",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"npm",label:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @waku/sdk\n"))),(0,r.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @waku/sdk\n")))),(0,r.kt)("p",null,"You can also use the ",(0,r.kt)("inlineCode",{parentName:"p"},"@waku/sdk")," package via a CDN without installing it on your system:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import * as waku from "https://unpkg.com/@waku/sdk@latest/bundle/index.js";\n')),(0,r.kt)("h2",{id:"message-structure"},"Message Structure"),(0,r.kt)("p",null,"We recommend creating a message structure for your application using ",(0,r.kt)("a",{parentName:"p",href:"https://protobuf.dev/"},"Protocol Buffers")," for the following reasons:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Consistency:")," Ensures uniform message format for easy parsing and processing."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Interoperability:")," Facilitates effective communication between different parts of your application."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Compatibility:")," Allows smooth communication between older and newer app versions.")),(0,r.kt)("p",null,"To get started, install the ",(0,r.kt)("inlineCode",{parentName:"p"},"protobufjs")," package using your preferred package manager:"),(0,r.kt)(s.Z,{groupId:"package-manager",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"npm",label:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm install protobufjs\n"))),(0,r.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add protobufjs\n")))),(0,r.kt)("p",null,"You can also use the ",(0,r.kt)("inlineCode",{parentName:"p"},"protobufjs")," package via a CDN without installing it on your system:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'// Import the CDN\nimport "https://cdn.jsdelivr.net/npm/protobufjs@latest/dist/protobuf.min.js";\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- Or include the protobufjs script --\x3e\n<script src="https://cdn.jsdelivr.net/npm/protobufjs@latest/dist/protobuf.min.js"><\/script>\n')),(0,r.kt)("h2",{id:"getting-started"},"Getting Started"),(0,r.kt)("p",null,"Have a look at the quick start guide and comprehensive tutorials to learn how to build applications using ",(0,r.kt)("inlineCode",{parentName:"p"},"@waku/sdk"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Guide"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/guides/js-waku/light-send-receive"},"Send and Receive Messages Using Light Push and Filter")),(0,r.kt)("td",{parentName:"tr",align:null},"Learn how to send and receive messages on light nodes using the ",(0,r.kt)("a",{parentName:"td",href:"/overview/concepts/protocols#light-push"},"Light Push")," and ",(0,r.kt)("a",{parentName:"td",href:"/overview/concepts/protocols#filter"},"Filter")," protocols")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/guides/js-waku/store-retrieve-messages"},"Retrieve Messages Using Store Protocol")),(0,r.kt)("td",{parentName:"tr",align:null},"Learn how to retrieve and filter historical messages on light nodes using the ",(0,r.kt)("a",{parentName:"td",href:"/overview/concepts/protocols#store"},"Store protocol"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/guides/js-waku/use-waku-create-app"},"Bootstrap DApps Using @waku/create-app")),(0,r.kt)("td",{parentName:"tr",align:null},"Learn how to use the ",(0,r.kt)("a",{parentName:"td",href:"https://www.npmjs.com/package/@waku/create-app"},"@waku/create-app")," package to bootstrap your next ",(0,r.kt)("inlineCode",{parentName:"td"},"@waku/sdk")," project from various example templates")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/guides/js-waku/configure-discovery"},"Bootstrap Nodes and Discover Peers")),(0,r.kt)("td",{parentName:"tr",align:null},"Learn how to bootstrap your node using ",(0,r.kt)("a",{parentName:"td",href:"/overview/concepts/static-peers"},"Static Peers")," and discover peers using ",(0,r.kt)("a",{parentName:"td",href:"/overview/concepts/dns-discovery"},"DNS Discovery"))))),(0,r.kt)("h2",{id:"get-help-and-report-issues"},"Get Help and Report Issues"),(0,r.kt)("p",null,"To engage in general discussions, seek assistance, or stay updated with the latest news, visit the ",(0,r.kt)("inlineCode",{parentName:"p"},"#support")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"#js-waku-contribute")," channels on the ",(0,r.kt)("a",{parentName:"p",href:"https://discord.waku.org"},"Waku Discord"),"."),(0,r.kt)("p",null,"If you discover bugs or want to suggest new features, do not hesitate to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/waku-org/js-waku/issues/new/"},"open an issue")," in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/waku-org/js-waku"},"js-waku repository"),". Your feedback and contributions are highly valued and will help improve the ",(0,r.kt)("inlineCode",{parentName:"p"},"@waku/sdk")," package."))}k.isMDXComponent=!0}}]);