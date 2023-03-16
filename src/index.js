import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { LoginProvider } from './Components/LoginProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  
  <React.StrictMode>
 <GoogleOAuthProvider  clientId="685806397497-7jf2c7ufqn4jkm6fdfij9vv33lf0ahqi.apps.googleusercontent.com">
   <LoginProvider>
    <App />
   </LoginProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
