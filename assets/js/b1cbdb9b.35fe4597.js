"use strict";(self.webpackChunkwaku_guide=self.webpackChunkwaku_guide||[]).push([[165],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),k=r,m=p["".concat(l,".").concat(k)]||p[k]||d[k]||o;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=k;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},49094:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const o={title:"Quick Start",date:new Date("2021-12-09T13:00:00.000Z"),weight:20},i="Quick Start",s={unversionedId:"clients/js-waku/quick-start",id:"clients/js-waku/quick-start",title:"Quick Start",description:"In this guide, you will learn how to integrate Waku into an existing JavaScript project.",source:"@site/docs/clients/js-waku/quick-start.mdx",sourceDirName:"clients/js-waku",slug:"/clients/js-waku/quick-start",permalink:"/clients/js-waku/quick-start",draft:!1,editUrl:"https://github.com/waku-org/docs.waku.org/tree/develop/docs/clients/js-waku/quick-start.mdx",tags:[],version:"current",lastUpdatedAt:1685729228,formattedLastUpdatedAt:"Jun 2, 2023",frontMatter:{title:"Quick Start",date:"2021-12-09T13:00:00.000Z",weight:20}},l={},u=[{value:"1. Install Waku Libraries",id:"1-install-waku-libraries",level:2},{value:"2. Start a Waku Node",id:"2-start-a-waku-node",level:2},{value:"3. Wait for Connection to be Established",id:"3-wait-for-connection-to-be-established",level:2},{value:"4. Define a Content Topic",id:"4-define-a-content-topic",level:2},{value:"5. Create a Decoder",id:"5-create-a-decoder",level:2},{value:"6. Listen for Incoming Messages",id:"6-listen-for-incoming-messages",level:2},{value:"7. Send Messages",id:"7-send-messages",level:2},{value:"Conclusion",id:"conclusion",level:2}],c={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"quick-start"},"Quick Start"),(0,r.kt)("p",null,"In this guide, you will learn how to integrate Waku into an ",(0,r.kt)("strong",{parentName:"p"},"existing")," JavaScript project.\nIf you're looking to build a Waku app from scratch, check out our ",(0,r.kt)("a",{parentName:"p",href:"./build-chat-app"},"Build a Chat App")," guide."),(0,r.kt)("h2",{id:"1-install-waku-libraries"},"1. Install Waku Libraries"),(0,r.kt)("p",null,"To begin, install the required Waku libraries with the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm i @waku/core @waku/create @waku/utils\n")),(0,r.kt)("h2",{id:"2-start-a-waku-node"},"2. Start a Waku Node"),(0,r.kt)("p",null,"Next, create and start a Waku Node:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import {createLightNode} from "@waku/create"\n\nconst waku = await createLightNode({defaultBootstrap: true})\nawait waku.start()\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Setting the ",(0,r.kt)("inlineCode",{parentName:"p"},"defaultBootstrap")," option to true allows your Waku node to connect to a set of pre-defined nodes.")),(0,r.kt)("h2",{id:"3-wait-for-connection-to-be-established"},"3. Wait for Connection to be Established"),(0,r.kt)("p",null,"Your Waku node needs to connect to a remote node in order to access the network.\nTo wait for this, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"waitForRemotePeer")," function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import * as waku from "@waku/core"\n\nawait waku.waitForRemotePeer(wakuNode)\n')),(0,r.kt)("h2",{id:"4-define-a-content-topic"},"4. Define a Content Topic"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"contentTopic")," is a metadata ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," used for categorizing messages on the Waku Network.\nDepending on your use case, you can create one or more new ",(0,r.kt)("inlineCode",{parentName:"p"},"contentTopic"),"(s).\nRefer to our ",(0,r.kt)("a",{parentName:"p",href:"/"},"How to Choose a Content Topic")," guide more details."),(0,r.kt)("p",null,"For this guide, we'll use ",(0,r.kt)("inlineCode",{parentName:"p"},"/quick-start/1/message/utf8"),".\nNote that our payload will be encoded using ",(0,r.kt)("inlineCode",{parentName:"p"},"utf-8"),".\nWe recommended using Protobuf for production purposes."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const contentTopic = `/quick-start/1/message/utf8`\n")),(0,r.kt)("h2",{id:"5-create-a-decoder"},"5. Create a Decoder"),(0,r.kt)("p",null,"Waku supports various encryption protocols.\nA decoder allows you to specify the content topic to use and how to decrypt messages.\nFor the chosen content topic, create a plain text decoder (without encryption):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const decoder = waku.createDecoder(contentTopic)\n")),(0,r.kt)("h2",{id:"6-listen-for-incoming-messages"},"6. Listen for Incoming Messages"),(0,r.kt)("p",null,"Messages sent over the network are ",(0,r.kt)("inlineCode",{parentName:"p"},"Waku Message"),"s,\nas defined in the ",(0,r.kt)("a",{parentName:"p",href:"https://rfc.vac.dev/spec/14/#wire-format"},"14/WAKU2-MESSAGE")," RFC."),(0,r.kt)("p",null,"Messages returned by the plain text decoder implement the ",(0,r.kt)("a",{parentName:"p",href:"https://js.waku.org/classes/_waku_core.DecodedMessage.html"},(0,r.kt)("inlineCode",{parentName:"a"},"DecodedMessage"))," interface."),(0,r.kt)("p",null,"For now, we will just use the ",(0,r.kt)("inlineCode",{parentName:"p"},"payload")," field.\nIt is a byte array field that can be used to encode any data.\nWe will store messages as a ",(0,r.kt)("inlineCode",{parentName:"p"},"utf-8")," string."),(0,r.kt)("p",null,"To listen for messages using the decoder, use the following code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"\nwakuNode.filter.subscribe([decoder], (message) => {\n    const str = utils.bytesToUtf8(message.payload)\n    // str is a string, render it in your app as desired\n})\n")),(0,r.kt)("h2",{id:"7-send-messages"},"7. Send Messages"),(0,r.kt)("p",null,"Finally, create a ",(0,r.kt)("inlineCode",{parentName:"p"},"sendMessage")," function that sends messages over Waku:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import * as utils from "@waku/utils"\n\nconst encoder = waku.createEncoder(contentTopic)\n\nconst sendMessage = async (textMsg) => {\n    await wakuNode.lightPush.push(encoder, {\n        payload: utils.utf8ToBytes(textMsg),\n    });\n};\n')),(0,r.kt)("p",null,"Now, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"sendMessage")," function in your app to send messages."),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"Congratulations! You've successfully added decentralized communication features to your app."),(0,r.kt)("p",null,"Continue learning by exploring how to ",(0,r.kt)("a",{parentName:"p",href:"./build-chat-app"},"build a chat app")," from scratch using Waku."))}d.isMDXComponent=!0}}]);