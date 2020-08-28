import React, { useState } from "react";
import "./Login.css";
import { useHistory } from "react-router-dom";
import { auth } from "../../index";

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let loginError;

  const login = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => history.push("/"))
      .catch((e) => loginError(e.message));
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => history.push("/"))
      .catch((e) => console.error(e.message));
  };

  return (
    <div className="login__container">
      <form className="login__input">
        <h3 className="center">Sign in</h3>
        <input
          className="login__input__email p-1"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="login__input__password p-1"
          value={password}
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        {loginError}
        <button onClick={login} type="submit" className="login__login__btn p-2">
          Login
        </button>
        <span className="login__create__account">
          <span>Don't have an account?</span>
          <span>Click the button below to create an account.</span>
        </span>
        <button
          onClick={register}
          type="submit"
          className="login__register__btn p-2"
        >
          Create an Account
        </button>
      </form>
    </div>
  );
};

export default Login;
