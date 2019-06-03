import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';

import { Form, Input } from 'semantic-ui-react';
import Button from '../utilities/Button';
import ErrorMesssage from './ErrorMessage';
import { NewPartySchema } from '../utilities/validations';

const PartyForm = ({
  authError, submit, loading, signedUp,
}) => (
  <div>
    <Formik
      initialValues={{
        name: '',
        acronym: '',
        hqAddress: '',
        email: '',
        phone: '',
      }}
      validationSchema={NewPartySchema}
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
              background: 'black',
              height: 'auto',
              width: '40%',
              margin: '-100px 0 0 -150px',
              top: '40%',
              borderRadius: '5px',
              left: '40%',
              padding: '35px',
              boxShadow: '2px 2px 12px 2px rgba(.2, .2, .2, .2)'
            }}
          >
            <div>
              <h4 className="fill-up">Please fill in this form to create an party.</h4>
              <ErrorMesssage
                hidden={!authError && formError.length === 0}
                error={authError || formError}
              />
              <Form onSubmit={handleSubmit} size="huge">
                <Form.Group widths="equal">
                  <Form.Field className="formInput">
                    <Input
                      required
                      onBlur={handleBlur}
                      value={values.name}
                      name="name"
                      onChange={handleChange}
                      type="text"
                      placeholder="Party name"
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
                      placeholder="acronym"
                    />
                  </Form.Field>
                </Form.Group>
                <Form.Group widths="equal">
                  <Form.Field className="formInput">
                    <Input
                      required
                      onBlur={handleBlur}
                      value={values.hqAddress}
                      name="hqAddress"
                      onChange={handleChange}
                      type="text"
                      control="input"
                      placeholder="Headquarters"
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
                </Form.Group>
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

PartyForm.propTypes = {
  submit: PropTypes.func,
  signedUp: PropTypes.bool,
  loading: PropTypes.bool,
  authError: PropTypes.oneOf(['null', null, PropTypes.object]).isRequired,
};

const defaultFunc = input => input;

PartyForm.defaultProps = {
  signedUp: false,
  loading: false,
  submit: defaultFunc
};


export default PartyForm;
