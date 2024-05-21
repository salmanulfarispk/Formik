import React from 'react';
import { useFormik } from 'formik';

function Signup() {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastname: '',
    }})
   https://github.com/salmanulfarispk/New_.git
    console.log(formik.values);
  return (
    <>
      <form>
        <div>
          <input
            id="first-name"
            type="text"
            name="firstName"
            placeholder="Enter first name"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            className="border p-2 rounded-md"
          />
        </div>

        <div>
          <input
            id="last-name"
            type="text"
            name="lastname"
            placeholder="Enter last name"
            value={formik.values.lastname}
            onChange={formik.handleChange}
            className="border p-2 rounded-md"
          />
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
