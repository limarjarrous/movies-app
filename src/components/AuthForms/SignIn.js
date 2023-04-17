import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signInAction } from "../../redux/actions/userActions";
import Button from "../Button/Button";
// import { auth } from "../../firebase";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { signIn } from "../../features/user/userSlice";
import "./AuthForms.css";

const SignIn = ({ onSwitchForm, message }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.user);

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

  useEffect(() => {
    navigate("/");
  }, [user]);

  return (
    <div className="auth_container">
      <form
        className="auth_form"
        onSubmit={handleSubmit((data) => {
          dispatch(signInAction(data));
        })}
      >
        <h4 className="form_title">Sign in</h4>
        <h6 className="auth_msg">auth_msg</h6>
        <label className="form_item">
          <p className="form_label">Email</p>
          <input className="form_input" {...register("email", { required: "Email is required" })} />
          <p className="validation_msg">{errors.email?.message}</p>
        </label>

        <label className="form_item">
          <p className="form_label">Password</p>
          <input
            className="form_input"
            type="password"
            {...register("password", { required: "Password is required" })}
          />
          <p className="validation_msg">{errors.password?.message}</p>
        </label>

        <div className="switch_form">
          <p className="switch_form_msg">Forgot your password?</p>
          <p className="switch_form_msg" onClick={onSwitchForm}>
            Register new account
          </p>
        </div>

        <Button className="sign_button" type="submit" value="Submit">
          Log in
        </Button>

        <div>
          <p className="error_msg">{message}</p>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
