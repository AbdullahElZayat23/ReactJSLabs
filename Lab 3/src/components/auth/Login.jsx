import React from "react";
import "./Login.css";

export default function Login({ onLoginHandler }) {
  return (
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit={onLoginHandler}>
        <label>
          <p>Username</p>
          <input type="text" name="username" />
        </label>
        <label>
          <p>Password</p>
          <input type="password" name="password" />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
