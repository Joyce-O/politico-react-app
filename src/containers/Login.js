import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import LoginForm from '../components/LoginForm';
import { fetchLogin } from '../actions/auth';

const Login = (props) => {
  const {
    loading,
    error,
    isAuthenticated,
    onSignup,
    token
  } = props;

  const submitHandler = ({
    email,
    password,
  }) => {
    onSignup(email, password,);
  };

  return !token ? (
    <div>
      <div>
        <LoginForm
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
  loading: state.loginReducer.loading,
  error: state.loginReducer.error,
  isAuthenticated: state.loginReducer.isAuthenticated,
  token: state.loginReducer.token
});

const mapDispatchToProps = dispatch => ({
  onSignup: (email, password,) => dispatch(fetchLogin(email, password,)),
});

Login.propTypes = {
  loading: PropTypes.bool.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  error: PropTypes.oneOf(['null', null, PropTypes.object]).isRequired,
  onSignup: PropTypes.func,
  token: PropTypes.bool.isRequired
};

const defaultFunc = input => input;

Login.defaultProps = {
  onSignup: defaultFunc,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
