(window.webpackJsonp=window.webpackJsonp||[]).push([[4,5],{"0iar":function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"postInfo":[{"password":"1234","username":"Frane Križanović","posts":[{"comments":"comment1","dateAndTime":"24.8.1997","description":"This is my first event","location":"Split","tags":"#tag1 #tag2"},{"comments":"comment1","dateAndTime":"24.8.1997","description":"This is my first event","location":"Split1","tags":"#tag1 #tag2"}]},{"password":"12345","username":"Frane Bakić","posts":[{"comments":"comment1","dateAndTime":"24.8.1997","description":"This is my first event","location":"Split","tags":"#tag1 #tag2"}]}]}}}}')},CafY:function(e,t,a){"use strict";var n=a("q1tI"),s=a.n(n),l=a("ZHh6"),c=a("kwih");a("U67l");t.a=function(e){var t=e.children;return s.a.createElement("div",{class:"layoutcontent"},s.a.createElement(l.a,null),s.a.createElement("div",{class:"layDummy"}),s.a.createElement("div",{class:"lContent"},s.a.createElement(c.a,{class:"navBar",id:"navBar"}),s.a.createElement("div",null," "),s.a.createElement("div",{class:"children"},t),s.a.createElement("div",{class:"dummy000"})))}},Hs6S:function(e,t,a){"use strict";a.r(t);var n=a("0iar"),s=a("q1tI"),l=a.n(s),c=(a("5nYz"),a("YwZP")),r=(a("i8i4"),a("YAT3"));function o(e,t){var a=n.data.site.siteMetadata.postInfo;return console.log("bla ",a),l.a.createElement("div",null,l.a.createElement("button",{class:"logButton",onClick:function(){console.log("bla111 ",e,t);for(var n=!1,s=0;s<a.length;s++)console.log("iteration: ",e,a[s].username,t,a[s].password),e.username==a[s].username&&e.password==a[s].password&&(n=!0,Object(c.navigate)("/recommended",{state:{userData:a[s]}}));n||alert("Error: Wrong username or password")}},"LOG IN"))}var i=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).state={first:"",last:""},a}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var s=n.prototype;return s.updateInput=function(e){this.setState({first:e.target.value})},s.updateLast=function(e){this.setState({last:e.target.value})},s.render=function(){return console.log(this.state.first,this.state.last),l.a.createElement("div",{class:"content1"},l.a.createElement(c.Router,null,l.a.createElement(r.a,{path:"recommended"})),l.a.createElement("div",{class:"firstName"},l.a.createElement("label",null,"First Name: "),l.a.createElement("input",{class:"first",value:this.state.first,type:"text",placeholder:"First Name ...",onChange:this.updateInput.bind(this)})),l.a.createElement("div",{class:"firstName"},l.a.createElement("label",null,"Last Name: "),l.a.createElement("input",{class:"first",value:this.state.last,type:"text",placeholder:"Last Name ...",onChange:this.updateLast.bind(this)})),l.a.createElement(o,{username:this.state.first,password:this.state.last}))},n}(l.a.Component);t.default=i},RXBc:function(e,t,a){"use strict";a.r(t);var n=a("dfel"),s=a("q1tI"),l=(a("EDuE"),a("Hs6S"),a("YwZP"));a("i8i4"),a("CafY"),a("YAT3");function c(){return s.createElement("div",{class:"border"},s.createElement("div",{class:"content"},s.createElement("p",{class:"indexTitle"},"Event Handler"),s.createElement(l.Link,{class:"indexLink",to:"/logIn"},s.createElement("button",{class:"indexButton1"},"Log In")),s.createElement(l.Link,{class:"indexLink",to:"/logIn"},s.createElement("button",{class:"indexButton"},"Register")),s.createElement(l.Link,{class:"indexLink",to:"/logIn"},s.createElement("button",{class:"indexButton"},"Guest"))))}t.default=function(){var e=n.data;return console.log(e.site.siteMetadata.postInfo),s.createElement(c,null)}},YAT3:function(e,t,a){"use strict";var n=a("q1tI"),s=a.n(n),l=(a("CdHN"),a("CafY"),a("xK7a")),c=a("ZHh6"),r=a("kwih");t.a=function(e){return console.log("recommended ",e),s.a.createElement("div",{class:"reContent"},s.a.createElement(c.a,null),s.a.createElement("div",{class:"navContent"},s.a.createElement("div",{class:"dummy1"}),s.a.createElement(r.a,null),s.a.createElement("div",{class:"dummy2"}),s.a.createElement("div",null,s.a.createElement(l.a,null),s.a.createElement(l.a,null))))}},ZHh6:function(e,t,a){"use strict";var n=a("q1tI"),s=a.n(n),l=(a("iMgQ"),a("YwZP"));t.a=function(){return s.a.createElement("header",{class:"headerContent"},s.a.createElement("div",{class:"leftHeader"},s.a.createElement("img",{src:"https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",class:"profilePicture"}),s.a.createElement("p",{onClick:function(){Object(l.navigate)("recommended")},class:"appName"},"E V E N T    A P P")),s.a.createElement("div",null),s.a.createElement("div",null,s.a.createElement("div",{class:"bla"},s.a.createElement("p",{class:"username"},"Username"),s.a.createElement("div",null),s.a.createElement("button",{class:"logOut",onClick:function(){return Object(l.navigate)("/")}},s.a.createElement("p",{class:"logOutText"},"Log out")),s.a.createElement("div",null))),s.a.createElement("div",null))}},dfel:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"postInfo":[{"username":"Frane Križanović","password":"1234"},{"username":"Frane Bakić","password":"12345"}]}}}}')},kwih:function(e,t,a){"use strict";var n=a("q1tI"),s=a.n(n),l=(a("QUEk"),a("YwZP"));function c(){Object(l.navigate)("organizeEvent")}t.a=function(){return s.a.createElement("div",{class:"navBarContent"},s.a.createElement("button",{class:"eventButton",onClick:c},s.a.createElement("p",{class:"lato"},"Organize an Event")),s.a.createElement("button",{class:"eventButton",onClick:function(){Object(l.navigate)("searchEvents")}},s.a.createElement("p",{class:"lato"},"Search Events")),s.a.createElement("button",{class:"eventButton",onClick:function(){Object(l.navigate)("subscribedEvents")}},s.a.createElement("p",{class:"lato"},"Subscribed Events")),s.a.createElement("button",{class:"eventButton",onClick:function(){Object(l.navigate)("followedEvents")}},s.a.createElement("p",{class:"lato"},"Followed Events")),s.a.createElement("button",{class:"eventButton",onClick:function(){Object(l.navigate)("organizedEvents")}},s.a.createElement("p",{class:"lato"},"Organized Events")),s.a.createElement("button",{class:"eventButton",onClick:function(){Object(l.navigate)("recommended")}},s.a.createElement("p",{class:"lato"},"Recommended Events")))}},xK7a:function(e,t,a){"use strict";var n=a("q1tI"),s=a.n(n);a("cgrw");t.a=function(e){var t=e.data;return console.log({data:t}),s.a.createElement("div",{class:"Post"},s.a.createElement("div",{class:"postInfo"},s.a.createElement("div",{class:"user"},s.a.createElement("img",{class:"profilePic1",src:"https://icon-library.net/images/user-image-icon/user-image-icon-4.jpg"}),s.a.createElement("div",null),s.a.createElement("p",null,"userName")),s.a.createElement("div",{class:"postPictureContainer"},s.a.createElement("div",{class:"dummy11"}),s.a.createElement("img",{class:"postPicture",src:"https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}),s.a.createElement("div",{class:"dummy12"})),s.a.createElement("div",{class:"info"},s.a.createElement("p",{class:"info1"},"Location: Split"),s.a.createElement("p",{class:"info1"},"Date and Time: 20 00, 24. 10. 2019."),s.a.createElement("div",{class:"buttons"},s.a.createElement("div",null),s.a.createElement("button",{class:"postButton"},s.a.createElement("p",{class:"postLato"},"Subscribe")),s.a.createElement("button",{class:"postButton"},s.a.createElement("p",{class:"postLato"},"Recommend")),s.a.createElement("button",{class:"postButton"},s.a.createElement("p",{class:"postLato"},"Follow   ")),s.a.createElement("div",null)),s.a.createElement("p",{class:"tags"},"Tags: ",s.a.createElement("a",{class:"tg"},"#tg1")," #tg2"))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-2f0d4c5ddabd2dece412.js.map