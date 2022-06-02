import React from "react";
import { isUserAuthenticated, authenticateUser } from "../../../helpers/auth-utils";
import { Navigate } from "react-router-dom";
import Logo from "../../../components/logo";
import { useForm } from "react-hook-form";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import history from "../../../history";

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    if (data.email === 'test' && data.password === 'test') {
      authenticateUser();
      history.push('/');
    } else {
      alert('Wrong email or password');
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
                <label className="required">
                  Email
                </label>
                <input className="form-input" {...register("email", { required: true, maxLength: 20 })} />
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
                <label className="required">
                  Password
                </label>
                <input className="form-input" {...register("password", { required: true })} />
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
