import React from 'react'
import FormikSignup from "../components/RegisterForm";

import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
      <Link to = "/">
        <h1>Test</h1>
      </Link>
      <FormikSignup/>
    </div>
  )
}

export default Login
