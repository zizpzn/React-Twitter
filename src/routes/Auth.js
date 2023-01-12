import { async } from "@firebase/util";
import React, { useState } from "react";
import { auth } from "../firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(true);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let data;
      if (newAccount) {
        // create account
        data = await createUserWithEmailAndPassword(auth, email, password);
      } else {
        // login
        data = await signInWithEmailAndPassword(auth, email, password);
      }
      console.log(data);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleChange = (e) => {
    const {
      target: { name, value },
    } = e;

    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const toggleAccount = () => {
    setNewAccount((prev) => !prev);
  };

  const handleClick = async (e) => {
    console.log(e.target.name);

    const {
      target: { name },
    } = e;

    let provider;
    if (name === "google") {
      provider = new GoogleAuthProvider();
    }
    const data = await signInWithPopup(auth, provider);
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={email}
          required
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          required
          onChange={handleChange}
        />
        <input type="submit" value={newAccount ? "Create account" : "Login"} />
        {error}
      </form>
      <span onClick={toggleAccount}>
        {newAccount ? "Login" : "Create account"}
      </span>
      <button name="google" onClick={handleClick}>
        Continu with Google
      </button>
    </div>
  );
};

export default Auth;
