"use strict";(self.webpackChunkwaku_guide=self.webpackChunkwaku_guide||[]).push([[669],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var a=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=s,g=u["".concat(l,".").concat(m)]||u[m]||c[m]||o;return n?a.createElement(g,r(r({ref:t},d),{},{components:n})):a.createElement(g,r({ref:t},d))}));function g(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,r=new Array(o);r[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:s,r[1]=i;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},13805:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(87462),s=(n(67294),n(3905));const o={title:"Build a Chat App"},r="Build a Chat App",i={unversionedId:"clients/js-waku/build-chat-app",id:"clients/js-waku/build-chat-app",title:"Build a Chat App",description:"In this guide, you will learn how to receive and send messages using Waku by building an app from scratch.",source:"@site/docs/clients/js-waku/build-chat-app.mdx",sourceDirName:"clients/js-waku",slug:"/clients/js-waku/build-chat-app",permalink:"/clients/js-waku/build-chat-app",draft:!1,editUrl:"https://github.com/waku-org/docs.waku.org/tree/develop/docs/clients/js-waku/build-chat-app.mdx",tags:[],version:"current",lastUpdatedAt:1685729228,formattedLastUpdatedAt:"Jun 2, 2023",frontMatter:{title:"Build a Chat App"}},l={},p=[{value:"Pre-Requisites",id:"pre-requisites",level:2},{value:"1. Set up Project",id:"1-set-up-project",level:3},{value:"2. Set up Web Server",id:"2-set-up-web-server",level:3},{value:"3. Create Files",id:"3-create-files",level:3},{value:"Write Your App",id:"write-your-app",level:2},{value:"1. Add HTML Elements",id:"1-add-html-elements",level:2},{value:"2. Access HTML Elements",id:"2-access-html-elements",level:2},{value:"3. Start a Waku Node",id:"3-start-a-waku-node",level:2},{value:"4. Wait for Connection to be Established",id:"4-wait-for-connection-to-be-established",level:2},{value:"5. Define a Content Topic",id:"5-define-a-content-topic",level:2},{value:"6. Render Incoming Messages",id:"6-render-incoming-messages",level:2},{value:"7. Create a Decoder",id:"7-create-a-decoder",level:2},{value:"8. Listen for Incoming Messages",id:"8-listen-for-incoming-messages",level:2},{value:"9. Send Messages",id:"9-send-messages",level:2},{value:"10. Run the App",id:"10-run-the-app",level:3},{value:"Conclusion",id:"conclusion",level:2}],d={toc:p},u="wrapper";function c(e){let{components:t,...n}=e;return(0,s.kt)(u,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"build-a-chat-app"},"Build a Chat App"),(0,s.kt)("p",null,"In this guide, you will learn how to receive and send messages using Waku by building an app from scratch.\nIf you want to learn how to add Waku to an existing app, check the ",(0,s.kt)("a",{parentName:"p",href:"./quick-start"},"Quick Start")," guide."),(0,s.kt)("h2",{id:"pre-requisites"},"Pre-Requisites"),(0,s.kt)("h3",{id:"1-set-up-project"},"1. Set up Project"),(0,s.kt)("p",null,"Setup a new npm package:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"mkdir waku-app\ncd waku-app\nnpm init -y\n")),(0,s.kt)("h3",{id:"2-set-up-web-server"},"2. Set up Web Server"),(0,s.kt)("p",null,"Use the ",(0,s.kt)("inlineCode",{parentName:"p"},"serve")," package as a web server"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"npm i -D serve\n")),(0,s.kt)("p",null,"Add a ",(0,s.kt)("inlineCode",{parentName:"p"},"start")," script to the ",(0,s.kt)("inlineCode",{parentName:"p"},"package.json")," file:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "start": "serve ."\n  }\n}\n')),(0,s.kt)("h3",{id:"3-create-files"},"3. Create Files"),(0,s.kt)("p",null,"Finally, create empty files for your project:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"touch index.html index.js\n")),(0,s.kt)("h2",{id:"write-your-app"},"Write Your App"),(0,s.kt)("h2",{id:"1-add-html-elements"},"1. Add HTML Elements"),(0,s.kt)("p",null,"In ",(0,s.kt)("inlineCode",{parentName:"p"},"index.html"),", add a button, text box and ",(0,s.kt)("inlineCode",{parentName:"p"},"div")," for messages to have a basic chat app.\nAlso, import the ",(0,s.kt)("inlineCode",{parentName:"p"},"index.js")," file."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-html",metastring:"title=index.html",title:"index.html"},'<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8"/>\n    <meta content="width=device-width, initial-scale=1.0" name="viewport"/>\n    <title>Waku Chat App</title>\n</head>\n<body>\n<label for="textInput">Message text</label>\n<input id="textInput" placeholder="Type your message here" type="text"/>\n<button disabled id="send" type="button">\n    Send message using Light Push\n</button>\n<br/>\n<div id="messages"></div>\n<script src="./index.js" type="module"><\/script>\n</body>\n</html>\n')),(0,s.kt)("h2",{id:"2-access-html-elements"},"2. Access HTML Elements"),(0,s.kt)("p",null,"::: note"),(0,s.kt)("p",null,"From now on, all changes need to be done in the ",(0,s.kt)("inlineCode",{parentName:"p"},"index.js")," file."),(0,s.kt)("p",null,":::"),(0,s.kt)("p",null,"Initialize variables to easily modify the HTML content:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'const sendButton = document.getElementById("send")\nconst messagesDiv = document.getElementById("messages")\nconst textInput = document.getElementById("textInput")\n')),(0,s.kt)("h2",{id:"3-start-a-waku-node"},"3. Start a Waku Node"),(0,s.kt)("p",null,"Create and start a Waku Node:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'import {createLightNode} from "https://unpkg.com/@waku/create@0.0.12/bundle/index.js"\n\nconst wakuNode = await createLightNode({defaultBootstrap: true})\nawait wakuNode.start()\n')),(0,s.kt)("admonition",{type:"info"},(0,s.kt)("p",{parentName:"admonition"},"Setting the ",(0,s.kt)("inlineCode",{parentName:"p"},"defaultBootstrap")," option to true allows your Waku node to connect to a set of pre-defined nodes.")),(0,s.kt)("h2",{id:"4-wait-for-connection-to-be-established"},"4. Wait for Connection to be Established"),(0,s.kt)("p",null,"Your Waku node needs to connect to a remote node in order to access the network.\nTo wait for this, use the ",(0,s.kt)("inlineCode",{parentName:"p"},"waitForRemotePeer")," function:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'import * as waku from "https://unpkg.com/@waku/core@0.0.16/bundle/index.js"\n\nawait waku.waitForRemotePeer(wakuNode)\n')),(0,s.kt)("h2",{id:"5-define-a-content-topic"},"5. Define a Content Topic"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"contentTopic")," is a metadata ",(0,s.kt)("inlineCode",{parentName:"p"},"string")," used for categorizing messages on the Waku Network.\nDepending on your use case, you can create one or more new ",(0,s.kt)("inlineCode",{parentName:"p"},"contentTopic"),"(s).\nRefer to our ",(0,s.kt)("a",{parentName:"p",href:"/"},"How to Choose a Content Topic")," guide more details."),(0,s.kt)("p",null,"For this guide, we'll use ",(0,s.kt)("inlineCode",{parentName:"p"},"/chat-app-guide/1/message/utf8"),".\nNote that our payload will be encoded using ",(0,s.kt)("inlineCode",{parentName:"p"},"utf-8"),".\nWe recommended using Protobuf for production purposes."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const contentTopic = `/chat-app-guide/1/message/utf8`\n")),(0,s.kt)("h2",{id:"6-render-incoming-messages"},"6. Render Incoming Messages"),(0,s.kt)("p",null,"Let's store incoming messages in an array and create a function to render them in the ",(0,s.kt)("inlineCode",{parentName:"p"},"messages")," div:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'const updateMessages = (msgs, div) => {\n    div.innerHTML = "<ul>"\n    msgs.forEach((msg) => (div.innerHTML += `<li>${msg}</li>`))\n    div.innerHTML += "</ul>"\n}\n\nconst messages = []\n')),(0,s.kt)("h2",{id:"7-create-a-decoder"},"7. Create a Decoder"),(0,s.kt)("p",null,"Waku supports various encryption protocols.\nA decoder allows you to specify the content topic to use and how to decrypt messages.\nFor the chosen content topic, create a plain text decoder (without encryption):"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const decoder = waku.createDecoder(contentTopic)\n")),(0,s.kt)("h2",{id:"8-listen-for-incoming-messages"},"8. Listen for Incoming Messages"),(0,s.kt)("p",null,"Messages sent over the network are ",(0,s.kt)("inlineCode",{parentName:"p"},"Waku Message"),"s,\nas defined in the ",(0,s.kt)("a",{parentName:"p",href:"https://rfc.vac.dev/spec/14/#wire-format"},"14/WAKU2-MESSAGE")," RFC."),(0,s.kt)("p",null,"Messages returned by the plain text decoder implement the ",(0,s.kt)("a",{parentName:"p",href:"https://js.waku.org/classes/_waku_core.DecodedMessage.html"},(0,s.kt)("inlineCode",{parentName:"a"},"DecodedMessage"))," interface."),(0,s.kt)("p",null,"For now, we will just use the ",(0,s.kt)("inlineCode",{parentName:"p"},"payload")," field.\nIt is a byte array field that can be used to encode any data.\nWe will store messages as a ",(0,s.kt)("inlineCode",{parentName:"p"},"utf-8")," string."),(0,s.kt)("p",null,"Listen to messages using the decoder and add them to the ",(0,s.kt)("inlineCode",{parentName:"p"},"messages")," div upon reception:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},'import * as utils from "https://unpkg.com/@waku/utils@0.0.4/bundle/bytes.js"\n\nwakuNode.filter.subscribe([decoder], (message) => {\n    const str = utils.bytesToUtf8(message.payload)\n    messages.push(str)\n    updateMessages(messages, messagesDiv);\n})\n')),(0,s.kt)("h2",{id:"9-send-messages"},"9. Send Messages"),(0,s.kt)("p",null,"Finally, create a plain text encoder and set up the ",(0,s.kt)("inlineCode",{parentName:"p"},"send")," button to send messages.\nUsers will be able to enter the message using the ",(0,s.kt)("inlineCode",{parentName:"p"},"textInput")," div."),(0,s.kt)("p",null,"Once done, we can enable the ",(0,s.kt)("inlineCode",{parentName:"p"},"send")," button."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"const encoder = waku.createEncoder({contentTopic})\n\nsendButton.onclick = async () => {\n    const text = textInput.value\n\n    await wakuNode.lightPush.send(encoder, {\n        payload: utils.utf8ToBytes(text),\n    });\n    textInput.value = null\n};\nsendButton.disabled = false\n")),(0,s.kt)("h3",{id:"10-run-the-app"},"10. Run the App"),(0,s.kt)("p",null,"You can now start a local web server to run the app:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"npm start\n")),(0,s.kt)("p",null,"Click on the link in the console (http://localhost:3000/) and send a message!\nYou can open your app in several tabs to see messages being sent around."),(0,s.kt)("h2",{id:"conclusion"},"Conclusion"),(0,s.kt)("p",null,"Congratulations on building your first Waku chat app. You can find the complete files below:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-html",metastring:"title=index.html",title:"index.html"},'<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8"/>\n    <meta content="width=device-width, initial-scale=1.0" name="viewport"/>\n    <title>JS-Waku Quick Start App</title>\n</head>\n<body>\n<label for="textInput">Message text</label>\n<input id="textInput" placeholder="Type your message here" type="text"/>\n<button disabled id="send" type="button">\n    Send message using Light Push\n</button>\n<br/>\n<div id="messages"></div>\n<script src="./index.js" type="module"><\/script>\n</body>\n</html>\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=index.js",title:"index.js"},'import {createLightNode} from "https://unpkg.com/@waku/create@0.0.12/bundle/index.js"\nimport * as waku from "https://unpkg.com/@waku/core@0.0.16/bundle/index.js"\nimport * as utils from "https://unpkg.com/@waku/utils@0.0.4/bundle/bytes.js"\n\nconst sendButton = document.getElementById("send")\nconst messagesDiv = document.getElementById("messages")\nconst textInput = document.getElementById("textInput")\n\nconst wakuNode = await createLightNode({defaultBootstrap: true})\nawait wakuNode.start()\n\nawait waku.waitForRemotePeer(wakuNode)\n\nconst contentTopic = `/chat-app-guide/1/message/utf8`\n\nconst updateMessages = (msgs, div) => {\n    div.innerHTML = "<ul>"\n    msgs.forEach((msg) => (div.innerHTML += `<li>${msg}</li>`))\n    div.innerHTML += "</ul>"\n}\n\nconst messages = []\n\nconst decoder = waku.createDecoder(contentTopic)\n\nwakuNode.filter.subscribe([decoder], (message) => {\n    console.log("message received", message)\n    const str = utils.bytesToUtf8(message.payload)\n    messages.push(str)\n    updateMessages(messages, messagesDiv);\n})\n\nconst encoder = waku.createEncoder({contentTopic})\n\nsendButton.onclick = async () => {\n    const text = textInput.value\n\n    await wakuNode.lightPush.send(encoder, {\n        payload: utils.utf8ToBytes(text),\n    })\n    textInput.value = null\n}\nsendButton.disabled = false\n')))}c.isMDXComponent=!0}}]);