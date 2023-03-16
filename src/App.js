
import { createContext, useEffect, useContext } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink, createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';
import CharacterInfo from "./Components/CharacterInfo";
import CharactersProvider from './Components/CharactersProvider';
import Login from "./Components/Login";
import { LogInContext } from "./Components/LoginProvider";
import { googleLogout } from "@react-oauth/google";
import LogOut from "./Components/LogOut";
const router = createBrowserRouter([{
  path: "/",
  element: <CharactersProvider />
},
{
  path: "/character/:id",
  element: <CharacterInfo />
},

]);

const loginRouter = createBrowserRouter([{
  path: "/",
  element: <Login />
},

]);

function App() {
  const context = useContext(LogInContext)
  return (
    <div className="App">
      <LogOut  />
      <RouterProvider  router={context.user ? router : loginRouter} />
      
    </div>
  );
}

export default App;
