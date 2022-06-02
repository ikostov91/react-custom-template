import React from "react";
import { isUserAuthenticated } from "../../helpers/auth-utils";
import { Navigate } from "react-router-dom";
import Logo from "../../components/logo";
import CardContainer from "../../components/card-container";
import CustomRow from "../../components/custom-row";
import CustomColumn from "../../components/custom-column";

const Login = () => {
  if (isUserAuthenticated()) {
    return <Navigate to="/" />
  }

  return (
    <div className="auth-wrapper">
      <div className="inner-wrapper text-center">
        {/* <CardContainer className="text-center"> */}
          <Logo />
          <h1>LOGIN</h1>
        {/* </CardContainer> */}
      </div>
    </div>
  );
};

export default Login;
