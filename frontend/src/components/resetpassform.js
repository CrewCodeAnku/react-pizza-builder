import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";

const ResetPassForm = (props) => {
  return (
    <Formik
      initialValues={{
        password: "",
        confirmpassword: "",
      }}
      validationSchema={Yup.object({
        password: Yup.string()
          .required("Password is required")
          .matches(
            /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
            "Password must contain at least 8 characters, one uppercase, one number and one special case character"
          ),
        confirmpassword: Yup.string()
          .when("password", {
            is: (val) => (val && val.length > 0 ? true : false),
            then: Yup.string().oneOf(
              [Yup.ref("password")],
              "Password doesn't match"
            ),
          })
          .required("Confirm your password"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        const request = {
          password: values.password,
          confirmpassword: values.confirmpassword,
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
        <Form onSubmit={handleSubmit} className={props.classes.formreset}>
          <div className="bg-white rounded box-shadow p-5 h-100 justify-content-center align-items-center app-bg-color">
            <div className="form-group">
              <label htmlFor="exampleInputEmail1" className="text-uppercase">
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
                placeholder="Enter password"
              />
              {errors.password && touched.password && (
                <p className="text-white">{errors.password}</p>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1" className="text-uppercase">
                Confirm Password
              </label>
              <input
                value={values.confirmpassword}
                onBlur={handleBlur}
                onChange={handleChange}
                name="confirmpassword"
                type="password"
                id="confirmpassword"
                className="form-control"
                placeholder="Confirm your password"
              />
              {errors.confirmpassword && touched.confirmpassword && (
                <p className="text-white">{errors.confirmpassword}</p>
              )}
            </div>
            <div className="form-check">
              <label className="form-check-label">
                <Link className="app-btn-link" to="/signin">
                  Back to login
                </Link>
              </label>
              <button
                disabled={
                  props.loading || isSubmitting || isValidating ? true : false
                }
                type="submit"
                className="btn app-btn float-right"
              >
                Reset Password{" "}
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

export default ResetPassForm;
