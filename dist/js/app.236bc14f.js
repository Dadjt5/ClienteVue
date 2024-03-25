(function(){"use strict";var e={2327:function(e,o,a){var n=a(5130),t=a(3367),r=a(6768),s=a(4232);const l={id:"app",class:"container"},i={class:"row"},c={class:"col-md-12"},d=(0,r.Lk)("h1",null,"Personas",-1),u={class:"row"},p={class:"col-md-12"};function m(e,o,a,n,t,m){const v=(0,r.g2)("formulario-persona"),h=(0,r.g2)("tabla-personas");return(0,r.uX)(),(0,r.CE)("div",l,[(0,r.Lk)("div",i,[(0,r.Lk)("div",c,[d,(0,r.Lk)("p",null,"Count is "+(0,s.v_)(n.store.count),1)])]),(0,r.Lk)("div",u,[(0,r.Lk)("div",p,[(0,r.bF)(v,{onAddPersona:n.agregarPersona},null,8,["onAddPersona"]),(0,r.bF)(h,{personas:n.personas,onDeletePersona:n.eliminarPersona,onActualizarPersona:n.actualizarPersona},null,8,["personas","onDeletePersona","onActualizarPersona"])])])])}const v={id:"tabla-personas"},h={class:"table"},f=(0,r.Lk)("thead",null,[(0,r.Lk)("tr",null,[(0,r.Lk)("th",null,"Nombre"),(0,r.Lk)("th",null,"Apellido"),(0,r.Lk)("th",null,"Email"),(0,r.Lk)("th",null,"Acciones")])],-1),b={key:0},k=["onUpdate:modelValue"],y={key:1},g={key:2},L=["onUpdate:modelValue"],E={key:3},C={key:4},P=["onUpdate:modelValue"],w={key:5},O={key:6},X=["onClick"],I=["onClick"],j={key:7},F=["onClick"],A=["onClick"],U={key:0,class:"alert alert-info",role:"alert"};function J(e,o,a,t,l,i){return(0,r.uX)(),(0,r.CE)(r.FK,null,[(0,r.Lk)("div",v,[(0,r.Lk)("table",h,[f,(0,r.Lk)("tbody",null,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(a.personas,(o=>((0,r.uX)(),(0,r.CE)("tr",{key:o.id},[l.editando===o.id?((0,r.uX)(),(0,r.CE)("td",b,[(0,r.bo)((0,r.Lk)("input",{type:"text",class:"form-control","onUpdate:modelValue":e=>o.nombre=e},null,8,k),[[n.Jo,o.nombre]])])):((0,r.uX)(),(0,r.CE)("td",y,(0,s.v_)(o.nombre),1)),l.editando===o.id?((0,r.uX)(),(0,r.CE)("td",g,[(0,r.bo)((0,r.Lk)("input",{type:"text",class:"form-control","onUpdate:modelValue":e=>o.apellido=e},null,8,L),[[n.Jo,o.apellido]])])):((0,r.uX)(),(0,r.CE)("td",E,(0,s.v_)(o.apellido),1)),l.editando===o.id?((0,r.uX)(),(0,r.CE)("td",C,[(0,r.bo)((0,r.Lk)("input",{type:"email",class:"form-control","onUpdate:modelValue":e=>o.email=e},null,8,P),[[n.Jo,o.email]])])):((0,r.uX)(),(0,r.CE)("td",w,(0,s.v_)(o.email),1)),l.editando===o.id?((0,r.uX)(),(0,r.CE)("td",O,[(0,r.Lk)("button",{class:"btn btn-success",onClick:e=>i.guardarPersona(o)},"💾 Guardar",8,X),(0,r.Lk)("button",{class:"btn btn-secondary ml-2",onClick:e=>i.cancelarEdicion(o)},"❌ Cancelar",8,I)])):((0,r.uX)(),(0,r.CE)("td",j,[(0,r.Lk)("button",{class:"btn btn-info",onClick:e=>i.editarPersona(o)},"✏️ Editar",8,F),(0,r.Lk)("button",{class:"btn btn-danger ml-2",onClick:a=>e.$emit("delete-persona",o.id)},"🗑️ Eliminar",8,A)]))])))),128))])])]),a.personas.length?(0,r.Q3)("",!0):((0,r.uX)(),(0,r.CE)("div",U," No se han agregado personas "))],64)}var S={name:"tabla-personas",props:{personas:Array},data(){return{editando:null}},methods:{editarPersona(e){this.personaEditada=Object.assign({},e),this.editando=e.id},guardarPersona(e){e.nombre.length&&e.apellido.length&&e.email.length&&(this.$emit("actualizar-persona",e.id,e),this.editando=null)},cancelarEdicion(e){Object.assign(e,this.personaEditada),this.editando=null}}},V=a(1241);const _=(0,V.A)(S,[["render",J]]);var x=_;const N=e=>((0,r.Qi)("data-v-3c0d8f8e"),e=e(),(0,r.jt)(),e),T={id:"formulario-persona"},z={class:"container"},D={class:"row"},$={class:"col-md-4"},K={class:"form-group"},Q=N((()=>(0,r.Lk)("label",null,"Nombre",-1))),G={class:"col-md-4"},M={class:"form-group"},R=N((()=>(0,r.Lk)("label",null,"Apellido",-1))),Y={class:"col-md-4"},q={class:"form-group"},B=N((()=>(0,r.Lk)("label",null,"Email",-1))),H=N((()=>(0,r.Lk)("div",{class:"row"},[(0,r.Lk)("div",{class:"col-md-4"},[(0,r.Lk)("div",{class:"form-group"},[(0,r.Lk)("button",{class:"btn btn-primary"},"Añadir persona")])])],-1))),W={class:"container"},Z={class:"row"},ee={class:"col-md-12"},oe={key:0,class:"alert alert-danger",role:"alert"},ae={key:1,class:"alert alert-success",role:"alert"};function ne(e,o,a,t,l,i){return(0,r.uX)(),(0,r.CE)("div",T,[(0,r.Lk)("form",{onSubmit:o[7]||(o[7]=(0,n.D$)(((...e)=>i.enviarFormulario&&i.enviarFormulario(...e)),["prevent"]))},[(0,r.Lk)("div",z,[(0,r.Lk)("div",D,[(0,r.Lk)("div",$,[(0,r.Lk)("div",K,[Q,(0,r.bo)((0,r.Lk)("input",{ref:"nombre","onUpdate:modelValue":o[0]||(o[0]=e=>l.persona.nombre=e),type:"text",class:(0,s.C4)(["form-control",{"is-invalid":l.procesando&&i.nombreInvalido}]),onFocus:o[1]||(o[1]=(...e)=>i.resetEstado&&i.resetEstado(...e)),onKeypress:o[2]||(o[2]=(...e)=>i.resetEstado&&i.resetEstado(...e))},null,34),[[n.Jo,l.persona.nombre]])])]),(0,r.Lk)("div",G,[(0,r.Lk)("div",M,[R,(0,r.bo)((0,r.Lk)("input",{"onUpdate:modelValue":o[3]||(o[3]=e=>l.persona.apellido=e),type:"text",class:(0,s.C4)(["form-control",{"is-invalid":l.procesando&&i.apellidoInvalido}]),onFocus:o[4]||(o[4]=(...e)=>i.resetEstado&&i.resetEstado(...e))},null,34),[[n.Jo,l.persona.apellido]])])]),(0,r.Lk)("div",Y,[(0,r.Lk)("div",q,[B,(0,r.bo)((0,r.Lk)("input",{"onUpdate:modelValue":o[5]||(o[5]=e=>l.persona.email=e),type:"email",class:(0,s.C4)(["form-control",{"is-invalid":l.procesando&&i.emailInvalido}]),onFocus:o[6]||(o[6]=(...e)=>i.resetEstado&&i.resetEstado(...e))},null,34),[[n.Jo,l.persona.email]])])])]),H]),(0,r.Lk)("div",W,[(0,r.Lk)("div",Z,[(0,r.Lk)("div",ee,[l.error&&l.procesando?((0,r.uX)(),(0,r.CE)("div",oe," Debes rellenar todos los campos! ")):(0,r.Q3)("",!0),l.correcto?((0,r.uX)(),(0,r.CE)("div",ae," La persona ha sido agregada correctamente! ")):(0,r.Q3)("",!0)])])])],32)])}var te={name:"formulario-persona",data(){return{procesando:!1,correcto:!1,error:!1,persona:{nombre:"",email:"",apellido:""}}},methods:{enviarFormulario(){this.procesando=!0,this.resetEstado(),this.nombreInvalido||this.apellidoInvalido||this.emailInvalido?this.error=!0:(this.$emit("add-persona",this.persona),this.$refs.nombre.focus(),this.error=!1,this.correcto=!0,this.procesando=!1,this.persona={nombre:"",apellido:"",email:""})},resetEstado(){this.correcto=!1,this.error=!1}},computed:{nombreInvalido(){return this.persona.nombre.length<1},apellidoInvalido(){return this.persona.apellido.length<1},emailInvalido(){return this.persona.email.length<1}}};const re=(0,V.A)(te,[["render",ne],["__scopeId","data-v-3c0d8f8e"]]);var se=re;const le="localCounter",ie=()=>{const e=localStorage.getItem(le);return e?JSON.parse(e):0},ce=(0,t.nY)("counter",{state:()=>({count:ie()}),getters:{singleCount(e){return e.count}},actions:{increment(){this.count++,localStorage.setItem(le,JSON.stringify(this.count))}}});if(localStorage.getItem("state")){const e=(0,t.Ey)();e.state.value=JSON.parse(localStorage.getItem("state"))}var de=a(144),ue={name:"app",components:{TablaPersonas:x,FormularioPersona:se},setup(){const e=ce(),o=(0,de.KR)([]),a=async()=>{try{const e=await fetch("http://127.0.0.1:8000/api/v1/personas");o.value=await e.json()}catch(e){console.error(e)}},n=async a=>{try{const n=await fetch("http://127.0.0.1:8000/api/v1/personas",{method:"POST",body:JSON.stringify(a),headers:{"Content-type":"application/json; charset=UTF-8"}}),t=await n.json();o.value=[...o.value,t],e.increment()}catch(n){console.error(n)}},t=async e=>{try{await fetch("http://127.0.0.1:8000/api/v1/personas"+e+"/",{method:"DELETE"}),o.value=o.value.filter((o=>o.id!==e))}catch(a){console.error(a)}},s=async(e,a)=>{try{const e=await fetch("http://127.0.0.1:8000/api/v1/personas"+a.id+"/",{method:"PUT",body:JSON.stringify(a),headers:{"Content-type":"application/json; charset=UTF -8"}}),n=await e.json();o.value=o.value.map((e=>e.id===a.id?n:e))}catch(n){console.error(n)}};return(0,r.sV)((()=>{a()})),{personas:o,agregarPersona:n,eliminarPersona:t,actualizarPersona:s,store:e}}};const pe=(0,V.A)(ue,[["render",m]]);var me=pe;const ve=(0,n.Ef)(me),he=(0,t.Ey)();ve.use(he),ve.mount("#app")}},o={};function a(n){var t=o[n];if(void 0!==t)return t.exports;var r=o[n]={exports:{}};return e[n].call(r.exports,r,r.exports,a),r.exports}a.m=e,function(){var e=[];a.O=function(o,n,t,r){if(!n){var s=1/0;for(d=0;d<e.length;d++){n=e[d][0],t=e[d][1],r=e[d][2];for(var l=!0,i=0;i<n.length;i++)(!1&r||s>=r)&&Object.keys(a.O).every((function(e){return a.O[e](n[i])}))?n.splice(i--,1):(l=!1,r<s&&(s=r));if(l){e.splice(d--,1);var c=t();void 0!==c&&(o=c)}}return o}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[n,t,r]}}(),function(){a.n=function(e){var o=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(o,{a:o}),o}}(),function(){a.d=function(e,o){for(var n in o)a.o(o,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:o[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)}}(),function(){var e={524:0};a.O.j=function(o){return 0===e[o]};var o=function(o,n){var t,r,s=n[0],l=n[1],i=n[2],c=0;if(s.some((function(o){return 0!==e[o]}))){for(t in l)a.o(l,t)&&(a.m[t]=l[t]);if(i)var d=i(a)}for(o&&o(n);c<s.length;c++)r=s[c],a.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return a.O(d)},n=self["webpackChunklibreria_vue"]=self["webpackChunklibreria_vue"]||[];n.forEach(o.bind(null,0)),n.push=o.bind(null,n.push.bind(n))}();var n=a.O(void 0,[504],(function(){return a(2327)}));n=a.O(n)})();
//# sourceMappingURL=app.236bc14f.js.map