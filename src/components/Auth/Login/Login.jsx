import React from "react"
import { useFormik } from "formik"
import validations from "./validations"
import { TextField } from "@mui/material"
import { Link } from "react-router-dom"

function Login() {
  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      onSubmit: (values) => {
        console.log(values)
      },
      validationSchema: validations,
    })
  return (
    <div>
      <div className="flex min-h-full flex-col justify-center px-6 pb-12 lg:px-8 ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="mt-2">
              <TextField
                error={errors.email && touched.email === true ? true : false}
                id="outlined-error-helper-text"
                className="block w-full py-1.5 !text-gray-900  placeholder:text-gray-400  sm:text-sm sm:leading-6"
                label="Email address"
                name="email"
                type="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={
                  errors.email && touched.email === true ? errors.email : ""
                }
              />
            </div>

            <div>
              <div className="mt-2">
                <TextField
                  error={
                    errors.password && touched.password === true ? true : false
                  }
                  id="outlined-error-helper-text"
                  className="block w-full py-1.5 !text-gray-900  placeholder:text-gray-400  sm:text-sm sm:leading-6"
                  label="Password"
                  name="password"
                  type="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={
                    errors.password && touched.password === true
                      ? errors.email
                      : ""
                  }
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <div className="text-sm flex">
                  <input
                    type="Checkbox"
                    className="block mr-1 text-sm font-medium leading-6 text-gray-900 cursor-pointer"
                  />
                  <div href="#" className="font-semibold text-gray-400 ">
                    Remember me
                  </div>
                </div>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-[#1B3764] hover:text-[#3768b8]"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-[#1B3764] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#3768b8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B3764]"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{" "}
            <Link
              to="/register"
              className="font-semibold leading-6 text-[#1B3764] hover:text-[#3768b8]"
            >
              Register Now
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
