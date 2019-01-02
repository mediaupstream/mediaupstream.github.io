import React from "react";
import { Route, Switch } from "react-router-dom";

import Homepage from "./pages/Homepage";
import NotFound from "./pages/NotFound";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Homepage} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
