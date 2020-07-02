import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Ticketform from "./Components/Ticketform";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Signup} />
        <Route path="/login" exact component={Login} />
        <Route path="/ticket" exact component={Ticketform} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
