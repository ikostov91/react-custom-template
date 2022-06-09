import React from "react";
import { connect } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { isUserAuthenticated } from "../../../helpers/auth-utils";
import { Navigate } from "react-router-dom";
import Logo from "../../../components/logo";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import CustomForm from "../../../components/form/custom-form";
import { resetPasswordFormDefinition } from "../utils";
import { resetPassword } from "../../../store/actions/authentication-actions";

const ResetPassword = ({ resetPassword }) => {
  const [searchParams] = useSearchParams();
  const email = searchParams.get('email');
  const token = searchParams.get('token');

  if (!email || !token || isUserAuthenticated()) {
    return <Navigate to="/" />
  }

  return (
    <div className="auth-pages-wrapper">
      <div className="inner-wrapper">
          <div className="text-center mb-3">
            <Logo />
          </div>
          <div className="text-center mb-3">
            <h5>Reset password</h5>
          </div>
          <div className="mb-3">
            <CustomForm
              fields={resetPasswordFormDefinition}
              onSubmit={(data) => {
                const { newPassword, confirmPassword } = data;
                resetPassword(email, token, newPassword, confirmPassword);
              }}
              renderSubmitChildren={(
                <div className="text-center mt-3">
                  <Button size="sm" type="submit">Reset password</Button>
                </div>
              )}
            />
          </div>
          <div className="text-center">
            <Link to="/login" className="forgot-password-link">Back to Login</Link>
          </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  resetPassword
};

export default connect(null, mapDispatchToProps)(ResetPassword);
