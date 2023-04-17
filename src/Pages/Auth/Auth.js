import React, { useState } from "react";
import SignIn from "../../components/AuthForms/SignIn";
import SignUp from "../../components/AuthForms/SignUp";
import "./Auth.css";

const Auth = () => {
  // const [user, setUser] = useState();
  const [chooseForm, setchooseForm] = useState(true);
  // const [errorMessage, setErrorMessage] = useState("");

  const handleSwitchForm = () => {
    setchooseForm(!chooseForm);
  };

  return (
    <>
      {chooseForm ? (
        <SignIn
          // onAuth={handleSignIn}
          onSwitchForm={handleSwitchForm}
          // message={errorMessage}
        />
      ) : (
        <SignUp
          // onAuth={handleSignUp}
          onSwitchForm={handleSwitchForm}
        />
      )}
    </>
  );
};

export default Auth;
