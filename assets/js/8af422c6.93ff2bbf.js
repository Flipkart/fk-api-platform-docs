"use strict";(self.webpackChunkfk_api_platform_docs=self.webpackChunkfk_api_platform_docs||[]).push([[4961],{29497:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>h,contentTitle:()=>g,default:()=>b,frontMatter:()=>u,metadata:()=>y,toc:()=>_});var a=i(87462),n=(i(67294),i(3905)),s=i(38055),r=(i(47878),i(55878)),l=i(51663),m=i(98045),o=i(91795),p=i(18211),c=i(55985),d=i(85162);const u={id:"get-listings",title:"Get listings for SKUs",description:"Get listings for SKUs",sidebar_label:"Get listings for SKUs",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"getListings",parameters:[{description:"sku-ids",explode:!1,in:"path",name:"skuIds",required:!0,schema:{type:"string"},style:"simple"}],responses:{200:{content:{"application/json":{schema:{example:{unavailable:["unavailable","unavailable"],available:{key:{fulfillment_profile:"NON_FBF",shipping_fees:{national:0,currency:"INR",local:0,zonal:0},listing_id:"listing_id",price:{selling_price:0,nlc:5,dealer_price:5,mrp:0,currency:"INR",mop:1},product_id:"product_id",listing_status:"ACTIVE",archived_status:"ARCHIVED",tax:{is_gst_sellable:!0,hsn:"hsn",tax_code:"tax_code",goods_services_rate:2.242318933290832,luxury_cess_percentage:60.27456183070403},locations:[{id:"id",pending_inventory:6,inventory:0,status:"ENABLED"},{id:"id",pending_inventory:6,inventory:0,status:"ENABLED"}],packages:[{notional_value:{amount:.20271230230023218,unit:"PERCENTAGE"},name:"name",weight:3.616076749251911,description:"description",handling:{fragile:!0},id:"id",dimensions:{breadth:7.061401241503109,length:2.3021358869347655,height:9.301444243932576}},{notional_value:{amount:.20271230230023218,unit:"PERCENTAGE"},name:"name",weight:3.616076749251911,description:"description",handling:{fragile:!0},id:"id",dimensions:{breadth:7.061401241503109,length:2.3021358869347655,height:9.301444243932576}}]}},invalid:["invalid","invalid"]},properties:{available:{additionalProperties:{example:{fulfillment_profile:"NON_FBF",shipping_fees:{national:0,currency:"INR",local:0,zonal:0},listing_id:"listing_id",price:{selling_price:0,nlc:5,dealer_price:5,mrp:0,currency:"INR",mop:1},product_id:"product_id",listing_status:"ACTIVE",archived_status:"ARCHIVED",tax:{is_gst_sellable:!0,hsn:"hsn",tax_code:"tax_code",goods_services_rate:2.242318933290832,luxury_cess_percentage:60.27456183070403},locations:[{id:"id",pending_inventory:6,inventory:0,status:"ENABLED"},{id:"id",pending_inventory:6,inventory:0,status:"ENABLED"}],packages:[{notional_value:{amount:.20271230230023218,unit:"PERCENTAGE"},name:"name",weight:3.616076749251911,description:"description",handling:{fragile:!0},id:"id",dimensions:{breadth:7.061401241503109,length:2.3021358869347655,height:9.301444243932576}},{notional_value:{amount:.20271230230023218,unit:"PERCENTAGE"},name:"name",weight:3.616076749251911,description:"description",handling:{fragile:!0},id:"id",dimensions:{breadth:7.061401241503109,length:2.3021358869347655,height:9.301444243932576}}]},properties:{listing_id:{type:"string"},product_id:{type:"string"},price:{example:{selling_price:0,nlc:5,dealer_price:5,mrp:0,currency:"INR",mop:1},properties:{mrp:{format:"int32",minimum:0,type:"integer"},selling_price:{format:"int32",minimum:0,type:"integer"},mop:{format:"int32",type:"integer"},nlc:{format:"int32",type:"integer"},dealer_price:{format:"int32",type:"integer"},currency:{example:"INR",format:"iso-4217",type:"string"}},required:["currency","mrp","selling_price"],type:"object",title:"Price"},tax:{example:{is_gst_sellable:!0,hsn:"hsn",tax_code:"tax_code",goods_services_rate:6.445980483417342,luxury_cess_percentage:70.61401241503108},properties:{hsn:{type:"string"},is_gst_sellable:{type:"boolean"},goods_services_rate:{maximum:28,minimum:0,type:"number"},tax_code:{type:"string"},luxury_cess_percentage:{maximum:100,minimum:0,type:"number"}},required:["hsn"],type:"object",title:"Tax"},listing_status:{enum:["ACTIVE","INACTIVE"],type:"string"},shipping_fees:{example:{national:0,currency:"INR",local:0,zonal:0},properties:{local:{format:"int32",minimum:0,type:"integer"},zonal:{format:"int32",minimum:0,type:"integer"},national:{format:"int32",minimum:0,type:"integer"},currency:{example:"INR",format:"iso-4217",type:"string"}},required:["currency","local","national","zonal"],type:"object",title:"ShippingFees"},fulfillment_profile:{enum:["NON_FBF","FBF_LITE","FBF"],type:"string"},packages:{items:{example:{notional_value:{amount:.7386281948385884,unit:"PERCENTAGE"},name:"name",weight:4.145608029883936,description:"description",handling:{fragile:!0},id:"id",dimensions:{breadth:3.616076749251911,length:9.301444243932576,height:2.027123023002322}},properties:{id:{type:"string"},name:{type:"string"},dimensions:{example:{breadth:3.616076749251911,length:9.301444243932576,height:2.027123023002322},properties:{length:{type:"number"},breadth:{type:"number"},height:{type:"number"}},required:["breadth","height","length"],type:"object",title:"Dimension"},weight:{type:"number"},notional_value:{example:{amount:.7386281948385884,unit:"PERCENTAGE"},properties:{amount:{minimum:0,type:"number"},unit:{enum:["PERCENTAGE","INR"],type:"string"}},required:["amount","unit"],type:"object",title:"NotionalValue"},description:{type:"string"},handling:{example:{fragile:!0},properties:{fragile:{type:"boolean"}},required:["fragile"],type:"object",title:"Handling"}},required:["name"],type:"object",title:"Package"},type:"array",uniqueItems:!0},locations:{items:{example:{id:"id",pending_inventory:1,inventory:1,status:"ENABLED"},properties:{id:{type:"string"},status:{enum:["ENABLED","DISABLED"],type:"string"},inventory:{format:"int32",type:"integer"},pending_inventory:{format:"int32",type:"integer"}},required:["id","status"],type:"object",title:"Location"},type:"array"},archived_status:{enum:["ARCHIVED","NONE"],type:"string"}},required:["fulfillment_profile","listing_id","listing_status","price","product_id"],type:"object",title:"MarketplaceListingDetail"},type:"object"},unavailable:{items:{type:"string"},type:"array",uniqueItems:!0},invalid:{items:{type:"string"},type:"array",uniqueItems:!0}},required:["available"],type:"object",title:"GetMarketplaceListingDetailsResponse"}}},description:"Successfully got the response"},400:{content:{},description:"Bad request"},500:{content:{},description:"Internal Server Error"}},tags:["Listings V3"],"x-accepts":"application/json",description:"Get listings for SKUs",method:"get",path:"/sellers/listings/v3/{skuIds}",servers:[{url:"https://api.flipkart.net"},{url:"https://sandbox-api.flipkart.net"}],security:[{Bearer:[]}],securitySchemes:{Bearer:{type:"apiKey",name:"Authorization",in:"header"}},info:{title:"Flipkart Marketplace API",description:"This API is offered by Flipkart Marketplace to sellers and partners for orders and listing management. <br /><br />You will need an access token to explore our APIs in the sandbox environment. For details on getting an access token, refer to the <a href='https://seller.flipkart.com/api-docs/FMSAPI.html#sandbox-environment'> documentation</a>. <br />Once you get the access token, use it to authorize the requests using the  <code>Authorize</code> button below. e.g. if your access token is <code>ACCTOK1</code>, the input for authorization should be <code>Bearer ACCTOK1</code>",contact:{name:"API Support",email:"seller-api-queries@flipkart.com"},version:"3.0"},postman:{name:"Get listings for SKUs",description:{type:"text/plain"},url:{path:["sellers","listings","v3",":skuIds"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) sku-ids",type:"text/plain"},type:"any",value:"",key:"skuIds"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/mp-api_versioned/flipkart-marketplace-api",custom_edit_url:null},g=void 0,y={unversionedId:"mp-api_versioned/get-listings",id:"mp-api_versioned/get-listings",title:"Get listings for SKUs",description:"Get listings for SKUs",source:"@site/docs/mp-api_versioned/get-listings.api.mdx",sourceDirName:"mp-api_versioned",slug:"/mp-api_versioned/get-listings",permalink:"/pages/Flipkart/fk-api-platform-docs/docs/mp-api_versioned/get-listings",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-listings",title:"Get listings for SKUs",description:"Get listings for SKUs",sidebar_label:"Get listings for SKUs",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"getListings",parameters:[{description:"sku-ids",explode:!1,in:"path",name:"skuIds",required:!0,schema:{type:"string"},style:"simple"}],responses:{200:{content:{"application/json":{schema:{example:{unavailable:["unavailable","unavailable"],available:{key:{fulfillment_profile:"NON_FBF",shipping_fees:{national:0,currency:"INR",local:0,zonal:0},listing_id:"listing_id",price:{selling_price:0,nlc:5,dealer_price:5,mrp:0,currency:"INR",mop:1},product_id:"product_id",listing_status:"ACTIVE",archived_status:"ARCHIVED",tax:{is_gst_sellable:!0,hsn:"hsn",tax_code:"tax_code",goods_services_rate:2.242318933290832,luxury_cess_percentage:60.27456183070403},locations:[{id:"id",pending_inventory:6,inventory:0,status:"ENABLED"},{id:"id",pending_inventory:6,inventory:0,status:"ENABLED"}],packages:[{notional_value:{amount:.20271230230023218,unit:"PERCENTAGE"},name:"name",weight:3.616076749251911,description:"description",handling:{fragile:!0},id:"id",dimensions:{breadth:7.061401241503109,length:2.3021358869347655,height:9.301444243932576}},{notional_value:{amount:.20271230230023218,unit:"PERCENTAGE"},name:"name",weight:3.616076749251911,description:"description",handling:{fragile:!0},id:"id",dimensions:{breadth:7.061401241503109,length:2.3021358869347655,height:9.301444243932576}}]}},invalid:["invalid","invalid"]},properties:{available:{additionalProperties:{example:{fulfillment_profile:"NON_FBF",shipping_fees:{national:0,currency:"INR",local:0,zonal:0},listing_id:"listing_id",price:{selling_price:0,nlc:5,dealer_price:5,mrp:0,currency:"INR",mop:1},product_id:"product_id",listing_status:"ACTIVE",archived_status:"ARCHIVED",tax:{is_gst_sellable:!0,hsn:"hsn",tax_code:"tax_code",goods_services_rate:2.242318933290832,luxury_cess_percentage:60.27456183070403},locations:[{id:"id",pending_inventory:6,inventory:0,status:"ENABLED"},{id:"id",pending_inventory:6,inventory:0,status:"ENABLED"}],packages:[{notional_value:{amount:.20271230230023218,unit:"PERCENTAGE"},name:"name",weight:3.616076749251911,description:"description",handling:{fragile:!0},id:"id",dimensions:{breadth:7.061401241503109,length:2.3021358869347655,height:9.301444243932576}},{notional_value:{amount:.20271230230023218,unit:"PERCENTAGE"},name:"name",weight:3.616076749251911,description:"description",handling:{fragile:!0},id:"id",dimensions:{breadth:7.061401241503109,length:2.3021358869347655,height:9.301444243932576}}]},properties:{listing_id:{type:"string"},product_id:{type:"string"},price:{example:{selling_price:0,nlc:5,dealer_price:5,mrp:0,currency:"INR",mop:1},properties:{mrp:{format:"int32",minimum:0,type:"integer"},selling_price:{format:"int32",minimum:0,type:"integer"},mop:{format:"int32",type:"integer"},nlc:{format:"int32",type:"integer"},dealer_price:{format:"int32",type:"integer"},currency:{example:"INR",format:"iso-4217",type:"string"}},required:["currency","mrp","selling_price"],type:"object",title:"Price"},tax:{example:{is_gst_sellable:!0,hsn:"hsn",tax_code:"tax_code",goods_services_rate:6.445980483417342,luxury_cess_percentage:70.61401241503108},properties:{hsn:{type:"string"},is_gst_sellable:{type:"boolean"},goods_services_rate:{maximum:28,minimum:0,type:"number"},tax_code:{type:"string"},luxury_cess_percentage:{maximum:100,minimum:0,type:"number"}},required:["hsn"],type:"object",title:"Tax"},listing_status:{enum:["ACTIVE","INACTIVE"],type:"string"},shipping_fees:{example:{national:0,currency:"INR",local:0,zonal:0},properties:{local:{format:"int32",minimum:0,type:"integer"},zonal:{format:"int32",minimum:0,type:"integer"},national:{format:"int32",minimum:0,type:"integer"},currency:{example:"INR",format:"iso-4217",type:"string"}},required:["currency","local","national","zonal"],type:"object",title:"ShippingFees"},fulfillment_profile:{enum:["NON_FBF","FBF_LITE","FBF"],type:"string"},packages:{items:{example:{notional_value:{amount:.7386281948385884,unit:"PERCENTAGE"},name:"name",weight:4.145608029883936,description:"description",handling:{fragile:!0},id:"id",dimensions:{breadth:3.616076749251911,length:9.301444243932576,height:2.027123023002322}},properties:{id:{type:"string"},name:{type:"string"},dimensions:{example:{breadth:3.616076749251911,length:9.301444243932576,height:2.027123023002322},properties:{length:{type:"number"},breadth:{type:"number"},height:{type:"number"}},required:["breadth","height","length"],type:"object",title:"Dimension"},weight:{type:"number"},notional_value:{example:{amount:.7386281948385884,unit:"PERCENTAGE"},properties:{amount:{minimum:0,type:"number"},unit:{enum:["PERCENTAGE","INR"],type:"string"}},required:["amount","unit"],type:"object",title:"NotionalValue"},description:{type:"string"},handling:{example:{fragile:!0},properties:{fragile:{type:"boolean"}},required:["fragile"],type:"object",title:"Handling"}},required:["name"],type:"object",title:"Package"},type:"array",uniqueItems:!0},locations:{items:{example:{id:"id",pending_inventory:1,inventory:1,status:"ENABLED"},properties:{id:{type:"string"},status:{enum:["ENABLED","DISABLED"],type:"string"},inventory:{format:"int32",type:"integer"},pending_inventory:{format:"int32",type:"integer"}},required:["id","status"],type:"object",title:"Location"},type:"array"},archived_status:{enum:["ARCHIVED","NONE"],type:"string"}},required:["fulfillment_profile","listing_id","listing_status","price","product_id"],type:"object",title:"MarketplaceListingDetail"},type:"object"},unavailable:{items:{type:"string"},type:"array",uniqueItems:!0},invalid:{items:{type:"string"},type:"array",uniqueItems:!0}},required:["available"],type:"object",title:"GetMarketplaceListingDetailsResponse"}}},description:"Successfully got the response"},400:{content:{},description:"Bad request"},500:{content:{},description:"Internal Server Error"}},tags:["Listings V3"],"x-accepts":"application/json",description:"Get listings for SKUs",method:"get",path:"/sellers/listings/v3/{skuIds}",servers:[{url:"https://api.flipkart.net"},{url:"https://sandbox-api.flipkart.net"}],security:[{Bearer:[]}],securitySchemes:{Bearer:{type:"apiKey",name:"Authorization",in:"header"}},info:{title:"Flipkart Marketplace API",description:"This API is offered by Flipkart Marketplace to sellers and partners for orders and listing management. <br /><br />You will need an access token to explore our APIs in the sandbox environment. For details on getting an access token, refer to the <a href='https://seller.flipkart.com/api-docs/FMSAPI.html#sandbox-environment'> documentation</a>. <br />Once you get the access token, use it to authorize the requests using the  <code>Authorize</code> button below. e.g. if your access token is <code>ACCTOK1</code>, the input for authorization should be <code>Bearer ACCTOK1</code>",contact:{name:"API Support",email:"seller-api-queries@flipkart.com"},version:"3.0"},postman:{name:"Get listings for SKUs",description:{type:"text/plain"},url:{path:["sellers","listings","v3",":skuIds"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) sku-ids",type:"text/plain"},type:"any",value:"",key:"skuIds"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/mp-api_versioned/flipkart-marketplace-api",custom_edit_url:null},sidebar:"mpapi-3.0.0",previous:{title:"Update listing inventory request",permalink:"/pages/Flipkart/fk-api-platform-docs/docs/mp-api_versioned/update-inventory"},next:{title:"Update listing request",permalink:"/pages/Flipkart/fk-api-platform-docs/docs/mp-api_versioned/update-listings"}},h={},_=[],k={toc:_},f="wrapper";function b(e){let{components:t,...i}=e;return(0,n.kt)(f,(0,a.Z)({},k,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{className:"openapi__heading"},"Get listings for SKUs"),(0,n.kt)(r.Z,{method:"get",path:"/sellers/listings/v3/{skuIds}",mdxType:"MethodEndpoint"}),(0,n.kt)("p",null,"Get listings for SKUs"),(0,n.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Path Parameters")),(0,n.kt)("div",null,(0,n.kt)("ul",null,(0,n.kt)(m.Z,{className:"paramsItem",param:{description:"sku-ids",explode:!1,in:"path",name:"skuIds",required:!0,schema:{type:"string"},style:"simple"},mdxType:"ParamsItem"})))),(0,n.kt)("div",null,(0,n.kt)("div",null,(0,n.kt)(s.Z,{mdxType:"ApiTabs"},(0,n.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Successfully got the response")),(0,n.kt)("div",null,(0,n.kt)(l.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(c.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,n.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"available"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object"),(0,n.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"property name*"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object (MarketplaceListingDetail)")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)(p.Z,{collapsible:!1,name:"listing_id",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"product_id",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"price"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object"),(0,n.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)(p.Z,{collapsible:!1,name:"mrp",required:!0,schemaName:"int32",qualifierMessage:void 0,schema:{format:"int32",minimum:0,type:"integer"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"selling_price",required:!0,schemaName:"int32",qualifierMessage:void 0,schema:{format:"int32",minimum:0,type:"integer"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"mop",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{format:"int32",type:"integer"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"nlc",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{format:"int32",type:"integer"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"dealer_price",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{format:"int32",type:"integer"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"currency",required:!0,schemaName:"iso-4217",qualifierMessage:void 0,schema:{example:"INR",format:"iso-4217",type:"string"},mdxType:"SchemaItem"})))),(0,n.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"tax"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)(p.Z,{collapsible:!1,name:"hsn",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"is_gst_sellable",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"goods_services_rate",required:!1,schemaName:"number",qualifierMessage:"**Possible values:** `<= 28`",schema:{maximum:28,minimum:0,type:"number"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"tax_code",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"luxury_cess_percentage",required:!1,schemaName:"number",qualifierMessage:"**Possible values:** `<= 100`",schema:{maximum:100,minimum:0,type:"number"},mdxType:"SchemaItem"})))),(0,n.kt)(p.Z,{collapsible:!1,name:"listing_status",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** [`ACTIVE`, `INACTIVE`]",schema:{enum:["ACTIVE","INACTIVE"],type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"shipping_fees"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)(p.Z,{collapsible:!1,name:"local",required:!0,schemaName:"int32",qualifierMessage:void 0,schema:{format:"int32",minimum:0,type:"integer"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"zonal",required:!0,schemaName:"int32",qualifierMessage:void 0,schema:{format:"int32",minimum:0,type:"integer"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"national",required:!0,schemaName:"int32",qualifierMessage:void 0,schema:{format:"int32",minimum:0,type:"integer"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"currency",required:!0,schemaName:"iso-4217",qualifierMessage:void 0,schema:{example:"INR",format:"iso-4217",type:"string"},mdxType:"SchemaItem"})))),(0,n.kt)(p.Z,{collapsible:!1,name:"fulfillment_profile",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** [`NON_FBF`, `FBF_LITE`, `FBF`]",schema:{enum:["NON_FBF","FBF_LITE","FBF"],type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"packages"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)("li",null,(0,n.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,n.kt)(p.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"dimensions"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)(p.Z,{collapsible:!1,name:"length",required:!0,schemaName:"number",qualifierMessage:void 0,schema:{type:"number"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"breadth",required:!0,schemaName:"number",qualifierMessage:void 0,schema:{type:"number"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"height",required:!0,schemaName:"number",qualifierMessage:void 0,schema:{type:"number"},mdxType:"SchemaItem"})))),(0,n.kt)(p.Z,{collapsible:!1,name:"weight",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"notional_value"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)(p.Z,{collapsible:!1,name:"amount",required:!0,schemaName:"number",qualifierMessage:void 0,schema:{minimum:0,type:"number"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"unit",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** [`PERCENTAGE`, `INR`]",schema:{enum:["PERCENTAGE","INR"],type:"string"},mdxType:"SchemaItem"})))),(0,n.kt)(p.Z,{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"handling"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)(p.Z,{collapsible:!1,name:"fragile",required:!0,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"},mdxType:"SchemaItem"})))),(0,n.kt)("li",null,(0,n.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,n.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details"},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"locations"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)("li",null,(0,n.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,n.kt)(p.Z,{collapsible:!1,name:"id",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"status",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** [`ENABLED`, `DISABLED`]",schema:{enum:["ENABLED","DISABLED"],type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"inventory",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{format:"int32",type:"integer"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"pending_inventory",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{format:"int32",type:"integer"},mdxType:"SchemaItem"}),(0,n.kt)("li",null,(0,n.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,n.kt)(p.Z,{collapsible:!1,name:"archived_status",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** [`ARCHIVED`, `NONE`]",schema:{enum:["ARCHIVED","NONE"],type:"string"},mdxType:"SchemaItem"}))))))),(0,n.kt)(p.Z,{collapsible:!1,name:"unavailable",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{items:{type:"string"},type:"array",uniqueItems:!0},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"invalid",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{items:{type:"string"},type:"array",uniqueItems:!0},mdxType:"SchemaItem"})))),(0,n.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(o.Z,{responseExample:'{\n  "unavailable": [\n    "unavailable",\n    "unavailable"\n  ],\n  "available": {\n    "key": {\n      "fulfillment_profile": "NON_FBF",\n      "shipping_fees": {\n        "national": 0,\n        "currency": "INR",\n        "local": 0,\n        "zonal": 0\n      },\n      "listing_id": "listing_id",\n      "price": {\n        "selling_price": 0,\n        "nlc": 5,\n        "dealer_price": 5,\n        "mrp": 0,\n        "currency": "INR",\n        "mop": 1\n      },\n      "product_id": "product_id",\n      "listing_status": "ACTIVE",\n      "archived_status": "ARCHIVED",\n      "tax": {\n        "is_gst_sellable": true,\n        "hsn": "hsn",\n        "tax_code": "tax_code",\n        "goods_services_rate": 2.242318933290832,\n        "luxury_cess_percentage": 60.27456183070403\n      },\n      "locations": [\n        {\n          "id": "id",\n          "pending_inventory": 6,\n          "inventory": 0,\n          "status": "ENABLED"\n        },\n        {\n          "id": "id",\n          "pending_inventory": 6,\n          "inventory": 0,\n          "status": "ENABLED"\n        }\n      ],\n      "packages": [\n        {\n          "notional_value": {\n            "amount": 0.20271230230023218,\n            "unit": "PERCENTAGE"\n          },\n          "name": "name",\n          "weight": 3.616076749251911,\n          "description": "description",\n          "handling": {\n            "fragile": true\n          },\n          "id": "id",\n          "dimensions": {\n            "breadth": 7.061401241503109,\n            "length": 2.3021358869347655,\n            "height": 9.301444243932576\n          }\n        },\n        {\n          "notional_value": {\n            "amount": 0.20271230230023218,\n            "unit": "PERCENTAGE"\n          },\n          "name": "name",\n          "weight": 3.616076749251911,\n          "description": "description",\n          "handling": {\n            "fragile": true\n          },\n          "id": "id",\n          "dimensions": {\n            "breadth": 7.061401241503109,\n            "length": 2.3021358869347655,\n            "height": 9.301444243932576\n          }\n        }\n      ]\n    }\n  },\n  "invalid": [\n    "invalid",\n    "invalid"\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,n.kt)(d.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Bad request")),(0,n.kt)("div",null)),(0,n.kt)(d.Z,{label:"500",value:"500",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Internal Server Error")),(0,n.kt)("div",null))))))}b.isMDXComponent=!0}}]);