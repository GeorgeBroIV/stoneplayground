(self.webpackChunk=self.webpackChunk||[]).push([[498,570],{8163:(e,t,o)=>{"use strict";o.d(t,{Z:()=>a});var r=o(5166);const n={props:{type:{type:String,default:"submit"}},render:function(e,t,o,n,a,s){return(0,r.openBlock)(),(0,r.createBlock)("button",{type:o.type,class:"inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray transition ease-in-out duration-150"},[(0,r.renderSlot)(e.$slots,"default")],8,["type"])}},a=n},9248:(e,t,o)=>{"use strict";o.d(t,{Z:()=>l});var r=o(5166),n={class:"md:grid md:grid-cols-3 md:gap-6"},a={class:"mt-5 md:mt-0 md:col-span-2"},s={class:"grid grid-cols-6 gap-6"},i={key:0,class:"flex items-center justify-end px-4 py-3 bg-gray-50 text-right sm:px-6 shadow sm:rounded-bl-md sm:rounded-br-md"};const c={emits:["submitted"],components:{JetSectionTitle:o(5090).Z},computed:{hasActions:function(){return!!this.$slots.actions}},render:function(e,t,o,c,l,d){var u=(0,r.resolveComponent)("jet-section-title");return(0,r.openBlock)(),(0,r.createBlock)("div",n,[(0,r.createVNode)(u,null,{title:(0,r.withCtx)((function(){return[(0,r.renderSlot)(e.$slots,"title")]})),description:(0,r.withCtx)((function(){return[(0,r.renderSlot)(e.$slots,"description")]})),_:1}),(0,r.createVNode)("div",a,[(0,r.createVNode)("form",{onSubmit:t[1]||(t[1]=(0,r.withModifiers)((function(t){return e.$emit("submitted")}),["prevent"]))},[(0,r.createVNode)("div",{class:["px-4 py-5 bg-white sm:p-6 shadow",d.hasActions?"sm:rounded-tl-md sm:rounded-tr-md":"sm:rounded-md"]},[(0,r.createVNode)("div",s,[(0,r.renderSlot)(e.$slots,"form")])],2),d.hasActions?((0,r.openBlock)(),(0,r.createBlock)("div",i,[(0,r.renderSlot)(e.$slots,"actions")])):(0,r.createCommentVNode)("",!0)],32)])])}},l=c},6824:(e,t,o)=>{"use strict";o.d(t,{Z:()=>a});var r=o(5166);const n={props:["modelValue"],emits:["update:modelValue"],methods:{focus:function(){this.$refs.input.focus()}},render:function(e,t,o,n,a,s){return(0,r.openBlock)(),(0,r.createBlock)("input",{class:"border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm",value:o.modelValue,onInput:t[1]||(t[1]=function(t){return e.$emit("update:modelValue",t.target.value)}),ref:"input"},null,40,["value"])}},a=n},8985:(e,t,o)=>{"use strict";o.d(t,{Z:()=>s});var r=o(5166),n={class:"text-sm text-red-600"};const a={props:["message"],render:function(e,t,o,a,s,i){return(0,r.withDirectives)(((0,r.openBlock)(),(0,r.createBlock)("div",null,[(0,r.createVNode)("p",n,(0,r.toDisplayString)(o.message),1)],512)),[[r.vShow,o.message]])}},s=a},3845:(e,t,o)=>{"use strict";o.d(t,{Z:()=>c});var r=o(5166),n={class:"block font-medium text-sm text-gray-700"},a={key:0},s={key:1};const i={props:["value"],render:function(e,t,o,i,c,l){return(0,r.openBlock)(),(0,r.createBlock)("label",n,[o.value?((0,r.openBlock)(),(0,r.createBlock)("span",a,(0,r.toDisplayString)(o.value),1)):((0,r.openBlock)(),(0,r.createBlock)("span",s,[(0,r.renderSlot)(e.$slots,"default")]))])}},c=i},5090:(e,t,o)=>{"use strict";o.d(t,{Z:()=>l});var r=o(5166),n={class:"md:col-span-1"},a={class:"px-4 sm:px-0"},s={class:"text-lg font-medium text-gray-900"},i={class:"mt-1 text-sm text-gray-600"};const c={render:function(e,t){return(0,r.openBlock)(),(0,r.createBlock)("div",n,[(0,r.createVNode)("div",a,[(0,r.createVNode)("h3",s,[(0,r.renderSlot)(e.$slots,"title")]),(0,r.createVNode)("p",i,[(0,r.renderSlot)(e.$slots,"description")])])])}},l=c},882:(e,t,o)=>{"use strict";o.d(t,{Z:()=>Te});var r=o(5166),n={class:"min-h-screen bg-gray-100"},a={class:"bg-white border-b border-gray-100"},s={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},i={class:"flex justify-between h-16"},c={class:"flex"},l={class:"flex-shrink-0 flex items-center"},d={class:"hidden space-x-8 sm:-my-px sm:ml-10 sm:flex"},u=(0,r.createTextVNode)(" Dashboard "),p={class:"hidden sm:flex sm:items-center sm:ml-6"},m={class:"ml-3 relative"},f={class:"inline-flex rounded-md"},g={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:bg-gray-50 active:bg-gray-50 transition ease-in-out duration-150"},h=(0,r.createVNode)("svg",{class:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[(0,r.createVNode)("path",{"fill-rule":"evenodd",d:"M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),v={class:"w-60"},x=(0,r.createVNode)("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Manage Team ",-1),k=(0,r.createTextVNode)(" Team Settings "),w=(0,r.createTextVNode)(" Create New Team "),y=(0,r.createVNode)("div",{class:"border-t border-gray-100"},null,-1),N=(0,r.createVNode)("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Switch Teams ",-1),b={class:"flex items-center"},V={key:0,class:"mr-2 h-5 w-5 text-green-400",fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",stroke:"currentColor",viewBox:"0 0 24 24"},B=(0,r.createVNode)("path",{d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),C={class:"ml-3 relative"},$={key:0,class:"flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition duration-150 ease-in-out"},S={key:1,class:"inline-flex rounded-md"},T={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"},_=(0,r.createVNode)("svg",{class:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[(0,r.createVNode)("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),j=(0,r.createVNode)("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Manage Account ",-1),D=(0,r.createTextVNode)(" Profile "),M=(0,r.createTextVNode)(" API Tokens "),L=(0,r.createVNode)("div",{class:"border-t border-gray-100"},null,-1),Z=(0,r.createTextVNode)(" Log Out "),F={class:"-mr-2 flex items-center sm:hidden"},A={class:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},J={class:"pt-2 pb-3 space-y-1"},z=(0,r.createTextVNode)(" Dashboard "),P={class:"pt-4 pb-1 border-t border-gray-200"},I={class:"flex items-center px-4"},O={key:0,class:"flex-shrink-0 mr-3"},E={class:"font-medium text-base text-gray-800"},U={class:"font-medium text-sm text-gray-500"},R={class:"mt-3 space-y-1"},q=(0,r.createTextVNode)(" Profile "),G=(0,r.createTextVNode)(" API Tokens "),H=(0,r.createTextVNode)(" Log Out "),K=(0,r.createVNode)("div",{class:"border-t border-gray-200"},null,-1),Q=(0,r.createVNode)("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Manage Team ",-1),W=(0,r.createTextVNode)(" Team Settings "),X=(0,r.createTextVNode)(" Create New Team "),Y=(0,r.createVNode)("div",{class:"border-t border-gray-200"},null,-1),ee=(0,r.createVNode)("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Switch Teams ",-1),te={class:"flex items-center"},oe={key:0,class:"mr-2 h-5 w-5 text-green-400",fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",stroke:"currentColor",viewBox:"0 0 24 24"},re=(0,r.createVNode)("path",{d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),ne={key:0,class:"bg-white shadow"},ae={class:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8"};var se={viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"},ie=(0,r.createVNode)("path",{d:"M11.395 44.428C4.557 40.198 0 32.632 0 24 0 10.745 10.745 0 24 0a23.891 23.891 0 0113.997 4.502c-.2 17.907-11.097 33.245-26.602 39.926z",fill:"#6875F5"},null,-1),ce=(0,r.createVNode)("path",{d:"M14.134 45.885A23.914 23.914 0 0024 48c13.255 0 24-10.745 24-24 0-3.516-.756-6.856-2.115-9.866-4.659 15.143-16.608 27.092-31.75 31.751z",fill:"#6875F5"},null,-1);const le={render:function(e,t){return(0,r.openBlock)(),(0,r.createBlock)("svg",se,[ie,ce])}},de=le;var ue={class:"max-w-screen-xl mx-auto py-2 px-3 sm:px-6 lg:px-8"},pe={class:"flex items-center justify-between flex-wrap"},me={class:"w-0 flex-1 flex items-center min-w-0"},fe={key:0,class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},ge=(0,r.createVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),he={key:1,class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},ve=(0,r.createVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"},null,-1),xe={class:"ml-3 font-medium text-sm text-white truncate"},ke={class:"flex-shrink-0 sm:ml-3"},we=(0,r.createVNode)("svg",{class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[(0,r.createVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1);const ye={data:function(){return{show:!0}},computed:{style:function(){var e;return(null===(e=this.$page.props.jetstream.flash)||void 0===e?void 0:e.bannerStyle)||"success"},message:function(){var e;return(null===(e=this.$page.props.jetstream.flash)||void 0===e?void 0:e.banner)||""}},render:function(e,t,o,n,a,s){return(0,r.openBlock)(),(0,r.createBlock)("div",null,[a.show&&s.message?((0,r.openBlock)(),(0,r.createBlock)("div",{key:0,class:{"bg-indigo-500":"success"==s.style,"bg-red-700":"danger"==s.style}},[(0,r.createVNode)("div",ue,[(0,r.createVNode)("div",pe,[(0,r.createVNode)("div",me,[(0,r.createVNode)("span",{class:["flex p-2 rounded-lg",{"bg-indigo-600":"success"==s.style,"bg-red-600":"danger"==s.style}]},["success"==s.style?((0,r.openBlock)(),(0,r.createBlock)("svg",fe,[ge])):(0,r.createCommentVNode)("",!0),"danger"==s.style?((0,r.openBlock)(),(0,r.createBlock)("svg",he,[ve])):(0,r.createCommentVNode)("",!0)],2),(0,r.createVNode)("p",xe,(0,r.toDisplayString)(s.message),1)]),(0,r.createVNode)("div",ke,[(0,r.createVNode)("button",{type:"button",class:["-mr-1 flex p-2 rounded-md focus:outline-none sm:-mr-2 transition ease-in-out duration-150",{"hover:bg-indigo-600 focus:bg-indigo-600":"success"==s.style,"hover:bg-red-600 focus:bg-red-600":"danger"==s.style}],"aria-label":"Dismiss",onClick:t[1]||(t[1]=(0,r.withModifiers)((function(e){return a.show=!1}),["prevent"]))},[we],2)])])])],2)):(0,r.createCommentVNode)("",!0)])}};var Ne={class:"relative"};const be={props:{align:{default:"right"},width:{default:"48"},contentClasses:{default:function(){return["py-1","bg-white"]}}},setup:function(){var e=(0,r.ref)(!1),t=function(t){e.value&&27===t.keyCode&&(e.value=!1)};return(0,r.onMounted)((function(){return document.addEventListener("keydown",t)})),(0,r.onUnmounted)((function(){return document.removeEventListener("keydown",t)})),{open:e}},computed:{widthClass:function(){return{48:"w-48"}[this.width.toString()]},alignmentClasses:function(){return"left"===this.align?"origin-top-left left-0":"right"===this.align?"origin-top-right right-0":"origin-top"}},render:function(e,t,o,n,a,s){return(0,r.openBlock)(),(0,r.createBlock)("div",Ne,[(0,r.createVNode)("div",{onClick:t[1]||(t[1]=function(e){return n.open=!n.open})},[(0,r.renderSlot)(e.$slots,"trigger")]),(0,r.withDirectives)((0,r.createVNode)("div",{class:"fixed inset-0 z-40",onClick:t[2]||(t[2]=function(e){return n.open=!1})},null,512),[[r.vShow,n.open]]),(0,r.createVNode)(r.Transition,{"enter-active-class":"transition ease-out duration-200","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:(0,r.withCtx)((function(){return[(0,r.withDirectives)((0,r.createVNode)("div",{class:["absolute z-50 mt-2 rounded-md shadow-lg",[s.widthClass,s.alignmentClasses]],style:{display:"none"},onClick:t[3]||(t[3]=function(e){return n.open=!1})},[(0,r.createVNode)("div",{class:["rounded-md ring-1 ring-black ring-opacity-5",o.contentClasses]},[(0,r.renderSlot)(e.$slots,"content")],2)],2),[[r.vShow,n.open]])]})),_:3})])}};var Ve={key:0,type:"submit",class:"block w-full px-4 py-2 text-sm leading-5 text-gray-700 text-left hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"};const Be={props:["href","as"],render:function(e,t,o,n,a,s){var i=(0,r.resolveComponent)("inertia-link");return(0,r.openBlock)(),(0,r.createBlock)("div",null,["button"==o.as?((0,r.openBlock)(),(0,r.createBlock)("button",Ve,[(0,r.renderSlot)(e.$slots,"default")])):((0,r.openBlock)(),(0,r.createBlock)(i,{key:1,href:o.href,class:"block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"},{default:(0,r.withCtx)((function(){return[(0,r.renderSlot)(e.$slots,"default")]})),_:3},8,["href"]))])}};const Ce={props:["href","active"],computed:{classes:function(){return this.active?"inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out":"inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out"}},render:function(e,t,o,n,a,s){var i=(0,r.resolveComponent)("inertia-link");return(0,r.openBlock)(),(0,r.createBlock)(i,{href:o.href,class:s.classes},{default:(0,r.withCtx)((function(){return[(0,r.renderSlot)(e.$slots,"default")]})),_:3},8,["href","class"])}};const $e={props:["active","href","as"],computed:{classes:function(){return this.active?"block pl-3 pr-4 py-2 border-l-4 border-indigo-400 text-base font-medium text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition duration-150 ease-in-out":"block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out"}},render:function(e,t,o,n,a,s){var i=(0,r.resolveComponent)("inertia-link");return(0,r.openBlock)(),(0,r.createBlock)("div",null,["button"==o.as?((0,r.openBlock)(),(0,r.createBlock)("button",{key:0,class:[s.classes,"w-full text-left"]},[(0,r.renderSlot)(e.$slots,"default")],2)):((0,r.openBlock)(),(0,r.createBlock)(i,{key:1,href:o.href,class:s.classes},{default:(0,r.withCtx)((function(){return[(0,r.renderSlot)(e.$slots,"default")]})),_:3},8,["href","class"]))])}},Se={components:{JetApplicationMark:de,JetBanner:ye,JetDropdown:be,JetDropdownLink:Be,JetNavLink:Ce,JetResponsiveNavLink:$e},data:function(){return{showingNavigationDropdown:!1}},methods:{switchToTeam:function(e){this.$inertia.put(route("current-team.update"),{team_id:e.id},{preserveState:!1})},logout:function(){this.$inertia.post(route("logout"))}},render:function(e,t,o,se,ie,ce){var le=(0,r.resolveComponent)("jet-banner"),de=(0,r.resolveComponent)("jet-application-mark"),ue=(0,r.resolveComponent)("inertia-link"),pe=(0,r.resolveComponent)("jet-nav-link"),me=(0,r.resolveComponent)("jet-dropdown-link"),fe=(0,r.resolveComponent)("jet-dropdown"),ge=(0,r.resolveComponent)("jet-responsive-nav-link");return(0,r.openBlock)(),(0,r.createBlock)("div",null,[(0,r.createVNode)(le),(0,r.createVNode)("div",n,[(0,r.createVNode)("nav",a,[(0,r.createVNode)("div",s,[(0,r.createVNode)("div",i,[(0,r.createVNode)("div",c,[(0,r.createVNode)("div",l,[(0,r.createVNode)(ue,{href:e.route("dashboard")},{default:(0,r.withCtx)((function(){return[(0,r.createVNode)(de,{class:"block h-9 w-auto"})]})),_:1},8,["href"])]),(0,r.createVNode)("div",d,[(0,r.createVNode)(pe,{href:e.route("dashboard"),active:e.route().current("dashboard")},{default:(0,r.withCtx)((function(){return[u]})),_:1},8,["href","active"])])]),(0,r.createVNode)("div",p,[(0,r.createVNode)("div",m,[e.$page.props.jetstream.hasTeamFeatures?((0,r.openBlock)(),(0,r.createBlock)(fe,{key:0,align:"right",width:"60"},{trigger:(0,r.withCtx)((function(){return[(0,r.createVNode)("span",f,[(0,r.createVNode)("button",g,[(0,r.createTextVNode)((0,r.toDisplayString)(e.$page.props.user.current_team.name)+" ",1),h])])]})),content:(0,r.withCtx)((function(){return[(0,r.createVNode)("div",v,[e.$page.props.jetstream.hasTeamFeatures?((0,r.openBlock)(),(0,r.createBlock)(r.Fragment,{key:0},[x,(0,r.createVNode)(me,{href:e.route("teams.show",e.$page.props.user.current_team)},{default:(0,r.withCtx)((function(){return[k]})),_:1},8,["href"]),e.$page.props.jetstream.canCreateTeams?((0,r.openBlock)(),(0,r.createBlock)(me,{key:0,href:e.route("teams.create")},{default:(0,r.withCtx)((function(){return[w]})),_:1},8,["href"])):(0,r.createCommentVNode)("",!0),y,N,((0,r.openBlock)(!0),(0,r.createBlock)(r.Fragment,null,(0,r.renderList)(e.$page.props.user.all_teams,(function(t){return(0,r.openBlock)(),(0,r.createBlock)("form",{key:t.id,onSubmit:(0,r.withModifiers)((function(e){return ce.switchToTeam(t)}),["prevent"])},[(0,r.createVNode)(me,{as:"button"},{default:(0,r.withCtx)((function(){return[(0,r.createVNode)("div",b,[t.id==e.$page.props.user.current_team_id?((0,r.openBlock)(),(0,r.createBlock)("svg",V,[B])):(0,r.createCommentVNode)("",!0),(0,r.createVNode)("div",null,(0,r.toDisplayString)(t.name),1)])]})),_:2},1024)],40,["onSubmit"])})),128))],64)):(0,r.createCommentVNode)("",!0)])]})),_:1})):(0,r.createCommentVNode)("",!0)]),(0,r.createVNode)("div",C,[(0,r.createVNode)(fe,{align:"right",width:"48"},{trigger:(0,r.withCtx)((function(){return[e.$page.props.jetstream.managesProfilePhotos?((0,r.openBlock)(),(0,r.createBlock)("button",$,[(0,r.createVNode)("img",{class:"h-8 w-8 rounded-full object-cover",src:e.$page.props.user.profile_photo_url,alt:e.$page.props.user.name},null,8,["src","alt"])])):((0,r.openBlock)(),(0,r.createBlock)("span",S,[(0,r.createVNode)("button",T,[(0,r.createTextVNode)((0,r.toDisplayString)(e.$page.props.user.name)+" ",1),_])]))]})),content:(0,r.withCtx)((function(){return[j,(0,r.createVNode)(me,{href:e.route("profile.show")},{default:(0,r.withCtx)((function(){return[D]})),_:1},8,["href"]),e.$page.props.jetstream.hasApiFeatures?((0,r.openBlock)(),(0,r.createBlock)(me,{key:0,href:e.route("api-tokens.index")},{default:(0,r.withCtx)((function(){return[M]})),_:1},8,["href"])):(0,r.createCommentVNode)("",!0),L,(0,r.createVNode)("form",{onSubmit:t[1]||(t[1]=(0,r.withModifiers)((function(){return ce.logout&&ce.logout.apply(ce,arguments)}),["prevent"]))},[(0,r.createVNode)(me,{as:"button"},{default:(0,r.withCtx)((function(){return[Z]})),_:1})],32)]})),_:1})])]),(0,r.createVNode)("div",F,[(0,r.createVNode)("button",{onClick:t[2]||(t[2]=function(e){return ie.showingNavigationDropdown=!ie.showingNavigationDropdown}),class:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"},[((0,r.openBlock)(),(0,r.createBlock)("svg",A,[(0,r.createVNode)("path",{class:{hidden:ie.showingNavigationDropdown,"inline-flex":!ie.showingNavigationDropdown},"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,2),(0,r.createVNode)("path",{class:{hidden:!ie.showingNavigationDropdown,"inline-flex":ie.showingNavigationDropdown},"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,2)]))])])])]),(0,r.createVNode)("div",{class:[{block:ie.showingNavigationDropdown,hidden:!ie.showingNavigationDropdown},"sm:hidden"]},[(0,r.createVNode)("div",J,[(0,r.createVNode)(ge,{href:e.route("dashboard"),active:e.route().current("dashboard")},{default:(0,r.withCtx)((function(){return[z]})),_:1},8,["href","active"])]),(0,r.createVNode)("div",P,[(0,r.createVNode)("div",I,[e.$page.props.jetstream.managesProfilePhotos?((0,r.openBlock)(),(0,r.createBlock)("div",O,[(0,r.createVNode)("img",{class:"h-10 w-10 rounded-full object-cover",src:e.$page.props.user.profile_photo_url,alt:e.$page.props.user.name},null,8,["src","alt"])])):(0,r.createCommentVNode)("",!0),(0,r.createVNode)("div",null,[(0,r.createVNode)("div",E,(0,r.toDisplayString)(e.$page.props.user.name),1),(0,r.createVNode)("div",U,(0,r.toDisplayString)(e.$page.props.user.email),1)])]),(0,r.createVNode)("div",R,[(0,r.createVNode)(ge,{href:e.route("profile.show"),active:e.route().current("profile.show")},{default:(0,r.withCtx)((function(){return[q]})),_:1},8,["href","active"]),e.$page.props.jetstream.hasApiFeatures?((0,r.openBlock)(),(0,r.createBlock)(ge,{key:0,href:e.route("api-tokens.index"),active:e.route().current("api-tokens.index")},{default:(0,r.withCtx)((function(){return[G]})),_:1},8,["href","active"])):(0,r.createCommentVNode)("",!0),(0,r.createVNode)("form",{method:"POST",onSubmit:t[3]||(t[3]=(0,r.withModifiers)((function(){return ce.logout&&ce.logout.apply(ce,arguments)}),["prevent"]))},[(0,r.createVNode)(ge,{as:"button"},{default:(0,r.withCtx)((function(){return[H]})),_:1})],32),e.$page.props.jetstream.hasTeamFeatures?((0,r.openBlock)(),(0,r.createBlock)(r.Fragment,{key:1},[K,Q,(0,r.createVNode)(ge,{href:e.route("teams.show",e.$page.props.user.current_team),active:e.route().current("teams.show")},{default:(0,r.withCtx)((function(){return[W]})),_:1},8,["href","active"]),(0,r.createVNode)(ge,{href:e.route("teams.create"),active:e.route().current("teams.create")},{default:(0,r.withCtx)((function(){return[X]})),_:1},8,["href","active"]),Y,ee,((0,r.openBlock)(!0),(0,r.createBlock)(r.Fragment,null,(0,r.renderList)(e.$page.props.user.all_teams,(function(t){return(0,r.openBlock)(),(0,r.createBlock)("form",{key:t.id,onSubmit:(0,r.withModifiers)((function(e){return ce.switchToTeam(t)}),["prevent"])},[(0,r.createVNode)(ge,{as:"button"},{default:(0,r.withCtx)((function(){return[(0,r.createVNode)("div",te,[t.id==e.$page.props.user.current_team_id?((0,r.openBlock)(),(0,r.createBlock)("svg",oe,[re])):(0,r.createCommentVNode)("",!0),(0,r.createVNode)("div",null,(0,r.toDisplayString)(t.name),1)])]})),_:2},1024)],40,["onSubmit"])})),128))],64)):(0,r.createCommentVNode)("",!0)])])],2)]),e.$slots.header?((0,r.openBlock)(),(0,r.createBlock)("header",ne,[(0,r.createVNode)("div",ae,[(0,r.renderSlot)(e.$slots,"header")])])):(0,r.createCommentVNode)("",!0),(0,r.createVNode)("main",null,[(0,r.renderSlot)(e.$slots,"default")])])])}},Te=Se},6498:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>l});var r=o(5166),n=(0,r.createVNode)("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Create Team ",-1),a={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"};var s=o(882),i=o(4570);const c={components:{AppLayout:s.Z,CreateTeamForm:i.default},render:function(e,t,o,s,i,c){var l=(0,r.resolveComponent)("create-team-form"),d=(0,r.resolveComponent)("app-layout");return(0,r.openBlock)(),(0,r.createBlock)(d,null,{header:(0,r.withCtx)((function(){return[n]})),default:(0,r.withCtx)((function(){return[(0,r.createVNode)("div",null,[(0,r.createVNode)("div",a,[(0,r.createVNode)(l)])])]})),_:1})}},l=c},4570:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>x});var r=o(5166),n=(0,r.createTextVNode)(" Team Details "),a=(0,r.createTextVNode)(" Create a new team to collaborate with others on projects. "),s={class:"col-span-6"},i={class:"flex items-center mt-2"},c={class:"ml-4 leading-tight"},l={class:"text-gray-700 text-sm"},d={class:"col-span-6 sm:col-span-4"},u=(0,r.createTextVNode)(" Create ");var p=o(8163),m=o(9248),f=o(6824),g=o(8985),h=o(3845);const v={components:{JetButton:p.Z,JetFormSection:m.Z,JetInput:f.Z,JetInputError:g.Z,JetLabel:h.Z},data:function(){return{form:this.$inertia.form({name:""})}},methods:{createTeam:function(){this.form.post(route("teams.store"),{errorBag:"createTeam",preserveScroll:!0})}},render:function(e,t,o,p,m,f){var g=(0,r.resolveComponent)("jet-label"),h=(0,r.resolveComponent)("jet-input"),v=(0,r.resolveComponent)("jet-input-error"),x=(0,r.resolveComponent)("jet-button"),k=(0,r.resolveComponent)("jet-form-section");return(0,r.openBlock)(),(0,r.createBlock)(k,{onSubmitted:f.createTeam},{title:(0,r.withCtx)((function(){return[n]})),description:(0,r.withCtx)((function(){return[a]})),form:(0,r.withCtx)((function(){return[(0,r.createVNode)("div",s,[(0,r.createVNode)(g,{value:"Team Owner"}),(0,r.createVNode)("div",i,[(0,r.createVNode)("img",{class:"w-12 h-12 rounded-full object-cover",src:e.$page.props.user.profile_photo_url,alt:e.$page.props.user.name},null,8,["src","alt"]),(0,r.createVNode)("div",c,[(0,r.createVNode)("div",null,(0,r.toDisplayString)(e.$page.props.user.name),1),(0,r.createVNode)("div",l,(0,r.toDisplayString)(e.$page.props.user.email),1)])])]),(0,r.createVNode)("div",d,[(0,r.createVNode)(g,{for:"name",value:"Team Name"}),(0,r.createVNode)(h,{id:"name",type:"text",class:"mt-1 block w-full",modelValue:m.form.name,"onUpdate:modelValue":t[1]||(t[1]=function(e){return m.form.name=e}),autofocus:""},null,8,["modelValue"]),(0,r.createVNode)(v,{message:m.form.errors.name,class:"mt-2"},null,8,["message"])])]})),actions:(0,r.withCtx)((function(){return[(0,r.createVNode)(x,{class:{"opacity-25":m.form.processing},disabled:m.form.processing},{default:(0,r.withCtx)((function(){return[u]})),_:1},8,["class","disabled"])]})),_:1},8,["onSubmitted"])}},x=v}}]);