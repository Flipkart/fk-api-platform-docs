"use strict";(self.webpackChunkfk_api_platform_docs=self.webpackChunkfk_api_platform_docs||[]).push([[5342],{81148:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>y,contentTitle:()=>u,default:()=>b,frontMatter:()=>d,metadata:()=>h,toc:()=>f});var a=s(87462),r=(s(67294),s(3905)),i=s(38055),n=(s(47878),s(55878)),o=s(51663),p=(s(98045),s(91795)),l=s(18211),c=s(55985),m=s(85162);const d={id:"cancel-self-ship-return",title:"Cancel self-ship return",description:"This operation is used to cancel the self-ship return",sidebar_label:"Cancel self-ship return",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Returns V2"],description:"This operation is used to cancel the self-ship return",operationId:"cancelSelfShipReturn",requestBody:{content:{"application/json":{schema:{required:["returnIds"],type:"object",properties:{returnIds:{maxItems:2147483647,minItems:1,type:"array",items:{type:"string"}},locationId:{type:"string"}},title:"SelfShipReturnCancellationRequest"}}},required:!1},responses:{200:{description:"successful operation",content:{"application/json":{schema:{type:"object",properties:{returns:{type:"array",items:{type:"object",properties:{returnId:{type:"string"},processingStatus:{type:"string"},errorCode:{type:"string"},errorMessage:{type:"string"}},title:"ReturnActionResponse"}}},title:"ReturnsActionResponseV2"}}}}},"x-codegen-request-body-name":"body",method:"post",path:"/v2/returns/cancel",servers:[{url:"https://api.flipkart.net/sellers"},{url:"https://sandbox-api.flipkart.net/sellers"}],security:[{Bearer:[]}],securitySchemes:{Bearer:{type:"apiKey",name:"Authorization",in:"header"}},jsonRequestBodyExample:{returnIds:["string"],locationId:"string"},info:{title:"Flipkart Marketplace API",description:"This API is offered by Flipkart Marketplace to sellers and partners for orders and listing management. <br /><br />You will need an access token to explore our APIs in the sandbox environment. For details on getting an access token, refer to the <a href='/docs/intro#api-application-setup'> documentation</a>. <br />Once you get the access token, use it to authorize the requests using the  <code>Authorize</code> button below. e.g. if your access token is <code>ACCTOK1</code>, the input for authorization should be <code>Bearer ACCTOK1</code>",contact:{name:"API Support",email:"seller-api-queries@flipkart.com"},version:"2.0"},postman:{name:"Cancel self-ship return",description:{content:"This operation is used to cancel the self-ship return",type:"text/plain"},url:{path:["v2","returns","cancel"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/mp-api_versioned/2.0.0/flipkart-marketplace-api",custom_edit_url:null},u=void 0,h={unversionedId:"mp-api_versioned/2.0.0/cancel-self-ship-return",id:"mp-api_versioned/2.0.0/cancel-self-ship-return",title:"Cancel self-ship return",description:"This operation is used to cancel the self-ship return",source:"@site/docs/mp-api_versioned/2.0.0/cancel-self-ship-return.api.mdx",sourceDirName:"mp-api_versioned/2.0.0",slug:"/mp-api_versioned/2.0.0/cancel-self-ship-return",permalink:"/pages/Flipkart/fk-api-platform-docs/docs/mp-api_versioned/2.0.0/cancel-self-ship-return",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"cancel-self-ship-return",title:"Cancel self-ship return",description:"This operation is used to cancel the self-ship return",sidebar_label:"Cancel self-ship return",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Returns V2"],description:"This operation is used to cancel the self-ship return",operationId:"cancelSelfShipReturn",requestBody:{content:{"application/json":{schema:{required:["returnIds"],type:"object",properties:{returnIds:{maxItems:2147483647,minItems:1,type:"array",items:{type:"string"}},locationId:{type:"string"}},title:"SelfShipReturnCancellationRequest"}}},required:!1},responses:{200:{description:"successful operation",content:{"application/json":{schema:{type:"object",properties:{returns:{type:"array",items:{type:"object",properties:{returnId:{type:"string"},processingStatus:{type:"string"},errorCode:{type:"string"},errorMessage:{type:"string"}},title:"ReturnActionResponse"}}},title:"ReturnsActionResponseV2"}}}}},"x-codegen-request-body-name":"body",method:"post",path:"/v2/returns/cancel",servers:[{url:"https://api.flipkart.net/sellers"},{url:"https://sandbox-api.flipkart.net/sellers"}],security:[{Bearer:[]}],securitySchemes:{Bearer:{type:"apiKey",name:"Authorization",in:"header"}},jsonRequestBodyExample:{returnIds:["string"],locationId:"string"},info:{title:"Flipkart Marketplace API",description:"This API is offered by Flipkart Marketplace to sellers and partners for orders and listing management. <br /><br />You will need an access token to explore our APIs in the sandbox environment. For details on getting an access token, refer to the <a href='/docs/intro#api-application-setup'> documentation</a>. <br />Once you get the access token, use it to authorize the requests using the  <code>Authorize</code> button below. e.g. if your access token is <code>ACCTOK1</code>, the input for authorization should be <code>Bearer ACCTOK1</code>",contact:{name:"API Support",email:"seller-api-queries@flipkart.com"},version:"2.0"},postman:{name:"Cancel self-ship return",description:{content:"This operation is used to cancel the self-ship return",type:"text/plain"},url:{path:["v2","returns","cancel"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/mp-api_versioned/2.0.0/flipkart-marketplace-api",custom_edit_url:null},sidebar:"mpapi-2.0.0",previous:{title:"Update self-ship returns pickup attempt",permalink:"/pages/Flipkart/fk-api-platform-docs/docs/mp-api_versioned/2.0.0/pickup-attempt"},next:{title:"Update services as complete",permalink:"/pages/Flipkart/fk-api-platform-docs/docs/mp-api_versioned/2.0.0/submit-service-complete-request"}},y={},f=[],k={toc:f},g="wrapper";function b(e){let{components:t,...s}=e;return(0,r.kt)(g,(0,a.Z)({},k,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{className:"openapi__heading"},"Cancel self-ship return"),(0,r.kt)(n.Z,{method:"post",path:"/v2/returns/cancel",mdxType:"MethodEndpoint"}),(0,r.kt)("p",null,"This operation is used to cancel the self-ship return"),(0,r.kt)(o.Z,{className:"openapi-tabs__mime",mdxType:"MimeTabs"},(0,r.kt)(m.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Request Body")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(l.Z,{collapsible:!1,name:"returnIds",required:!0,schemaName:"string[]",qualifierMessage:"**Possible values:** `>= 1`, `<= 2147483647`",schema:{maxItems:2147483647,minItems:1,type:"array",items:{type:"string"}},mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"locationId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}))))),(0,r.kt)("div",null,(0,r.kt)("div",null,(0,r.kt)(i.Z,{mdxType:"ApiTabs"},(0,r.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"successful operation")),(0,r.kt)("div",null,(0,r.kt)(o.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(c.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,r.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{},className:"openapi-markdown__details"},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"returns"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,r.kt)(l.Z,{collapsible:!1,name:"returnId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"processingStatus",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"errorCode",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"errorMessage",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,r.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(p.Z,{responseExample:'{\n  "returns": [\n    {\n      "returnId": "string",\n      "processingStatus": "string",\n      "errorCode": "string",\n      "errorMessage": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}b.isMDXComponent=!0}}]);