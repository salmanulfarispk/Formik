import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

function Signup() {
  const validationSchema = Yup.object({
    firstName: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    lastName: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required('Required'),
      email: Yup.string()
      .matches(
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        'Invalid email address'
      )
      .required('Required'),
  });

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await axios.post('https://api/user/signup', values); //dummy
        console.log('Form submission successful:', response.data);
      } catch (error) {
        console.error('Form submission error:', error);
      }
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <input
            id="first-name"
            type="text"
            name="firstName"
            placeholder="Enter first name"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="border p-2 rounded-md"
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <div className="text-red-500">{formik.errors.firstName}</div>
          ) : null}
        </div>

        <div>
          <input
            id="last-name"
            type="text"
            name="lastName"
            placeholder="Enter last name"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="border p-2 rounded-md"
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <div className="text-red-500">{formik.errors.lastName}</div>
          ) : null}
        </div>

        <div>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Enter email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="border p-2 rounded-md"
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-500">{formik.errors.email}</div>
          ) : null}
        </div>

        <div className="flex justify-end mt-2">
          <button type="submit" className="border p-1 rounded-lg bg-slate-300 text-white hover:bg-slate-400">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export default Signup;
