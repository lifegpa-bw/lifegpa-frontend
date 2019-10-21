import React from 'react'
import FormikLogin from "../components/LoginForm"
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
      <Link to = "/">
        <h1>Test1</h1>
      </Link>
      <FormikLogin/>
    </div>
  )
}

export default Login
