"use strict";(self.webpackChunkfk_api_platform_docs=self.webpackChunkfk_api_platform_docs||[]).push([[9571],{90678:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var a=n(87462),i=(n(67294),n(3905));const r={},l="Shipment Cancelled",o={unversionedId:"shipment-cancelled-notification",id:"shipment-cancelled-notification",title:"Shipment Cancelled",description:"Description - Notification sent when any order item inside the shipment is cancelled.",source:"@site/docs/shipment-cancelled-notification.md",sourceDirName:".",slug:"/shipment-cancelled-notification",permalink:"/fk-api-platform-docs/docs/shipment-cancelled-notification",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Dispatch Dates Changed",permalink:"/fk-api-platform-docs/docs/dispatch-dates-changed-notification"},next:{title:"Shipment Form Failed",permalink:"/fk-api-platform-docs/docs/shipment-form-failed-notification"}},s={},d=[{value:"EventStructure",id:"eventstructure",level:2},{value:"Example",id:"example",level:2}],p={toc:d},c="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"shipment-cancelled"},"Shipment Cancelled"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Description")," - Notification sent when any order item inside the shipment is cancelled."),(0,i.kt)("h2",{id:"eventstructure"},"EventStructure"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n    "shipmentId": "",\n    "eventType": "shipment_cancelled",\n    "locationId": "",\n    "source": "",\n    "timestamp": ISO time string,\n    "attributes": {\n        "status": "CANCELLED",\n        "orderItems": [{\n            "orderItemId": "",\n            "quantity": ,\n            "reason": "",\n            "subReason": ""\n        }]\n    }\n}\n')),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"status")),(0,i.kt)("td",{parentName:"tr",align:null},"Possible value - ",(0,i.kt)("inlineCode",{parentName:"td"},"CANCELLED"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"quantity")),(0,i.kt)("td",{parentName:"tr",align:null},"Number of quantity cancelled for that order item id")))),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  "eventType": "shipment_cancelled",\n  "source": "flipkart",\n  "version": "v3",\n  "timestamp": "2017-04-12T12:12:15+05:30",\n  "locationId" : "LOC1234",\n  "attributes": {\n    "status": "CANCELLED",\n    "orderItems": [{\n      "orderItemId": "6452425382623300",\n      "quantity": 1,\n      "reason": "seller_cancellation",\n      "subReason": "not_enough_inventory"\n    }]\n  },\n  "shipmentId": "d133588f-b0ac-443b-99b4-7ac8648a0f89"\n}\n')))}m.isMDXComponent=!0}}]);