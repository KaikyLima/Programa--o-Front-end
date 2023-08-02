import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Users from './Users';
import Profile from './Profile';
import Settings from './Settings';

function RotesPage() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Users} />
        <Route path="/profile/:profileId" component={Profile} />
        <Route path="/settings" component={Settings} />
      </Switch>
    </BrowserRouter>
  );
}

export default RotesPage;