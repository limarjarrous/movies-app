import React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import Button from "../Button/Button";
import Loader from "../Loader/Loader";
import "./AuthForms.css";

const SignIn = ({ onSwitchForm, onAuth, message }) => {
  const user = useSelector((state) => state.user);
  const isLoading = useSelector((state) => state.user.userLoading);

  const {
    register,
    handleSubmit,
    // reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <>
      <div className="auth_container">
        {isLoading ? (
          <Loader />
        ) : (
          <form className="auth_form" onSubmit={handleSubmit((data) => onAuth(data))}>
            <h4 className="form_title">Sign in</h4>
            {user?.error?.message && <h6 className="auth_msg">Email and password are invalid or don't exist.</h6>}
            <label className="form_item">
              <p className="form_label">Email</p>
              <input
                className="form_input"
                {...register("email", { required: "Email is required" })}
                placeholder="Your email"
              />
              <p className="validation_msg">{errors.email?.message}</p>
            </label>

            <label className="form_item">
              <p className="form_label">Password</p>
              <input
                className="form_input"
                type="password"
                {...register("password", { required: "Password is required" })}
                placeholder="Your password"
              />
              <p className="validation_msg">{errors.password?.message}</p>
            </label>

            <div className="switch_form">
              <p className="switch_form_msg" onClick={onSwitchForm}>
                Register new account
              </p>
              <p className="switch_form_msg">Forgot your password?</p>
            </div>

            <Button className="sign_button" type="submit" value="Submit">
              Log in
            </Button>

            <div>
              <p className="error_msg">{message}</p>
            </div>
          </form>
        )}
      </div>
    </>
  );
};

export default SignIn;
