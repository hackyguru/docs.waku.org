"use strict";(self.webpackChunkwaku_guide=self.webpackChunkwaku_guide||[]).push([[385],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>k});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var d=r.createContext({}),l=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(d.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,d=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=l(t),m=i,k=c["".concat(d,".").concat(m)]||c[m]||u[m]||o;return t?r.createElement(k,a(a({ref:n},p),{},{components:t})):r.createElement(k,a({ref:n},p))}));function k(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=m;var s={};for(var d in n)hasOwnProperty.call(n,d)&&(s[d]=n[d]);s.originalType=e,s[c]="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},45948:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=t(87462),i=(t(67294),t(3905));const o={title:"Configure Peer Discovery"},a=void 0,s={unversionedId:"guides/nwaku/configure-discovery",id:"guides/nwaku/configure-discovery",title:"Configure Peer Discovery",description:"This guide provides detailed steps to configure a nwaku node to discover and connect with peers in the Waku Network.",source:"@site/docs/guides/nwaku/configure-discovery.md",sourceDirName:"guides/nwaku",slug:"/guides/nwaku/configure-discovery",permalink:"/guides/nwaku/configure-discovery",draft:!1,editUrl:"https://github.com/waku-org/docs.waku.org/tree/develop/docs/guides/nwaku/configure-discovery.md",tags:[],version:"current",lastUpdatedAt:1687261315,formattedLastUpdatedAt:"Jun 20, 2023",frontMatter:{title:"Configure Peer Discovery"},sidebar:"guides",previous:{title:"Run Nwaku with Docker Compose",permalink:"/guides/nwaku/run-docker-compose"},next:{title:"Node Configuration Methods",permalink:"/guides/reference/node-config-methods"}},d={},l=[{value:"Configure Static Peers",id:"configure-static-peers",level:2},{value:"Configure DNS Discovery",id:"configure-dns-discovery",level:2},{value:"Configure Discv5",id:"configure-discv5",level:2}],p={toc:l},c="wrapper";function u(e){let{components:n,...t}=e;return(0,i.kt)(c,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This guide provides detailed steps to configure a ",(0,i.kt)("inlineCode",{parentName:"p"},"nwaku")," node to discover and connect with peers in the Waku Network."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"You can configure a ",(0,i.kt)("inlineCode",{parentName:"p"},"nwaku")," node to use multiple peer discovery mechanisms simultaneously.")),(0,i.kt)("h2",{id:"configure-static-peers"},"Configure Static Peers"),(0,i.kt)("p",null,"You can provide static peers to a ",(0,i.kt)("inlineCode",{parentName:"p"},"nwaku")," node during startup using the ",(0,i.kt)("inlineCode",{parentName:"p"},"staticnode")," configuration option. To connect to multiple peers on startup, repeat the ",(0,i.kt)("inlineCode",{parentName:"p"},"staticnode")," option:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./build/wakunode2 \\\n  --staticnode:[Libp2p MULTIADDR PEER 1] \\\n  --staticnode:[Libp2p MULTIADDR PEER 2]\n")),(0,i.kt)("p",null,"For instance, consider a ",(0,i.kt)("inlineCode",{parentName:"p"},"nwaku")," node that connects to two static peers on the same local host (IP: ",(0,i.kt)("inlineCode",{parentName:"p"},"0.0.0.0"),") using TCP ports ",(0,i.kt)("inlineCode",{parentName:"p"},"60002")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"60003"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./build/wakunode2 \\\n  --staticnode:/ip4/0.0.0.0/tcp/60002/p2p/16Uiu2HAkzjwwgEAXfeGNMKFPSpc6vGBRqCdTLG5q3Gmk2v4pQw7H \\\n  --staticnode:/ip4/0.0.0.0/tcp/60003/p2p/16Uiu2HAmFBA7LGtwY5WVVikdmXVo3cKLqkmvVtuDu63fe8safeQJ\n")),(0,i.kt)("h2",{id:"configure-dns-discovery"},"Configure DNS Discovery"),(0,i.kt)("p",null,"To enable ",(0,i.kt)("a",{parentName:"p",href:"/overview/concepts/dns-discovery"},"DNS Discovery")," in a ",(0,i.kt)("inlineCode",{parentName:"p"},"nwaku")," node, use the following configuration options:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"dns-discovery"),": Enables DNS Discovery on the node (disabled by default)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"dns-discovery-url"),": URL for DNS node list in the format ",(0,i.kt)("inlineCode",{parentName:"li"},"enrtree://<key>@<fqdn>")," where ",(0,i.kt)("inlineCode",{parentName:"li"},"<fqdn>")," is the fully qualified domain name and ",(0,i.kt)("inlineCode",{parentName:"li"},"<key>")," is the base32 encoding of the compressed 32-byte public key that signed the list at that location."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"dns-discovery-name-server")," (optional): DNS name server IPs to query. You can repeat this option to provide multiple DNS name servers.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./build/wakunode2 \\\n  --dns-discovery:true \\\n  --dns-discovery-url:[DNS NODE LIST] \\\n  --dns-discovery-name-server:[DNS NAME SERVER IP]\n")),(0,i.kt)("p",null,"For instance, consider a ",(0,i.kt)("inlineCode",{parentName:"p"},"nwaku")," node that enables ",(0,i.kt)("inlineCode",{parentName:"p"},"DNS Discovery"),", connects to a DNS node list, and queries the IPs ",(0,i.kt)("inlineCode",{parentName:"p"},"1.1.1.1")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"1.0.0.1"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./build/wakunode2 \\\n  --dns-discovery:true \\\n  --dns-discovery-url:enrtree://AOGECG2SPND25EEFMAJ5WF3KSGJNSGV356DSTL2YVLLZWIV6SAYBM@test.waku.nodes.status.im \\\n  --dns-discovery-name-server:1.1.1.1 \\\n  --dns-discovery-name-server:1.0.0.1\n")),(0,i.kt)("h2",{id:"configure-discv5"},"Configure Discv5"),(0,i.kt)("p",null,"To enable ",(0,i.kt)("a",{parentName:"p",href:"/overview/concepts/discv5"},"Discv5")," in a ",(0,i.kt)("inlineCode",{parentName:"p"},"nwaku")," node, use the following configuration options:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"discv5-discovery"),": Enables Discv5 on the node (disabled by default)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"discv5-bootstrap-node"),": ENR for Discv5 routing table bootstrap node. You can repeat this option to provide multiple bootstrap entries.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./build/wakunode2 \\\n  --discv5-discovery:true \\\n  --discv5-bootstrap-node:[DISCV5 ENR BOOTSTRAP ENTRY 1] \\\n  --discv5-bootstrap-node:[DISCV5 ENR BOOTSTRAP ENTRY 2]\n")),(0,i.kt)("p",null,"For instance, consider a ",(0,i.kt)("inlineCode",{parentName:"p"},"nwaku")," node that enables ",(0,i.kt)("inlineCode",{parentName:"p"},"Discv5")," and bootstraps it's routing table using a static ",(0,i.kt)("inlineCode",{parentName:"p"},"ENR"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./build/wakunode2 \\\n  --discv5-discovery:true \\\n  --discv5-bootstrap-node:enr:-IO4QDxToTg86pPCK2KvMeVCXC2ADVZWrxXSvNZeaoa0JhShbM5qed69RQz1s1mWEEqJ3aoklo_7EU9iIBcPMVeKlCQBgmlkgnY0iXNlY3AyNTZrMaEDdBHK1Gx6y_zv5DVw5Qb3DtSOMmVHTZO1WSORrF2loL2DdWRwgiMohXdha3UyAw\n")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"When Discv5 is enabled and used with ",(0,i.kt)("a",{parentName:"p",href:"#configure-dns-discovery"},"DNS Discovery"),", the ",(0,i.kt)("inlineCode",{parentName:"p"},"nwaku")," node will attempt to bootstrap the Discv5 routing table by extracting ",(0,i.kt)("inlineCode",{parentName:"p"},"ENRs")," from peers discovered through DNS.")))}u.isMDXComponent=!0}}]);