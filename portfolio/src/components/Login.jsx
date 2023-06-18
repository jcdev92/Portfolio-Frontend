import React from "react";
import { useNavigate } from "react-router-dom";

export const Login = ({ setUser }) => {
  const navigate = useNavigate();
  const handleLogin = () => {
    setUser({ id: 1, username: "John Doe" });
    navigate("/dashboard");
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleLogin}>Login</button>
      <h1>Log Out</h1>
      <button onClick={handleLogout}>Log Out</button>
    </div>
  );
};
