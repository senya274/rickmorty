import { googleLogout } from "@react-oauth/google";
import { useContext } from "react";
import { LogInContext } from "./LoginProvider";

function LogOut() {
  const context = useContext(LogInContext);

  async function logOut() {
    await googleLogout();
    context.setAuth("");
  }
  if (!context.auth) return null;
  console.log(context.user);
  return (
    <div className="sign-out">
      <p>Signed as {context.user?.email}</p>
      
      <button className="logout-button" onClick={logOut}>
        LogOut
      </button>
    </div>
  );
}

export default LogOut;
