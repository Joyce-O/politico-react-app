import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignupComp from '../components/Signup';
import Home from '../components/Home';
import AdminComp from '../components/admin';

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/signup" exact component={SignupComp} />
      <Route path="/admin" exact component={AdminComp} />
      {/* <Route path="/profile" exact component={Profile} />
      <Route path="/candidate" exact component={Candidates} />
      <Route path="/party" exact component={Party} />
      <Route path="/result" exact component={Result} />
      <Route path="/office" exact component={Office} />
      <Route path="/forgotPassword" exact component={Forgotpassword} /> */}
      {/* <Route component={Home} /> */}
    </Switch>
  </Router>
);

export default App;
