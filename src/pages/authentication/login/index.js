import React from "react";
import { isUserAuthenticated, authenticateUser } from "../../../helpers/auth-utils";
import { Navigate } from "react-router-dom";
import Logo from "../../../components/logo";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import history from "../../../history";
import CustomForm from "../../../components/form/custom-form";
import { NotificationManager } from "react-notifications";

const Login = () => {
  const onSubmit = data => {
    if (data.email === 'test@abv.bg' && data.password === 'test') {
      authenticateUser();
      history.push('/');
      NotificationManager.success('Successfully logged in!', null, 3000);
    } else {
      NotificationManager.error('Wrong username and/or password!', null, 3000);
    }
  };

  if (isUserAuthenticated()) {
    return <Navigate to="/" />
  }

  const fields = [{
    label: 'Email Address',
    type: 'email',
    validations: {
      required: {
        value: true,
        message: 'Email address is required'
      },
      maxLength: {
        value: 35,
        message: 'Email addres cannot be longer than 35 characters'
      },
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "Email address is invalid"
      }
    }
  }, {
    label: 'Password',
    type: 'password',
    validations: {
      required: {
        value: true,
        message: 'Password is required'
      },
    }
  }]

  return (
    <div className="auth-pages-wrapper">
      <div className="inner-wrapper">
          <div className="text-center mb-3">
            <Logo />
          </div>
          <div className="text-center mb-3">
            <h5>Login</h5>
            <div>Email: test@abv.bg, Password: test</div>
          </div>
          <div className="mb-3">
            <CustomForm
              fields={fields}
              onSubmit={(data) => onSubmit(data)}
              renderSubmitChildren={(
                <div className="text-center mt-3">
                  <Button size="sm" type="submit">Login</Button>
                </div>
              )}
            />
          </div>
          <div className="text-center">
            <Link to="/" className="forgot-password-link">Forgot password?</Link>
          </div>
      </div>
    </div>
  );
};

export default Login;
