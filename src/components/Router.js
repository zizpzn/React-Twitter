import React, { useState } from "react";
import { HashRouter, Router, Route, Switch } from "react-router-dom";
import Home from "../routes/Home";
import Auth from "../routes/Auth";

const AppRouter = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <Router>
      <Switch>
        {isLogin ? (
          <>
            <Route exact path="/">
              <Home />
            </Route>
          </>
        ) : (
          <Route exact path="/">
            <Auth />
          </Route>
        )}
      </Switch>
    </Router>
  );
};

export default AppRouter;
