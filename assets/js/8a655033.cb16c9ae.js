"use strict";(self.webpackChunkwaku_guide=self.webpackChunkwaku_guide||[]).push([[385],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>k});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),s=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=s(e.components);return a.createElement(l.Provider,{value:n},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=s(t),m=r,k=u["".concat(l,".").concat(m)]||u[m]||c[m]||i;return t?a.createElement(k,o(o({ref:n},d),{},{components:t})):a.createElement(k,o({ref:n},d))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p[u]="string"==typeof e?e:r,o[1]=p;for(var s=2;s<i;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},45948:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var a=t(87462),r=(t(67294),t(3905));const i={title:"Configure Peer Discovery"},o=void 0,p={unversionedId:"guides/nwaku/configure-discovery",id:"guides/nwaku/configure-discovery",title:"Configure Peer Discovery",description:"This guide provides detailed steps to configure a nwaku node to discover and connect with peers in the Waku Network.",source:"@site/docs/guides/nwaku/configure-discovery.md",sourceDirName:"guides/nwaku",slug:"/guides/nwaku/configure-discovery",permalink:"/guides/nwaku/configure-discovery",draft:!1,editUrl:"https://github.com/waku-org/docs.waku.org/tree/develop/docs/guides/nwaku/configure-discovery.md",tags:[],version:"current",lastUpdatedAt:1689706272,formattedLastUpdatedAt:"Jul 18, 2023",frontMatter:{title:"Configure Peer Discovery"},sidebar:"guides",previous:{title:"Run Nwaku with Docker Compose",permalink:"/guides/nwaku/run-docker-compose"},next:{title:"JavaScript Waku SDK",permalink:"/guides/js-waku/"}},l={},s=[{value:"Configure Static Peers",id:"configure-static-peers",level:2},{value:"Configure DNS Discovery",id:"configure-dns-discovery",level:2},{value:"Configure Discv5",id:"configure-discv5",level:2},{value:"Configure Peer Exchange",id:"configure-peer-exchange",level:2}],d={toc:s},u="wrapper";function c(e){let{components:n,...t}=e;return(0,r.kt)(u,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This guide provides detailed steps to configure a ",(0,r.kt)("inlineCode",{parentName:"p"},"nwaku")," node to discover and connect with peers in the Waku Network."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"You can configure a ",(0,r.kt)("inlineCode",{parentName:"p"},"nwaku")," node to use multiple peer discovery mechanisms simultaneously.")),(0,r.kt)("h2",{id:"configure-static-peers"},"Configure Static Peers"),(0,r.kt)("p",null,"You can provide static peers to a ",(0,r.kt)("inlineCode",{parentName:"p"},"nwaku")," node during startup using the ",(0,r.kt)("inlineCode",{parentName:"p"},"staticnode")," configuration option. To connect to multiple peers on startup, repeat the ",(0,r.kt)("inlineCode",{parentName:"p"},"staticnode")," option:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./build/wakunode2 \\\n  --staticnode=[PEER MULTIADDR 1] \\\n  --staticnode=[PEER MULTIADDR 2]\n")),(0,r.kt)("p",null,"For example, consider a ",(0,r.kt)("inlineCode",{parentName:"p"},"nwaku")," node that connects to two static peers on the same local host (IP: ",(0,r.kt)("inlineCode",{parentName:"p"},"0.0.0.0"),") using TCP ports ",(0,r.kt)("inlineCode",{parentName:"p"},"60002")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"60003"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./build/wakunode2 \\\n  --staticnode=/ip4/0.0.0.0/tcp/60002/p2p/16Uiu2HAkzjwwgEAXfeGNMKFPSpc6vGBRqCdTLG5q3Gmk2v4pQw7H \\\n  --staticnode=/ip4/0.0.0.0/tcp/60003/p2p/16Uiu2HAmFBA7LGtwY5WVVikdmXVo3cKLqkmvVtuDu63fe8safeQJ\n")),(0,r.kt)("h2",{id:"configure-dns-discovery"},"Configure DNS Discovery"),(0,r.kt)("p",null,"To enable ",(0,r.kt)("a",{parentName:"p",href:"/overview/concepts/dns-discovery"},"DNS Discovery")," in a ",(0,r.kt)("inlineCode",{parentName:"p"},"nwaku")," node, use the following configuration options:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"dns-discovery"),": Enables ",(0,r.kt)("inlineCode",{parentName:"li"},"DNS Discovery")," on the node (disabled by default)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"dns-discovery-url"),": URL for DNS node list in the format ",(0,r.kt)("inlineCode",{parentName:"li"},"enrtree://<key>@<fqdn>")," where ",(0,r.kt)("inlineCode",{parentName:"li"},"<fqdn>")," is the fully qualified domain name and ",(0,r.kt)("inlineCode",{parentName:"li"},"<key>")," is the base32 encoding of the compressed 32-byte public key that signed the list at that location."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"dns-discovery-name-server")," (optional): DNS name server IPs to query. You can repeat this option to provide multiple DNS name servers.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./build/wakunode2 \\\n  --dns-discovery=true \\\n  --dns-discovery-url=[DNS NODE LIST] \\\n  --dns-discovery-name-server=[DNS NAME SERVER IP]\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If you omit the ",(0,r.kt)("inlineCode",{parentName:"p"},"dns-discovery-name-server")," option, ",(0,r.kt)("inlineCode",{parentName:"p"},"nwaku")," will attempt to use the CloudFlare servers ",(0,r.kt)("inlineCode",{parentName:"p"},"1.1.1.1")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"1.0.0.1"),".")),(0,r.kt)("p",null,"For example, consider a ",(0,r.kt)("inlineCode",{parentName:"p"},"nwaku")," node that enables ",(0,r.kt)("inlineCode",{parentName:"p"},"DNS Discovery"),", connects to a DNS node list, and queries the IPs ",(0,r.kt)("inlineCode",{parentName:"p"},"8.8.8.8")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"8.8.4.4"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./build/wakunode2 \\\n  --dns-discovery=true \\\n  --dns-discovery-url=enrtree://AOGECG2SPND25EEFMAJ5WF3KSGJNSGV356DSTL2YVLLZWIV6SAYBM@test.waku.nodes.status.im \\\n  --dns-discovery-name-server=8.8.8.8 \\\n  --dns-discovery-name-server=8.8.4.4\n")),(0,r.kt)("h2",{id:"configure-discv5"},"Configure Discv5"),(0,r.kt)("p",null,"To enable ",(0,r.kt)("a",{parentName:"p",href:"/overview/concepts/discv5"},"Discv5")," in a ",(0,r.kt)("inlineCode",{parentName:"p"},"nwaku")," node, use the following configuration options:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"discv5-discovery"),": Enables ",(0,r.kt)("inlineCode",{parentName:"li"},"Discv5")," on the node (disabled by default)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"discv5-bootstrap-node"),": ENR for ",(0,r.kt)("inlineCode",{parentName:"li"},"Discv5")," routing table bootstrap node. You can repeat this option to provide multiple bootstrap entries.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./build/wakunode2 \\\n  --discv5-discovery=true \\\n  --discv5-bootstrap-node=[DISCV5 ENR BOOTSTRAP ENTRY 1] \\\n  --discv5-bootstrap-node=[DISCV5 ENR BOOTSTRAP ENTRY 2]\n")),(0,r.kt)("p",null,"For example, consider a ",(0,r.kt)("inlineCode",{parentName:"p"},"nwaku")," node that enables ",(0,r.kt)("inlineCode",{parentName:"p"},"Discv5")," and bootstraps its routing table using a static ",(0,r.kt)("inlineCode",{parentName:"p"},"ENR"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./build/wakunode2 \\\n  --discv5-discovery=true \\\n  --discv5-bootstrap-node=enr:-IO4QDxToTg86pPCK2KvMeVCXC2ADVZWrxXSvNZeaoa0JhShbM5qed69RQz1s1mWEEqJ3aoklo_7EU9iIBcPMVeKlCQBgmlkgnY0iXNlY3AyNTZrMaEDdBHK1Gx6y_zv5DVw5Qb3DtSOMmVHTZO1WSORrF2loL2DdWRwgiMohXdha3UyAw\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"When Discv5 is enabled and used with ",(0,r.kt)("a",{parentName:"p",href:"#configure-dns-discovery"},"DNS Discovery"),", the ",(0,r.kt)("inlineCode",{parentName:"p"},"nwaku")," node will attempt to bootstrap the Discv5 routing table by extracting ",(0,r.kt)("inlineCode",{parentName:"p"},"ENRs")," from peers discovered through DNS.")),(0,r.kt)("h2",{id:"configure-peer-exchange"},"Configure Peer Exchange"),(0,r.kt)("p",null,"To enable ",(0,r.kt)("a",{parentName:"p",href:"/overview/concepts/peer-exchange"},"Peer Exchange")," in a ",(0,r.kt)("inlineCode",{parentName:"p"},"nwaku")," node, use the following configuration options:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"peer-exchange"),": Enables ",(0,r.kt)("inlineCode",{parentName:"li"},"Peer Exchange")," on the node as a responder (disabled by default)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"peer-exchange-node")," (optional): Multiaddr for bootstrap node that has the peer exchange protocol enabled.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./build/wakunode2 \\\n  --peer-exchange=true \\\n  --peer-exchange-node=[PEER MULTIADDR WITH EXCHANGE ENABLED]\n")),(0,r.kt)("p",null,"For example, consider two ",(0,r.kt)("inlineCode",{parentName:"p"},"nwaku")," nodes configured as a ",(0,r.kt)("inlineCode",{parentName:"p"},"server")," (peer exchange responder node) and ",(0,r.kt)("inlineCode",{parentName:"p"},"client")," (node using peer exchange) on the same local host (IP: ",(0,r.kt)("inlineCode",{parentName:"p"},"0.0.0.0"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Server: Nwaku Node with Peer Exchange Enabled"',title:'"Server:',Nwaku:!0,Node:!0,with:!0,Peer:!0,Exchange:!0,'Enabled"':!0},"./build/wakunode2 --peer-exchange=true\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Client: Nwaku Node Bootstrapping with Peer Exchange"',title:'"Client:',Nwaku:!0,Node:!0,Bootstrapping:!0,with:!0,Peer:!0,'Exchange"':!0},"./build/wakunode2 \\\n  --tcp-port=30305 \\\n  --ports-shift=1 \\\n  --peer-exchange-node=/ip4/0.0.0.0/tcp/60000/p2p/16Uiu2HAmLCe6zVqCS6KMqqRbbhyoJjfYZGr1Q3thTSbyKzibQkFR\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"nwaku")," provides a ",(0,r.kt)("a",{parentName:"p",href:"/guides/reference/node-config-options#relay-config"},(0,r.kt)("inlineCode",{parentName:"a"},"relay-peer-exchange"))," option via ",(0,r.kt)("inlineCode",{parentName:"p"},"libp2p")," for peer exchange, allowing network growth through neighboring nodes. However, this feature can compromise security and network robustness, so we recommend only using it in high-trust environments.")))}c.isMDXComponent=!0}}]);