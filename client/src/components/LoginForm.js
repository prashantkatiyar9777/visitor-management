import React, { useState } from "react";

const LoginForm = ({ onLogin, role }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      (role === "admin" && username === "admin" && password === "password") ||
      (role === "security" &&
        username === "security" &&
        password === "password")
    ) {
      onLogin(role);
    } else {
      alert("Incorrect username or password");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <input
        type="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
