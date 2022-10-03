//frontend/src/app.js
import { Switch, Route } from "react-router-dom";
import React from "react";
import Login from "./components/Login";
import Profile from "./components/Profile";
import MainHeader from "./components/MainHeader";
import axios from 'axios';

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken"

const App = () => {
  return (
    <div>
      <MainHeader />
      <Switch>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/profile" exact>
          <Profile />
        </Route>
      </Switch>
      <div> 테스트 페이지 입니다.</div>
    </div>
  );
};
export default App;
