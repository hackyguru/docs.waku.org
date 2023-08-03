"use strict";(self.webpackChunkwaku_guide=self.webpackChunkwaku_guide||[]).push([[683],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},l=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=c(n),g=o,m=u["".concat(p,".").concat(g)]||u[g]||d[g]||s;return n?a.createElement(m,r(r({ref:t},l),{},{components:n})):a.createElement(m,r({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,r=new Array(s);r[0]=g;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:o,r[1]=i;for(var c=2;c<s;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},56804:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var a=n(87462),o=(n(67294),n(3905));const s={title:"Send and Receive Messages Using Light Push and Filter"},r=void 0,i={unversionedId:"guides/js-waku/light-send-receive",id:"guides/js-waku/light-send-receive",title:"Send and Receive Messages Using Light Push and Filter",description:"This guide provides detailed steps to start using the @waku/sdk package by setting up a Light Node to send messages using the Light Push protocol, and receive messages using the Filter protocol. Have a look at the installation guide for steps on adding @waku/sdk to your project.",source:"@site/docs/guides/js-waku/light-send-receive.md",sourceDirName:"guides/js-waku",slug:"/guides/js-waku/light-send-receive",permalink:"/guides/js-waku/light-send-receive",draft:!1,editUrl:"https://github.com/waku-org/docs.waku.org/tree/develop/docs/guides/js-waku/light-send-receive.md",tags:[],version:"current",lastUpdatedAt:1691041257,formattedLastUpdatedAt:"3 Aug 2023",frontMatter:{title:"Send and Receive Messages Using Light Push and Filter"},sidebar:"guides",previous:{title:"JavaScript Waku SDK",permalink:"/guides/js-waku/"},next:{title:"Retrieve Messages Using Store Protocol",permalink:"/guides/js-waku/store-retrieve-messages"}},p={},c=[{value:"Create a Light Node",id:"create-a-light-node",level:2},{value:"Connect to Remote Peers",id:"connect-to-remote-peers",level:2},{value:"Choose a Content Topic",id:"choose-a-content-topic",level:2},{value:"Create a Message Structure",id:"create-a-message-structure",level:2},{value:"Send Messages Using Light Push",id:"send-messages-using-light-push",level:2},{value:"Receive Messages Using Filter",id:"receive-messages-using-filter",level:2}],l={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This guide provides detailed steps to start using the ",(0,o.kt)("inlineCode",{parentName:"p"},"@waku/sdk")," package by setting up a Light Node to send messages using the ",(0,o.kt)("a",{parentName:"p",href:"/overview/concepts/protocols#light-push"},"Light Push protocol"),", and receive messages using the ",(0,o.kt)("a",{parentName:"p",href:"/overview/concepts/protocols#filter"},"Filter protocol"),". Have a look at the ",(0,o.kt)("a",{parentName:"p",href:"/guides/js-waku/#installation"},"installation guide")," for steps on adding ",(0,o.kt)("inlineCode",{parentName:"p"},"@waku/sdk")," to your project."),(0,o.kt)("h2",{id:"create-a-light-node"},"Create a Light Node"),(0,o.kt)("p",null,"Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"createLightNode()")," function to create a ",(0,o.kt)("inlineCode",{parentName:"p"},"Light Node")," and interact with the Waku Network:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import { createLightNode } from "@waku/sdk";\n\n// Create and start a Light Node\nconst node = await createLightNode({ defaultBootstrap: true });\nawait node.start();\n\n// Use the stop() function to stop a running node\n// await node.stop();\n')),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"When the ",(0,o.kt)("inlineCode",{parentName:"p"},"defaultBootstrap")," option is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),", your node will be bootstrapped using the ",(0,o.kt)("a",{parentName:"p",href:"/guides/js-waku/configure-discovery#default-bootstrap-method"},"default bootstrap method"),". Have a look at the ",(0,o.kt)("a",{parentName:"p",href:"/guides/js-waku/configure-discovery"},"Bootstrap Nodes and Discover Peers")," guide to learn more methods to bootstrap nodes.")),(0,o.kt)("h2",{id:"connect-to-remote-peers"},"Connect to Remote Peers"),(0,o.kt)("p",null,"Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"waitForRemotePeer()")," function to wait for the node to connect with peers on the Waku Network:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import { waitForRemotePeer } from "@waku/sdk";\n\n// Wait for a successful peer connection\nawait waitForRemotePeer(node);\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"protocols")," option allows you to specify the ",(0,o.kt)("a",{parentName:"p",href:"/overview/concepts/protocols"},"protocols")," that the remote peers should have enabled:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import { waitForRemotePeer, Protocols } from "@waku/sdk";\n\n// Wait for peer connections with specific protocols\nawait waitForRemotePeer(node, [\n    Protocols.LightPush,\n    Protocols.Filter,\n]);\n')),(0,o.kt)("h2",{id:"choose-a-content-topic"},"Choose a Content Topic"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/overview/concepts/content-topics"},"Choose a content topic")," for your application and create a message ",(0,o.kt)("inlineCode",{parentName:"p"},"encoder")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"decoder"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import { createEncoder, createDecoder } from "@waku/sdk";\n\n// Choose a content topic\nconst contentTopic = "/light-guide/1/message/proto";\n\n// Create a message encoder and decoder\nconst encoder = createEncoder({ contentTopic });\nconst decoder = createDecoder(contentTopic);\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"ephemeral")," option allows you to specify whether your messages should be persisted by ",(0,o.kt)("a",{parentName:"p",href:"/guides/js-waku/store-retrieve-messages"},"Store peers"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const encoder = createEncoder({\n    contentTopic: contentTopic, // message content topic\n    ephemeral: true, // allows messages to be stored or not\n});\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"In this example, users send and receive messages on a shared content topic. However, real applications may have users broadcasting messages while others listen or only have 1:1 exchanges. Waku supports all these use cases.")),(0,o.kt)("h2",{id:"create-a-message-structure"},"Create a Message Structure"),(0,o.kt)("p",null,"Create your application's message structure using ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/protobufjs/protobuf.js#usage"},"Protobuf's valid message")," fields:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import protobuf from "protobufjs";\n\n// Create a message structure using Protobuf\nconst ChatMessage = new protobuf.Type("ChatMessage")\n    .add(new protobuf.Field("timestamp", 1, "uint64"))\n    .add(new protobuf.Field("sender", 2, "string"))\n    .add(new protobuf.Field("message", 3, "string"));\n')),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Have a look at the ",(0,o.kt)("a",{parentName:"p",href:"/guides/js-waku/#message-structure"},"Protobuf installation")," guide for adding the ",(0,o.kt)("inlineCode",{parentName:"p"},"protobufjs")," package to your project.")),(0,o.kt)("h2",{id:"send-messages-using-light-push"},"Send Messages Using Light Push"),(0,o.kt)("p",null,"To send messages over the Waku Network using the ",(0,o.kt)("inlineCode",{parentName:"p"},"Light Push")," protocol, create a new message object and use the ",(0,o.kt)("inlineCode",{parentName:"p"},"lightPush.send()")," function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'// Create a new message object\nconst protoMessage = ChatMessage.create({\n    timestamp: Date.now(),\n    sender: "Alice",\n    message: "Hello, World!",\n});\n\n// Serialise the message using Protobuf\nconst serialisedMessage = ChatMessage.encode(protoMessage).finish();\n\n// Send the message using Light Push\nawait node.lightPush.send(encoder, {\n    payload: serialisedMessage,\n});\n')),(0,o.kt)("h2",{id:"receive-messages-using-filter"},"Receive Messages Using Filter"),(0,o.kt)("p",null,"To receive messages using the ",(0,o.kt)("inlineCode",{parentName:"p"},"Filter")," protocol, create a callback function for message processing, then use the ",(0,o.kt)("inlineCode",{parentName:"p"},"filter.subscribe()")," function to subscribe to a ",(0,o.kt)("inlineCode",{parentName:"p"},"content topic"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Create the callback function\nconst callback = (wakuMessage) => {\n    // Check if there is a payload on the message\n    if (!wakuMessage.payload) return;\n    // Render the messageObj as desired in your application\n    const messageObj = ChatMessage.decode(wakuMessage.payload);\n    console.log(messageObj);\n};\n\n// Subscribe to content topics and display new messages\nconst unsubscribe = await node.filter.subscribe([decoder], callback);\n\n// Use the unsubscribe() function to stop receiving messages\n// await unsubscribe();\n")),(0,o.kt)("admonition",{title:"Congratulations!",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You have successfully sent and received messages over the Waku Network using the ",(0,o.kt)("inlineCode",{parentName:"p"},"Light Push")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Filter")," protocols. Have a look at the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/waku-org/js-waku-examples/tree/master/examples/light-js"},"light-js")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/waku-org/js-waku-examples/tree/master/examples/light-chat"},"light-chat")," examples for working demos.")))}d.isMDXComponent=!0}}]);