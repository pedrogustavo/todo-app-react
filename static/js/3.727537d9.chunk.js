(this["webpackJsonptodo-app-react"]=this["webpackJsonptodo-app-react"]||[]).push([[3],{38:function(e,t,c){"use strict";c.r(t);var n=c(19);function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var c=[],n=!0,r=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(n=(i=l.next()).done)&&(c.push(i.value),!t||c.length!==t);n=!0);}catch(o){r=!0,a=o}finally{try{n||null==l.return||l.return()}finally{if(r)throw a}}return c}}(e,t)||Object(n.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var a=c(0),i=c(7);var l=function(e){switch(e.name){case"check":return Object(i.jsx)("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"check",className:"svg-inline--fa fa-check fa-w-16 icon",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:Object(i.jsx)("path",{fill:"currentColor",d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"})});case"circle":return Object(i.jsx)("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"circle",className:"svg-inline--fa fa-circle fa-w-16 icon",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:Object(i.jsx)("path",{fill:"currentColor",d:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200z"})});case"times":return Object(i.jsx)("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"times",className:"svg-inline--fa fa-times fa-w-11 icon",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 352 512",children:Object(i.jsx)("path",{fill:"currentColor",d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"})});case"plus":default:return Object(i.jsx)("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"plus",className:"svg-inline--fa fa-plus fa-w-14 icon",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:Object(i.jsx)("path",{fill:"currentColor",d:"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"})})}};var o=function(e){var t=e.item,c=e.toggleCompleted,n=e.removeItem;return Object(i.jsxs)("li",{className:"list-item ".concat(t.completed&&"completed"),children:[Object(i.jsxs)("div",{className:"list-item-content",onClick:function(){return c(t.id)},children:[Object(i.jsx)(l,{name:t.completed?"check":"circle"}),Object(i.jsx)("p",{children:t.value})]}),Object(i.jsx)("button",{className:"list-item-remove",onClick:function(){return n(t)},children:Object(i.jsx)(l,{name:"times"})})]})},s=c(20),u=c(18);t.default=function(){var e=Object(s.c)((function(e){return e.todo.tasks})),t=Object(s.b)(),c=r(Object(a.useState)(""),2),n=c[0],d=c[1],f=function(e){return t(Object(u.d)(e))},j=function(e){window.confirm('Tem certeza que deseja remover: "'.concat(e.value,'" ?'))&&t(Object(u.c)(e.id))};return Object(i.jsxs)("div",{id:"container",children:[Object(i.jsx)("ul",{id:"list",children:e.map((function(e,t){return Object(i.jsx)(o,{item:e,toggleCompleted:f,removeItem:j},t)}))}),Object(i.jsx)("div",{id:"new-item-box",children:Object(i.jsxs)("form",{onSubmit:function(e){n.length&&(t(Object(u.a)(n)),d("")),e.preventDefault()},children:[Object(i.jsx)("input",{type:"text",value:n,onChange:function(e){return d(e.target.value)},placeholder:"Digite a nova tarefa..."}),Object(i.jsx)("button",{type:"submit",children:Object(i.jsx)(l,{name:"plus"})})]})})]})}}}]);
//# sourceMappingURL=3.727537d9.chunk.js.map