(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[449],{87027:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/item-list",function(){return t(82178)}])},82178:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return H}});var i=t(47568),r=t(26042),s=t(69396),o=t(828),a=t(20414),c=t(85893),l=t(67294),d=t(36336),x=t(78340),u=t(80562),p=t(29630),h=t(21448),f=t(43918),m=t(79072),g=t(44373),j=t(70918),Z=t(89722),_=t(54225),v=t(72428),b=t(18377),E=t(81011),y=t(42761),w=t(78394),P=t(48056),N=t(82638),C=t(35953),S=t(12242),k=t(77283),T=t(87462),q=t(63366),L=t(98885),R=t(62097),A=t(53566),I=t(84771);const W=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],F={entering:{transform:"none"},entered:{transform:"none"}};var O=l.forwardRef((function(n,e){const t=(0,R.Z)(),i={enter:t.transitions.duration.enteringScreen,exit:t.transitions.duration.leavingScreen},{addEndListener:r,appear:s=!0,children:o,easing:a,in:d,onEnter:x,onEntered:u,onEntering:p,onExit:h,onExited:f,onExiting:m,style:g,timeout:j=i,TransitionComponent:Z=L.ZP}=n,_=(0,q.Z)(n,W),v=l.useRef(null),b=(0,I.Z)(v,o.ref,e),E=n=>e=>{if(n){const t=v.current;void 0===e?n(t):n(t,e)}},y=E(p),w=E(((n,e)=>{(0,A.n)(n);const i=(0,A.C)({style:g,timeout:j,easing:a},{mode:"enter"});n.style.webkitTransition=t.transitions.create("transform",i),n.style.transition=t.transitions.create("transform",i),x&&x(n,e)})),P=E(u),N=E(m),C=E((n=>{const e=(0,A.C)({style:g,timeout:j,easing:a},{mode:"exit"});n.style.webkitTransition=t.transitions.create("transform",e),n.style.transition=t.transitions.create("transform",e),h&&h(n)})),S=E(f);return(0,c.jsx)(Z,(0,T.Z)({appear:s,in:d,nodeRef:v,onEnter:w,onEntered:P,onEntering:y,onExit:C,onExited:S,onExiting:N,addEndListener:n=>{r&&r(v.current,n)},timeout:j},_,{children:(n,e)=>l.cloneElement(o,(0,T.Z)({style:(0,T.Z)({transform:"scale(0)",visibility:"exited"!==n||d?void 0:"hidden"},F[n],g,o.props.style),ref:b},e))}))})),D=t(99349),G=t.n(D),$=function(){var n=(0,l.useState)(""),e=n[0],t=n[1];return(0,c.jsx)(O,{in:!0,children:(0,c.jsxs)("div",{className:G().card,children:[(0,c.jsx)("div",{className:G().line}),(0,c.jsxs)("div",{className:G().scanArea,children:[(0,c.jsx)("div",{className:G().topL}),(0,c.jsx)("div",{className:G().topR}),(0,c.jsx)("div",{className:G().btmL}),(0,c.jsx)("div",{className:G().btmR})]}),(0,c.jsx)(k.T,{ViewFinder:function(){},constraints:{facingMode:"user"},onResult:function(n,i){n&&(t(null===n||void 0===n?void 0:n.text),console.log(e)),i&&console.info(i)}})]})})},z=t(11961),Q=t(21744);function V(n){return n>1?"units":"unit"}var M=[{field:"name",headerName:"Name"},{field:"quantity",headerName:"Quantity",valueGetter:function(n){return"".concat(n.row.quantity.toString()+" unit")}},{field:"price",headerName:"Price",valueGetter:function(n){return"".concat("$"+(e=n.row.price,parseFloat(e).toFixed(2).toString().split("").reverse().join("").replace(/(\d{3})/g,"$1,").replace(/\,$/,"").split("").reverse().join("")));var e}},{field:"tag",headerName:"Tag",renderCell:function(n){return(0,c.jsx)(h.Z,(0,r.Z)({variant:"filled",label:n.row.tags.join(" ")},{icon:(0,c.jsx)(z.Z,{})}))}}],X=function(n){return n.map((function(n){return(0,r.Z)({},n)}))},H=function(){var n=(0,l.useState)(!1),e=n[0],t=n[1],h=(0,l.useState)(!1),k=h[0],T=h[1],q=(0,l.useState)(!1),L=q[0],R=q[1],A=0,I=0,W=0,F=(0,o.Z)(l.useState({}),2),O=F[0],D=F[1],G=(0,l.useState)([]),z=G[0],H=G[1];return(0,l.useEffect)((function(){var n=function(){var n=(0,i.Z)((function(){var n;return(0,a.__generator)(this,(function(e){switch(e.label){case 0:return[4,(0,Q.h)("/items/list",{method:"GET"})];case 1:return n=e.sent().data,console.log(n),H(n),[2]}}))}));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(d.Z,{maxWidth:"lg",color:"background",children:(0,c.jsx)("div",{className:"App",children:(0,c.jsxs)("header",{className:"App-header",children:[(0,c.jsx)(f.Z,{styles:{body:{backgroundColor:"#eeecec"}}}),(0,c.jsxs)(m.ZP,{container:!0,spacing:6,paddingTop:"60px",justifyContent:"space-between",children:[(0,c.jsxs)(p.Z,{variant:"h3",color:"#6a6a6c",paddingLeft:"76px",children:[(0,c.jsx)(x.Z,{fontSize:"large",sx:{marginRight:"10px",paddingTop:1}}),"All Items"]}),(0,c.jsx)(_.Z,{variant:"contained",startIcon:(0,c.jsx)(v.Z,{}),sx:{backgroundColor:"#e70a3e"},onClick:function(){T(!0),D({})},children:"ADD NEW"})]}),(0,c.jsx)(g.Z,{sx:{color:"#d5cfcf",margin:3,border:1,width:1129}}),(0,c.jsxs)(m.ZP,{container:!0,spacing:6,paddingTop:"50px",paddingLeft:"76px",justifyContent:"space-between",children:[(0,c.jsxs)(j.Z,{component:"form",sx:{maxHeight:"45px",maxWidth:"262px",display:"flex",alignItems:"center",width:300},children:[(0,c.jsx)(Z.Z,{sx:{paddingLeft:"6px",color:"#c2c0c0",width:30},children:(0,c.jsx)(y.Z,{})}),(0,c.jsx)(E.ZP,{sx:{ml:1,flex:1},placeholder:"Search All Items",inputProps:{"aria-label":"search google maps"},onChange:function(n){}}),(0,c.jsx)(g.Z,{sx:{height:28,m:.5},orientation:"vertical"}),(0,c.jsx)(u.Z,{sx:{p:"10px",color:"#2d2a2a"},"aria-label":"QrCodeScannerIcon",onClick:function(){return R(!L)},children:L?(0,c.jsx)($,{}):(0,c.jsx)(w.Z,{})})]}),(0,c.jsx)(m.ZP,{children:(0,c.jsx)(C.Z,{setIsGrid:t,sx:{height:100}})})]}),X(z).map((function(n){return(0,c.jsx)(b.Z,{sx:{mt:3,mr:3},children:(0,c.jsxs)(p.Z,{sx:{display:"none"},children:[A+=1," ",I+=n.quantity," ",W+=n.price]})},n)})),(0,c.jsxs)(m.ZP,{container:!0,spacing:6,pb:"10px",children:[(0,c.jsxs)(m.ZP,{item:!0,color:"#6a6a6c",children:["Folders:"," ",(0,c.jsx)(m.ZP,{sx:{display:"inline"},color:"#393939",fontWeight:"bold",children:"0"})]}),(0,c.jsxs)(m.ZP,{item:!0,color:"#6a6a6c",children:["Items:"," ",(0,c.jsx)(m.ZP,{sx:{display:"inline"},color:"#393939",fontWeight:"bold",children:A})]}),(0,c.jsxs)(m.ZP,{item:!0,color:"#6a6a6c",children:["Total Quantity:"," ",(0,c.jsxs)(m.ZP,{sx:{display:"inline"},color:"#393939",fontWeight:"bold",children:[I," ",V(I)]})]}),(0,c.jsxs)(m.ZP,{item:!0,color:"#6a6a6c",children:["Total Value:"," ",(0,c.jsxs)(m.ZP,{sx:{display:"inline"},color:"#393939",fontWeight:"bold",children:["$",W.toFixed(2)]})]})]}),(0,c.jsxs)(b.Z,{children:[e?(0,c.jsx)(m.ZP,{container:!0,children:X(z).map((function(n){return(0,c.jsx)(b.Z,{sx:{mt:3,mr:3},id:n.id,children:(0,c.jsx)(N.Z,{data:n,details:O})},n.id)}))}):(0,c.jsx)(b.Z,{sx:{height:600,width:"100%",bgcolor:"#dadada"},children:(0,c.jsx)(P._,{rows:z.map((function(n){return(0,s.Z)((0,r.Z)({},n),{id:n._id})})),columns:M,pageSize:5,rowsPerPageOptions:[5],checkboxSelection:!0,disableSelectionOnClick:!0,onRowClick:function(n){T(!0),D(n.row)}})}),(0,c.jsx)(S.Z,{isDrawerOpen:k,setIsDrawerOpen:T,data:O})]})]})})})})}},99349:function(n){n.exports={card:"qrcode-scanner_card__k1pl9",scanArea:"qrcode-scanner_scanArea__oCzOh",line:"qrcode-scanner_line__t2SU4","scan-line":"qrcode-scanner_scan-line__rg26C",topL:"qrcode-scanner_topL__qnf1F",topR:"qrcode-scanner_topR__8Vtkp",btmL:"qrcode-scanner_btmL__pyApW",btmR:"qrcode-scanner_btmR__0MTeh"}}},function(n){n.O(0,[738,440,836,252,297,385,821,774,888,179],(function(){return e=87027,n(n.s=e);var e}));var e=n.O();_N_E=e}]);