import { SIGNIN, SIGNUP, LOGOUT, ERROR, USER_LOADING, ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from "./actionTypes";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { ref, set, onValue } from "firebase/database";
import { auth, db } from "../../firebase";
import { signOut } from "firebase/auth";
import { toast } from "react-hot-toast";

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
  const toastId = toast.loading("Working on it...");
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
        toast(`Welcome ${user.firstName.toUpperCase()}!`, {
          id: toastId,
          icon: "🔥",
        });
      })
      .catch((error) => {
        console.log(error.message);
        dispatch(handleError(error.code));
        toast.error("Sorry, something went wrong!", {
          id: toastId,
        });
      });
  };
};

export const signInAction = (payload) => {
  const { email, password } = payload;
  const toastId = toast.loading("Working on it...");
  return async (dispatch) => {
    dispatch(handleLoading());
    await signInWithEmailAndPassword(auth, email, password)
      .then((credentials) => {
        // console.log(credentials);
        onValue(userRef(credentials.user.uid), (snapshot) => {
          const user = snapshot.val();
          dispatch(handleSignIn(user));
          toast(`Welcome back ${user.firstName.toUpperCase()}!`, {
            id: toastId,
            icon: "👋",
          });
        });
      })
      .catch((error) => {
        // console.log(error.code);
        dispatch(handleError(error.code));
        toast.error("Sorry, something went wrong!", {
          id: toastId,
        });
      });
  };
};

export const logout = () => {
  return async (dispatch) => {
    signOut(auth);
    dispatch(handleLogout());
    toast(`Bis bald!`, {
      icon: "🙋‍♂️",
    });
  };
};

export const addToFavorites = (data) => {
  return async (dispatch) => {
    dispatch(handleAddToFavorites(data));
    toast.success(
      <p>
        <span style={{ color: "aliceblue" }}>{data.title}</span> was added to favorites
      </p>
    );
  };
};

export const removeFromFavorites = (data) => {
  return async (dispatch) => {
    dispatch(handleRemoveFromFavorites(data.id));
    toast.success(
      <p>
        <span style={{ color: "aliceblue" }}>{data.title}</span> was removed from favorites
      </p>
    );
  };
};
