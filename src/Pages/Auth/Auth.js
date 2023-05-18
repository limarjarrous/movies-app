import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    if (user?._id !== null) {
      navigate(-1);
    }
  }, [user]);

  const handleSignIn = (data) => {
    dispatch(signInAction(data));
  };

  const handleSignUp = (data) => {
    dispatch(signUpAction(data));
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
