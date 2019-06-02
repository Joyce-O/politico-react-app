import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import OfficeForm from '../components/OfficeForm';
import { fetchOffice } from '../actions/office';

const Office = (props) => {
  const {
    loading,
    error,
    isAuthenticated,
    onSignup,
    office
  } = props;

  const submitHandler = ({
    name, ageLimit, basicQual, type,
  }) => {
    onSignup(name, ageLimit, basicQual, type,);
  };

  return !office ? (
    <div>
      <div>
        <OfficeForm
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
  loading: state.officeReducer.loading,
  error: state.officeReducer.error,
  isAuthenticated: state.officeReducer.isAuthenticated,
  office: state.officeReducer.office
});

const mapDispatchToProps = dispatch => ({
  onSignup: (name,
    ageLimit, basicQual, type,) => dispatch(fetchOffice(name, ageLimit, basicQual, type,)),
});

Office.propTypes = {
  loading: PropTypes.bool.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  error: PropTypes.oneOf(['null', null, PropTypes.object]).isRequired,
  onSignup: PropTypes.func,
  office: PropTypes.bool.isRequired
};

const defaultFunc = input => input;

Office.defaultProps = {
  onSignup: defaultFunc,
};

export default connect(mapStateToProps, mapDispatchToProps)(Office);
