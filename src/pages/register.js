import React, { useState } from "react";
import "./register.css";
import { graphql, useStaticQuery } from "gatsby";

import { Router, Link, navigate } from "@reach/router";
import { render } from "react-dom";

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
  updateUsername(e) {
    this.setState({ username: e.target.value });
  }
  render() {
    return (
      <div class="contain">
        <div />
        <div id="content11">
          <div id="firstName1">
            <label>First Name: </label>
            <input
              id="first1"
              value={this.state.name}
              type="text"
              placeholder="First Name ..."
              onChange={this.updateName.bind(this)}
            />
          </div>
          <div id="firstName1">
            <label>Last Name: </label>
            <input
              id="first1"
              value={this.state.surname}
              type="text"
              placeholder="Username ..."
              onChange={this.updateSurname.bind(this)}
            />
          </div>
          <div id="firstName1">
            <label>E-mail adress: </label>
            <input
              id="first1"
              value={this.state.email}
              type="text"
              placeholder="Username ..."
              onChange={this.updateEMail.bind(this)}
            />
          </div>
          <div id="firstName1">
            <label>Username: </label>
            <input
              id="first1"
              value={this.state.username}
              type="text"
              placeholder="Username ..."
              onChange={this.updateUsername.bind(this)}
            />
          </div>
          <div id="firstName1">
            <label>Password: </label>
            <input
              id="first1"
              value={this.state.password}
              type="password"
              placeholder="Password ..."
              onChange={this.updatePassword.bind(this)}
            />
          </div>
          <button id="logButton111" id="logButton111">
            Register
          </button>{" "}
        </div>
        <div />
      </div>
    );
  }
}
export default LogIn;
