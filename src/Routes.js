import React from "react";
import { Route, Switch } from "react-router-dom";

import Homepage from "./pages/Homepage";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Homepage} />
      <Route path="/about/" component={About} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
