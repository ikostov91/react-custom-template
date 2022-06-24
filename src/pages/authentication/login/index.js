import React from "react";
import { connect } from "react-redux";
import { isUserAuthenticated } from "../../../helpers/auth-utils";
import { Navigate } from "react-router-dom";
import Logo from "../../../components/logo";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import CustomForm from "../../../components/form/custom-form";
import { loginUser } from '../../../store/actions/authentication-actions';
import { loginFormDefinition } from "../utils";

const Login = ({ loginUser }) => {
  if (isUserAuthenticated()) {
    return <Navigate to="/" />
  }

  return (
    <div className="auth-pages-wrapper">
      <div className="inner-wrapper">
          <div className="text-center mb-3">
            <Logo />
          </div>
          <div className="text-center mb-3">
            <h5>Login</h5>
            <div><b>Email</b>: test@abv.bg, <b>Password</b>: test</div>
          </div>
          <div className="mb-3">
            <CustomForm
              fields={loginFormDefinition}
              onSubmit={(data) => {
                const { emailAddress, password } = data;
                loginUser(emailAddress, password);
              }}
              renderSubmitChildren={(
                <div className="text-center mt-3">
                  <Button size="sm" type="submit">Login</Button>
                </div>
              )}
            />
          </div>
          <div className="text-center">
            <Link to="/forgot-password" className="forgot-password-link">Forgot password?</Link>
          </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  ...state
});

const mapDispatchToProps = {
  loginUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
