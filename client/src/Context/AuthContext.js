import { createContext, useReducer } from "react";
import AuthReducer from "./Reducer";

const initialState = {
  user: {
    _id: "61a20d67285173bc348121a6",
    username: "Kamatz",
    email: "Kamatz@gmail.com",
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
