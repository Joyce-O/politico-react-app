import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import ApplyCandidate from '../components/ApplyCandidate';
import { postCandidate } from '../actions/candidate';

const Signup = (props) => {
  const {
    loading,
    error,
    isAuthenticated,
    onSignup,
    candidate
  } = props;

  const submitHandler = ({
    age,
    qualification,
    office,
    party,
  }) => {
    onSignup(age,
      qualification,
      office,
      party,);
  };

  return !candidate ? (
    <div>
      <div>
        <ApplyCandidate
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
  loading: state.candReducer.loading,
  error: state.candReducer.error,
  isAuthenticated: state.candReducer.isAuthenticated,
  candidate: state.candReducer.candidate
});

const mapDispatchToProps = dispatch => ({
  onSignup: (age,
    qualification,
    office,
    party,) => dispatch(postCandidate(age,
    qualification,
    office,
    party,)),
});

Signup.propTypes = {
  loading: PropTypes.bool.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  error: PropTypes.oneOf(['null', null, PropTypes.object]).isRequired,
  onSignup: PropTypes.func,
  candidate: PropTypes.bool.isRequired
};

const defaultFunc = input => input;

Signup.defaultProps = {
  onSignup: defaultFunc,
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
