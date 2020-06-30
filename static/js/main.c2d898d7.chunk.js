(this.webpackJsonpreact_airport=this.webpackJsonpreact_airport||[]).push([[0],{174:function(e,t,a){e.exports=a(367)},183:function(e,t,a){},303:function(e,t,a){},313:function(e,t,a){},314:function(e,t,a){},318:function(e,t,a){},319:function(e,t,a){},344:function(e,t){},362:function(e,t,a){},363:function(e,t,a){},364:function(e,t,a){},365:function(e,t,a){},366:function(e,t,a){},367:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(29),c=a.n(r),i=a(17),s=a(23),o=(a(183),a(377)),m=function(){return l.a.createElement(o.a,{className:"Nav NavBar",inverted:!0,color:"blue"},l.a.createElement(o.a.Item,{className:"Nav-Item"},l.a.createElement("img",{className:"Nav-Logo",src:"https://iev.aero/_nuxt/img/logo.c97e286.png",alt:"Sikorsky Airport"})),l.a.createElement(o.a.Item,{className:"Nav-Item",position:"right",as:s.c,name:"home",to:"/",exact:!0}),l.a.createElement(o.a.Item,{className:"Nav-Item",as:s.c,name:"flights",to:"/flights",exact:!0}))},u=a(15),d=a(99),g=a.n(d),h=a(159),E=a(37),f=a(160),p=a(161),b=a(24),N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return{type:"SET_ERROR",error:e}},v={loading:!1,loaded:!1,error:""},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"START_LOADING":return Object(b.a)(Object(b.a)({},e),{},{loading:!0});case"SET_LOADED":return Object(b.a)(Object(b.a)({},e),{},{loaded:!0});case"SET_ERROR":return Object(b.a)(Object(b.a)({},e),{},{error:t.error});case"FINISH_LOADING":return Object(b.a)(Object(b.a)({},e),{},{loading:!1});default:return e}},F={departure:[],arrival:[]},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.body;switch(a){case"INIT_FLIGHTS":return Object(b.a)(Object(b.a)({},e),{},{departure:n.departure,arrival:n.arrival});default:return e}},y=function(e){return{type:"SET_DIRECTION",direction:e}},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"departure",t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.direction;switch(a){case"SET_DIRECTION":return n===e?e:n;default:return e}},S=(new Date).toISOString().split("T")[0].split("-").reverse().join("-"),T=function(){return(e=S,fetch("".concat("https://api.iev.aero/api/flights/").concat(e)).then((function(e){return e.json()}))).then((function(e){return e.body}));var e},L=Object(E.combineReducers)({loading:D,flights:C,direction:O}),j=function(e){return e.loading.loading},I=function(e){return e.loading.loaded},w=function(e){return e.loading.error},A=function(e){return e.flights},_=function(e){return e.direction},B=Object(E.createStore)(L,Object(f.composeWithDevTools)(Object(E.applyMiddleware)(p.a))),H=a(378),k=a(379),x=(a(303),function(){return l.a.createElement("div",{className:"HomePage"},l.a.createElement(H.a,{className:"HomePage-Wrapper"},l.a.createElement(k.a,{content:"Welcome to the Sikorsky Airport project!",className:"HomePage-Header",size:"huge",color:"blue"}),l.a.createElement(k.a,{className:"HomePage-Text",size:"large",color:"blue"},"Here you can download and view the list of flights of the Sikorsky Airport in the form of a table for three days: yesterday, today, tomorrow. You can also look at the flight information and find out the airline\u2019s contacts. The Redux library is used to store and control the state of the application.")))}),R=function(e){var t=e.message;return l.a.createElement("h2",null,t)},z=a(3),P=a.n(z),G=(a(313),[{name:"departure"},{name:"arrival"}]),M=function(){var e=Object(i.b)(),t=Object(i.c)(_);return l.a.createElement("div",{className:"DirectionBtn"},G.map((function(a){var n=a.name;return"departure"===n?l.a.createElement("button",{className:P()({"DirectionBtn-AirBtn DirectionBtn-AirBtn_departures":!0,"DirectionBtn-AirBtn_focus":"departure"===t,"DirectionBtn-AirBtn_focusNo":"departure"!==t}),key:n,type:"button",onClick:function(){return e(y("departure"))}},l.a.createElement("span",null,l.a.createElement("svg",{className:"DirectionBtn-Svg",viewBox:"0 0 40 28",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("g",{transform:"translate(-1.000000, -1.000000)",fill:"currentColor"},l.a.createElement("path",{d:"M40.9190312,14.2925525 C40.731055,13.5210761 40.2396434,12.8581323 39.5561585,12.4539552 C38.8726735,12.0497781 38.0549837,11.9385881 37.2883912,12.1455827 L26.8096581,15.0218819 L13.1945082,2 L9.38678826,3.03046545 L17.5564785,17.5510243 L7.75204986,20.2442408 L3.86129243,17.1278331 L1,17.9171897 L4.59162231,24.3200818 L6.11030829,27.0112974 L9.26373268,26.1409043 L19.7414654,23.2656055 L28.3253427,20.9165445 L38.8070772,18.0372439 C40.4055057,17.5625364 41.3397513,15.9060318 40.9190312,14.2925525 Z",transform:"translate(21.009879, 14.505649) rotate(-4.012171) translate(-21.009879, -14.505649)"})))),"".concat(n,"s")):l.a.createElement("button",{className:P()({"DirectionBtn-AirBtn DirectionBtn-AirBtn_arrivals":!0,"DirectionBtn-AirBtn_focus":"arrival"===t,"DirectionBtn-AirBtn_focusNo":"arrival"!==t}),key:n,type:"button",onClick:function(){return e(y("arrival"))}},l.a.createElement("span",null,l.a.createElement("svg",{className:"DirectionBtn-Svg",viewBox:"0 0 40 28",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("g",{fill:"currentColor",transform:"translate(-4.000000, -7.000000)"},l.a.createElement("path",{d:"M43.8940167,20.2848496 C43.7061583,19.5138567 43.2150547,18.8513283 42.531998,18.4474045 C41.8489414,18.0434806 41.031764,17.9323603 40.2656518,18.1392252 L29.793485,21.013722 L16.1868667,8 L12.3815328,9.02981973 L20.5461037,23.5412796 L10.7478188,26.2328084 L6.85949946,23.1183536 L4,23.9072155 L7.5893717,30.3060954 L9.10710602,32.9956246 L12.2585544,32.1257769 L22.7297214,29.2522799 L31.3082198,26.9046908 L41.7833862,24.0271945 C43.3808131,23.5527844 44.3144732,21.8973179 43.8940167,20.2848496 Z",transform:"translate(23.997341, 20.497812) rotate(27.974730) translate(-23.997341, -20.497812) "})))),"".concat(n,"s"))})))},J=a(34),W=a(71),Z=a(373),K=a(165),V=a(376),X=a(45),Y=function(e){switch(e){case"ON":return"On time";case"CX":return"Canceled";case"LN":return"Landed";case"CK":return"Check-in";case"FR":return"In flight";case"BD":return"Boarding";case"DP":return"Departed";case"DV":return"Route change";case"GC":return"Gate closed";default:return e}},q=(a(314),function(e){var t=e.flight,a=t.ID,n=t.airline,r=t["airportToID.city_en"],c=t["airportFromID.city_en"],o=t.codeShareData,m=t.gateNo,d=void 0===m?"":m,g=t.status,h=t.timeDepShedule,E=void 0===h?"":h,f=t.timeToStand,p=void 0===f?"":f,b=t.timeTakeofFact,N=void 0===b?"":b,v=t.term,D=Object(u.i)("/flights"),F=Object(i.c)(_),C=new Date(E||p),y=new Date(N),O="".concat(C.getHours(),":").concat(C.getMinutes().toString().padStart(2,"0")),S="".concat(y.getHours(),":").concat(y.getMinutes().toString().padStart(2,"0"));return l.a.createElement(Z.a.Row,{className:"Flight FlightsTable-TableRow",textAlign:"center"},l.a.createElement(Z.a.Cell,{className:"Flight-Term"},l.a.createElement("span",{className:P()(Object(J.a)({"Flight-TermCircle":!0},"Flight-TermCircle_".concat(v.toLowerCase()),!0))},v)),"departure"===F?l.a.createElement(Z.a.Cell,{className:"Flight-Gate"},d):null,l.a.createElement(Z.a.Cell,{className:"Flight-Time"},O),l.a.createElement(Z.a.Cell,{className:"Flight-Destination"},r||c),l.a.createElement(Z.a.Cell,{className:"Flight-Status"},"DP"===g?"".concat(Y(g)," ").concat(N?"at: ".concat(S):""):Y(g)),l.a.createElement(Z.a.Cell,{className:"Flight-Airline"},l.a.createElement(K.a,{className:"Flight-AirlineImage",src:n.en.logoSmallName,verticalAlign:"middle",size:"mini"}),l.a.createElement("div",{className:"Flight-AirlineName"},n?n.en.name:null)),l.a.createElement(Z.a.Cell,{className:"Flight-Flight"},o[0].codeShare),l.a.createElement(Z.a.Cell,{className:"Flight-Details"},l.a.createElement(V.a,{className:"Flight-DetailsButton",as:s.b,to:"".concat(null===D||void 0===D?void 0:D.path,"/").concat(a),icon:!0,basic:!0,color:"blue",size:"small",airline:n},l.a.createElement(X.a,{className:"Flight-DetailsIcon",name:"plane"}),"Details")))}),Q={yesterday:-1,today:0,tomorrow:1},U=(a(318),{terminal:"Terminal",gate:"Gate",time:"Local time",destination:"Destination",status:"Status",airline:"Airline",flight:"Flight",details:"Details"}),$=function(){var e=Object(i.c)(_),t=Object(i.c)(A)[e],a=function(e){return 0===e.length?[{name:"There are no flights",code:""}]:Object.entries(U).map((function(e){var t=Object(W.a)(e,2);return{code:t[0],name:t[1]}}))}(t),r=Object(u.h)().currentDay,c=Object(n.useMemo)((function(){return function(e,t){return e.filter((function(e){var a,n,l=new Date(e.timeDepShedule||e.timeToStand),r=new Date;return a=Q,n=t,r.setDate(r.getDate()+a[n]),l.getDate()===r.getDate()}))}(t,r)}),[t,r]);return l.a.createElement(Z.a,{className:"FlightsTable",striped:!0,padded:!0,fixed:!0},l.a.createElement(Z.a.Header,{className:"FlightsTable-TableHeader"},l.a.createElement(Z.a.Row,{className:"FlightsTable-TableRow"},a.map((function(t){var a=t.name,n=t.code;return"arrival"===e&&"Gate"===a?null:l.a.createElement(Z.a.HeaderCell,{key:n,textAlign:"center",className:P()(Object(J.a)({"FlightsTable-HeaderCell":!0},"FlightsTable-HeaderCell_".concat(n),!0))},a)})))),l.a.createElement(Z.a.Body,{className:"FlightsTable-TableBody"},c.map((function(e){return l.a.createElement(q,{key:e.ID,flight:e})}))))},ee=(a(319),[{id:1,name:"yesterday"},{id:2,name:"today"},{id:3,name:"tomorrow"}]),te=Object(u.j)((function(){var e=Object(i.c)(w),t=Object(u.g)(),a=Object(u.i)("/flights");return Object(n.useEffect)((function(){(null===a||void 0===a?void 0:a.isExact)&&t.push({pathname:"/flights/today"})}),[a,t]),l.a.createElement("div",{className:"FlightsPage"},l.a.createElement(k.a,{className:"FlightsPage-Header",content:"Flights table",color:"blue",size:"huge"}),l.a.createElement(k.a,{className:"FlightsPage-Error",content:e,color:"red",size:"medium"}),l.a.createElement(M,null),l.a.createElement("div",{className:"FlightsPage-Tabs ui attached menu blue"},ee.map((function(e){var t=e.id,n=e.name;return l.a.createElement(s.c,{key:t,className:"FlightsPage-Link item",activeClassName:"FlightsPage-Link_active",to:"".concat(null===a||void 0===a?void 0:a.path,"/").concat(n)},n)}))),l.a.createElement("div",{className:"FlightsPage-TabPane ui attached segment active tab"},l.a.createElement($,null)))})),ae=a(374),ne=a(72),le=a(375),re=a(164),ce=a.n(re),ie=(a(362),function(){return l.a.createElement("div",{className:"Spinner"},l.a.createElement("h2",{className:"Spinner-TextInfo"},"Loa",l.a.createElement("span",{className:"Spinner-D"},"d"),"ing..."),l.a.createElement("div",{className:"Spinner-Circle"},l.a.createElement("span",{className:"Spinner-Line"}),l.a.createElement("span",{className:"Spinner-Line"}),l.a.createElement("span",{className:"Spinner-Line"}),l.a.createElement("span",{className:"Spinner-Line"})))}),se=(a(363),Object.entries({date:"Date",time:"Local time",terminal:"Terminal",flight:"Flight",stand:"Stand",gate:"Gate"}).map((function(e){var t=Object(W.a)(e,2);return{code:t[0],name:t[1]}}))),oe={day:"2-digit",month:"2-digit"},me=function(){var e=Object(i.c)(A),t=Object(u.h)().flightsId,a=Object(n.useMemo)((function(){return e.departure.find((function(e){return e.ID===+t}))||e.arrival.find((function(e){return e.ID===+t}))}),[e,t]);if(!a)return l.a.createElement(ie,null);var r=a["airportToID.city_en"],c=a["airportFromID.city_en"],s=a.timeDepShedule,o=void 0===s?"":s,m=a.timeToStand,d=void 0===m?"":m,g=a.term,h=a.codeShareData,E=a.checkinNo,f=a.gateNo,p=a.status,b=a.airline,N=new Date(o||d),v=N.toLocaleDateString("de-DE",oe).slice(0,-1),D="".concat(N.getHours(),":").concat(N.getMinutes().toString().padStart(2,"0"));return console.log(b.en),l.a.createElement("div",{className:"FlightDetails"},l.a.createElement(k.a,{className:"FlightDetails-Header",content:"Flight details",size:"huge",color:"blue"}),l.a.createElement("div",{className:"FlightDetails-Flight"},l.a.createElement(k.a,{className:"FlightDetails-FlightCode",content:h[0].codeShare,size:"large"}),l.a.createElement(k.a,{className:"FlightDetails-FlightFlies",content:"flies in",size:"large"})),l.a.createElement("div",{className:"FlightDetails-Destination"},l.a.createElement(k.a,{className:"FlightDetails-DestinationHeader",content:r||c}),l.a.createElement(K.a,{className:"FlightDetails-DestinationImage",src:b.en.logoSmallName,verticalAlign:"middle",size:"small"})),l.a.createElement(Z.a,{className:"FlightDetails-Table",collapsing:!0,padded:"very",basic:"very",size:"large"},l.a.createElement(Z.a.Header,{className:"FlightDetails-TableHeader"},l.a.createElement(Z.a.Row,{className:"FlightDetails-TableRow"},se.map((function(e){var t=e.name,a=e.code;return f||"Gate"!==t&&"Stand"!==t?l.a.createElement(Z.a.HeaderCell,{key:a,textAlign:"center",className:P()(Object(J.a)({"FlightDetails-HeaderCell":!0},"FlightDetails-HeaderCell_".concat(a),!0))},t):null})))),l.a.createElement(Z.a.Body,{className:"FlightDetails-TableBody"},l.a.createElement(Z.a.Row,{className:"Flight FlightsTable-TableRow",textAlign:"center"},l.a.createElement(Z.a.Cell,null,v),l.a.createElement(Z.a.Cell,null,D),l.a.createElement(Z.a.Cell,null,g),l.a.createElement(Z.a.Cell,null,h[0].codeShare),E?l.a.createElement(Z.a.Cell,null,E):null,f?l.a.createElement(Z.a.Cell,null,f):null))),l.a.createElement(k.a,{className:"FlightDetails-Status",content:Y(p),textAlign:"left",size:"huge"}),l.a.createElement(ae.a,{className:"FlightDetails-Airline",panels:[{key:"Contacts",title:{content:l.a.createElement(ne.a,{content:"Airline contacts",color:"blue",size:"big"})},content:{content:l.a.createElement(le.a,{info:!0,size:"big"},l.a.createElement(le.a.Header,{className:"FlightDetails-AirlineName"},b.en.name,l.a.createElement(K.a,{className:"FlightDetails-DestinationImage",src:b.en.logoSmallName,verticalAlign:"middle",size:"tiny"})),ce()(b.en.about))}}]}))},ue=(a(364),function(){var e=Object(i.b)(),t=Object(i.c)(j),a=Object(i.c)(I);return Object(n.useEffect)((function(){e(function(){var e=Object(h.a)(g.a.mark((function e(t){var a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"START_LOADING"}),e.prev=1,e.next=4,T();case 4:a=e.sent,t({type:"INIT_FLIGHTS",body:a}),t({type:"SET_LOADED"}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),t(N(e.t0.message));case 12:t({type:"FINISH_LOADING"});case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}())}),[e]),l.a.createElement("div",{className:"Main"},t&&!a?l.a.createElement(ie,null):l.a.createElement(u.d,null,l.a.createElement(u.b,{path:"/flights/:currentDay(yesterday|today|tomorrow)?",exact:!0},l.a.createElement(te,null)),l.a.createElement(u.b,{path:"/flights/:flightsId"},l.a.createElement(me,null)),l.a.createElement(u.b,{path:"/",exact:!0},l.a.createElement(x,null)),l.a.createElement(u.a,{from:"/home",to:"/"}),l.a.createElement(u.b,{path:"/error"},l.a.createElement(R,{message:"Not found"})),l.a.createElement(u.a,{from:"/*",to:"/error"})))}),de=(a(365),function(){return l.a.createElement("div",{className:"Hero"},l.a.createElement("div",{className:"Cube Cube_gradient"}),l.a.createElement("div",{className:"Cube Cube_gradient"}),l.a.createElement("div",{className:"Cube Cube_gradient"}),l.a.createElement("div",{className:"Cube Cube_gradient"}),l.a.createElement("div",{className:"Cube Cube_gradient"}),l.a.createElement("div",{className:"Cube Cube_gradient"}),l.a.createElement("div",{className:"Cube Cube_gradient"}))}),ge=(a(366),function(){return l.a.createElement("div",{className:"App"},l.a.createElement(m,null),l.a.createElement(ue,null),l.a.createElement("footer",{className:"App-Footer"},"\xa9Andreas Just 2020"),l.a.createElement(de,null))}),he=function(){return l.a.createElement(i.a,{store:B},l.a.createElement(s.a,null,l.a.createElement(ge,null)))};c.a.render(l.a.createElement(he,null),document.getElementById("root"))}},[[174,1,2]]]);
//# sourceMappingURL=main.c2d898d7.chunk.js.map