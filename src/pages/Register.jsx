import React from 'react'
import FormikSignup from "../components/RegisterForm";

import { Link } from 'react-router-dom'
import NavBar from "../components/NavBar";

const Login = () => {
  return (
    <div>
      <Link to = "/" style={{ textDecoration: 'none' }}>
        <NavBar/>
      </Link>
      <FormikSignup/>
    </div>
  )
}

export default Login
