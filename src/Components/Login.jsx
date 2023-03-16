import { createContext, useContext } from "react";
import { LogInContext } from "./LoginProvider";
import { useGoogleLogin } from "@react-oauth/google";

const Login = () => {
  const context = useContext(LogInContext);

  function onSuccess(tokenResponse) {
    console.log(tokenResponse);
    context.setAuth(tokenResponse.access_token);
  }

  const login = useGoogleLogin({
    onSuccess,
  });

  return (
    <div className="login">
      <h1>Rick and Morty App</h1>
      <button className="login-button" onClick={login}>
        Sign in with Google
      </button>
    </div>
  );
};
export default Login;
