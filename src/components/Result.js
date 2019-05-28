import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import ResultContainer from '../containers/ResultContainer';
import Footer from './Footer';

const Result = ({ authError, submit, loading, signedUp }) => (
  <div className="container">
    <Header />
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
          Result
        </h2>
        <div>
          <ResultContainer />
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

Result.propTypes = {
  submit: PropTypes.func,
  signedUp: PropTypes.bool,
  loading: PropTypes.bool,
  authError: PropTypes.oneOf(['null', null, PropTypes.object]).isRequired,
};

const defaultFunc = input => input;

Result.defaultProps = {
  signedUp: false,
  loading: false,
  submit: defaultFunc,
};

export default Result;
