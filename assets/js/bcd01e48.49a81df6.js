"use strict";(self.webpackChunkfk_api_platform_docs=self.webpackChunkfk_api_platform_docs||[]).push([[6171],{71985:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>p,toc:()=>d});var n=a(87462),i=(a(67294),a(3905));const r={},o="Ready To Dispatch",p={unversionedId:"ready-to-dispatch-notification",id:"ready-to-dispatch-notification",title:"Ready To Dispatch",description:"Description - Notification sent when an shipment is marked \u201cReady to Dispatch\u201d by the seller.",source:"@site/docs/ready-to-dispatch-notification.md",sourceDirName:".",slug:"/ready-to-dispatch-notification",permalink:"/fk-api-platform-docs/docs/ready-to-dispatch-notification",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Packed",permalink:"/fk-api-platform-docs/docs/packed-notification"},next:{title:"Pickup Complete",permalink:"/fk-api-platform-docs/docs/pickup-complete-notification"}},s={},d=[{value:"EventStructure",id:"eventstructure",level:2},{value:"Example",id:"example",level:2}],c={toc:d},l="wrapper";function m(t){let{components:e,...a}=t;return(0,i.kt)(l,(0,n.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"ready-to-dispatch"},"Ready To Dispatch"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Description")," - Notification sent when an shipment is marked \u201cReady to Dispatch\u201d by the seller."),(0,i.kt)("h2",{id:"eventstructure"},"EventStructure"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n    "shipmentId": "",\n    "eventType": "shipment_ready_to_dispatch",\n    "source": "flipkart",\n    "timestamp": ISO time string,\n    "attributes": {\n        "status": "READY_TO_DISPATCH"\n    }\n}\n')),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"status")),(0,i.kt)("td",{parentName:"tr",align:null},"Possible value - ",(0,i.kt)("inlineCode",{parentName:"td"},"READY_TO_DISPATCH"))))),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  "eventType": "shipment_ready_to_dispatch",\n  "source": "flipkart",\n  "version": "v3",\n  "timestamp": "2017-03-30T14:45:25+05:30",\n  "attributes": {\n    "status": "READY_TO_DISPATCH"\n  },\n  "shipmentId": "d133588f-b0ac-443b-99b4-7ac8648a0f89"\n}\n')))}m.isMDXComponent=!0}}]);