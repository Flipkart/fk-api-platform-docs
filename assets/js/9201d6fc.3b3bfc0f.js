"use strict";(self.webpackChunkfk_api_platform_docs=self.webpackChunkfk_api_platform_docs||[]).push([[1702],{67719:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>y,contentTitle:()=>h,default:()=>b,frontMatter:()=>d,metadata:()=>u,toc:()=>g});var s=i(87462),a=(i(67294),i(3905)),n=i(38055),r=(i(47878),i(55878)),o=i(51663),p=(i(98045),i(91795)),l=i(18211),m=i(55985),c=i(85162);const d={id:"cancel-by-enforced-group-ids",title:"Cancel order items in a shipment",description:"This operation allows client to cancel order items inside shipment before marking them `PACKED`",sidebar_label:"Cancel order items in a shipment",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Shipment V3"],description:"This operation allows client to cancel order items inside shipment before marking them `PACKED`",operationId:"cancelByEnforcedGroupIds",requestBody:{content:{"application/json":{schema:{type:"object",properties:{shipments:{maxItems:25,minItems:1,type:"array",items:{type:"object",properties:{shipmentId:{type:"string"},reason:{type:"string"},locationId:{type:"string"},cancellationGroupIds:{uniqueItems:!0,type:"array",items:{type:"string"}}},title:"CancelShipment"}}},title:"CancelShipmentRequest"}}},required:!1},responses:{200:{description:"successful operation",content:{"application/json":{schema:{type:"object",properties:{shipments:{type:"array",items:{type:"object",properties:{shipmentId:{type:"string"},status:{type:"string"},errorCode:{type:"string"},errorMessage:{type:"string"}},title:"ShipmentV3"}}},title:"ShipmentStatusResponseV3"}}}}},"x-codegen-request-body-name":"body",method:"post",path:"/sellers/v3/shipments/cancel",servers:[{url:"https://api.flipkart.net"},{url:"https://sandbox-api.flipkart.net"}],security:[{Bearer:[]}],securitySchemes:{Bearer:{type:"apiKey",name:"Authorization",in:"header"}},jsonRequestBodyExample:{shipments:[{shipmentId:"string",reason:"string",locationId:"string",cancellationGroupIds:["string"]}]},info:{title:"Flipkart Marketplace API",description:"This API is offered by Flipkart Marketplace to sellers and partners for orders and listing management. <br /><br />You will need an access token to explore our APIs in the sandbox environment. For details on getting an access token, refer to the <a href='https://seller.flipkart.com/api-docs/FMSAPI.html#sandbox-environment'> documentation</a>. <br />Once you get the access token, use it to authorize the requests using the  <code>Authorize</code> button below. e.g. if your access token is <code>ACCTOK1</code>, the input for authorization should be <code>Bearer ACCTOK1</code>",contact:{name:"API Support",email:"seller-api-queries@flipkart.com"},version:"3.0"},postman:{name:"Cancel order items in a shipment",description:{content:"This operation allows client to cancel order items inside shipment before marking them `PACKED`",type:"text/plain"},url:{path:["sellers","v3","shipments","cancel"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/mp-api_versioned/flipkart-marketplace-api",custom_edit_url:null},h=void 0,u={unversionedId:"mp-api_versioned/cancel-by-enforced-group-ids",id:"mp-api_versioned/cancel-by-enforced-group-ids",title:"Cancel order items in a shipment",description:"This operation allows client to cancel order items inside shipment before marking them `PACKED`",source:"@site/docs/mp-api_versioned/cancel-by-enforced-group-ids.api.mdx",sourceDirName:"mp-api_versioned",slug:"/mp-api_versioned/cancel-by-enforced-group-ids",permalink:"/pages/Flipkart/fk-api-platform-docs/docs/mp-api_versioned/cancel-by-enforced-group-ids",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"cancel-by-enforced-group-ids",title:"Cancel order items in a shipment",description:"This operation allows client to cancel order items inside shipment before marking them `PACKED`",sidebar_label:"Cancel order items in a shipment",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Shipment V3"],description:"This operation allows client to cancel order items inside shipment before marking them `PACKED`",operationId:"cancelByEnforcedGroupIds",requestBody:{content:{"application/json":{schema:{type:"object",properties:{shipments:{maxItems:25,minItems:1,type:"array",items:{type:"object",properties:{shipmentId:{type:"string"},reason:{type:"string"},locationId:{type:"string"},cancellationGroupIds:{uniqueItems:!0,type:"array",items:{type:"string"}}},title:"CancelShipment"}}},title:"CancelShipmentRequest"}}},required:!1},responses:{200:{description:"successful operation",content:{"application/json":{schema:{type:"object",properties:{shipments:{type:"array",items:{type:"object",properties:{shipmentId:{type:"string"},status:{type:"string"},errorCode:{type:"string"},errorMessage:{type:"string"}},title:"ShipmentV3"}}},title:"ShipmentStatusResponseV3"}}}}},"x-codegen-request-body-name":"body",method:"post",path:"/sellers/v3/shipments/cancel",servers:[{url:"https://api.flipkart.net"},{url:"https://sandbox-api.flipkart.net"}],security:[{Bearer:[]}],securitySchemes:{Bearer:{type:"apiKey",name:"Authorization",in:"header"}},jsonRequestBodyExample:{shipments:[{shipmentId:"string",reason:"string",locationId:"string",cancellationGroupIds:["string"]}]},info:{title:"Flipkart Marketplace API",description:"This API is offered by Flipkart Marketplace to sellers and partners for orders and listing management. <br /><br />You will need an access token to explore our APIs in the sandbox environment. For details on getting an access token, refer to the <a href='https://seller.flipkart.com/api-docs/FMSAPI.html#sandbox-environment'> documentation</a>. <br />Once you get the access token, use it to authorize the requests using the  <code>Authorize</code> button below. e.g. if your access token is <code>ACCTOK1</code>, the input for authorization should be <code>Bearer ACCTOK1</code>",contact:{name:"API Support",email:"seller-api-queries@flipkart.com"},version:"3.0"},postman:{name:"Cancel order items in a shipment",description:{content:"This operation allows client to cancel order items inside shipment before marking them `PACKED`",type:"text/plain"},url:{path:["sellers","v3","shipments","cancel"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/mp-api_versioned/flipkart-marketplace-api",custom_edit_url:null},sidebar:"mpapi-3.0.0",previous:{title:"Get shipping related details for shipments",permalink:"/pages/Flipkart/fk-api-platform-docs/docs/mp-api_versioned/get-shipment-details"},next:{title:"Get shipment handover counts per vendor",permalink:"/pages/Flipkart/fk-api-platform-docs/docs/mp-api_versioned/get-vendor-group-details"}},y={},g=[],k={toc:g},f="wrapper";function b(e){let{components:t,...i}=e;return(0,a.kt)(f,(0,s.Z)({},k,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{className:"openapi__heading"},"Cancel order items in a shipment"),(0,a.kt)(r.Z,{method:"post",path:"/sellers/v3/shipments/cancel",mdxType:"MethodEndpoint"}),(0,a.kt)("p",null,"This operation allows client to cancel order items inside shipment before marking them ",(0,a.kt)("inlineCode",{parentName:"p"},"PACKED")),(0,a.kt)(o.Z,{className:"openapi-tabs__mime",mdxType:"MimeTabs"},(0,a.kt)(c.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Request Body")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{},className:"openapi-markdown__details"},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"shipments"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Possible values:")," ",(0,a.kt)("inlineCode",{parentName:"p"},">= 1"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"<= 25"))),(0,a.kt)("li",null,(0,a.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,a.kt)(l.Z,{collapsible:!1,name:"shipmentId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"reason",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"locationId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"cancellationGroupIds",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{uniqueItems:!0,type:"array",items:{type:"string"}},mdxType:"SchemaItem"}),(0,a.kt)("li",null,(0,a.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))))))),(0,a.kt)("div",null,(0,a.kt)("div",null,(0,a.kt)(n.Z,{mdxType:"ApiTabs"},(0,a.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"successful operation")),(0,a.kt)("div",null,(0,a.kt)(o.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,a.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,a.kt)(m.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,a.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Schema")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{},className:"openapi-markdown__details"},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"shipments"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)("li",null,(0,a.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,a.kt)(l.Z,{collapsible:!1,name:"shipmentId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"status",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"errorCode",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"errorMessage",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,a.kt)("li",null,(0,a.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,a.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,a.kt)(p.Z,{responseExample:'{\n  "shipments": [\n    {\n      "shipmentId": "string",\n      "status": "string",\n      "errorCode": "string",\n      "errorMessage": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}b.isMDXComponent=!0}}]);