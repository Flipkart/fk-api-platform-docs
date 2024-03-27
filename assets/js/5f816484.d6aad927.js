"use strict";(self.webpackChunkfk_api_platform_docs=self.webpackChunkfk_api_platform_docs||[]).push([[2566],{36941:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>g,contentTitle:()=>u,default:()=>f,frontMatter:()=>c,metadata:()=>y,toc:()=>v});var a=i(87462),r=(i(67294),i(3905)),s=i(38055),n=(i(47878),i(55878)),o=i(51663),p=(i(98045),i(91795)),l=i(18211),d=i(55985),m=i(85162);const c={id:"update-inventory",title:"Update listing inventory request",description:"Update listing inventory request",sidebar_label:"Update listing inventory request",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"updateInventory",requestBody:{content:{"application/json":{examples:{BasicInventoryUpdate:{value:{"random-sku-id":{product_id:"MOBFDG3VACEXZEYZ",locations:[{id:"LOC9e98b1262cb544c59f9bb13c189214ed",inventory:10}]}}}},schema:{additionalProperties:{example:{product_id:"product_id",locations:[{id:"id",pending_inventory:6,inventory:0,status:"ENABLED"},{id:"id",pending_inventory:6,inventory:0,status:"ENABLED"}]},properties:{product_id:{type:"string"},locations:{items:{example:{id:"id",pending_inventory:1,inventory:1,status:"ENABLED"},properties:{id:{type:"string"},status:{enum:["ENABLED","DISABLED"],type:"string"},inventory:{format:"int32",type:"integer"},pending_inventory:{format:"int32",type:"integer"}},required:["id","status"],type:"object",title:"Location"},type:"array",uniqueItems:!0}},required:["locations","product_id"],type:"object",title:"UpdateInventoryRequest"},type:"object"}}},description:"request",required:!0},responses:{200:{content:{"application/json":{schema:{additionalProperties:{properties:{status:{enum:["SUCCESS","FAILURE","WARNING"],type:"string"},errors:{items:{properties:{severity:{enum:["ERROR","WARNING"],type:"string"},code:{format:"int32",type:"integer"},description:{type:"string"},path:{type:"string"}},required:["code","description","severity"],type:"object",title:"Error"},type:"array"},attribute_errors:{items:{properties:{severity:{enum:["ERROR","WARNING"],type:"string"},code:{format:"int32",type:"integer"},description:{type:"string"},attribute:{type:"string"},path:{type:"string"}},required:["attribute","code","description","severity"],type:"object",title:"AttributeError"},type:"array"}},required:["attribute_errors","errors","status"],type:"object",title:"ListingChangeResponse"},type:"object"}}},description:"Successfully updated inventories"},400:{content:{},description:"Bad request"},401:{content:{},description:"Client unauthorized"},500:{content:{},description:"Internal Server Error"}},tags:["Listings V3"],"x-codegen-request-body-name":"body","x-content-type":"application/json","x-accepts":"application/json",description:"Update listing inventory request",method:"post",path:"/sellers/listings/v3/update/inventory",servers:[{url:"https://api.flipkart.net"},{url:"https://sandbox-api.flipkart.net"}],security:[{Bearer:[]}],securitySchemes:{Bearer:{type:"apiKey",name:"Authorization",in:"header"}},jsonRequestBodyExample:{},info:{title:"Flipkart Marketplace API",description:"This API is offered by Flipkart Marketplace to sellers and partners for orders and listing management. <br /><br />You will need an access token to explore our APIs in the sandbox environment. For details on getting an access token, refer to the <a href='https://seller.flipkart.com/api-docs/FMSAPI.html#sandbox-environment'> documentation</a>. <br />Once you get the access token, use it to authorize the requests using the  <code>Authorize</code> button below. e.g. if your access token is <code>ACCTOK1</code>, the input for authorization should be <code>Bearer ACCTOK1</code>",contact:{name:"API Support",email:"seller-api-queries@flipkart.com"},version:"3.0"},postman:{name:"Update listing inventory request",description:{type:"text/plain"},url:{path:["sellers","listings","v3","update","inventory"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/mp-api_versioned/flipkart-marketplace-api",custom_edit_url:null},u=void 0,y={unversionedId:"mp-api_versioned/update-inventory",id:"mp-api_versioned/update-inventory",title:"Update listing inventory request",description:"Update listing inventory request",source:"@site/docs/mp-api_versioned/update-inventory.api.mdx",sourceDirName:"mp-api_versioned",slug:"/mp-api_versioned/update-inventory",permalink:"/pages/Flipkart/fk-api-platform-docs/docs/mp-api_versioned/update-inventory",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"update-inventory",title:"Update listing inventory request",description:"Update listing inventory request",sidebar_label:"Update listing inventory request",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"updateInventory",requestBody:{content:{"application/json":{examples:{BasicInventoryUpdate:{value:{"random-sku-id":{product_id:"MOBFDG3VACEXZEYZ",locations:[{id:"LOC9e98b1262cb544c59f9bb13c189214ed",inventory:10}]}}}},schema:{additionalProperties:{example:{product_id:"product_id",locations:[{id:"id",pending_inventory:6,inventory:0,status:"ENABLED"},{id:"id",pending_inventory:6,inventory:0,status:"ENABLED"}]},properties:{product_id:{type:"string"},locations:{items:{example:{id:"id",pending_inventory:1,inventory:1,status:"ENABLED"},properties:{id:{type:"string"},status:{enum:["ENABLED","DISABLED"],type:"string"},inventory:{format:"int32",type:"integer"},pending_inventory:{format:"int32",type:"integer"}},required:["id","status"],type:"object",title:"Location"},type:"array",uniqueItems:!0}},required:["locations","product_id"],type:"object",title:"UpdateInventoryRequest"},type:"object"}}},description:"request",required:!0},responses:{200:{content:{"application/json":{schema:{additionalProperties:{properties:{status:{enum:["SUCCESS","FAILURE","WARNING"],type:"string"},errors:{items:{properties:{severity:{enum:["ERROR","WARNING"],type:"string"},code:{format:"int32",type:"integer"},description:{type:"string"},path:{type:"string"}},required:["code","description","severity"],type:"object",title:"Error"},type:"array"},attribute_errors:{items:{properties:{severity:{enum:["ERROR","WARNING"],type:"string"},code:{format:"int32",type:"integer"},description:{type:"string"},attribute:{type:"string"},path:{type:"string"}},required:["attribute","code","description","severity"],type:"object",title:"AttributeError"},type:"array"}},required:["attribute_errors","errors","status"],type:"object",title:"ListingChangeResponse"},type:"object"}}},description:"Successfully updated inventories"},400:{content:{},description:"Bad request"},401:{content:{},description:"Client unauthorized"},500:{content:{},description:"Internal Server Error"}},tags:["Listings V3"],"x-codegen-request-body-name":"body","x-content-type":"application/json","x-accepts":"application/json",description:"Update listing inventory request",method:"post",path:"/sellers/listings/v3/update/inventory",servers:[{url:"https://api.flipkart.net"},{url:"https://sandbox-api.flipkart.net"}],security:[{Bearer:[]}],securitySchemes:{Bearer:{type:"apiKey",name:"Authorization",in:"header"}},jsonRequestBodyExample:{},info:{title:"Flipkart Marketplace API",description:"This API is offered by Flipkart Marketplace to sellers and partners for orders and listing management. <br /><br />You will need an access token to explore our APIs in the sandbox environment. For details on getting an access token, refer to the <a href='https://seller.flipkart.com/api-docs/FMSAPI.html#sandbox-environment'> documentation</a>. <br />Once you get the access token, use it to authorize the requests using the  <code>Authorize</code> button below. e.g. if your access token is <code>ACCTOK1</code>, the input for authorization should be <code>Bearer ACCTOK1</code>",contact:{name:"API Support",email:"seller-api-queries@flipkart.com"},version:"3.0"},postman:{name:"Update listing inventory request",description:{type:"text/plain"},url:{path:["sellers","listings","v3","update","inventory"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/mp-api_versioned/flipkart-marketplace-api",custom_edit_url:null},sidebar:"mpapi-3.0.0",previous:{title:"Update listing price request",permalink:"/pages/Flipkart/fk-api-platform-docs/docs/mp-api_versioned/update-price"},next:{title:"Get listings for SKUs",permalink:"/pages/Flipkart/fk-api-platform-docs/docs/mp-api_versioned/get-listings"}},g={},v=[],k={toc:v},h="wrapper";function f(e){let{components:t,...i}=e;return(0,r.kt)(h,(0,a.Z)({},k,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{className:"openapi__heading"},"Update listing inventory request"),(0,r.kt)(n.Z,{method:"post",path:"/sellers/listings/v3/update/inventory",mdxType:"MethodEndpoint"}),(0,r.kt)("p",null,"Update listing inventory request"),(0,r.kt)(o.Z,{className:"openapi-tabs__mime",mdxType:"MimeTabs"},(0,r.kt)(m.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Request Body"),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,r.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,r.kt)("p",null,"request"))),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{},className:"openapi-markdown__details"},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"property name*"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object (UpdateInventoryRequest)")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)(l.Z,{collapsible:!1,name:"product_id",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{},className:"openapi-markdown__details"},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"locations"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,r.kt)(l.Z,{collapsible:!1,name:"id",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"status",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** [`ENABLED`, `DISABLED`]",schema:{enum:["ENABLED","DISABLED"],type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"inventory",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{format:"int32",type:"integer"},mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"pending_inventory",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{format:"int32",type:"integer"},mdxType:"SchemaItem"}),(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))))))),(0,r.kt)("div",null,(0,r.kt)("div",null,(0,r.kt)(s.Z,{mdxType:"ApiTabs"},(0,r.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Successfully updated inventories")),(0,r.kt)("div",null,(0,r.kt)(o.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(d.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,r.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{},className:"openapi-markdown__details"},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"property name*"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object (ListingChangeResponse)")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)(l.Z,{collapsible:!1,name:"status",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** [`SUCCESS`, `FAILURE`, `WARNING`]",schema:{enum:["SUCCESS","FAILURE","WARNING"],type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{},className:"openapi-markdown__details"},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"errors"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,r.kt)(l.Z,{collapsible:!1,name:"severity",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** [`ERROR`, `WARNING`]",schema:{enum:["ERROR","WARNING"],type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"code",required:!0,schemaName:"int32",qualifierMessage:void 0,schema:{format:"int32",type:"integer"},mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"description",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"path",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,r.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{},className:"openapi-markdown__details"},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"attribute_errors"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,r.kt)(l.Z,{collapsible:!1,name:"severity",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** [`ERROR`, `WARNING`]",schema:{enum:["ERROR","WARNING"],type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"code",required:!0,schemaName:"int32",qualifierMessage:void 0,schema:{format:"int32",type:"integer"},mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"description",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"attribute",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"path",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))))))))),(0,r.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(p.Z,{responseExample:"{}",language:"json",mdxType:"ResponseSamples"}))))))),(0,r.kt)(m.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Bad request")),(0,r.kt)("div",null)),(0,r.kt)(m.Z,{label:"401",value:"401",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Client unauthorized")),(0,r.kt)("div",null)),(0,r.kt)(m.Z,{label:"500",value:"500",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Internal Server Error")),(0,r.kt)("div",null))))))}f.isMDXComponent=!0}}]);