import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import PartyForm from '../components/PartyForm';
import { fetchParty } from '../actions/party';

const Party = (props) => {
  const {
    loading,
    error,
    isAuthenticated,
    onSignup,
    party
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

  return !party ? (
    <div>
      <div>
        <PartyForm
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
  loading: state.partyReducer.loading,
  error: state.partyReducer.error,
  isAuthenticated: state.partyReducer.isAuthenticated,
  party: state.partyReducer.party
});

const mapDispatchToProps = dispatch => ({
  onSignup: (name,
    acronym,
    hqAddress,
    email,
    phone,) => dispatch(fetchParty(name,
    acronym,
    hqAddress,
    email,
    phone,)),
});

Party.propTypes = {
  loading: PropTypes.bool.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  error: PropTypes.oneOf(['null', null, PropTypes.object]).isRequired,
  onSignup: PropTypes.func,
  party: PropTypes.bool.isRequired
};

const defaultFunc = input => input;

Party.defaultProps = {
  onSignup: defaultFunc,
};

export default connect(mapStateToProps, mapDispatchToProps)(Party);
