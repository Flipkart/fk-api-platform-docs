"use strict";(self.webpackChunkfk_api_platform_docs=self.webpackChunkfk_api_platform_docs||[]).push([[3691],{52991:(e,t,r)=>{r.d(t,{Z:()=>h});var i=r(67294),n=r(86010),s=r(53438),o=r(39960),a=r(13919),c=r(95999);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function p(e){let{href:t,children:r}=e;return i.createElement(o.Z,{href:t,className:(0,n.Z)("card padding--lg",l.cardContainer)},r)}function d(e){let{href:t,icon:r,title:s,description:o}=e;return i.createElement(p,{href:t},i.createElement("h2",{className:(0,n.Z)("text--truncate",l.cardTitle),title:s},r," ",s),o&&i.createElement("p",{className:(0,n.Z)("text--truncate",l.cardDescription),title:o},o))}function m(e){let{item:t}=e;const r=(0,s.Wl)(t);return r?i.createElement(d,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function u(e){let{item:t}=e;const r=(0,a.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,s.xz)(t.docId??void 0);return i.createElement(d,{href:t.href,icon:r,title:t.label,description:t.description??n?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return i.createElement(u,{item:t});case"category":return i.createElement(m,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const r=(0,s.jA)();return i.createElement(h,{items:r.items,className:t})}function h(e){const{items:t,className:r}=e;if(!t)return i.createElement(g,e);const o=(0,s.MN)(t);return i.createElement("section",{className:(0,n.Z)("row",r)},o.map(((e,t)=>i.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},i.createElement(f,{item:e})))))}},2558:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var i=r(87462),n=(r(67294),r(3905)),s=r(52991),o=r(53438);const a={id:"reports",title:"Reports",description:"Reports",custom_edit_url:null},c=void 0,l={unversionedId:"mp-api_versioned/reports",id:"mp-api_versioned/reports",title:"Reports",description:"Reports",source:"@site/docs/mp-api_versioned/reports.tag.mdx",sourceDirName:"mp-api_versioned",slug:"/mp-api_versioned/reports",permalink:"/pages/Flipkart/fk-api-platform-docs/docs/mp-api_versioned/reports",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"reports",title:"Reports",description:"Reports",custom_edit_url:null},sidebar:"mpapi-3.0.0",previous:{title:"Create listing request",permalink:"/pages/Flipkart/fk-api-platform-docs/docs/mp-api_versioned/create-listings"},next:{title:"Report Trigger API",permalink:"/pages/Flipkart/fk-api-platform-docs/docs/mp-api_versioned/report-trigger"}},p={},d=[],m={toc:d},u="wrapper";function f(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,i.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(s.Z,{items:(0,o.jA)().items,mdxType:"DocCardList"}))}f.isMDXComponent=!0}}]);