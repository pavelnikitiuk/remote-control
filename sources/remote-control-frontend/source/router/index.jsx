import React from 'react';
import { Switch, Route } from 'react-router';

import Home from './Home';

const Router = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </main>
);

export default Router;
