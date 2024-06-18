"use strict";(self.webpackChunkfk_api_platform_docs=self.webpackChunkfk_api_platform_docs||[]).push([[733],{82020:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>y,frontMatter:()=>m,metadata:()=>c,toc:()=>f});var i=a(87462),s=(a(67294),a(3905)),o=a(38055),r=(a(47878),a(55878)),n=a(51663),p=(a(98045),a(91795),a(18211)),l=(a(55985),a(85162));const m={id:"get-manifest",title:"Download manifest PDF",description:"This operation returns the manifest file in PDF format",sidebar_label:"Download manifest PDF",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Shipment V3"],description:"This operation returns the manifest file in PDF format",operationId:"getManifest",requestBody:{content:{"application/json":{schema:{required:["params"],type:"object",properties:{params:{required:["vendorGroupCode"],type:"object",properties:{vendorGroupCode:{type:"string"},pickupDate:{type:"object",properties:{from:{type:"string",format:"date-time"},to:{type:"string",format:"date-time"}},title:"PickUpDate"},locationId:{type:"string"},is_mps:{type:"boolean"}},title:"Params"}},title:"GetManifestRequest"}}},required:!1},responses:{default:{description:"successful operation",content:{}}},"x-codegen-request-body-name":"body",method:"post",path:"/sellers/v3/shipments/manifest",servers:[{url:"https://api.flipkart.net"},{url:"https://sandbox-api.flipkart.net"}],security:[{Bearer:[]}],securitySchemes:{Bearer:{type:"apiKey",name:"Authorization",in:"header"}},jsonRequestBodyExample:{params:{vendorGroupCode:"string",pickupDate:{from:"2024-06-07T09:55:17.476Z",to:"2024-06-07T09:55:17.476Z"},locationId:"string",is_mps:!0}},info:{title:"Flipkart Marketplace API",description:"This API is offered by Flipkart Marketplace to sellers and partners for orders and listing management. <br /><br />You will need an access token to explore our APIs in the sandbox environment. For details on getting an access token, refer to the <a href='https://seller.flipkart.com/api-docs/FMSAPI.html#sandbox-environment'> documentation</a>. <br />Once you get the access token, use it to authorize the requests using the  <code>Authorize</code> button below. e.g. if your access token is <code>ACCTOK1</code>, the input for authorization should be <code>Bearer ACCTOK1</code>",contact:{name:"API Support",email:"seller-api-queries@flipkart.com"},version:"3.0"},postman:{name:"Download manifest PDF",description:{content:"This operation returns the manifest file in PDF format",type:"text/plain"},url:{path:["sellers","v3","shipments","manifest"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/mp-api_versioned/flipkart-marketplace-api",custom_edit_url:null},d=void 0,c={unversionedId:"mp-api_versioned/get-manifest",id:"mp-api_versioned/get-manifest",title:"Download manifest PDF",description:"This operation returns the manifest file in PDF format",source:"@site/docs/mp-api_versioned/get-manifest.api.mdx",sourceDirName:"mp-api_versioned",slug:"/mp-api_versioned/get-manifest",permalink:"/pages/Flipkart/fk-api-platform-docs/docs/mp-api_versioned/get-manifest",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-manifest",title:"Download manifest PDF",description:"This operation returns the manifest file in PDF format",sidebar_label:"Download manifest PDF",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Shipment V3"],description:"This operation returns the manifest file in PDF format",operationId:"getManifest",requestBody:{content:{"application/json":{schema:{required:["params"],type:"object",properties:{params:{required:["vendorGroupCode"],type:"object",properties:{vendorGroupCode:{type:"string"},pickupDate:{type:"object",properties:{from:{type:"string",format:"date-time"},to:{type:"string",format:"date-time"}},title:"PickUpDate"},locationId:{type:"string"},is_mps:{type:"boolean"}},title:"Params"}},title:"GetManifestRequest"}}},required:!1},responses:{default:{description:"successful operation",content:{}}},"x-codegen-request-body-name":"body",method:"post",path:"/sellers/v3/shipments/manifest",servers:[{url:"https://api.flipkart.net"},{url:"https://sandbox-api.flipkart.net"}],security:[{Bearer:[]}],securitySchemes:{Bearer:{type:"apiKey",name:"Authorization",in:"header"}},jsonRequestBodyExample:{params:{vendorGroupCode:"string",pickupDate:{from:"2024-06-07T09:55:17.476Z",to:"2024-06-07T09:55:17.476Z"},locationId:"string",is_mps:!0}},info:{title:"Flipkart Marketplace API",description:"This API is offered by Flipkart Marketplace to sellers and partners for orders and listing management. <br /><br />You will need an access token to explore our APIs in the sandbox environment. For details on getting an access token, refer to the <a href='https://seller.flipkart.com/api-docs/FMSAPI.html#sandbox-environment'> documentation</a>. <br />Once you get the access token, use it to authorize the requests using the  <code>Authorize</code> button below. e.g. if your access token is <code>ACCTOK1</code>, the input for authorization should be <code>Bearer ACCTOK1</code>",contact:{name:"API Support",email:"seller-api-queries@flipkart.com"},version:"3.0"},postman:{name:"Download manifest PDF",description:{content:"This operation returns the manifest file in PDF format",type:"text/plain"},url:{path:["sellers","v3","shipments","manifest"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/mp-api_versioned/flipkart-marketplace-api",custom_edit_url:null},sidebar:"mpapi-3.0.0",previous:{title:"Get shipment handover counts per vendor",permalink:"/pages/Flipkart/fk-api-platform-docs/docs/mp-api_versioned/get-vendor-group-details"},next:{title:"Mark self-ship shipments dispatched",permalink:"/pages/Flipkart/fk-api-platform-docs/docs/mp-api_versioned/submit-self-shipt-dispatch-request"}},u={},f=[],h={toc:f},k="wrapper";function y(e){let{components:t,...a}=e;return(0,s.kt)(k,(0,i.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{className:"openapi__heading"},"Download manifest PDF"),(0,s.kt)(r.Z,{method:"post",path:"/sellers/v3/shipments/manifest",mdxType:"MethodEndpoint"}),(0,s.kt)("p",null,"This operation returns the manifest file in PDF format"),(0,s.kt)(n.Z,{className:"openapi-tabs__mime",mdxType:"MimeTabs"},(0,s.kt)(l.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Request Body")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"params"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object"),(0,s.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(p.Z,{collapsible:!1,name:"vendorGroupCode",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"pickupDate"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(p.Z,{collapsible:!1,name:"from",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time"},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"to",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time"},mdxType:"SchemaItem"})))),(0,s.kt)(p.Z,{collapsible:!1,name:"locationId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"is_mps",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"},mdxType:"SchemaItem"})))))))),(0,s.kt)("div",null,(0,s.kt)("div",null,(0,s.kt)(o.Z,{mdxType:"ApiTabs"},(0,s.kt)(l.Z,{label:"default",value:"default",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"successful operation")),(0,s.kt)("div",null))))))}y.isMDXComponent=!0}}]);