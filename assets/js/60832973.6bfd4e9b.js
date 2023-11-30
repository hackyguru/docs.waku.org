"use strict";(self.webpackChunkwaku_guide=self.webpackChunkwaku_guide||[]).push([[304],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,k=d["".concat(s,".").concat(m)]||d[m]||c[m]||r;return n?a.createElement(k,i(i({ref:t},u),{},{components:n})):a.createElement(k,i({ref:t},u))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},40259:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));const r={title:"Node Configuration Examples",hide_table_of_contents:!0},i=void 0,l={unversionedId:"guides/nwaku/configure-nwaku",id:"guides/nwaku/configure-nwaku",title:"Node Configuration Examples",description:"This guide provides detailed steps to configure a nwaku node for different use cases.",source:"@site/docs/guides/nwaku/configure-nwaku.md",sourceDirName:"guides/nwaku",slug:"/guides/nwaku/configure-nwaku",permalink:"/guides/nwaku/configure-nwaku",draft:!1,editUrl:"https://github.com/waku-org/docs.waku.org/tree/develop/docs/guides/nwaku/configure-nwaku.md",tags:[],version:"current",lastUpdatedAt:1701386927,formattedLastUpdatedAt:"30 Nov 2023",frontMatter:{title:"Node Configuration Examples",hide_table_of_contents:!0},sidebar:"guides",previous:{title:"Configure Peer Discovery",permalink:"/guides/nwaku/configure-discovery"},next:{title:"Node Configuration Methods",permalink:"/guides/nwaku/config-methods"}},s={},p=[{value:"Connect to other peers",id:"connect-to-other-peers",level:2},{value:"Configure a domain name",id:"configure-a-domain-name",level:2},{value:"Configure store protocol and message store",id:"configure-store-protocol-and-message-store",level:2},{value:"Generate and configure a node key",id:"generate-and-configure-a-node-key",level:2},{value:"Configure WebSocket transport",id:"configure-websocket-transport",level:2},{value:"Configure REST API server",id:"configure-rest-api-server",level:2},{value:"Configure filter protocol",id:"configure-filter-protocol",level:2},{value:"Configure light push protocol",id:"configure-light-push-protocol",level:2},{value:"Run nwaku behind a reverse proxy",id:"run-nwaku-behind-a-reverse-proxy",level:2}],u={toc:p},d="wrapper";function c(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This guide provides detailed steps to configure a ",(0,o.kt)("inlineCode",{parentName:"p"},"nwaku")," node for different use cases."),(0,o.kt)("h2",{id:"connect-to-other-peers"},"Connect to other peers"),(0,o.kt)("p",null,"To join the Waku Network, nodes must ",(0,o.kt)("a",{parentName:"p",href:"/learn/glossary#bootstrapping"},"bootstrap")," for an entry point before discovering more peers. Nwaku provides multiple ",(0,o.kt)("a",{parentName:"p",href:"/learn/concepts/peer-discovery"},"peer discovery")," mechanisms:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/guides/nwaku/configure-discovery#configure-static-peers"},"Configure Static Peers")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/guides/nwaku/configure-discovery#configure-dns-discovery"},"Configure DNS Discovery")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/guides/nwaku/configure-discovery#configure-discv5"},"Configure Discv5")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/guides/nwaku/configure-discovery#configure-peer-exchange"},"Configure Peer Exchange"))),(0,o.kt)("h2",{id:"configure-a-domain-name"},"Configure a domain name"),(0,o.kt)("p",null,"You can set up an IPv4 DNS domain name that resolves to the public IPv4 address of a node using the ",(0,o.kt)("inlineCode",{parentName:"p"},"dns4-domain-name")," option. This allows the node's publicly announced multiaddrs to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"/dns4")," scheme."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"./build/wakunode2 --dns4-domain-name=[DOMAIN NAME]\n")),(0,o.kt)("p",null,"For example, consider the domain name ",(0,o.kt)("inlineCode",{parentName:"p"},"nwakunode.com"),", which resolves to a ",(0,o.kt)("inlineCode",{parentName:"p"},"nwaku")," node:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"./build/wakunode2 --dns4-domain-name=nwakunode.com\n")),(0,o.kt)("p",null,"Browser nodes can only connect to nodes with a domain name and secure WebSocket (",(0,o.kt)("inlineCode",{parentName:"p"},"wss"),") configured. These nodes will generate a discoverable ENR with ",(0,o.kt)("inlineCode",{parentName:"p"},"/wss")," as the multiaddr and ",(0,o.kt)("inlineCode",{parentName:"p"},"/dns4")," as the domain name. This configuration is essential for verifying domain certificates when establishing a secure connection."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This example describes configuring a domain name that resolves to your node's IP address and is unrelated to ",(0,o.kt)("a",{parentName:"p",href:"/learn/concepts/dns-discovery"},"DNS Discovery"),".")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can use the domain name provided by your cloud provider to configure the domain name for your node.")),(0,o.kt)("h2",{id:"configure-store-protocol-and-message-store"},"Configure store protocol and message store"),(0,o.kt)("p",null,"To enable message caching and serve them to network peers, enable the ",(0,o.kt)("a",{parentName:"p",href:"/learn/concepts/protocols#store"},"Store protocol")," using the following configuration options:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"store"),": Enables storing messages to serve them to peers (disabled by default)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"store-message-retention-policy"),": Retention policy of the store node (how long messages will be persisted). Three different retention policies are supported:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Time retention policy: ",(0,o.kt)("inlineCode",{parentName:"li"},"time:<duration-in-seconds>")," (e.g., ",(0,o.kt)("inlineCode",{parentName:"li"},"time:14400"),")"),(0,o.kt)("li",{parentName:"ul"},"Capacity retention policy: ",(0,o.kt)("inlineCode",{parentName:"li"},"capacity:<messages-count>")," (e.g, ",(0,o.kt)("inlineCode",{parentName:"li"},"capacity:25000"),")"),(0,o.kt)("li",{parentName:"ul"},"Size retention policy: ",(0,o.kt)("inlineCode",{parentName:"li"},"size:<storage-in-MB/GB>")," (e.g, ",(0,o.kt)("inlineCode",{parentName:"li"},"size:512MB")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"size:10GB"),")"),(0,o.kt)("li",{parentName:"ul"},"Set this option to ",(0,o.kt)("inlineCode",{parentName:"li"},"none")," to disable the retention policy. If you omit this option, it will default to ",(0,o.kt)("inlineCode",{parentName:"li"},"time:172800")," (48 hours)."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"store-message-db-url"),": Database connection URL for persisting messages in the ",(0,o.kt)("a",{parentName:"li",href:"https://docs.sqlalchemy.org/en/20/core/engines.html#database-urls"},"SQLAlchemy database URL format"),". Setting this option to an empty string will instruct the node to use the fallback in-memory message store. If you omit this option, it will default to ",(0,o.kt)("inlineCode",{parentName:"li"},"sqlite://store.sqlite3"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"./build/wakunode2 \\\n  --store=true \\\n  --store-message-retention-policy=[MESSAGE RETENTION POLICY] \\\n  --store-message-db-url=[DATABASE CONNECTION URL]\n")),(0,o.kt)("p",null,"For example, consider a ",(0,o.kt)("inlineCode",{parentName:"p"},"nwaku")," node that is configured to be a ",(0,o.kt)("inlineCode",{parentName:"p"},"Store")," protocol and retain messages received in the last ",(0,o.kt)("inlineCode",{parentName:"p"},"21600")," seconds (6 hours):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"./build/wakunode2 \\\n  --store=true \\\n  --store-message-retention-policy=time:21600 \\\n  --store-message-db-url=sqlite://store.sqlite3\n")),(0,o.kt)("p",null,"You can configure ",(0,o.kt)("inlineCode",{parentName:"p"},"nwaku")," as a ",(0,o.kt)("inlineCode",{parentName:"p"},"Store client")," using the ",(0,o.kt)("inlineCode",{parentName:"p"},"storenode")," option. This allows the node to query peers for historical messages but not store any message itself."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"./build/wakunode2 --storenode=[STORE PEER MULTIADDR]\n")),(0,o.kt)("p",null,"For example, consider a ",(0,o.kt)("inlineCode",{parentName:"p"},"nwaku")," node that does not persist messages but can query peers for historical messages:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"./build/wakunode2 --storenode=/dns4/node-01.ac-cn-hongkong-c.wakuv2.prod.statusim.net/tcp/30303/p2p/16Uiu2HAm4v86W3bmT1BiH6oSPzcsSr24iDQpSN5Qa992BCjjwgrD\n")),(0,o.kt)("h2",{id:"generate-and-configure-a-node-key"},"Generate and configure a node key"),(0,o.kt)("p",null,"Nodes generate ",(0,o.kt)("a",{parentName:"p",href:"/learn/glossary#node-key"},"new random key pairs")," at each boot, leading to different ",(0,o.kt)("inlineCode",{parentName:"p"},"multiaddrs"),". To maintain consistency, you can use a pre-generated private key with the ",(0,o.kt)("inlineCode",{parentName:"p"},"nodekey")," option:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"./build/wakunode2 --nodekey=[NODE PRIVATE KEY]\n")),(0,o.kt)("p",null,"This option takes a ",(0,o.kt)("a",{parentName:"p",href:"https://en.bitcoin.it/wiki/Secp256k1"},"Secp256k1")," private key (64-char hex string). On Linux, you can use the OpenSSL ",(0,o.kt)("inlineCode",{parentName:"p"},"rand")," command for a pseudo-random 32-byte hex string:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"openssl rand -hex 32\n\n# 286cae9f2990bfc49dafdd3a9e737f56ddba3656e5e427108cef456fb67680e8\n")),(0,o.kt)("p",null,"On Linux, you can create a reusable key file using OpenSSL. To get the 32-byte private key in hex format, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"ecparam")," command and some standard utilities:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# Generate key file\nopenssl ecparam -genkey -name secp256k1 -out my_private_key.pem\n\n# Extract 32-byte private key\nopenssl ec -in my_private_key.pem -outform DER | tail -c +8 | head -c 32| xxd -p -c 32\n\n# read EC key\n# writing EC key\n# 286cae9f2990bfc49dafdd3a9e737f56ddba3656e5e427108cef456fb67680e8\n")),(0,o.kt)("p",null,"You can use the output ",(0,o.kt)("inlineCode",{parentName:"p"},"286cae9f2990bfc49dafdd3a9e737f56ddba3656e5e427108cef456fb67680e8")," as a ",(0,o.kt)("inlineCode",{parentName:"p"},"Node Key")," for ",(0,o.kt)("inlineCode",{parentName:"p"},"nwaku"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"./build/wakunode2 --nodekey=286cae9f2990bfc49dafdd3a9e737f56ddba3656e5e427108cef456fb67680e8\n")),(0,o.kt)("h2",{id:"configure-websocket-transport"},"Configure WebSocket transport"),(0,o.kt)("p",null,"WebSocket is the only ",(0,o.kt)("a",{parentName:"p",href:"/learn/concepts/transports"},"transport method")," browser nodes support using ",(0,o.kt)("a",{parentName:"p",href:"/guides/js-waku/"},"@waku/sdk"),". To enable WebSocket in ",(0,o.kt)("inlineCode",{parentName:"p"},"nwaku")," to serve browser peers, use the following configuration options:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"websocket-support"),": Enables WebSocket (",(0,o.kt)("inlineCode",{parentName:"li"},"ws"),") on the node (disabled by default)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"websocket-port")," (optional): WebSocket listening port. If you omit this option, it will default to ",(0,o.kt)("inlineCode",{parentName:"li"},"8000"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"websocket-secure-support"),": Enables Secure WebSocket (",(0,o.kt)("inlineCode",{parentName:"li"},"wss"),") on the node (disabled by default)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"websocket-secure-key-path"),": Secure WebSocket key path."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"websocket-secure-cert-path"),": Secure WebSocket Certificate path.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"./build/wakunode2 \\\n  --websocket-support=true \\\n  --websocket-port=[WEBSOCKET LISTENING PORT] \\\n  --websocket-secure-support=true \\\n  --websocket-secure-key-path=[SECURE WEBSOCKET KEY PATH] \\\n  --websocket-secure-cert-path=[SECURE WEBSOCKET CERTIFICATE PATH]\n")),(0,o.kt)("p",null,"For example, consider a ",(0,o.kt)("inlineCode",{parentName:"p"},"nwaku")," node that enabled WebSocket (unencrypted) for local testing on port ",(0,o.kt)("inlineCode",{parentName:"p"},"8001"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"./build/wakunode2 \\\n  --websocket-support=true \\\n  --websocket-port=8001\n")),(0,o.kt)("p",null,"Consider a ",(0,o.kt)("inlineCode",{parentName:"p"},"nwaku")," node that enabled Secure WebSocket (encrypted) using its key and certificate (",(0,o.kt)("inlineCode",{parentName:"p"},"privkey.pem")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"fullchain.pem"),") on port ",(0,o.kt)("inlineCode",{parentName:"p"},"8002"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"./build/wakunode2 \\\n  --websocket-secure-support=true \\\n  --websocket-secure-key-path=privkey.pem \\\n  --websocket-secure-cert-path=fullchain.pem \\\n  --websocket-port=8002\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can use ",(0,o.kt)("a",{parentName:"p",href:"https://letsencrypt.org/"},"Let's Encrypt")," or ",(0,o.kt)("a",{parentName:"p",href:"https://certbot.eff.org/"},"Certbot")," to generate a valid certificate for your ",(0,o.kt)("inlineCode",{parentName:"p"},"nwaku")," node:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"sudo letsencrypt -d <your.domain.name>\n"))),(0,o.kt)("h2",{id:"configure-rest-api-server"},"Configure REST API server"),(0,o.kt)("p",null,"Nwaku provides a REST API to interact with the node and Waku Network. To enable the REST API, use the following configuration options:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"rest"),": Enables the REST API server on the node (disabled by default)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"rest-address")," (optional): Listening address of the REST API server. If you omit this option, it will default to ",(0,o.kt)("inlineCode",{parentName:"li"},"127.0.0.1"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"rest-port")," (optional): Listening port of the REST API server. If you omit this option, it will default to ",(0,o.kt)("inlineCode",{parentName:"li"},"8645"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"rest-relay-cache-capacity"),"\t(optional): Capacity of the Relay REST API message cache.\tIf you omit this option, it will default to ",(0,o.kt)("inlineCode",{parentName:"li"},"30"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"rest-admin")," (optional): Enables access to REST admin API (disabled by default)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"rest-private")," (optional): Enables access to REST private API (disabled by default).")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"./build/wakunode2 \\\n  --rest=true \\\n  --rest-address=[REST SERVER LISTENING ADDRESS] \\\n  --rest-port=[REST SERVER LISTENING PORT] \\\n  --rest-relay-cache-capacity=[MESSAGE CACHE CAPACITY] \\\n  --rest-admin=[true|false] \\\n  --rest-private=[true|false]\n")),(0,o.kt)("p",null,"For example, consider a ",(0,o.kt)("inlineCode",{parentName:"p"},"nwaku")," node that enabled the REST API server on port ",(0,o.kt)("inlineCode",{parentName:"p"},"9000"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"./build/wakunode2 \\\n  --rest=true \\\n  --rest-port=9000 \\\n  --rest-address=127.0.0.1\n")),(0,o.kt)("p",null,"Consider a ",(0,o.kt)("inlineCode",{parentName:"p"},"nwaku")," node that enabled the REST ",(0,o.kt)("inlineCode",{parentName:"p"},"admin")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"private")," API with a message cache capacity of ",(0,o.kt)("inlineCode",{parentName:"p"},"100"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"./build/wakunode2 \\\n  --rest=true \\\n  --rest-admin=true \\\n  --rest-private=true \\\n  --rest-relay-cache-capacity=100\n")),(0,o.kt)("h2",{id:"configure-filter-protocol"},"Configure filter protocol"),(0,o.kt)("p",null,"To enable ",(0,o.kt)("inlineCode",{parentName:"p"},"nwaku")," to serve light clients, enable the ",(0,o.kt)("a",{parentName:"p",href:"/learn/concepts/protocols#filter"},"Filter protocol")," using ",(0,o.kt)("inlineCode",{parentName:"p"},"filter")," option:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"./build/wakunode2 --filter=true\n")),(0,o.kt)("p",null,"You can configure ",(0,o.kt)("inlineCode",{parentName:"p"},"nwaku")," as a ",(0,o.kt)("inlineCode",{parentName:"p"},"Filter client")," using the ",(0,o.kt)("inlineCode",{parentName:"p"},"filternode")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"filter-timeout")," options. This allows the node to request content filtering of messages from peers."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"./build/wakunode2 \\\n  --filternode=[FILTER PEER MULTIADDR] \\\n  --filter-timeout=[FILTER PEER TIMEOUT]\n")),(0,o.kt)("p",null,"For example, consider a ",(0,o.kt)("inlineCode",{parentName:"p"},"nwaku")," node that requests content filtering of messages from peers with a timeout of ",(0,o.kt)("inlineCode",{parentName:"p"},"21600")," seconds (6 hours):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"./build/wakunode2 \\\n  --filternode=/dns4/node-01.ac-cn-hongkong-c.wakuv2.prod.statusim.net/tcp/30303/p2p/16Uiu2HAm4v86W3bmT1BiH6oSPzcsSr24iDQpSN5Qa992BCjjwgrD \\\n  --filter-timeout=21600\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"If you omit the ",(0,o.kt)("inlineCode",{parentName:"p"},"filter-timeout")," option, it will default to ",(0,o.kt)("inlineCode",{parentName:"p"},"14400")," seconds (4 hours).")),(0,o.kt)("h2",{id:"configure-light-push-protocol"},"Configure light push protocol"),(0,o.kt)("p",null,"To enable ",(0,o.kt)("inlineCode",{parentName:"p"},"nwaku")," to serve light clients, enable the ",(0,o.kt)("a",{parentName:"p",href:"/learn/concepts/protocols#light-push"},"Light Push protocol")," using the ",(0,o.kt)("inlineCode",{parentName:"p"},"lightpush")," option:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"./build/wakunode2 --lightpush=true\n")),(0,o.kt)("p",null,"You can configure ",(0,o.kt)("inlineCode",{parentName:"p"},"nwaku")," as a ",(0,o.kt)("inlineCode",{parentName:"p"},"Light Push client")," using the ",(0,o.kt)("inlineCode",{parentName:"p"},"lightpushnode")," option. This allows the node to request lightpush of published messages from peers."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"./build/wakunode2 --lightpushnode=[LIGHT PUSH PEER MULTIADDR]\n")),(0,o.kt)("p",null,"For example, consider a ",(0,o.kt)("inlineCode",{parentName:"p"},"nwaku")," node that requests lightpush of published messages from peers:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"./build/wakunode2 --lightpushnode=/dns4/node-01.ac-cn-hongkong-c.wakuv2.prod.statusim.net/tcp/30303/p2p/16Uiu2HAm4v86W3bmT1BiH6oSPzcsSr24iDQpSN5Qa992BCjjwgrD\n")),(0,o.kt)("h2",{id:"run-nwaku-behind-a-reverse-proxy"},"Run nwaku behind a reverse proxy"),(0,o.kt)("p",null,"When using a reverse proxy server for SSL/TLS encryption, you only want to announce the proxy server's IP or domain. Nwaku provides the ",(0,o.kt)("inlineCode",{parentName:"p"},"ext-multiaddr-only")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"ext-multiaddr")," options for specifying published multiaddr:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"./build/wakunode2 \\\n  --ext-multiaddr-only=true \\\n  --ext-multiaddr=[MULTIADDR TO PUBLISH]\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"ext-multiaddr-only")," option takes precedence over the ",(0,o.kt)("inlineCode",{parentName:"p"},"nat")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"dns4-domain-name")," options, using the values provided by the ",(0,o.kt)("inlineCode",{parentName:"p"},"ext-multiaddr")," option instead.")))}c.isMDXComponent=!0}}]);