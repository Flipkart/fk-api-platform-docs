"use strict";(self.webpackChunkfk_api_platform_docs=self.webpackChunkfk_api_platform_docs||[]).push([[8209],{52991:(e,t,n)=>{n.d(t,{Z:()=>h});var r=n(67294),i=n(86010),a=n(53438),c=n(39960),o=n(13919),s=n(95999);const m={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function d(e){let{href:t,children:n}=e;return r.createElement(c.Z,{href:t,className:(0,i.Z)("card padding--lg",m.cardContainer)},n)}function l(e){let{href:t,icon:n,title:a,description:c}=e;return r.createElement(d,{href:t},r.createElement("h2",{className:(0,i.Z)("text--truncate",m.cardTitle),title:a},n," ",a),c&&r.createElement("p",{className:(0,i.Z)("text--truncate",m.cardDescription),title:c},c))}function f(e){let{item:t}=e;const n=(0,a.Wl)(t);return n?r.createElement(l,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function p(e){let{item:t}=e;const n=(0,o.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,a.xz)(t.docId??void 0);return r.createElement(l,{href:t.href,icon:n,title:t.label,description:t.description??i?.description})}function u(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(p,{item:t});case"category":return r.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const n=(0,a.jA)();return r.createElement(h,{items:n.items,className:t})}function h(e){const{items:t,className:n}=e;if(!t)return r.createElement(g,e);const c=(0,a.MN)(t);return r.createElement("section",{className:(0,i.Z)("row",n)},c.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(u,{item:e})))))}},8124:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>m,toc:()=>l});var r=n(87462),i=(n(67294),n(3905)),a=n(52991),c=n(53438);const o={},s="Order Management Notifications Reference",m={unversionedId:"order-management-notifications-reference",id:"order-management-notifications-reference",title:"Order Management Notifications Reference",description:"",source:"@site/docs/order-management-notifications-reference.mdx",sourceDirName:".",slug:"/order-management-notifications-reference",permalink:"/fk-api-platform-docs/docs/order-management-notifications-reference",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Order Management Notification Service",permalink:"/fk-api-platform-docs/docs/order-management-notifications"},next:{title:"Shipment Created",permalink:"/fk-api-platform-docs/docs/shipment-created-notification"}},d={},l=[],f={toc:l},p="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"order-management-notifications-reference"},"Order Management Notifications Reference"),(0,i.kt)(a.Z,{items:(0,c.jA)().items,mdxType:"DocCardList"}))}u.isMDXComponent=!0}}]);