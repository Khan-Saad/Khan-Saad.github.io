(this["webpackJsonpfood-maps"]=this["webpackJsonpfood-maps"]||[]).push([[0],{53:function(e,t,a){},54:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(2),o=a(0),s=a.n(o),i=a(21),r=a.n(i),c=(a(53),a(31)),d=a(14),l=a(15),p=a(17),b=a(16),j=(a(54),a(81)),h=a(87),v=a(79),u=a(80),m=a(27),f=(a(37),{color:"#fff"}),x={fontSize:"18px",background:"#4050b5",color:"white",textAlign:"center"},g={width:"100%",borderBottom:"1px solid gray",fontSize:"18px",textAlign:"center",padding:"5px"},O={width:"100%",padding:"10px 5px",margin:"auto",textAlign:"center"},C={cursor:"pointer",position:"absolute",display:"block",padding:"2px 5px",lineHeight:"20px",right:"-10px",top:"-10px",fontSize:"24px",background:"#4050b5",borderRadius:"18px",border:"1px solid #cfcece"},y=function(e){Object(p.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).infoClick=function(t){t.preventDefault(),console.log(e.props.event.name)},e.saveClick=function(t){t.preventDefault(),console.log("clicked save"),e.props.saveEvent(e.props.event)},e.checkSaved=function(t){return e.props.savedEvents.includes(e.props.event)?"Saved":"Add to Saved"},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return Object(n.jsxs)(h.a,{cols:1,children:[Object(n.jsx)("img",{src:this.props.event.pic,alt:"test"}),Object(n.jsx)(v.a,{title:this.props.event.food,subtitle:this.props.event.name,actionIcon:Object(n.jsxs)("div",{children:[Object(n.jsx)(m.a,{trigger:Object(n.jsx)(u.a,{color:"secondary",style:f,children:"More Info"}),modal:!0,nested:!0,children:function(t){return Object(n.jsxs)("div",{className:"modal",style:x,children:[Object(n.jsx)("button",{className:"close",onClick:t,style:C,children:"\xd7"}),Object(n.jsxs)("div",{className:"header",style:g,children:[" ",Object(n.jsx)("h1",{children:e.props.event.name}),e.props.event.location," || ",e.props.event.food," || ",e.props.event.date]}),Object(n.jsxs)("div",{className:"content",children:[" ",Object(n.jsx)("br",{}),e.props.event.details]}),Object(n.jsx)("div",{className:"actions",style:O,children:Object(n.jsx)(u.a,{className:"button",onClick:function(){console.log("modal closed "),t()},children:"close"})})]})}}),Object(n.jsx)(u.a,{color:"secondary",style:f,onClick:this.saveClick,children:"Add to Saved"})]})})]},this.props.event.food)}}]),a}(o.Component),E=function(e){Object(p.a)(a,e);var t=Object(b.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return Object(n.jsx)("div",{style:S,children:Object(n.jsx)(j.a,{children:this.props.events.map((function(t){return Object(n.jsx)(y,{event:t,saveEvent:e.props.saveEvent},t.id)}))})})}}]),a}(o.Component),S={display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden"},k=E,B=a(38),M=function(e){Object(p.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={eventName:"",location:"",food:"",details:"",date:""},e.onChange=function(t){return e.setState(Object(B.a)({},t.target.name,t.target.value))},e.onSubmit=function(t){t.preventDefault(),""!==e.state.title&&""!==e.state.eventName&&""!==e.state.location&&""!==e.state.food&&""!==e.state.details&&""!==e.state.date&&(e.props.addEvent(e.state),e.setState({eventName:""}),e.setState({location:""}),e.setState({food:""}),e.setState({details:""}),e.setState({date:""}))},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("h4",{children:"Fill out the details for your event and hit Create!"}),Object(n.jsxs)("form",{onSubmit:this.onSubmit,style:{display:"flex"},children:[Object(n.jsx)("input",{type:"text",name:"eventName",style:{flex:"10",padding:"5px"},placeholder:"Enter Event Name",value:this.state.eventName,onChange:this.onChange}),Object(n.jsx)("br",{}),Object(n.jsx)("input",{type:"text",name:"location",style:{flex:"10",padding:"5px"},placeholder:"Enter Event Location",value:this.state.location,onChange:this.onChange}),Object(n.jsx)("br",{}),Object(n.jsx)("input",{type:"text",name:"food",style:{flex:"10",padding:"5px"},placeholder:"Enter Food at Event",value:this.state.food,onChange:this.onChange}),Object(n.jsx)("br",{}),Object(n.jsx)("input",{type:"text",name:"date",style:{flex:"10",padding:"5px"},placeholder:"Enter Date",value:this.state.date,onChange:this.onChange}),Object(n.jsx)("input",{type:"text",name:"details",style:{flex:"10",padding:"5px"},placeholder:"Enter Event Details",value:this.state.details,onChange:this.onChange}),Object(n.jsx)("br",{}),Object(n.jsx)("input",{type:"submit",value:"Create Event!",className:"btn",style:{flex:"1"}})]})]})}}]),a}(o.Component),w={color:"#fff"},F={fontSize:"18px",background:"#4050b5",color:"white",textAlign:"center"},N={width:"100%",borderBottom:"1px solid gray",fontSize:"18px",textAlign:"center",padding:"5px"},H={width:"100%",padding:"10px 5px",margin:"auto",textAlign:"center"},P={cursor:"pointer",position:"absolute",display:"block",padding:"2px 5px",lineHeight:"20px",right:"-10px",top:"-10px",fontSize:"24px",background:"#4050b5",borderRadius:"18px",border:"1px solid #cfcece"},A=function(e){Object(p.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).delEvent=function(t){t.preventDefault(),e.props.delEvent(e.props.savedEvent)},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return Object(n.jsxs)(h.a,{cols:1,children:[Object(n.jsx)("img",{src:this.props.savedEvent.pic,alt:"test"}),Object(n.jsx)(v.a,{title:this.props.savedEvent.food,subtitle:this.props.savedEvent.location,actionIcon:Object(n.jsxs)("div",{children:[Object(n.jsx)(m.a,{trigger:Object(n.jsx)(u.a,{color:"secondary",style:w,children:"More Info"}),modal:!0,nested:!0,children:function(t){return Object(n.jsxs)("div",{className:"modal",style:F,children:[Object(n.jsx)("button",{className:"close",onClick:t,style:P,children:"\xd7"}),Object(n.jsxs)("div",{className:"header",style:N,children:[" ",Object(n.jsx)("h1",{children:e.props.savedEvent.name}),e.props.savedEvent.location," || ",e.props.savedEvent.food," || ",e.props.savedEvent.date]}),Object(n.jsxs)("div",{className:"content",children:[" ",Object(n.jsx)("br",{}),e.props.savedEvent.details]}),Object(n.jsx)("div",{className:"actions",style:H,children:Object(n.jsx)(u.a,{className:"button",onClick:function(){console.log("modal closed "),t()},children:"close"})})]})}}),Object(n.jsx)(u.a,{color:"secondary",style:w,onClick:this.delEvent,children:"Remove Event from Saved"})]})})]},this.props.savedEvent.name)}}]),a}(o.Component),R=function(e){Object(p.a)(a,e);var t=Object(b.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return console.log(this.props.savedEvents),Object(n.jsx)("div",{style:z,children:Object(n.jsx)(j.a,{children:this.props.savedEvents.map((function(t){return Object(n.jsx)(A,{savedEvent:t,delEvent:e.props.delEvent},t.id)}))})})}}]),a}(o.Component),z={display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden"},U=R,I=a(82),J=a(88),D=a(83),W=a(85),G=a(84),L=a(23),Q=Object(I.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));function T(){var e=Q();return Object(n.jsx)("div",{className:e.root,children:Object(n.jsx)(J.a,{position:"static",children:Object(n.jsxs)(D.a,{children:[Object(n.jsx)(G.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu"}),Object(n.jsx)(W.a,{variant:"h6",className:e.title,children:"FoodMaps!"}),Object(n.jsx)(u.a,{color:"inherit",to:"/",component:L.b,children:"Event Feed"}),Object(n.jsx)(u.a,{color:"inherit",to:"/Create",component:L.b,children:"Create an Event"}),Object(n.jsx)(u.a,{color:"inherit",to:"/Saved",component:L.b,children:"Saved Events"})]})})})}var q=a(7),Y=a(86),V=function(e){Object(p.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={events:[{name:"Welcome Week Parade",location:"MUSC",food:"Pizza",pic:"1.jpg",details:"Free Hot Dogs at MUSC on September 6th! First come first serve so dont be late!",date:"September 6th 2020",id:Object(Y.a)()},{name:"Hatch Opening Party",location:"Gerald Hatch Building",food:"Burgers",pic:"2.jpg",details:"Free Burgers at Hatch on September 8th to celebrate the opening of the new building!",date:"September 8th 2020",id:Object(Y.a)()},{name:"McMaster Robotics Club",location:"JHE 263",food:"BBQ",pic:"3.jpg",details:"Come to our Annual Robotics BBQ at JHE! Raffles and Prizes will be available.",date:"September 14th 2020",id:Object(Y.a)()},{name:"McMaster Competitive Programming Team",location:"JHE 263",food:"Fried Chicken",pic:"4.jpg",details:"Come to our intro to programing workshop, we'll have Popeyes!",date:"September 12th 2020",id:Object(Y.a)()},{name:"Student Union Event",location:"MUSC Lobby",food:"Biryani",pic:"5.jpg",details:"Come to MUSC for some FREE BIRYANI! First come first serve while quantities last.",date:"September 18th 2020",id:Object(Y.a)()},{name:"McMaster Poetry Club",location:"Bridges",food:"Cheese and Crackers",pic:"6.jpg",details:"Come enjoy our first poetry slam of the semester! Free cheese and crackers!",date:"September 10th 2020",id:Object(Y.a)()},{name:"McMaster Guitar Club",location:"BSB 201",food:"Assorted Foods",pic:"7.jpg",details:"Come vibe out at our first open mic! Variety of free foods.",date:"September 10th 2020",id:Object(Y.a)()},{name:"Welcome Week Parade",location:"MUSC",food:"Pizza",pic:"1.jpg",details:"Free Hot Dogs at MUSC on September 6th! First come first serve so dont be late!",date:"September 6th 2020",id:Object(Y.a)()},{name:"Hatch Opening Party",location:"Gerald Hatch Building",food:"Burgers",pic:"2.jpg",details:"Free Burgers at Hatch on September 8th to celebrate the opening of the new building!",date:"September 8th 2020",id:Object(Y.a)()},{name:"McMaster Robotics Club",location:"JHE 263",food:"BBQ",pic:"3.jpg",details:"Come to our Annual Robotics BBQ at JHE! Raffles and Prizes will be available.",date:"September 14th 2020",id:Object(Y.a)()},{name:"McMaster Competitive Programming Team",location:"JHE 263",food:"Fried Chicken",pic:"4.jpg",details:"Come to our intro to programing workshop, we'll have Popeyes!",date:"September 12th 2020",id:Object(Y.a)()},{name:"Student Union Event",location:"MUSC Lobby",food:"Biryani",pic:"5.jpg",details:"Come to MUSC for some FREE BIRYANI! First come first serve while quantities last.",date:"September 18th 2020",id:Object(Y.a)()},{name:"McMaster Poetry Club",location:"Bridges",food:"Cheese and Crackers",pic:"6.jpg",details:"Come enjoy our first poetry slam of the semester! Free cheese and crackers!",date:"September 10th 2020",id:Object(Y.a)()},{name:"McMaster Guitar Club",location:"BSB 201",food:"Assorted Foods",pic:"7.jpg",details:"Come vibe out at our first open mic! Variety of free foods.",date:"September 10th 2020",id:Object(Y.a)()},{name:"Welcome Week Parade",location:"MUSC",food:"Pizza",pic:"1.jpg",details:"Free Hot Dogs at MUSC on September 6th! First come first serve so dont be late!",date:"September 6th 2020",id:Object(Y.a)()},{name:"Hatch Opening Party",location:"Gerald Hatch Building",food:"Burgers",pic:"2.jpg",details:"Free Burgers at Hatch on September 8th to celebrate the opening of the new building!",date:"September 8th 2020",id:Object(Y.a)()},{name:"McMaster Robotics Club",location:"JHE 263",food:"BBQ",pic:"3.jpg",details:"Come to our Annual Robotics BBQ at JHE! Raffles and Prizes will be available.",date:"September 14th 2020",id:Object(Y.a)()},{name:"McMaster Competitive Programming Team",location:"JHE 263",food:"Fried Chicken",pic:"4.jpg",details:"Come to our intro to programing workshop, we'll have Popeyes!",date:"September 12th 2020",id:Object(Y.a)()},{name:"Student Union Event",location:"MUSC Lobby",food:"Biryani",pic:"5.jpg",details:"Come to MUSC for some FREE BIRYANI! First come first serve while quantities last.",date:"September 18th 2020",id:Object(Y.a)()},{name:"McMaster Poetry Club",location:"Bridges",food:"Cheese and Crackers",pic:"6.jpg",details:"Come enjoy our first poetry slam of the semester! Free cheese and crackers!",date:"September 10th 2020",id:Object(Y.a)()}],savedEvents:[]},e.saveEvent=function(t){e.state.savedEvents.includes(t)||(e.setState({savedEvents:[].concat(Object(c.a)(e.state.savedEvents),[t])}),console.log("Added Event"))},e.delEvent=function(t){e.setState({savedEvents:Object(c.a)(e.state.savedEvents.filter((function(e){return e!==t})))})},e.addEvent=function(t){var a={name:t.eventName,location:t.location,food:t.food,pic:"1.jpg",details:t.details,date:t.date,id:Object(Y.a)()};e.setState({events:[].concat(Object(c.a)(e.state.events),[a])})},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return Object(n.jsx)(L.a,{children:Object(n.jsxs)("div",{children:[Object(n.jsx)(T,{}),Object(n.jsx)(q.a,{exact:!0,path:"/",render:function(t){return Object(n.jsx)(s.a.Fragment,{children:Object(n.jsx)(k,{events:e.state.events,saveEvent:e.saveEvent,savedEvents:e.state.savedEvents})})}}),Object(n.jsx)(q.a,{path:"/Create",render:function(t){return Object(n.jsx)(M,{addEvent:e.addEvent})}}),Object(n.jsx)(q.a,{path:"/Saved",render:function(t){return Object(n.jsx)(U,{savedEvents:e.state.savedEvents,delEvent:e.delEvent})}})]})})}}]),a}(o.Component),K=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,90)).then((function(t){var a=t.getCLS,n=t.getFID,o=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),n(e),o(e),s(e),i(e)}))};r.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(V,{})}),document.getElementById("root")),K()}},[[60,1,2]]]);
//# sourceMappingURL=main.010fa8e8.chunk.js.map