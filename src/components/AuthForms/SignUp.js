import React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import Button from "../Button/Button";
import Loader from "../Loader/Loader";
import "./AuthForms.css";

const SignUp = ({ onSwitchForm, onAuth }) => {
  const isLoading = useSelector((state) => state.user.userLoading);

  const {
    register,
    handleSubmit,
    // reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
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
            <h4 className="form_title">Sign up</h4>

            <label className="form_item">
              <p className="form_label">First Name</p>
              <input
                className="form_input"
                {...register("firstName", { required: "First name is required" })}
                placeholder="Your first name"
              />
              <p className="validation_msg">{errors.firstName?.message}</p>
            </label>

            <label className="form_item">
              <p className="form_label">Last Name</p>
              <input
                className="form_input"
                {...register("lastName", { required: "Last name is required" })}
                placeholder="Your last name"
              />
              <p className="validation_msg">{errors.lastName?.message}</p>
            </label>

            <label className="form_item">
              <p className="form_label">Email</p>
              <input
                className="form_input"
                type="email"
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
                placeholder="New password"
              />
              <p className="validation_msg">{errors.password?.message}</p>
            </label>

            <div className="switch_form">
              <p className="switch_form_msg" onClick={onSwitchForm}>
                Already have an account?
              </p>
            </div>

            <Button className="sign_button" type="submit" value="Submit">
              Register
            </Button>
          </form>
        )}
      </div>
    </>
  );
};

export default SignUp;
