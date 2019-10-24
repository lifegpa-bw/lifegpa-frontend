import React from 'react'
import FormikLogin from "../components/LoginForm"
import { Link } from 'react-router-dom'
import NavBar from "../components/NavBar";
import styled from 'styled-components'


const Login = () => {
  return (
    <Main>
      <Link to = "/" style={{ textDecoration: 'none' }}>
        <NavBar/>
      </Link>
      <Welcome>Welcome Back!</Welcome>
      <FormikLogin/>
    </Main>
  )
}

export default Login

const Main = styled.div`
font-family: 'Rajdhani', sans-serif;
background-color: #fff;

`
const Welcome = styled.h3`
text-align: center;


`