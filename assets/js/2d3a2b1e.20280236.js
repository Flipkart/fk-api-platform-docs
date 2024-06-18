"use strict";(self.webpackChunkfk_api_platform_docs=self.webpackChunkfk_api_platform_docs||[]).push([[7242],{14761:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>f,frontMatter:()=>r,metadata:()=>l,toc:()=>m});var a=n(87462),i=(n(67294),n(3905));const r={},o="Shipment Form Failed",l={unversionedId:"shipment-form-failed-notification",id:"shipment-form-failed-notification",title:"Shipment Form Failed",description:"Description - Notification sent when form generation for any shipment failed from flipkart end.",source:"@site/docs/shipment-form-failed-notification.md",sourceDirName:".",slug:"/shipment-form-failed-notification",permalink:"/fk-api-platform-docs/docs/shipment-form-failed-notification",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Shipment Cancelled",permalink:"/fk-api-platform-docs/docs/shipment-cancelled-notification"},next:{title:"Return Created",permalink:"/fk-api-platform-docs/docs/return-created-notification"}},p={},m=[{value:"EventStructure",id:"eventstructure",level:2},{value:"Example",id:"example",level:2}],s={toc:m},d="wrapper";function f(t){let{components:e,...n}=t;return(0,i.kt)(d,(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"shipment-form-failed"},"Shipment Form Failed"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Description")," - Notification sent when form generation for any shipment failed from flipkart end."),(0,i.kt)("h2",{id:"eventstructure"},"EventStructure"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n     "shipmentId": "",\n     "eventType": "shipment_form_failed",\n     "source": "",\n     "timestamp": ISO time string,\n     "attributes": {\n         "status": "FORM_FAILED",\n         "forms":[]\n     }\n}\n')),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"status")),(0,i.kt)("td",{parentName:"tr",align:null},"Possible value - ",(0,i.kt)("inlineCode",{parentName:"td"},"FORM_FAILED"))))),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n   "eventType": "shipment_form_failed",\n   "source": "flipkart",\n   "version": "v3",\n   "timestamp": "2017-03-28T18:03:01+05:30",\n   "attributes": {\n     "status": "FORM_FAILED",\n     "forms": ["FORM600TG"]\n   },\n   "shipmentId": "d133588f-b0ac-443b-99b4-7ac8648a0f89"\n }\n')))}f.isMDXComponent=!0}}]);