"use strict";(self.webpackChunkfk_api_platform_docs=self.webpackChunkfk_api_platform_docs||[]).push([[1038],{5201:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>y,contentTitle:()=>h,default:()=>g,frontMatter:()=>c,metadata:()=>u,toc:()=>f});var s=i(87462),a=(i(67294),i(3905)),r=i(38055),o=(i(47878),i(55878)),p=i(51663),n=(i(98045),i(91795)),l=i(18211),d=i(55985),m=i(85162);const c={id:"submit-self-ship-deliver-attempt-request",title:"Update delivery attempt for self-ship order items",description:"This operation is used to update the delivery attempt with failure reason and new delivery date for the self-ship order items.",sidebar_label:"Update delivery attempt for self-ship order items",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Orders V2"],description:"This operation is used to update the delivery attempt with failure reason and new delivery date for the self-ship order items.",operationId:"submitSelfShipDeliverAttemptRequest",requestBody:{content:{"application/json":{schema:{required:["shipments"],type:"object",properties:{shipments:{type:"array",items:{required:["deliveryDate"],type:"object",properties:{shipmentId:{type:"string"},locationId:{type:"string"},deliveryDate:{type:"string",format:"date-time"}},title:"DeliverRequest"}}},title:"ShipmentsDeliverAttemptRequestV2"}}},required:!1},responses:{200:{description:"successful operation",content:{"application/json":{schema:{type:"object",properties:{shipments:{type:"array",items:{type:"object",properties:{shipmentId:{type:"string"},processingStatus:{type:"string"},errorCode:{type:"string"},errorMessage:{type:"string"}},title:"ShipmentResponseStatusV2"}}},title:"ShipmentsDeliverResponseV2"}}}}},"x-codegen-request-body-name":"body",method:"post",path:"/v2/shipments/deliveryAttempt",servers:[{url:"https://api.flipkart.net/sellers"},{url:"https://sandbox-api.flipkart.net/sellers"}],security:[{Bearer:[]}],securitySchemes:{Bearer:{type:"apiKey",name:"Authorization",in:"header"}},jsonRequestBodyExample:{shipments:[{shipmentId:"string",locationId:"string",deliveryDate:"2024-03-26T08:51:44.228Z"}]},info:{title:"Flipkart Marketplace API",description:"This API is offered by Flipkart Marketplace to sellers and partners for orders and listing management. <br /><br />You will need an access token to explore our APIs in the sandbox environment. For details on getting an access token, refer to the <a href='/docs/intro#api-application-setup'> documentation</a>. <br />Once you get the access token, use it to authorize the requests using the  <code>Authorize</code> button below. e.g. if your access token is <code>ACCTOK1</code>, the input for authorization should be <code>Bearer ACCTOK1</code>",contact:{name:"API Support",email:"seller-api-queries@flipkart.com"},version:"2.0"},postman:{name:"Update delivery attempt for self-ship order items",description:{content:"This operation is used to update the delivery attempt with failure reason and new delivery date for the self-ship order items.",type:"text/plain"},url:{path:["v2","shipments","deliveryAttempt"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/mp-api_versioned/2.0.0/flipkart-marketplace-api",custom_edit_url:null},h=void 0,u={unversionedId:"mp-api_versioned/2.0.0/submit-self-ship-deliver-attempt-request",id:"mp-api_versioned/2.0.0/submit-self-ship-deliver-attempt-request",title:"Update delivery attempt for self-ship order items",description:"This operation is used to update the delivery attempt with failure reason and new delivery date for the self-ship order items.",source:"@site/docs/mp-api_versioned/2.0.0/submit-self-ship-deliver-attempt-request.api.mdx",sourceDirName:"mp-api_versioned/2.0.0",slug:"/mp-api_versioned/2.0.0/submit-self-ship-deliver-attempt-request",permalink:"/pages/Flipkart/fk-api-platform-docs/docs/mp-api_versioned/2.0.0/submit-self-ship-deliver-attempt-request",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"submit-self-ship-deliver-attempt-request",title:"Update delivery attempt for self-ship order items",description:"This operation is used to update the delivery attempt with failure reason and new delivery date for the self-ship order items.",sidebar_label:"Update delivery attempt for self-ship order items",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Orders V2"],description:"This operation is used to update the delivery attempt with failure reason and new delivery date for the self-ship order items.",operationId:"submitSelfShipDeliverAttemptRequest",requestBody:{content:{"application/json":{schema:{required:["shipments"],type:"object",properties:{shipments:{type:"array",items:{required:["deliveryDate"],type:"object",properties:{shipmentId:{type:"string"},locationId:{type:"string"},deliveryDate:{type:"string",format:"date-time"}},title:"DeliverRequest"}}},title:"ShipmentsDeliverAttemptRequestV2"}}},required:!1},responses:{200:{description:"successful operation",content:{"application/json":{schema:{type:"object",properties:{shipments:{type:"array",items:{type:"object",properties:{shipmentId:{type:"string"},processingStatus:{type:"string"},errorCode:{type:"string"},errorMessage:{type:"string"}},title:"ShipmentResponseStatusV2"}}},title:"ShipmentsDeliverResponseV2"}}}}},"x-codegen-request-body-name":"body",method:"post",path:"/v2/shipments/deliveryAttempt",servers:[{url:"https://api.flipkart.net/sellers"},{url:"https://sandbox-api.flipkart.net/sellers"}],security:[{Bearer:[]}],securitySchemes:{Bearer:{type:"apiKey",name:"Authorization",in:"header"}},jsonRequestBodyExample:{shipments:[{shipmentId:"string",locationId:"string",deliveryDate:"2024-03-26T08:51:44.228Z"}]},info:{title:"Flipkart Marketplace API",description:"This API is offered by Flipkart Marketplace to sellers and partners for orders and listing management. <br /><br />You will need an access token to explore our APIs in the sandbox environment. For details on getting an access token, refer to the <a href='/docs/intro#api-application-setup'> documentation</a>. <br />Once you get the access token, use it to authorize the requests using the  <code>Authorize</code> button below. e.g. if your access token is <code>ACCTOK1</code>, the input for authorization should be <code>Bearer ACCTOK1</code>",contact:{name:"API Support",email:"seller-api-queries@flipkart.com"},version:"2.0"},postman:{name:"Update delivery attempt for self-ship order items",description:{content:"This operation is used to update the delivery attempt with failure reason and new delivery date for the self-ship order items.",type:"text/plain"},url:{path:["v2","shipments","deliveryAttempt"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/mp-api_versioned/2.0.0/flipkart-marketplace-api",custom_edit_url:null},sidebar:"mpapi-2.0.0",previous:{title:"Mark self-ship order items ready for dispatch",permalink:"/pages/Flipkart/fk-api-platform-docs/docs/mp-api_versioned/2.0.0/submit-self-shipment-dispatch-request"}},y={},f=[],v={toc:f},k="wrapper";function g(e){let{components:t,...i}=e;return(0,a.kt)(k,(0,s.Z)({},v,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{className:"openapi__heading"},"Update delivery attempt for self-ship order items"),(0,a.kt)(o.Z,{method:"post",path:"/v2/shipments/deliveryAttempt",mdxType:"MethodEndpoint"}),(0,a.kt)("p",null,"This operation is used to update the delivery attempt with failure reason and new delivery date for the self-ship order items."),(0,a.kt)(p.Z,{className:"openapi-tabs__mime",mdxType:"MimeTabs"},(0,a.kt)(m.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Request Body")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{},className:"openapi-markdown__details"},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"shipments"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)("li",null,(0,a.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,a.kt)(l.Z,{collapsible:!1,name:"shipmentId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"locationId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"deliveryDate",required:!0,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time"},mdxType:"SchemaItem"}),(0,a.kt)("li",null,(0,a.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))))))),(0,a.kt)("div",null,(0,a.kt)("div",null,(0,a.kt)(r.Z,{mdxType:"ApiTabs"},(0,a.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"successful operation")),(0,a.kt)("div",null,(0,a.kt)(p.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,a.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,a.kt)(d.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,a.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Schema")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{},className:"openapi-markdown__details"},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"shipments"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)("li",null,(0,a.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,a.kt)(l.Z,{collapsible:!1,name:"shipmentId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"processingStatus",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"errorCode",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"errorMessage",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,a.kt)("li",null,(0,a.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,a.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,a.kt)(n.Z,{responseExample:'{\n  "shipments": [\n    {\n      "shipmentId": "string",\n      "processingStatus": "string",\n      "errorCode": "string",\n      "errorMessage": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}g.isMDXComponent=!0}}]);