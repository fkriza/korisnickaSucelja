import * as React from "react";
import "./index.css";
import Query from "./login";
import { useStaticQuery, graphql } from "gatsby";
import { Router, Link, navigate } from "@reach/router";
import { render } from "react-dom";
import Layout from "../../components/layout";
import Recommended from "../../components/recommended";
import LogIn from "./login";

function FirstPage() {
  return (
    <div class="border">
      <div class="content">
        <p class="indexTitle">Event Handler</p>

        <button class="indexButton1" onClick={() => navigate("login")}>
          Log In
        </button>

        <button class="indexButton" onClick={() => navigate("register")}>
          Register
        </button>
        <button onClick={() => navigate("guest")} class="indexButton">
          Guest
        </button>
      </div>
    </div>
  );
}

let Home = () => <div>Home</div>;
let Dash = () => <div>Dash</div>;

export default () => {
  const data = useStaticQuery(graphql`
    query MyQuery1 {
      site {
        siteMetadata {
          postInfo {
            username
            password
          }
        }
      }
    }
  `);
  console.log(data.site.siteMetadata.postInfo);

  return <FirstPage />;
};
