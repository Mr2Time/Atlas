import { createContext, useReducer } from "react";
import AuthReducer from "./Reducer";

const initialState = {
  user: {
    _id: "619887970f775702d8e36270",
    username: "Mo",
    email: "Mo@gmail.com",
    profilePicture: "",
    coverPicture: "",
    followers: [],
    following: [],
    isAdmin: false,
  },
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(initialState);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
