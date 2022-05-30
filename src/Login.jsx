import React from "react";
import web from "../src/images/hero-img.png";
import { NavLink } from "react-router-dom";
import Commom from "./Commom";

const Login = () => {
  return (
    <>
      <Commom
        name="Welcome to Login page"
        imgsrc={web}
        visit="/SignUP"
        btname="Create Account"
      />
    </>
  );
};

export default Login;
