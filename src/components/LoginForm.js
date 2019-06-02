import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';

import { Form, Input } from 'semantic-ui-react';
import Button from '../utilities/Button';
import ErrorMsg from '../utilities/ErrorMsg';
import { LoginSchema } from '../utilities/validations';

const LoginForm = ({
  authError, submit, loading, loggedIn,
}) => (
  <div>
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={LoginSchema}
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
              top: '50%',
              borderRadius: '5px',
              left: '40%',
              padding: '35px',
              boxShadow: '2px 2px 12px 2px rgba(.2, .2, .2, .2)'
            }}
          >
            <div>
              <h4 className="fill-up">Please fill in this form to create an account.</h4>
              <ErrorMsg
                hidden={!authError && formError.length === 0}
                error={authError || formError}
              />
              <Form onSubmit={handleSubmit} size="huge">
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
                    value={values.password}
                    name="password"
                    onChange={handleChange}
                    type="password"
                    control="input"
                    placeholder="Password"
                  />
                </Form.Field>
                <Form.Field>
                  <Button loading={loading} disabled={loading} type="blueButton">
                    {loggedIn ? 'Login successful' : 'Login'}
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

LoginForm.propTypes = {
  submit: PropTypes.func,
  loggedIn: PropTypes.bool,
  loading: PropTypes.bool,
  authError: PropTypes.oneOf(['null', null, PropTypes.object]).isRequired,
};

const defaultFunc = input => input;

LoginForm.defaultProps = {
  loggedIn: false,
  loading: false,
  submit: defaultFunc
};


export default LoginForm;
