import React from 'react';
import {Link} from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

const SignInForm = (props) => {

      return (
        <Formik
        initialValues = {{
            email: '',
            password:''
        }}
        validationSchema = {Yup.object({
              email: Yup.string()
                  .email('Invalid email address')
                  .required('Email address is required'),
              password: Yup.string().required('Password is required')
            })}
            onSubmit={(values, { setSubmitting }) => {
              const request = {
                email: values.email,
                password: values.password
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
                className = {props.classes.formsignin}
                >
                      <div style={{backgroundColor:"#c38358"}} className="rounded box-shadow p-5 h-100 justify-content-center align-items-center">
                          <div className="text-center">
                              <h4  className="h3 mb-3 font-weight-normal mt-2 heading-text">Sign In</h4>
                          </div>
                          <div className="form-group">
                              <label htmlFor="exampleInputEmail1" className="text-uppercase text-white">Email</label>
                              <input value={values.email} onBlur={handleBlur}  onChange={handleChange} name="email" type="email" id="email" className="form-control" placeholder="Enter email"/>
                              {errors.email && touched.email && <p className="invalid-feedback font-weight-bold">{errors.email}</p>}
                          </div>
                          <div className="form-group">
                               <label htmlFor="exampleInputPassword1" className="text-uppercase text-white">Password</label>
                                <input value={values.password} onBlur={handleBlur} onChange={handleChange} type="password" id="password" className="form-control" placeholder="Enter Password"/>
                               {errors.password && touched.password && <p className="invalid-feedback font-weight-bold">{errors.password}</p>}
                          </div>
                          <div className="form-check">
                              <label className="form-check-label">
                                <Link className="app-btn-link" to="/forgetpass">Forgot password?</Link>
                              </label>
                              <button disabled={props.loading || isSubmitting || isValidating?true:false} type="submit" className="btn app-btn float-right">Sign In {props.loading?(<i className="fa fa-circle-o-notch fa-spin ml-3"></i>):null}</button>
                          </div>
                      </div>
                </Form>
            )}
        </Formik>
      );
}

export default SignInForm;

