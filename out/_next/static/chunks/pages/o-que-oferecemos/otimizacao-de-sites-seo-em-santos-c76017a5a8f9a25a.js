(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[445],{8054:function(n,e,o){"use strict";o.d(e,{Z:function(){return B}});var r,i,t,a,s,d,c,l,m,u,h=o(266),p=o(809),f=o.n(p),g=o(2175),x=o(4231),b=o(2209),j=o(7379),v=(0,j.F4)(r||(r=(0,b.Z)(["\n  0%{width: 5%;}\n  100%{width: 100%;}\n"]))),w=j.ZP.div(i||(i=(0,b.Z)(["\n  display: ",";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n\n  .progress-bar{\n    height: 7px;\n    transition-property: width, background-color;\n  }\n  .progress-moved .progress-bar{\n      width: 100%;\n      background-color: #33afad;\n      animation: "," 2s infinite;\n    }\n"])),(function(n){return n.loader?"unset":"none"}),v),Z=o(5893),y=function(n){var e=n.loader;return(0,Z.jsx)(w,{loader:e,children:(0,Z.jsx)("div",{className:"progress-moved",children:(0,Z.jsx)("div",{className:"progress-bar"})})})},S=j.ZP.form(t||(t=(0,b.Z)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n\n  @media (min-width: 768px){\n    margin: 0;\n    justify-content: center;\n  }\n"])));function k(n){var e=n.touched,o=n.error;return e&&o?"#e92929":function(n){return n?"#33afad":"#ccc"}(e)}var P=j.ZP.input(a||(a=(0,b.Z)(["\n  border: 1px solid #efefef;\n  border-bottom: 3px solid ",";\n  border-radius: none;\n  box-sizing: border-box;\n  display: block;\n  font-size: 14px;\n  font-family: 'Poppins', sans-serif;\n  font-weight: 500;\n  padding: .75rem;\n  margin: 1.2rem 0 1.7rem;\n  width: 100%;\n  outline: none;\n\n  :focus{\n    background-color: white;\n    border-bottom-color: ",";\n  }\n\n  ::placeholder {\n    font-weight: 300;\n  }\n\n  @media (min-width: 640px) {\n    padding: 1.5rem;\n    font-size: 15px;\n  }\n"])),k,(function(n){var e=n.touched,o=n.error;return e&&o?"#e92929":"#1a3968"})),_=j.ZP.textarea(s||(s=(0,b.Z)(["\n  border: 1px solid #efefef;\n  border-bottom: 3px solid ",";\n  box-sizing: border-box;\n  font-family: 'Poppins', sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n  min-height: 280px;\n  padding: .75rem;\n  min-width: 100%;\n  width: 100%;\n  max-width: 100%;\n  margin: 1.2rem 0 1.7rem;\n  outline: none;\n\n  :focus{\n    background-color: white;\n    border-bottom-color: ",";\n  }\n\n  ::placeholder {\n    font-weight: 300;\n  }\n\n  @media (min-width: 640px) {\n    padding: 1.5rem;\n    font-size: 15px;\n  }\n"])),k,(function(n){var e=n.touched,o=n.error;return e&&o?"#e92929":"#1a3968"})),z=j.ZP.div(d||(d=(0,b.Z)(["\n  position: relative;\n"]))),O=j.ZP.div(c||(c=(0,b.Z)(["\n  color: #e92929;\n  font-size: 13px;\n  font-weight: 600;\n  position: absolute;\n  bottom: 0;\n\n  @media (min-width: 480px) {\n    font-size: 14px;\n  }\n"]))),E=j.ZP.button(l||(l=(0,b.Z)(["\n  align-self: end;\n  animation-duration: 20s;\n  background-color: #1a3968;\n  border: 1px solid #1a3968;\n  color: white;\n  cursor: ",";\n  font-size: 14px;\n  font-family: 'Poppins', sans-serif;\n  font-weight: 700;\n  padding: 1rem;\n  position: relative;\n  margin: 1rem 0;\n  text-transform: uppercase;\n  transition: all .15s ease;\n  user-select: none;\n\n  :active{\n    background-color: #122746;\n    border: 1px solid #f7f7f7;\n  }\n\n  @media (min-width: 640px) {\n    padding: 1.25rem;\n    font-size: 16px;\n    width: 257px;\n\n    :active{\n      background-color: #122746;\n      border: 1px solid #f7f7f7;\n    }\n  }\n\n  @media (min-width: 870px) {\n    :hover {\n      background-color:  #26508f;\n      border-color: #26508f;\n    }\n\n    :active{\n      background-color: #122746;\n      border: 1px solid #f7f7f7;\n    }\n  }\n"])),(function(n){return n.loader?"not-allowed":"pointer"})),C=j.ZP.div(m||(m=(0,b.Z)(["\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n\n  @media (min-width: 1200px) {\n    flex-wrap: nowrap;\n  }\n"]))),N=j.ZP.div(u||(u=(0,b.Z)(["\n  width: 100%;\n\n  @media (min-width: 1000px) {\n    width: 49%;\n  }\n"]))),B=function(n){var e=n.setFormStatus;function o(n){var e={service_id:"service_mpjyx3g",template_id:"template_w8vin3g",user_id:"user_rizvggYkHJhDIQF4MJsbR",template_params:n},o={method:"POST",body:JSON.stringify(e),headers:new Headers({"Content-type":"application/json"})};return fetch("https://api.emailjs.com/api/v1.0/email/send",o)}var r=(0,g.TA)({initialValues:{name:"",phone:"",email:"",subject:"",message:""},validationSchema:x.Ry({name:x.Z_().min(3,"M\xednimo 3 letras").required("Preencha o nome"),phone:x.Z_().min(15,"No m\xednimo 11 n\xfameros").required("Preencha o n\xfamero"),email:x.Z_().email("E-mail inv\xe1lido").required("Preencha o e-mail"),subject:x.Z_().required("Preencha o assunto"),message:x.Z_().required("Preencha a mensagem")}),onSubmit:function(){var n=(0,h.Z)(f().mark((function n(i){var t;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o(i);case 2:t=n.sent,e(t.ok?"success":"error"),t.ok&&r.resetForm();case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()});return(0,Z.jsxs)(S,{onSubmit:r.handleSubmit,"data-aos":"fade-up",children:[(0,Z.jsxs)(C,{children:[(0,Z.jsxs)(N,{children:[(0,Z.jsx)(P,{name:"name",type:"text",placeholder:"Nome",onChange:r.handleChange,onBlur:r.handleBlur,value:r.values.name,error:r.errors.name,touched:r.touched.name,readOnly:r.isSubmitting}),r.touched.name&&r.errors.name&&(0,Z.jsx)(z,{children:(0,Z.jsx)(O,{children:r.errors.name})})]}),(0,Z.jsxs)(N,{children:[(0,Z.jsx)(P,{name:"phone",type:"text",maxLength:15,placeholder:"Telefone",onChange:function(n){return r.setFieldValue("phone",n.target.value.replace(/\D/g,"").replace(/^(\d{2})(\d)/g,"($1) $2").replace(/(\d)(\d{4})$/,"$1-$2"))},onBlur:r.handleBlur,value:r.values.phone,error:r.errors.phone,touched:r.touched.phone,readOnly:r.isSubmitting}),r.touched.phone&&r.errors.phone&&(0,Z.jsx)(z,{children:(0,Z.jsx)(O,{children:r.errors.phone})})]})]}),(0,Z.jsxs)(C,{children:[(0,Z.jsxs)(N,{children:[(0,Z.jsx)(P,{name:"email",type:"text",placeholder:"E-mail",onChange:r.handleChange,onBlur:r.handleBlur,value:r.values.email,error:r.errors.email,touched:r.touched.email,readOnly:r.isSubmitting}),r.touched.email&&r.errors.email&&(0,Z.jsx)(z,{children:(0,Z.jsx)(O,{children:r.errors.email})})]}),(0,Z.jsxs)(N,{children:[(0,Z.jsx)(P,{name:"subject",type:"text",placeholder:"Assunto",onChange:r.handleChange,onBlur:r.handleBlur,value:r.values.subject,error:r.errors.subject,touched:r.touched.subject,readOnly:r.isSubmitting}),r.touched.subject&&r.errors.subject&&(0,Z.jsx)(z,{children:(0,Z.jsx)(O,{children:r.errors.subject})})]})]}),(0,Z.jsx)(_,{name:"message",type:"submit",placeholder:"Mensagem",onChange:r.handleChange,onBlur:r.handleBlur,value:r.values.message,error:r.errors.message,touched:r.touched.message,readOnly:r.isSubmitting}),r.touched.message&&r.errors.message&&(0,Z.jsx)(z,{children:(0,Z.jsx)(O,{children:r.errors.message})}),(0,Z.jsxs)(E,{disabled:r.isSubmitting,type:"submit",loader:r.isSubmitting,className:"loader",children:["Enviar Mensagem",(0,Z.jsx)(y,{loader:r.isSubmitting})]})]})}},4399:function(n,e,o){"use strict";var r=o(1237),i=o(9878),t=o(8054),a=o(14),s=o(5893);e.Z=function(n){var e=n.children;return(0,s.jsxs)(a.W2,{children:[(0,s.jsx)(r.Z,{stat:!0}),(0,s.jsxs)(a.CL,{children:[e,(0,s.jsx)(a.kI,{children:"Ficou Interessado? Entre em contato e solicite um or\xe7amento."}),(0,s.jsx)(t.Z,{setFormStatus:function(){}})]}),(0,s.jsx)(i.Z,{})]})}},14:function(n,e,o){"use strict";o.d(e,{W2:function(){return c},CL:function(){return l},kI:function(){return m},gO:function(){return u}});var r,i,t,a,s=o(2209),d=o(7379),c=d.ZP.section(r||(r=(0,s.Z)(["\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  background: #f7f7f7;\n  "]))),l=d.ZP.div(i||(i=(0,s.Z)(["\n  border-bottom: 1px solid #b3b3b3;\n  box-sizing: border-box;\n  margin: auto;\n  max-width: 1400px;\n  padding: 1.25rem;\n\n  @media (min-width: 980px){\n    padding-left: 2rem;\n    padding-right: 2rem;\n  }\n  @media (min-width: 980px){\n    padding: 0 2rem;\n  }\n  h1{\n    color: #1a3968;\n    font-weight: 800;\n    font-size: 30px;\n    margin: 0;\n  }\n  p{\n    margin: .3rem 0;\n    font-size: 16px;\n    line-height: 2;\n    font-weight: 400;\n  }\n\n\n"]))),m=d.ZP.h3(t||(t=(0,s.Z)(["\n    color: #1a3968;\n    font-size: 19px;\n"]))),u=d.ZP.div(a||(a=(0,s.Z)(["\n  background: white;\n  padding: 1rem;\n  margin-top: 4rem;\n  margin-bottom: 1.5rem;\n\n  @media (min-width: 980px){\n    margin-top: 5rem;\n  }\n"])))},8039:function(n,e,o){"use strict";o.r(e);var r=o(4399),i=o(14),t=o(5893);e.default=function(){return(0,t.jsx)(r.Z,{children:(0,t.jsxs)(i.gO,{children:[(0,t.jsx)("h1",{children:"Otimiza\xe7\xe3o de Sites - SEO"}),(0,t.jsx)("p",{children:"S\xe3o in\xfameras as vantagens de se possuir um site, no entanto, \xe9 necess\xe1rio que o projeto seja criado com as melhores t\xe9cnicas de SEO on page para que o site seja encontrado facilmente pelos clientes."}),(0,t.jsx)("p",{children:"SEO on page \xe9 o conjunto de estrat\xe9gias de otimiza\xe7\xe3o para motores de busca realizado dentro das p\xe1ginas web, com o objetivo de melhorar o tr\xe1fego org\xe2nico. Ou seja, com as melhoras t\xe9cnicas de SEO, o seu site pode ser encontrado em uma melhor posi\xe7\xe3o no Google, aumentando assim o n\xfamero de acessos ao site, o pode colaborar com um maior n\xfamero de or\xe7amentos e vendas."}),(0,t.jsx)("p",{children:"Todos os sites criados pela Zakta j\xe1 contam com as t\xe9cnicas de SEO on page, desde a sua publica\xe7\xe3o. No entanto, caso voc\xea j\xe1 tenha um site e ele n\xe3o esteja indexando bem no Google, a Zakta tamb\xe9m oferece a solu\xe7\xe3o de otimiza\xe7\xe3o de SEO, dentro do que for poss\xedvel de se realizar no pr\xf3prio site atual."}),(0,t.jsx)("p",{children:"Fale com um dos nossos especialistas para desenvolvermos as melhores t\xe9cnicas de SEO para o seu projeto."})]})})}},6672:function(n,e,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/o-que-oferecemos/otimizacao-de-sites-seo-em-santos",function(){return o(8039)}])}},function(n){n.O(0,[355,821,774,888,179],(function(){return e=6672,n(n.s=e);var e}));var e=n.O();_N_E=e}]);