import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SignIn from "../../components/AuthForms/SignIn";
import SignUp from "../../components/AuthForms/SignUp";
import { signInAction } from "../../redux/actions/userActions";
import { signUpAction } from "../../redux/actions/userActions";
import "./Auth.css";

const Auth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.user);
  const [chooseForm, setchooseForm] = useState(true);

  const handleSwitchForm = () => {
    setchooseForm(!chooseForm);
  };

  const handleSignIn = (data) => {
    dispatch(signInAction(data));
    setTimeout(() => {
      if (user._id !== null) navigate(-1);
    }, 1000);
  };

  const handleSignUp = (data) => {
    dispatch(signUpAction(data));
    setTimeout(() => {
      if (user._id !== null) navigate(-1);
    }, 1000);
  };

  return (
    <>
      {chooseForm ? (
        <SignIn onAuth={handleSignIn} onSwitchForm={handleSwitchForm} />
      ) : (
        <SignUp onAuth={handleSignUp} onSwitchForm={handleSwitchForm} />
      )}
    </>
  );
};

export default Auth;
