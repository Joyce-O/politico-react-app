import React from 'react';
import PropTypes from 'prop-types';
import LoginContainer from '../containers/LoginContainer';
import Footer from './Footer';

const Login = ({
  authError, submit, loading, signedUp
}) => (
  <div className="container">
    <header className="head-login">
      <div>
        <ul>
          <li id="head-text">
            <a href="/login" dangerouslySetInnerHTML={{ __html: '&Popf;&oopf;&lopf;&iopf;&topf;&iopf;&copf;O' }} />

          </li>
        </ul>
      </div>
      <div>
        <ul className="head-login-ul">
          <li>
            <a id="signup-btn" href="login.html">Login</a>
          </li>
        </ul>
      </div>
    </header>
    <section className="home-section home-section-home">
      <center>
        <div className="countdown-div countdown-di-login">
          <ul id="ul">
            <li className="ema-number1">
              {/* <p>2019 elections begin in: </p> */}
            </li>
          </ul>
        </div>
      </center>
      {' '}
      <div id="action-word">
        <h2>
          Welcome to
          <span>Politico, </span>
          vote at the click of a button!
        </h2>
        <div>
          <LoginContainer />
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

Login.propTypes = {
  submit: PropTypes.func,
  signedUp: PropTypes.bool,
  loading: PropTypes.bool,
  authError: PropTypes.oneOf(['null', null, PropTypes.object]).isRequired,
};

const defaultFunc = input => input;

Login.defaultProps = {
  signedUp: false,
  loading: false,
  submit: defaultFunc,
};

export default Login;
