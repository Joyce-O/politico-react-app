import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import ApplyParty from '../components/ApplyParty';
import { getParty } from '../actions/party';

const PartyContainer = (props) => {
  const {
    loading,
    error,
    isAuthenticated,
    onSignup,
    parties
  } = props;

  const submitHandler = ({
    name,
    acronym,
    hqAddress,
    email,
    phone,
  }) => {
    onSignup(name,
      acronym,
      hqAddress,
      email,
      phone,);
  };

  return !parties ? (
    <div>
      <div>
        <ApplyParty
          authError={error}
          signedUp={isAuthenticated}
          loading={loading}
          submit={submitHandler}
        />
      </div>
    </div>
  ) : (
    <Redirect to="/profile" />
  );
};

const mapStateToProps = state => ({
  loading: state.signupReducer.loading,
  error: state.signupReducer.error,
  isAuthenticated: state.signupReducer.isAuthenticated,
  parties: state.signupReducer.parties
});

const mapDispatchToProps = dispatch => ({
  onSignup: (name,
    acronym,
    hqAddress,
    email,
    phone,) => dispatch(getParty(name,
    acronym,
    hqAddress,
    email,
    phone,)),
});

PartyContainer.propTypes = {
  loading: PropTypes.bool.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  error: PropTypes.oneOf(['null', null, PropTypes.object]).isRequired,
  onSignup: PropTypes.func,
  parties: PropTypes.bool.isRequired
};

const defaultFunc = input => input;

PartyContainer.defaultProps = {
  onSignup: defaultFunc,
};

export default connect(mapStateToProps, mapDispatchToProps)(PartyContainer);
