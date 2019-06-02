import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import SignupForm from '../components/SignupForm';
import { fetchSignup } from '../actions/auth';

const Signup = (props) => {
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
        <SignupForm
          authError={error}
          signedUp={isAuthenticated}
          loading={loading}
          submit={submitHandler}
        />
      </div>
    </div>
  ) : (
    <Redirect to="/admin" />
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

Signup.propTypes = {
  loading: PropTypes.bool.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  error: PropTypes.oneOf(['null', null, PropTypes.object]).isRequired,
  onSignup: PropTypes.func,
  token: PropTypes.bool.isRequired
};

const defaultFunc = input => input;

Signup.defaultProps = {
  onSignup: defaultFunc,
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
