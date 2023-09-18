"use strict";(self.webpackChunkwaku_guide=self.webpackChunkwaku_guide||[]).push([[6512],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),l=c(n),k=a,m=l["".concat(s,".").concat(k)]||l[k]||d[k]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=k;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u[l]="string"==typeof e?e:a,i[1]=u;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},16783:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={title:"Run Nwaku in a Docker Container"},i=void 0,u={unversionedId:"guides/nwaku/run-docker",id:"guides/nwaku/run-docker",title:"Run Nwaku in a Docker Container",description:"This guide provides detailed steps to build and run a nwaku node in a Docker container. If you prefer a pre-configured setup with a monitoring dashboard, see the Run Nwaku with Docker Compose guide.",source:"@site/docs/guides/nwaku/run-docker.md",sourceDirName:"guides/nwaku",slug:"/guides/nwaku/run-docker",permalink:"/guides/nwaku/run-docker",draft:!1,editUrl:"https://github.com/waku-org/docs.waku.org/tree/develop/docs/guides/nwaku/run-docker.md",tags:[],version:"current",lastUpdatedAt:1694808495,formattedLastUpdatedAt:"15 Sept 2023",frontMatter:{title:"Run Nwaku in a Docker Container"},sidebar:"guides",previous:{title:"Build Nwaku from Source",permalink:"/guides/nwaku/build-source"},next:{title:"Run Nwaku with Docker Compose",permalink:"/guides/nwaku/run-docker-compose"}},s={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Get Docker Image",id:"get-docker-image",level:2},{value:"Run Docker Container",id:"run-docker-container",level:2}],p={toc:c},l="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(l,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This guide provides detailed steps to build and run a ",(0,a.kt)("inlineCode",{parentName:"p"},"nwaku")," node in a Docker container. If you prefer a pre-configured setup with a monitoring dashboard, see the ",(0,a.kt)("a",{parentName:"p",href:"/guides/nwaku/run-docker-compose"},"Run Nwaku with Docker Compose")," guide."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"Ensure ",(0,a.kt)("a",{parentName:"p",href:"https://www.docker.com/"},"Docker")," is installed on your system using the appropriate instructions provided in the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/install/"},"Docker documentation"),"."),(0,a.kt)("h2",{id:"get-docker-image"},"Get Docker Image"),(0,a.kt)("p",null,"The Nwaku Docker images are available on the Docker Hub public registry under the ",(0,a.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/statusteam/nim-waku"},"statusteam/nim-waku")," repository. Please visit ",(0,a.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/statusteam/nim-waku/tags"},"statusteam/nim-waku/tags")," for images of specific releases."),(0,a.kt)("p",null,"You can also build the Docker image locally:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Clone the repository\ngit clone --recurse-submodules https://github.com/waku-org/nwaku\ncd nwaku\n\n# Build docker image\nmake docker-image\n")),(0,a.kt)("h2",{id:"run-docker-container"},"Run Docker Container"),(0,a.kt)("p",null,"Run ",(0,a.kt)("inlineCode",{parentName:"p"},"nwaku")," in a new Docker container:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker run [OPTIONS] [IMAGE] [ARG...]\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"OPTIONS")," are your selected ",(0,a.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/reference/commandline/run/#options"},"Docker options")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"IMAGE")," is the image and tag you pulled from the registry or built locally"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ARG...")," is the list of arguments for your ",(0,a.kt)("a",{parentName:"li",href:"/guides/reference/node-config-options"},"node configuration options"))),(0,a.kt)("p",null,"Run ",(0,a.kt)("inlineCode",{parentName:"p"},"nwaku")," using the most typical configuration:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -i -t -p 60000:60000 -p 9000:9000/udp statusteam/nim-waku:v0.20.0 \\\n  --dns-discovery=true \\\n  --dns-discovery-url=enrtree://AOGECG2SPND25EEFMAJ5WF3KSGJNSGV356DSTL2YVLLZWIV6SAYBM@prod.waku.nodes.status.im \\\n  --discv5-discovery=true \\\n  --nat=extip:[YOUR PUBLIC IP] # or, if you are behind a nat: --nat=any\n")),(0,a.kt)("p",null,"To find your public IP, use:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"dig TXT +short o-o.myaddr.l.google.com @ns1.google.com | awk -F'\"' '{ print $2}'\n")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"We recommend using explicit port mappings (",(0,a.kt)("inlineCode",{parentName:"p"},"-p"),") when exposing ports accessible from outside the host (listening and discovery ports, API servers).")),(0,a.kt)("admonition",{title:"Congratulations!",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"You have successfully built and started a ",(0,a.kt)("inlineCode",{parentName:"p"},"nwaku")," node in a Docker container. Have a look at the ",(0,a.kt)("a",{parentName:"p",href:"/guides/nwaku/configure-nwaku"},"Nwaku Configuration Examples")," guide to learn how to configure ",(0,a.kt)("inlineCode",{parentName:"p"},"nwaku")," for different use cases.")))}d.isMDXComponent=!0}}]);