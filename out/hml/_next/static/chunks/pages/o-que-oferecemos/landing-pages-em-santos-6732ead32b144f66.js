(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[939],{8054:function(n,e,r){"use strict";r.d(e,{Z:function(){return z}});var a,o,i,t,s,d,l,c,u,m,h=r(266),p=r(809),A=r.n(p),g=r(2175),f=r(4231),x=r(2209),b=r(7379),j=(0,b.F4)(a||(a=(0,x.Z)(["\n  0%{width: 5%;}\n  100%{width: 100%;}\n"]))),w=b.ZP.div(o||(o=(0,x.Z)(["\n  display: ",";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n\n  .progress-bar{\n    height: 7px;\n    transition-property: width, background-color;\n  }\n  .progress-moved .progress-bar{\n      width: 100%;\n      background-color: #33afad;\n      animation: "," 2s infinite;\n    }\n"])),(function(n){return n.loader?"unset":"none"}),j),v=r(5893),Z=function(n){var e=n.loader;return(0,v.jsx)(w,{loader:e,children:(0,v.jsx)("div",{className:"progress-moved",children:(0,v.jsx)("div",{className:"progress-bar"})})})},P=b.ZP.form(i||(i=(0,x.Z)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n\n  @media (min-width: 768px){\n    margin: 0;\n    justify-content: center;\n  }\n"])));function y(n){var e=n.touched,r=n.error;return e&&r?"#e92929":function(n){return n?"#33afad":"#ccc"}(e)}var B=b.ZP.input(t||(t=(0,x.Z)(["\n  border: 1px solid #efefef;\n  border-bottom: 3px solid ",";\n  border-radius: none;\n  box-sizing: border-box;\n  display: block;\n  font-size: 14px;\n  font-family: 'Poppins', sans-serif;\n  font-weight: 500;\n  padding: .75rem;\n  margin: 1.2rem 0 1.7rem;\n  width: 100%;\n  outline: none;\n\n  :focus{\n    background-color: white;\n    border-bottom-color: ",";\n  }\n\n  ::placeholder {\n    font-weight: 300;\n  }\n\n  @media (min-width: 640px) {\n    padding: 1.5rem;\n    font-size: 15px;\n  }\n"])),y,(function(n){var e=n.touched,r=n.error;return e&&r?"#e92929":"#1a3968"})),C=b.ZP.textarea(s||(s=(0,x.Z)(["\n  border: 1px solid #efefef;\n  border-bottom: 3px solid ",";\n  box-sizing: border-box;\n  font-family: 'Poppins', sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n  min-height: 280px;\n  padding: .75rem;\n  min-width: 100%;\n  width: 100%;\n  max-width: 100%;\n  margin: 1.2rem 0 1.7rem;\n  outline: none;\n\n  :focus{\n    background-color: white;\n    border-bottom-color: ",";\n  }\n\n  ::placeholder {\n    font-weight: 300;\n  }\n\n  @media (min-width: 640px) {\n    padding: 1.5rem;\n    font-size: 15px;\n  }\n"])),y,(function(n){var e=n.touched,r=n.error;return e&&r?"#e92929":"#1a3968"})),E=b.ZP.div(d||(d=(0,x.Z)(["\n  position: relative;\n"]))),k=b.ZP.div(l||(l=(0,x.Z)(["\n  color: #e92929;\n  font-size: 13px;\n  font-weight: 600;\n  position: absolute;\n  bottom: 0;\n\n  @media (min-width: 480px) {\n    font-size: 14px;\n  }\n"]))),_=b.ZP.button(c||(c=(0,x.Z)(["\n  align-self: end;\n  animation-duration: 20s;\n  background-color: #1a3968;\n  border: 1px solid #1a3968;\n  color: white;\n  cursor: ",";\n  font-size: 14px;\n  font-family: 'Poppins', sans-serif;\n  font-weight: 700;\n  padding: 1rem;\n  position: relative;\n  margin: 1rem 0;\n  text-transform: uppercase;\n  transition: all .15s ease;\n  user-select: none;\n\n  :active{\n    background-color: #122746;\n    border: 1px solid #f7f7f7;\n  }\n\n  @media (min-width: 640px) {\n    padding: 1.25rem;\n    font-size: 16px;\n    width: 257px;\n\n    :active{\n      background-color: #122746;\n      border: 1px solid #f7f7f7;\n    }\n  }\n\n  @media (min-width: 870px) {\n    :hover {\n      background-color:  #26508f;\n      border-color: #26508f;\n    }\n\n    :active{\n      background-color: #122746;\n      border: 1px solid #f7f7f7;\n    }\n  }\n"])),(function(n){return n.loader?"not-allowed":"pointer"})),S=b.ZP.div(u||(u=(0,x.Z)(["\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n\n  @media (min-width: 1200px) {\n    flex-wrap: nowrap;\n  }\n"]))),Q=b.ZP.div(m||(m=(0,x.Z)(["\n  width: 100%;\n\n  @media (min-width: 1000px) {\n    width: 49%;\n  }\n"]))),z=function(n){var e=n.setFormStatus;function r(n){var e={service_id:"service_mpjyx3g",template_id:"template_w8vin3g",user_id:"user_rizvggYkHJhDIQF4MJsbR",template_params:n},r={method:"POST",body:JSON.stringify(e),headers:new Headers({"Content-type":"application/json"})};return fetch("https://api.emailjs.com/api/v1.0/email/send",r)}var a=(0,g.TA)({initialValues:{name:"",phone:"",email:"",subject:"",message:""},validationSchema:f.Ry({name:f.Z_().min(3,"M\xednimo 3 letras").required("Preencha o nome"),phone:f.Z_().min(15,"No m\xednimo 11 n\xfameros").required("Preencha o n\xfamero"),email:f.Z_().email("E-mail inv\xe1lido").required("Preencha o e-mail"),subject:f.Z_().required("Preencha o assunto"),message:f.Z_().required("Preencha a mensagem")}),onSubmit:function(){var n=(0,h.Z)(A().mark((function n(o){var i;return A().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r(o);case 2:i=n.sent,e(i.ok?"success":"error"),i.ok&&a.resetForm();case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()});return(0,v.jsxs)(P,{onSubmit:a.handleSubmit,"data-aos":"fade-up",children:[(0,v.jsxs)(S,{children:[(0,v.jsxs)(Q,{children:[(0,v.jsx)(B,{name:"name",type:"text",placeholder:"Nome",onChange:a.handleChange,onBlur:a.handleBlur,value:a.values.name,error:a.errors.name,touched:a.touched.name,readOnly:a.isSubmitting}),a.touched.name&&a.errors.name&&(0,v.jsx)(E,{children:(0,v.jsx)(k,{children:a.errors.name})})]}),(0,v.jsxs)(Q,{children:[(0,v.jsx)(B,{name:"phone",type:"text",maxLength:15,placeholder:"Telefone",onChange:function(n){return a.setFieldValue("phone",n.target.value.replace(/\D/g,"").replace(/^(\d{2})(\d)/g,"($1) $2").replace(/(\d)(\d{4})$/,"$1-$2"))},onBlur:a.handleBlur,value:a.values.phone,error:a.errors.phone,touched:a.touched.phone,readOnly:a.isSubmitting}),a.touched.phone&&a.errors.phone&&(0,v.jsx)(E,{children:(0,v.jsx)(k,{children:a.errors.phone})})]})]}),(0,v.jsxs)(S,{children:[(0,v.jsxs)(Q,{children:[(0,v.jsx)(B,{name:"email",type:"text",placeholder:"E-mail",onChange:a.handleChange,onBlur:a.handleBlur,value:a.values.email,error:a.errors.email,touched:a.touched.email,readOnly:a.isSubmitting}),a.touched.email&&a.errors.email&&(0,v.jsx)(E,{children:(0,v.jsx)(k,{children:a.errors.email})})]}),(0,v.jsxs)(Q,{children:[(0,v.jsx)(B,{name:"subject",type:"text",placeholder:"Assunto",onChange:a.handleChange,onBlur:a.handleBlur,value:a.values.subject,error:a.errors.subject,touched:a.touched.subject,readOnly:a.isSubmitting}),a.touched.subject&&a.errors.subject&&(0,v.jsx)(E,{children:(0,v.jsx)(k,{children:a.errors.subject})})]})]}),(0,v.jsx)(C,{name:"message",type:"submit",placeholder:"Mensagem",onChange:a.handleChange,onBlur:a.handleBlur,value:a.values.message,error:a.errors.message,touched:a.touched.message,readOnly:a.isSubmitting}),a.touched.message&&a.errors.message&&(0,v.jsx)(E,{children:(0,v.jsx)(k,{children:a.errors.message})}),(0,v.jsxs)(_,{disabled:a.isSubmitting,type:"submit",loader:a.isSubmitting,className:"loader",children:["Enviar Mensagem",(0,v.jsx)(Z,{loader:a.isSubmitting})]})]})}},4399:function(n,e,r){"use strict";var a=r(1237),o=r(9878),i=r(8054),t=r(14),s=r(5893);e.Z=function(n){var e=n.children;return(0,s.jsxs)(t.W2,{children:[(0,s.jsx)(a.Z,{stat:!0}),(0,s.jsxs)(t.CL,{children:[e,(0,s.jsx)(t.kI,{children:"Ficou Interessado? Entre em contato e solicite um or\xe7amento."}),(0,s.jsx)(i.Z,{setFormStatus:function(){}})]}),(0,s.jsx)(o.Z,{})]})}},14:function(n,e,r){"use strict";r.d(e,{W2:function(){return l},CL:function(){return c},kI:function(){return u},gO:function(){return m}});var a,o,i,t,s=r(2209),d=r(7379),l=d.ZP.section(a||(a=(0,s.Z)(["\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  background: #f7f7f7;\n  "]))),c=d.ZP.div(o||(o=(0,s.Z)(["\n  border-bottom: 1px solid #b3b3b3;\n  box-sizing: border-box;\n  margin: auto;\n  max-width: 1400px;\n  padding: 1.25rem;\n\n  @media (min-width: 980px){\n    padding-left: 2rem;\n    padding-right: 2rem;\n  }\n  @media (min-width: 980px){\n    padding: 0 2rem;\n  }\n  h1{\n    color: #1a3968;\n    font-weight: 800;\n    font-size: 30px;\n    margin: 0;\n  }\n  p{\n    margin: .3rem 0;\n    font-size: 16px;\n    line-height: 2;\n    font-weight: 400;\n  }\n\n\n"]))),u=d.ZP.h3(i||(i=(0,s.Z)(["\n    color: #1a3968;\n    font-size: 19px;\n"]))),m=d.ZP.div(t||(t=(0,s.Z)(["\n  background: white;\n  padding: 1rem;\n  margin-top: 4rem;\n  margin-bottom: 1.5rem;\n\n  @media (min-width: 980px){\n    margin-top: 5rem;\n  }\n"])))},4405:function(n,e,r){"use strict";r.r(e),r.d(e,{default:function(){return d}});var a=r(5675),o={src:"/site/hml//_next/static/media/landing-page.360cfc32.jpg",height:5476,width:7369,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAYACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABQEBAQAAAAAAAAAAAAAAAAAAAAL/2gAMAwEAAhADEAAAALgV/8QAHBAAAQMFAAAAAAAAAAAAAAAAAQIREgADBSFR/9oACAEBAAE/ABlwbswlYRFoO++1/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwB//8QAFREBAQAAAAAAAAAAAAAAAAAAABH/2gAIAQMBAT8Aj//Z"},i=r(4399),t=r(14),s=r(5893),d=function(){return(0,s.jsxs)(i.Z,{children:[(0,s.jsxs)(t.gO,{children:[(0,s.jsx)("h1",{children:"Landing Pages"}),(0,s.jsx)("p",{children:"Landing Pages s\xe3o sites de uma p\xe1gina \xfanica com forte apelo comercial e voltados para campanhas para apresenta\xe7\xe3o de eventos, servi\xe7os ou produtos."}),(0,s.jsx)("p",{children:"Uma Landing Page \xe9 capaz de apresentar resumidamente as informa\xe7\xf5es da sua campanha e oferecer mecanismos para coletas de leads, ou seja, pessoas interessadas que podem se tornar clientes."}),(0,s.jsx)("p",{children:"A Zakta desenvolve landing pages modernas, personalizadas e totalmente focadas em resultados!"}),(0,s.jsx)("p",{children:"Temos expertise para lhe propor ideias e criar a melhor landing page para a sua campanha."}),(0,s.jsx)("p",{children:"Solicite um or\xe7amento e conhe\xe7a as nossas estrat\xe9gias para cria\xe7\xe3o de Landing Pages."})]}),(0,s.jsx)(a.default,{"data-aos":"fade-up",src:o,alt:"Imagem Ilustrando uma Landing Page."})]})}},6201:function(n,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/o-que-oferecemos/landing-pages-em-santos",function(){return r(4405)}])}},function(n){n.O(0,[355,675,821,774,888,179],(function(){return e=6201,n(n.s=e);var e}));var e=n.O();_N_E=e}]);