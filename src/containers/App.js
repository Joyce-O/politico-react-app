import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignupComp from '../components/Signup';
import Home from '../components/Home';
import AdminComp from '../components/AdminComp';
import PartyComp from '../components/Party';
import OfficeComp from '../components/Office';
import NotFound from '../components/NotFound';

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/signup" exact component={SignupComp} />
      <Route path="/admin" exact component={AdminComp} />
      <Route path="/party" exact component={PartyComp} />
      <Route path="/office" exact component={OfficeComp} />
      <Route path="/notfound" component={NotFound} />
    </Switch>
  </Router>
);

export default App;
