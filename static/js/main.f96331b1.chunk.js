(this["webpackJsonpreact-grand-tour-playground"]=this["webpackJsonpreact-grand-tour-playground"]||[]).push([[0],{85:function(t,e,n){"use strict";n.r(e);var o=n(0),c=n.n(o),r=n(26),i=n.n(r),a=n(35),s=n(10),l=n(117),d=n(114),h=n(62),u=n(115),j=n(116),b=n(7),p=n(14),x=function t(e,n){return Object.entries(e).reduce((function(e,o){var c=Object(p.a)(o,2),r=c[0],i=c[1];return"object"===typeof i?"".concat(e,"}").concat(n).concat(r,"{").concat(t(i,"".concat(n).concat(r))):"".concat(e).concat(r,":").concat(i,";")}),"")},g=function(t){return Object.entries(t).reduce((function(t,e){var n=Object(p.a)(e,2),o=n[0],c=n[1],r=x(c,o);return"".concat(t).concat(o,"{").concat(r).concat("}"!=r[r.length-1]?"}":"")}),"")},m=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:.5,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"#f2c14e";return g({".__react-grand-tour__":{"z-index":999994,position:"fixed",left:0,top:0,overlay:{position:"fixed",top:0,right:0,left:0,bottom:0,"z-index":999995},highlight:{left:0,right:0,position:"fixed","border-radius":"8px",transition:"transform ".concat(t,"s ease, height ").concat(t,"s ease, width ").concat(t,"s ease"),"z-index":999997},"highlight-anchor":{"z-index":999996,transition:"all 0s"},"highlight-track":{transition:"all 0ms"},dot:{cursor:"pointer",display:"contents","background-color":"inherit",border:"none"," div":{width:"10px",height:"10px","background-color":"inherit",border:"1px solid #757575","border-radius":"50%","margin-right":"7px",overflow:"hidden"},":hover div":{"background-color":"#757575"},"-selected":{" div":{cursor:"default","background-color":e,border:"1px solid ".concat(e)},":hover div":{"background-color":e}}},"chevron-button":{"background-color":"inherit",border:"none",color:"#757575",cursor:"pointer",":disabled":{color:"#e0e0e0",cursor:"default"},":enabled:hover":{color:"#212121"}},"page-selector":{display:"flex","justify-content":"space-between"},"dot-wrapper":{display:"flex","max-width":"200px","flex-wrap":"wrap","align-items":"center"},"close-button":{"background-color":"transparent",border:"none",color:"#757575",cursor:"pointer",position:"absolute",top:"12px",right:"15px",":hover":{color:"#212121"}},"page-number":{"background-color":e,color:"white","box-shadow":"rgb(0 0 0 / 30%) 0px 0.5em 3em",width:"40px",height:"40px","border-radius":"50%",display:"flex","align-items":"center","justify-content":"center",position:"absolute",left:"-10px",top:"-10px"},modal:{"background-color":"#fff","border-radius":"8px","box-shadow":"rgb(0 0 0 / 30%) 0px 0.5em 3em","-position":{transition:"transform ".concat(t,"s ease, height ").concat(t,"s ease, width ").concat(t,"s ease"),left:0,top:0,position:"fixed","max-width":"330px","min-height":"48px","z-index":999999},"-position-track":{transition:"all 100ms"},"-content":{overflow:"hidden",height:"100%"}},icon:{fill:"currentColor",width:"1em",height:"1em",display:"inline-block","font-size":"1.5rem",transition:"fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms","flex-shrink":0,"user-select":"none"},arrow:{position:"absolute",right:"-10px",top:"-10px",width:"40px",height:"40px","border-radius":"50%","background-color":e,display:"flex","justify-content":"center","align-items":"center",color:"white",cursor:"pointer"},"fade-in":{transition:"opacity ".concat(t,"s ease"),opacity:0,"z-index":999997,"-init":{opacity:1}}}})},O=n(66),f=n(1),v=function(t){var e=t.children,n=Object(o.useState)(!0),c=Object(p.a)(n,2),r=c[0],i=c[1];return Object(o.useEffect)((function(){setTimeout((function(){i(!1)}),0)}),[]),Object(f.jsx)("div",{className:"__react-grand-tour__fade-in ".concat(r?"":"__react-grand-tour__fade-in-init"),children:e})},w=function(t){var e=t.track,n=t.anchorHighlight;return Object(f.jsx)(v,{children:Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("div",{className:"__react-grand-tour__highlight ".concat(e&&"__react-grand-tour__highlight-track")}),n&&Object(f.jsx)("div",{className:"__react-grand-tour__highlight __react-grand-tour__highlight-anchor"})]})})},_=c.a.memo(w),y=function(t){var e=t.close,n=t.children;return Object(f.jsx)("button",{type:"button",onClick:function(t){t.stopPropagation(),e()},className:"__react-grand-tour__close-button",children:n})},k=function(t){var e=t.top,n=t.left,o=t.height,c=t.width;return e<-o?"up":e>window.innerHeight-10?"down":n>window.innerWidth-10?"right":n<-c?"left":null},S=function(t,e,n){return e>n?n<0?Object(b.a)(Object(b.a)({},t),{},{top:e+n-t.height/2}):Object(b.a)(Object(b.a)({},t),{},{top:e,bottom:t.bottom+10}):Object(b.a)(Object(b.a)({},t),{},{top:e})},B=function(t,e,n,o,c,r,i){return e>n?o+r<t.width+10?Object(b.a)(Object(b.a)({},t),{},{left:10}):Object(b.a)(Object(b.a)({},t),{},{right:i-c-10}):i-o<t.width+10?Object(b.a)(Object(b.a)({},t),{},{right:10}):Object(b.a)(Object(b.a)({},t),{},{left:o-10})},C=function(t,e){var n=t.top,o=t.left,c=t.right,r=t.width,i=t.height,a=t.bottom,s={},l=document.documentElement,d=l.clientWidth,h=o-10,u=d-(r+o+10),j=n-10,b=l.clientHeight-a;return s.width=d<350?d-20:330,s.height=e,h>u&&h>=s.width+20?(s.right=d-o+20,s=S(s,j,b)):u>=s.width+20?(s.left=o+r+20,s=S(s,j,b)):j>b&&j>e?(s.bottom=n-20,s=B(s,h,u,o,c,r,d)):b>e?(s.top=n+i+20,s=B(s,h,u,o,c,r,d)):(s.top=n+i/3,s.left=o+10+r/2-s.width/2),s.top<10&&(s.top=10),s.bottom>window.innerHeight&&(s.bottom=window.innerHeight-30),s.left<10&&(s.left=10),s.right>window.innerWidth&&(s.right=window.innerWidth-30),s},I=/^((?!chrome|android).)*safari/i.test(navigator.userAgent),z=function(t){var e=t.arrowDirection,n=t.stepIndex,c=t.changeStep,r=t.allSteps,i=t.close,a=t.renderedContent,s=t.scrollToElement,l=t.arrow,d=t.closeButton,h=t.currentStepLabel,u=t.dialogWrapper,j=t.nextStepButton,b=t.previousStepButton,p=t.stepButtonWrapper,x=t.stepButton,g=t.track,m=Object(o.useMemo)((function(){return Object(f.jsx)(l,{direction:e})}),[l,e]),O=Object(o.useMemo)((function(){return Object(f.jsx)(h,{currentStep:n,totalSteps:r.length})}),[h,n,r.length]),w=Object(o.useMemo)((function(){return Object(f.jsx)(j,{currentStep:n,goNext:function(){return c(n+1)},skipTo:c,totalSteps:r.length})}),[n,c,r.length,j]),_=Object(o.useMemo)((function(){return Object(f.jsx)(b,{currentStep:n,goBack:function(){return c(n-1)},skipTo:c,totalSteps:r.length})}),[n,c,r.length,b]),k=Object(o.useMemo)((function(){return Object(f.jsx)(p,{stepButtons:r.map((function(t,e){return Object(f.jsx)(x,{currentStep:n,active:n===t,step:e,goToStep:function(){return c(e)}},t)})),currentStep:n,totalSteps:r.length,goNext:function(){return c(n+1)},goBack:function(){return c(n-1)},skipTo:c})}),[r,n,c,x,p]),S=Object(o.useMemo)((function(){return Object(f.jsx)(y,{close:i,children:Object(f.jsx)(d,{close:i})})}),[i,d]);return Object(f.jsx)(v,{children:Object(f.jsx)("div",{className:"__react-grand-tour__modal-position ".concat(g&&!I?"__react-grand-tour__modal-position-track":""),children:Object(f.jsx)("div",{className:"__react-grand-tour__modal-container",onClick:m?s:void 0,children:Object(f.jsx)(u,{allSteps:r,arrow:m,changeStep:c,closeButton:S,content:a,currentStepLabel:O,nextStepButton:w,previousStepButton:_,stepButtonWrapper:k,stepIndex:n,stepButtonComponent:x})})})})},T=c.a.memo(z),W=n(65),N=function(t){var e,n=t.boundaries,o=t.anchorBoundaries,c=t.differentAnchor,r=document.querySelector(".__react-grand-tour__modal-container"),i=C(o,null!==(e=null===r||void 0===r?void 0:r.clientHeight)&&void 0!==e?e:0),a=Object(W.a)(i,I?450:50);return Object(f.jsx)("style",{children:g({".__react-grand-tour__":{modal:{"-position":{transform:"translate(".concat(a.right?"calc(".concat(document.body.clientWidth-a.right,"px - 100%)"):"".concat(a.left,"px"),", ").concat(a.bottom?"calc(".concat(a.bottom,"px - 100%)"):"".concat(a.top,"px"),")"),width:"".concat(a.width,"px"),height:"".concat(a.height,"px")},"-content":{padding:"24px ".concat(a.width/12,"px")}},highlight:{transform:"translate(".concat(n.left-10,"px, ").concat(n.top-10,"px)"),height:"".concat(n.height+20,"px"),width:"".concat(n.width+20,"px"),"box-shadow":"0 0 0 calc(200vh + 200vw) rgba(0, 0, 0, ".concat(c?".58":".7",")")},"highlight-anchor":{transform:"translate(".concat(o.left,"px, ").concat(o.top,"px)"),height:"".concat(o.height,"px"),width:"".concat(o.width,"px"),"box-shadow":"0 0 0 calc(200vh + 200vw) rgba(0, 0, 0, .3)"}}})})},E=c.a.memo(N),A=["selector","anchorSelector","content","component","contentWrapper","stepIndex"],L=c.a.memo((function(t){var e=t.element,n=t.anchorElement,c=t.stepIndex,r=t.changeStep,i=t.allSteps,a=t.close,s=t.renderedContent,l=t.scrollIntoViewOptions,d=t.closeButton,h=t.currentStepLabel,u=t.nextStepButton,j=t.previousStepButton,b=t.stepButton,x=t.stepButtonWrapper,g=t.arrow,m=t.dialogWrapper,O=t.track,v=void 0!==O&&O,w=t.trackFrequency,y=void 0===w?10:w,S=Object(o.useState)((function(){return e.getBoundingClientRect()})),B=Object(p.a)(S,2),C=B[0],I=B[1],z=Object(o.useState)((function(){return(null!==n&&void 0!==n?n:e).getBoundingClientRect()})),W=Object(p.a)(z,2),N=W[0],A=W[1],L=Object(o.useCallback)((function(){I(e.getBoundingClientRect()),A((null!==n&&void 0!==n?n:e).getBoundingClientRect())}),[e,n]),R=Object(o.useCallback)((function(){e.scrollIntoView(l),L()}),[L,e,l]),M=Object(o.useCallback)((function(t){"ArrowLeft"===t.code&&0!==c?r(c-1):"ArrowRight"===t.code&&c!==i.length-1&&r(c+1)}),[c,r,i]);Object(o.useEffect)((function(){R(),window.addEventListener("resize",L),window.addEventListener("scroll",L),window.addEventListener("keydown",M);var t=!v&&setInterval((function(){return window.dispatchEvent(new Event("resize"))}),250),e=setTimeout((function(){return clearInterval(t)}),3e3),n=v&&setInterval((function(){return window.dispatchEvent(new Event("resize"))}),y);return function(){clearInterval(t),clearTimeout(e),clearTimeout(n),window.removeEventListener("resize",L),window.removeEventListener("scroll",L),window.removeEventListener("keydown",M)}}),[L,e,n,M,R,v,y]);var V=Object(o.useMemo)((function(){return k(C)}),[C]);return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(E,{boundaries:C,anchorBoundaries:N,differentAnchor:null!=n}),Object(f.jsx)(_,{track:v,anchorHighlight:null!=n}),Object(f.jsx)(T,{track:v,scrollToElement:R,arrowDirection:V,renderedContent:s,stepIndex:c,changeStep:r,allSteps:i,close:a,closeButton:d,currentStepLabel:h,nextStepButton:u,previousStepButton:j,stepButton:b,stepButtonWrapper:x,arrow:g,dialogWrapper:m})]})})),R=function(t){var e=t.children;return Object(f.jsx)(f.Fragment,{children:e})},M=function(t){var e=t.selector,n=t.anchorSelector,c=t.content,r=t.component,i=void 0===r?R:r,a=t.contentWrapper,s=void 0===a?R:a,l=t.stepIndex,d=Object(O.a)(t,A),h=Object(o.useState)(0),u=Object(p.a)(h,2),j=u[0],x=u[1],g=Object(o.useState)(0),m=Object(p.a)(g,2),v=m[0],w=m[1],_=Object(o.useMemo)((function(){return Object(f.jsx)(s,{children:Object(f.jsx)(i,{step:l,children:c})})}),[c,l,i,s]),y=Object(o.useMemo)((function(){return document.querySelector(e)}),[e]);null==y&&j<25&&setTimeout((function(){return x(j+1)}),100);var k=Object(o.useMemo)((function(){return n?document.querySelector(n):null}),[n]);return null!=n&&null==k&&v<25&&setTimeout((function(){return w(v+1)}),100),j>0&&x(0),v>0&&w(0),Object(f.jsx)(L,Object(b.a)({},Object(b.a)(Object(b.a)({},d),{},{element:null!==y&&void 0!==y?y:document.body,anchorElement:k,renderedContent:_,stepIndex:l})))},V=c.a.memo(M),H=function(t){var e=t.path;return Object(f.jsx)("svg",{className:"__react-grand-tour__icon",children:Object(f.jsx)("path",{d:e})})},G=function(){return Object(f.jsx)(H,{path:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"})},F=function(){return Object(f.jsx)(H,{path:"M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"})},D=function(){return Object(f.jsx)(H,{path:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})},q=function(){return Object(f.jsx)(H,{path:"M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"})},$=function(){return Object(f.jsx)(H,{path:"M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"})},J=function(t){var e=t.direction;return e?Object(f.jsx)("div",{className:"__react-grand-tour__arrow",children:function(){switch(e){case"up":return Object(f.jsx)(q,{});case"down":return Object(f.jsx)($,{});case"right":return Object(f.jsx)(F,{});case"left":return Object(f.jsx)(G,{});default:return null}}()}):null},P=c.a.memo(J),Y=function(t){var e=t.direction,n=t.disabled,o=t.onClick;return Object(f.jsx)("button",{type:"button",className:"__react-grand-tour__chevron-button",disabled:n,onClick:o,children:-1===e?Object(f.jsx)(G,{}):Object(f.jsx)(F,{})})},K=function(t){var e=t.currentStep;return Object(f.jsx)("div",{className:"__react-grand-tour__page-number",children:e+1})},Q=c.a.memo(K),U=function(t){var e=t.arrow,n=t.currentStepLabel,o=t.closeButton,c=t.content,r=t.previousStepButton,i=t.stepButtonWrapper,a=t.nextStepButton;return Object(f.jsx)("div",{className:"__react-grand-tour__modal",children:Object(f.jsxs)("div",{className:"__react-grand-tour__modal-content",children:[e,n,o,c,Object(f.jsxs)("div",{className:"__react-grand-tour__page-selector",children:[r,i,a]})]})})},X=function(t){var e=t.currentStep,n=t.totalSteps,o=t.goNext;return Object(f.jsx)(Y,{direction:1,disabled:e===n-1,onClick:o})},Z=function(t){var e=t.currentStep,n=t.goBack;return Object(f.jsx)(Y,{direction:-1,disabled:0===e,onClick:n})},tt=function(t){var e=t.currentStep,n=t.step,o=t.goToStep;return Object(f.jsx)("button",{type:"button",className:e===n?"__react-grand-tour__dot __react-grand-tour__dot-selected":"__react-grand-tour__dot",onClick:o,children:Object(f.jsx)("div",{})})},et=function(t){var e=t.stepButtons;return Object(f.jsx)("div",{className:"__react-grand-tour__dot-wrapper",children:e})},nt=Object(o.createContext)({open:function(){},openWith:function(){},steps:[],close:function(){},isOpen:!1,goToStep:function(){},goBack:function(){},goNext:function(){}}),ot=function(t){var e=t.children,n=t.open,c=void 0!==n&&n,r=t.onClose,i=t.steps,a=void 0===i?[]:i,s=t.openAt,l=void 0===s?0:s,d=t.scrollIntoViewOptions,h=void 0===d?{behavior:"smooth",block:"center"}:d,u=t.closeButton,j=void 0===u?D:u,x=t.currentStepLabel,g=void 0===x?Q:x,O=t.nextStepButton,v=void 0===O?X:O,w=t.previousStepButton,_=void 0===w?Z:w,y=t.stepButton,k=void 0===y?tt:y,S=t.stepButtonWrapper,B=void 0===S?et:S,C=t.arrow,I=void 0===C?P:C,z=t.dialogWrapper,T=void 0===z?U:z,W=t.contentWrapper,N=Object(o.useState)(c),E=Object(p.a)(N,2),A=E[0],L=E[1],R=Object(o.useState)(l),M=Object(p.a)(R,2),H=M[0],G=M[1],F=Object(o.useState)(a),q=Object(p.a)(F,2),$=q[0],J=q[1],Y=Object(o.useMemo)((function(){return $.map((function(t,e){return e}))}),[$]);Object(o.useEffect)((function(){return J(a)}),[a]);var K=Object(o.useCallback)((function(){r&&r(),L(!1),J(a)}),[r,L,J,a]),ot=Object(o.useCallback)((function(t){t>=0&&t<Y.length&&G(t)}),[Y.length]),ct=Object(o.useCallback)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1?arguments[1]:void 0;G(t),null!=e&&J(e),L(!0)}),[L,J]),rt=Object(o.useCallback)((function(){return ct()}),[ct]),it=Object(o.useCallback)((function(){ot(H+1)}),[H,ot]),at=Object(o.useCallback)((function(){ot(H-1)}),[H,ot]);return Object(f.jsxs)(nt.Provider,{value:{open:rt,openWith:ct,close:K,isOpen:A,steps:$,goNext:it,goBack:at,goToStep:ot},children:[e,A&&Object(f.jsxs)("div",{className:"__react-grand-tour__",children:[Object(f.jsx)("style",{children:m()})," ",Object(f.jsx)("div",{className:"__react-grand-tour__overlay",onClick:K}),Object(f.jsx)(V,Object(b.a)(Object(b.a)({},$[H]),{},{content:$[H].content,component:$[H].component,selector:$[H].selector,stepIndex:H,changeStep:ot,allSteps:Y,close:K,scrollIntoViewOptions:h,closeButton:j,currentStepLabel:g,nextStepButton:v,previousStepButton:_,stepButton:k,stepButtonWrapper:B,arrow:I,dialogWrapper:T,contentWrapper:W}))]})]})},ct=c.a.memo(ot);var rt=function(){return Object(o.useContext)(nt)},it=n(99),at=function(t){var e=t.children,n=rt().open;return Object(f.jsx)(it.a,{variant:"contained",color:"primary",onClick:n,children:e})},st=n(59),lt=n.n(st),dt=n(100),ht=function(t){var e=t.step,n=rt().openWith,c=Object(o.useCallback)((function(){return n(e)}),[e,n]);return Object(f.jsx)(dt.a,{onClick:c,color:"secondary",children:Object(f.jsx)(lt.a,{fontSize:"inherit"})})},ut=n(101),jt=Object(ut.a)((function(t){return{movingBox:{position:"absolute",animation:"$move 5s ".concat(t.transitions.easing.sharp),animationIterationCount:"infinite",transition:"left 100ms ".concat(t.transitions.easing.easeInOut,", top 100ms ").concat(t.transitions.easing.easeInOut)},"@keyframes move":{"0%":{top:20,left:20},"15%":{top:"calc(100% - 70px)",left:20},"50%":{top:"calc(100% - 70px)",left:"calc(100% - 70px)"},"65%":{top:20,left:"calc(100% - 70px)"},"100%":{top:20,left:20}}}})),bt=function(t){var e=t.boxId,n=t.containerId,o=jt().movingBox;return Object(f.jsx)(j.a,{id:n,bgcolor:"primary.main",height:200,position:"relative",children:Object(f.jsx)(j.a,{id:e,className:o,bgcolor:"secondary.main",height:50,width:50,borderRadius:8})})},pt=n(102),xt=Object(ut.a)((function(t){return{vertical:{animation:"$vertical 2s ".concat(t.transitions.easing.sharp),animationIterationCount:"infinite",transition:"height 10ms ".concat(t.transitions.easing.easeInOut),width:100},horizontal:{animation:"$horizontal 2s ".concat(t.transitions.easing.sharp),animationIterationCount:"infinite",transition:"width 10ms ".concat(t.transitions.easing.easeInOut),height:100},hotVert:{animation:"$hotVert 2s ".concat(t.transitions.easing.sharp),animationIterationCount:"infinite",transition:"width 10ms ".concat(t.transitions.easing.easeInOut),height:10,width:10},"@keyframes vertical":{"0%":{height:100},"50%":{height:25},"100%":{height:100}},"@keyframes horizontal":{"0%":{width:100},"50%":{width:25},"100%":{width:100}},"@keyframes hotVert":{"0%":{height:10,width:10},"50%":{height:100,width:100},"100%":{height:10,width:10}}}})),gt=function(t){var e=t.verticalId,n=t.horizontalOneId,o=t.horVertOneId,c=t.containerId,r=xt(),i=r.vertical,a=r.horizontal,s=r.hotVert;return Object(f.jsx)(j.a,{id:c,bgcolor:"primary.main",p:2,children:Object(f.jsxs)(pt.a,{container:!0,spacing:2,children:[Object(f.jsx)(pt.a,{item:!0,xs:12,md:4,lg:3,children:Object(f.jsx)(j.a,{height:100,display:"flex",justifyContent:"center",children:Object(f.jsx)(j.a,{id:e,className:i,bgcolor:"secondary.main",borderRadius:8})})}),Object(f.jsx)(pt.a,{item:!0,xs:12,md:4,lg:3,children:Object(f.jsx)(j.a,{display:"flex",justifyContent:"center",children:Object(f.jsx)(j.a,{id:n,className:a,bgcolor:"secondary.main",borderRadius:8})})}),Object(f.jsx)(pt.a,{item:!0,xs:12,md:4,lg:3,children:Object(f.jsx)(j.a,{display:"flex",justifyContent:"center",children:Object(f.jsx)(j.a,{id:o,className:s,bgcolor:"secondary.main",borderRadius:8})})})]})})},mt=n(103),Ot=n(63),ft=function(){return Object(f.jsx)(Ot.a,{href:"https://github.com/EitanElbaz/ReactGrandTour","data-size":"large","data-show-count":"true","aria-label":"Star EitanElbaz/ReactGrandTour on GitHub",children:"Star"})},vt="home-one-custom",wt="home-one",_t="home-two",yt="home-three",kt="home-four",St="home-four-container",Bt="home-expand-collapse-container",Ct="home-vertical-one",It="home-horizontal-one",zt="home-hotvert-one",Tt="home-expand-collapse-container-two",Wt="home-vertical-two",Nt="home-horizontal-two",Et="home-hotvert-two",At="home-bye",Lt=[{selector:"#".concat(wt),content:"Welcome to React Grand Tour!"},{selector:"#".concat(_t),content:"And this is a cool logo. Try scrolling down the page. You'll see an arrow appear. You can click anywhere in this modal to be taken back to the highlighted area."},{selector:"#".concat(yt),content:"The highlighted area will track moving objects",track:!0},{selector:"#".concat(kt),anchorSelector:"#".concat(St),content:"The highlighted area will track moving objects, but the modal stays anchored to its container.",track:!0},{selector:"#".concat(Ct),content:"The highlighted area will track the size of objects which change shape.",track:!0},{selector:"#".concat(It),content:"The highlighted area will track the size of objects which change shape. Even when it's their width!",track:!0},{selector:"#".concat(zt),content:"And when they change in both directions.",track:!0},{selector:"#".concat(Wt),anchorSelector:"#".concat(Tt),content:"The highlighted area will track the size of objects which change shape.",track:!0},{selector:"#".concat(Nt),anchorSelector:"#".concat(Tt),content:"The highlighted area will track the size of objects which change shape. Even when it's their width!",track:!0},{selector:"#".concat(Et),anchorSelector:"#".concat(Tt),content:"And when they change in both directions.",track:!0},{selector:"#row-1-col-1",content:"I can even handle really wide scrolling content."},{selector:"#row-4-col-20",content:"Just like that \ud83d\ude0f"},{selector:"#row-1-col-1",content:"And that \ud83d\ude31"},{selector:"#".concat(At),content:"",component:function(){return Object(f.jsxs)(j.a,{p:2,children:[Object(f.jsx)(j.a,{mb:1,children:"And that's it. I hope you liked the tour."}),Object(f.jsx)(j.a,{mb:1,children:"If you have any suggestions or find any bugs please do open an issue on GitHub."}),Object(f.jsx)(j.a,{mb:1,children:"While you're at it, drop me a star."}),Object(f.jsx)(j.a,{textAlign:"center",children:Object(f.jsx)(ft,{})})]})}}],Rt=n(60),Mt=n.n(Rt),Vt="/ReactGrandTour",Ht="/ReactGrandTour/custom",Gt=function(){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)(j.a,{id:At,display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",children:[Object(f.jsx)(j.a,{id:_t,fontSize:200,borderRadius:"50%",bgcolor:"primary.main",color:"white",p:3,children:Object(f.jsx)(j.a,{height:200,borderRadius:"50%",bgcolor:"secondary.main",p:1,children:Object(f.jsx)(Mt.a,{fontSize:"inherit"})})}),Object(f.jsxs)(j.a,{id:vt,children:[Object(f.jsxs)(j.a,{id:wt,mt:2,display:"flex",children:[Object(f.jsx)(j.a,{mr:2,children:Object(f.jsx)(mt.a,{variant:"h3",color:"primary",children:"React"})}),Object(f.jsx)(mt.a,{variant:"h3",color:"secondary",children:"Grand Tour"})]}),Object(f.jsx)(s.c,{children:Object(f.jsx)(s.a,{path:Ht,children:Object(f.jsxs)(j.a,{display:"flex",children:[Object(f.jsx)(j.a,{mr:2,children:Object(f.jsx)(mt.a,{variant:"h3",color:"secondary",children:"Custom"})}),Object(f.jsx)(mt.a,{variant:"h3",color:"primary",children:"Components"})]})})})]})]}),Object(f.jsx)(j.a,{mb:5,mt:2,children:Object(f.jsxs)(pt.a,{container:!0,spacing:2,children:[Object(f.jsx)(pt.a,{item:!0,children:Object(f.jsx)(at,{children:"Start Tour"})}),Object(f.jsx)(pt.a,{item:!0,children:Object(f.jsxs)(s.c,{children:[Object(f.jsx)(s.a,{path:Ht,children:Object(f.jsx)(it.a,{variant:"outlined",color:"primary",component:a.b,to:Vt,children:"Default Components"})}),Object(f.jsx)(s.a,{path:Vt,children:Object(f.jsx)(it.a,{variant:"outlined",color:"primary",component:a.b,to:Ht,children:"Custom Components Example"})})]})})]})})]})},Ft=n(104),Dt=n(105),qt=n(106),$t=n(107),Jt=n(108),Pt=n(109),Yt=n(110),Kt=function(){return Object(f.jsx)(Ft.a,{component:Dt.a,children:Object(f.jsxs)(qt.a,{children:[Object(f.jsx)($t.a,{children:Object(f.jsx)(Jt.a,{children:Array(50).fill(void 0).map((function(t,e){return Object(f.jsx)(Pt.a,{children:Object(f.jsxs)(mt.a,{noWrap:!0,variant:"subtitle1",children:["Header ",e+1]})})}))})}),Object(f.jsx)(Yt.a,{children:Array(5).fill(void 0).map((function(t,e){return Object(f.jsx)(Jt.a,{id:"row-".concat(e),children:Array(50).fill(void 0).map((function(t,n){return Object(f.jsx)(Pt.a,{id:"row-".concat(e,"-col-").concat(n),children:Object(f.jsxs)(mt.a,{noWrap:!0,variant:"subtitle2",children:["Row ",e+1," Col ",n+1]})})}))})}))})]})})},Qt=function(t){var e=t.title,n=t.openAtStep,o=t.children;return Object(f.jsx)(j.a,{bgcolor:"primary.main",children:Object(f.jsxs)(pt.a,{container:!0,spacing:2,children:[Object(f.jsx)(pt.a,{item:!0,xs:12,children:Object(f.jsxs)(mt.a,{variant:"h4",align:"center",color:"secondary",children:[e," ",Object(f.jsx)(ht,{step:n})]})}),Object(f.jsx)(pt.a,{item:!0,xs:12,children:o})]})})},Ut=function(){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(j.a,{width:"100%",px:10,children:Object(f.jsx)(Qt,{title:"Track a fast moving object",openAtStep:2,children:Object(f.jsx)(bt,{boxId:yt})})}),Object(f.jsx)(j.a,{width:"100%",px:10,mt:8,children:Object(f.jsx)(Qt,{title:"Anchor modal to the container",openAtStep:3,children:Object(f.jsx)(bt,{boxId:kt,containerId:St})})}),Object(f.jsx)(j.a,{width:"100%",px:10,mt:8,children:Object(f.jsx)(Qt,{title:"Track a morphing object",openAtStep:4,children:Object(f.jsx)(gt,{verticalId:Ct,horizontalOneId:It,horVertOneId:zt,containerId:Bt})})}),Object(f.jsx)(j.a,{width:"100%",px:10,mt:8,children:Object(f.jsx)(Qt,{title:"Anchor Modal To the container",openAtStep:7,children:Object(f.jsx)(gt,{verticalId:Wt,horizontalOneId:Nt,horVertOneId:Et,containerId:Tt})})}),Object(f.jsx)(j.a,{width:"100%",px:10,mt:8,children:Object(f.jsx)(Qt,{title:"Wide horizontally scrolling content",openAtStep:10,children:Object(f.jsx)(Kt,{})})})]})},Xt=(Object(ut.a)((function(){return{codeStyle:{padding:"2px 3px 1px",border:"1px solid rgba(29,28,29,0.13)",color:"#e01e5a",borderRadius:"3px",backgroundColor:"rgba(29,28,29,.04)"},multilineStyle:{border:"1px solid rgba(29,28,29, 0.13)",borderRadius:"4px",backgroundColor:"rgba(29,28,29,.04)",whiteSpace:"pre-wrap",wordWrap:"break-word",wordBreak:"normal",width:"100%",padding:"8px"}}})),function(){return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(ct,{steps:Lt,children:Object(f.jsxs)(j.a,{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",py:8,children:[Object(f.jsx)(Gt,{}),Object(f.jsx)(Ut,{})]})})})}),Zt=n(64),te=n(111),ee=n(112),ne=n(113),oe=function(t){var e=t.goToStep,n=t.active;return Object(f.jsx)(dt.a,{onClick:e,size:"small",color:n?"primary":void 0,children:Object(f.jsx)(te.a,{})})},ce=function(t){var e=t.goNext;return Object(f.jsx)(it.a,{color:"secondary",variant:"contained",onClick:e,size:"small",children:Object(f.jsx)(ee.a,{})})},re=function(t){var e=t.goBack;return Object(f.jsx)(it.a,{color:"secondary",variant:"contained",onClick:e,size:"small",children:Object(f.jsx)(ne.a,{})})},ie=function(){return Object(f.jsx)(j.a,{height:20,width:20,borderRadius:"50%",bgcolor:"red"})},ae=function(t){var e=t.children;return Object(f.jsx)(j.a,{bgcolor:"primary.main",my:2,p:2,children:e})},se=function(){return Object(f.jsx)(ct,{steps:[{content:"Welcome to React Grand Tour! (With weird custom component overrides)!!!",selector:"#".concat(vt)}].concat(Object(Zt.a)(Lt.slice(1))),stepButton:oe,nextStepButton:ce,previousStepButton:re,closeButton:ie,contentWrapper:ae,children:Object(f.jsxs)(j.a,{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",py:8,children:[Object(f.jsx)(Gt,{}),Object(f.jsx)(Ut,{})]})})},le=function(){return Object(f.jsx)(l.b,{injectFirst:!0,children:Object(f.jsxs)(d.a,{theme:Object(h.a)({palette:{primary:{main:"#5fad56",contrastText:"#fff"},secondary:{main:"#f2c14e"}},typography:{button:{fontWeight:700,textTransform:"none"}}}),children:[Object(f.jsx)(u.a,{}),Object(f.jsxs)(a.a,{children:[Object(f.jsx)(j.a,{textAlign:"center",mt:3,children:Object(f.jsx)(ft,{})}),Object(f.jsxs)(s.c,{children:[Object(f.jsx)(s.a,{path:Ht,children:Object(f.jsx)(se,{})}),Object(f.jsx)(s.a,{path:Vt,children:Object(f.jsx)(Xt,{})})]})]})]})})};i.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(le,{})}),document.getElementById("root"))}},[[85,1,2]]]);
//# sourceMappingURL=main.f96331b1.chunk.js.map