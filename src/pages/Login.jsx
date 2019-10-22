import React from 'react'
import FormikLogin from "../components/LoginForm"
import { Link } from 'react-router-dom'
import NavBar from "../components/NavBar";


const Login = () => {
  return (
    <div>
      <Link to = "/" style={{ textDecoration: 'none' }}>
        <NavBar/>
      </Link>
      <FormikLogin/>
    </div>
  )
}

export default Login
