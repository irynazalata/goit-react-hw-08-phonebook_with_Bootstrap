(this["webpackJsonpgoit-react-hw-08-phonebook-with-bootstrap"]=this["webpackJsonpgoit-react-hw-08-phonebook-with-bootstrap"]||[]).push([[7],{129:function(t,e,a){t.exports={listLink:"NavBar_listLink__1IqBQ",listLinkActive:"NavBar_listLinkActive__NG3dT"}},130:function(t,e,a){t.exports={container:"UserMenu_container__2lSAS",text:"UserMenu_text__eAhDL",span:"UserMenu_span__21xGa",btn:"UserMenu_btn__2u3_F"}},131:function(t,e,a){t.exports={listLink:"AuthNav_listLink__IThd_",listLinkActive:"AuthNav_listLinkActive__2mCqs"}},132:function(t,e,a){"use strict";var n=a(1),s=(a(0),a(25)),i=a(11),c=a(21),r=a(129),o=a.n(r),l=a(149),j=a(150),b=a(130),u=a.n(b),h={onLogout:c.a.logout},x=Object(i.b)((function(t){return{isAuthenticated:c.b.isAuthenticated(t),email:c.b.getUserEmail(t)}}),h)((function(t){var e=t.email,a=t.onLogout;return Object(n.jsxs)(l.a,{className:"d-flex justify-content-end",children:[Object(n.jsxs)("p",{className:u.a.text,children:["You are logged in as ",Object(n.jsx)("br",{}),Object(n.jsx)("span",{className:u.a.span,children:e})]}),Object(n.jsx)(j.a,{variant:"danger",onClick:a,children:"Logout"})]})})),d=a(50),O=a(154),v=a(155),p=a(131),g=a.n(p),m=function(){return Object(n.jsx)(O.a,{collapseOnSelect:!0,expand:"lg",bg:"light",variant:"dark",children:Object(n.jsxs)(l.a,{children:[Object(n.jsx)(O.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(n.jsx)(O.a.Collapse,{id:"responsive-navbar-nav",children:Object(n.jsxs)(v.a,{className:"mr-auto",children:[Object(n.jsx)(s.b,{exact:!0,to:"/register",className:g.a.listLink,activeClassName:g.a.listLinkActive,children:"Register"}),Object(n.jsx)(s.b,{exact:!0,to:"/login",className:g.a.listLink,activeClassName:g.a.listLinkActive,children:"Login"})]})})]})})};e.a=Object(i.b)((function(t){return{isAuthenticated:c.b.isAuthenticated(t),email:c.b.getUserEmail(t)}}))((function(t){var e=t.isAuthenticated,a=t.email;return Object(n.jsx)(O.a,{collapseOnSelect:!0,expand:"lg",bg:"light",variant:"dark",children:Object(n.jsxs)(l.a,{children:[Object(n.jsx)(O.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(n.jsx)(O.a.Collapse,{id:"responsive-navbar-nav",children:Object(n.jsxs)(v.a,{className:"mr-auto",children:[Object(n.jsx)(s.b,{exact:!0,to:"/",className:o.a.listLink,activeClassName:o.a.listLinkActive,children:"Home"}),e&&Object(n.jsx)(s.b,{exact:!0,to:"/contacts",className:o.a.listLink,activeClassName:o.a.listLinkActive,children:"Contacts"})]})}),e&&!a&&Object(n.jsx)(d.a,{}),e&&a&&Object(n.jsx)(x,{}),!e&&Object(n.jsx)(m,{})]})})}))},153:function(t,e,a){"use strict";a.r(e);var n=a(29),s=a(30),i=a(32),c=a(31),r=a(1),o=a(0),l=a(11),j=a(132),b=a(68),u=a(50),h=a(69),x=a(71),d=a(70),O=a(23),v=a(149),p=function(t){Object(i.a)(a,t);var e=Object(c.a)(a);function a(){return Object(n.a)(this,a),e.apply(this,arguments)}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchContacts()}},{key:"render",value:function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(j.a,{}),Object(r.jsxs)(v.a,{children:[Object(r.jsx)(b.a,{title:"phonebook"}),Object(r.jsxs)(v.a,{className:"d-flex justify-content space-between",children:[Object(r.jsx)(h.a,{}),this.props.isLoading&&Object(r.jsx)(u.a,{}),Object(r.jsxs)(v.a,{children:[Object(r.jsx)(d.a,{}),Object(r.jsx)(x.a,{})]})]})]})]})}}]),a}(o.Component),g={fetchContacts:O.a.fetchContacts};e.default=Object(l.b)((function(t){return{isLoading:O.b.getLoading(t)}}),g)(p)}}]);
//# sourceMappingURL=7.04c01501.chunk.js.map