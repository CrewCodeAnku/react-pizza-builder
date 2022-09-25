import React from 'react';
import {Link} from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

const ForgetPassForm = (props) => {

      return (
        <Formik
              initialValues = {{
                  email: ''
              }}
              validationSchema = {Yup.object({
                    email: Yup.string()
                        .email('Invalid email address')
                        .required('Email address is required')
                  })}
                  onSubmit={(values, { setSubmitting }) => {
                    const request = {
                      email: values.email
                    }
                    props.method(request);
                    setSubmitting(false);
                  }}
            >
                  {({
                    values,
                    errors,
                    touched,
                    handleSubmit,
                    handleChange,
                    handleBlur,
                    isSubmitting,
                    isValidating
                  }) => (
                      <Form 
                      onSubmit={handleSubmit}
                      className = {props.classes.formforget}
                    >
                          <div className="rounded box-shadow p-5 h-100 justify-content-center align-items-center app-bg-color">
                                <div className="text-center">
                                  <h1 className="h3 mb-3 font-weight-normal heading-text">Forgot Password</h1>
                                </div>
                                <div className="form-group">
                                  <label htmlFor="email" className="text-uppercase text-white">Email Address</label>
                                  <input value={values.email} onBlur={handleBlur}  onChange={handleChange} name="email" type="email" id="email" className="form-control" placeholder="Email address"/>
                                  {errors.email && touched.email && <p className="invalid-feedback font-weight-bold">{errors.email}</p>}
                                </div>
                                <div className="form-check">
                                  <label className="form-check-label">
                                      <Link className="app-btn-link" to="/signin">Back to login</Link>
                                  </label>
                                  <button disabled={props.loading || isSubmitting || isValidating?true:false} className="btn app-btn float-right" type="submit">Forgot Password{props.loading?(<i className="fa fa-circle-o-notch fa-spin ml-3"></i>):null}</button>
                                </div>
                          </div>
                    </Form>
                  )}
              </Formik>
      );
}

export default ForgetPassForm;