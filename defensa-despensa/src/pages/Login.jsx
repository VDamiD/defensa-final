import React, { useState } from "react";
import { Button, Form, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import HeaderLogin from "../components/HeaderLogin";
import Main from "../components/Main";
import Footer from "../components/Footer";

const Login = () => {
  return (
    <>
      <div>
        <HeaderLogin />
        <Main />
        <Footer />
      </div>
    </>
  );
};

export default Login;
