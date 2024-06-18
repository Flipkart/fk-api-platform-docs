"use strict";(self.webpackChunkfk_api_platform_docs=self.webpackChunkfk_api_platform_docs||[]).push([[1858],{73010:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var n=a(87462),i=(a(67294),a(3905));const r={sidebar_position:4},s="Best Practices",o={unversionedId:"best-practices",id:"best-practices",title:"Best Practices",description:"When developing client applications for the Flipkart MarketPlace:",source:"@site/docs/best-practices.md",sourceDirName:".",slug:"/best-practices",permalink:"/pages/Flipkart/fk-api-platform-docs/docs/best-practices",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Response Codes",permalink:"/pages/Flipkart/fk-api-platform-docs/docs/response-codes"},next:{title:"Listing Management API",permalink:"/pages/Flipkart/fk-api-platform-docs/docs/listing-management-intro"}},p={},l=[],c={toc:l},d="wrapper";function u(e){let{components:t,...a}=e;return(0,i.kt)(d,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"best-practices"},"Best Practices"),(0,i.kt)("p",null,"When developing client applications for the Flipkart MarketPlace:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Test your applications in the sandbox before integrating with the production environment."),(0,i.kt)("li",{parentName:"ul"},"Ensure that your client applications are ready to handle changes to the response structure and do not break when new fields are added."),(0,i.kt)("li",{parentName:"ul"},"Do not hardcode the access token for the client application as it expires after a certain duration"),(0,i.kt)("li",{parentName:"ul"},"Keep a log of all the Flipkart API requests and reponses in your client application."),(0,i.kt)("li",{parentName:"ul"},"Note that the response elements and fields are not returned in any particular sequence. The samples provided in our documentation are for reference only."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"If subscribed for notifications, ensure that all the incoming events are accepted and handled as needed i.e., even if some events are not useful for your use-case, accept the event and perform a no-operation."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Since Flipkart ensures the ordering of the events, all the incoming events must be consumed by the client apps inorder to receive the subsequent events of the group. A failure in event consumption will lead to non-delivery of the new events of this group.")))))}u.isMDXComponent=!0}}]);