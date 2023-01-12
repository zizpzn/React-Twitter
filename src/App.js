import React, { useEffect, useState } from "react";
import AppRouter from "./components/AppRouter";
import { auth } from "./firebase";

const App = () => {
  const [init, setInit] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      // console.log("User Info");
      // console.log(user);

      if (user) {
        setIsLogin(true);
      } else {
        setIsLogin(false);
      }

      setInit(true);
    });
  }, []);
  // console.log(auth.currentUser);

  // setInterval(() => {
  //   console.log(auth.currentUser);
  // }, 3000);

  return (
    <>
      {init ? <AppRouter isLogin={isLogin} /> : "Loading..."}
      <footer>&copy; {new Date().getFullYear()} Twitter</footer>
    </>
  );
};

export default App;
