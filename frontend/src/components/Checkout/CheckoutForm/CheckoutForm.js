import React from 'react';
import classes from './CheckoutForm.module.scss';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

const CheckoutForm = (props) => {

  return (
    <Formik
        initialValues = {{
            email: '',
            password:''
        }}
        validationSchema = {Yup.object({
              name: Yup.string().required("Name is required"),
              phone: Yup.string().required("Phone number is required"),
              address: Yup.string().required("Address is required"),
            })}
            onSubmit={(values, { setSubmitting }) => {
              const request = {
                name: values.name,
                phone: values.phone,
                address: values.address
              }
              props.submitHandler(request);
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
                 id="checkoutform"
              >
                  <div className={`${classes.CheckoutForm} app-bg-color`}>
                      <h3>Checkout</h3>
                      <div className="form-group">
                          <label 
                           htmlFor="name" 
                           className="text-uppercase text-white">
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
                            placeholder="Enter name"
                          />
                          {errors.name && 
                          <p className="invalid-feedback font-weight-bold">
                            {errors.name}
                          </p>}
                      </div>
                      <div className="form-group">
                         <label 
                           htmlFor="phone" 
                           className="text-uppercase text-white">
                               Phone
                         </label>
                         <input 
                            value={values.phone} 
                            onBlur={handleBlur}  
                            onChange={handleChange} 
                            name="phone" 
                            type="text" 
                            id="phone" 
                            className="form-control" 
                            placeholder="Enter phone number"
                          />
                          {errors.phone && 
                          <p className="invalid-feedback font-weight-bold">
                            {errors.phone}
                          </p>}
                      </div>
                      <div className="form-group">
                         <label 
                           htmlFor="address" 
                           className="text-uppercase text-white">
                               Address
                         </label>
                         <input 
                            value={values.address} 
                            onBlur={handleBlur}  
                            onChange={handleChange} 
                            name="address" 
                            type="text" 
                            id="address" 
                            className="form-control" 
                            placeholder="Enter address"
                          />
                          {errors.address &&
                          <p className="invalid-feedback font-weight-bold">
                            {errors.address}
                          </p>}
                      </div>
                      <button disabled={props.loading || isSubmitting || isValidating?true:false} type="submit">
                          Submit 
                         {props.loading?(<i className="fa fa-circle-o-notch fa-spin ml-3"></i>):null}
                      </button>
                      <button onClick={props.cancelHandler}>Cancel</button>
                  </div>
              </Form>
            )}
        </Formik>
      );
}

export default CheckoutForm;