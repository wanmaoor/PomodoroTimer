(this.webpackJsonppomodoro=this.webpackJsonppomodoro||[]).push([[0],{106:function(e,t,n){},148:function(e,t,n){e.exports=n(254)},170:function(e,t,n){},175:function(e,t,n){},177:function(e,t,n){},178:function(e,t,n){},230:function(e,t,n){},231:function(e,t,n){},239:function(e,t,n){},240:function(e,t,n){},241:function(e,t,n){},242:function(e,t,n){},250:function(e,t,n){},252:function(e,t,n){},254:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(4),c=n.n(r),s=(n(106),n(47)),i=n(30),u=n(12),l=n.n(u),d=n(20),p=n(15),m=n(14),f=n(17),h=n(16),v=n(18),b=n(9),y=n(257),O=n(260),T=n(131),E=n.n(T),j=n(27),g="";g="/PomodoroTimer";var k=Object(j.a)({basename:g}),w=E.a.create({baseURL:"https://gp-server.hunger-valley.com/",headers:{"t-app-id":"HEtRxRQ3APDWy3eHKYme5KjY","t-app-secret":"aJsNpHpJ26HyfhmuPCeWR1ip"}});w.interceptors.request.use((function(e){var t=localStorage.getItem("x-token");return t&&(e.headers.Authorization="Bearer ".concat(t)),e}),(function(e){return console.error(e),Promise.reject(e)})),w.interceptors.response.use((function(e){return e.headers["x-token"]&&localStorage.setItem("x-token",e.headers["x-token"]),e}),(function(e){var t;return 401===(null===(t=e.response)||void 0===t?void 0:t.status)&&(console.log("\u91cd\u5b9a\u5411"),k.push("/login")),Promise.reject(e)}));var C,x=w,D=(n(170),n(25)),N=function(e){return{type:"UPDATE_TODO",payload:e}},_=(n(175),n(46)),I=function(e){function t(){var e,n;Object(p.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(f.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).points=function(){var e=Object.keys(n.props.data).sort((function(e,t){return Date.parse(e)-Date.parse(t)})),t=e[0];if(t){var a=(new Date).getTime()-Date.parse(t),o=0,r=null,c=e.map((function(e){var c=(Date.parse(e)-Date.parse(t))/a*240,s=60*(1-(o+=n.props.data[e].length)/n.props.totalFinishedCount);return r=s,"".concat(c,", ").concat(s)}));return["0,60"].concat(Object(_.a)(c),["240,".concat(r),"240, 60"]).join(" ")}return"0,60 0,60"},n}return Object(v.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"Polygon",id:"Polygon"},o.a.createElement("svg",null,o.a.createElement("polygon",{fill:"rgba(215,78,78,0.1)",stroke:"rgba(215,78,78,0.5)",strokeWidth:"1",points:this.points()})))}}]),t}(a.Component),A=n(52),M=n.n(A),S=n(255),U=n(256),P=(n(177),function(e){function t(){var e,n;Object(p.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(f.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).updateTodo=function(){var e=Object(d.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.put("todos/".concat(n.props.id),t);case 3:a=e.sent,n.props.updateTodo(a.data.resource),e.next=10;break;case 7:throw e.prev=7,e.t0=e.catch(0),new Error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),n}return Object(v.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e,t=this,n="HH:MM",a=this.props.updated_at;return"finished"===this.props.itemType?e=o.a.createElement("div",{className:"action"},o.a.createElement("span",{onClick:function(){t.updateTodo({completed:!1})}},"\u6062\u590d"),o.a.createElement("span",{onClick:function(){t.updateTodo({deleted:!0})}},"\u5220\u9664")):(n="yyyy-MM-dd",a=this.props.created_at,e=o.a.createElement("div",{className:"action"},o.a.createElement("span",{onClick:function(){t.updateTodo({deleted:!1})}},"\u6062\u590d"))),o.a.createElement("div",{className:"todoItem"},o.a.createElement("div",{className:"text"},o.a.createElement("span",null,Object(S.a)(Date.parse(a),n)),o.a.createElement("span",null,this.props.description)),e)}}]),t}(a.Component)),K={updateTodo:N},H=Object(D.b)(null,K)(P),F=(n(178),U.a.TabPane),B=function(e){function t(){return Object(p.a)(this,t),Object(f.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.finishedDates.map((function(t){return o.a.createElement("div",{key:t,className:"dailyTodos"},o.a.createElement("div",{className:"summary"},o.a.createElement("p",{className:"date"},o.a.createElement("span",null,t),o.a.createElement("span",null,"\u5468\u4e94")),o.a.createElement("p",{className:"finishedCount"},"\u5b8c\u6210\u4e86",e.dailyFinishedTodos[t].length,"\u4e2a\u4efb\u52a1")),o.a.createElement("div",{className:"todoList"},e.dailyFinishedTodos[t].map((function(e){return o.a.createElement(H,Object.assign({key:e.id},e,{itemType:"finished"}))}))))})),n=this.deletedTodos.map((function(e){return o.a.createElement(H,Object.assign({key:e.id},e,{itemType:"deleted"}))}));return o.a.createElement(U.a,{defaultActiveKey:"1"},o.a.createElement(F,{tab:"\u5df2\u5b8c\u6210\u4efb\u52a1",key:"1"},o.a.createElement("div",{className:"TodoHistory",id:"TodoHistory"},t)),o.a.createElement(F,{tab:"\u5df2\u5220\u9664\u4efb\u52a1",key:"2"},o.a.createElement("div",{className:"TodoHistory",id:"TodoHistory"},n)))}},{key:"finishedTodos",get:function(){return this.props.todos.filter((function(e){return e.completed&&!e.deleted}))}},{key:"deletedTodos",get:function(){return this.props.todos.filter((function(e){return e.deleted}))}},{key:"dailyFinishedTodos",get:function(){return M.a.groupBy(this.finishedTodos,(function(e){return Object(S.a)(Date.parse(e.updated_at),"yyyy-MM-dd")}))}},{key:"dailyDeletedTodos",get:function(){return M.a.groupBy(this.deletedTodos,(function(e){return Object(S.a)(Date.parse(e.updated_at),"yyyy-MM-dd")}))}},{key:"finishedDates",get:function(){return Object.keys(this.dailyFinishedTodos)}}]),t}(a.Component),W=Object(D.b)((function(e,t){return Object(i.a)({todos:e.todos},t)}),null)(B),L=function(e){function t(){return Object(p.a)(this,t),Object(f.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"Statistics",id:"Statistics"},o.a.createElement("ul",null,o.a.createElement("li",null,"\u7edf\u8ba1"),o.a.createElement("li",null,"\u76ee\u6807"),o.a.createElement("li",null,"\u756a\u8304\u5386\u53f2"),o.a.createElement("li",null,"\u4efb\u52a1\u5386\u53f2 \u7d2f\u8ba1\u5b8c\u6210",this.finishedTodos.length,"\u4e2a\u4efb\u52a1",o.a.createElement(I,{data:this.dailyTodos,totalFinishedCount:this.finishedTodos.length}))),o.a.createElement(W,null))}},{key:"finishedTodos",get:function(){return this.props.todos.filter((function(e){return e.completed&&!e.deleted}))}},{key:"dailyTodos",get:function(){return M.a.groupBy(this.finishedTodos,(function(e){return Object(S.a)(Date.parse(e.updated_at),"yyyy-MM-dd")}))}}]),t}(a.Component),R=Object(D.b)((function(e,t){return Object(i.a)({todos:e.todos},t)}),null)(L),J=n(259),z=n(31),Y=n(258),q=n(144),Q=(n(230),"\u756a\u8304\u5de5\u4f5c\u6cd5 - Pomodoro Timer"),$=function(e){var t=Object(a.useState)(e.timer),n=Object(q.a)(t,2),r=n[0],c=n[1],s=Math.floor(r/1e3/60),i=Math.floor(r/1e3%60),u="".concat(s<10?"0".concat(s):s," : ").concat(i<10?"0".concat(i):i);Object(a.useEffect)((function(){return document.title="".concat(u," - Pomodoro Timer"),C=window.setInterval((function(){c(r-1e3)}),1e3),r<0&&(e.onFinish(),clearInterval(C),document.title=Q),function(){window.clearInterval(C)}}));var l=1-r/e.duration;return o.a.createElement("div",{className:"CountDown",id:"CountDown"},o.a.createElement("span",{className:"restTime"},s>=0||i>=0?u:"00 : 00"),o.a.createElement("div",{className:"progress",style:{width:"".concat(100*l,"%")}}))},G=(n(231),J.a.confirm),V=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(f.a)(this,Object(h.a)(t).call(this,e))).onFinish=function(){n.forceUpdate()},n.abortTomato=function(){n.updateTomato({aborted:!0}).then((function(){document.title=Q}))},n.updateTomato=function(){var e=Object(d.a)(l.a.mark((function e(t){var a,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.put("tomatoes/".concat(null===(a=n.props.unfinishedTomato)||void 0===a?void 0:a.id),t);case 3:o=e.sent,n.props.updateTomato(o.data.resource),e.next=10;break;case 7:throw e.prev=7,e.t0=e.catch(0),new Error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),n.handleKeyUp=function(){var e=Object(d.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("Enter"!==t||""===n.state.description){e.next=5;break}return e.next=3,n.updateTomato({description:n.state.description,ended_at:new Date});case 3:return e.next=5,n.setState({description:""});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.showConfirm=function(){G({title:"\u786e\u8ba4\u4e22\u5f03\u8fd9\u4e2a\u756a\u8304?",onOk:function(){n.abortTomato()},onCancel:function(){},cancelText:"\u53d6\u6d88",okText:"\u786e\u5b9a"})},n.state={description:""},n}return Object(v.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=o.a.createElement("div",null);if(void 0===this.props.unfinishedTomato)t=o.a.createElement(z.a,{type:"primary",block:!0,onClick:function(){e.props.startTomato()}},"\u5f00\u59cb\u756a\u8304");else{var n,a,r=Date.parse(null===(n=this.props.unfinishedTomato)||void 0===n?void 0:n.started_at),c=null===(a=this.props.unfinishedTomato)||void 0===a?void 0:a.duration,s=(new Date).getTime();if(s-r>c)t=o.a.createElement("div",{className:"inputWrapper"},o.a.createElement(Y.a,{placeholder:"\u8bf7\u8f93\u5165\u4f60\u521a\u624d\u5b8c\u6210\u7684\u4efb\u52a1",value:this.state.description,onChange:function(t){e.setState({description:t.target.value})},onKeyUp:function(t){e.handleKeyUp(t.key)}}),o.a.createElement(b.a,{type:"close-circle",className:"abort"}));else if(s-r<c){var i=c-s+r;t=o.a.createElement("div",{className:"countDownWrapper"},o.a.createElement($,{timer:i,onFinish:this.onFinish,duration:c}),o.a.createElement(b.a,{type:"close-circle",className:"abort",onClick:this.showConfirm}))}}return o.a.createElement("div",{className:"TomatoAction",id:"TomatoAction"},t)}}]),t}(a.Component),X=(n(239),function(e){return o.a.createElement("div",{className:"TomatoItem"},o.a.createElement("span",{className:"timeRange"},Object(S.a)(Date.parse(e.started_at),"H:mm")," - ",Object(S.a)(Date.parse(e.ended_at),"H:mm")),o.a.createElement("span",{className:"description"},e.description))}),Z=function(e){function t(){return Object(p.a)(this,t),Object(f.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.dates.map((function(t){var n=e.props.finishedTomatoes[t];return o.a.createElement("div",{key:t,className:"dailyTomatoes"},o.a.createElement("div",{className:"title"},o.a.createElement("span",{className:"dateTime"},Object(S.a)(Date.parse(t),"M\u6708dd\u65e5")),o.a.createElement("span",{className:"finishCount"},"\u5b8c\u6210\u4e86",n.length,"\u4e2a\u756a\u8304")),n.map((function(e){return o.a.createElement(X,Object.assign({key:e.id},e))})))}));return o.a.createElement("div",{className:"TomatoList",id:"TomatoList"},t)}},{key:"dates",get:function(){return Object.keys(this.props.finishedTomatoes).sort((function(e,t){return Date.parse(e)-Date.parse(t)})).splice(0,3)}}]),t}(a.Component),ee=(n(240),function(e){function t(){var e,n;Object(p.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(f.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).startTomato=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.post("tomatoes",{duration:5e3});case 3:t=e.sent,n.props.addTomato(t.data.resource),e.next=10;break;case 7:throw e.prev=7,e.t0=e.catch(0),new Error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),n}return Object(v.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"Tomatoes",id:"Tomatoes"},o.a.createElement(V,{startTomato:this.startTomato,updateTomato:this.props.updateTomato,unfinishedTomato:this.unfinishedTomato}),o.a.createElement(Z,{finishedTomatoes:this.finishedTomatoes}))}},{key:"unfinishedTomato",get:function(){return this.props.tomatoes.filter((function(e){return!e.description&&!e.ended_at&&!e.aborted}))[0]}},{key:"finishedTomatoes",get:function(){var e=this.props.tomatoes.filter((function(e){return e.description&&e.ended_at&&!e.aborted}));return M.a.groupBy(e,(function(e){return Object(S.a)(Date.parse(e.started_at),"yyyy-MM-dd")}))}}]),t}(a.Component)),te={addTomato:function(e){return{type:"ADD_TOMATO",payload:e}},updateTomato:function(e){return{type:"UPDATE_TOMATO",payload:e}}},ne=Object(D.b)((function(e,t){return Object(i.a)({tomatoes:e.tomatoes},t)}),te)(ee),ae=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(f.a)(this,Object(h.a)(t).call(this,e))).onChange=function(e){n.setState({description:e})},n.postTodo=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.post("todos",{description:n.state.description});case 3:t=e.sent,n.props.addTodo(t.data.resource),e.next=10;break;case 7:throw e.prev=7,e.t0=e.catch(0),new Error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),n.state={description:""},n}return Object(v.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.state.description;return o.a.createElement("div",{className:"TodoInput",id:"TodoInput"},o.a.createElement(Y.a,{placeholder:"\u4eca\u5929\u8981\u5e72\u4ec0\u4e48",value:t,allowClear:!0,onChange:function(t){e.onChange(t.target.value)},onKeyUp:function(t){e.handleKeyUp(t)}}))}},{key:"handleKeyUp",value:function(e){var t=this;"Enter"===e.key&&""!==this.state.description&&this.postTodo().then((function(){t.setState({description:""})}))}}]),t}(a.Component),oe={addTodo:function(e){return{type:"ADD_TODO",payload:e}}},re=Object(D.b)((function(e,t){return Object(i.a)({todos:e.todos},t)}),oe)(ae),ce=n(261),se=n(2),ie=n.n(se),ue=(n(241),function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(f.a)(this,Object(h.a)(t).call(this,e))).handleEditTextChange=function(e){n.setState({editText:e})},n.state={editText:n.props.description},n}return Object(v.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=o.a.createElement("div",{className:"editing"},o.a.createElement("input",{type:"text",value:this.state.editText,onChange:function(t){e.handleEditTextChange(t.target.value)},onKeyUp:function(t){e.handelKeyUp(t)},autoFocus:!0}),o.a.createElement("div",{className:"iconWrapper"},o.a.createElement(b.a,{type:"enter",onClick:function(){e.submit()},className:"enter"}),o.a.createElement(b.a,{type:"delete",onClick:function(){e.props.update(e.props.id,{deleted:!0})}}))),n=o.a.createElement("span",{className:"Text"},this.props.description),a=ie()({TodoItem:!0,editing:this.props.editable,completed:this.props.completed});return o.a.createElement("div",{className:a,id:"TodoItem",onDoubleClick:function(){e.props.editTodo(e.props.id)}},o.a.createElement(ce.a,{checked:this.props.completed,onChange:function(t){e.props.update(e.props.id,{completed:t.target.checked})}}),this.props.editable?t:n)}},{key:"handelKeyUp",value:function(e){"Enter"===e.key&&""!==this.state.editText&&this.props.update(this.props.id,{description:this.state.editText})}},{key:"submit",value:function(){""!==this.state.editText&&this.props.update(this.props.id,{description:this.state.editText})}}]),t}(a.Component)),le=(n(242),function(e){function t(){var e,n;Object(p.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(f.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).isTodoEditable=function(e){n.props.editTodo(e)},n.postTodo=function(){var e=Object(d.a)(l.a.mark((function e(t,a){var o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.completed&&(a.completed_at=new Date),e.prev=1,e.next=4,x.put("todos/".concat(t),a);case 4:o=e.sent,n.props.updateTodo(o.data.resource),e.next=11;break;case 8:throw e.prev=8,e.t0=e.catch(1),new Error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,n){return e.apply(this,arguments)}}(),n}return Object(v.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"Todos",id:"Todos"},o.a.createElement(re,null),o.a.createElement("div",{className:"todoList"},this.unCompletedTodos.map((function(t){return o.a.createElement(ue,Object.assign({key:t.id},t,{update:e.postTodo,editTodo:e.isTodoEditable}))})),this.completedTodos.map((function(t){return o.a.createElement(ue,Object.assign({key:t.id},t,{update:e.postTodo,editTodo:e.isTodoEditable}))}))))}},{key:"unCompletedTodos",get:function(){return this.unDeletedTodos.filter((function(e){return!e.completed}))}},{key:"unDeletedTodos",get:function(){return this.props.todos.filter((function(e){return!e.deleted}))}},{key:"completedTodos",get:function(){return this.unDeletedTodos.filter((function(e){return e.completed}))}}]),t}(a.Component)),de={editTodo:function(e){return{type:"EDIT_TODO",payload:e}},updateTodo:N},pe=Object(D.b)((function(e,t){return Object(i.a)({todos:e.todos},t)}),de)(le),me=b.a.createFromIconfontCN({scriptUrl:"//at.alicdn.com/t/font_808628_b6nuh19mmf5.js"}),fe=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(f.a)(this,Object(h.a)(t).call(this,e))).logout=function(){localStorage.setItem("x-token",""),n.props.history.push("/login")},n.getMe=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.get("me");case 2:t=e.sent,n.setState({user:t.data});case 4:case"end":return e.stop()}}),e)}))),n.getTodos=Object(d.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.get("todos");case 3:t=e.sent,a=t.data.resources.map((function(e){return Object.assign({},e,{editable:!1})})),n.props.initTodos(a),e.next=11;break;case 8:throw e.prev=8,e.t0=e.catch(0),new Error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])}))),n.getTomatoes=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.get("tomatoes");case 3:t=e.sent,n.props.initTomatoes(t.data.resources),e.next=10;break;case 7:throw e.prev=7,e.t0=e.catch(0),new Error;case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),n.state={user:{}},n}return Object(v.a)(t,e),Object(m.a)(t,[{key:"UNSAFE_componentWillMount",value:function(){var e=Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getMe();case 2:return e.next=4,this.getTodos();case 4:return e.next=6,this.getTomatoes();case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e,t=this,n=o.a.createElement(y.a,{style:{textAlign:"right"}},o.a.createElement(y.a.Item,null,o.a.createElement("span",{onClick:function(e){e.preventDefault()}},"\u504f\u597d\u8bbe\u7f6e\xa0",o.a.createElement(b.a,{type:"setting"}))),o.a.createElement(y.a.Item,null,o.a.createElement("span",{onClick:function(e){e.preventDefault(),t.logout()}},"\u9000\u51fa\u767b\u5f55\xa0",o.a.createElement(b.a,{type:"logout"}))));return o.a.createElement("div",{className:"Home",id:"Home"},o.a.createElement("header",null,o.a.createElement("span",{className:"logo"},o.a.createElement(me,{type:"i-Tomato",className:"icon"})),o.a.createElement(O.a,{overlay:n},o.a.createElement("span",{className:"ant-dropdown-link",onClick:function(e){return e.preventDefault()},style:{color:"#1890ff",cursor:"pointer",fontSize:"1rem"}},"\u4f60\u597d, ",null===(e=this.state.user)||void 0===e?void 0:e.account," ",o.a.createElement(b.a,{type:"down"})))),o.a.createElement("main",null,o.a.createElement(ne,null),o.a.createElement(pe,null)),o.a.createElement("footer",null,o.a.createElement(R,null)))}}]),t}(a.Component),he={initTodos:function(e){return{type:"INIT_TODOS",payload:e}},initTomatoes:function(e){return{type:"INIT_TOMATOES",payload:e}}},ve=Object(D.b)((function(e,t){return Object(i.a)({},t)}),he)(fe),be=n(40),ye=n(70),Oe=(n(250),function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(f.a)(this,Object(h.a)(t).call(this,e))).onChange=function(e,t){var a={};a[e]=t,n.setState(a)},n.submit=Object(d.a)(l.a.mark((function e(){var t,a,o,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.state,a=t.account,o=t.password,e.prev=1,e.next=4,x.post("sign_in/user",(r={},Object(be.a)(r,"account",a),Object(be.a)(r,"password",o),r));case 4:console.log("\u6210\u529f"),n.props.history.push("/"),e.next=11;break;case 8:throw e.prev=8,e.t0=e.catch(1),new Error(e.t0);case 11:return e.prev=11,console.log("over"),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])}))),n.state={account:"",password:""},n}return Object(v.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.account,a=t.password;return o.a.createElement("div",{className:"Login",id:"Login"},o.a.createElement("h1",null,"Pomodoro \u767b\u5f55"),o.a.createElement(Y.a,{placeholder:"\u8f93\u5165\u7528\u6237\u540d",prefix:o.a.createElement(b.a,{type:"user",style:{color:"rgba(0,0,0.25)"}}),value:n,onChange:function(t){e.onChange("account",t.target.value)}}),o.a.createElement(Y.a.Password,{placeholder:"\u8f93\u5165\u5bc6\u7801",value:a,onChange:function(t){e.onChange("password",t.target.value)},onKeyDown:function(t){e.handleKeyDown(t.key)}}),o.a.createElement(z.a,{onClick:this.submit,className:"loginButton",type:"primary"},"\u767b\u5f55"),o.a.createElement("p",null,"\u6ca1\u6709\u8d26\u53f7? ",o.a.createElement(ye.a,{to:"/signup"},"\u6ce8\u518c")))}},{key:"handleKeyDown",value:function(e){"Enter"===e&&this.submit()}}]),t}(a.Component)),Te=(n(252),function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(f.a)(this,Object(h.a)(t).call(this,e))).onChange=function(e,t){var a={account:"",password:"",passwordConfirmed:""};a[e]=t,n.setState(a)},n.submit=Object(d.a)(l.a.mark((function e(){var t,a,o,r,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.state,a=t.account,o=t.password,r=t.passwordConfirmed,e.prev=1,e.next=4,x.post("sign_up/user",(c={},Object(be.a)(c,"account",a),Object(be.a)(c,"password",o),Object(be.a)(c,"password_confirmation",r),c));case 4:console.log("\u6210\u529f"),n.props.history.push("/"),e.next=11;break;case 8:throw e.prev=8,e.t0=e.catch(1),new Error(e.t0);case 11:return e.prev=11,console.log("over"),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])}))),n.state={account:"",password:"",passwordConfirmed:""},n}return Object(v.a)(t,e),Object(m.a)(t,[{key:"handleKeyDown",value:function(e){"Enter"===e&&this.submit()}}]),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.account,a=t.password,r=t.passwordConfirmed;return o.a.createElement("div",{className:"SignUp",id:"SignUp"},o.a.createElement("h1",null,"Pomodoro \u6ce8\u518c"),o.a.createElement(Y.a,{placeholder:"\u8f93\u5165\u7528\u6237\u540d",prefix:o.a.createElement(b.a,{type:"user",style:{color:"rgba(0,0,0.25)"}}),value:n,onChange:function(t){e.onChange("account",t.target.value)}}),o.a.createElement(Y.a.Password,{placeholder:"\u8f93\u5165\u5bc6\u7801",value:a,onChange:function(t){e.onChange("password",t.target.value)}}),o.a.createElement(Y.a.Password,{placeholder:"\u8bf7\u518d\u6b21\u8f93\u5165\u5bc6\u7801",value:r,onChange:function(t){e.onChange("passwordConfirmed",t.target.value)},onKeyDown:function(t){e.handleKeyDown(t.key)}}),o.a.createElement(z.a,{onClick:this.submit,className:"signUpButton",type:"primary"},"\u6ce8\u518c"),o.a.createElement("p",null,"\u5df2\u6709\u8d26\u53f7? ",o.a.createElement(ye.a,{to:"/login"},"\u767b\u5f55")))}}]),t}(a.Component));var Ee=function(){return o.a.createElement(s.b,{history:k},o.a.createElement(s.a,{exact:!0,path:"/",component:ve}),o.a.createElement(s.a,{path:"/login",component:Oe}),o.a.createElement(s.a,{path:"/signup",component:Te}))};n(253),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var je=n(62),ge=Object(je.b)({todos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TODO":return[].concat(Object(_.a)(e),[t.payload]);case"INIT_TODOS":return Object(_.a)(t.payload);case"EDIT_TODO":return e.map((function(e){return e.id===t.payload?Object.assign({},e,{editable:!e.editable}):Object.assign({},e,{editable:!1})}));case"UPDATE_TODO":return e.map((function(e){return e.id===t.payload.id?t.payload:e}));default:return e}},tomatoes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TOMATO":return[t.payload].concat(Object(_.a)(e));case"INIT_TOMATOES":return Object(_.a)(t.payload);case"UPDATE_TOMATO":return e.map((function(e){return e.id===t.payload.id?t.payload:e}));default:return e}}}),ke=Object(je.c)(ge);c.a.render(o.a.createElement(D.a,{store:ke},o.a.createElement(Ee,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[148,1,2]]]);
//# sourceMappingURL=main.d355b8c0.chunk.js.map