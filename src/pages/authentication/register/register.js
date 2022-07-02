import React from "react";
import { connect } from "react-redux";
import { isUserAuthenticated } from "../../../helpers/auth-utils";
import { Navigate } from "react-router-dom";
import Logo from "../../../components/logo";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import CustomForm from "../../../components/form/custom-form";
import { registerUser } from '../../../store/actions/authentication-actions';
import { registerUserFormDefinition } from "../utils";

const Register = ({ registerUser }) => {
  if (isUserAuthenticated()) {
    return <Navigate to="/" />
  }

  return (
    <div className="auth-pages-wrapper">
      <div className="inner-wrapper wide">
          <div className="text-center mb-3">
            <Logo />
          </div>
          <div className="text-center mb-3">
            <h5>Register</h5>
          </div>
          <div className="mb-3">
            <CustomForm
              fields={registerUserFormDefinition}
              onSubmit={(data) => {
                const { firstName, lastName, emailAddress, password } = data;
                registerUser(firstName, lastName, emailAddress, password);
              }}
              renderSubmitChildren={(
                <div className="text-center mt-3">
                  <Button size="sm" type="submit">Register</Button>
                </div>
              )}
            />
          </div>
          <div className="additional-auth-links">
            <Link to="/login">Back to Login</Link>
          </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  ...state
});

const mapDispatchToProps = {
  registerUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
