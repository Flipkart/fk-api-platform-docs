"use strict";(self.webpackChunkfk_api_platform_docs=self.webpackChunkfk_api_platform_docs||[]).push([[5866],{3254:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>y,contentTitle:()=>u,default:()=>v,frontMatter:()=>c,metadata:()=>h,toc:()=>f});var r=s(87462),a=(s(67294),s(3905)),i=s(38055),p=(s(47878),s(55878)),o=s(51663),n=(s(98045),s(91795)),l=s(18211),m=s(55985),d=s(85162);const c={id:"approve-self-ship-returns",title:"Approve self-ship returns",description:"This operation is used to approve the self-ship returns.",sidebar_label:"Approve self-ship returns",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Returns V2"],description:"This operation is used to approve the self-ship returns.",operationId:"approveSelfShipReturns",requestBody:{content:{"*/*":{schema:{required:["returns"],type:"object",properties:{returns:{maxItems:2147483647,minItems:1,type:"array",items:{type:"object",properties:{returnId:{type:"string"},serviceFulfilmentId:{type:"string"},serviceDate:{type:"string",format:"date-time"},comments:{type:"string"}},title:"ReturnApproveRequest"}},locationId:{type:"string"}},title:"ReturnsApproveRequest"}}},required:!1},responses:{200:{description:"successful operation",content:{"application/json":{schema:{type:"object",properties:{returns:{type:"array",items:{type:"object",properties:{returnId:{type:"string"},processingStatus:{type:"string"},errorCode:{type:"string"},errorMessage:{type:"string"}},title:"ReturnActionResponse"}}},title:"ReturnsActionResponseV2"}}}}},"x-codegen-request-body-name":"body",method:"post",path:"/v2/returns/approve",servers:[{url:"https://api.flipkart.net/sellers"},{url:"https://sandbox-api.flipkart.net/sellers"}],security:[{Bearer:[]}],securitySchemes:{Bearer:{type:"apiKey",name:"Authorization",in:"header"}},info:{title:"Flipkart Marketplace API",description:"This API is offered by Flipkart Marketplace to sellers and partners for orders and listing management. <br /><br />You will need an access token to explore our APIs in the sandbox environment. For details on getting an access token, refer to the <a href='/docs/intro#api-application-setup'> documentation</a>. <br />Once you get the access token, use it to authorize the requests using the  <code>Authorize</code> button below. e.g. if your access token is <code>ACCTOK1</code>, the input for authorization should be <code>Bearer ACCTOK1</code>",contact:{name:"API Support",email:"seller-api-queries@flipkart.com"},version:"2.0"},postman:{name:"Approve self-ship returns",description:{content:"This operation is used to approve the self-ship returns.",type:"text/plain"},url:{path:["v2","returns","approve"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"*/*"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""'}}},sidebar_class_name:"post api-method",info_path:"docs/mp-api_versioned/2.0.0/flipkart-marketplace-api",custom_edit_url:null},u=void 0,h={unversionedId:"mp-api_versioned/2.0.0/approve-self-ship-returns",id:"mp-api_versioned/2.0.0/approve-self-ship-returns",title:"Approve self-ship returns",description:"This operation is used to approve the self-ship returns.",source:"@site/docs/mp-api_versioned/2.0.0/approve-self-ship-returns.api.mdx",sourceDirName:"mp-api_versioned/2.0.0",slug:"/mp-api_versioned/2.0.0/approve-self-ship-returns",permalink:"/pages/Flipkart/fk-api-platform-docs/docs/mp-api_versioned/2.0.0/approve-self-ship-returns",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"approve-self-ship-returns",title:"Approve self-ship returns",description:"This operation is used to approve the self-ship returns.",sidebar_label:"Approve self-ship returns",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Returns V2"],description:"This operation is used to approve the self-ship returns.",operationId:"approveSelfShipReturns",requestBody:{content:{"*/*":{schema:{required:["returns"],type:"object",properties:{returns:{maxItems:2147483647,minItems:1,type:"array",items:{type:"object",properties:{returnId:{type:"string"},serviceFulfilmentId:{type:"string"},serviceDate:{type:"string",format:"date-time"},comments:{type:"string"}},title:"ReturnApproveRequest"}},locationId:{type:"string"}},title:"ReturnsApproveRequest"}}},required:!1},responses:{200:{description:"successful operation",content:{"application/json":{schema:{type:"object",properties:{returns:{type:"array",items:{type:"object",properties:{returnId:{type:"string"},processingStatus:{type:"string"},errorCode:{type:"string"},errorMessage:{type:"string"}},title:"ReturnActionResponse"}}},title:"ReturnsActionResponseV2"}}}}},"x-codegen-request-body-name":"body",method:"post",path:"/v2/returns/approve",servers:[{url:"https://api.flipkart.net/sellers"},{url:"https://sandbox-api.flipkart.net/sellers"}],security:[{Bearer:[]}],securitySchemes:{Bearer:{type:"apiKey",name:"Authorization",in:"header"}},info:{title:"Flipkart Marketplace API",description:"This API is offered by Flipkart Marketplace to sellers and partners for orders and listing management. <br /><br />You will need an access token to explore our APIs in the sandbox environment. For details on getting an access token, refer to the <a href='/docs/intro#api-application-setup'> documentation</a>. <br />Once you get the access token, use it to authorize the requests using the  <code>Authorize</code> button below. e.g. if your access token is <code>ACCTOK1</code>, the input for authorization should be <code>Bearer ACCTOK1</code>",contact:{name:"API Support",email:"seller-api-queries@flipkart.com"},version:"2.0"},postman:{name:"Approve self-ship returns",description:{content:"This operation is used to approve the self-ship returns.",type:"text/plain"},url:{path:["v2","returns","approve"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"*/*"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""'}}},sidebar_class_name:"post api-method",info_path:"docs/mp-api_versioned/2.0.0/flipkart-marketplace-api",custom_edit_url:null},sidebar:"mpapi-2.0.0",previous:{title:"Update self-ship returns pickup details",permalink:"/pages/Flipkart/fk-api-platform-docs/docs/mp-api_versioned/2.0.0/pickup"},next:{title:"Reject self-ship returns",permalink:"/pages/Flipkart/fk-api-platform-docs/docs/mp-api_versioned/2.0.0/reject-self-ship-returns"}},y={},f=[],k={toc:f},g="wrapper";function v(e){let{components:t,...s}=e;return(0,a.kt)(g,(0,r.Z)({},k,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{className:"openapi__heading"},"Approve self-ship returns"),(0,a.kt)(p.Z,{method:"post",path:"/v2/returns/approve",mdxType:"MethodEndpoint"}),(0,a.kt)("p",null,"This operation is used to approve the self-ship returns."),(0,a.kt)(o.Z,{className:"openapi-tabs__mime",mdxType:"MimeTabs"},(0,a.kt)(d.Z,{label:"*/*",value:"*/*-schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Request Body")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{},className:"openapi-markdown__details"},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"returns"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Possible values:")," ",(0,a.kt)("inlineCode",{parentName:"p"},">= 1"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"<= 2147483647"))),(0,a.kt)("li",null,(0,a.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,a.kt)(l.Z,{collapsible:!1,name:"returnId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"serviceFulfilmentId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"serviceDate",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time"},mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"comments",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,a.kt)("li",null,(0,a.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,a.kt)(l.Z,{collapsible:!1,name:"locationId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}))))),(0,a.kt)("div",null,(0,a.kt)("div",null,(0,a.kt)(i.Z,{mdxType:"ApiTabs"},(0,a.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"successful operation")),(0,a.kt)("div",null,(0,a.kt)(o.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,a.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,a.kt)(m.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,a.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Schema")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{},className:"openapi-markdown__details"},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"returns"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)("li",null,(0,a.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,a.kt)(l.Z,{collapsible:!1,name:"returnId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"processingStatus",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"errorCode",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"errorMessage",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,a.kt)("li",null,(0,a.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,a.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,a.kt)(n.Z,{responseExample:'{\n  "returns": [\n    {\n      "returnId": "string",\n      "processingStatus": "string",\n      "errorCode": "string",\n      "errorMessage": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}v.isMDXComponent=!0}}]);