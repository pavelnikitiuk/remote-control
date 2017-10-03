import React from 'react';
import { Switch, Route } from 'react-router';

import Dashboard from './Dashboard';

const Router = () => (
  <div className="content">
    <Switch>
      <Route exact path="/" component={Dashboard} />
    </Switch>
  </div>
);

export default Router;
