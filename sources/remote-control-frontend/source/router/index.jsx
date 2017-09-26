import React from 'react';
import { Switch, Route } from 'react-router';

import Dashboard from './Dashboard';

const Router = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Dashboard} />
    </Switch>
  </main>
);

export default Router;
