"use strict";(self.webpackChunkfk_api_platform_docs=self.webpackChunkfk_api_platform_docs||[]).push([[8104],{1867:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>k,contentTitle:()=>u,default:()=>g,frontMatter:()=>c,metadata:()=>h,toc:()=>b});var a=o(87462),r=(o(67294),o(3905)),s=o(38055),n=(o(47878),o(55878)),i=o(51663),l=(o(98045),o(91795)),d=o(18211),p=o(55985),m=o(85162);const c={id:"make-order-un-hold",title:"Mark order un hold",description:"This operation makes specified order item un hold from on hold. Please change the base url to sandbox to use this.",sidebar_label:"Mark order un hold",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Sandbox APIs"],description:"This operation makes specified order item un hold from on hold. Please change the base url to sandbox to use this.",operationId:"makeOrderUnHold",requestBody:{content:{"application/json":{schema:{type:"object",properties:{orderItemId:{type:"string"}},title:"makeOrderUnHold"}}},required:!0},responses:{200:{description:"successful operation",content:{"application/json":{schema:{type:"object",properties:{response:{type:"string"}},title:"createCourierReturnResponse"}}}}},"x-codegen-request-body-name":"body",method:"put",path:"/sellers/orders/sandbox/un_hold",servers:[{url:"https://api.flipkart.net"},{url:"https://sandbox-api.flipkart.net"}],security:[{Bearer:[]}],securitySchemes:{Bearer:{type:"apiKey",name:"Authorization",in:"header"}},jsonRequestBodyExample:{orderItemId:"string"},info:{title:"Flipkart Marketplace API",description:"This API is offered by Flipkart Marketplace to sellers and partners for orders and listing management. <br /><br />You will need an access token to explore our APIs in the sandbox environment. For details on getting an access token, refer to the <a href='https://seller.flipkart.com/api-docs/FMSAPI.html#sandbox-environment'> documentation</a>. <br />Once you get the access token, use it to authorize the requests using the  <code>Authorize</code> button below. e.g. if your access token is <code>ACCTOK1</code>, the input for authorization should be <code>Bearer ACCTOK1</code>",contact:{name:"API Support",email:"seller-api-queries@flipkart.com"},version:"3.0"},postman:{name:"Mark order un hold",description:{content:"This operation makes specified order item un hold from on hold. Please change the base url to sandbox to use this.",type:"text/plain"},url:{path:["sellers","orders","sandbox","un_hold"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PUT",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"put api-method",info_path:"docs/mp-api_versioned/flipkart-marketplace-api",custom_edit_url:null},u=void 0,h={unversionedId:"mp-api_versioned/make-order-un-hold",id:"mp-api_versioned/make-order-un-hold",title:"Mark order un hold",description:"This operation makes specified order item un hold from on hold. Please change the base url to sandbox to use this.",source:"@site/docs/mp-api_versioned/make-order-un-hold.api.mdx",sourceDirName:"mp-api_versioned",slug:"/mp-api_versioned/make-order-un-hold",permalink:"/fk-api-platform-docs/docs/mp-api_versioned/make-order-un-hold",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"make-order-un-hold",title:"Mark order un hold",description:"This operation makes specified order item un hold from on hold. Please change the base url to sandbox to use this.",sidebar_label:"Mark order un hold",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Sandbox APIs"],description:"This operation makes specified order item un hold from on hold. Please change the base url to sandbox to use this.",operationId:"makeOrderUnHold",requestBody:{content:{"application/json":{schema:{type:"object",properties:{orderItemId:{type:"string"}},title:"makeOrderUnHold"}}},required:!0},responses:{200:{description:"successful operation",content:{"application/json":{schema:{type:"object",properties:{response:{type:"string"}},title:"createCourierReturnResponse"}}}}},"x-codegen-request-body-name":"body",method:"put",path:"/sellers/orders/sandbox/un_hold",servers:[{url:"https://api.flipkart.net"},{url:"https://sandbox-api.flipkart.net"}],security:[{Bearer:[]}],securitySchemes:{Bearer:{type:"apiKey",name:"Authorization",in:"header"}},jsonRequestBodyExample:{orderItemId:"string"},info:{title:"Flipkart Marketplace API",description:"This API is offered by Flipkart Marketplace to sellers and partners for orders and listing management. <br /><br />You will need an access token to explore our APIs in the sandbox environment. For details on getting an access token, refer to the <a href='https://seller.flipkart.com/api-docs/FMSAPI.html#sandbox-environment'> documentation</a>. <br />Once you get the access token, use it to authorize the requests using the  <code>Authorize</code> button below. e.g. if your access token is <code>ACCTOK1</code>, the input for authorization should be <code>Bearer ACCTOK1</code>",contact:{name:"API Support",email:"seller-api-queries@flipkart.com"},version:"3.0"},postman:{name:"Mark order un hold",description:{content:"This operation makes specified order item un hold from on hold. Please change the base url to sandbox to use this.",type:"text/plain"},url:{path:["sellers","orders","sandbox","un_hold"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PUT",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"put api-method",info_path:"docs/mp-api_versioned/flipkart-marketplace-api",custom_edit_url:null},sidebar:"mpapi-3.0.0",previous:{title:"Put order on hold",permalink:"/fk-api-platform-docs/docs/mp-api_versioned/put-order-on-hold"},next:{title:"Mark order item as pick up complete",permalink:"/fk-api-platform-docs/docs/mp-api_versioned/mark-order-item-pickup-complete"}},k={},b=[],f={toc:b},y="wrapper";function g(e){let{components:t,...o}=e;return(0,r.kt)(y,(0,a.Z)({},f,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{className:"openapi__heading"},"Mark order un hold"),(0,r.kt)(n.Z,{method:"put",path:"/sellers/orders/sandbox/un_hold",mdxType:"MethodEndpoint"}),(0,r.kt)("p",null,"This operation makes specified order item un hold from on hold. Please change the base url to sandbox to use this."),(0,r.kt)(i.Z,{className:"openapi-tabs__mime",mdxType:"MimeTabs"},(0,r.kt)(m.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Request Body"),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(d.Z,{collapsible:!1,name:"orderItemId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}))))),(0,r.kt)("div",null,(0,r.kt)("div",null,(0,r.kt)(s.Z,{mdxType:"ApiTabs"},(0,r.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"successful operation")),(0,r.kt)("div",null,(0,r.kt)(i.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(p.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,r.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(d.Z,{collapsible:!1,name:"response",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,r.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(l.Z,{responseExample:'{\n  "response": "string"\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}g.isMDXComponent=!0}}]);