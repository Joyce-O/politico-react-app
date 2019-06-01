import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';

import { Form, Input } from 'semantic-ui-react';
import Button from '../utilities/Button';
import errorMsg from '../utilities/errorMsg';
import { newCandSchema } from '../utilities/validations';

const ApplyCandidate = ({
  authError, submit, loading, signedUp,
}) => (
  <div>
    <Formik
      initialValues={{
        age: '',
        qualification: '',
        office: '',
        email: '',
        party: '',
      }}
      validationSchema={newCandSchema}
      onSubmit={submit}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting
      }) => {
        const formError = Object.keys(errors)
          .filter(keys => keys in touched)
          .map(key => errors[key]);
        return (
          <div
            className="yellow-box"
            style={{
              position: 'absolute',
              height: 'auto',
              width: '600px',
              margin: '-100px 0 0 -150px',
              top: '30%',
              left: '40%',
              padding: '35px',
              boxShadow: '2px 2px 12px 2px rgba(.2, .2, .2, .2)'
            }}
          >
            <div>
              <h2 style={{ textAlign: 'center', padding: '1rem', color: 'black' }}> Register a party</h2>
              <errorMsg
                hidden={!authError && formError.length === 0}
                error={authError || formError}
              />
              <Form onSubmit={handleSubmit} size="huge">
                <Form.Field className="formInput">
                  <Input
                    required
                    onBlur={handleBlur}
                    value={values.age}
                    name="age"
                    onChange={handleChange}
                    type="text"
                    placeholder="Name"
                  />
                </Form.Field>
                <Form.Field className="formInput">
                  <Input
                    required
                    onBlur={handleBlur}
                    value={values.acronym}
                    name="acronym"
                    onChange={handleChange}
                    type="text"
                    control="input"
                    placeholder="Acronym"
                  />
                </Form.Field>
                <Form.Field className="formInput">
                  <Input
                    required
                    onBlur={handleBlur}
                    value={values.hqAddress}
                    name="hqAddress"
                    onChange={handleChange}
                    type="text"
                    control="input"
                    placeholder="Party address"
                  />
                </Form.Field>
                <Form.Field className="formInput">
                  <Input
                    required
                    onBlur={handleBlur}
                    value={values.email}
                    name="email"
                    onChange={handleChange}
                    type="email"
                    control="input"
                    placeholder="Email"
                  />
                </Form.Field>
                <Form.Field className="formInput">
                  <Input
                    required
                    onBlur={handleBlur}
                    value={values.phone}
                    name="phone"
                    onChange={handleChange}
                    type="phone"
                    control="input"
                    placeholder="Phone number"
                  />
                </Form.Field>
                <Form.Field>
                  <Button loading={loading} disabled={loading} type="blueButton">
                    {signedUp ? 'Party created' : 'Submit'}
                  </Button>
                </Form.Field>
              </Form>
            </div>
          </div>
        );
      }}
    </Formik>
  </div>
);

ApplyCandidate.propTypes = {
  submit: PropTypes.func,
  signedUp: PropTypes.bool,
  loading: PropTypes.bool,
  authError: PropTypes.oneOf(['null', null, PropTypes.object]).isRequired,
};

const defaultFunc = input => input;

ApplyCandidate.defaultProps = {
  signedUp: false,
  loading: false,
  submit: defaultFunc
};


export default ApplyCandidate;
