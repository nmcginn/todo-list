(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{15:function(t,e,a){},16:function(t,e,a){},17:function(t,e,a){"use strict";a.r(e);var n=a(0),i=a(1),s=a.n(i),r=a(9),o=a.n(r),c=(a(15),a(16),a(3)),l=a(4),d=a(5),h=a(2),m=a(7),u=a(6),p=function(t){Object(m.a)(a,t);var e=Object(u.a)(a);function a(t){var n;return Object(l.a)(this,a),(n=e.call(this,t)).state=Object(c.a)(Object(c.a)({},t),{},{expanded:!1}),n.handleClick=n.handleClick.bind(Object(h.a)(n)),n}return Object(d.a)(a,[{key:"handleClick",value:function(){this.setState({expanded:!this.state.expanded})}},{key:"render",value:function(){var t=this;return this.state.expanded?Object(n.jsxs)("div",{className:"task-list-item row orange lighten-4 z-depth-4",onClick:function(){return t.handleClick()},children:[Object(n.jsx)("div",{className:"col s3",children:this.state.name}),Object(n.jsx)("div",{className:"col s3",children:this.state.priority}),Object(n.jsx)("div",{className:"col s3",children:this.state.estimate}),Object(n.jsx)("div",{className:"col s3",children:this.state.description})]}):Object(n.jsx)("div",{className:"task-list-item row blue lighten-4 z-depth-4",onClick:function(){return t.handleClick()},children:this.state.name})}}]),a}(s.a.Component),j=function(t){Object(m.a)(a,t);var e=Object(u.a)(a);function a(t){var n;Object(l.a)(this,a),(n=e.call(this,t)).todoListKey="todoItems",n.emptyForm=function(){return{name:"",priority:0,estimate:"",description:""}};var i=n.initiateTaskList();return n.state={todoList:i,displayNewTaskForm:!1,formData:n.emptyForm()},n.appendTask=n.appendTask.bind(Object(h.a)(n)),n.handleFormUpdate=n.handleFormUpdate.bind(Object(h.a)(n)),n}return Object(d.a)(a,[{key:"initiateTaskList",value:function(){var t=localStorage.getItem(this.todoListKey);return t=null===t||void 0===typeof t?[]:JSON.parse(localStorage.getItem(this.todoListKey))}},{key:"appendTask",value:function(t){t.preventDefault();var e=this.state.todoList;e.push(this.state.formData),localStorage.setItem(this.todoListKey,JSON.stringify(e)),this.setState({todoList:e,formData:this.emptyForm()})}},{key:"handleFormUpdate",value:function(t){t.preventDefault();var e=this.state.formData;e[t.target.ariaLabel]=t.target.value,this.setState({formData:e})}},{key:"render",value:function(){var t=this,e=Object(n.jsx)(n.Fragment,{});return this.state&&this.state.displayNewTaskForm&&(e=Object(n.jsx)("div",{className:"modal",children:Object(n.jsxs)("form",{className:"input-form modal-content",onSubmit:this.appendTask,children:[Object(n.jsx)("input",{type:"text",name:"name",placeholder:"task name","aria-label":"name",onChange:function(e){return t.handleFormUpdate(e)},value:this.state.formData.name}),Object(n.jsx)("input",{type:"number",name:"priority",placeholder:"priority","aria-label":"priority",step:"1",pattern:"[0-9]",onChange:function(e){return t.handleFormUpdate(e)},value:this.state.formData.priority}),Object(n.jsx)("input",{type:"text",name:"estimate",placeholder:"1 hour","aria-label":"estimate",onChange:function(e){return t.handleFormUpdate(e)},value:this.state.formData.estimate}),Object(n.jsx)("input",{type:"text",name:"description",placeholder:"important stuff","aria-label":"description",onChange:function(e){return t.handleFormUpdate(e)},value:this.state.formData.description}),Object(n.jsxs)("button",{className:"btn waves-effect waves-light",type:"submit",children:["Submit",Object(n.jsx)("i",{className:"material-icons right",children:"send"})]})]})})),Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{className:"todo-list container",children:this.state&&this.state.todoList&&this.state.todoList.map((function(t){return Object(i.createElement)(p,Object(c.a)(Object(c.a)({},t),{},{key:t.name}))}))}),Object(n.jsx)("button",{title:"add task",onClick:function(){return t.setState({displayNewTaskForm:!t.state.displayNewTaskForm})},className:"btn-floating btn-large waves-effect waves-light red add-task-button",children:Object(n.jsx)("i",{className:"material-icons",children:"add"})}),e]})}}]),a}(s.a.Component);var b=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(j,{})})},f=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,18)).then((function(e){var a=e.getCLS,n=e.getFID,i=e.getFCP,s=e.getLCP,r=e.getTTFB;a(t),n(t),i(t),s(t),r(t)}))};o.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(b,{})}),document.getElementById("root")),f()}},[[17,1,2]]]);
//# sourceMappingURL=main.444d83fc.chunk.js.map