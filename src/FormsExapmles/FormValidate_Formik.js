
import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
 import * as Yup from 'yup';

const FormValidate_Formik = () => {

    const SignupSchema = Yup.object().shape({
        firstName: Yup.string()
          .min(2, 'Too Short!')
          .max(50, 'Too Long!')
          .required('Required'),

        lastName: Yup.string()
          .min(2, 'Too Short!')
          .max(50, 'Too Long!')
          .required('Required'),

        email: Yup.string()
            .email('Invalid email')
            .required('Required'),

        phoneNumber: Yup.string()
            .required("Phone number is required")
            .matches(/^([0]{1}|\+?[234]{3})([7-9]{1})([0|1]{1})([\d]{1})([\d]{7})$/g, "Invalid phone number"),
      });

      const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: ""
      };

      const submitForm = (values) => {
        console.log(values);
      }; 


  return (
    <div>
            <h2 className='text-center'>Enter Employee Details...</h2>
            <h1 className='text-center'>Signup</h1>
            <Formik
            initialValues={initialValues}
            validationSchema={SignupSchema}
            onSubmit={submitForm}
            >
            {({ errors, touched, isValid, dirty }) => (
                <Form className='container w-25'>
                     <div className="form-row">
                        <label htmlFor="email">Email</label>
                        <Field
                        type="email"
                        name="email"
                        id="email"
                        className={errors.email && touched.email ? 
                        "input-error" : null}
                        />
                        <ErrorMessage name="email" component="span" className="error" />
                    </div>
                    <button
                        type="submit"
                        className={!(dirty && isValid) ? "disabled-btn" : ""}
                        disabled={!(dirty && isValid)}
                    >
                        Sign In
                    </button>
                {/* <label>First Name</label>
                <input name="firstName" className="form-control mb-2" />
                {errors.firstName && touched.firstName ? (
                    <div>{errors.firstName}</div>
                ) : null}
                <label>Last Name</label>
                <input name="lastName" className="form-control mb-2" />
                {errors.lastName && touched.lastName ? (
                    <div>{errors.lastName}</div>
                ) : null}
                <label>Email</label>
                <input name="email" type="email" className="form-control mb-2" />
                {errors.email && touched.email ? <div>{errors.email}</div> : null}
                <button type="submit" className="btn btn-primary">Submit</button> */}
                </Form>
            )}
            </Formik>
    </div>
  )
}

export default FormValidate_Formik
