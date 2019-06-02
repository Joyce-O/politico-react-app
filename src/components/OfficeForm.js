import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';

import { Form, Input } from 'semantic-ui-react';
import Button from '../utilities/Button';
import ErrorMesssage from './ErrorMessage';
import { NewOfficeSchema } from '../utilities/validations';

const OfficeForm = ({
  authError, submit, loading, signedUp,
}) => (
  <div>
    <Formik
      initialValues={{
        name: '',
        ageLimit: '',
        basicQual: '',
        type: '',
      }}
      validationSchema={NewOfficeSchema}
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
              placeholderTextColor: 'grey',
              padding: '35px',
              boxShadow: '2px 2px 12px 2px rgba(.2, .2, .2, .2)'
            }}
          >
            <div>
              <h4 className="fill-up">Please fill in this form to create an office</h4>
              <ErrorMesssage
                hidden={!authError && formError.length === 0}
                error={authError || formError}
              />
              <Form onSubmit={handleSubmit} size="huge">
                <Form.Field
                  className="formInput"
                >
                  <Input
                    required
                    onBlur={handleBlur}
                    value={values.name}
                    name="name"
                    onChange={handleChange}
                    type="text"
                    style={{
                      placeholderTextColor: 'blue',
                    }}
                    placeholder="Office name"
                  />
                </Form.Field>
                <Form.Field className="formInput">
                  <Input
                    required
                    onBlur={handleBlur}
                    value={values.ageLimit}
                    name="ageLimit"
                    onChange={handleChange}
                    style={{
                      placeholderTextColor: 'red',
                    }}
                    type="text"
                    control="input"
                    placeholder="Age limit (min-max)"
                  />
                </Form.Field>
                <Form.Field className="formInput">
                  <select
                    name="basicQual"
                    value={values.basicQual}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    style={{ height: '50px' }}
                  >
                    <option value="" label="Select mininum qualification" />
                    <option value="school certificate level" label="school certificate level" />
                    <option value="undergraduate level" label="undergraduate level" />
                    <option value="postgraduate level" label="postgraduate level" />
                  </select>
                </Form.Field>
                <Form.Field className="formInput">
                  <select
                    name="type"
                    value={values.type}
                    onChange={handleChange}
                    style={{ height: '50px' }}
                    onBlur={handleBlur}
                  >
                    <option value="" label="Select office type" />
                    <option value="federal" label="federal" />
                    <option value="legislative" label="legislative" />
                    <option value="state" label="state" />
                    <option value="local government" label="local government" />
                  </select>
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

OfficeForm.propTypes = {
  submit: PropTypes.func,
  signedUp: PropTypes.bool,
  loading: PropTypes.bool,
  authError: PropTypes.oneOf(['null', null, PropTypes.object]).isRequired,
};

const defaultFunc = input => input;

OfficeForm.defaultProps = {
  signedUp: false,
  loading: false,
  submit: defaultFunc
};


export default OfficeForm;
