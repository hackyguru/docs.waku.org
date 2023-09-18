"use strict";(self.webpackChunkwaku_guide=self.webpackChunkwaku_guide||[]).push([[9074],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>f});var o=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=o.createContext({}),u=function(e){var n=o.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},s=function(e){var n=u(e.components);return o.createElement(p.Provider,{value:n},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(t),m=a,f=d["".concat(p,".").concat(m)]||d[m]||c[m]||i;return t?o.createElement(f,r(r({ref:n},s),{},{components:t})):o.createElement(f,r({ref:n},s))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,r=new Array(i);r[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[d]="string"==typeof e?e:a,r[1]=l;for(var u=2;u<i;u++)r[u]=t[u];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8038:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var o=t(87462),a=(t(67294),t(3905));const i={title:"Node Configuration Methods"},r=void 0,l={unversionedId:"guides/reference/node-config-methods",id:"guides/reference/node-config-methods",title:"Node Configuration Methods",description:"Waku nodes can be configured using a combination of the following methods:",source:"@site/docs/guides/reference/node-config-methods.md",sourceDirName:"guides/reference",slug:"/guides/reference/node-config-methods",permalink:"/guides/reference/node-config-methods",draft:!1,editUrl:"https://github.com/waku-org/docs.waku.org/tree/develop/docs/guides/reference/node-config-methods.md",tags:[],version:"current",lastUpdatedAt:1690918744,formattedLastUpdatedAt:"1 Aug 2023",frontMatter:{title:"Node Configuration Methods"},sidebar:"guides",previous:{title:"How to Debug Your Waku DApp and WebSocket",permalink:"/guides/js-waku/debug-waku-dapp"},next:{title:"Node Configuration Options",permalink:"/guides/reference/node-config-options"}},p={},u=[{value:"Command Line Options",id:"command-line-options",level:2},{value:"Environment Variables",id:"environment-variables",level:2},{value:"Configuration Files",id:"configuration-files",level:2},{value:"Default Configuration Values",id:"default-configuration-values",level:2}],s={toc:u},d="wrapper";function c(e){let{components:n,...t}=e;return(0,a.kt)(d,(0,o.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Waku nodes can be configured using a combination of the following methods:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Command line options and flags"),(0,a.kt)("li",{parentName:"ol"},"Environment variables"),(0,a.kt)("li",{parentName:"ol"},"TOML configuration files (currently the only supported format)"),(0,a.kt)("li",{parentName:"ol"},"Default values")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Take note of the precedence order: Each configuration method overrides the one below it (e.g., command line options override environment variables and configuration files).")),(0,a.kt)("h2",{id:"command-line-options"},"Command Line Options"),(0,a.kt)("p",null,"Node configuration is primarily done using command line options, which override other methods. Specify ",(0,a.kt)("a",{parentName:"p",href:"/guides/reference/node-config-options"},"configuration options")," by providing them in this format after the binary name:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"./build/wakunode2 --tcp-port=65000\n")),(0,a.kt)("p",null,"When running your node with Docker, provide the command line options after the image name in this format:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker run statusteam/nim-waku --tcp-port=65000\n")),(0,a.kt)("h2",{id:"environment-variables"},"Environment Variables"),(0,a.kt)("p",null,"Nodes can be configured using environment variables by prefixing the variable name with ",(0,a.kt)("inlineCode",{parentName:"p"},"WAKUNODE2_")," and using the configuration option in ",(0,a.kt)("a",{parentName:"p",href:"https://en.wiktionary.org/wiki/screaming_snake_case"},"SCREAMING_SNAKE_CASE")," format."),(0,a.kt)("p",null,"To set the ",(0,a.kt)("inlineCode",{parentName:"p"},"tcp-port")," configuration, the ",(0,a.kt)("inlineCode",{parentName:"p"},"wakunode2")," binary should be called in this format:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"WAKUNODE2_TCP_PORT=65000 ./build/wakunode2\n")),(0,a.kt)("p",null,"When running your node with Docker, start the node using the ",(0,a.kt)("inlineCode",{parentName:"p"},"-e")," command option:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'docker run -e "WAKUNODE2_TCP_PORT=65000" statusteam/nim-waku\n')),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"This is the second configuration method in order of precedence. ",(0,a.kt)("a",{parentName:"p",href:"#command-line-options"},"Command Line Options")," override environment variables.")),(0,a.kt)("h2",{id:"configuration-files"},"Configuration Files"),(0,a.kt)("p",null,"Nodes can be configured using a configuration file following the ",(0,a.kt)("a",{parentName:"p",href:"https://toml.io/en/"},"TOML")," format:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml",metastring:'title="TOML Config File" showLineNumbers',title:'"TOML',Config:!0,'File"':!0,showLineNumbers:!0},'log-level = "DEBUG"\ntcp-port = 65000\ntopic = ["/waku/2/default-waku/proto"]\nmetrics-logging = false\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"config-file")," ",(0,a.kt)("a",{parentName:"p",href:"/guides/reference/node-config-options"},"configuration option")," lets you specify the configuration file path:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"./build/wakunode2 --config-file=[TOML CONFIGURATION FILE]\n")),(0,a.kt)("p",null,"You can also specify the configuration file via environment variables:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'# Using environment variables\nWAKUNODE2_CONFIG_FILE=[TOML CONFIGURATION FILE] ./build/wakunode2\n\n# Using environment variables with Docker\ndocker run -e "WAKUNODE2_CONFIG_FILE=[TOML CONFIGURATION FILE]" statusteam/nim-waku\n')),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"This is the third configuration method in order of precedence. ",(0,a.kt)("a",{parentName:"p",href:"#command-line-options"},"Command Line Options")," and ",(0,a.kt)("a",{parentName:"p",href:"#environment-variables"},"Environment Variables")," override configuration files.")),(0,a.kt)("h2",{id:"default-configuration-values"},"Default Configuration Values"),(0,a.kt)("p",null,"The default configuration is used when no other options are specified. By default, a ",(0,a.kt)("inlineCode",{parentName:"p"},"nwaku")," node does the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Generate a new ",(0,a.kt)("inlineCode",{parentName:"li"},"Node Key")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"PeerID"),"."),(0,a.kt)("li",{parentName:"ul"},"Listen for incoming libp2p connections on the default TCP port (",(0,a.kt)("inlineCode",{parentName:"li"},"60000"),")."),(0,a.kt)("li",{parentName:"ul"},"Subscribe to the default Pub/Sub topic (",(0,a.kt)("inlineCode",{parentName:"li"},"/waku/2/default-waku/proto"),")."),(0,a.kt)("li",{parentName:"ul"},"Start the ",(0,a.kt)("inlineCode",{parentName:"li"},"JSON-RPC")," server on the default port (",(0,a.kt)("inlineCode",{parentName:"li"},"8545"),")."),(0,a.kt)("li",{parentName:"ul"},"Enable the ",(0,a.kt)("inlineCode",{parentName:"li"},"Relay")," protocol for relaying messages."),(0,a.kt)("li",{parentName:"ul"},"Enable the ",(0,a.kt)("inlineCode",{parentName:"li"},"Store")," protocol as a client, allowing it to query peers for historical messages but not store any message itself.")),(0,a.kt)("p",null,"To see the default values of all ",(0,a.kt)("a",{parentName:"p",href:"/guides/reference/node-config-options"},"configuration options"),", run ",(0,a.kt)("inlineCode",{parentName:"p"},"wakunode2 --help"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"./build/wakunode2 --help\n")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"To explore the available node configuration options, have a look at the ",(0,a.kt)("a",{parentName:"p",href:"/guides/reference/node-config-options"},"Node Configuration Options")," guide.")))}c.isMDXComponent=!0}}]);