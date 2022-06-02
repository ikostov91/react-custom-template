import React from "react";
import { isUserAuthenticated } from "../../helpers/auth-utils";
import { Navigate } from "react-router-dom";
import Logo from "../../components/logo";
import { useForm } from "react-hook-form";

const Login = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => alert(JSON.stringify(data));

  if (isUserAuthenticated()) {
    return <Navigate to="/" />
  }

  return (
    <div className="auth-wrapper">
      <div className="inner-wrapper">
          <div className="text-center mb-3">
            <Logo />
          </div>
          <div className="login-form">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-2">
                <div>Email</div>
                <input {...register("email", { required: true, maxLength: 20 })} />
                {errors.email && <div>This field is required</div>}
              </div>
              <div className="mb-3">
                <div>Password</div>
                <input {...register("password", { required: true })} />
                {errors.password && <div>This field is required</div>} 
              </div>       
              <div>
                <input type="submit" />
              </div>
            </form>
          </div>
      </div>
    </div>
  );
};

export default Login;
