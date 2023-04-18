import {
  SIGNUP,
  LOGOUT,
  ERROR,
  SIGNIN,
  USER_LOADING,
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
} from "../actions/actionTypes";

const inititalState = {
  firstName: "",
  lastName: "",
  email: "",
  _id: "",
  favorites: [],
  error: null,
  userLoading: false,
};

const userReducer = (state = inititalState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return {
        ...state,
        userLoading: false,
        error: null,
        favorites: [...state.favorites, action.payload],
      };
    case REMOVE_FROM_FAVORITES:
      const filtered = state.favorites.filter((m) => m.id !== action.payload);
      return {
        ...state,
        userLoading: false,
        error: null,
        favorites: filtered,
      };
    case SIGNIN:
      return {
        ...state,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        email: action.payload.email,
        _id: action.payload._id,
        userLoading: false,
        error: null,
      };
    case SIGNUP:
      return {
        ...state,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        email: action.payload.email,
        _id: action.payload._id,
        userLoading: false,
        error: null,
      };
    case LOGOUT:
      localStorage.removeItem("authentecated");
      return {
        ...state,
        firstName: null,
        lastName: null,
        email: null,
        _id: null,
        error: null,
        userLoading: false,
      };
    case USER_LOADING:
      return {
        ...state,
        userLoading: true,
      };
    case ERROR:
      return { ...state, userLoading: false, error: action.payload };
    default:
      return state;
  }
};

export default userReducer;
