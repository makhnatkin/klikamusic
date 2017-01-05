import React from "react";
import { Router, Route, IndexRoute } from "react-router";
import { history } from "./store.js";
import App from "./components/App";
import MainPage from "./components/Main/";
import NotFoundPage from "./components/NotFound";

// build the router
const router = (
  <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={MainPage} />
      <Route path="*" component={NotFoundPage} />
    </Route>
  </Router>
);

// export
export { router };
