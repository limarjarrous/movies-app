import { SIGNIN, SIGNUP, LOGOUT, ERROR, USER_LOADING, ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from "./actionTypes";
import { auth, db } from "../../firebase";
import { signOut } from "firebase/auth";
import { ref, set, onValue } from "firebase/database";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const handleSignIn = (data) => {
  return {
    type: SIGNIN,
    payload: data,
  };
};
const handleSignUp = (data) => {
  return {
    type: SIGNUP,
    payload: data,
  };
};
const handleLogout = () => {
  return {
    type: LOGOUT,
  };
};
const handleError = (message) => {
  return {
    type: ERROR,
    payload: { message: message },
  };
};
const handleLoading = () => {
  return {
    type: USER_LOADING,
  };
};
const handleAddToFavorites = (data) => {
  return {
    type: ADD_TO_FAVORITES,
    payload: data,
  };
};
const handleRemoveFromFavorites = (id) => {
  return {
    type: REMOVE_FROM_FAVORITES,
    payload: id,
  };
};

const userRef = (id) => ref(db, `/users/${id}`);

export const signUpAction = (payload) => {
  const { firstName, lastName, email, password } = payload;
  return async (dispatch) => {
    dispatch(handleLoading());
    await createUserWithEmailAndPassword(auth, email, password)
      .then((credentials) => {
        const user = {
          firstName: firstName,
          lastName: lastName,
          email: email,
          _id: credentials.user.uid,
        };
        set(userRef(credentials.user.uid), user);
        dispatch(handleSignUp(user));
      })
      .catch((error) => {
        console.log(error.message);
        dispatch(handleError(error.code));
      });
  };
};

export const signInAction = (payload) => {
  const { email, password } = payload;
  return async (dispatch) => {
    dispatch(handleLoading());
    await signInWithEmailAndPassword(auth, email, password)
      .then((credentials) => {
        // console.log(credentials);
        onValue(userRef(credentials.user.uid), (snapshot) => {
          const user = snapshot.val();
          dispatch(handleSignIn(user));
        });
      })
      .catch((error) => {
        console.log(error.code);
        dispatch(handleError(error.code));
      });
  };
};

export const logout = () => {
  return async (dispatch) => {
    signOut(auth);
    dispatch(handleLogout());
  };
};

export const addToFavorites = (data) => {
  return async (dispatch) => {
    dispatch(handleAddToFavorites(data));
  };
};

export const removeFromFavorites = (id) => {
  return async (dispatch) => {
    dispatch(handleRemoveFromFavorites(id));
  };
};
