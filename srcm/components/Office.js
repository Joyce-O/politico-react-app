import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
// import ApplyOfficeContainerForm from './ApplyOfficeContainerForm';
import ApplyOfficeContainer from '../containers/ApplyOfficeContainer';
import Footer from './Footer';

const Office = ({ authError, submit, loading, signedUp }) => (
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
          Welcome to
          <span>Politico, </span>
          vote at the click of a button!
        </h2>
        <div>
          <ApplyOfficeContainer />
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

Office.propTypes = {
  submit: PropTypes.func,
  signedUp: PropTypes.bool,
  loading: PropTypes.bool,
  authError: PropTypes.oneOf(['null', null, PropTypes.object]).isRequired,
};

const defaultFunc = input => input;

Office.defaultProps = {
  signedUp: false,
  loading: false,
  submit: defaultFunc,
};

export default Office;
