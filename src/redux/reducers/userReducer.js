import {
  SIGNUP,
  LOGOUT,
  ERROR,
  SIGNIN,
  LOADING,
  ADD_TO_FAVOURITES,
  REMOVE_FROM_FAVOURITES,
} from "../actions/actionTypes";

const inititalState = {
  firstName: "",
  lastName: "",
  email: "",
  _id: "",
  favourites: [],
  error: null,
  loading: false,
};

const userReducer = (state = inititalState, action) => {
  switch (action.type) {
    case ADD_TO_FAVOURITES:
      return {
        ...state,
        loading: false,
        error: null,
        favourites: [...state.favourites, action.payload],
      };
    case REMOVE_FROM_FAVOURITES:
      const filtered = state.favourites.filter((m) => m.id !== action.payload);
      return {
        ...state,
        loading: false,
        error: null,
        favourites: filtered,
      };
    case SIGNIN:
      return {
        ...state,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        email: action.payload.email,
        _id: action.payload._id,
        loading: false,
        error: null,
      };
    case SIGNUP:
      return {
        ...state,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        email: action.payload.email,
        _id: action.payload._id,
        loading: false,
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
        loading: false,
      };
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default userReducer;
