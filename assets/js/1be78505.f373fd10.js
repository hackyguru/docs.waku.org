"use strict";(self.webpackChunkwaku_guide=self.webpackChunkwaku_guide||[]).push([[514,568],{33032:(e,t,a)=>{a.r(t),a.d(t,{default:()=>u});var n=a(67294),l=a(86010),o=a(35281),r=a(59689),i=a(12466),d=a(95999),c=a(42695);const s={menu:"menu_NjKY",menuWithAnnouncementBar:"menuWithAnnouncementBar_U5pk"};function u(e){let{path:t,sidebar:a,className:u}=e;const m=function(){const{isActive:e}=(0,r.nT)(),[t,a]=(0,n.useState)(e);return(0,i.RF)((t=>{let{scrollY:n}=t;e&&a(0===n)}),[e]),e&&t}();return n.createElement("nav",{"aria-label":(0,d.translate)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,l.default)("menu thin-scrollbar",s.menu,m&&s.menuWithAnnouncementBar,u)},n.createElement("ul",{className:(0,l.default)(o.k.docs.docSidebarMenu,"menu__list")},n.createElement(c.default,{items:a,activePath:t,level:1})))}},70005:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0});const n=a(70655),l=n.__importDefault(a(67294)),o=n.__importDefault(a(86010)),r=a(82818),i=n.__importDefault(a(16853)),d=n.__importDefault(a(33032)),c=n.__importDefault(a(37138));t.default=l.default.memo((function(e){let{path:t,sidebar:a,onCollapse:n,isHidden:s}=e;const{navbar:{hideOnScroll:u},docs:{sidebar:{hideable:m}}}=(0,r.useThemeConfig)();return l.default.createElement("div",{className:(0,o.default)(c.default.sidebar,u&&c.default.sidebarWithHideableNavbar,s&&c.default.sidebarHidden)},u&&l.default.createElement(i.default,{tabIndex:-1,className:c.default.sidebarLogo}),l.default.createElement(d.default,{path:t,sidebar:a}))}))},61646:(e,t,a)=>{const n=a(70655),l=n.__importDefault(a(67294)),o=a(82818),r=n.__importDefault(a(70005)),i=n.__importDefault(a(57125));t.Z=function(e){const t=(0,o.useWindowSize)(),a="desktop"===t||"ssr"===t,n="mobile"===t;return l.default.createElement(l.default.Fragment,null,a&&l.default.createElement(r.default,{...e}),n&&l.default.createElement(i.default,{...e}))}},48088:(e,t,a)=>{const n=a(70655),l=n.__importStar(a(67294)),o=n.__importDefault(a(86010)),r=a(82818),i=a(91338),d=n.__importDefault(a(39960)),c=a(95999),s=n.__importDefault(a(72389)),u=n.__importDefault(a(42695)),m=a(31665);function f(e){let{categoryLabel:t,onClick:a}=e;return l.default.createElement("button",{"aria-label":(0,c.translate)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:a})}t.Z=function(e){let{item:t,onItemClick:a,activePath:n,level:c,index:p,...b}=e;const{items:h,label:_,collapsible:E,className:g,href:v}=t,{docs:{sidebar:{autoCollapseCategories:k}}}=(0,r.useThemeConfig)(),C=function(e){const t=(0,s.default)();return(0,l.useMemo)((()=>e.href?e.href:!t&&e.collapsible?(0,i.findFirstCategoryLink)(e):void 0),[e,t])}(t),N=(0,i.isActiveSidebarItem)(t,n),S=(0,i.isSamePath)(v,n),{collapsed:T,setCollapsed:y}=(0,r.useCollapsible)({initialState:()=>!!E&&(!N&&t.collapsed)}),{expandedItem:I,setExpandedItem:x}=(0,i.useDocSidebarItemsExpandedState)(),B=function(e){void 0===e&&(e=!T),x(e?null:p),y(e)};return function(e){let{isActive:t,collapsed:a,updateCollapsed:n}=e;const o=(0,r.usePrevious)(t);(0,l.useEffect)((()=>{t&&!o&&a&&n(!1)}),[t,o,a,n])}({isActive:N,collapsed:T,updateCollapsed:B}),(0,l.useEffect)((()=>{E&&null!=I&&I!==p&&k&&y(!0)}),[E,I,p,y,k]),l.default.createElement("li",{className:(0,o.default)(r.ThemeClassNames.docs.docSidebarItemCategory,r.ThemeClassNames.docs.docSidebarItemCategoryLevel(c),"menu__list-item",{"menu__list-item--collapsed":T},g)},l.default.createElement("div",{className:(0,o.default)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":S})},l.default.createElement(d.default,{className:(0,o.default)("menu__link",{"menu__link--sublist":E,"menu__link--active":N}),onClick:E?e=>{a?.(t),v||e.preventDefault(),B()}:()=>{a?.(t)},"aria-current":S?"page":void 0,"aria-expanded":E?!T:void 0,href:E?C??"#":C,...b},l.default.createElement(m.Typography,{variant:"body2",color:"primary"},_),E&&l.default.createElement(m.ArrowUpIcon,null)),v&&E&&l.default.createElement(f,{categoryLabel:_,onClick:e=>{e.preventDefault(),B()}})),l.default.createElement(r.Collapsible,{lazy:!0,as:"ul",className:"menu__list",collapsed:T},l.default.createElement(u.default,{items:h,tabIndex:T?-1:0,onItemClick:a,activePath:n,level:c+1})))}},92568:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0});const n=a(70655),l=n.__importDefault(a(67294)),o=n.__importStar(a(95999)),r=a(82818),i=n.__importDefault(a(59351)),d=n.__importDefault(a(22566)),c=n.__importDefault(a(86010)),s=a(31665),u=n.__importDefault(a(39960));t.default=function(){return l.default.createElement(l.default.Fragment,null,l.default.createElement(r.PageMetadata,{title:(0,o.translate)({id:"theme.NotFound.title",message:"Page Not Found"})}),l.default.createElement(i.default,null,l.default.createElement("main",{className:(0,c.default)("container margin-vert--xl",d.default.root)},l.default.createElement("div",{className:"row"},l.default.createElement("div",{className:"col col--6 col--offset-3"},l.default.createElement(s.Typography,{variant:"h1"},l.default.createElement(o.default,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),l.default.createElement(s.Typography,{variant:"body1",component:"p"},l.default.createElement(o.default,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for."),l.default.createElement("br",null),l.default.createElement(o.default,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))),l.default.createElement(u.default,{to:"/"},l.default.createElement(s.Button,{size:"large",variant:"outlined"},l.default.createElement(o.default,{id:"theme.NotFound.backToHome",description:"The label of the back to home link on the 404 page"},"Back to home")))))))}},93717:(e,t,a)=>{a.r(t),a.d(t,{default:()=>L});var n=a(67294),l=a(86010),o=a(10833),r=a(35281),i=a(43320),d=a(53438),c=a(74477),s=a(1116),u=a(59351),m=a(95999),f=a(2730);const p={backToTopButton:"backToTopButton_sjWU",backToTopButtonShow:"backToTopButtonShow_xfvO"};function b(){const{shown:e,scrollToTop:t}=(0,f.a)({threshold:300});return n.createElement("button",{"aria-label":(0,m.translate)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,l.default)("clean-btn",r.k.common.backToTopButton,p.backToTopButton,e&&p.backToTopButtonShow),type:"button",onClick:t})}var h=a(91442),_=a(16550),E=a(61646),g=a(87462);function v(e){return n.createElement("svg",(0,g.Z)({width:"20",height:"20","aria-hidden":"true"},e),n.createElement("g",{fill:"#7a7a7a"},n.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),n.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}const k={expandButton:"expandButton_m80_",expandButtonIcon:"expandButtonIcon_BlDH"};function C(e){let{toggleSidebar:t}=e;return n.createElement("div",{className:k.expandButton,title:(0,m.translate)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,m.translate)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t},n.createElement(v,{className:k.expandButtonIcon}))}const N={docSidebarContainer:"docSidebarContainer_b6E3",docSidebarContainerHidden:"docSidebarContainerHidden_b3ry",sidebarViewport:"sidebarViewport_Xe31"};function S(e){let{children:t}=e;const a=(0,s.V)();return n.createElement(n.Fragment,{key:a?.name??"noSidebar"},t)}function T(e){let{sidebar:t,hiddenSidebarContainer:a,setHiddenSidebarContainer:o}=e;const{pathname:i}=(0,_.TH)(),[d,c]=(0,n.useState)(!1),s=(0,n.useCallback)((()=>{d&&c(!1),!d&&(0,h.n)()&&c(!0),o((e=>!e))}),[o,d]);return n.createElement("aside",{className:(0,l.default)(r.k.docs.docSidebarContainer,N.docSidebarContainer,a&&N.docSidebarContainerHidden),onTransitionEnd:e=>{e.currentTarget.classList.contains(N.docSidebarContainer)&&a&&c(!0)}},n.createElement(S,null,n.createElement("div",{className:(0,l.default)(N.sidebarViewport,d&&N.sidebarViewportHidden)},n.createElement(E.Z,{sidebar:t,path:i,onCollapse:s,isHidden:d}),d&&n.createElement(C,{toggleSidebar:s}))))}const y={docMainContainer:"docMainContainer_gTbr",docMainContainerEnhanced:"docMainContainerEnhanced_Uz_u",docItemWrapperEnhanced:"docItemWrapperEnhanced_czyv"};function I(e){let{hiddenSidebarContainer:t,children:a}=e;const o=(0,s.V)();return n.createElement("main",{className:(0,l.default)(y.docMainContainer,(t||!o)&&y.docMainContainerEnhanced)},n.createElement("div",{className:(0,l.default)("container padding-top--md padding-bottom--lg",y.docItemWrapper,t&&y.docItemWrapperEnhanced)},a))}const x={docPage:"docPage__5DB",docsWrapper:"docsWrapper_BCFX"};function B(e){let{children:t}=e;const a=(0,s.V)(),[l,o]=(0,n.useState)(!1);return n.createElement(u.default,{wrapperClassName:x.docsWrapper},n.createElement(b,null),n.createElement("div",{className:x.docPage},a&&n.createElement(T,{sidebar:a.items,hiddenSidebarContainer:l,setHiddenSidebarContainer:o}),n.createElement(I,{hiddenSidebarContainer:l},t)))}var D=a(92568),w=a(90197);function A(e){const{versionMetadata:t}=e;return n.createElement(n.Fragment,null,n.createElement(w.Z,{version:t.version,tag:(0,i.os)(t.pluginId,t.version)}),n.createElement(o.d,null,t.noIndex&&n.createElement("meta",{name:"robots",content:"noindex, nofollow"})))}function L(e){const{versionMetadata:t}=e,a=(0,d.hI)(e);if(!a)return n.createElement(D.default,null);const{docElement:i,sidebarName:u,sidebarItems:m}=a;return n.createElement(n.Fragment,null,n.createElement(A,e),n.createElement(o.FG,{className:(0,l.default)(r.k.wrapper.docsPages,r.k.page.docsDocPage,e.versionMetadata.className)},n.createElement(c.q,{version:t},n.createElement(s.b,{name:u,items:m},n.createElement(B,null,i)))))}},57125:(e,t,a)=>{a.r(t),a.d(t,{default:()=>u});var n=a(67294),l=a(86010),o=a(35281),r=a(13102),i=a(93163),d=a(42695);const c=e=>{let{sidebar:t,path:a}=e;const r=(0,i.e)();return n.createElement("ul",{className:(0,l.default)(o.k.docs.docSidebarMenu,"menu__list")},n.createElement(d.default,{items:t,activePath:a,onItemClick:e=>{"category"===e.type&&e.href&&r.toggle(),"link"===e.type&&r.toggle()},level:1}))};function s(e){return n.createElement(r.Zo,{component:c,props:e})}const u=n.memo(s)},42695:(e,t,a)=>{a.r(t),a.d(t,{default:()=>g});var n=a(87462),l=a(67294),o=a(14353),r=a(48088),i=a(86010),d=a(35281),c=a(53438),s=a(39960),u=a(13919),m=a(39471);const f={menuExternalLink:"menuExternalLink_NmtK"};function p(e){let{item:t,onItemClick:a,activePath:o,level:r,index:p,...b}=e;const{href:h,label:_,className:E,autoAddBaseUrl:g}=t,v=(0,c._F)(t,o),k=(0,u.default)(h);return l.createElement("li",{className:(0,i.default)(d.k.docs.docSidebarItemLink,d.k.docs.docSidebarItemLinkLevel(r),"menu__list-item",E),key:_},l.createElement(s.default,(0,n.Z)({className:(0,i.default)("menu__link",!k&&f.menuExternalLink,{"menu__link--active":v}),autoAddBaseUrl:g,"aria-current":v?"page":void 0,to:h},k&&{onClick:a?()=>a(t):void 0},b),_,!k&&l.createElement(m.Z,null)))}const b={menuHtmlItem:"menuHtmlItem_M9Kj"};function h(e){let{item:t,level:a,index:n}=e;const{value:o,defaultStyle:r,className:c}=t;return l.createElement("li",{className:(0,i.default)(d.k.docs.docSidebarItemLink,d.k.docs.docSidebarItemLinkLevel(a),r&&[b.menuHtmlItem,"menu__list-item"],c),key:n,dangerouslySetInnerHTML:{__html:o}})}function _(e){let{item:t,...a}=e;switch(t.type){case"category":return l.createElement(r.Z,(0,n.Z)({item:t},a));case"html":return l.createElement(h,(0,n.Z)({item:t},a));default:return l.createElement(p,(0,n.Z)({item:t},a))}}function E(e){let{items:t,...a}=e;return l.createElement(o.D,null,t.map(((e,t)=>l.createElement(_,(0,n.Z)({key:t,item:e,index:t},a)))))}const g=(0,l.memo)(E)},22566:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});const n={root:"root_jG9K"}},37138:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});const n={sidebar:"sidebar_UEyd",sidebarWithHideableNavbar:"sidebarWithHideableNavbar__00c",sidebarHidden:"sidebarHidden_F1ZE",sidebarLogo:"sidebarLogo_Ydl9"}}}]);