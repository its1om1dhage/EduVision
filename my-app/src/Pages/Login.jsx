import React, { useState } from "react";
import "../Styles/Login.css";

const Login = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleAuth = (e) => {
    e.preventDefault();
    setError("");
    if (!email || !password) {
      setError("Please enter email and password.");
      return;
    }
    // Demo: always "logs in"
    if (onLogin) onLogin();
  };

  return (
    <div className="login-bg">
      <div className="login-bg-blobs">
      <div className="login-blob login-blob1"></div>
      <div className="login-blob login-blob2"></div>
      <div className="login-blob login-blob3"></div>
  </div>
      <form className="glass-login-form" onSubmit={handleAuth}>
        <h2>{isLogin ? "Login" : "Sign Up"}</h2>
        <input
          type="email"
          placeholder="Email"
          autoComplete="username"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          autoComplete={isLogin ? "current-password" : "new-password"}
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        {error && <div className="login-error">{error}</div>}
        <button type="submit">{isLogin ? "Login" : "Sign Up"}</button>
        <p>
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <span className="login-toggle" onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Sign Up" : "Login"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;