(this["webpackJsonpreact-todo"]=this["webpackJsonpreact-todo"]||[]).push([[0],{67:function(t,e,o){},68:function(t,e,o){},79:function(t,e,o){"use strict";o.r(e);var c=o(0),n=o.n(c),a=o(9),r=o.n(a),i=(o(67),o(17)),s=o(57),d=o(42),l=(o(68),o(116)),j=o(112),u=o(10);var b=function(t){var e=t.addTodo,o=Object(c.useState)({id:"",task:"",completed:!1}),n=Object(d.a)(o,2),a=n[0],r=n[1];return Object(u.jsxs)("form",{className:"todo-form",onSubmit:function(t){if(t.preventDefault(),a.task.trim()){var o=Math.random().toString(16).slice(2);e(Object(i.a)(Object(i.a)({},a),{},{id:o})),r(Object(i.a)(Object(i.a)({},a),{},{task:""}))}},children:[Object(u.jsx)(l.a,{label:"Task",type:"text",name:"task",value:a.task,onChange:function(t){r(Object(i.a)(Object(i.a)({},a),{},{task:t.target.value}))}}),Object(u.jsx)(j.a,{type:"submit",children:"submit"})]})},f=o(113),O=o(117),m=o(115),g=o(114),p=o(56),v=o.n(p);var h=function(t){var e=t.todo,o=t.toggleComplete,c=t.removeTodo;return Object(u.jsxs)(f.a,{style:{display:"flex"},children:[Object(u.jsx)(O.a,{checked:e.completed,onClick:function(){o(e.id)}}),Object(u.jsx)(m.a,{variant:"body1",style:{textDecoration:e.completed?"line-through":null},children:e.task}),Object(u.jsx)(g.a,{onClick:function(){c(e.id)},children:Object(u.jsx)(v.a,{})})]})},x=o(111);var k=function(t){var e=t.todos,o=t.toggleComplete,c=t.removeTodo;return Object(u.jsx)(x.a,{children:e.map((function(t){return Object(u.jsx)(h,{todo:t,toggleComplete:o,removeTodo:c},t.id)}))})},C="react-todo-storage";var S=function(){var t=Object(c.useState)([]),e=Object(d.a)(t,2),o=e[0],n=e[1];return Object(c.useEffect)((function(){var t=JSON.parse(localStorage.getItem(C));t&&n(t)}),[]),Object(c.useEffect)((function(){localStorage.setItem(C,JSON.stringify(o))}),[o]),Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(m.a,{style:{padding:16},variant:"h1",children:"React Todo"}),Object(u.jsx)(b,{addTodo:function(t){n([t].concat(Object(s.a)(o)))}}),Object(u.jsx)(k,{todos:o,toggleComplete:function(t){n(o.map((function(e){return e.id===t?Object(i.a)(Object(i.a)({},e),{},{completed:!e.completed}):e})))},removeTodo:function(t){n(o.filter((function(e){return e.id!==t})))}})]})},T=function(t){t&&t instanceof Function&&o.e(3).then(o.bind(null,119)).then((function(e){var o=e.getCLS,c=e.getFID,n=e.getFCP,a=e.getLCP,r=e.getTTFB;o(t),c(t),n(t),a(t),r(t)}))};r.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(S,{})}),document.getElementById("root")),T()}},[[79,1,2]]]);
//# sourceMappingURL=main.126b2ce1.chunk.js.map