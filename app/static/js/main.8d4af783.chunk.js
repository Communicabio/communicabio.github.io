(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{191:function(e,t,a){e.exports=a(252)},235:function(e,t,a){},244:function(e,t,a){e.exports=a.p+"static/media/communicabio.e8edc935.svg"},252:function(e,t,a){"use strict";a.r(t);a(192),a(216);var n=a(0),r=a.n(n),o=a(44),s=a.n(o),i=a(71),c=a.n(i),l=a(8),u=a.n(l),h=a(21),d=a(32),p=a(33),g=a(35),m=a(34),b=a(36),f=a(2),y=a(14),v=(a(234),a(112)),k=a.n(v),O=a(113),_=a.n(O),j=a(45),E=a.n(j),S=a(50),x=a.n(S),w=a(27),C=a.n(w),T=a(22),R=a.n(T),P=a(76),H=a.n(P),F=a(77),z=a.n(F),U=a(37),N=a.n(U),J=a(58),I=a.n(J),M=a(75),L=a.n(M),Q=a(49),B=a.n(Q),D=a(73),K=a.n(D),V=a(74),q=a.n(V),A=a(57),W=a.n(A),X=(a(235),"https://communicabio-server-b7e3qu3u4a-uc.a.run.app/"),G=(r.a.Component,function(e){function t(e){var a;return Object(d.a)(this,t),a=Object(g.a)(this,Object(m.a)(t).call(this)),console.log("home-init"),a.state={popout:null,history:[],disabled:!1,token:null},a.props=e,console.log(a.props),a.create_alert=a.create_alert.bind(Object(f.a)(Object(f.a)(a))),a.prepare_alert=a.prepare_alert.bind(Object(f.a)(Object(f.a)(a))),a.get_reply_to=a.get_reply_to.bind(Object(f.a)(Object(f.a)(a))),a.handle_send_message=a.handle_send_message.bind(Object(f.a)(Object(f.a)(a))),a.rollback_dialog=a.rollback_dialog.bind(Object(f.a)(Object(f.a)(a))),a.remove_alert=a.remove_alert.bind(Object(f.a)(Object(f.a)(a))),a.message2Cell=a.message2Cell.bind(Object(f.a)(Object(f.a)(a))),a.onHandleFormChange=a.onHandleFormChange.bind(Object(f.a)(Object(f.a)(a))),a.onHandleFormSubmit=a.onHandleFormSubmit.bind(Object(f.a)(Object(f.a)(a))),a.get_new_dialog=a.get_new_dialog.bind(Object(f.a)(Object(f.a)(a))),a.get_score=a.get_score.bind(Object(f.a)(Object(f.a)(a))),a.get_chat_history=a.get_chat_history.bind(Object(f.a)(Object(f.a)(a))),a.isTooltipClosed=a.isTooltipClosed.bind(Object(f.a)(Object(f.a)(a))),a.closeTooltip=a.closeTooltip.bind(Object(f.a)(Object(f.a)(a))),a.create_feedback_panel=a.create_feedback_panel.bind(Object(f.a)(Object(f.a)(a))),a.renderFeedbackPanel=a.renderFeedbackPanel.bind(Object(f.a)(Object(f.a)(a))),a.get_chat_history().then(function(e){0==e.length?a.get_new_dialog().then(function(e){a.setState({history:e})}):a.setState({history:e})}),a}return Object(b.a)(t,e),Object(p.a)(t,[{key:"get_chat_history",value:function(){var e=Object(h.a)(u.a.mark(function e(){var t,a,n,r;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if("not-obtained"!==this.props.token){e.next=2;break}return e.abrupt("return",[]);case 2:return console.log("get---user "+this.props.token),e.next=5,fetch(X+"user?"+new URLSearchParams({token:this.props.token}));case 5:return t=e.sent,a=[],e.next=9,t.json();case 9:if(t=e.sent,console.log(t),n=t.user.last_dialog,console.log(n),null!=n){e.next=15;break}return e.abrupt("return",[]);case 15:for(r=0;r<n.length;r+=1)a.push({text:n[r],actor:r%2});return console.log("last_dialog "+a),e.abrupt("return",a);case 18:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"get_new_dialog",value:function(){var e=Object(h.a)(u.a.mark(function e(){var t,a,n,r,o;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("get_new_dialog "),"not-obtained"!=(t=this.props.token)){e.next=4;break}return e.abrupt("return",[]);case 4:return e.next=6,fetch(X+"start_dialog",{method:"POST",body:JSON.stringify({token:t})});case 6:return a=e.sent,e.next=9,a.json();case 9:return n=e.sent,r=n.first_message,o=[{actor:0,text:r}],localStorage.setItem("chat_history",JSON.stringify(o)),e.abrupt("return",o);case 14:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"get_score",value:function(){var e=Object(h.a)(u.a.mark(function e(t){var a,n,r;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=this.props.token,e.next=3,fetch(X+"finish_dialog",{method:"POST",body:JSON.stringify({token:a}),headers:{"Content-Type":"application/json"}});case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,console.log("get_score "+r),e.abrupt("return",r.metrics);case 9:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"get_reply_to",value:function(){var e=Object(h.a)(u.a.mark(function e(t){var a,n=this;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:(a=this.state.history).push({text:t,actor:1}),console.log(a),this.setState({history:a,disabled:!0}),fetch(X+"reply",{method:"POST",body:JSON.stringify({token:this.props.token,message:t}),headers:{"Content-Type":"application/json"}}).then(function(e){n.get_chat_history().then(function(e){return n.setState({history:e,disabled:!1})})}),console.log(this.state);case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"handle_send_message",value:function(){}},{key:"rollback_dialog",value:function(){var e=Object(h.a)(u.a.mark(function e(){var t;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({disabled:!0}),e.next=3,fetch(X+"rollback",{method:"POST",body:JSON.stringify({token:this.props.token}),headers:{"Content-Type":"application/json"}});case 3:return e.sent,e.next=6,this.get_chat_history();case 6:t=e.sent,this.setState({history:t,disabled:!1});case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"remove_alert",value:function(e){var t=this;console.log("remove alert"),e?this.get_new_dialog().then(function(e){t.setState({popout:null,history:e})}):this.setState({popout:null})}},{key:"renderMessage",value:function(e){var t=this;if(console.log("renderMessage "+JSON.stringify(e)),0==e.actor)return r.a.createElement(N.a,{mode:"shadow",size:"l"},this.message2Cell(e));if(0==e.mistakes.length)return r.a.createElement(N.a,{mode:"tint",size:"l"},this.message2Cell(e));console.log(e.mistakes);var a="";e.mistakes.forEach(function(e,t){a+="\xab"+e.word+"\xbb \u043f\u043e\u0440\u0442\u0438\u0442 \u043f\u043e\u043a\u0430\u0437\u0430\u0442\u0435\u043b\u044c \xab"+e.metric+"\xbb\n"}),console.log(a);var n=r.a.createElement(y.g,{text:a,isShown:this.state.tooltip==e.ind,onClose:function(){return t.setState({tooltip:t.state.tooltip+1})},offsetX:10},r.a.createElement(B.a,null,r.a.createElement(N.a,{mode:"tint",size:"l"},this.message2Cell(e))));return console.log(n),n}},{key:"renderFeedbackPanel",value:function(){var e=this;return r.a.createElement(E.a,{id:this.props.id},r.a.createElement(R.a,{id:"chat-parent"},this.history.map(function(t){return e.renderMessage(t)})),r.a.createElement(R.a,{style:{height:"50px"}}),r.a.createElement(y.b,{vertical:"bottom"},r.a.createElement(C.a,{size:"xl",mode:"secondary",onClick:function(){return e.remove_alert(1)}},"\u0412\u0441\u0435 \u043f\u043e\u043d\u044f\u0442\u043d\u043e")))}},{key:"create_feedback_panel",value:function(){var e=this.scores,t=this.state.history;console.log("create_feedback_panel"),console.log(t),console.log(e),this.history=this.state.history;for(var a=0,n=0,r=0;r<this.history.length;r+=1)if(console.log(r),0==this.history[r].actor)this.history[r].mistakes=[];else{var o=[];this.history[r].ind=a,e.forEach(function(e){var t=e.metric;e.mistakes.forEach(function(e){e[0]===a&&(o.push({metric:t,word:e[1]}),n+=1)})}),this.history[r].mistakes=o,a+=1}if(console.log("hint_count "+n),0==n)return console.log("hint_count == 0"),void this.remove_alert(1);this.setState({popout:"feedback",tooltip:0})}},{key:"create_alert",value:function(e){var t=this;if(console.log("dialog scores"),console.log(e),e[0].score<0)a=r.a.createElement("p",null,"\u041a \u0441\u043e\u0436\u0430\u043b\u0435\u043d\u0438\u044e, \u0443 \u043d\u0430\u0441 \u043f\u043e\u043a\u0430 \u043d\u0435\u0442 \u043d\u043e\u0440\u043c\u0430\u043b\u044c\u043d\u044b\u0445 \u043a\u0440\u0438\u0442\u0435\u0440\u0438\u0435\u0432 \u043e\u0446\u0435\u043d\u043a\u0438 \u043d\u0430 \u0430\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u043e\u043c. \u0427\u0435\u0440\u0435\u0437 \u043f\u0430\u0440\u0443 \u0434\u043d\u0435\u0439 \u0432\u0441\u0435 \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u0441\u044f");else var a=r.a.createElement("p",null,e.map(function(e){return r.a.createElement("p",null,"\u0412\u0430\u0448\u0438 \u0431\u0430\u043b\u043b\u044b \u0437\u0430 ",e.metric,": ",e.score,r.a.createElement("br",null))}));this.scores=e;var n=r.a.createElement(L.a,{id:"end-of-dialog-alert",actionsLayout:"vertical",actions:[{title:"\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c",autoclose:!0,mode:"default",action:function(){}}],onClose:function(){return t.create_feedback_panel()}},r.a.createElement("h2",null,"\u0417\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0438\u0435 \u0434\u0438\u0430\u043b\u043e\u0433\u0430"),a);this.setState({popout:n})}},{key:"prepare_alert",value:function(){var e=Object(h.a)(u.a.mark(function e(){var t,a=this;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({disabled:!0,popout:"loading"}),e.next=3,this.get_chat_history();case 3:t=e.sent,this.setState({history:t}),this.get_score(t).then(function(e){if(a.setState({disabled:!1}),console.log("response"),console.log(e),console.log(e.ok),console.log(e.status),!e.ok)return a.remove_alert(1),1;console.log(e);var t=[{metric:"\u0432\u0435\u0436\u043b\u0438\u0432\u043e\u0441\u0442\u044c",score:(2+3*e.politeness.score).toFixed(2),mistakes:e.politeness.mistakes},{metric:"\u043f\u043e\u0437\u0438\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c",score:(2+3*e.positivity.score).toFixed(2),mistakes:e.positivity.mistakes}];a.create_alert(t)});case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"message2Cell",value:function(e){return 0==e.actor?r.a.createElement(B.a,{multiline:!0,before:r.a.createElement(H.a,{src:a(244)})},e.text):r.a.createElement(B.a,{multiline:!0},e.text)}},{key:"onHandleFormChange",value:function(e){this.setState({user_message:e.target.value})}},{key:"onHandleFormSubmit",value:function(e){e.preventDefault();var t=this.state.user_message;console.log(t),this.get_reply_to(t)}},{key:"isTooltipClosed",value:function(e){for(var t=this.state.tooltips,a=0;a<t.length;a+=1)if(t[a]==e)return!1;return!0}},{key:"closeTooltip",value:function(e){for(var t=this.state.tooltips,a=[],n=0;n<t.length;n+=1)t[n]!=e&&a.push(t[n]);a.length,this.setState({tooltips:a})}},{key:"loadigRender",value:function(){return r.a.createElement(E.a,{id:this.props.id},r.a.createElement(x.a,null,"\u0427\u0430\u0442"),r.a.createElement(y.d,{size:"large",style:{marginTop:50}}))}},{key:"chatRender",value:function(){var e=this;return r.a.createElement(E.a,{id:this.props.id},r.a.createElement(x.a,null,"\u0427\u0430\u0442"),r.a.createElement(R.a,{id:"chat-parent"},this.state.history.map(function(t){return r.a.createElement(N.a,{mode:{0:"shadow",1:"tint"}[t.actor],size:"l"},e.message2Cell(t))})),r.a.createElement(R.a,{style:{height:"130px"}}),r.a.createElement(y.b,{vertical:"bottom"},r.a.createElement(R.a,null,r.a.createElement(R.a,{style:{display:"flex"}},r.a.createElement(C.a,{size:"l",stretched:!0,style:{marginRight:8},before:r.a.createElement(q.a,null),disabled:this.state.disabled,onClick:function(){return e.rollback_dialog(e)}},"\u041e\u0442\u043c\u0435\u043d\u0430"),r.a.createElement(C.a,{size:"l",stretched:!0,mode:"secondary",disabled:this.state.disabled,before:r.a.createElement(W.a,null),onClick:this.prepare_alert},"\u0417\u0430\u043a\u043e\u043d\u0447\u0438\u0442\u044c")),r.a.createElement(I.a,null),r.a.createElement(R.a,{style:{position:"relative"}},r.a.createElement(z.a,{style:{float:"left",marginBottom:"10px",marginRight:"10px"},onChange:this.onHandleFormChange,defaultValue:this.state.user_message}),r.a.createElement(C.a,{onClick:this.onHandleFormSubmit,disabled:this.state.disabled,before:r.a.createElement(K.a,null),style:{float:"left"}})))))}},{key:"render",value:function(){return console.log("home-render"),console.log(this.props),null==this.state.popout?this.chatRender():"feedback"===this.state.popout?this.renderFeedbackPanel():"loading"===this.state.popout?this.loadigRender():this.state.popout}}]),t}(r.a.Component)),Y=a(78),Z=a.n(Y),$=a(114),ee=a.n($),te=a(115),ae=a.n(te),ne=a(116),re=a.n(ne),oe=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(g.a)(this,Object(m.a)(t).call(this))).N=8,a.M=20,a.props=e,a.state={place:0,our_place:1e8,table:[]},a.changePlace(0),console.log(a.props),a.getUserInfo=a.getUserInfo.bind(Object(f.a)(Object(f.a)(a))),a.renderRating=a.renderRating.bind(Object(f.a)(Object(f.a)(a))),a.getRatingTable=a.getRatingTable.bind(Object(f.a)(Object(f.a)(a))),a.changePlace=a.changePlace.bind(Object(f.a)(Object(f.a)(a))),a.goHome=a.goHome.bind(Object(f.a)(Object(f.a)(a))),a}return Object(b.a)(t,e),Object(p.a)(t,[{key:"getUserInfo",value:function(){var e=Object(h.a)(u.a.mark(function e(){var t;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(X+"user?"+new URLSearchParams({token:this.props.token}));case 2:return t=e.sent,e.next=5,t.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"getRatingTable",value:function(){var e=Object(h.a)(u.a.mark(function e(t,a){var n,r,o;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("start "+t+" end "+a),e.next=3,fetch(X+"rating?"+new URLSearchParams({n:t,m:a,token:this.props.token}));case 3:return n=e.sent,e.next=6,n.json();case 6:for(r=e.sent,console.log("getRatingTable"),console.log(r),o=0;o<r.rating.length;o+=1)r.rating[o].place=t+o+1;return console.log("places.."),console.log(r.rating),e.abrupt("return",r.rating);case 13:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}()},{key:"renderRating",value:function(e,t){return console.log("renderRating"),console.log(e),console.log(t),r.a.createElement(Z.a,null,t.map(function(t){return r.a.createElement(N.a,{size:"l",mode:{0:"shadow",1:"tint"}[e!=t.place]},r.a.createElement(R.a,{style:{float:"left"}},t.place,"\u0435"),r.a.createElement(R.a,{style:{float:"left"}},t.name),r.a.createElement(R.a,{style:{float:"right"}},t.avg_score.toFixed(2)))}))}},{key:"changePlace",value:function(){var e=Object(h.a)(u.a.mark(function e(t){var a,n,r,o;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("changePlace "+t),e.next=3,this.getUserInfo();case 3:return a=e.sent,n=a.place,r=Math.max(0,this.state.place+t),e.next=8,this.getRatingTable(r,r+this.N-1);case 8:o=e.sent,console.log("table "+o),this.setState({table:o,our_place:n,place:r}),console.log(this);case 12:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"goHome",value:function(){var e=Object(h.a)(u.a.mark(function e(){var t,a,n,r;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getUserInfo();case 2:return t=e.sent,a=t.user.place,n=Math.max(0,a-this.N/2),e.next=7,this.getRatingTable(n,n+this.N-1);case 7:r=e.sent,this.setState({table:r,our_place:a,place:n}),console.log(this);case 10:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return console.log("rating_render"),r.a.createElement(E.a,{id:this.props.id},r.a.createElement(x.a,null,"\u0420\u0435\u0439\u0442\u0438\u043d\u0433"),this.renderRating(this.state.place,this.state.table),r.a.createElement(y.b,{vertical:"bottom"},r.a.createElement(R.a,{style:{display:"flex"}},r.a.createElement(C.a,{size:"l",stretched:!0,style:{marginRight:8},before:r.a.createElement(ee.a,null),onClick:function(){e.changePlace(-1)}}),r.a.createElement(C.a,{size:"l",stretched:!0,style:{marginRight:8},mode:"secondary",before:r.a.createElement(re.a,null),onClick:this.goHome},"\u041c\u043e\u0435 \u043c\u0435\u0441\u0442\u043e"),r.a.createElement(C.a,{size:"l",stretched:!0,style:{marginRight:8},before:r.a.createElement(ae.a,null),onClick:function(){e.changePlace(1)}}))))}}]),t}(r.a.Component),se=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(g.a)(this,Object(m.a)(t).call(this,e))).parseQueryString=function(e){return e.slice(1).split("&").map(function(e){var t=e.split("=");return{key:t[0],value:t[1]}}).reduce(function(e,t){return e[t.key]=t.value,e},{})},a.go=function(e){a.setState({activePanel:e.currentTarget.dataset.to})},a.state={activePanel:"home",fetchedUser:null,activeStory:"chat",token:"not-obtained"},a.renderHome=a.renderHome.bind(Object(f.a)(Object(f.a)(a))),a.renderRating=a.renderRating.bind(Object(f.a)(Object(f.a)(a))),a.onStoryChange=a.onStoryChange.bind(Object(f.a)(Object(f.a)(a))),a.parseQueryString=a.parseQueryString.bind(Object(f.a)(Object(f.a)(a))),a.obtainToken=a.obtainToken.bind(Object(f.a)(Object(f.a)(a))),a}return Object(b.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.obtainToken()}},{key:"onStoryChange",value:function(e){this.setState({activeStory:e.currentTarget.dataset.story})}},{key:"obtainToken",value:function(){var e=Object(h.a)(u.a.mark(function e(){var t,a,n,r;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=window.location.search,a={data:t},a=JSON.stringify(a),e.next=5,fetch(X+"token",{method:"POST",body:a,headers:{"Content-Type":"application/json"}});case 5:return n=e.sent,e.next=8,n.json();case 8:r=e.sent,this.setState({token:r.token}),console.log("!!!!!!!!!!!!TOKEN!!!!!!!!!!!!!!!!"),console.log(r.token);case 12:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"renderHome",value:function(){return"not-obtained"!=this.state.token?r.a.createElement(G,{id:"home",fetchedUser:this.state.fetchedUser,go:this.go,token:this.state.token}):r.a.createElement(y.c,{id:"home"},r.a.createElement(y.d,{size:"large",style:{marginTop:50}}))}},{key:"renderRating",value:function(){return"not-obtained"!=this.state.token?r.a.createElement(oe,{id:"rating",fetchedUser:this.state.fetchedUser,go:this.go,token:this.state.token}):r.a.createElement(y.c,{id:"rating"})}},{key:"render",value:function(){return r.a.createElement(y.a,{activeStory:this.state.activeStory,tabbar:r.a.createElement(y.e,null,r.a.createElement(y.f,{onClick:this.onStoryChange,selected:"chat"===this.state.activeStory,"data-story":"chat",text:"\u0427\u0430\u0442"},r.a.createElement(k.a,null)),r.a.createElement(y.f,{onClick:this.onStoryChange,selected:"rating-view"===this.state.activeStory,"data-story":"rating-view",text:"\u0420\u0435\u0439\u0442\u0438\u043d\u0433"},r.a.createElement(_.a,null)))},r.a.createElement(y.h,{id:"chat",activePanel:this.state.activePanel},this.renderHome()),r.a.createElement(y.h,{id:"rating-view",activePanel:"rating"},this.renderRating()))}}]),t}(r.a.Component);c.a.send("VKWebAppInit",{}),s.a.render(r.a.createElement(se,null),document.getElementById("root"))}},[[191,1,2]]]);
//# sourceMappingURL=main.8d4af783.chunk.js.map