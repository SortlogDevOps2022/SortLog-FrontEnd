(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[458],{85583:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/history/history-form",function(){return n(52793)}])},46723:function(e,t,n){"use strict";n.d(t,{s:function(){return i}});var r=n(67294),i=function(){var e=(0,r.useRef)(!1);return(0,r.useEffect)((function(){return e.current=!0,function(){e.current=!1}}),[]),(0,r.useCallback)((function(){return e.current}),[])}},60700:function(e,t,n){"use strict";n.r(t);var r=n(85893),i=n(45697),s=n.n(i),l=n(17961),a=n(92077),c=n.n(a),o=n(44729),d=o.mM.create({page:{backgroundColor:"#ffffff",padding:24},h4:{fontSize:14,fontWeight:600,lineHeight:1.235},h6:{fontSize:12,fontWeight:600,lineHeight:1.6},subtitle2:{fontSize:10,fontWeight:500,lineHeight:1.57},body2:{fontSize:10,lineHeight:1.43},gutterBottom:{marginBottom:4},header:{flexDirection:"row",justifyContent:"space-between"},brand:{height:32,width:32},company:{flexDirection:"row",justifyContent:"space-between",marginTop:32},references:{flexDirection:"row",justifyContent:"space-between",marginTop:32},billing:{marginTop:32},items:{marginTop:32},notes:{marginTop:32},table:{display:"flex",width:"auto"},tableHeader:{},tableBody:{},tableRow:{borderBottomWidth:1,borderColor:"#EEEEEE",borderStyle:"solid",flexDirection:"row"},tableCell1:{padding:6,width:"".concat(60,"%")},tableCellN:{padding:6,width:"".concat(20,"%")},alignRight:{textAlign:"right"}}),x=function(e){var t=e.history;return(0,r.jsx)(o.BB,{children:(0,r.jsxs)(o.T3,{size:"A4",style:d.page,children:[(0,r.jsxs)(o.G7,{style:d.header,children:[(0,r.jsxs)(o.G7,{children:[(0,r.jsx)(o.xv,{style:d.h6,children:"COMPANY"}),(0,r.jsx)(o.xv,{style:d.h4,children:t.user.companyName})]}),(0,r.jsx)(o.G7,{children:(0,r.jsx)(o.xv,{style:d.h4,children:t.status})})]}),(0,r.jsxs)(o.G7,{style:d.references,children:[(0,r.jsxs)(o.G7,{children:[(0,r.jsx)(o.xv,{style:[d.subtitle2,d.gutterBottom],children:"Date"}),(0,r.jsx)(o.xv,{style:d.body2,children:t.Date&&(0,l.Z)(t.Date,"dd MMM yyyy")})]}),(0,r.jsxs)(o.G7,{children:[(0,r.jsx)(o.xv,{style:[d.subtitle2,d.gutterBottom],children:"Tracking Number"}),(0,r.jsx)(o.xv,{style:d.body2,children:t.trackingNumber})]})]}),(0,r.jsxs)(o.G7,{style:d.billing,children:[(0,r.jsx)(o.xv,{style:[d.subtitle2,d.gutterBottom],children:"Inbound/Outbound Operator"}),(0,r.jsx)(o.xv,{style:d.body2}),(0,r.jsx)(o.xv,{style:d.body2,children:t.user.name})]}),(0,r.jsx)(o.G7,{style:d.items,children:(0,r.jsxs)(o.G7,{style:d.table,children:[(0,r.jsx)(o.G7,{style:d.tableHeader,children:(0,r.jsxs)(o.G7,{style:d.tableRow,children:[(0,r.jsx)(o.G7,{style:d.tableCell1,children:(0,r.jsx)(o.xv,{style:d.h6,children:"SKU"})}),(0,r.jsx)(o.G7,{style:d.tableCell1,children:(0,r.jsx)(o.xv,{style:d.h6,children:"ITEM NAME"})}),(0,r.jsx)(o.G7,{style:d.tableCell1,children:(0,r.jsx)(o.xv,{style:d.h6,children:"UNIT PRICE"})}),(0,r.jsx)(o.G7,{style:d.tableCell1,children:(0,r.jsx)(o.xv,{style:d.h6,children:"QTY"})}),(0,r.jsx)(o.G7,{style:d.tableCell1,children:(0,r.jsx)(o.xv,{style:[d.h6,d.alignRight],children:"TOTAL PRICE"})})]})}),(0,r.jsxs)(o.G7,{style:d.tableBody,children:[(t.items||[]).map((function(e){return(0,r.jsxs)(o.G7,{style:d.tableRow,children:[(0,r.jsx)(o.G7,{style:d.tableCell1,children:(0,r.jsx)(o.xv,{style:d.body2,children:e.SKU})}),(0,r.jsx)(o.G7,{style:d.tableCell1,children:(0,r.jsx)(o.xv,{style:d.body2,children:e.name})}),(0,r.jsx)(o.G7,{style:d.tableCell1,children:(0,r.jsx)(o.xv,{style:d.body2,children:c()(e.price).format("".concat(e.price,"0,0.00"))})}),(0,r.jsx)(o.G7,{style:d.tableCell1,children:(0,r.jsx)(o.xv,{style:d.body2,children:e.QTY})}),(0,r.jsx)(o.G7,{style:d.tableCell1,children:(0,r.jsx)(o.xv,{style:[d.body2,d.alignRight],children:c()(e.price*e.QTY).format("$0,0.00")})})]},e.SKU)})),(0,r.jsxs)(o.G7,{style:[d.tableRow,{borderTop:"1"}],children:[(0,r.jsx)(o.G7,{style:d.tableCell1}),(0,r.jsx)(o.G7,{style:d.tableCellN,children:(0,r.jsx)(o.xv,{style:[d.body2,d.alignRight],children:"Total QTY"})}),(0,r.jsx)(o.G7,{style:d.tableCellN,children:(0,r.jsxs)(o.xv,{style:[d.body2,d.alignRight],children:["x ",t.items.reduce((function(e,t){return e+t.QTY}),0)]})})]}),(0,r.jsxs)(o.G7,{style:d.tableRow,children:[(0,r.jsx)(o.G7,{style:d.tableCell1}),(0,r.jsx)(o.G7,{style:d.tableCellN,children:(0,r.jsx)(o.xv,{style:[d.body2,d.alignRight],children:"Total Price"})}),(0,r.jsx)(o.G7,{style:d.tableCellN,children:(0,r.jsx)(o.xv,{style:[d.body2,d.alignRight],children:c()(t.items.reduce((function(e,t){return e+t.price*t.QTY}),0)).format("$ 0,0.00")})})]})]})]})}),(0,r.jsxs)(o.G7,{style:d.notes,children:[(0,r.jsx)(o.xv,{style:[d.h6,d.gutterBottom],children:"Notes"}),(0,r.jsx)(o.xv,{style:d.body2,children:"Please make sure you double check the quantity and unit price of each item and inbound/outbound method."})]})]})})};x.propTypes={history:s().object.isRequired},t.default=x},52793:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return w}});var r=n(47568),i=n(20414),s=n(85893),l=n(67294),a=n(46723),c=n(30120),o=n(36336),d=n(68346),x=n(29630),h=n(79072),u=n(44731),m=n(54225),j=n(44373),y=n(2961),b=n(21023),p=n(41664),f=n.n(p),g=n(9008),Z=n.n(g),T=n(51438),v=n(81289),C=new Date,Y=new(function(){function e(){(0,T.Z)(this,e)}var t=e.prototype;return t.getHistories=function(){var e=[{id:"5ecb868d0f437390ef3ac61c",trackingNumber:"Inbound-001",status:"Done",Date:(0,v.Z)(C,1).getTime(),totalQTY:110,items:[{SKU:"a00001",name:"Apple",price:5,QTY:100},{SKU:"a00099",name:"Computer",price:5e3,QTY:10}],user:{companyName:"Example Pty Ltd",email:"11111@sortlog.com",name:"TOM JACKY"}},{id:"5ecb868d0f437390ef3ac62c",trackingNumber:"Inbound-001",status:"Done",Date:(0,v.Z)(C,1).getTime(),totalQTY:110,items:[{SKU:"a00001",name:"Apple",price:5,QTY:100},{SKU:"a00099",name:"Computer",price:5e3,QTY:10}],user:{companyName:"Example Pty Ltd",email:"11111@sortlog.com",name:"TOM JACKY"}},,{id:"5ecb868d0f437390ef3ac63c",trackingNumber:"Inbound-001",status:"Done",Date:(0,v.Z)(C,1).getTime(),totalQTY:110,items:[{SKU:"a00001",name:"Apple",price:5,QTY:100},{SKU:"a00099",name:"Computer",price:5e3,QTY:10}],user:{companyName:"Example Pty Ltd",email:"11111@sortlog.com",name:"TOM JACKY"}},{id:"5ecb868d0f437390ef3ac64c",trackingNumber:"Inbound-001",status:"Done",Date:(0,v.Z)(C,1).getTime(),totalQTY:110,items:[{SKU:"a00001",name:"Apple",price:5,QTY:100},{SKU:"a00099",name:"Computer",price:5e3,QTY:10}],user:{companyName:"Example Pty Ltd",email:"11111@sortlog.com",name:"TOM JACKY"}},{id:"5ecb868d0f437390ef3ac65c",trackingNumber:"Inbound-001",status:"Done",Date:(0,v.Z)(C,1).getTime(),totalQTY:110,items:[{SKU:"a00001",name:"Apple",price:5,QTY:100},{SKU:"a00099",name:"Computer",price:5e3,QTY:10}],user:{companyName:"Example Pty Ltd",email:"11111@sortlog.com",name:"TOM JACKY"}},{id:"5ecb868d0f437390ef3ac66c",trackingNumber:"Inbound-001",status:"Done",Date:(0,v.Z)(C,1).getTime(),totalQTY:110,items:[{SKU:"a00001",name:"Apple",price:5,QTY:100},{SKU:"a00099",name:"Computer",price:5e3,QTY:10}],user:{companyName:"Example Pty Ltd",email:"11111@sortlog.com",name:"TOM JACKY"}},{id:"5ecb868d0f437390ef3ac67c",trackingNumber:"Inbound-001",status:"Done",Date:(0,v.Z)(C,1).getTime(),totalQTY:110,items:[{SKU:"a00001",name:"Apple",price:5,QTY:100},{SKU:"a00099",name:"Computer",price:5e3,QTY:10}],user:{companyName:"Example Pty Ltd",email:"11111@sortlog.com",name:"TOM JACKY"}},{id:"5ecb868d0f437390ef3ac68c",trackingNumber:"Inbound-001",status:"Done",Date:(0,v.Z)(C,1).getTime(),totalQTY:110,items:[{SKU:"a00001",name:"Apple",price:5,QTY:100},{SKU:"a00099",name:"Computer",price:5e3,QTY:10}],user:{companyName:"Example Pty Ltd",email:"11111@sortlog.com",name:"TOM JACKY"}}];return Promise.resolve(e)},t.getHistory=function(){var e={id:"5ecb868d0f437390ef3ac62c",trackingNumber:"Inbound-001",status:"Done",Date:(0,v.Z)(C,1).getTime(),totalQTY:110,items:[{SKU:"a00001",name:"Apple",price:5,QTY:100},{SKU:"a00088",name:"Bread",price:6,QTY:100},{SKU:"a00077",name:"Ball",price:7,QTY:100},{SKU:"a00099",name:"Computer",price:5e3,QTY:1},{SKU:"a00299",name:"Car",price:5e4,QTY:10},{SKU:"a00199",name:"Pen",price:1,QTY:10}],user:{companyName:"Example Pty Ltd",email:"11111@sortlog.com",name:"TOM JACKY"}};return Promise.resolve(e)},e}()),Q=n(25412),N=n(44729),S=n(60700),K=n(90492);function w(){var e=(0,a.s)(),t=(0,l.useState)(),n=t[0],p=t[1],g=(0,l.useState)(!1),T=g[0],v=g[1],C=(0,l.useCallback)((0,r.Z)((function(){var t,n;return(0,i.__generator)(this,(function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,Y.getHistory()];case 1:return t=r.sent(),e()&&p(t),[3,3];case 2:return n=r.sent(),console.error(n),[3,3];case 3:return[2]}}))})),[e]);return(0,l.useEffect)((function(){C()}),[]),n?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(Z(),{children:(0,s.jsx)("title",{children:"Dashboard: History Form Page"})}),(0,s.jsx)(c.Z,{component:"main",sx:{flexGrow:1,mx:1,width:"95%",backgroundColor:"background.default",overflow:"hidden"},children:(0,s.jsxs)(o.Z,{maxWidth:"md",children:[(0,s.jsxs)(c.Z,{sx:{mb:3},children:[(0,s.jsx)(c.Z,{sx:{mb:4},children:(0,s.jsx)(f(),{href:"/dashboard/history",passHref:!0,children:(0,s.jsx)(d.Z,{color:"textPrimary",variant:"subtitle2",children:(0,s.jsxs)(c.Z,{sx:{alignItems:"center",display:"flex"},children:[(0,s.jsx)(b.Z,{fontSize:"small",sx:{mr:1}}),(0,s.jsx)(x.Z,{variant:"subtitle2",children:"Histories"})]})})})}),(0,s.jsxs)(h.ZP,{container:!0,justifyContent:"space-between",spacing:3,children:[(0,s.jsxs)(h.ZP,{item:!0,sx:{alignItems:"center",display:"flex"},children:[(0,s.jsx)(u.Z,{sx:{height:42,mr:2,width:42},children:(0,Q.Q)(n.user.name)}),(0,s.jsxs)("div",{children:[(0,s.jsx)(x.Z,{variant:"h4",children:n.trackingNumber}),(0,s.jsx)(c.Z,{sx:{display:"flex",alignItems:"center"},children:(0,s.jsx)(x.Z,{color:"textSecondary",variant:"body2",children:n.user.name})})]})]}),(0,s.jsxs)(h.ZP,{item:!0,sx:{m:0},children:[(0,s.jsx)(m.Z,{onClick:function(){return v(!0)},sx:{m:1},variant:"outlined",children:"Preview"}),(0,s.jsx)(N.WD,{document:(0,s.jsx)(S.default,{history:n}),fileName:"history",style:{textDecoration:"none"},children:(0,s.jsx)(m.Z,{color:"primary",sx:{m:1},variant:"contained",children:"Download"})})]})]}),(0,s.jsx)(j.Z,{sx:{mt:3}})]}),(0,s.jsx)(K.default,{history:n})]})}),(0,s.jsx)(y.Z,{fullScreen:!0,open:T,children:(0,s.jsxs)(c.Z,{sx:{display:"flex",flexDirection:"column",height:"100%"},children:[(0,s.jsx)(c.Z,{sx:{backgroundColor:"background.default",p:2},children:(0,s.jsx)(m.Z,{startIcon:(0,s.jsx)(b.Z,{fontSize:"small"}),onClick:function(){return v(!1)},variant:"contained",children:"Back"})}),(0,s.jsx)(c.Z,{sx:{flexGrow:1},children:(0,s.jsx)(N.Z$,{height:"100%",style:{border:"none"},width:"100%",children:(0,s.jsx)(S.default,{history:n})})})]})})]}):null}},90492:function(e,t,n){"use strict";n.r(t);var r=n(26042),i=n(69396),s=n(99534),l=n(85893),a=n(17961),c=n(92077),o=n.n(c),d=n(70918),x=n(30120),h=n(79072),u=n(29630),m=n(90244),j=n(93978),y=n(69417),b=n(5605),p=n(39807);t.default=function(e){var t=e.history,n=(0,s.Z)(e,["history"]);return(0,l.jsx)(d.Z,(0,i.Z)((0,r.Z)({},n),{children:(0,l.jsxs)(x.Z,{sx:{minWidth:800,p:6},children:[(0,l.jsxs)(h.ZP,{container:!0,justifyContent:"space-between",children:[(0,l.jsxs)(h.ZP,{item:!0,children:[(0,l.jsx)(u.Z,{variant:"h5",children:"Company"}),(0,l.jsx)(u.Z,{variant:"subtitle2",children:t.user.companyName})]}),(0,l.jsxs)(h.ZP,{item:!0,children:[(0,l.jsx)(u.Z,{align:"right",variant:"h4",children:t.status.toUpperCase()}),(0,l.jsxs)(u.Z,{align:"right",variant:"subtitle2",children:["Form ID: #",t.id]})]})]}),(0,l.jsx)(x.Z,{sx:{my:4},children:(0,l.jsxs)(h.ZP,{container:!0,justifyContent:"space-between",children:[(0,l.jsxs)(h.ZP,{item:!0,children:[(0,l.jsx)(u.Z,{gutterBottom:!0,variant:"subtitle2",children:"Date"}),(0,l.jsx)(u.Z,{variant:"body2",children:t.Date&&(0,a.Z)(t.Date,"dd MMM yyyy")})]}),(0,l.jsxs)(h.ZP,{item:!0,children:[(0,l.jsx)(u.Z,{gutterBottom:!0,variant:"subtitle2",children:"Tracking Number"}),(0,l.jsx)(u.Z,{variant:"body2",children:t.trackingNumber})]})]})}),(0,l.jsxs)(m.Z,{children:[(0,l.jsx)(j.Z,{children:(0,l.jsxs)(y.Z,{children:[(0,l.jsx)(b.Z,{children:"SKU"}),(0,l.jsx)(b.Z,{children:"Item Name"}),(0,l.jsx)(b.Z,{children:"Unit Price"}),(0,l.jsx)(b.Z,{children:"QTY"}),(0,l.jsx)(b.Z,{}),(0,l.jsx)(b.Z,{align:"right",children:"Total Price"})]})}),(0,l.jsxs)(p.Z,{children:[(t.items||[]).map((function(e){return(0,l.jsxs)(y.Z,{children:[(0,l.jsx)(b.Z,{children:e.SKU}),(0,l.jsx)(b.Z,{children:e.name}),(0,l.jsx)(b.Z,{children:o()(e.price).format("".concat(e.price,"0,0.00"))}),(0,l.jsx)(b.Z,{children:e.QTY}),(0,l.jsx)(b.Z,{}),(0,l.jsx)(b.Z,{align:"right",children:o()(e.price*e.QTY).format("$0,0.00")})]},e.SKU)})),(0,l.jsx)(y.Z,{sx:{borderTop:1}}),(0,l.jsxs)(y.Z,{sx:{borderTop:1},children:[(0,l.jsx)(b.Z,{}),(0,l.jsx)(b.Z,{}),(0,l.jsx)(b.Z,{}),(0,l.jsx)(b.Z,{}),(0,l.jsx)(b.Z,{align:"right",children:(0,l.jsx)(u.Z,{gutterBottom:!0,variant:"subtitle1",children:"Total QTY"})}),(0,l.jsx)(b.Z,{align:"right",children:(0,l.jsxs)(u.Z,{gutterBottom:!0,variant:"subtitle1",children:["x ",t.items.reduce((function(e,t){return e+t.QTY}),0)]})})]}),(0,l.jsxs)(y.Z,{children:[(0,l.jsx)(b.Z,{}),(0,l.jsx)(b.Z,{}),(0,l.jsx)(b.Z,{}),(0,l.jsx)(b.Z,{}),(0,l.jsx)(b.Z,{align:"right",children:(0,l.jsx)(u.Z,{gutterBottom:!0,variant:"subtitle1",children:"Total Price"})}),(0,l.jsx)(b.Z,{align:"right",children:(0,l.jsx)(u.Z,{gutterBottom:!0,variant:"subtitle1",children:o()(t.items.reduce((function(e,t){return e+t.price*t.QTY}),0)).format("$ 0,0.00")})})]})]})]}),(0,l.jsxs)(x.Z,{sx:{mt:2},children:[(0,l.jsx)(u.Z,{gutterBottom:!0,variant:"h6",children:"Notes"}),(0,l.jsx)(u.Z,{color:"textSecondary",variant:"body2",children:"Please make sure you double check the quantity and unit price of each item and inbound/outbound method."})]})]})}))}},25412:function(e,t,n){"use strict";n.d(t,{Q:function(){return r}});var r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.replace(/\s+/," ").split(" ").slice(0,2).map((function(e){return e&&e[0].toUpperCase()})).join("")}}},function(e){e.O(0,[186,474,987,111,440,961,77,492,482,161,774,888,179],(function(){return t=85583,e(e.s=t);var t}));var t=e.O();_N_E=t}]);