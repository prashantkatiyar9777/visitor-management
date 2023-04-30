import React, { useContext } from "react";
import AuthContext from "../AuthContext";

function Login() {
  const { logIn } = useContext(AuthContext);

  const handleLogin = () => {
    // Perform your authentication here, and call logIn() upon success
    logIn();
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
}

export default Login;
