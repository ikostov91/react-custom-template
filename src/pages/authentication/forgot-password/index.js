import React from "react";
import { connect } from "react-redux";
import { isUserAuthenticated } from "../../../helpers/auth-utils";
import { Navigate } from "react-router-dom";
import Logo from "../../../components/logo";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import CustomForm from "../../../components/form/custom-form";
import { forgotPasswordFormDefinition } from "../utils";
import { requestPasswordResetLink } from "../../../store/actions/authentication-actions";

const ForgotPassword = ({ requestPasswordResetLink }) => {
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
            <h5>Forgot password</h5>
          </div>
          <div className="mb-3">
            <CustomForm
              fields={forgotPasswordFormDefinition}
              onSubmit={(data) => {
                const { email } = data;
                requestPasswordResetLink(email);
              }}
              renderSubmitChildren={(
                <div className="text-center mt-3">
                  <Button size="sm" type="submit">Link for new password</Button>
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

const mapDispatchToProps = {
  requestPasswordResetLink
};

export default connect(null, mapDispatchToProps)(ForgotPassword);
