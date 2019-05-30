import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import ProfileContainer from '../containers/ProfileContainer';
import Footer from './Footer';

const Profile = ({ authError, submit, loading, signedUp }) => (
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
        <h2 id="profile-text">
          Profile
        </h2>
        <div>
          <ProfileContainer />
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

Profile.propTypes = {
  submit: PropTypes.func,
  signedUp: PropTypes.bool,
  loading: PropTypes.bool,
  authError: PropTypes.oneOf(['null', null, PropTypes.object]).isRequired,
};

const defaultFunc = input => input;

Profile.defaultProps = {
  signedUp: false,
  loading: false,
  submit: defaultFunc,
};

export default Profile;
