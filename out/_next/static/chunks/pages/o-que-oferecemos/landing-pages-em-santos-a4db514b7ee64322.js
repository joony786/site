(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[939],{8054:function(n,e,r){"use strict";r.d(e,{Z:function(){return E}});var o,i,a,t,s,d,l,c,u,m,h=r(266),p=r(809),f=r.n(p),g=r(2175),x=r(4231),b=r(2209),v=r(7379),j=(0,v.F4)(o||(o=(0,b.Z)(["\n  0%{width: 5%;}\n  100%{width: 100%;}\n"]))),w=v.ZP.div(i||(i=(0,b.Z)(["\n  display: ",";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n\n  .progress-bar{\n    height: 7px;\n    transition-property: width, background-color;\n  }\n  .progress-moved .progress-bar{\n      width: 100%;\n      background-color: #33afad;\n      animation: "," 2s infinite;\n    }\n"])),(function(n){return n.loader?"unset":"none"}),j),Z=r(5893),y=function(n){var e=n.loader;return(0,Z.jsx)(w,{loader:e,children:(0,Z.jsx)("div",{className:"progress-moved",children:(0,Z.jsx)("div",{className:"progress-bar"})})})},P=v.ZP.form(a||(a=(0,b.Z)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n\n  @media (min-width: 768px){\n    margin: 0;\n    justify-content: center;\n  }\n"])));function _(n){var e=n.touched,r=n.error;return e&&r?"#e92929":function(n){return n?"#33afad":"#ccc"}(e)}var k=v.ZP.input(t||(t=(0,b.Z)(["\n  border: 1px solid #efefef;\n  border-bottom: 3px solid ",";\n  border-radius: none;\n  box-sizing: border-box;\n  display: block;\n  font-size: 14px;\n  font-family: 'Poppins', sans-serif;\n  font-weight: 500;\n  padding: .75rem;\n  margin: 1.2rem 0 1.7rem;\n  width: 100%;\n  outline: none;\n\n  :focus{\n    background-color: white;\n    border-bottom-color: ",";\n  }\n\n  ::placeholder {\n    font-weight: 300;\n  }\n\n  @media (min-width: 640px) {\n    padding: 1.5rem;\n    font-size: 15px;\n  }\n"])),_,(function(n){var e=n.touched,r=n.error;return e&&r?"#e92929":"#1a3968"})),z=v.ZP.textarea(s||(s=(0,b.Z)(["\n  border: 1px solid #efefef;\n  border-bottom: 3px solid ",";\n  box-sizing: border-box;\n  font-family: 'Poppins', sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n  min-height: 280px;\n  padding: .75rem;\n  min-width: 100%;\n  width: 100%;\n  max-width: 100%;\n  margin: 1.2rem 0 1.7rem;\n  outline: none;\n\n  :focus{\n    background-color: white;\n    border-bottom-color: ",";\n  }\n\n  ::placeholder {\n    font-weight: 300;\n  }\n\n  @media (min-width: 640px) {\n    padding: 1.5rem;\n    font-size: 15px;\n  }\n"])),_,(function(n){var e=n.touched,r=n.error;return e&&r?"#e92929":"#1a3968"})),S=v.ZP.div(d||(d=(0,b.Z)(["\n  position: relative;\n"]))),C=v.ZP.div(l||(l=(0,b.Z)(["\n  color: #e92929;\n  font-size: 13px;\n  font-weight: 600;\n  position: absolute;\n  bottom: 0;\n\n  @media (min-width: 480px) {\n    font-size: 14px;\n  }\n"]))),N=v.ZP.button(c||(c=(0,b.Z)(["\n  align-self: end;\n  animation-duration: 20s;\n  background-color: #1a3968;\n  border: 1px solid #1a3968;\n  color: white;\n  cursor: ",";\n  font-size: 14px;\n  font-family: 'Poppins', sans-serif;\n  font-weight: 700;\n  padding: 1rem;\n  position: relative;\n  margin: 1rem 0;\n  text-transform: uppercase;\n  transition: all .15s ease;\n  user-select: none;\n\n  :active{\n    background-color: #122746;\n    border: 1px solid #f7f7f7;\n  }\n\n  @media (min-width: 640px) {\n    padding: 1.25rem;\n    font-size: 16px;\n    width: 257px;\n\n    :active{\n      background-color: #122746;\n      border: 1px solid #f7f7f7;\n    }\n  }\n\n  @media (min-width: 870px) {\n    :hover {\n      background-color:  #26508f;\n      border-color: #26508f;\n    }\n\n    :active{\n      background-color: #122746;\n      border: 1px solid #f7f7f7;\n    }\n  }\n"])),(function(n){return n.loader?"not-allowed":"pointer"})),O=v.ZP.div(u||(u=(0,b.Z)(["\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n\n  @media (min-width: 1200px) {\n    flex-wrap: nowrap;\n  }\n"]))),B=v.ZP.div(m||(m=(0,b.Z)(["\n  width: 100%;\n\n  @media (min-width: 1000px) {\n    width: 49%;\n  }\n"]))),E=function(n){var e=n.setFormStatus;function r(n){var e={service_id:"service_mpjyx3g",template_id:"template_w8vin3g",user_id:"user_rizvggYkHJhDIQF4MJsbR",template_params:n},r={method:"POST",body:JSON.stringify(e),headers:new Headers({"Content-type":"application/json"})};return fetch("https://api.emailjs.com/api/v1.0/email/send",r)}var o=(0,g.TA)({initialValues:{name:"",phone:"",email:"",subject:"",message:""},validationSchema:x.Ry({name:x.Z_().min(3,"M\xednimo 3 letras").required("Preencha o nome"),phone:x.Z_().min(15,"No m\xednimo 11 n\xfameros").required("Preencha o n\xfamero"),email:x.Z_().email("E-mail inv\xe1lido").required("Preencha o e-mail"),subject:x.Z_().required("Preencha o assunto"),message:x.Z_().required("Preencha a mensagem")}),onSubmit:function(){var n=(0,h.Z)(f().mark((function n(i){var a;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r(i);case 2:a=n.sent,e(a.ok?"success":"error"),a.ok&&o.resetForm();case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()});return(0,Z.jsxs)(P,{onSubmit:o.handleSubmit,"data-aos":"fade-up",children:[(0,Z.jsxs)(O,{children:[(0,Z.jsxs)(B,{children:[(0,Z.jsx)(k,{name:"name",type:"text",placeholder:"Nome",onChange:o.handleChange,onBlur:o.handleBlur,value:o.values.name,error:o.errors.name,touched:o.touched.name,readOnly:o.isSubmitting}),o.touched.name&&o.errors.name&&(0,Z.jsx)(S,{children:(0,Z.jsx)(C,{children:o.errors.name})})]}),(0,Z.jsxs)(B,{children:[(0,Z.jsx)(k,{name:"phone",type:"text",maxLength:15,placeholder:"Telefone",onChange:function(n){return o.setFieldValue("phone",n.target.value.replace(/\D/g,"").replace(/^(\d{2})(\d)/g,"($1) $2").replace(/(\d)(\d{4})$/,"$1-$2"))},onBlur:o.handleBlur,value:o.values.phone,error:o.errors.phone,touched:o.touched.phone,readOnly:o.isSubmitting}),o.touched.phone&&o.errors.phone&&(0,Z.jsx)(S,{children:(0,Z.jsx)(C,{children:o.errors.phone})})]})]}),(0,Z.jsxs)(O,{children:[(0,Z.jsxs)(B,{children:[(0,Z.jsx)(k,{name:"email",type:"text",placeholder:"E-mail",onChange:o.handleChange,onBlur:o.handleBlur,value:o.values.email,error:o.errors.email,touched:o.touched.email,readOnly:o.isSubmitting}),o.touched.email&&o.errors.email&&(0,Z.jsx)(S,{children:(0,Z.jsx)(C,{children:o.errors.email})})]}),(0,Z.jsxs)(B,{children:[(0,Z.jsx)(k,{name:"subject",type:"text",placeholder:"Assunto",onChange:o.handleChange,onBlur:o.handleBlur,value:o.values.subject,error:o.errors.subject,touched:o.touched.subject,readOnly:o.isSubmitting}),o.touched.subject&&o.errors.subject&&(0,Z.jsx)(S,{children:(0,Z.jsx)(C,{children:o.errors.subject})})]})]}),(0,Z.jsx)(z,{name:"message",type:"submit",placeholder:"Mensagem",onChange:o.handleChange,onBlur:o.handleBlur,value:o.values.message,error:o.errors.message,touched:o.touched.message,readOnly:o.isSubmitting}),o.touched.message&&o.errors.message&&(0,Z.jsx)(S,{children:(0,Z.jsx)(C,{children:o.errors.message})}),(0,Z.jsxs)(N,{disabled:o.isSubmitting,type:"submit",loader:o.isSubmitting,className:"loader",children:["Enviar Mensagem",(0,Z.jsx)(y,{loader:o.isSubmitting})]})]})}},4399:function(n,e,r){"use strict";var o=r(1237),i=r(9878),a=r(8054),t=r(14),s=r(5893);e.Z=function(n){var e=n.children;return(0,s.jsxs)(t.W2,{children:[(0,s.jsx)(o.Z,{stat:!0}),(0,s.jsxs)(t.CL,{children:[e,(0,s.jsx)(t.kI,{children:"Ficou Interessado? Entre em contato e solicite um or\xe7amento."}),(0,s.jsx)(a.Z,{setFormStatus:function(){}})]}),(0,s.jsx)(i.Z,{})]})}},14:function(n,e,r){"use strict";r.d(e,{W2:function(){return l},CL:function(){return c},kI:function(){return u},gO:function(){return m}});var o,i,a,t,s=r(2209),d=r(7379),l=d.ZP.section(o||(o=(0,s.Z)(["\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  background: #f7f7f7;\n  "]))),c=d.ZP.div(i||(i=(0,s.Z)(["\n  border-bottom: 1px solid #b3b3b3;\n  box-sizing: border-box;\n  margin: auto;\n  max-width: 1400px;\n  padding: 1.25rem;\n\n  @media (min-width: 980px){\n    padding-left: 2rem;\n    padding-right: 2rem;\n  }\n  @media (min-width: 980px){\n    padding: 0 2rem;\n  }\n  h1{\n    color: #1a3968;\n    font-weight: 800;\n    font-size: 30px;\n    margin: 0;\n  }\n  p{\n    margin: .3rem 0;\n    font-size: 16px;\n    line-height: 2;\n    font-weight: 400;\n  }\n\n\n"]))),u=d.ZP.h3(a||(a=(0,s.Z)(["\n    color: #1a3968;\n    font-size: 19px;\n"]))),m=d.ZP.div(t||(t=(0,s.Z)(["\n  background: white;\n  padding: 1rem;\n  margin-top: 4rem;\n  margin-bottom: 1.5rem;\n\n  @media (min-width: 980px){\n    margin-top: 5rem;\n  }\n"])))},7555:function(n,e,r){"use strict";r.r(e);var o=r(4399),i=r(14),a=r(5893);e.default=function(){return(0,a.jsx)(o.Z,{children:(0,a.jsxs)(i.gO,{children:[(0,a.jsx)("h1",{children:"Landing Pages"}),(0,a.jsx)("p",{children:"Landing Pages s\xe3o sites de uma p\xe1gina \xfanica com forte apelo comercial e voltados para campanhas para apresenta\xe7\xe3o de eventos, servi\xe7os ou produtos."}),(0,a.jsx)("p",{children:"Uma Landing Page \xe9 capaz de apresentar resumidamente as informa\xe7\xf5es da sua campanha e oferecer mecanismos para coletas de leads, ou seja, pessoas interessadas que podem se tornar clientes."}),(0,a.jsx)("p",{children:"A Zakta desenvolve landing pages modernas, personalizadas e totalmente focadas em resultados!"}),(0,a.jsx)("p",{children:"Temos expertise para lhe propor ideias e criar a melhor landing page para a sua campanha."}),(0,a.jsx)("p",{children:"Solicite um or\xe7amento e conhe\xe7a as nossas estrat\xe9gias para cria\xe7\xe3o de Landing Pages."})]})})}},6201:function(n,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/o-que-oferecemos/landing-pages-em-santos",function(){return r(7555)}])}},function(n){n.O(0,[355,821,774,888,179],(function(){return e=6201,n(n.s=e);var e}));var e=n.O();_N_E=e}]);