(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),l=a(4),r=a.n(l),o=(a(9),a(2)),s=(a(10),a(0));function i(e){return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(s.jsxs)("div",{className:"container-fluid",children:[Object(s.jsx)("a",{className:"navbar-brand",href:"/",children:e.title}),Object(s.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(s.jsx)("span",{className:"navbar-toggler-icon"})}),Object(s.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(s.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)("a",{className:"nav-link active","aria-current":"page",href:"/",children:"Home"})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)("a",{className:"nav-link",href:"/",children:e.about})})]}),Object(s.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(s.jsx)("input",{className:"form-check-input",type:"checkbox",role:"switch",onClick:e.toggleMode,id:"flexSwitchCheckDefault"}),Object(s.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Enable Dark Mode"})]})]})]})})})}function b(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),c=a[0],l=a[1];return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("div",{className:"container",children:Object(s.jsxs)("div",{children:[Object(s.jsx)("h1",{style:{color:"dark"===e.mode?"white":"black"},children:e.heading}),Object(s.jsx)("div",{className:"mb-3",children:Object(s.jsx)("textarea",{className:"form-control",id:"exampleFormControlTextarea1",rows:"8",value:c,onChange:function(e){l(e.target.value)},style:{backgroundColor:"dark"===e.mode?"grey":"white"}})}),Object(s.jsx)("button",{className:"btn btn-primary mx-1",onClick:function(){console.log("you clicked on up click");var e=c.toUpperCase();l(e)},children:"Convert To UpperCase"}),Object(s.jsx)("button",{className:"btn btn-primary mx-1",onClick:function(){var e=c.toLowerCase();l(e)},children:"Convert To LowerCase"}),Object(s.jsx)("button",{className:"btn btn-primary mx-1",onClick:function(){var e=document.getElementById("exampleFormControlTextarea1");e.select(),navigator.clipboard.writeText(e.value)},children:"Copy Text"}),Object(s.jsx)("button",{className:"btn btn-primary mx-1",onClick:function(){var e=c.split(" ");console.log(e);for(var t="",a=0;a<e.length;a++){var n=e[a].charAt(0).toUpperCase()+e[a].slice(1,e[a].length);console.log(n),t=t+" "+n,console.log(t)}l(t)},children:"Capitalize First Char"}),Object(s.jsx)("button",{className:"btn btn-primary mx-1",onClick:function(){l("")},children:"Clear"})]})}),Object(s.jsxs)("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"black"},children:[Object(s.jsx)("h1",{children:"Your Text Summary"}),Object(s.jsxs)("p",{children:[c.split(" ").length," Words and ",c.length," Charachter"]}),Object(s.jsxs)("p",{children:[.008*c.split("").length," Minutes To Read"]}),Object(s.jsx)("h2",{children:"Preview"}),Object(s.jsx)("p",{children:c})]})]})}i.defaultProps={title:"set title",about:"set about"};var d=function(){var e=Object(n.useState)("light"),t=Object(o.a)(e,2),a=t[0],c=t[1];return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(i,{title:"Text_utils",about:"ABOUT_US",mode:a,toggleMode:function(){"light"===a?(c("dark"),document.body.style.backgroundColor="grey"):(c("light"),document.body.style.backgroundColor="white")}}),Object(s.jsx)("div",{className:"container my-3",children:Object(s.jsx)(b,{heading:"Enter Text To Analyze",mode:a})})]})},j=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,13)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,l=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),l(e),r(e)}))};r.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(d,{})}),document.getElementById("root")),j()},9:function(e,t,a){}},[[12,1,2]]]);
//# sourceMappingURL=main.53a53eab.chunk.js.map