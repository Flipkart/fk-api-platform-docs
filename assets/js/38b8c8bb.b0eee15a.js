"use strict";(self.webpackChunkfk_api_platform_docs=self.webpackChunkfk_api_platform_docs||[]).push([[1194],{53333:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>f,contentTitle:()=>u,default:()=>g,frontMatter:()=>m,metadata:()=>h,toc:()=>b});var a=o(87462),s=(o(67294),o(3905)),r=o(38055),n=(o(47878),o(55878)),i=o(51663),d=(o(98045),o(91795)),p=o(18211),l=o(55985),c=o(85162);const m={id:"put-order-on-hold",title:"Put order on hold",description:"This operation puts specified order item on hold and sends notification for the same. Please change the base url to sandbox to use this.",sidebar_label:"Put order on hold",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Sandbox APIs"],description:"This operation puts specified order item on hold and sends notification for the same. Please change the base url to sandbox to use this.",operationId:"putOrderOnHold",requestBody:{content:{"application/json":{schema:{type:"object",properties:{orderItemId:{type:"string"}},title:"putOrderOnHold"}}},required:!0},responses:{200:{description:"successful operation",content:{"application/json":{schema:{type:"object",properties:{response:{type:"string"}},title:"createCourierReturnResponse"}}}}},"x-codegen-request-body-name":"body",method:"put",path:"/sellers/orders/sandbox/on_hold",servers:[{url:"https://api.flipkart.net"},{url:"https://sandbox-api.flipkart.net"}],security:[{Bearer:[]}],securitySchemes:{Bearer:{type:"apiKey",name:"Authorization",in:"header"}},jsonRequestBodyExample:{orderItemId:"string"},info:{title:"Flipkart Marketplace API",description:"This API is offered by Flipkart Marketplace to sellers and partners for orders and listing management. <br /><br />You will need an access token to explore our APIs in the sandbox environment. For details on getting an access token, refer to the <a href='https://seller.flipkart.com/api-docs/FMSAPI.html#sandbox-environment'> documentation</a>. <br />Once you get the access token, use it to authorize the requests using the  <code>Authorize</code> button below. e.g. if your access token is <code>ACCTOK1</code>, the input for authorization should be <code>Bearer ACCTOK1</code>",contact:{name:"API Support",email:"seller-api-queries@flipkart.com"},version:"3.0"},postman:{name:"Put order on hold",description:{content:"This operation puts specified order item on hold and sends notification for the same. Please change the base url to sandbox to use this.",type:"text/plain"},url:{path:["sellers","orders","sandbox","on_hold"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PUT",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"put api-method",info_path:"docs/mp-api_versioned/flipkart-marketplace-api",custom_edit_url:null},u=void 0,h={unversionedId:"mp-api_versioned/put-order-on-hold",id:"mp-api_versioned/put-order-on-hold",title:"Put order on hold",description:"This operation puts specified order item on hold and sends notification for the same. Please change the base url to sandbox to use this.",source:"@site/docs/mp-api_versioned/put-order-on-hold.api.mdx",sourceDirName:"mp-api_versioned",slug:"/mp-api_versioned/put-order-on-hold",permalink:"/pages/Flipkart/fk-api-platform-docs/docs/mp-api_versioned/put-order-on-hold",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"put-order-on-hold",title:"Put order on hold",description:"This operation puts specified order item on hold and sends notification for the same. Please change the base url to sandbox to use this.",sidebar_label:"Put order on hold",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Sandbox APIs"],description:"This operation puts specified order item on hold and sends notification for the same. Please change the base url to sandbox to use this.",operationId:"putOrderOnHold",requestBody:{content:{"application/json":{schema:{type:"object",properties:{orderItemId:{type:"string"}},title:"putOrderOnHold"}}},required:!0},responses:{200:{description:"successful operation",content:{"application/json":{schema:{type:"object",properties:{response:{type:"string"}},title:"createCourierReturnResponse"}}}}},"x-codegen-request-body-name":"body",method:"put",path:"/sellers/orders/sandbox/on_hold",servers:[{url:"https://api.flipkart.net"},{url:"https://sandbox-api.flipkart.net"}],security:[{Bearer:[]}],securitySchemes:{Bearer:{type:"apiKey",name:"Authorization",in:"header"}},jsonRequestBodyExample:{orderItemId:"string"},info:{title:"Flipkart Marketplace API",description:"This API is offered by Flipkart Marketplace to sellers and partners for orders and listing management. <br /><br />You will need an access token to explore our APIs in the sandbox environment. For details on getting an access token, refer to the <a href='https://seller.flipkart.com/api-docs/FMSAPI.html#sandbox-environment'> documentation</a>. <br />Once you get the access token, use it to authorize the requests using the  <code>Authorize</code> button below. e.g. if your access token is <code>ACCTOK1</code>, the input for authorization should be <code>Bearer ACCTOK1</code>",contact:{name:"API Support",email:"seller-api-queries@flipkart.com"},version:"3.0"},postman:{name:"Put order on hold",description:{content:"This operation puts specified order item on hold and sends notification for the same. Please change the base url to sandbox to use this.",type:"text/plain"},url:{path:["sellers","orders","sandbox","on_hold"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PUT",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"put api-method",info_path:"docs/mp-api_versioned/flipkart-marketplace-api",custom_edit_url:null},sidebar:"mpapi-3.0.0",previous:{title:"Change `dispatch_by_date` and `dispatch_after_date`",permalink:"/pages/Flipkart/fk-api-platform-docs/docs/mp-api_versioned/change-dispatch-slots"},next:{title:"Mark order un hold",permalink:"/pages/Flipkart/fk-api-platform-docs/docs/mp-api_versioned/make-order-un-hold"}},f={},b=[],k={toc:b},y="wrapper";function g(e){let{components:t,...o}=e;return(0,s.kt)(y,(0,a.Z)({},k,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{className:"openapi__heading"},"Put order on hold"),(0,s.kt)(n.Z,{method:"put",path:"/sellers/orders/sandbox/on_hold",mdxType:"MethodEndpoint"}),(0,s.kt)("p",null,"This operation puts specified order item on hold and sends notification for the same. Please change the base url to sandbox to use this."),(0,s.kt)(i.Z,{className:"openapi-tabs__mime",mdxType:"MimeTabs"},(0,s.kt)(c.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Request Body"),(0,s.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(p.Z,{collapsible:!1,name:"orderItemId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}))))),(0,s.kt)("div",null,(0,s.kt)("div",null,(0,s.kt)(r.Z,{mdxType:"ApiTabs"},(0,s.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"successful operation")),(0,s.kt)("div",null,(0,s.kt)(i.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(l.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(p.Z,{collapsible:!1,name:"response",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,s.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(d.Z,{responseExample:'{\n  "response": "string"\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}g.isMDXComponent=!0}}]);