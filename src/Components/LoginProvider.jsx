import axios from "axios";
import { createContext, useEffect, useState} from "react"
import useLocalStorage from "../hooks/useLocalStorage";

export const LogInContext = createContext({})
export  function LoginProvider  ({children}){
    const [auth, setAuth] = useLocalStorage("googleAccessKey", "");
    const [user, setUser] = useState(null);
    useEffect(
      () => {
          if (auth) {
              axios
                  .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${auth}`, {
                      headers: {
                          Authorization: `Bearer ${auth}`,
                          Accept: 'application/json'
                      }
                  })
                  .then((res) => {
                      console.log(res.data)
                      setUser(res.data);
                  })
                  .catch((err) => { 
                    console.log(err)
                    setAuth("")
                  });
          }
          else {setUser(null)}
      },
      [ auth ]
  );

  return (
    <LogInContext.Provider value={{auth, setAuth, user}}>{children}</LogInContext.Provider>
  )
}

