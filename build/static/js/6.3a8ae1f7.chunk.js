(this["webpackJsonpgoit-react-hw-08-phonebook-with-bootstrap"]=this["webpackJsonpgoit-react-hw-08-phonebook-with-bootstrap"]||[]).push([[6],{129:function(e,t,a){e.exports={listLink:"NavBar_listLink__1IqBQ",listLinkActive:"NavBar_listLinkActive__NG3dT"}},130:function(e,t,a){e.exports={container:"UserMenu_container__2lSAS",text:"UserMenu_text__eAhDL",span:"UserMenu_span__21xGa",btn:"UserMenu_btn__2u3_F"}},131:function(e,t,a){e.exports={listLink:"AuthNav_listLink__IThd_",listLinkActive:"AuthNav_listLinkActive__2mCqs"}},132:function(e,t,a){"use strict";var s=a(1),n=(a(0),a(25)),i=a(11),r=a(21),c=a(129),l=a.n(c),o=a(149),b=a(150),j=a(130),u=a.n(j),h={onLogout:r.a.logout},m=Object(i.b)((function(e){return{isAuthenticated:r.b.isAuthenticated(e),email:r.b.getUserEmail(e)}}),h)((function(e){var t=e.email,a=e.onLogout;return Object(s.jsxs)(o.a,{className:"d-flex justify-content-end",children:[Object(s.jsxs)("p",{className:u.a.text,children:["You are logged in as ",Object(s.jsx)("br",{}),Object(s.jsx)("span",{className:u.a.span,children:t})]}),Object(s.jsx)(b.a,{variant:"danger",onClick:a,children:"Logout"})]})})),d=a(50),p=a(154),g=a(155),x=a(131),v=a.n(x),O=function(){return Object(s.jsx)(p.a,{collapseOnSelect:!0,expand:"lg",bg:"light",variant:"dark",children:Object(s.jsxs)(o.a,{children:[Object(s.jsx)(p.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(s.jsx)(p.a.Collapse,{id:"responsive-navbar-nav",children:Object(s.jsxs)(g.a,{className:"mr-auto",children:[Object(s.jsx)(n.b,{exact:!0,to:"/register",className:v.a.listLink,activeClassName:v.a.listLinkActive,children:"Register"}),Object(s.jsx)(n.b,{exact:!0,to:"/login",className:v.a.listLink,activeClassName:v.a.listLinkActive,children:"Login"})]})})]})})};t.a=Object(i.b)((function(e){return{isAuthenticated:r.b.isAuthenticated(e),email:r.b.getUserEmail(e)}}))((function(e){var t=e.isAuthenticated,a=e.email;return Object(s.jsx)(p.a,{collapseOnSelect:!0,expand:"lg",bg:"light",variant:"dark",children:Object(s.jsxs)(o.a,{children:[Object(s.jsx)(p.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(s.jsx)(p.a.Collapse,{id:"responsive-navbar-nav",children:Object(s.jsxs)(g.a,{className:"mr-auto",children:[Object(s.jsx)(n.b,{exact:!0,to:"/",className:l.a.listLink,activeClassName:l.a.listLinkActive,children:"Home"}),t&&Object(s.jsx)(n.b,{exact:!0,to:"/contacts",className:l.a.listLink,activeClassName:l.a.listLinkActive,children:"Contacts"})]})}),t&&!a&&Object(s.jsx)(d.a,{}),t&&a&&Object(s.jsx)(m,{}),!t&&Object(s.jsx)(O,{})]})})}))},146:function(e,t,a){e.exports={title:"Registration_title__2D9e2",form:"Registration_form__2I50b",label:"Registration_label__2s9AR",input:"Registration_input__3T0Dj",button:"Registration_button__3n8R2"}},151:function(e,t,a){"use strict";a.r(t);var s=a(13),n=a(4),i=a(29),r=a(30),c=a(32),l=a(31),o=a(1),b=a(0),j=a(132),u=a(11),h=a(21),m=a(51),d=a(149),p=a(146),g=a.n(p),x=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];return(e=t.call.apply(t,[this].concat(c))).state={name:"",email:"",password:""},e.handleChange=function(t){var a=t.target,s=a.name,i=a.value;e.setState(Object(n.a)({},s,i))},e.handleSubmit=function(t){t.preventDefault(),e.props.onRegister(Object(s.a)({},e.state)),e.setState({name:"",email:"",password:""})},e}return Object(r.a)(a,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.password,s=e.name;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(j.a,{}),Object(o.jsxs)(d.a,{children:["string"===typeof this.props.error&&Object(o.jsx)(m.a,{error:Boolean(this.props.error),message:"Your registration failed. Try again"}),Object(o.jsx)("h1",{className:g.a.title,children:"Register page"}),Object(o.jsxs)("form",{onSubmit:this.handleSubmit,className:g.a.form,children:[Object(o.jsxs)("label",{className:g.a.label,children:["Name",Object(o.jsx)("input",{type:"text",name:"name",value:s,onChange:this.handleChange,className:g.a.input})]}),Object(o.jsxs)("label",{className:g.a.label,children:["Email",Object(o.jsx)("input",{type:"email",name:"email",value:t,onChange:this.handleChange,className:g.a.input})]}),Object(o.jsxs)("label",{className:g.a.label,children:["Password",Object(o.jsx)("input",{type:"password",name:"password",value:a,placeholder:"minimum 7 symbols",onChange:this.handleChange,className:g.a.input})]}),Object(o.jsx)("button",{className:g.a.button,children:"Register"})]})]})]})}}]),a}(b.Component);t.default=Object(u.b)((function(e){return{error:h.b.getErrorMessage(e)}}),{onRegister:h.a.register})(x)}}]);
//# sourceMappingURL=6.3a8ae1f7.chunk.js.map