import React, { useState } from "react";
import AppRouter from "./components/AppRouter";
import { auth } from "./firebase";

const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  console.log(auth.currentUser);

  return (
    <>
      <AppRouter isLogin={isLogin} />
      <footer>&copy; {new Date().getFullYear()} Twitter</footer>
    </>
  );
};

export default App;
