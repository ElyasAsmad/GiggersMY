(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8170],{7026:function(e,t,r){"use strict";r.r(t);var n=r(85893),i=r(87757),s=r.n(i),o=r(92137),a=r(96156),c=r(81253),l=r(65988),d=r(67294),h=r(41120),u=r(22318),f=r(14670),p=r(17812),x=r(282),g=r(18463),m=r(13457),b=r(79895),j=r(17213),y=r(88866),v=r(79065),w=r(6222),k=(r(15503),r(24140),r(14642),r(48150)),I=r(11163),O=r(30381),N=r.n(O),P=r(81146),Z=r(80248),C=r(49226);function _(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function T(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?_(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var D=(0,h.Z)((function(e){return{profileImage:{margin:e.spacing(2)},gigItem:{height:"fit-content",borderRadius:"10px",marginTop:"10px",padding:"15px",display:"flex",alignItems:"center",backgroundColor:"transparent"}}}));function S(e){var t=e.children,r=(0,c.Z)(e,["children"]);return(0,n.jsx)(u.Z,{variant:"h1",style:T({fontFamily:"Inter, sans-serif",margin:0,color:"#fff"},r),children:t})}var E=(0,f.Z)((function(e){return{root:{transition:"all 0.3s ease","&:hover":{backgroundColor:"#aaa"}}}}))(p.Z),R=function(e){var t=e.variant,r=e.children,i=e.onClick;(0,c.Z)(e,["variant","children","onClick"]);return(0,n.jsx)(x.Z,{variant:t,color:"primary",disableElevation:!0,style:{color:"text"!==t?"white":"",padding:"1em 2em 1em 2em",fontFamily:"Inter, sans-serif",borderRadius:"30px"},onClick:i,children:r})};t.default=function(){var e=(0,d.useState)(!0),t=e[0],r=e[1],i=(0,d.useState)(!1),a=i[0],c=i[1],h=(0,d.useState)([]),u=h[0],f=h[1],p=(0,w.a)().user,x=(0,I.useRouter)(),O=D(),_=(0,C.v9)((function(e){return e.userState}));(0,d.useEffect)((function(){"gig"===_.userType?x.push("/gig/dashboard"):"client"===_.userType&&x.push("/client/dashboard")}),[_]),(0,d.useEffect)((function(){p&&(r(!1),T())}),[p]);var T=function(){var e=(0,o.Z)(s().mark((function e(){var t,r,n,i;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c(!0),e.next=4,new Promise((function(e){return setTimeout(e,1e3)}));case 4:return e.next=6,Z.O.from("client-job-posts").select().eq("uuid",p.id);case 6:if(t=e.sent,r=t.data,n=t.error,i=t.status,!n||406===i){e.next=12;break}throw n;case 12:r&&f(r),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),alert(e.t0.message);case 18:return e.prev=18,c(!1),e.finish(18);case 21:case"end":return e.stop()}}),e,null,[[0,15,18,21]])})));return function(){return e.apply(this,arguments)}}(),M=u.length>0?u.map((function(e,t){return(0,n.jsxs)(g.Z,{className:O.gigItem,children:[(0,n.jsxs)("div",{style:{flexGrow:1},children:[(0,n.jsx)(v.q,{fontWeight:600,fontSize:"1.25rem",marginBottom:5,color:"#000",children:e.postHeadline}),(0,n.jsx)(v.q,{fontSize:"0.9rem",color:"#777",marginBottom:5,children:"HourlyRate"===e.budgetType?"From RM".concat(e.hourlyFrom," - RM").concat(e.hourlyTo," per hour"):"RM".concat(e.projectBudget," per project")}),(0,n.jsxs)(v.q,{fontSize:"0.9rem",color:"#777",children:["Posted on ",N()(e.time_stamp).format("DD MMMM YYYY hh:mm a")]})]}),(0,n.jsx)("div",{children:(0,n.jsx)(E,{children:(0,n.jsx)(P.Z,{})})})]},t)})):(0,n.jsx)("div",{children:(0,n.jsx)(g.Z,{className:O.gigItem,variant:"outlined",children:(0,n.jsx)("div",{style:{flexGrow:1},children:(0,n.jsx)(v.q,{width:"100%",fontSize:"1rem",color:"#000",marginBottom:20,marginTop:20,textAlign:"center",children:"No Job Post Yet"})})})});return t?(0,n.jsx)("div",{children:"Loading"}):(0,n.jsxs)(m.Z,{theme:j.Z,children:[(0,n.jsx)("div",{style:{display:"flex",alignItems:"center",height:"100%",width:"100%",backgroundColor:"#fbfbfd",position:"fixed",flexDirection:"column"},className:"jsx-1403605861",children:(0,n.jsxs)("div",{style:{display:"flex",flexDirection:"column",width:"100%",height:"fit-content",alignItems:"center",overflowY:"auto"},className:"jsx-1403605861",children:[(0,n.jsx)(y.Z,{}),(0,n.jsxs)("div",{style:{display:"flex",width:"calc(100% - 200px)",height:"fit-content",padding:"10px",alignItems:"center"},className:"jsx-1403605861",children:[(0,n.jsx)(k.Ee,{src:p.profilePic?p.profilePic:"/useravatar.png",style:{width:"90px",height:"90px",borderRadius:"50%",margin:16,marginRight:30},onDragStart:function(e){e.preventDefault()},alt:""}),(0,n.jsxs)("div",{style:{flexGrow:1,height:"fit-content"},className:"jsx-1403605861",children:[(0,n.jsx)(S,{fontSize:"2.5rem",fontWeight:300,color:"#000",marginBottom:"10px",children:p.name}),(0,n.jsx)(v.q,{color:"#aaa",children:"Client Dashboard"})]}),(0,n.jsx)("div",{style:{height:"fit-content"},className:"jsx-1403605861",children:(0,n.jsx)(R,{variant:"contained",onClick:function(){x.push("/client/create-job-post")},children:"Post a Job"})})]}),(0,n.jsxs)(b.Z,{style:{borderRadius:"20px",height:"fit-content",padding:"15px",width:"calc(100% - 200px)",display:"flex",flexDirection:"column",marginBottom:20,backgroundColor:"transparent"},children:[(0,n.jsx)("div",{style:{margin:20,display:"flex",alignItems:"center"},className:"jsx-1403605861",children:(0,n.jsx)("div",{style:{flexGrow:1},className:"jsx-1403605861",children:(0,n.jsx)(S,{fontSize:"1.75rem",fontFamily:"Inter, sans-serif",fontWeight:600,color:"#121212",children:"My Postings"})})}),a?(0,n.jsx)("div",{style:{width:"100%",height:100,display:"flex",alignItems:"center",justifyContent:"center",marginTop:10,backgroundColor:"#d0d0d0",borderRadius:20},className:"jsx-1403605861",children:(0,n.jsx)(k.Ee,{alt:"Loading",width:50,height:50,src:"/giggersmy-assets/loading-new.svg",style:{filter:"invert(1)"}})}):M]})]})}),(0,n.jsx)(l.default,{id:"1403605861",children:["html{width:100%;height:100%;}","body{width:100%;height:100%;margin:0;padding:0;}","#__next{height:100%;width:100%;}","::-webkit-scrollbar{width:7px;height:7px;}","::-webkit-scrollbar-track{box-shadow:inset 0 0 5px grey;border-radius:10px;}","::-webkit-scrollbar-thumb{background:#aaa;border-radius:10px;}","::-webkit-scrollbar-thumb:hover{background:#777;}"]})]})}},80248:function(e,t,r){"use strict";r.d(t,{O:function(){return n}});var n=(0,r(15550).eI)("https://qhjimwxbhftmcxmkutrf.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyOTI4MTQzNywiZXhwIjoxOTQ0ODU3NDM3fQ.0GbmbjU55zxs50F8cOgPFbfXhWZB8c_wSk9cwf0rT5k")},45487:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/client/dashboard",function(){return r(7026)}])}},function(e){e.O(0,[4885,7755,4223,3218,511,177,5550,2234,8866,9774,2888,179],(function(){return t=45487,e(e.s=t);var t}));var t=e.O();_N_E=t}]);