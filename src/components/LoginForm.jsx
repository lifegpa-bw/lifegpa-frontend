import React, { useState } from 'react'

import { Formik, Form, ErrorMessage } from 'formik'

// Mui
import {
  Box,
  Grid,
  IconButton,
  TextField,
  MenuItem,
  InputAdornment,
  CircularProgress
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Visibility, VisibilityOff } from '@material-ui/icons'

import { axiosWithAuth } from '../utils/'

import { useHistory } from 'react-router-dom'

const Login = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' })
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const history = useHistory()

  const login = e => {
    e.preventDefault()

    setIsLoading(true)
    setTimeout(() => {
      axiosWithAuth()
        // get the an auth token from the server
        .post('/api/login', credentials)
        .then(res => {
          // store the token
          console.log('server post-login response: ', res)
          localStorage.setItem('token', res.data.payload)

          setIsLoading(false)
          // send the user to the page they were trying to access
          history.push('/bubbles')
        })
        .catch(err => {
          if (err.response.status === 403) {
            setIsLoading(false)
          }
        })
    }, 1000)
  } // end login

  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.id]: e.target.value
    })
  } // end handleChange

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const handleMouseDownPassword = event => {
    event.preventDefault()
  }

  return (
    <Container>
      <Row>
        <Col>
          <h1>Bubbles App</h1>
        </Col>
      </Row>
      <Row>
        <Col xs={12} lg={{ span: 6, offset: 3 }}>
          <Form onSubmit={login}>
            {invalidError && (
              <div className={' p-3  text-danger border border-danger rounded'}>
                Username and/or Password incorrect.
              </div>
            )}

            <Form.Group controlId='username'>
              <Form.Label>User Name</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter Your User Name'
                value={credentials.username}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId='password'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Enter Your Password'
                value={credentials.password}
                onChange={handleChange}
              />
            </Form.Group>
            {!isLoading && (
              <Button variant='primary' type='submit'>
                Submit
              </Button>
            )}

            {isLoading && (
              <Button variant='primary' disabled>
                <Spinner
                  as='span'
                  animation='border'
                  size='sm'
                  role='status'
                  aria-hidden='true'
                />
                &emsp;Logging In...
              </Button>
            )}
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default Login
