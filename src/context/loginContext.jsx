import { Children, createContext, useContext, useReducer } from "react";

let tokenStorage = localStorage.getItem("access_token");
let loginDefault = false;

if(tokenStorage !== null) {
    loginDefault = true;
}


const LoggedContext = createContext();
const LoginDispatchContext = createContext();

export function useLogin() {
    return useContext(LoggedContext);
}

export function useLoginDispatch() {
    return useContext(LoginDispatchContext);
}

const ACTIONS = {
    LOGIN: "login",
    LOGOUT: "logout" 
}

const defaultLoginState = {
    logged: loginDefault,
    token: tokenStorage
}

function reducer(state, action) {
    switch(action.type) {
        case ACTIONS.LOGIN: 
            return {
                ...state,
                logged: true,
                token: localStorage.getItem("access_token")
            }
        case ACTIONS.LOGOUT:
            return {
                ...state,
                logged: false,
                token: ""
            }
    }
}

export default function LoginProvider({ children }) {
    const [loginState, loginDispatch] = useReducer(reducer, defaultLoginState);
    
    return (
       <LoggedContext.Provider value={loginState}>
            <LoginDispatchContext.Provider value={loginDispatch}>
                { children }
            </LoginDispatchContext.Provider>
       </LoggedContext.Provider>
    );
}