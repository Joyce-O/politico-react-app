import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Forgotpassword from './ForgotPassword';
import Home from '../components/Home';
import Profile from '../components/Profile';
import Candidates from '../components/Candidates';
import Vote from '../components/Vote';
import Result from '../components/Result';
import Office from '../components/Office';
import Login from '../components/Login';

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/profile" exact component={Profile} />
      <Route path="/candidates" exact component={Candidates} />
      <Route path="/login" exact component={Login} />
      <Route path="/vote" exact component={Vote} />
      <Route path="/result" exact component={Result} />
      <Route path="/office" exact component={Office} />
      <Route path="/forgotPassword" exact component={Forgotpassword} />
      {/* <Route component={Home} /> */}
    </Switch>
  </Router>
);

export default App;
