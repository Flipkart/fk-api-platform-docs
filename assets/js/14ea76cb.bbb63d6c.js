"use strict";(self.webpackChunkfk_api_platform_docs=self.webpackChunkfk_api_platform_docs||[]).push([[8118],{11442:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>p,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var n=a(87462),i=(a(67294),a(3905));const s={},p="Dispatch Dates Changed",r={unversionedId:"dispatch-dates-changed-notification",id:"dispatch-dates-changed-notification",title:"Dispatch Dates Changed",description:"Description - Notification sent when there is a change in the shipment dispatch dates.",source:"@site/docs/dispatch-dates-changed-notification.md",sourceDirName:".",slug:"/dispatch-dates-changed-notification",permalink:"/pages/Flipkart/fk-api-platform-docs/docs/dispatch-dates-changed-notification",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Delivered",permalink:"/pages/Flipkart/fk-api-platform-docs/docs/delivered-notification"},next:{title:"Shipment Cancelled",permalink:"/pages/Flipkart/fk-api-platform-docs/docs/shipment-cancelled-notification"}},d={},c=[{value:"EventStructure",id:"eventstructure",level:2},{value:"Example",id:"example",level:2}],l={toc:c},o="wrapper";function h(t){let{components:e,...a}=t;return(0,i.kt)(o,(0,n.Z)({},l,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"dispatch-dates-changed"},"Dispatch Dates Changed"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Description")," - Notification sent when there is a change in the shipment dispatch dates."),(0,i.kt)("h2",{id:"eventstructure"},"EventStructure"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n    "shipmentId": "",\n    "eventType": "shipment_dispatch_dates_changed",\n    "source": "flipkart",\n    "timestamp": ISO time string,\n    "attributes": {\n        "dispatchAfterDate": "" //New dispatch after date\n        "dispatchByDate": "" //New dispatch by date\n    }\n}\n')),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"dispatchAfterDate")),(0,i.kt)("td",{parentName:"tr",align:null},"The new date of dispatch. ISO time string")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"dispatchByDate")),(0,i.kt)("td",{parentName:"tr",align:null},"The new date of dispatch. ISO time string")))),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  "eventType": "shipment_dispatch_dates_changed",\n  "source": "flipkart",\n  "version": "v3",\n  "timestamp": "2017-03-28T18:03:01+05:30",\n  "attributes": {\n    "dispatchAfterDate": "2017-03-27T23:59:59.000+05:30",\n    "dispatchByDate": "2017-03-28T23:59:59.000+05:30"\n  },\n  "shipmentId": "d133588f-b0ac-443b-99b4-7ac8648a0f89"\n}\n')))}h.isMDXComponent=!0}}]);