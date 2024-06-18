"use strict";(self.webpackChunkfk_api_platform_docs=self.webpackChunkfk_api_platform_docs||[]).push([[6491],{15950:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>d,toc:()=>s});var n=r(87462),i=(r(67294),r(3905));const a={},o="Return Created",d={unversionedId:"return-created-notification",id:"return-created-notification",title:"Return Created",description:"Description - Notification sent when a new return request is created.",source:"@site/docs/return-created-notification.md",sourceDirName:".",slug:"/return-created-notification",permalink:"/fk-api-platform-docs/docs/return-created-notification",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Shipment Form Failed",permalink:"/fk-api-platform-docs/docs/shipment-form-failed-notification"},next:{title:"Return Tracking Id Updated",permalink:"/fk-api-platform-docs/docs/return-tracking-id-update-notification"}},c={},s=[{value:"EventStructure",id:"eventstructure",level:2}],u={toc:s},p="wrapper";function m(e){let{components:t,...r}=e;return(0,i.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"return-created"},"Return Created"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Description")," - Notification sent when a new return request is created."),(0,i.kt)("h2",{id:"eventstructure"},"EventStructure"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n    "returnId" : "",\n    "eventType" : "return_created",\n    "source" : "",\n    "timestamp" : ISO time string,\n    "locationId" : "",\n    "attributes" : {\n        "status" : "RETURN_CREATED",\n        "returnItems" : [{\n            "returnId" : "", // primary identifier of the return\n                "orderItemId" : "", // order item id against which this return is created\n                "source" : "" , // possible values are courier_return, customer_return\n                "action" : "" ,\n                "quantity" :  , // item quantity in the return\n            "orderDate" : "", //  created date of the order\n            "createdDate" : "",\n            "updatedDate" : "",\n            "courierName" : "",\n            "reason" : "",\n            "subReason" : "",\n            "trackingId" : "",\n            "shipmentId" : "",\n            "comments" : "",\n            "completionDate" : "",\n            "replacementOrderItemId" : "",\n            "productId" : "",\n            "listingId" : "",\n            "expectedDate" : ""  // Date on which return is expected to be delivered to seller warehouse\n        }]\n    }\n}\n')))}m.isMDXComponent=!0}}]);