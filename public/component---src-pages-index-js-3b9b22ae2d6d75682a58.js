(window.webpackJsonp=window.webpackJsonp||[]).push([[5,6],{"5lMP":function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"postInfo":[{"password":"1234","username":"Frane Križanović"},{"password":"12345","username":"Frane Bakić"}]}}}}')},Hs6S:function(e,t,a){"use strict";a.r(t);var n=a("5lMP"),s=a("q1tI"),r=a.n(s),o=(a("5nYz"),a("YwZP")),l=(a("i8i4"),a("YAT3"));function i(e){var t=n.data.site.siteMetadata.postInfo;return console.log("bla ",e.username),r.a.createElement("div",null,r.a.createElement("button",{class:"logButton",onClick:function(){var a=!1;console.log(t.length);for(var n=0;n<t.length;n++)console.log("iteration: ",e.username,t[n].username,e.password,t[n].password),e.username==t[n].username&&e.password==t[n].password&&(a=!0,console.log("if:___",t[n]),Object(o.navigate)("/recommended"));a||alert("Error: Wrong username or password")}},"LOG IN"))}var c=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).state={first:"",last:""},a}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var s=n.prototype;return s.updateInput=function(e){this.setState({first:e.target.value})},s.updateLast=function(e){this.setState({last:e.target.value})},s.render=function(){return console.log("aaa",this.state.first,this.state.last,this.state.isUser),r.a.createElement("div",{class:"content1"},r.a.createElement(o.Router,null,r.a.createElement(l.a,{path:"recommended"})),r.a.createElement("div",{class:"firstName"},r.a.createElement("label",null,"Username: "),r.a.createElement("input",{class:"first",value:this.state.first,type:"text",placeholder:"Username ...",onChange:this.updateInput.bind(this)})),r.a.createElement("div",{class:"firstName"},r.a.createElement("label",null,"Password: "),r.a.createElement("input",{class:"first",value:this.state.last,type:"password",placeholder:"Password ...",onChange:this.updateLast.bind(this)})),r.a.createElement(i,{isUser:this.state.isUser,username:this.state.first,password:this.state.last}))},n}(r.a.Component);t.default=c},RXBc:function(e,t,a){"use strict";a.r(t);var n=a("dfel"),s=a("q1tI"),r=(a("EDuE"),a("Hs6S"),a("YwZP"));a("i8i4"),a("CafY"),a("YAT3");function o(){return s.createElement("div",{class:"border"},s.createElement("div",{class:"content"},s.createElement("p",{class:"indexTitle"},"Event Handler"),s.createElement("button",{class:"indexButton1",onClick:function(){return Object(r.navigate)("logIn",{state:{user:!0},replace:!1})}},"Log In"),s.createElement("button",{class:"indexButton"},"Register"),s.createElement("button",{onClick:function(){return Object(r.navigate)("guest",{state:{user:!1},replace:!1})},class:"indexButton"},"Guest")))}t.default=function(){var e=n.data;return console.log(e.site.siteMetadata.postInfo),s.createElement(o,null)}},YAT3:function(e,t,a){"use strict";var n=a("q1tI"),s=a.n(n),r=(a("CdHN"),a("CafY"),a("xK7a")),o=a("ZHh6"),l=a("kwih");t.a=function(e){return console.log("recommended ",e),s.a.createElement("div",{class:"reContent"},s.a.createElement(o.a,null),s.a.createElement("div",{class:"navContent"},s.a.createElement("div",{class:"dummy1"}),s.a.createElement(l.a,{location:"recommendedEvents"}),s.a.createElement("div",{class:"dummy2"}),s.a.createElement("div",null,s.a.createElement(r.a,null),s.a.createElement(r.a,null))))}},dfel:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"postInfo":[{"username":"Frane Križanović","password":"1234"},{"username":"Frane Bakić","password":"12345"}]}}}}')}}]);
//# sourceMappingURL=component---src-pages-index-js-3b9b22ae2d6d75682a58.js.map