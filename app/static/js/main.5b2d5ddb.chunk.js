(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{189:function(e,t,n){e.exports=n(250)},233:function(e,t,n){},242:function(e,t,n){e.exports=n.p+"static/media/communicabio.e8edc935.svg"},250:function(e,t,n){"use strict";n.r(t);n(190),n(214);var a=n(0),r=n.n(a),o=n(39),s=n.n(o),i=n(78),c=n.n(i),l=n(8),u=n.n(l),h=n(21),d=n(29),p=n(30),g=n(32),m=n(31),b=n(33),f=n(2),y=n(7),k=(n(232),n(119)),v=n.n(k),O=n(120),j=n.n(O),_=n(121),E=n.n(_),S=n(36),x=n.n(S),w=n(40),C=n.n(w),T=n(26),P=n.n(T),R=n(22),U=n.n(R),H=n(62),F=n.n(H),I=n(63),N=n.n(I),z=n(35),J=n.n(z),L=n(51),M=n.n(L),K=n(61),Q=n.n(K),V=n(47),B=n.n(V),D=n(59),q=n.n(D),A=n(60),W=n.n(A),X=n(50),G=n.n(X),Y=(n(233),"https://communicabio-server-b7e3qu3u4a-uc.a.run.app/"),Z=(r.a.Component,function(e){function t(e){var n;return Object(d.a)(this,t),n=Object(g.a)(this,Object(m.a)(t).call(this)),console.log("home-init"),n.state={popout:null,history:[],disabled:!1,token:null},n.props=e,console.log(n.props),n.create_alert=n.create_alert.bind(Object(f.a)(Object(f.a)(n))),n.prepare_alert=n.prepare_alert.bind(Object(f.a)(Object(f.a)(n))),n.get_reply_to=n.get_reply_to.bind(Object(f.a)(Object(f.a)(n))),n.handle_send_message=n.handle_send_message.bind(Object(f.a)(Object(f.a)(n))),n.rollback_dialog=n.rollback_dialog.bind(Object(f.a)(Object(f.a)(n))),n.remove_alert=n.remove_alert.bind(Object(f.a)(Object(f.a)(n))),n.message2Cell=n.message2Cell.bind(Object(f.a)(Object(f.a)(n))),n.onHandleFormChange=n.onHandleFormChange.bind(Object(f.a)(Object(f.a)(n))),n.onHandleFormSubmit=n.onHandleFormSubmit.bind(Object(f.a)(Object(f.a)(n))),n.get_new_dialog=n.get_new_dialog.bind(Object(f.a)(Object(f.a)(n))),n.get_score=n.get_score.bind(Object(f.a)(Object(f.a)(n))),n.get_chat_history=n.get_chat_history.bind(Object(f.a)(Object(f.a)(n))),n.isTooltipClosed=n.isTooltipClosed.bind(Object(f.a)(Object(f.a)(n))),n.closeTooltip=n.closeTooltip.bind(Object(f.a)(Object(f.a)(n))),n.create_feedback_panel=n.create_feedback_panel.bind(Object(f.a)(Object(f.a)(n))),n.renderFeedbackPanel=n.renderFeedbackPanel.bind(Object(f.a)(Object(f.a)(n))),n.get_chat_history().then(function(e){0==e.length?n.get_new_dialog().then(function(e){n.setState({history:e})}):n.setState({history:e})}),n}return Object(b.a)(t,e),Object(p.a)(t,[{key:"get_chat_history",value:function(){var e=Object(h.a)(u.a.mark(function e(){var t,n,a,r;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if("not-obtained"!==this.props.token){e.next=2;break}return e.abrupt("return",[]);case 2:return console.log("get---user "+this.props.token),e.next=5,fetch(Y+"user?"+new URLSearchParams({token:this.props.token}));case 5:return t=e.sent,n=[],e.next=9,t.json();case 9:if(t=e.sent,console.log(t),a=t.user.last_dialog,console.log(a),null!=a){e.next=15;break}return e.abrupt("return",[]);case 15:for(r=0;r<a.length;r+=1)n.push({text:a[r],actor:r%2});return console.log("last_dialog "+n),e.abrupt("return",n);case 18:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"get_new_dialog",value:function(){var e=Object(h.a)(u.a.mark(function e(){var t,n,a,r,o;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("get_new_dialog "),"not-obtained"!=(t=this.props.token)){e.next=4;break}return e.abrupt("return",[]);case 4:return e.next=6,fetch(Y+"start_dialog",{method:"POST",body:JSON.stringify({token:t})});case 6:return n=e.sent,e.next=9,n.json();case 9:return a=e.sent,r=a.first_message,o=[{actor:0,text:r}],localStorage.setItem("chat_history",JSON.stringify(o)),e.abrupt("return",o);case 14:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"get_score",value:function(){var e=Object(h.a)(u.a.mark(function e(t){var n,a,r;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.props.token,e.next=3,fetch(Y+"finish_dialog",{method:"POST",body:JSON.stringify({token:n}),headers:{"Content-Type":"application/json"}});case 3:if(a=e.sent,console.log("response"),console.log(a.ok),console.log(a.status),a.ok){e.next=10;break}return this.remove_alert(1),e.abrupt("return",null);case 10:return e.next=12,a.json();case 12:return r=e.sent,console.log("get_score "+r),e.abrupt("return",r);case 15:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"get_reply_to",value:function(){var e=Object(h.a)(u.a.mark(function e(t){var n,a=this;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:(n=this.state.history).push({text:t,actor:1}),console.log(n),this.setState({history:n,disabled:!0}),fetch(Y+"reply",{method:"POST",body:JSON.stringify({token:this.props.token,message:t}),headers:{"Content-Type":"application/json"}}).then(function(e){a.get_chat_history().then(function(e){return a.setState({history:e,disabled:!1})})}),console.log(this.state);case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"handle_send_message",value:function(){}},{key:"rollback_dialog",value:function(){var e=Object(h.a)(u.a.mark(function e(){var t;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({disabled:!0}),e.next=3,fetch(Y+"rollback",{method:"POST",body:JSON.stringify({token:this.props.token}),headers:{"Content-Type":"application/json"}});case 3:return e.sent,e.next=6,this.get_chat_history();case 6:t=e.sent,this.setState({history:t,disabled:!1});case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"remove_alert",value:function(e){var t=this;console.log("remove alert"),e?this.get_new_dialog().then(function(e){t.setState({popout:null,history:e})}):this.setState({popout:null})}},{key:"renderMessage",value:function(e){var t=this;if(console.log("renderMessage "+JSON.stringify(e)),0==e.actor)return r.a.createElement(J.a,{mode:"shadow",size:"l"},this.message2Cell(e));if(0==e.mistakes.length)return r.a.createElement(J.a,{mode:"tint",size:"l"},this.message2Cell(e));console.log(e.mistakes);var n="";e.mistakes.forEach(function(e,t){n+="\xab"+e.word+"\xbb \u043f\u043e\u0440\u0442\u0438\u0442 \u043f\u043e\u043a\u0430\u0437\u0430\u0442\u0435\u043b\u044c \xab"+e.metric+"\xbb\n"}),console.log(n);var a=r.a.createElement(y.i,{text:n,isShown:this.state.tooltip==e.ind,onClose:function(){return t.setState({tooltip:t.state.tooltip+1})},offsetX:10},r.a.createElement(B.a,null,r.a.createElement(J.a,{mode:"tint",size:"l"},this.message2Cell(e))));return console.log(a),a}},{key:"renderFeedbackPanel",value:function(){var e=this;return r.a.createElement(x.a,{id:this.props.id},r.a.createElement(U.a,{id:"chat-parent"},this.history.map(function(t){return e.renderMessage(t)})),r.a.createElement(U.a,{style:{height:"50px"}}),r.a.createElement(y.b,{vertical:"bottom"},r.a.createElement(P.a,{size:"xl",mode:"secondary",onClick:function(){return e.remove_alert(1)}},"\u0412\u0441\u0435 \u043f\u043e\u043d\u044f\u0442\u043d\u043e")))}},{key:"create_feedback_panel",value:function(){var e=this.scores,t=this.state.history;console.log("create_feedback_panel"),console.log(t),console.log(e),this.history=this.state.history;for(var n=0,a=0,r=0,o=0;o<this.history.length;o+=1)if(console.log(o),0==this.history[o].actor)this.history[o].mistakes=[];else{var s=[];this.history[o].ind=a,e.forEach(function(e){var t=e.metric;e.mistakes.forEach(function(e){e[0]===n&&(s.push({metric:t,word:e[1]}),r+=1)})}),this.history[o].mistakes=s,a+=s.length>=1,n+=1}if(console.log("hint_count "+r),0==r)return console.log("hint_count == 0"),void this.remove_alert(1);this.setState({popout:"feedback",tooltip:0})}},{key:"create_alert",value:function(e,t){var n=this;if(console.log("dialog scores"),console.log(e),e[0].score<0)a=r.a.createElement("p",null,"\u041a \u0441\u043e\u0436\u0430\u043b\u0435\u043d\u0438\u044e, \u0443 \u043d\u0430\u0441 \u043f\u043e\u043a\u0430 \u043d\u0435\u0442 \u043d\u043e\u0440\u043c\u0430\u043b\u044c\u043d\u044b\u0445 \u043a\u0440\u0438\u0442\u0435\u0440\u0438\u0435\u0432 \u043e\u0446\u0435\u043d\u043a\u0438 \u043d\u0430 \u0430\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u043e\u043c. \u0427\u0435\u0440\u0435\u0437 \u043f\u0430\u0440\u0443 \u0434\u043d\u0435\u0439 \u0432\u0441\u0435 \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u0441\u044f");else var a=r.a.createElement("p",null,e.map(function(e){return r.a.createElement("p",null,"\u0412\u0430\u0448\u0438 \u0431\u0430\u043b\u043b\u044b \u0437\u0430 ",e.metric,": ",e.score,r.a.createElement("br",null))}));this.scores=e;var o=r.a.createElement(Q.a,{id:"end-of-dialog-alert",actionsLayout:"vertical",actions:[{title:"\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c",autoclose:!0,mode:"default",action:function(){}}],onClose:function(){return n.create_feedback_panel()}},r.a.createElement("h2",null,"\u0417\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0438\u0435 \u0434\u0438\u0430\u043b\u043e\u0433\u0430"),a),s=document.createElement("script");s.text='VK.Share.button({url: "https://communicabio.github.io/share?dialog="'+t+'},{type: "round_nocount", text: "\u041f\u043e\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f \u0434\u0438\u0430\u043b\u043e\u0433\u043e\u043c"})};',s.async=!0,o.appendChild(s),this.setState({popout:o})}},{key:"prepare_alert",value:function(){var e=Object(h.a)(u.a.mark(function e(){var t,n=this;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({disabled:!0,popout:"loading"}),e.next=3,this.get_chat_history();case 3:t=e.sent,this.setState({history:t}),this.get_score(t).then(function(e){if(n.setState({disabled:!1}),null!==e){console.log(e);var t=e.dialog,a=[{metric:"\u0432\u0435\u0436\u043b\u0438\u0432\u043e\u0441\u0442\u044c",score:(2+3*(e=e.metrics).politeness.score).toFixed(2),mistakes:e.politeness.mistakes},{metric:"\u043f\u043e\u0437\u0438\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c",score:(2+3*e.positivity.score).toFixed(2),mistakes:e.positivity.mistakes}];n.create_alert(a,t)}});case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"message2Cell",value:function(e){return 0==e.actor?r.a.createElement(B.a,{multiline:!0,before:r.a.createElement(F.a,{src:n(242)})},e.text):r.a.createElement(B.a,{multiline:!0},e.text)}},{key:"onHandleFormChange",value:function(e){this.setState({user_message:e.target.value})}},{key:"onHandleFormSubmit",value:function(e){e.preventDefault();var t=this.state.user_message;console.log(t),this.get_reply_to(t)}},{key:"isTooltipClosed",value:function(e){for(var t=this.state.tooltips,n=0;n<t.length;n+=1)if(t[n]==e)return!1;return!0}},{key:"closeTooltip",value:function(e){for(var t=this.state.tooltips,n=[],a=0;a<t.length;a+=1)t[a]!=e&&n.push(t[a]);n.length,this.setState({tooltips:n})}},{key:"loadigRender",value:function(){return r.a.createElement(x.a,{id:this.props.id},r.a.createElement(C.a,null,"\u0427\u0430\u0442"),r.a.createElement(y.f,{size:"large",style:{marginTop:50}}))}},{key:"chatRender",value:function(){var e=this;return r.a.createElement(x.a,{id:this.props.id},r.a.createElement(C.a,null,"\u0427\u0430\u0442"),r.a.createElement(U.a,{id:"chat-parent"},this.state.history.map(function(t){return r.a.createElement(J.a,{mode:{0:"shadow",1:"tint"}[t.actor],size:"l"},e.message2Cell(t))})),r.a.createElement(U.a,{style:{height:"130px"}}),r.a.createElement(y.b,{vertical:"bottom"},r.a.createElement(U.a,null,r.a.createElement(U.a,{style:{display:"flex"}},r.a.createElement(P.a,{size:"l",stretched:!0,style:{marginRight:8},before:r.a.createElement(W.a,null),disabled:this.state.disabled,onClick:function(){return e.rollback_dialog(e)}},"\u041e\u0442\u043c\u0435\u043d\u0430"),r.a.createElement(P.a,{size:"l",stretched:!0,mode:"secondary",disabled:this.state.disabled,before:r.a.createElement(G.a,null),onClick:this.prepare_alert},"\u0417\u0430\u043a\u043e\u043d\u0447\u0438\u0442\u044c")),r.a.createElement(M.a,null),r.a.createElement(U.a,{style:{position:"relative"}},r.a.createElement(N.a,{style:{float:"left",marginBottom:"10px",marginRight:"10px"},onChange:this.onHandleFormChange,defaultValue:this.state.user_message}),r.a.createElement(P.a,{onClick:this.onHandleFormSubmit,disabled:this.state.disabled,before:r.a.createElement(q.a,null),style:{float:"left"}})))))}},{key:"render",value:function(){return console.log("home-render"),console.log(this.props),null==this.state.popout?this.chatRender():"feedback"===this.state.popout?this.renderFeedbackPanel():"loading"===this.state.popout?this.loadigRender():this.state.popout}}]),t}(r.a.Component)),$=n(64),ee=n.n($),te=n(80),ne=n.n(te),ae=n(81),re=n.n(ae),oe=n(82),se=n.n(oe),ie=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(g.a)(this,Object(m.a)(t).call(this))).N=8,n.M=20,n.props=e,n.state={place:0,our_place:1e8,table:[]},n.changePlace(0),console.log(n.props),n.getUserInfo=n.getUserInfo.bind(Object(f.a)(Object(f.a)(n))),n.renderRating=n.renderRating.bind(Object(f.a)(Object(f.a)(n))),n.getRatingTable=n.getRatingTable.bind(Object(f.a)(Object(f.a)(n))),n.changePlace=n.changePlace.bind(Object(f.a)(Object(f.a)(n))),n.goHome=n.goHome.bind(Object(f.a)(Object(f.a)(n))),n}return Object(b.a)(t,e),Object(p.a)(t,[{key:"getUserInfo",value:function(){var e=Object(h.a)(u.a.mark(function e(){var t;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(Y+"user?"+new URLSearchParams({token:this.props.token}));case 2:return t=e.sent,e.next=5,t.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"getRatingTable",value:function(){var e=Object(h.a)(u.a.mark(function e(t,n){var a,r,o;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("start "+t+" end "+n),e.next=3,fetch(Y+"rating?"+new URLSearchParams({n:t,m:n,token:this.props.token}));case 3:return a=e.sent,e.next=6,a.json();case 6:for(r=e.sent,console.log("getRatingTable"),console.log(r),o=0;o<r.rating.length;o+=1)r.rating[o].place=t+o+1;return console.log("places.."),console.log(r.rating),e.abrupt("return",r.rating);case 13:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}()},{key:"renderRating",value:function(e,t){return console.log("renderRating"),console.log(e),console.log(t),r.a.createElement(ee.a,null,t.map(function(t){return r.a.createElement(J.a,{size:"l",mode:{0:"shadow",1:"tint"}[e!=t.place]},r.a.createElement(U.a,{style:{float:"left"}},t.place,"\u0435"),r.a.createElement(U.a,{style:{float:"left"}},t.name),r.a.createElement(U.a,{style:{float:"right"}},t.avg_score.toFixed(2)))}))}},{key:"changePlace",value:function(){var e=Object(h.a)(u.a.mark(function e(t){var n,a,r,o;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("changePlace "+t),e.next=3,this.getUserInfo();case 3:return n=e.sent,a=n.place,r=Math.max(0,this.state.place+t),e.next=8,this.getRatingTable(r,r+this.N-1);case 8:o=e.sent,console.log("table "+o),this.setState({table:o,our_place:a,place:r}),console.log(this);case 12:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"goHome",value:function(){var e=Object(h.a)(u.a.mark(function e(){var t,n,a,r;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getUserInfo();case 2:return t=e.sent,n=t.user.place,a=Math.max(0,n-this.N/2),e.next=7,this.getRatingTable(a,a+this.N-1);case 7:r=e.sent,this.setState({table:r,our_place:n,place:a}),console.log(this);case 10:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return console.log("rating_render"),r.a.createElement(x.a,{id:this.props.id},r.a.createElement(C.a,null,"\u0420\u0435\u0439\u0442\u0438\u043d\u0433"),this.renderRating(this.state.place,this.state.table),r.a.createElement(y.b,{vertical:"bottom"},r.a.createElement(U.a,{style:{display:"flex"}},r.a.createElement(P.a,{size:"l",stretched:!0,style:{marginRight:8},before:r.a.createElement(ne.a,null),onClick:function(){e.changePlace(-1)}}),r.a.createElement(P.a,{size:"l",stretched:!0,style:{marginRight:8},mode:"secondary",before:r.a.createElement(se.a,null),onClick:this.goHome},"\u041c\u043e\u0435 \u043c\u0435\u0441\u0442\u043e"),r.a.createElement(P.a,{size:"l",stretched:!0,style:{marginRight:8},before:r.a.createElement(re.a,null),onClick:function(){e.changePlace(1)}}))))}}]),t}(r.a.Component),ce=n(65),le=n.n(ce),ue=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(g.a)(this,Object(m.a)(t).call(this))).props=e,n.state={lang:-1,hints:-1},console.log(n.props),n.getUserInfo=n.getUserInfo.bind(Object(f.a)(Object(f.a)(n))),n.updateLang=n.updateLang.bind(Object(f.a)(Object(f.a)(n))),n.getUserInfo().then(function(e){return n.setState({lang:e.user.lang,hints:e.user.hints})}),n}return Object(b.a)(t,e),Object(p.a)(t,[{key:"getUserInfo",value:function(){var e=Object(h.a)(u.a.mark(function e(){var t;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("getUserInfo"),e.next=3,fetch(Y+"user?"+new URLSearchParams({token:this.props.token}));case 3:return t=e.sent,console.log("getUserInfo - end"),e.next=7,t.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"updateLang",value:function(e){fetch(Y+"language",{method:"POST",body:JSON.stringify({token:this.props.token,lang:e}),headers:{"Content-Type":"application/json"}}),this.setState({lang:e}),console.log(this.state.lang)}},{key:"updateHints",value:function(e){fetch(Y+"hints",{method:"POST",body:JSON.stringify({token:this.props.token,hints:e}),headers:{"Content-Type":"application/json"}}),this.setState({hints:e})}},{key:"render",value:function(){var e=this;return r.a.createElement(x.a,{id:this.props.id},r.a.createElement(C.a,null,"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"),r.a.createElement(le.a,null,r.a.createElement(y.c,{top:"\u042f\u0437\u044b\u043a \u0434\u0438\u0430\u043b\u043e\u0433\u043e\u0432"},r.a.createElement(y.e,{name:"radio",value:"1",description:"\u041d\u043e\u0432\u044b\u0435 \u0434\u0438\u0430\u043b\u043e\u0433\u0438 \u0431\u0443\u0434\u0443\u0442 \u0442\u043e\u043b\u044c\u043a\u043e \u043d\u0430 \u0440\u0443\u0441\u0441\u043a\u043e\u043c",checked:1==this.state.lang,onClick:function(){return e.updateLang(1)}},"\u0420\u0443\u0441\u0441\u043a\u0438\u0439"),r.a.createElement(y.e,{name:"radio",value:"2",description:"\u041d\u043e\u0432\u044b\u0435 \u0434\u0438\u0430\u043b\u043e\u0433\u0438 \u0431\u0443\u0434\u0443\u0442 \u0442\u043e\u043b\u044c\u043a\u043e \u043d\u0430 \u0430\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u043e\u043c",checked:2==this.state.lang,onClick:function(){return e.updateLang(2)}},"\u0410\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u0438\u0439"),r.a.createElement(y.e,{name:"radio",value:"3",description:"\u041d\u043e\u0432\u044b\u0435 \u0434\u0438\u0430\u043b\u043e\u0433\u0438 \u0431\u0443\u0434\u0443\u0442 \u0442\u043e \u043d\u0430 \u0440\u0443\u0441\u0441\u043a\u043e\u043c, \u0442\u043e \u043d\u0430 \u0430\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u043e\u043c",checked:3==this.state.lang,onClick:function(){return e.updateLang(3)}},"\u041e\u0431\u0430")),r.a.createElement(y.c,{top:"\u041f\u043e\u0434\u0441\u043a\u0430\u0437\u043a\u0438",bottom:"\u041f\u043e\u0434\u0441\u043a\u0430\u0437\u043a\u0438 \u0437\u043d\u0430\u0447\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0437\u0430\u043c\u0435\u0434\u043b\u044f\u044e\u0442 \u043e\u0446\u0435\u043d\u043a\u0443 \u0434\u0438\u0430\u043b\u043e\u0433\u0430."},r.a.createElement(y.e,{name:"radio1",value:"1",checked:1==this.state.hints,onClick:function(){return e.updateHints(1)}},"\u0412\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u043f\u043e\u0434\u0441\u043a\u0430\u0437\u043a\u0438"),r.a.createElement(y.e,{name:"radio1",value:"0",checked:0==this.state.hints,onClick:function(){return e.updateHints(0)}},"\u041e\u0442\u043b\u044e\u0447\u0438\u0442\u044c \u043f\u043e\u0434\u0441\u043a\u0430\u0437\u043a\u0438"))))}}]),t}(r.a.Component),he=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(g.a)(this,Object(m.a)(t).call(this,e))).parseQueryString=function(e){return e.slice(1).split("&").map(function(e){var t=e.split("=");return{key:t[0],value:t[1]}}).reduce(function(e,t){return e[t.key]=t.value,e},{})},n.go=function(e){n.setState({activePanel:e.currentTarget.dataset.to})},n.state={activePanel:"home",fetchedUser:null,activeStory:"chat",token:"not-obtained"},n.renderHome=n.renderHome.bind(Object(f.a)(Object(f.a)(n))),n.renderRating=n.renderRating.bind(Object(f.a)(Object(f.a)(n))),n.renderSettings=n.renderSettings.bind(Object(f.a)(Object(f.a)(n))),n.onStoryChange=n.onStoryChange.bind(Object(f.a)(Object(f.a)(n))),n.parseQueryString=n.parseQueryString.bind(Object(f.a)(Object(f.a)(n))),n.obtainToken=n.obtainToken.bind(Object(f.a)(Object(f.a)(n))),n}return Object(b.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.obtainToken()}},{key:"onStoryChange",value:function(e){this.setState({activeStory:e.currentTarget.dataset.story})}},{key:"obtainToken",value:function(){var e=Object(h.a)(u.a.mark(function e(){var t,n,a,r;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=window.location.search,n={data:t},n=JSON.stringify(n),e.next=5,fetch(Y+"token",{method:"POST",body:n,headers:{"Content-Type":"application/json"}});case 5:return a=e.sent,e.next=8,a.json();case 8:r=e.sent,this.setState({token:r.token}),console.log("!!!!!!!!!!!!TOKEN!!!!!!!!!!!!!!!!"),console.log(r.token);case 12:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"renderHome",value:function(){return"not-obtained"!=this.state.token?r.a.createElement(Z,{id:"home",fetchedUser:this.state.fetchedUser,go:this.go,token:this.state.token}):r.a.createElement(y.d,{id:"home"},r.a.createElement(y.f,{size:"large",style:{marginTop:50}}))}},{key:"renderRating",value:function(){return"not-obtained"!=this.state.token?r.a.createElement(ie,{id:"rating",fetchedUser:this.state.fetchedUser,go:this.go,token:this.state.token}):r.a.createElement(y.d,{id:"rating"})}},{key:"renderSettings",value:function(){return"not-obtained"!=this.state.token?r.a.createElement(ue,{id:"settings",fetchedUser:this.state.fetchedUser,go:this.go,token:this.state.token}):r.a.createElement(y.d,{id:"settings"})}},{key:"render",value:function(){return r.a.createElement(y.a,{activeStory:this.state.activeStory,tabbar:r.a.createElement(y.g,null,r.a.createElement(y.h,{onClick:this.onStoryChange,selected:"chat"===this.state.activeStory,"data-story":"chat",text:"\u0427\u0430\u0442"},r.a.createElement(v.a,null)),r.a.createElement(y.h,{onClick:this.onStoryChange,selected:"rating-view"===this.state.activeStory,"data-story":"rating-view",text:"\u0420\u0435\u0439\u0442\u0438\u043d\u0433"},r.a.createElement(j.a,null)),r.a.createElement(y.h,{onClick:this.onStoryChange,selected:"settings-view"===this.state.activeStory,"data-story":"settings-view",text:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"},r.a.createElement(E.a,null)))},r.a.createElement(y.j,{id:"chat",activePanel:this.state.activePanel},this.renderHome()),r.a.createElement(y.j,{id:"rating-view",activePanel:"rating"},this.renderRating()),r.a.createElement(y.j,{id:"settings-view",activePanel:"settings"},this.renderSettings()))}}]),t}(r.a.Component);c.a.send("VKWebAppInit",{}),s.a.render(r.a.createElement(he,null),document.getElementById("root"))}},[[189,1,2]]]);
//# sourceMappingURL=main.5b2d5ddb.chunk.js.map