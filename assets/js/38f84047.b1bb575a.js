"use strict";(self.webpackChunkfk_api_platform_docs=self.webpackChunkfk_api_platform_docs||[]).push([[6756],{43751:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>u,default:()=>I,frontMatter:()=>h,metadata:()=>y,toc:()=>b});var i=a(87462),s=(a(67294),a(3905)),r=a(38055),n=(a(47878),a(55878)),m=a(51663),o=a(98045),p=a(91795),l=a(18211),d=a(55985),c=a(85162);const h={id:"get-shipment-details-by-internal-id",title:"Get order details for given shipment or order ids",description:"This operation returns the order related details for the shipments. This operation can accept either shipmentIds, orderIds or orderItemIds, but only one type of query param is accepted per invocation.",sidebar_label:"Get order details for given shipment or order ids",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Shipment V3"],description:"This operation returns the order related details for the shipments. This operation can accept either shipmentIds, orderIds or orderItemIds, but only one type of query param is accepted per invocation.",operationId:"getShipmentDetailsByInternalId",parameters:[{name:"shipmentIds",in:"query",description:"Comma separated shipment ids. Maximum 100 shipment ids allowed per request.",schema:{type:"string"}},{name:"orderItemIds",in:"query",description:"Comma separated order item ids. Maximum 100 shipment ids allowed per request.",schema:{type:"string"}},{name:"orderIds",in:"query",description:"Comma separated order ids. Maximum 100 shipment ids allowed per request.",schema:{type:"string"}}],responses:{200:{description:"successful operation",content:{"application/json":{schema:{type:"object",properties:{shipments:{type:"array",items:{type:"object",properties:{shipmentId:{type:"string"},dispatchByDate:{type:"string",format:"date-time"},dispatchAfterDate:{type:"string",format:"date-time"},updatedAt:{type:"string",format:"date-time"},locationId:{type:"string"},hold:{type:"boolean"},mps:{type:"boolean"},packagingPolicy:{type:"string"},subShipments:{type:"array",items:{type:"object",properties:{subShipmentId:{type:"string"},packages:{type:"array",items:{example:{notional_value:{amount:.7386281948385884,unit:"PERCENTAGE"},name:"name",weight:4.145608029883936,description:"description",handling:{fragile:!0},id:"id",dimensions:{breadth:3.616076749251911,length:9.301444243932576,height:2.027123023002322}},properties:{id:{type:"string"},name:{type:"string"},dimensions:{example:{breadth:3.616076749251911,length:9.301444243932576,height:2.027123023002322},properties:{length:{type:"number"},breadth:{type:"number"},height:{type:"number"}},required:["breadth","height","length"],type:"object",title:"Dimension"},weight:{type:"number"},notional_value:{example:{amount:.7386281948385884,unit:"PERCENTAGE"},properties:{amount:{minimum:0,type:"number"},unit:{enum:["PERCENTAGE","INR"],type:"string"}},required:["amount","unit"],type:"object",title:"NotionalValue"},description:{type:"string"},handling:{example:{fragile:!0},properties:{fragile:{type:"boolean"}},required:["fragile"],type:"object",title:"Handling"}},required:["name"],type:"object",title:"Package"}}},title:"SubShipment"}},orderItems:{type:"array",items:{type:"object",properties:{orderItemId:{type:"string"},orderId:{type:"string"},cancellationGroupId:{type:"string"},orderDate:{type:"string",format:"date-time"},cancellationDate:{type:"string",format:"date-time"},paymentType:{type:"string",enum:["COD","PREPAID"]},status:{type:"string",enum:["APPROVED","PACKING_IN_PROGRESS","FORM_FAILED","PACKED","READY_TO_DISPATCH","PICKUP_COMPLETE","CANCELLED","RETURN_REQUESTED","RETURNED","SHIPPED","DELIVERED","COMPLETED"]},cancellationReason:{type:"string"},cancellationSubReason:{type:"string"},courierReturn:{type:"boolean"},quantity:{type:"integer",format:"int32"},fsn:{type:"string"},sku:{type:"string"},listingId:{type:"string"},hsn:{type:"string"},title:{type:"string"},packageIds:{type:"array",items:{type:"string"}},priceComponents:{type:"object",properties:{sellingPrice:{type:"number"},totalPrice:{type:"number"},shippingCharge:{type:"number"},customerPrice:{type:"number"},flipkartDiscount:{type:"number"}},title:"PriceComponent"},serviceProfile:{type:"string",enum:["Flipkart_Fulfilment","Seller_Fulfilment","Smart_Fulfilment","FBF","NON_FBF","FBF_LITE"]},is_replacement:{type:"boolean"}},title:"OrderItem"}},forms:{type:"array",items:{type:"object",properties:{name:{type:"string"},link:{type:"string"},automated:{type:"boolean"}},title:"Form"}},shipmentType:{type:"string"}},title:"Shipment"}}},title:"ShipmentResponse"}}}}},method:"get",path:"/sellers/v3/shipments",servers:[{url:"https://api.flipkart.net"},{url:"https://sandbox-api.flipkart.net"}],security:[{Bearer:[]}],securitySchemes:{Bearer:{type:"apiKey",name:"Authorization",in:"header"}},info:{title:"Flipkart Marketplace API",description:"This API is offered by Flipkart Marketplace to sellers and partners for orders and listing management. <br /><br />You will need an access token to explore our APIs in the sandbox environment. For details on getting an access token, refer to the <a href='https://seller.flipkart.com/api-docs/FMSAPI.html#sandbox-environment'> documentation</a>. <br />Once you get the access token, use it to authorize the requests using the  <code>Authorize</code> button below. e.g. if your access token is <code>ACCTOK1</code>, the input for authorization should be <code>Bearer ACCTOK1</code>",contact:{name:"API Support",email:"seller-api-queries@flipkart.com"},version:"3.0"},postman:{name:"Get order details for given shipment or order ids",description:{content:"This operation returns the order related details for the shipments. This operation can accept either shipmentIds, orderIds or orderItemIds, but only one type of query param is accepted per invocation.",type:"text/plain"},url:{path:["sellers","v3","shipments"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"Comma separated shipment ids. Maximum 100 shipment ids allowed per request.",type:"text/plain"},key:"shipmentIds",value:""},{disabled:!1,description:{content:"Comma separated order item ids. Maximum 100 shipment ids allowed per request.",type:"text/plain"},key:"orderItemIds",value:""},{disabled:!1,description:{content:"Comma separated order ids. Maximum 100 shipment ids allowed per request.",type:"text/plain"},key:"orderIds",value:""}],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/mp-api_versioned/flipkart-marketplace-api",custom_edit_url:null},u=void 0,y={unversionedId:"mp-api_versioned/get-shipment-details-by-internal-id",id:"mp-api_versioned/get-shipment-details-by-internal-id",title:"Get order details for given shipment or order ids",description:"This operation returns the order related details for the shipments. This operation can accept either shipmentIds, orderIds or orderItemIds, but only one type of query param is accepted per invocation.",source:"@site/docs/mp-api_versioned/get-shipment-details-by-internal-id.api.mdx",sourceDirName:"mp-api_versioned",slug:"/mp-api_versioned/get-shipment-details-by-internal-id",permalink:"/fk-api-platform-docs/docs/mp-api_versioned/get-shipment-details-by-internal-id",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-shipment-details-by-internal-id",title:"Get order details for given shipment or order ids",description:"This operation returns the order related details for the shipments. This operation can accept either shipmentIds, orderIds or orderItemIds, but only one type of query param is accepted per invocation.",sidebar_label:"Get order details for given shipment or order ids",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Shipment V3"],description:"This operation returns the order related details for the shipments. This operation can accept either shipmentIds, orderIds or orderItemIds, but only one type of query param is accepted per invocation.",operationId:"getShipmentDetailsByInternalId",parameters:[{name:"shipmentIds",in:"query",description:"Comma separated shipment ids. Maximum 100 shipment ids allowed per request.",schema:{type:"string"}},{name:"orderItemIds",in:"query",description:"Comma separated order item ids. Maximum 100 shipment ids allowed per request.",schema:{type:"string"}},{name:"orderIds",in:"query",description:"Comma separated order ids. Maximum 100 shipment ids allowed per request.",schema:{type:"string"}}],responses:{200:{description:"successful operation",content:{"application/json":{schema:{type:"object",properties:{shipments:{type:"array",items:{type:"object",properties:{shipmentId:{type:"string"},dispatchByDate:{type:"string",format:"date-time"},dispatchAfterDate:{type:"string",format:"date-time"},updatedAt:{type:"string",format:"date-time"},locationId:{type:"string"},hold:{type:"boolean"},mps:{type:"boolean"},packagingPolicy:{type:"string"},subShipments:{type:"array",items:{type:"object",properties:{subShipmentId:{type:"string"},packages:{type:"array",items:{example:{notional_value:{amount:.7386281948385884,unit:"PERCENTAGE"},name:"name",weight:4.145608029883936,description:"description",handling:{fragile:!0},id:"id",dimensions:{breadth:3.616076749251911,length:9.301444243932576,height:2.027123023002322}},properties:{id:{type:"string"},name:{type:"string"},dimensions:{example:{breadth:3.616076749251911,length:9.301444243932576,height:2.027123023002322},properties:{length:{type:"number"},breadth:{type:"number"},height:{type:"number"}},required:["breadth","height","length"],type:"object",title:"Dimension"},weight:{type:"number"},notional_value:{example:{amount:.7386281948385884,unit:"PERCENTAGE"},properties:{amount:{minimum:0,type:"number"},unit:{enum:["PERCENTAGE","INR"],type:"string"}},required:["amount","unit"],type:"object",title:"NotionalValue"},description:{type:"string"},handling:{example:{fragile:!0},properties:{fragile:{type:"boolean"}},required:["fragile"],type:"object",title:"Handling"}},required:["name"],type:"object",title:"Package"}}},title:"SubShipment"}},orderItems:{type:"array",items:{type:"object",properties:{orderItemId:{type:"string"},orderId:{type:"string"},cancellationGroupId:{type:"string"},orderDate:{type:"string",format:"date-time"},cancellationDate:{type:"string",format:"date-time"},paymentType:{type:"string",enum:["COD","PREPAID"]},status:{type:"string",enum:["APPROVED","PACKING_IN_PROGRESS","FORM_FAILED","PACKED","READY_TO_DISPATCH","PICKUP_COMPLETE","CANCELLED","RETURN_REQUESTED","RETURNED","SHIPPED","DELIVERED","COMPLETED"]},cancellationReason:{type:"string"},cancellationSubReason:{type:"string"},courierReturn:{type:"boolean"},quantity:{type:"integer",format:"int32"},fsn:{type:"string"},sku:{type:"string"},listingId:{type:"string"},hsn:{type:"string"},title:{type:"string"},packageIds:{type:"array",items:{type:"string"}},priceComponents:{type:"object",properties:{sellingPrice:{type:"number"},totalPrice:{type:"number"},shippingCharge:{type:"number"},customerPrice:{type:"number"},flipkartDiscount:{type:"number"}},title:"PriceComponent"},serviceProfile:{type:"string",enum:["Flipkart_Fulfilment","Seller_Fulfilment","Smart_Fulfilment","FBF","NON_FBF","FBF_LITE"]},is_replacement:{type:"boolean"}},title:"OrderItem"}},forms:{type:"array",items:{type:"object",properties:{name:{type:"string"},link:{type:"string"},automated:{type:"boolean"}},title:"Form"}},shipmentType:{type:"string"}},title:"Shipment"}}},title:"ShipmentResponse"}}}}},method:"get",path:"/sellers/v3/shipments",servers:[{url:"https://api.flipkart.net"},{url:"https://sandbox-api.flipkart.net"}],security:[{Bearer:[]}],securitySchemes:{Bearer:{type:"apiKey",name:"Authorization",in:"header"}},info:{title:"Flipkart Marketplace API",description:"This API is offered by Flipkart Marketplace to sellers and partners for orders and listing management. <br /><br />You will need an access token to explore our APIs in the sandbox environment. For details on getting an access token, refer to the <a href='https://seller.flipkart.com/api-docs/FMSAPI.html#sandbox-environment'> documentation</a>. <br />Once you get the access token, use it to authorize the requests using the  <code>Authorize</code> button below. e.g. if your access token is <code>ACCTOK1</code>, the input for authorization should be <code>Bearer ACCTOK1</code>",contact:{name:"API Support",email:"seller-api-queries@flipkart.com"},version:"3.0"},postman:{name:"Get order details for given shipment or order ids",description:{content:"This operation returns the order related details for the shipments. This operation can accept either shipmentIds, orderIds or orderItemIds, but only one type of query param is accepted per invocation.",type:"text/plain"},url:{path:["sellers","v3","shipments"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"Comma separated shipment ids. Maximum 100 shipment ids allowed per request.",type:"text/plain"},key:"shipmentIds",value:""},{disabled:!1,description:{content:"Comma separated order item ids. Maximum 100 shipment ids allowed per request.",type:"text/plain"},key:"orderItemIds",value:""},{disabled:!1,description:{content:"Comma separated order ids. Maximum 100 shipment ids allowed per request.",type:"text/plain"},key:"orderIds",value:""}],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/mp-api_versioned/flipkart-marketplace-api",custom_edit_url:null},sidebar:"mpapi-3.0.0",previous:{title:"Search shipments using filters",permalink:"/fk-api-platform-docs/docs/mp-api_versioned/search-pre-dispatch-shipment-post"},next:{title:"Trigger label generation for shipments",permalink:"/fk-api-platform-docs/docs/mp-api_versioned/pack"}},g={},b=[],k={toc:b},f="wrapper";function I(e){let{components:t,...a}=e;return(0,s.kt)(f,(0,i.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{className:"openapi__heading"},"Get order details for given shipment or order ids"),(0,s.kt)(n.Z,{method:"get",path:"/sellers/v3/shipments",mdxType:"MethodEndpoint"}),(0,s.kt)("p",null,"This operation returns the order related details for the shipments. This operation can accept either shipmentIds, orderIds or orderItemIds, but only one type of query param is accepted per invocation."),(0,s.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Query Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(o.Z,{className:"paramsItem",param:{name:"shipmentIds",in:"query",description:"Comma separated shipment ids. Maximum 100 shipment ids allowed per request.",schema:{type:"string"}},mdxType:"ParamsItem"}),(0,s.kt)(o.Z,{className:"paramsItem",param:{name:"orderItemIds",in:"query",description:"Comma separated order item ids. Maximum 100 shipment ids allowed per request.",schema:{type:"string"}},mdxType:"ParamsItem"}),(0,s.kt)(o.Z,{className:"paramsItem",param:{name:"orderIds",in:"query",description:"Comma separated order ids. Maximum 100 shipment ids allowed per request.",schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,s.kt)("div",null,(0,s.kt)("div",null,(0,s.kt)(r.Z,{mdxType:"ApiTabs"},(0,s.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"successful operation")),(0,s.kt)("div",null,(0,s.kt)(m.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(d.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"shipments"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(l.Z,{collapsible:!1,name:"shipmentId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"dispatchByDate",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"dispatchAfterDate",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"updatedAt",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"locationId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"hold",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"mps",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"packagingPolicy",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"subShipments"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(l.Z,{collapsible:!1,name:"subShipmentId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"packages"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(l.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"dimensions"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!1,name:"length",required:!0,schemaName:"number",qualifierMessage:void 0,schema:{type:"number"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"breadth",required:!0,schemaName:"number",qualifierMessage:void 0,schema:{type:"number"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"height",required:!0,schemaName:"number",qualifierMessage:void 0,schema:{type:"number"},mdxType:"SchemaItem"})))),(0,s.kt)(l.Z,{collapsible:!1,name:"weight",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"notional_value"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!1,name:"amount",required:!0,schemaName:"number",qualifierMessage:void 0,schema:{minimum:0,type:"number"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"unit",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** [`PERCENTAGE`, `INR`]",schema:{enum:["PERCENTAGE","INR"],type:"string"},mdxType:"SchemaItem"})))),(0,s.kt)(l.Z,{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"handling"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!1,name:"fragile",required:!0,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"},mdxType:"SchemaItem"})))),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,s.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"orderItems"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(l.Z,{collapsible:!1,name:"orderItemId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"orderId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"cancellationGroupId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"orderDate",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"cancellationDate",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"paymentType",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** [`COD`, `PREPAID`]",schema:{type:"string",enum:["COD","PREPAID"]},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"status",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** [`APPROVED`, `PACKING_IN_PROGRESS`, `FORM_FAILED`, `PACKED`, `READY_TO_DISPATCH`, `PICKUP_COMPLETE`, `CANCELLED`, `RETURN_REQUESTED`, `RETURNED`, `SHIPPED`, `DELIVERED`, `COMPLETED`]",schema:{type:"string",enum:["APPROVED","PACKING_IN_PROGRESS","FORM_FAILED","PACKED","READY_TO_DISPATCH","PICKUP_COMPLETE","CANCELLED","RETURN_REQUESTED","RETURNED","SHIPPED","DELIVERED","COMPLETED"]},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"cancellationReason",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"cancellationSubReason",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"courierReturn",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"quantity",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"fsn",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"sku",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"listingId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"hsn",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"title",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"packageIds",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{type:"array",items:{type:"string"}},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"priceComponents"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!1,name:"sellingPrice",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"totalPrice",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"shippingCharge",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"customerPrice",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"flipkartDiscount",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number"},mdxType:"SchemaItem"})))),(0,s.kt)(l.Z,{collapsible:!1,name:"serviceProfile",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** [`Flipkart_Fulfilment`, `Seller_Fulfilment`, `Smart_Fulfilment`, `FBF`, `NON_FBF`, `FBF_LITE`]",schema:{type:"string",enum:["Flipkart_Fulfilment","Seller_Fulfilment","Smart_Fulfilment","FBF","NON_FBF","FBF_LITE"]},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"is_replacement",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,s.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"forms"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(l.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"link",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"automated",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,s.kt)(l.Z,{collapsible:!1,name:"shipmentType",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,s.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(p.Z,{responseExample:'{\n  "shipments": [\n    {\n      "shipmentId": "string",\n      "dispatchByDate": "2024-03-26T08:51:38.971Z",\n      "dispatchAfterDate": "2024-03-26T08:51:38.971Z",\n      "updatedAt": "2024-03-26T08:51:38.971Z",\n      "locationId": "string",\n      "hold": true,\n      "mps": true,\n      "packagingPolicy": "string",\n      "subShipments": [\n        {\n          "subShipmentId": "string",\n          "packages": [\n            {\n              "notional_value": {\n                "amount": 0.7386281948385884,\n                "unit": "PERCENTAGE"\n              },\n              "name": "name",\n              "weight": 4.145608029883936,\n              "description": "description",\n              "handling": {\n                "fragile": true\n              },\n              "id": "id",\n              "dimensions": {\n                "breadth": 3.616076749251911,\n                "length": 9.301444243932576,\n                "height": 2.027123023002322\n              }\n            }\n          ]\n        }\n      ],\n      "orderItems": [\n        {\n          "orderItemId": "string",\n          "orderId": "string",\n          "cancellationGroupId": "string",\n          "orderDate": "2024-03-26T08:51:38.971Z",\n          "cancellationDate": "2024-03-26T08:51:38.971Z",\n          "paymentType": "COD",\n          "status": "APPROVED",\n          "cancellationReason": "string",\n          "cancellationSubReason": "string",\n          "courierReturn": true,\n          "quantity": 0,\n          "fsn": "string",\n          "sku": "string",\n          "listingId": "string",\n          "hsn": "string",\n          "title": "string",\n          "packageIds": [\n            "string"\n          ],\n          "priceComponents": {\n            "sellingPrice": 0,\n            "totalPrice": 0,\n            "shippingCharge": 0,\n            "customerPrice": 0,\n            "flipkartDiscount": 0\n          },\n          "serviceProfile": "Flipkart_Fulfilment",\n          "is_replacement": true\n        }\n      ],\n      "forms": [\n        {\n          "name": "string",\n          "link": "string",\n          "automated": true\n        }\n      ],\n      "shipmentType": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}I.isMDXComponent=!0}}]);