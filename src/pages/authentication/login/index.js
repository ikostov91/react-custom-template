import React from "react";
import { isUserAuthenticated, authenticateUser } from "../../../helpers/auth-utils";
import { Navigate } from "react-router-dom";
import Logo from "../../../components/logo";
import { useForm, Controller  } from "react-hook-form";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import history from "../../../history";
import Form from "react-bootstrap/Form";
import { NotificationManager } from "react-notifications";

const Login = () => {
  const { control, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    if (data.email === 'test' && data.password === 'test') {
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

  return (
    <div className="auth-pages-wrapper">
      <div className="inner-wrapper">
          <div className="text-center mb-3">
            <Logo />
          </div>
          <div className="text-center mb-3">
            <h5>Login</h5>
            <div>Email: test, Password: test</div>
          </div>
          <div className="login-form mb-3">
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-2">
                <Form.Label className="required">Email address</Form.Label>
                <Controller
                  name="email"
                  control={control}
                  rules={{ required: true, maxLength: 20 }}
                  render={({ field }) => <Form.Control size="sm" className="mb-1" { ...field } />}
                />
                {errors.email?.type === 'required' && (
                  <div className="validation-error">
                    This field is required
                  </div>
                )}
                {errors.email?.type === 'maxLength' && (
                  <div className="validation-error">This field should be not be longer than 20</div>
                )}
              </div>
              <div className="mb-3">
                <Form.Label className="required">Password</Form.Label>
                <Controller
                  name="password"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => <Form.Control size="sm" className="mb-1" { ...field } />}
                />
                {errors.password?.type === 'required' && (
                  <div className="validation-error">
                    This field is required
                  </div>
                )} 
              </div>       
              <div className="text-center">
                <Button size="sm" type="submit">Login</Button>
              </div>
            </form>
          </div>
          <div className="text-center">
            <Link to="/" className="forgot-password-link">Forgot password?</Link>
          </div>
      </div>
    </div>
  );
};

export default Login;
