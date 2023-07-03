(function(){"use strict";var t={365:function(t,e,n){var o=n(963),s=n(252);const r={id:"app"};function a(t,e,n,a,i,c){const u=(0,s.up)("ToolBar"),l=(0,s.up)("router-view"),d=(0,s.up)("Spinner");return(0,s.wg)(),(0,s.iD)("div",r,[(0,s.Wm)(u),(0,s.Wm)(o.uT,{name:"page"},{default:(0,s.w5)((()=>[(0,s.Wm)(l)])),_:1}),(0,s.Wm)(d,{loading:c.loadingStatus},null,8,["loading"])])}const i={class:"header"};function c(t,e,n,o,r,a){const c=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("div",i,[(0,s.Wm)(c,{to:"/news"},{default:(0,s.w5)((()=>[(0,s.Uk)("News")])),_:1}),(0,s.Uk)(" | "),(0,s.Wm)(c,{to:"/ask"},{default:(0,s.w5)((()=>[(0,s.Uk)("Ask")])),_:1}),(0,s.Uk)(" | "),(0,s.Wm)(c,{to:"/jobs"},{default:(0,s.w5)((()=>[(0,s.Uk)("Jobs")])),_:1}),(0,s.Uk)(" | ")])}var u={},l=n(744);const d=(0,l.Z)(u,[["render",c],["__scopeId","data-v-e366e46e"]]);var m=d;const p={key:0,class:"lds-facebook"},f=(0,s._)("div",null,null,-1),h=(0,s._)("div",null,null,-1),w=(0,s._)("div",null,null,-1),g=[f,h,w];function v(t,e,n,o,r,a){return n.loading?((0,s.wg)(),(0,s.iD)("div",p,g)):(0,s.kq)("",!0)}var _={props:{loading:{type:Boolean,required:!0}}};const S=(0,l.Z)(_,[["render",v]]);var T=S,k={components:{ToolBar:m,Spinner:T},computed:{loadingStatus(){return this.$store.state.loadingStatus}},created(){}};const E=(0,l.Z)(k,[["render",a]]);var b=E,I=n(119);function y(t,e,n,o,r,a){const i=(0,s.up)("list-item");return(0,s.wg)(),(0,s.iD)("div",null,[(0,s.Wm)(i)])}var $=n(577);const U={class:"news-list"},j={class:"post"},W={class:"points"},L={class:"news-title"},O=["href"],Z={class:"link-text"},D=["href"];function H(t,e,n,o,r,a){const i=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("div",null,[(0,s._)("ul",U,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(a.listItems,(t=>((0,s.wg)(),(0,s.iD)("li",j,[(0,s._)("div",W,(0,$.zw)(t.points||0),1),(0,s._)("div",null,[(0,s._)("p",L,[t.domain?((0,s.wg)(),(0,s.iD)("a",{key:0,href:t.url},(0,$.zw)(t.title),9,O)):((0,s.wg)(),(0,s.j4)(i,{key:1,to:`/item/${t.id}`},{default:(0,s.w5)((()=>[(0,s.Uk)((0,$.zw)(t.title),1)])),_:2},1032,["to"]))]),(0,s._)("small",Z,[(0,s.Uk)((0,$.zw)(t.time_ago)+" by ",1),t.user?((0,s.wg)(),(0,s.j4)(i,{key:0,to:`/user/${t.user}`,class:"link-text"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,$.zw)(t.user),1)])),_:2},1032,["to"])):((0,s.wg)(),(0,s.iD)("a",{key:1,href:t.url},(0,$.zw)(t.domain),9,D))])])])))),256))])])}var C={created(){},computed:{listItems(){return this.$store.state.list}}};const z=(0,l.Z)(C,[["render",H]]);var F=z,x={components:{ListItem:F},mounted(){this.$store.commit("updateLoadingStatus",!1)}};const M=(0,l.Z)(x,[["render",y]]);var B=M;function P(t,e,n,o,r,a){const i=(0,s.up)("list-item");return(0,s.wg)(),(0,s.iD)("div",null,[(0,s.Wm)(i)])}var J={components:{ListItem:F},mounted(){this.$store.commit("updateLoadingStatus",!1)}};const A=(0,l.Z)(J,[["render",P]]);var K=A;function N(t,e,n,o,r,a){const i=(0,s.up)("list-item");return(0,s.wg)(),(0,s.iD)("div",null,[(0,s.Wm)(i)])}var R={components:{ListItem:F},mounted(){this.$store.commit("updateLoadingStatus",!1)}};const q=(0,l.Z)(R,[["render",N]]);var Y=q;function G(t,e,n,o,r,a){const i=(0,s.up)("user-profile");return(0,s.wg)(),(0,s.iD)("div",null,[(0,s.Wm)(i,{info:a.userInfo},{username:(0,s.w5)((()=>[(0,s._)("div",null,(0,$.zw)(a.userInfo.id),1)])),time:(0,s.w5)((()=>[(0,s._)("span",null,(0,$.zw)("Joined"+a.userInfo.created)+", ",1)])),karma:(0,s.w5)((()=>[(0,s._)("span",null,(0,$.zw)(a.userInfo.carma),1)])),_:1},8,["info"])])}const Q={class:"user-container"},V=(0,s._)("div",null,[(0,s._)("i",{class:"fa-solid fa-user"})],-1),X={class:"user-description"},tt={class:"time"};function et(t,e,n,o,r,a){return(0,s.wg)(),(0,s.iD)("div",Q,[V,(0,s._)("div",X,[(0,s.WI)(t.$slots,"username"),(0,s._)("div",tt,[(0,s.WI)(t.$slots,"time")]),(0,s.WI)(t.$slots,"karma")])])}var nt={props:{info:Object}};const ot=(0,l.Z)(nt,[["render",et]]);var st=ot,rt={components:{UserProfile:st},computed:{userInfo(){return this.$store.state.user}},created(){const t=this.$route.params.id;console.log(t),this.$store.dispatch("FETCH_USER",t)}};const at=(0,l.Z)(rt,[["render",G]]);var it=at;const ct={class:"content-container"},ut=["innerHTML"];function lt(t,e,n,o,r,a){const i=(0,s.up)("router-link"),c=(0,s.up)("user-profile");return(0,s.wg)(),(0,s.iD)("div",null,[(0,s._)("section",null,[(0,s.Wm)(c,{"props:info":"fetchedItem"},{username:(0,s.w5)((()=>[(0,s.Wm)(i,{to:`/user/${t.fetchedItem.user}`,class:"link-text"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,$.zw)(t.fetchedItem.user),1)])),_:1},8,["to"])])),time:(0,s.w5)((()=>[(0,s.Uk)((0,$.zw)("Posted "+t.fetchedItem.time_ago),1)])),_:1})]),(0,s._)("section",null,[(0,s._)("h2",null,(0,$.zw)(t.fetchedItem.title),1)]),(0,s._)("section",ct,[(0,s._)("div",{innerHTML:t.fetchedItem.content},null,8,ut)])])}var dt=n(907),mt={components:{UserProfile:st},computed:{...(0,dt.Se)(["fetchedItem"])},created(){const t=this.$route.params.id;console.log(this.$route.params.id),this.$store.dispatch("FETCH_ITEM",t)}};const pt=(0,l.Z)(mt,[["render",lt],["__scopeId","data-v-cb1c3b5e"]]);var ft=pt,ht={SET_NEWS(t,e){t.news=e},SET_JOBS(t,e){t.jobs=e},SET_ASK(t,e){t.ask=e},SET_LIST(t,e){t.list=e},SET_USER(t,e){t.user=e},SET_ITEM(t,e){t.item=e},updateLoadingStatus(t,e){t.loadingStatus=e}},wt=n(154);const gt={baseUrl:"https://api.hnpwa.com/v0/"};async function vt(){try{const t=await wt.Z.get(`${gt.baseUrl}news/1.json`);return t}catch(t){console.log(t)}}async function _t(){try{const t=await wt.Z.get(`${gt.baseUrl}ask/1.json`);return t}catch(t){console.log(t)}}async function St(){try{return await wt.Z.get(`${gt.baseUrl}jobs/1.json`)}catch(t){console.log(t)}}async function Tt(t){try{return await wt.Z.get(`${gt.baseUrl}${t}/1.json`)}catch(e){console.log(e)}}async function kt(t){try{return await wt.Z.get(`${gt.baseUrl}user/${t}.json`)}catch(e){console.log(e)}}async function Et(t){try{return await wt.Z.get(`${gt.baseUrl}item/${t}.json`)}catch(e){console.log(e)}}var bt={async FETCH_NEWS(t){const e=await vt();return t.commit("SET_NEWS",e.data),e},FETCH_JOBS({commit:t}){return St().then((({data:e})=>{t("SET_JOBS",e)})).catch((t=>console.log(t)))},async FETCH_ASK({commit:t}){try{const e=await _t();return t("SET_ASK",e.data),e}catch(e){console.log(e)}},async FETCH_LIST({commit:t},e){const n=await Tt(e);return t("SET_LIST",n.data),n},FETCH_USER({commit:t},e){return kt(e).then((({data:e})=>{t("SET_USER",e)})).catch((t=>console.log(t)))},FETCH_ITEM({commit:t},e){return Et(e).then((({data:e})=>{t("SET_ITEM",e)})).catch((t=>console.log(t)))}};const It=(0,dt.MT)({state:{news:[],jobs:[],ask:[],user:{},item:{},list:[],loadingStatus:!1},getters:{fetchedItem(t){return t.item}},mutations:ht,actions:bt}),yt=[{path:"/",redirect:"news"},{path:"/news",name:"news",component:B,beforeEnter:(t,e,n)=>{It.commit("updateLoadingStatus",!0),It.dispatch("FETCH_LIST",t.name).then((()=>{console.log("news로 넘어감"),n()})).catch((t=>{console.log(t)}))}},{path:"/ask",name:"ask",component:Y,beforeEnter:(t,e,n)=>{It.commit("updateLoadingStatus",!0),It.dispatch("FETCH_LIST",t.name).then((()=>{console.log("ask로 넘어감"),n()})).catch((t=>{console.log(t)}))}},{path:"/jobs",name:"jobs",component:K,beforeEnter:(t,e,n)=>{It.commit("updateLoadingStatus",!0),It.dispatch("FETCH_LIST",t.name).then((()=>{console.log("jobs로 넘어감"),n()})).catch((t=>{console.log(t)}))}},{path:"/user/:id",component:it},{path:"/item/:id",component:ft}],$t=(0,I.p7)({history:(0,I.PO)(),routes:yt}),Ut=(0,o.ri)(b);Ut.use($t),Ut.use(It),Ut.mount("#app")}},e={};function n(o){var s=e[o];if(void 0!==s)return s.exports;var r=e[o]={exports:{}};return t[o](r,r.exports,n),r.exports}n.m=t,function(){var t=[];n.O=function(e,o,s,r){if(!o){var a=1/0;for(l=0;l<t.length;l++){o=t[l][0],s=t[l][1],r=t[l][2];for(var i=!0,c=0;c<o.length;c++)(!1&r||a>=r)&&Object.keys(n.O).every((function(t){return n.O[t](o[c])}))?o.splice(c--,1):(i=!1,r<a&&(a=r));if(i){t.splice(l--,1);var u=s();void 0!==u&&(e=u)}}return e}r=r||0;for(var l=t.length;l>0&&t[l-1][2]>r;l--)t[l]=t[l-1];t[l]=[o,s,r]}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,o){var s,r,a=o[0],i=o[1],c=o[2],u=0;if(a.some((function(e){return 0!==t[e]}))){for(s in i)n.o(i,s)&&(n.m[s]=i[s]);if(c)var l=c(n)}for(e&&e(o);u<a.length;u++)r=a[u],n.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return n.O(l)},o=self["webpackChunkvue_news"]=self["webpackChunkvue_news"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(365)}));o=n.O(o)})();
//# sourceMappingURL=app.cb73395c.js.map