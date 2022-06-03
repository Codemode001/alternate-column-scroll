import React from "react";
import ReactDOM from "react-dom/client";
import Test from "./test";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Test} />
    </Switch>
  </BrowserRouter>
);
