import React, { useState } from "react";
import "./Login.css";
import { auth } from '../../index';


const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const login = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .catch(console.error("can't sign in"));
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .catch(console.error("can't sign in"));
  };

  return (
    <div className="login__container">
      <div className="login__input">
        <input
          className="login__input__email p-1"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="login__input__password p-1"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="login__login__btn p-2" onClick={login}>
          Login
        </button>
        <span className="login__create__account">
          <span>Don't have an account?</span>

          <span>Click the button below to create an account.</span>
        </span>
        <button
          type="submit"
          className="login__register__btn p-2"
          onClick={register}
        >
          Create an Account
        </button>
      </div>
    </div>
  );
};

export default Login;
