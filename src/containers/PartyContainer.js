import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import Party from '../components/Party';
import { fetchSignup } from '../actions/auth';

const PartyContainer = (props) => {
  const {
    loading,
    error,
    isAuthenticated,
    onSignup,
    token
  } = props;

  const submitHandler = ({
    firstname,
    lastname,
    email,
    phone,
    address,
    password,
  }) => {
    onSignup(firstname,
      lastname,
      email,
      phone,
      address,
      password,);
  };

  return !token ? (
    <div>
      <div>
        <Party
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
  token: state.signupReducer.token
});

const mapDispatchToProps = dispatch => ({
  onSignup: (firstname,
    lastname,
    email,
    phone,
    address,
    password,) => dispatch(fetchSignup(firstname,
    lastname,
    email,
    phone,
    address,
    password,)),
});

PartyContainer.propTypes = {
  loading: PropTypes.bool.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  error: PropTypes.oneOf(['null', null, PropTypes.object]).isRequired,
  onSignup: PropTypes.func,
  token: PropTypes.bool.isRequired
};

const defaultFunc = input => input;

PartyContainer.defaultProps = {
  onSignup: defaultFunc,
};

export default connect(mapStateToProps, mapDispatchToProps)(PartyContainer);
