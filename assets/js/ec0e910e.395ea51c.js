"use strict";(self.webpackChunkfk_api_platform_docs=self.webpackChunkfk_api_platform_docs||[]).push([[3091],{96404:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>k,contentTitle:()=>u,default:()=>y,frontMatter:()=>c,metadata:()=>h,toc:()=>f});var r=a(87462),s=(a(67294),a(3905)),i=a(38055),o=(a(47878),a(55878)),n=a(51663),d=(a(98045),a(91795)),l=a(18211),p=a(55985),m=a(85162);const c={id:"mark-order-item-delivered",title:"Mark order item as delivered",description:"This operation marks specified order item delivered and sends notification for the same. Please change the base url to sandbox to use this.",sidebar_label:"Mark order item as delivered",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Sandbox APIs"],description:"This operation marks specified order item delivered and sends notification for the same. Please change the base url to sandbox to use this.",operationId:"markOrderItemDelivered",requestBody:{content:{"application/json":{schema:{type:"object",properties:{orderItemId:{type:"string"}},title:"markOrderItemDelivered"}}},required:!0},responses:{200:{description:"successful operation",content:{"application/json":{schema:{type:"object",properties:{response:{type:"string"}},title:"createCourierReturnResponse"}}}}},"x-codegen-request-body-name":"body",method:"post",path:"/sellers/orders/sandbox/delivered",servers:[{url:"https://api.flipkart.net"},{url:"https://sandbox-api.flipkart.net"}],security:[{Bearer:[]}],securitySchemes:{Bearer:{type:"apiKey",name:"Authorization",in:"header"}},jsonRequestBodyExample:{orderItemId:"string"},info:{title:"Flipkart Marketplace API",description:"This API is offered by Flipkart Marketplace to sellers and partners for orders and listing management. <br /><br />You will need an access token to explore our APIs in the sandbox environment. For details on getting an access token, refer to the <a href='https://seller.flipkart.com/api-docs/FMSAPI.html#sandbox-environment'> documentation</a>. <br />Once you get the access token, use it to authorize the requests using the  <code>Authorize</code> button below. e.g. if your access token is <code>ACCTOK1</code>, the input for authorization should be <code>Bearer ACCTOK1</code>",contact:{name:"API Support",email:"seller-api-queries@flipkart.com"},version:"3.0"},postman:{name:"Mark order item as delivered",description:{content:"This operation marks specified order item delivered and sends notification for the same. Please change the base url to sandbox to use this.",type:"text/plain"},url:{path:["sellers","orders","sandbox","delivered"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/mp-api_versioned/flipkart-marketplace-api",custom_edit_url:null},u=void 0,h={unversionedId:"mp-api_versioned/mark-order-item-delivered",id:"mp-api_versioned/mark-order-item-delivered",title:"Mark order item as delivered",description:"This operation marks specified order item delivered and sends notification for the same. Please change the base url to sandbox to use this.",source:"@site/docs/mp-api_versioned/mark-order-item-delivered.api.mdx",sourceDirName:"mp-api_versioned",slug:"/mp-api_versioned/mark-order-item-delivered",permalink:"/fk-api-platform-docs/docs/mp-api_versioned/mark-order-item-delivered",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"mark-order-item-delivered",title:"Mark order item as delivered",description:"This operation marks specified order item delivered and sends notification for the same. Please change the base url to sandbox to use this.",sidebar_label:"Mark order item as delivered",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Sandbox APIs"],description:"This operation marks specified order item delivered and sends notification for the same. Please change the base url to sandbox to use this.",operationId:"markOrderItemDelivered",requestBody:{content:{"application/json":{schema:{type:"object",properties:{orderItemId:{type:"string"}},title:"markOrderItemDelivered"}}},required:!0},responses:{200:{description:"successful operation",content:{"application/json":{schema:{type:"object",properties:{response:{type:"string"}},title:"createCourierReturnResponse"}}}}},"x-codegen-request-body-name":"body",method:"post",path:"/sellers/orders/sandbox/delivered",servers:[{url:"https://api.flipkart.net"},{url:"https://sandbox-api.flipkart.net"}],security:[{Bearer:[]}],securitySchemes:{Bearer:{type:"apiKey",name:"Authorization",in:"header"}},jsonRequestBodyExample:{orderItemId:"string"},info:{title:"Flipkart Marketplace API",description:"This API is offered by Flipkart Marketplace to sellers and partners for orders and listing management. <br /><br />You will need an access token to explore our APIs in the sandbox environment. For details on getting an access token, refer to the <a href='https://seller.flipkart.com/api-docs/FMSAPI.html#sandbox-environment'> documentation</a>. <br />Once you get the access token, use it to authorize the requests using the  <code>Authorize</code> button below. e.g. if your access token is <code>ACCTOK1</code>, the input for authorization should be <code>Bearer ACCTOK1</code>",contact:{name:"API Support",email:"seller-api-queries@flipkart.com"},version:"3.0"},postman:{name:"Mark order item as delivered",description:{content:"This operation marks specified order item delivered and sends notification for the same. Please change the base url to sandbox to use this.",type:"text/plain"},url:{path:["sellers","orders","sandbox","delivered"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/mp-api_versioned/flipkart-marketplace-api",custom_edit_url:null},sidebar:"mpapi-3.0.0",previous:{title:"Mark order item as shipped",permalink:"/fk-api-platform-docs/docs/mp-api_versioned/mark-order-item-shipped"},next:{title:"Create courier or customer return",permalink:"/fk-api-platform-docs/docs/mp-api_versioned/create-return"}},k={},f=[],b={toc:f},v="wrapper";function y(e){let{components:t,...a}=e;return(0,s.kt)(v,(0,r.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{className:"openapi__heading"},"Mark order item as delivered"),(0,s.kt)(o.Z,{method:"post",path:"/sellers/orders/sandbox/delivered",mdxType:"MethodEndpoint"}),(0,s.kt)("p",null,"This operation marks specified order item delivered and sends notification for the same. Please change the base url to sandbox to use this."),(0,s.kt)(n.Z,{className:"openapi-tabs__mime",mdxType:"MimeTabs"},(0,s.kt)(m.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Request Body"),(0,s.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!1,name:"orderItemId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}))))),(0,s.kt)("div",null,(0,s.kt)("div",null,(0,s.kt)(i.Z,{mdxType:"ApiTabs"},(0,s.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"successful operation")),(0,s.kt)("div",null,(0,s.kt)(n.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(p.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!1,name:"response",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,s.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(d.Z,{responseExample:'{\n  "response": "string"\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}y.isMDXComponent=!0}}]);