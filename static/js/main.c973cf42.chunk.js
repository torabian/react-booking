(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{124:function(e,t,n){e.exports=n(142)},129:function(e,t,n){},141:function(e,t,n){},142:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(41),i=n.n(o),c=(n(129),n(5)),l=n(6),s=n(8),m=n(7),u=n(9),p=n(27),d=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"closeMenu",value:function(){this.props.onClickClose&&this.props.onClickClose()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"document-sidebar"},r.a.createElement("div",{className:"document-sidebar-title-wrappper"},r.a.createElement("div",{className:"document-title"},"React-booking \u2122"),r.a.createElement("button",{onClick:function(){return e.closeMenu()}},r.a.createElement("i",{className:"icon icon-close"}),r.a.createElement("span",null,"CLOSE"))),r.a.createElement("ul",{className:"menu-items"},r.a.createElement("li",null,r.a.createElement(p.c,{onClick:function(){return e.closeMenu()},to:"/"},r.a.createElement("i",{className:"icon icon-getting-started"}),"Installation & Demo")),r.a.createElement("li",null,r.a.createElement(p.c,{onClick:function(){return e.closeMenu()},to:"/on-submit-props"},r.a.createElement("i",{className:"icon icon-sending-data"}),"Submit call back")),r.a.createElement("li",null,r.a.createElement(p.c,{onClick:function(){return e.closeMenu()},to:"/payment-methods"},r.a.createElement("i",{className:"icon icon-credit-card"}),"Payment methods"))))}}]),t}(r.a.Component),h=n(92),f=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{}},r.a.createElement(h.a,Object.assign({},h.b,{code:this.props.code,language:"js",className:" line-numbers"}),function(e){var t=e.tokens,n=e.getLineProps,a=e.getTokenProps;return r.a.createElement("pre",{className:"document-code-snippet"},t.map(function(e,t){return r.a.createElement("div",n({line:e,key:t}),r.a.createElement("span",{className:"document-pre-line-number"},t+1),e.map(function(e,t){return r.a.createElement("span",a({token:e,key:t}))}))}))}))}}]),t}(r.a.Component),b=n(50),E=n.n(b),v=n(64),y=n(40),g=n(97),k=n(37),w=n.n(k),j=n(121),N={appointment:new(n(148).a)({slotId:null,slotDate:null,slotTime:null,slotPrice:null,slotCapacity:null,fullName:null,email:null,phoneNumber:null,address:null,zipCode:null})};function O(e){N.appointment.next(Object(j.a)({},N.appointment.value,e))}var S=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(m.a)(t).call(this,e))).handleDatepicker=function(e){n.setState({startDate:e})},n.state={data:null,selectedSlot:null},n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"handleSeletctedSlot",value:function(e){this.setState({selectedSlot:e})}},{key:"confirmAppointment",value:function(e){O({slotId:e.id,slotDate:e.start,slotTime:"".concat(w()(e.start).format("HH:mm")," - ").concat(w()(e.end).format("HH:mm")),slotPrice:e.price?"".concat(e.price.amount," ").concat(e.price.curr):null}),this.props.history.push("/personel-information")}},{key:"render",value:function(){var e=this,t=this.props,n=(t.campaign,t.appointments),a=this.state.startDate,o=n.map(function(e){return e.start}),i=n.filter(function(e){return w()(e.start).isSame(w()(a),"date")});return r.a.createElement("div",null,r.a.createElement(g.a,{inline:!0,selectsStart:!0,selected:this.state.startDate,includeDates:o,onChange:this.handleDatepicker}),this.state.startDate&&r.a.createElement("div",{className:"text-center"},r.a.createElement("h3",null,"Active appointments"),r.a.createElement("div",{className:"appointments"},i.map(function(t){return r.a.createElement("div",{onClick:function(){return e.handleSeletctedSlot(t.id)},key:t.id,className:e.state.selectedSlot===t.id?"appointment selected":"appointment"},r.a.createElement("div",{className:"appointment-time"},r.a.createElement("span",null,w()(t.start).format("HH:mm"))," -"," ",r.a.createElement("span",null,w()(t.end).format("HH:mm"))),r.a.createElement("div",{className:"appointment-confirm"},r.a.createElement("button",{onClick:function(){return e.confirmAppointment(t)}},"Confirm")))}))))}}]),t}(a.Component),z={title:"Campaing number 1",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry ...",events:[{date:"2019-08-26",slots:[{id:1,from:"12:00",to:"13:00"},{id:2,from:"14:00",to:"15:00"},{id:3,from:"16:00",to:"17:00"}]},{date:"2019-07-27",slots:[{id:4,from:"12:30",to:"13:30"}]},{date:"2019-07-28",slots:[{id:5,from:"12:45",to:"13:45"},{id:6,from:"16:45",to:"17:45"}]},{date:"2019-07-29",slots:[{id:7,from:"12:15",to:"13:15"},{id:8,from:"14:15",to:"15:15"},{id:9,from:"16:15",to:"17:15"},{id:10,from:"18:15",to:"19:15"},{id:11,from:"20:15",to:"21:15"}]}]};function C(){return D.apply(this,arguments)}function D(){return(D=Object(v.a)(E.a.mark(function e(){return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",z);case 1:case"end":return e.stop()}},e)}))).apply(this,arguments)}var M=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"findErrorMessage",value:function(e,t){if(t&&t.error&&t.error.errors){var n=t.error.errors.find(function(t){return t.location===e});if(n)return n.message}return!1}},{key:"render",value:function(){var e=this,t=this.props,n=t.title,a=t.placeholder,o=t.icon;return r.a.createElement("div",{className:"booking-widget-input-group"+(this.errorMessage||this.props.isValid?" warning":"")},r.a.createElement("div",{className:"booking-widget-input-title"},o&&o.length>0&&r.a.createElement("i",{className:"icon "+o}),n),r.a.createElement("div",null,r.a.createElement("input",{className:"booking-widget-input",type:"text",placeholder:a,onInput:function(t){return e.props.onChange(t.target.value)}})),this.errorMessage&&r.a.createElement("span",null,this.errorMessage))}},{key:"errorMessage",get:function(){var e=this.props,t=e.response,n=e.name;return this.findErrorMessage(n,t)}}]),t}(a.Component),x=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={loading:!1,response:null,form:{fullName:null,email:null,phoneNumber:null,address:null,zipCode:null}},n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.setState({response:this.props.response}),this.props.response&&(O(this.props.response.form),this.props.history.push("/final-status"),this.setState({loading:!1}))}},{key:"setFormState",value:function(e,t){var n=this.state.form;n[e]=t,this.setState({form:n})}},{key:"previousStep",value:function(){this.props.history.push("/")}},{key:"nextStep",value:function(){}},{key:"onSubmit",value:function(e){e&&e.preventDefault&&e.preventDefault();var t=this.preValidator(this.state.form);t.length?this.setState({response:{error:{errors:t}}}):(this.setState({response:{}}),this.props.onFormSubmit&&(this.props.onFormSubmit(this.state.form),this.setState({loading:!0})))}},{key:"preValidator",value:function(e){var t=[];return e.fullName||t.push({location:"fullName",message:"We need your full name."}),e.email?/\S+@\S+\.\S+/.test(e.email)||t.push({location:"email",message:"We need your email address in correct form (my.name@gmail.com)"}):t.push({location:"email",message:"Please enter your email address."}),e.phoneNumber?/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(e.phoneNumber)||t.push({location:"phoneNumber",message:"Enter your phone number in correct format e.g +18182003004000"}):t.push({location:"phoneNumber",message:"Please enter your phone number."}),t}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"form-container"},this.state.loading&&r.a.createElement("div",{className:"spinner-wrapper"},r.a.createElement("div",{class:"spinner"}),r.a.createElement("p",null,"Please wait ...")),r.a.createElement("form",{onSubmit:function(t){return e.onSubmit(t)}},r.a.createElement("div",{className:"d-flex flex-wrap"},r.a.createElement("div",{className:"flex-1"},r.a.createElement(M,{name:"fullName",title:"FULLNAME",icon:"icon-user",response:this.state.response,onChange:function(t){return e.setFormState("fullName",t)}})),r.a.createElement("div",{className:"flex-1"},r.a.createElement(M,{name:"email",title:"EMAIL",icon:"icon-at-sign",response:this.state.response,onChange:function(t){return e.setFormState("email",t)}})),r.a.createElement("div",{className:"flex-1"},r.a.createElement(M,{name:"phoneNumber",title:"PHONE NUMBER",icon:"icon-phone",response:this.state.response,onChange:function(t){return e.setFormState("phoneNumber",t)}}))),r.a.createElement("div",{className:"d-flex flex-wrap"},r.a.createElement("div",{className:"flex-3"},r.a.createElement(M,{name:"address",title:"ADDRESS (optional)",icon:"icon-map-pin",response:this.state.response,onChange:function(t){return e.setFormState("address",t)}})),r.a.createElement("div",{className:"flex-1"},r.a.createElement(M,{name:"zipCode",title:"ZIP CODE (optional)",icon:"icon-map",response:this.state.response,onChange:function(t){return e.setFormState("zipCode",t)}}))),r.a.createElement("div",{className:"button-wrapper d-flex flex-end"},r.a.createElement("input",{type:"button",onClick:function(){return e.previousStep()},className:"btn btn-default",value:"Previous Step"}),r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Next Step"))))}}]),t}(a.Component),_=n(149),P=n(150),T=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"final-status-wrapper successed"},r.a.createElement("div",{className:"final-box-wrapper"},r.a.createElement("span",{className:"icon-wrapper"},r.a.createElement("i",{className:"icon"})),r.a.createElement("p",null,"Congratulation! You reservation operations were successfully completed.")),r.a.createElement("div",{className:"final-status-code-box"},r.a.createElement("span",null,"Your reservation code: "),r.a.createElement("span",null,"987654321"),r.a.createElement("br",null),r.a.createElement("p",null),r.a.createElement("img",{src:"https://www.dummies.com/wp-content/uploads/324172.image0.jpg",alt:"987654321"}),r.a.createElement("br",null)))}}]),t}(a.Component),F=n(120),R=n(147),H=n(117),I=n.n(H);function B(){return(B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var L=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.user;return e&&e.slotId?r.a.createElement("div",{className:"selected-appointment-information"},e.fullName&&r.a.createElement("div",null,r.a.createElement("i",{className:"icon icon-user"}),r.a.createElement("span",{className:"selected-appointment-information-title"},"Fullname:"),r.a.createElement("span",{className:"selected-appointment-information-value"},e.fullName)),e.email&&r.a.createElement("div",null,r.a.createElement("i",{className:"icon icon-at-sign"}),r.a.createElement("span",{className:"selected-appointment-information-title"},"Email:"),r.a.createElement("span",{className:"selected-appointment-information-value"},e.email)),e.phoneNumber&&r.a.createElement("div",null,r.a.createElement("i",{className:"icon icon-phone"}),r.a.createElement("span",{className:"selected-appointment-information-title"},"Phone number:"),r.a.createElement("span",{className:"selected-appointment-information-value"},e.phoneNumber)),e.slotDate&&r.a.createElement("div",null,r.a.createElement("i",{className:"icon icon-calendar"}),r.a.createElement("span",{className:"selected-appointment-information-title"},"Date:"),r.a.createElement("span",{className:"selected-appointment-information-value"},w()(e.slotDate).format("YYYY/MM/DD"))),e.slotTime&&r.a.createElement("div",null,r.a.createElement("i",{className:"icon icon-clock"}),r.a.createElement("span",{className:"selected-appointment-information-title"},"Time:"),r.a.createElement("span",{className:"selected-appointment-information-value"},e.slotTime)),e.slotTime&&r.a.createElement("div",null,r.a.createElement("i",{className:"icon icon-dollar-sign"}),r.a.createElement("span",{className:"selected-appointment-information-title"},"Price:"),r.a.createElement("span",{className:"selected-appointment-information-value"},e.slotPrice)),e.slotCapacity&&r.a.createElement("div",null,r.a.createElement("i",{className:"icon icon-layers"}),r.a.createElement("span",{className:"selected-appointment-information-title"},"Capacity:"),r.a.createElement("span",null,e.slotCapacity))):r.a.createElement(r.a.Fragment,null)}}]),t}(a.Component),W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){return function(n){function a(e){var t;return Object(c.a)(this,a),(t=Object(s.a)(this,Object(m.a)(a).call(this,e))).state={store:{}},t.subscription=null,t}return Object(u.a)(a,n),Object(l.a)(a,[{key:"componentWillMount",value:function(){var t=this,n=Object.keys(e),a=I()(e);this.subscription=R.a.apply(void 0,Object(F.a)(a)).subscribe(function(e){var a={};e.forEach(function(e,t){a[n[t]]=e}),t.setState({store:a})})}},{key:"componentWillUnmount",value:function(){this.subscription&&this.subscription.unsubscribe&&this.subscription.unsubscribe()}},{key:"render",value:function(){return r.a.createElement(t,B({},this.props,this.state.store))}}]),a}(r.a.Component)}}({user:N.appointment})(L),A=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"final-status-wrapper successed"},r.a.createElement("div",{className:"final-box-wrapper"},r.a.createElement("p",null,r.a.createElement("a",{href:"https://sklep.przelewy24.pl/zakup.php?z24_id_sprzedawcy=93228&z24_kwota=1000&z24_currency=pln&z24_nazwa=Hello%21&z24_language=en&k24_kraj=PL&z24_crc=75ce628f",className:"btn btn-primary"},"Pay by przelewy24.pl"))))}}]),t}(a.Component),Y=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"content",value:function(){return r.a.createElement(r.a.Fragment,null,this.props.backUrl&&r.a.createElement(p.c,{className:"back-btn",to:this.props.backUrl},r.a.createElement("i",{className:"icon icon-chevron-left"})),r.a.createElement("i",{className:"icon "+this.props.icon}),r.a.createElement("span",null,this.props.label))}},{key:"render",value:function(){return this.props.pathname===this.props.to?r.a.createElement("li",{className:this.props.pathname===this.props.to?"active":""},r.a.createElement("span",null,this.content())):r.a.createElement("li",null,r.a.createElement(p.c,{to:this.props.to},this.content()))}}]),t}(a.Component),U=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={campaign:null,loaded:!1,form:{fullname:null,email:null,phone:null,address:null,zipCode:null}},n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentWillReceiveProps",value:function(e){console.log(e)}},{key:"componentDidMount",value:function(){var e=Object(v.a)(E.a.mark(function e(){var t;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C();case 2:t=e.sent,this.setState({campaign:t,loaded:!0});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state.campaign,n="memory"===this.props.historyType?y.a:p.a;return!0===this.state.loaded?r.a.createElement(n,null,r.a.createElement(y.c,{exact:!0,render:function(n){var a=n.location;return r.a.createElement("div",{className:"campagin-wrapper"},r.a.createElement("div",{className:"navigation-path"},r.a.createElement("ul",null,r.a.createElement(Y,{label:"Select Date",icon:"icon-calendar",to:"/datepicker",pathname:a.pathname}),r.a.createElement(Y,{label:"Attendance Information",icon:"icon-user",to:"/personel-information",backUrl:"/",pathname:a.pathname}),e.props.paymentTab?r.a.createElement(Y,{label:"Payment Page",icon:"icon icon-credit-card",to:"",pathname:a.pathname}):null,r.a.createElement(Y,{label:"Final Status",icon:"icon-award",to:"/final-status",pathname:a.pathname}))),r.a.createElement("div",{className:"text-center"},r.a.createElement("h1",null,e.props.title),r.a.createElement("p",null,e.props.description)),r.a.createElement(W,{user:{}}),r.a.createElement(_.a,null,r.a.createElement(P.a,{key:a.key,timeout:300,classNames:"fade"},r.a.createElement(y.e,{location:a},r.a.createElement(y.c,{path:"/datepicker",exact:!0,component:function(n){return r.a.createElement(S,Object.assign({},n,{campaign:t,appointments:e.props.appointments}))}}),r.a.createElement(y.c,{path:"/personel-information",exact:!0,component:function(t){return r.a.createElement(x,Object.assign({},t,{onFormSubmit:e.props.onFormSubmit,response:e.props.response}))}}),r.a.createElement(y.c,{path:"/payment",exact:!0,component:A}),r.a.createElement(y.c,{path:"/final-status",exact:!0,component:T}),r.a.createElement(y.b,{from:"/",to:"/"+e.props.visibleTab})))))}})):r.a.createElement("div",null,"Please wait we are getting data from our servers ...")}}]),t}(a.Component);U.defaultProps={title:"Booking and reservation",description:"Please complete your booking here. Select an appointment and continue.",historyType:"memory",paymentTab:!0,appointments:[],visibleTab:"datepicker"};var $=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Install react booking"),r.a.createElement("p",null,"React booking is written in ReactJs, but can be used in any other web app. If your project is based on react, just install it as a component. If not, you can use it as a widget."),r.a.createElement("h2",null,"For React (web) projects"),r.a.createElement("p",null,"You can install it using ",r.a.createElement("code",null,"npm")," package manager."),r.a.createElement(f,{code:"npm install react-booking --save"}),r.a.createElement("p",null,"Then, import it as a normal react component:"),r.a.createElement(f,{code:'import { ReactBooking } from \'react-booking\';\n\nexport class App extends React.Component {\n  render() {\n    return (\n      <ReactBooking\n        title="Booking"\n        description="Setup your booking"\n        historyType="memory"\n        paymentMethods={{ cash: true, online: false }}\n        appointments={[\n          {\n            id: 1,\n            start: new Date(2019, 6, 10, 10, 30),\n            end: new Date(2019, 6, 10, 10, 45),\n            capacity: 10,\n            price: {\n              amount: 10,\n              curr: \'$\'\n            }\n          }\n        ]}\n      />\n    )\n  }\n};'}),r.a.createElement("p",null,"And it will look something like this:"),r.a.createElement(U,{title:"Booking",description:"Setup your booking",historyType:"memory",paymentMethods:[{type:"przelewy24",url:"https://sklep.przelewy24.pl/zakup.php?z24_id_sprzedawcy=93228&z24_kwota=1000&z24_currency=pln&z24_nazwa=Hello%21&z24_language=en&k24_kraj=PL&z24_crc=75ce628f"}],appointments:[{id:1,start:new Date(2019,6,10,10,30),end:new Date(2019,6,10,10,45),capacity:10,price:{amount:10,curr:"$"}},{id:2,start:new Date(2019,6,10,11,30),end:new Date(2019,6,10,12,45),capacity:4,price:{amount:22,curr:"$"}},{id:3,start:new Date(2019,6,10,13,30),end:new Date(2019,6,10,13,45),capacity:2},{id:4,start:new Date(2019,6,11,11,30),end:new Date(2019,6,11,12,45),capacity:4},{id:5,start:new Date(2019,6,12,13,30),end:new Date(2019,6,12,13,45),capacity:2}]}))}}]),t}(r.a.Component),J=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={response:null},n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"sendRequestToServer",value:function(e){var t=this;console.log("Export",e),setTimeout(function(){t.setState({response:{status:200,form:e,error:{errors:[]}}})},3e3)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("h1",null,"React booking demo"),r.a.createElement(U,{title:"Booking",description:"Setup your booking",historyType:"memory",paymentMethods:{cash:!0,online:!1},onFormSubmit:function(t){return e.sendRequestToServer(t)},response:this.state.response,appointments:[{id:1,start:new Date(2019,6,10,10,30),end:new Date(2019,6,10,10,45),capacity:10,price:{amount:10,curr:"$"}},{id:2,start:new Date(2019,6,10,11,30),end:new Date(2019,6,10,12,45),capacity:4,price:{amount:22,curr:"$"}},{id:3,start:new Date(2019,6,10,13,30),end:new Date(2019,6,10,13,45),capacity:2},{id:4,start:new Date(2019,6,11,11,30),end:new Date(2019,6,11,12,45),capacity:4},{id:5,start:new Date(2019,6,12,13,30),end:new Date(2019,6,12,13,45),capacity:2}]}))}}]),t}(r.a.Component),V=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Payment methods"),r.a.createElement("p",null,"You can integrate this with przelewy24 and braintree dropin ui"),r.a.createElement("br",null),r.a.createElement(U,{title:"Booking",description:"When user wants to pay, what will happen?",historyType:"memory",visibleTab:"payment",paymentMethods:[{type:"przelewy24",url:"https://sklep.przelewy24.pl/zakup.php?z24_id_sprzedawcy=93228&z24_kwota=1000&z24_currency=pln&z24_nazwa=Hello%21&z24_language=en&k24_kraj=PL&z24_crc=75ce628f"}]}),r.a.createElement("br",null),r.a.createElement(f,{code:"<ReactBooking\n  title=\"Booking\"\n  description=\"When user wants to pay, what will happen?\"\n  historyType=\"memory\"\n  visibleTab=\"payment\"\n  paymentMethods={[\n    {\n      type: 'przelewy24',\n      url:\n        'https://sklep.przelewy24.pl/zakup.php' + \n        '?z24_id_sprzedawcy=93228&z24_kwota=1000&z24_currency=pln' +\n        '&z24_nazwa=Hello%21&z24_language=en&k24_kraj=PL&z24_crc=75ce628f'\n    }\n  ]}\n/>"}))}}]),t}(r.a.Component),q=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={activeMenu:!1},n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"toggleActiveMenu",value:function(){var e=this;this.props.onClickMenu&&this.setState({activeMenu:!0},function(){e.props.onClickMenu(e.state.activeMenu)})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"header-navbar-wrapper"},r.a.createElement("button",{className:"menu-ham",onClick:function(){return e.toggleActiveMenu()}},r.a.createElement("i",{className:"icon icon-menu"})),r.a.createElement("div",{className:"header-search"},r.a.createElement("i",{className:"icon icon-search"}),r.a.createElement("input",{type:"text",placeholder:"Search for concepts, code, or forum discussions"})))}}]),t}(a.Component),Z=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(m.a)(t).call(this,e))).updateDimensions=function(e){n.setState({windowSize:window.innerWidth}),window.innerWidth>992&&n.setState({activeMenu:!1})},n.state={activeMenu:!1,windowSize:0},n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.updateDimensions)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateDimensions)}},{key:"toggleMenu",value:function(e){this.setState({activeMenu:e})}},{key:"render",value:function(){var e=this;return console.log("size:",this.state.windowSize),r.a.createElement(p.b,null,r.a.createElement("div",{className:"document-layout"+(this.state.activeMenu?" active":"")},r.a.createElement(d,{onClickClose:function(){return e.toggleMenu(!1)}}),r.a.createElement("div",{className:"document-content-wrapper"},r.a.createElement(q,{onClickMenu:function(t){return e.toggleMenu(t)}}),r.a.createElement("div",{className:"document-content"},r.a.createElement(y.c,{exact:!0,path:"/",component:$}),r.a.createElement(y.c,{exact:!0,path:"/on-submit-props",component:J}),r.a.createElement(y.c,{exact:!0,path:"/payment-methods",component:V})))))}}]),t}(r.a.Component);n(141);var G=function(){return r.a.createElement(Z,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[124,1,2]]]);
//# sourceMappingURL=main.c973cf42.chunk.js.map