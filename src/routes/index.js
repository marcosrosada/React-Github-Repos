import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Main from '../pages/Main';
import SignIn from '../pages/Auth/SignIn';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/signin" component={SignIn} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
