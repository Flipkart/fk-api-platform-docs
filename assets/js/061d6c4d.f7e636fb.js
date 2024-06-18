"use strict";(self.webpackChunkfk_api_platform_docs=self.webpackChunkfk_api_platform_docs||[]).push([[1714],{39955:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>h,contentTitle:()=>m,default:()=>b,frontMatter:()=>d,metadata:()=>k,toc:()=>y});var i=s(87462),a=(s(67294),s(3905)),r=s(38055),p=(s(47878),s(55878)),o=s(51663),n=(s(98045),s(91795)),l=s(18211),c=s(55985),u=s(85162);const d={id:"pickup",title:"Update self-ship returns pickup details",description:"This operation is used to update the pickup details of customer self-ship returns.",sidebar_label:"Update self-ship returns pickup details",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Returns V2"],description:"This operation is used to update the pickup details of customer self-ship returns.",operationId:"pickup",requestBody:{content:{"application/json":{schema:{required:["returns"],type:"object",properties:{returns:{maxItems:2147483647,minItems:1,type:"array",items:{required:["pickupDate"],type:"object",properties:{returnId:{type:"string"},pickupDate:{type:"string",format:"date-time"}},title:"SelfShipReturnPickupRequest"}},locationId:{type:"string"}},title:"SelfShipReturnPickupRequests"}}},required:!1},responses:{200:{description:"successful operation",content:{"application/json":{schema:{type:"object",properties:{returns:{type:"array",items:{type:"object",properties:{returnId:{type:"string"},processingStatus:{type:"string"},errorCode:{type:"string"},errorMessage:{type:"string"}},title:"ReturnActionResponse"}}},title:"ReturnsActionResponseV2"}}}}},"x-codegen-request-body-name":"body",method:"post",path:"/v2/returns/pickup",servers:[{url:"https://api.flipkart.net/sellers"},{url:"https://sandbox-api.flipkart.net/sellers"}],security:[{Bearer:[]}],securitySchemes:{Bearer:{type:"apiKey",name:"Authorization",in:"header"}},jsonRequestBodyExample:{returns:[{returnId:"string",pickupDate:"2024-06-07T09:55:19.298Z"}],locationId:"string"},info:{title:"Flipkart Marketplace API",description:"This API is offered by Flipkart Marketplace to sellers and partners for orders and listing management. <br /><br />You will need an access token to explore our APIs in the sandbox environment. For details on getting an access token, refer to the <a href='/docs/intro#api-application-setup'> documentation</a>. <br />Once you get the access token, use it to authorize the requests using the  <code>Authorize</code> button below. e.g. if your access token is <code>ACCTOK1</code>, the input for authorization should be <code>Bearer ACCTOK1</code>",contact:{name:"API Support",email:"seller-api-queries@flipkart.com"},version:"2.0"},postman:{name:"Update self-ship returns pickup details",description:{content:"This operation is used to update the pickup details of customer self-ship returns.",type:"text/plain"},url:{path:["v2","returns","pickup"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/mp-api_versioned/2.0.0/flipkart-marketplace-api",custom_edit_url:null},m=void 0,k={unversionedId:"mp-api_versioned/2.0.0/pickup",id:"mp-api_versioned/2.0.0/pickup",title:"Update self-ship returns pickup details",description:"This operation is used to update the pickup details of customer self-ship returns.",source:"@site/docs/mp-api_versioned/2.0.0/pickup.api.mdx",sourceDirName:"mp-api_versioned/2.0.0",slug:"/mp-api_versioned/2.0.0/pickup",permalink:"/pages/Flipkart/fk-api-platform-docs/docs/mp-api_versioned/2.0.0/pickup",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"pickup",title:"Update self-ship returns pickup details",description:"This operation is used to update the pickup details of customer self-ship returns.",sidebar_label:"Update self-ship returns pickup details",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Returns V2"],description:"This operation is used to update the pickup details of customer self-ship returns.",operationId:"pickup",requestBody:{content:{"application/json":{schema:{required:["returns"],type:"object",properties:{returns:{maxItems:2147483647,minItems:1,type:"array",items:{required:["pickupDate"],type:"object",properties:{returnId:{type:"string"},pickupDate:{type:"string",format:"date-time"}},title:"SelfShipReturnPickupRequest"}},locationId:{type:"string"}},title:"SelfShipReturnPickupRequests"}}},required:!1},responses:{200:{description:"successful operation",content:{"application/json":{schema:{type:"object",properties:{returns:{type:"array",items:{type:"object",properties:{returnId:{type:"string"},processingStatus:{type:"string"},errorCode:{type:"string"},errorMessage:{type:"string"}},title:"ReturnActionResponse"}}},title:"ReturnsActionResponseV2"}}}}},"x-codegen-request-body-name":"body",method:"post",path:"/v2/returns/pickup",servers:[{url:"https://api.flipkart.net/sellers"},{url:"https://sandbox-api.flipkart.net/sellers"}],security:[{Bearer:[]}],securitySchemes:{Bearer:{type:"apiKey",name:"Authorization",in:"header"}},jsonRequestBodyExample:{returns:[{returnId:"string",pickupDate:"2024-06-07T09:55:19.298Z"}],locationId:"string"},info:{title:"Flipkart Marketplace API",description:"This API is offered by Flipkart Marketplace to sellers and partners for orders and listing management. <br /><br />You will need an access token to explore our APIs in the sandbox environment. For details on getting an access token, refer to the <a href='/docs/intro#api-application-setup'> documentation</a>. <br />Once you get the access token, use it to authorize the requests using the  <code>Authorize</code> button below. e.g. if your access token is <code>ACCTOK1</code>, the input for authorization should be <code>Bearer ACCTOK1</code>",contact:{name:"API Support",email:"seller-api-queries@flipkart.com"},version:"2.0"},postman:{name:"Update self-ship returns pickup details",description:{content:"This operation is used to update the pickup details of customer self-ship returns.",type:"text/plain"},url:{path:["v2","returns","pickup"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/mp-api_versioned/2.0.0/flipkart-marketplace-api",custom_edit_url:null},sidebar:"mpapi-2.0.0",previous:{title:"Fetch returns",permalink:"/pages/Flipkart/fk-api-platform-docs/docs/mp-api_versioned/2.0.0/get-returns"},next:{title:"Approve self-ship returns",permalink:"/pages/Flipkart/fk-api-platform-docs/docs/mp-api_versioned/2.0.0/approve-self-ship-returns"}},h={},y=[],f={toc:y},g="wrapper";function b(e){let{components:t,...s}=e;return(0,a.kt)(g,(0,i.Z)({},f,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{className:"openapi__heading"},"Update self-ship returns pickup details"),(0,a.kt)(p.Z,{method:"post",path:"/v2/returns/pickup",mdxType:"MethodEndpoint"}),(0,a.kt)("p",null,"This operation is used to update the pickup details of customer self-ship returns."),(0,a.kt)(o.Z,{className:"openapi-tabs__mime",mdxType:"MimeTabs"},(0,a.kt)(u.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Request Body")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{},className:"openapi-markdown__details"},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"returns"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Possible values:")," ",(0,a.kt)("inlineCode",{parentName:"p"},">= 1"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"<= 2147483647"))),(0,a.kt)("li",null,(0,a.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,a.kt)(l.Z,{collapsible:!1,name:"returnId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"pickupDate",required:!0,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time"},mdxType:"SchemaItem"}),(0,a.kt)("li",null,(0,a.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,a.kt)(l.Z,{collapsible:!1,name:"locationId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}))))),(0,a.kt)("div",null,(0,a.kt)("div",null,(0,a.kt)(r.Z,{mdxType:"ApiTabs"},(0,a.kt)(u.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"successful operation")),(0,a.kt)("div",null,(0,a.kt)(o.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,a.kt)(u.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,a.kt)(c.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,a.kt)(u.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Schema")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{},className:"openapi-markdown__details"},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"returns"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)("li",null,(0,a.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,a.kt)(l.Z,{collapsible:!1,name:"returnId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"processingStatus",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"errorCode",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"errorMessage",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,a.kt)("li",null,(0,a.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,a.kt)(u.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,a.kt)(n.Z,{responseExample:'{\n  "returns": [\n    {\n      "returnId": "string",\n      "processingStatus": "string",\n      "errorCode": "string",\n      "errorMessage": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}b.isMDXComponent=!0}}]);