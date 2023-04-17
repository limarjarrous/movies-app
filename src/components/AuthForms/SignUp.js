import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signUpAction } from "../../redux/actions/userActions";
import Button from "../Button/Button";
import "./AuthForms.css";

const SignUp = ({ onSwitchForm }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  const handleNavigateToHome = () => {
    if (localStorage.getItem("authenticated")) {
      navigate("/");
    }
  };

  return (
    <div className="auth_container">
      <form
        className="auth_form"
        onSubmit={handleSubmit((data) => {
          dispatch(signUpAction(data));
          handleNavigateToHome();
        })}
      >
        <h4 className="form_title">Sign up</h4>

        <div className="form_row">
          <label className="form_item">
            <p className="form_label">First Name</p>
            <input
              className="form_input"
              {...register("firstName", { required: "First name is required" })}
            />
            <p className="validation_msg">{errors.firstName?.message}</p>
          </label>
          <label className="form_item">
            <p className="form_label">Last Name</p>
            <input
              className="form_input"
              {...register("lastName", { required: "Last name is required" })}
            />
            <p className="validation_msg">{errors.lastName?.message}</p>
          </label>
        </div>

        <label className="form_item">
          <p className="form_label">Email</p>
          <input
            className="form_input"
            type="email"
            {...register("email", { required: "Email is required" })}
          />
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
          <p className="switch_form_msg" onClick={onSwitchForm}>
            Already have an account?
          </p>
        </div>

        {/* <button className="sign_button" type="submit" value="Submit">
          Register
        </button> */}
        <Button className="sign_button" type="submit" value="Submit">
          Register
        </Button>
      </form>
    </div>
  );
};

export default SignUp;
