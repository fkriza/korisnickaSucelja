(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{A4lf:function(t){t.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"postInfo":[{"username":"Frane Križanović","password":"1234"},{"username":"Frane Bakić","password":"12345"}]}}}}')},Hs6S:function(t,e,a){"use strict";a.r(e);var n=a("A4lf"),s=a("q1tI"),r=a.n(s),o=(a("5nYz"),a("RXBc"),a("YwZP"));a("i8i4");function i(t,e){var a=n.data;return console.log(t,e,a),r.a.createElement("button",{class:"button",onClick:function(){return Object(o.navigate)("/")}},"Click me")}var l=function(t){var e,a;function n(e){var a;return(a=t.call(this,e)||this).state={first:"",last:""},a}a=t,(e=n).prototype=Object.create(a.prototype),e.prototype.constructor=e,e.__proto__=a;var s=n.prototype;return s.updateInput=function(t){this.setState({first:t.target.value})},s.updateLast=function(t){this.setState({last:t.target.value})},s.render=function(){return console.log("frane"+this.state.data),r.a.createElement("div",{class:"content"},r.a.createElement("div",{class:"firstName"},r.a.createElement("label",null,"First Name: "),r.a.createElement("input",{class:"first",value:this.state.first,type:"text",placeholder:"First Name ...",onChange:this.updateInput.bind(this)})),r.a.createElement("div",{class:"firstName"},r.a.createElement("label",null,"Last Name: "),r.a.createElement("input",{class:"last",value:this.state.last,type:"text",placeholder:"Last Name ...",onChange:this.updateLast.bind(this)})),r.a.createElement(i,{username:this.state.first,password:this.state.last}))},n}(r.a.Component);e.default=l},RXBc:function(t,e,a){"use strict";a.r(e);var n=a("kHfr"),s=a("q1tI"),r=(a("EDuE"),a("Hs6S")),o=a("YwZP");a("i8i4");function i(){return s.createElement("div",{class:"content"},s.createElement(o.Link,{to:"/logIn"},s.createElement("button",{class:"login"},"Log In")),s.createElement("button",{class:"registerNow"},"Register Now"),s.createElement("button",{class:"guest"},"Use as Guest"))}e.default=function(){var t=n.data;return console.log(t.site.siteMetadata.postInfo),s.createElement("div",null,s.createElement(o.Router,null,s.createElement(i,{path:"/"}),s.createElement(r.default,{path:"logIn"})))}},kHfr:function(t){t.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"postInfo":[{"username":"Frane Križanović","password":"1234"},{"username":"Frane Bakić","password":"12345"}]}}}}')}}]);
//# sourceMappingURL=component---src-pages-index-js-3a0d4ba40924652abcd1.js.map