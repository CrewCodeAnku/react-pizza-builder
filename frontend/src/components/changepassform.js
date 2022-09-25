import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

const ChangePassForm = (props) => {
  return (
    <div>
      <Formik
        initialValues={{
          oldpassword: "",
          newpassword: "",
        }}
        validationSchema={Yup.object({
          oldpassword: Yup.string().required("Old Password is required"),
          newpassword: Yup.string()
            .required("New Password is required")
            .matches(
              /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
              "Password must contain at least 8 characters, one uppercase, one number and one special case character"
            ),
        })}
        onSubmit={(values, { setSubmitting }) => {
          const request = {
            oldpassword: values.oldpassword,
            newpassword: values.newpassword,
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
          <Form onSubmit={handleSubmit} className={props.classes.formsignin}>
            <div className="form-group">
              <label htmlFor="oldpassword">Old Password</label>
              <input
                value={values.oldpassword}
                onBlur={handleBlur}
                onChange={handleChange}
                name="oldpassword"
                type="password"
                className="form-control"
                id="oldpassword"
                placeholder="Enter old password"
              />
              {errors.oldpassword && touched.oldpassword && (
                <p className="invalid-feedback">{errors.oldpassword}</p>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="newpassword">New Password</label>
              <input
                value={values.newpassword}
                onBlur={handleBlur}
                onChange={handleChange}
                name="newpassword"
                type="password"
                className="form-control"
                id="newpassword"
                placeholder="Enter new password"
              />
              {errors.newpassword && touched.newpassword && (
                <p className="invalid-feedback">{errors.newpassword}</p>
              )}
            </div>
            <button
              disabled={
                props.loading || isSubmitting || isValidating ? true : false
              }
              type="submit"
              className="btn app-btn"
            >
              Change Password{" "}
              {props.loading ? (
                <i className="fa fa-circle-o-notch fa-spin ml-3"></i>
              ) : null}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ChangePassForm;
