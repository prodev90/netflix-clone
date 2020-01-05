import React from "react";
import "./css/App.css";
import { Switch, Route } from "react-router-dom";
import Main from "./pages";
import Login from "./pages/Login";
import ChoosePlan from "./pages/ChoosePlan";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Main}></Route>
      <Route path="/login" component={Login}></Route>
      <Route path="/choose-plan" component={ChoosePlan}></Route>
    </Switch>
  );
}

export default App;
