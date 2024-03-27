"use strict";(self.webpackChunkfk_api_platform_docs=self.webpackChunkfk_api_platform_docs||[]).push([[3774],{66568:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>y,frontMatter:()=>m,metadata:()=>h,toc:()=>k});var a=i(87462),s=(i(67294),i(3905)),n=i(38055),r=(i(47878),i(55878)),p=i(51663),o=i(98045),d=(i(91795),i(18211)),l=(i(55985),i(85162));const m={id:"update-tracking-info",title:"Update Tracking Id of the Shipment",description:"This operation is used to update the Tracking Id for self-ship shipments.",sidebar_label:"Update Tracking Id of the Shipment",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Shipment V3"],description:"This operation is used to update the Tracking Id for self-ship shipments.",operationId:"updateTrackingInfo",parameters:[{name:"shipmentId",in:"path",required:!0,schema:{type:"string"}}],requestBody:{content:{"application/json":{schema:{type:"object",properties:{shipment_id:{type:"string"},tracking_id:{type:"string"},seller_id:{type:"string"},delivery_partner:{type:"string"},tentative_delivery_date:{type:"string",format:"date-time"}},title:"UpdateShipmentRequest"}}},required:!1},responses:{default:{description:"successful operation",content:{}}},"x-codegen-request-body-name":"body",method:"post",path:"/sellers/v3/shipments/{shipmentId}/update",servers:[{url:"https://api.flipkart.net"},{url:"https://sandbox-api.flipkart.net"}],security:[{Bearer:[]}],securitySchemes:{Bearer:{type:"apiKey",name:"Authorization",in:"header"}},jsonRequestBodyExample:{shipment_id:"string",tracking_id:"string",seller_id:"string",delivery_partner:"string",tentative_delivery_date:"2024-03-26T08:51:38.943Z"},info:{title:"Flipkart Marketplace API",description:"This API is offered by Flipkart Marketplace to sellers and partners for orders and listing management. <br /><br />You will need an access token to explore our APIs in the sandbox environment. For details on getting an access token, refer to the <a href='https://seller.flipkart.com/api-docs/FMSAPI.html#sandbox-environment'> documentation</a>. <br />Once you get the access token, use it to authorize the requests using the  <code>Authorize</code> button below. e.g. if your access token is <code>ACCTOK1</code>, the input for authorization should be <code>Bearer ACCTOK1</code>",contact:{name:"API Support",email:"seller-api-queries@flipkart.com"},version:"3.0"},postman:{name:"Update Tracking Id of the Shipment",description:{content:"This operation is used to update the Tracking Id for self-ship shipments.",type:"text/plain"},url:{path:["sellers","v3","shipments",":shipmentId","update"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"shipmentId"}]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/mp-api_versioned/flipkart-marketplace-api",custom_edit_url:null},c=void 0,h={unversionedId:"mp-api_versioned/update-tracking-info",id:"mp-api_versioned/update-tracking-info",title:"Update Tracking Id of the Shipment",description:"This operation is used to update the Tracking Id for self-ship shipments.",source:"@site/docs/mp-api_versioned/update-tracking-info.api.mdx",sourceDirName:"mp-api_versioned",slug:"/mp-api_versioned/update-tracking-info",permalink:"/pages/Flipkart/fk-api-platform-docs/docs/mp-api_versioned/update-tracking-info",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"update-tracking-info",title:"Update Tracking Id of the Shipment",description:"This operation is used to update the Tracking Id for self-ship shipments.",sidebar_label:"Update Tracking Id of the Shipment",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Shipment V3"],description:"This operation is used to update the Tracking Id for self-ship shipments.",operationId:"updateTrackingInfo",parameters:[{name:"shipmentId",in:"path",required:!0,schema:{type:"string"}}],requestBody:{content:{"application/json":{schema:{type:"object",properties:{shipment_id:{type:"string"},tracking_id:{type:"string"},seller_id:{type:"string"},delivery_partner:{type:"string"},tentative_delivery_date:{type:"string",format:"date-time"}},title:"UpdateShipmentRequest"}}},required:!1},responses:{default:{description:"successful operation",content:{}}},"x-codegen-request-body-name":"body",method:"post",path:"/sellers/v3/shipments/{shipmentId}/update",servers:[{url:"https://api.flipkart.net"},{url:"https://sandbox-api.flipkart.net"}],security:[{Bearer:[]}],securitySchemes:{Bearer:{type:"apiKey",name:"Authorization",in:"header"}},jsonRequestBodyExample:{shipment_id:"string",tracking_id:"string",seller_id:"string",delivery_partner:"string",tentative_delivery_date:"2024-03-26T08:51:38.943Z"},info:{title:"Flipkart Marketplace API",description:"This API is offered by Flipkart Marketplace to sellers and partners for orders and listing management. <br /><br />You will need an access token to explore our APIs in the sandbox environment. For details on getting an access token, refer to the <a href='https://seller.flipkart.com/api-docs/FMSAPI.html#sandbox-environment'> documentation</a>. <br />Once you get the access token, use it to authorize the requests using the  <code>Authorize</code> button below. e.g. if your access token is <code>ACCTOK1</code>, the input for authorization should be <code>Bearer ACCTOK1</code>",contact:{name:"API Support",email:"seller-api-queries@flipkart.com"},version:"3.0"},postman:{name:"Update Tracking Id of the Shipment",description:{content:"This operation is used to update the Tracking Id for self-ship shipments.",type:"text/plain"},url:{path:["sellers","v3","shipments",":shipmentId","update"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"shipmentId"}]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/mp-api_versioned/flipkart-marketplace-api",custom_edit_url:null},sidebar:"mpapi-3.0.0",previous:{title:"Get Returns OTC",permalink:"/pages/Flipkart/fk-api-platform-docs/docs/mp-api_versioned/get-reverse-otc"},next:{title:"Update delivery attempt for self-ship shipments",permalink:"/pages/Flipkart/fk-api-platform-docs/docs/mp-api_versioned/submit-self-ship-deliver-attempt-request"}},u={},k=[],f={toc:k},g="wrapper";function y(e){let{components:t,...i}=e;return(0,s.kt)(g,(0,a.Z)({},f,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{className:"openapi__heading"},"Update Tracking Id of the Shipment"),(0,s.kt)(r.Z,{method:"post",path:"/sellers/v3/shipments/{shipmentId}/update",mdxType:"MethodEndpoint"}),(0,s.kt)("p",null,"This operation is used to update the Tracking Id for self-ship shipments."),(0,s.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Path Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(o.Z,{className:"paramsItem",param:{name:"shipmentId",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,s.kt)(p.Z,{className:"openapi-tabs__mime",mdxType:"MimeTabs"},(0,s.kt)(l.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Request Body")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(d.Z,{collapsible:!1,name:"shipment_id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"tracking_id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"seller_id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"delivery_partner",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"tentative_delivery_date",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time"},mdxType:"SchemaItem"}))))),(0,s.kt)("div",null,(0,s.kt)("div",null,(0,s.kt)(n.Z,{mdxType:"ApiTabs"},(0,s.kt)(l.Z,{label:"default",value:"default",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"successful operation")),(0,s.kt)("div",null))))))}y.isMDXComponent=!0}}]);