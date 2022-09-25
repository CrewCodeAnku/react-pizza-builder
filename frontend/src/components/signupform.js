import React from "react";
//import useForm from './form';
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";

const SignUpForm = (props) => {
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      validationSchema={Yup.object({
        name: Yup.string().required("Name is required"),
        email: Yup.string()
          .email("Invalid email address")
          .required("Email address is required"),
        password: Yup.string()
          .required("Password is required")
          .matches(
            /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
            "Password must contain at least 8 characters, one uppercase, one number and one special case character"
          ),
      })}
      onSubmit={(values, { setSubmitting }) => {
        const request = {
          name: values.name,
          email: values.email,
          password: values.password,
        };
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
        isValidating,
      }) => (
        <Form onSubmit={handleSubmit} className={props.classes.formsignup}>
          <div className="rounded box-shadow p-5 h-100 justify-content-center align-items-center app-bg-color">
            <div className="text-center">
              <h1 className="h3 mb-3 font-weight-normal heading-text">
                Sign Up
              </h1>
            </div>
            <div className="form-group">
              <label htmlFor="email" className="text-uppercase text-white">
                Name
              </label>
              <input
                value={values.name}
                onBlur={handleBlur}
                onChange={handleChange}
                name="name"
                type="text"
                id="name"
                className="form-control"
                placeholder="Name"
              />
              {errors.name && touched.name && (
                <p className="invalid-feedback font-weight-bold">
                  {errors.name}
                </p>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="email" className="text-uppercase text-white">
                Email Address
              </label>
              <input
                value={values.email}
                onBlur={handleBlur}
                onChange={handleChange}
                name="email"
                type="email"
                id="email"
                className="form-control"
                placeholder="Email address"
              />
              {errors.email && touched.email && (
                <p className="invalid-feedback font-weight-bold">
                  {errors.email}
                </p>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="password" className="text-uppercase text-white">
                Password
              </label>
              <input
                value={values.password}
                onBlur={handleBlur}
                onChange={handleChange}
                name="password"
                type="password"
                id="password"
                className="form-control"
                placeholder="Password"
              />
              {errors.password && touched.password && (
                <p className="invalid-feedback font-weight-bold">
                  {errors.password}
                </p>
              )}
            </div>
            <div className="form-check">
              <label className="form-check-label">
                <Link className="app-btn-link" to="/signin">
                  Already have an account?
                </Link>
              </label>
              <button
                disabled={
                  props.loading || isSubmitting || isValidating ? true : false
                }
                type="submit"
                className="btn app-btn float-right"
              >
                Sign Up{" "}
                {props.loading ? (
                  <i className="fa fa-circle-o-notch fa-spin ml-3"></i>
                ) : null}
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SignUpForm;
