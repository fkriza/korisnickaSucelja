import React, { useState } from "react";
import "./logIn.css";
import { graphql, useStaticQuery } from "gatsby";

import { Router, Link, navigate } from "@reach/router";
import { render } from "react-dom";
import Recommended from "../../components/recommended";

function Button(user) {
  const data = useStaticQuery(graphql`
    query MyQuery {
      site {
        siteMetadata {
          postInfo {
            password
            username
          }
        }
      }
    }
  `);
  const userData = data.site.siteMetadata.postInfo;
  console.log("bla ", user.username);
  return (
    <div>
      <button
        class="logButton"
        onClick={() => {
          let flag = false;
          console.log(userData.length);
          for (let i = 0; i < userData.length; i++) {
            console.log(
              "iteration: ",
              user.username,
              userData[i].username,
              user.password,
              userData[i].password
            );
            if (
              user.username == userData[i].username &&
              user.password == userData[i].password
            ) {
              flag = true;
              console.log("if:___", userData[i]);
              navigate("../recommended", { replace: false });
            }
          }
          if (!flag) alert("Error: Wrong username or password");
        }}
      >
        LOG IN
      </button>
    </div>
  );
}
class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first: "",
      last: "",
      name: "",
      surname: "",
      password: "",
      email: ""
    };
  }

  updateInput(e) {
    this.setState({ first: e.target.value });
  }
  updateLast(e) {
    this.setState({ last: e.target.value });
  }
  updateName(e) {
    this.setState({ name: e.target.value });
  }
  updateSurname(e) {
    this.setState({ surname: e.target.value });
  }
  updateEMail(e) {
    this.setState({ name: e.target.value });
  }
  updatePassword(e) {
    this.setState({ password: e.target.value });
  }
  render() {
    return (
      <div class="content1">
        <Router>
          <Recommended path="recommended" />
        </Router>
        <div class="firstName">
          <label>First Name: </label>
          <input
            class="first"
            value={this.state.name}
            type="text"
            placeholder="First Name ..."
            onChange={this.updateName.bind(this)}
          />
        </div>
        <div class="firstName">
          <label>Last Name: </label>
          <input
            class="first"
            value={this.state.surname}
            type="text"
            placeholder="Username ..."
            onChange={this.updateSurname.bind(this)}
          />
        </div>
        <div class="firstName">
          <label>E-mail adress: </label>
          <input
            class="first"
            value={this.state.email}
            type="text"
            placeholder="Username ..."
            onChange={this.updateEMail.bind(this)}
          />
        </div>
        <div class="firstName">
          <label>Username: </label>
          <input
            class="first"
            value={this.state.username}
            type="text"
            placeholder="Username ..."
            onChange={this.updateUsername.bind(this)}
          />
        </div>
        <div class="firstName">
          <label>Password: </label>
          <input
            class="first"
            value={this.state.password}
            type="password"
            placeholder="Password ..."
            onChange={this.updatePassword.bind(this)}
          />
        </div>

        <Button username={this.state.first} password={this.state.last} />
      </div>
    );
  }
}
export default LogIn;
