(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{10:function(t,e,o){"use strict";var i=o(40),a=o.n(i).a.create({baseURL:"https://autoidentificazione.betitaly.it/api"}),n=function(){return a},s={props:{title:String,number:String,buttonText:String,goTo:String,isDisabled:Boolean,payload:Object,isFiles:Boolean},data:function(){return{dialog:!1,text:"",btnLoading:!1}},computed:{form:function(){return this.$store.state.form}},methods:{handleStep:function(){this.$store.commit("setStep",this.payload),this.payload?this.payload.email?this.sendVerificationMail():this.payload.verification_code?this.sendMailVerificationCode():this.payload.telefono?this.sendVerificationSMS():this.payload.sms_code?this.sendSMSVerificationCode():this.isFiles?this.handleFileUpload():this.payload.selfie?this.handleSelfieUpload():this.$router.push({name:this.goTo}):this.$router.push({name:this.goTo})},handleFileUpload:function(){var t=this;this.btnLoading=!0;var e=new FormData;e.append("user_id",localStorage.userId),e.append("fronte",this.payload.fronte),e.append("retro",this.payload.retro),e.append("codice_fiscale",this.payload.codice_fiscale),n().post("/files",e).then((function(e){200===e.status?(console.log(e),t.btnLoading=!1,t.openDialog("I file sono stati caricati con successo")):(t.btnLoading=!1,alert("Si è verificato un problema durante il caricamento dei file, riprova più tardi"))})).catch((function(e){return t.btnLoading=!1,alert(e)}))},handleSelfieUpload:function(){var t=this;this.btnLoading=!0;var e=new FormData;e.append("user_id",localStorage.userId),e.append("selfie",this.payload.selfie),n().post("/selfie",e).then((function(e){200===e.status?(console.log(e),t.btnLoading=!1,t.openDialog("I file sono stati caricati con successo")):(t.btnLoading=!1,alert("Si è verificato un problema durante il caricamento dei file, riprova più tardi"))})).catch((function(e){return t.btnLoading=!1,alert(e)}))},sendVerificationMail:function(){var t=this;this.btnLoading=!0,n().post("/send-verification-mail",this.$store.state.form).then((function(e){t.btnLoading=!1,t.$router.push({name:t.goTo}),console.log("response",e)})).catch((function(e){return t.btnLoading=!1,alert(e)}))},sendMailVerificationCode:function(){var t=this;console.log(this.payload),this.btnLoading=!0,n().post("/send-verification-code",this.payload).then((function(e){200===e.status?(console.log(e),localStorage.userId=e.data.user_id,t.btnLoading=!1,t.$router.push({name:t.goTo})):(t.btnLoading=!1,alert("Si è verificato un problema durante la verifica della tua email, riprova"))})).catch((function(e){return t.btnLoading=!1,alert(e)}))},sendVerificationSMS:function(){var t=this;console.log(this.payload);var e={telefono:this.payload.telefono,user_id:localStorage.userId};this.btnLoading=!0,n().post("/send-verification-sms",e).then((function(e){200===e.status?(console.log(e),t.btnLoading=!1,t.$router.push({name:t.goTo})):(t.btnLoading=!1,alert("Si è verificato un problema durante la verifica della tua email, riprova"))})).catch((function(e){return t.btnLoading=!1,alert(e)}))},sendSMSVerificationCode:function(){var t=this;this.btnLoading=!0;var e={verification_code:this.payload.sms_code,user_id:localStorage.userId};n().post("/verify-sms-code",e).then((function(e){200===e.status?(console.log(e),t.btnLoading=!1,t.$router.push({name:t.goTo})):(t.btnLoading=!1,alert("Si è verificato un problema durante la verifica della tua email, riprova"))})).catch((function(e){return t.btnLoading=!1,alert(e)}))},openDialog:function(t){this.text=t,this.dialog=!0},closeDialog:function(){this.dialog=!1,this.$router.push({name:this.goTo})}}},l=o(8),r=o(9),c=o.n(r),u=o(143),d=o(164),f=o(42),m=o(19),v=o(162),p=o(165),b=o(147),h=o(144),g=o(145),_=o(38),x=o(163),C=o(146),V=o(43),I=o(23),S=Object(l.a)(s,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-card",{staticClass:"mx-auto",attrs:{"max-width":"500"}},[o("v-toolbar",{attrs:{color:"#f2f2f2",light:"",elevation:"0"}},[o("v-toolbar-title",{staticClass:"mx-auto"},[o("v-avatar",{staticClass:"mr-2",attrs:{color:"#160c49",size:"42"}},[o("span",{staticClass:"white--text headline"},[t._v(t._s(t.number))])]),t._v(" "),o("strong",{staticStyle:{color:"#150b48"}},[t._v(t._s(t.title))])],1)],1),t._v(" "),o("v-card-text",{staticClass:"pt-4 pb-4 px-8"},[o("v-container",{staticClass:"mx-auto"},[o("v-form",{on:{submit:function(e){return e.preventDefault(),t.handleStep(e)}}},[t._t("default"),t._v(" "),t.goTo&&t.buttonText?o("v-row",[o("v-col",[t.btnLoading?o("v-btn",{staticClass:"white--text",attrs:{color:"#160c49",block:"",large:"",type:"submit",loading:"",disabled:""}},[o("strong",[t._v(t._s(t.buttonText))])]):o("v-btn",{staticClass:"white--text",attrs:{color:"#160c49",block:"",large:"",type:"submit",disabled:t.isDisabled}},[o("strong",[t._v(t._s(t.buttonText))])])],1)],1):t._e()],2)],1)],1),t._v(" "),o("v-dialog",{attrs:{width:"500",persistent:""},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[o("v-card",[o("v-card-text",[o("v-container",[o("v-row",{staticClass:"d-flex flex-column align-center justify-center"},[o("v-col",{staticClass:"d-flex justify-center"},[o("v-icon",{attrs:{color:"success",size:"150"}},[t._v("mdi-check")])],1),t._v(" "),o("v-col",[o("h2",{staticClass:"text-center"},[t._v(t._s(t.text))])])],1)],1)],1),t._v(" "),o("v-divider"),t._v(" "),o("v-card-actions",[o("v-spacer"),t._v(" "),o("v-btn",{attrs:{color:"primary",text:""},on:{click:t.closeDialog}},[t._v(" Chiudi ")])],1)],1)],1)],1)}),[],!1,null,null,null);e.a=S.exports;c()(S,{VAvatar:u.a,VBtn:d.a,VCard:f.a,VCardActions:m.a,VCardText:m.b,VCol:v.a,VContainer:p.a,VDialog:b.a,VDivider:h.a,VForm:g.a,VIcon:_.a,VRow:x.a,VSpacer:C.a,VToolbar:V.a,VToolbarTitle:I.a})},148:function(t,e,o){"use strict";o.r(e);var i={components:{Step:o(10).a},data:function(){return{form:{nome:"",cognome:"",codice_fiscale:"",username:""},rules:{counterMin:function(t){return 16===t.length||"Min 16 caratteri"},counterMax:function(t){return t.length<=16||"Max 16 caratteri"}}}},computed:{isDisabled:function(){return!(this.form.nome&&this.form.cognome&&this.form.codice_fiscale&&16===this.form.codice_fiscale.length&&this.form.username)}}},a=o(8),n=o(9),s=o.n(n),l=o(162),r=o(145),c=o(38),u=o(163),d=o(39),f=Object(a.a)(i,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("step",{attrs:{title:"AUTOIDENTIFICAZIONE",number:"1",buttonText:"PROCEDI",goTo:"StepTwo",isDisabled:t.isDisabled,payload:t.form}},[o("v-form",{on:{submit:function(e){return e.preventDefault(),t.handleStep(e)}}},[o("v-row",[o("v-col",{staticClass:"d-flex justify-center",attrs:{cols:"12",md:"4"}},[o("v-icon",{attrs:{size:"150"}},[t._v("mdi-shield-key-outline")])],1),t._v(" "),o("v-col",{attrs:{cols:"12",md:"8"}},[o("v-text-field",{attrs:{dense:"",color:"#160c49",label:"Nome",outlined:""},model:{value:t.form.nome,callback:function(e){t.$set(t.form,"nome",e)},expression:"form.nome"}}),t._v(" "),o("v-text-field",{attrs:{dense:"",color:"#160c49",label:"Cognome",outlined:""},model:{value:t.form.cognome,callback:function(e){t.$set(t.form,"cognome",e)},expression:"form.cognome"}}),t._v(" "),o("v-text-field",{attrs:{dense:"",color:"#160c49",counter:"16",rules:[t.rules.counterMax,t.rules.counterMin],label:"Codice Fiscale",outlined:""},model:{value:t.form.codice_fiscale,callback:function(e){t.$set(t.form,"codice_fiscale",e)},expression:"form.codice_fiscale"}}),t._v(" "),o("v-text-field",{attrs:{dense:"",color:"#160c49",label:"Username",outlined:""},model:{value:t.form.username,callback:function(e){t.$set(t.form,"username",e)},expression:"form.username"}})],1)],1)],1)],1)}),[],!1,null,null,null);e.default=f.exports;s()(f,{VCol:l.a,VForm:r.a,VIcon:c.a,VRow:u.a,VTextField:d.a})},149:function(t,e,o){"use strict";o.r(e);var i={components:{Step:o(10).a},data:function(){return{form:{email:""},rules:{required:function(t){return!!t||"Obligatorio."},email:function(t){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t)||"E-mail non valido"}}}},computed:{isDisabled:function(){return!this.form.email||!0!==this.rules.email(this.form.email)}}},a=o(8),n=o(9),s=o.n(n),l=o(162),r=o(38),c=o(163),u=o(39),d=Object(a.a)(i,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("step",{attrs:{title:"VERIFICA E-MAIL",number:"2",buttonText:"PROCEDI",goTo:"StepThree",isDisabled:t.isDisabled,payload:t.form}},[o("v-row",[o("v-col",{staticClass:"d-flex justify-center align-center",attrs:{cols:"12",md:"4"}},[o("v-icon",{attrs:{size:"150"}},[t._v("mdi-email-outline")])],1),t._v(" "),o("v-col",{staticClass:"d-flex flex-column align-left",attrs:{cols:"12",md:"8"}},[o("p",{staticClass:"text"},[t._v("\n        Inserisci indirizzo e-mail con cui ti sei registrato doce ti invieremo\n        il codice sicurezza\n      ")]),t._v(" "),o("v-text-field",{attrs:{dense:"",label:"Inserisci e-mail",outlined:"",rules:[t.rules.required,t.rules.email],type:"email"},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1)],1)],1)}),[],!1,null,null,null);e.default=d.exports;s()(d,{VCol:l.a,VIcon:r.a,VRow:c.a,VTextField:u.a})},150:function(t,e,o){"use strict";o.r(e);var i={components:{Step:o(10).a},data:function(){return{form:{verification_code:""}}},computed:{isDisabled:function(){return!1}}},a=o(8),n=o(9),s=o.n(n),l=o(162),r=o(145),c=o(38),u=o(163),d=o(39),f=Object(a.a)(i,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("step",{attrs:{title:"VERIFICA E-MAIL",number:"3",buttonText:"PROCEDI",goTo:"StepFour",isDisabled:t.isDisabled,payload:t.form}},[o("v-row",[o("v-col",{staticClass:"d-flex justify-center align-center",attrs:{cols:"12",md:"6"}},[o("v-icon",{attrs:{size:"150"}},[t._v("mdi-cellphone-link")])],1),t._v(" "),o("v-col",{staticClass:"d-flex align-center",attrs:{cols:"12",md:"6"}},[o("v-form",[o("p",[t._v("\n          Per procedere alla verifica, inserisci il codice che ti abbiamo\n          inviato sulla e-mail di registrazione.\n        ")]),t._v(" "),o("v-text-field",{attrs:{dense:"",label:"Inserisci codice",outlined:""},model:{value:t.form.verification_code,callback:function(e){t.$set(t.form,"verification_code",e)},expression:"form.verification_code"}})],1)],1)],1)],1)}),[],!1,null,null,null);e.default=f.exports;s()(f,{VCol:l.a,VForm:r.a,VIcon:c.a,VRow:u.a,VTextField:d.a})},151:function(t,e,o){"use strict";o.r(e);var i={components:{Step:o(10).a}},a=o(8),n=o(9),s=o.n(n),l=o(162),r=o(38),c=o(163),u=Object(a.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("step",{attrs:{title:"VERIFICA E-MAIL",number:"4",buttonText:"PROCEDI",goTo:"StepFive"}},[e("v-row",[e("v-col",{staticClass:"d-flex justify-center align-center",attrs:{cols:"12"}},[e("v-icon",{attrs:{color:"success",size:"150"}},[this._v("mdi-check")])],1),this._v(" "),e("v-col",{staticClass:"d-flex align-center",attrs:{cols:"12"}},[e("p",{staticClass:"text-center mx-auto"},[this._v("\n        Il tuo indirizzo e-mail è stato verificato con successo\n      ")])])],1)],1)}),[],!1,null,null,null);e.default=u.exports;s()(u,{VCol:l.a,VIcon:r.a,VRow:c.a})},152:function(t,e,o){"use strict";o.r(e);var i={components:{Step:o(10).a},data:function(){return{form:{telefono:""}}},computed:{isDisabled:function(){return!this.form.telefono}}},a=o(8),n=o(9),s=o.n(n),l=o(162),r=o(38),c=o(163),u=o(39),d=Object(a.a)(i,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("step",{attrs:{title:"VERIFICA NUMERO DI TELEFONO",number:"5",buttonText:"PROCEDI",goTo:"StepSix",isDisabled:t.isDisabled,payload:t.form}},[o("v-row",[o("v-col",{staticClass:"d-flex justify-center align-center",attrs:{cols:"12",md:"6"}},[o("v-icon",{attrs:{size:"150"}},[t._v("mdi-cellphone-iphone")])],1),t._v(" "),o("v-col",{staticClass:"d-flex flex-column align-left",attrs:{cols:"12",md:"6"}},[o("p",[t._v("\n        Inserisci il numero di telefono con cui ti sei registrato dove ti\n        invieremo il codice sicurezza.\n      ")]),t._v(" "),o("v-text-field",{attrs:{dense:"",label:"Inserisci numero",outlined:""},model:{value:t.form.telefono,callback:function(e){t.$set(t.form,"telefono",e)},expression:"form.telefono"}})],1)],1)],1)}),[],!1,null,null,null);e.default=d.exports;s()(d,{VCol:l.a,VIcon:r.a,VRow:c.a,VTextField:u.a})},153:function(t,e,o){"use strict";o.r(e);var i={components:{Step:o(10).a},data:function(){return{form:{sms_code:""}}},computed:{isDisabled:function(){return!this.form.sms_code}}},a=o(8),n=o(9),s=o.n(n),l=o(162),r=o(145),c=o(38),u=o(163),d=o(39),f=Object(a.a)(i,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("step",{attrs:{title:"VERIFICA NUMERO DI TELEFONO",number:"6",buttonText:"PROCEDI",goTo:"StepSeven",isDisabled:t.isDisabled,payload:t.form}},[o("v-row",[o("v-col",{staticClass:"d-flex justify-center align-center",attrs:{cols:"12",md:"6"}},[o("v-icon",{attrs:{size:"150"}},[t._v("mdi-cellphone-link")])],1),t._v(" "),o("v-col",{staticClass:"d-flex align-center",attrs:{cols:"12",md:"6"}},[o("v-form",[o("p",[t._v("\n          Per procedere alla verifica, inserisci il codice che ti abbiamo\n          inviato sul numero cui ti sei registrato.\n        ")]),t._v(" "),o("v-text-field",{attrs:{dense:"",label:"Inserisci codice",outlined:""},model:{value:t.form.sms_code,callback:function(e){t.$set(t.form,"sms_code",e)},expression:"form.sms_code"}})],1)],1)],1)],1)}),[],!1,null,null,null);e.default=f.exports;s()(f,{VCol:l.a,VForm:r.a,VIcon:c.a,VRow:u.a,VTextField:d.a})},154:function(t,e,o){"use strict";o.r(e);var i={components:{Step:o(10).a}},a=o(8),n=o(9),s=o.n(n),l=o(162),r=o(38),c=o(163),u=Object(a.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("step",{attrs:{title:"VERIFICA NUMERO DI TELEFONO",number:"7",buttonText:"PROCEDI",goTo:"StepEight"}},[e("v-row",[e("v-col",{staticClass:"d-flex justify-center align-center",attrs:{cols:"12"}},[e("v-icon",{attrs:{color:"success",size:"150"}},[this._v("mdi-check")])],1),this._v(" "),e("v-col",{staticClass:"d-flex align-center",attrs:{cols:"12"}},[e("p",{staticClass:"text-center mx-auto"},[this._v("\n        Il tuo numero di telefono è stato verificato con successo\n      ")])])],1)],1)}),[],!1,null,null,null);e.default=u.exports;s()(u,{VCol:l.a,VIcon:r.a,VRow:c.a})},155:function(t,e,o){"use strict";o.r(e);var i={components:{Step:o(10).a},data:function(){return{form:{fronte:null,retro:null,codice_fiscale:null}}},computed:{isDisabled:function(){return!(this.form.fronte&&this.form.retro&&this.form.codice_fiscale)}}},a=o(8),n=o(9),s=o.n(n),l=o(162),r=o(158),c=o(145),u=o(38),d=o(163),f=Object(a.a)(i,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("step",{attrs:{title:"ALLEGA DOCUMENTO",number:"8",buttonText:"PROCEDI",goTo:"StepNine",isDisabled:t.isDisabled,payload:t.form,isFiles:!0}},[o("v-row",[o("v-col",{staticClass:"d-flex justify-center align-center",attrs:{cols:"12",md:"4"}},[o("v-icon",{attrs:{size:"150"}},[t._v("mdi-file-document-outline")])],1),t._v(" "),o("v-col",{staticClass:"d-flex align-center",attrs:{cols:"12",md:"8"}},[o("v-form",{staticClass:"w-100"},[o("v-file-input",{attrs:{accept:"image/*",label:"Fronte"},model:{value:t.form.fronte,callback:function(e){t.$set(t.form,"fronte",e)},expression:"form.fronte"}}),t._v(" "),o("v-file-input",{attrs:{accept:"image/*",label:"Retro"},model:{value:t.form.retro,callback:function(e){t.$set(t.form,"retro",e)},expression:"form.retro"}}),t._v(" "),o("v-file-input",{attrs:{accept:"image/*",label:"Codice Fiscale"},model:{value:t.form.codice_fiscale,callback:function(e){t.$set(t.form,"codice_fiscale",e)},expression:"form.codice_fiscale"}})],1)],1)],1),t._v(" "),o("v-row",[o("v-col",[o("p",[t._v("\n        I documenti accettati sono: Carta d'identità, Patente e Passaporto.\n        "),o("br"),t._v("\n        Per i nati all'estero e necessario presentare il Passaporto o la Carta\n        d'identità Italiana in corso di validità.\n      ")])])],1)],1)}),[],!1,null,null,null);e.default=f.exports;s()(f,{VCol:l.a,VFileInput:r.a,VForm:c.a,VIcon:u.a,VRow:d.a})},156:function(t,e,o){"use strict";o.r(e);var i={components:{Step:o(10).a},data:function(){return{form:{selfie:null}}}},a=o(8),n=o(9),s=o.n(n),l=o(164),r=o(162),c=o(158),u=o(145),d=o(38),f=o(163),m=Object(a.a)(i,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("step",{attrs:{title:"CONFERMA DOCUMENTO",number:"9",buttonText:"PROCEDI",goTo:"StepTen",payload:t.form}},[o("v-row",[o("v-col",{staticClass:"d-flex justify-center align-center",attrs:{cols:"12",md:"5"}},[o("v-icon",{attrs:{size:"150"}},[t._v("mdi-camera")])],1),t._v(" "),o("v-col",{staticClass:"d-flexalign-center",attrs:{cols:"12",md:"7"}},[o("v-form",{staticClass:"w-100 d-flex flex-column"},[o("p",[t._v("Selfie con documento")]),t._v(" "),o("v-btn",{attrs:{outlined:""}},[t._v("Scatta")]),t._v(" "),o("v-file-input",{staticClass:"mt-4",attrs:{label:"ALLEGA","truncate-length":"15"},model:{value:t.form.selfie,callback:function(e){t.$set(t.form,"selfie",e)},expression:"form.selfie"}})],1)],1)],1)],1)}),[],!1,null,null,null);e.default=m.exports;s()(m,{VBtn:l.a,VCol:r.a,VFileInput:c.a,VForm:u.a,VIcon:d.a,VRow:f.a})},157:function(t,e,o){"use strict";o.r(e);var i={components:{Step:o(10).a}},a=o(8),n=o(9),s=o.n(n),l=o(162),r=o(38),c=o(163),u=Object(a.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("step",{attrs:{title:"OPERAZIONE CONCLUSA",number:"10"}},[e("v-row",[e("v-col",{staticClass:"d-flex justify-center align-center",attrs:{cols:"12"}},[e("v-icon",{attrs:{color:"success",size:"150"}},[this._v("mdi-check")])],1),this._v(" "),e("v-col",{staticClass:"d-flex align-center",attrs:{cols:"12"}},[e("p",{staticClass:"text-center mx-auto"},[this._v("\n        Complimenti! Il processo di autoidentificazione è stato effettuato con\n        successo. A breve riceverai una e-mail di conferma.\n      ")])])],1)],1)}),[],!1,null,null,null);e.default=u.exports;s()(u,{VCol:l.a,VIcon:r.a,VRow:c.a})}}]);