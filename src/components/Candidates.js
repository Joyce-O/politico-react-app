import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
// import SignupForm from './SignupForm';
import CandidateContainer from '../containers/CandidateContainer';
import Footer from './Footer';

const Candidates = ({ authError, submit, loading, signedUp }) => (
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
          Candidates
        </h2>
        <div>
          <CandidateContainer />
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

Candidates.propTypes = {
  submit: PropTypes.func,
  signedUp: PropTypes.bool,
  loading: PropTypes.bool,
  authError: PropTypes.oneOf(['null', null, PropTypes.object]).isRequired,
};

const defaultFunc = input => input;

Candidates.defaultProps = {
  signedUp: false,
  loading: false,
  submit: defaultFunc,
};

export default Candidates;
