import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import ApplyOffice from '../components/ApplyOffice';
import { fetchSignup } from '../actions/auth';

const ApplyOfficeContainer = (props) => {
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
        <ApplyOffice
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

ApplyOfficeContainer.propTypes = {
  loading: PropTypes.bool.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  error: PropTypes.oneOf(['null', null, PropTypes.object]).isRequired,
  onSignup: PropTypes.func,
  token: PropTypes.bool.isRequired
};

const defaultFunc = input => input;

ApplyOfficeContainer.defaultProps = {
  onSignup: defaultFunc,
};

export default connect(mapStateToProps, mapDispatchToProps)(ApplyOfficeContainer);
