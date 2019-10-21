import React, { useState } from 'react'

import { Formik, Form, ErrorMessage } from 'formik'

// Mui
import {
  Grid,
  IconButton,
  TextField,
  InputAdornment,
  CircularProgress,
  Typography,
  Button,
  Paper
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import {
  Visibility,
  VisibilityOff,
  AccountCircleTwoTone
} from '@material-ui/icons'
import Box from '@material-ui/core/Box'
import * as Yup from 'yup'

import { axiosWithAuth } from '../utils/'

import { useHistory } from 'react-router-dom'

const loginSchema = Yup.object().shape({
  username: Yup.string().required('Name is required'),
  password: Yup.string().required('Password is required')
})

const Login = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' })
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const history = useHistory()

  const login = e => {
    setIsLoading(true)
    setTimeout(() => {
      axiosWithAuth()
        // get the an auth token from the server
        .post('/api/login', credentials)
        .then(res => {
          // store the token
          console.log('server post-login response: ', res)
          // localStorage.setItem('token', res.data.payload)

          setIsLoading(false)
          // send the user to the page they were trying to access
          history.push('/dashboard')
        })
        .catch(err => {
          if (err.response.status === 403) {
            setIsLoading(false)
            console.log(err.response)
          }
        })
    }, 1000)
  } // end login

  const handleChange = key => e => {
    setCredentials({
      ...credentials,
      [key]: e.target.value
    })
  } // end handleChange

  const handleClickPassword = () => {
    setShowPassword(!showPassword)
  }

  const handleMouseDownPassword = event => {
    event.preventDefault()
  }

  return (
    <Formik
      initialValues={credentials}
      validationSchema={loginSchema}
      onSubmit={values => {
        login()
      }}
    >
      {({ errors }) => (
        <Box component={Paper} p={2}>
          <Form>
            <Grid container spacing={2}>
              <Grid item xs={12} lg={6}>
                <TextField
                  id='username'
                  name='username'
                  variant='filled'
                  label='Username'
                  error={!!errors.username}
                  value={credentials.username}
                  onChange={handleChange('username')}
                  helperText={errors.username}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>
                        <AccountCircleTwoTone />
                      </InputAdornment>
                    )
                  }}
                />
              </Grid>

              <Grid item xs={12} lg={6}>
                <TextField
                  id='password'
                  error={!!errors.password}
                  variant='filled'
                  type={showPassword ? 'text' : 'password'}
                  label='Password'
                  value={credentials.password}
                  onChange={handleChange('password')}
                  helperText={errors.password}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>
                        <IconButton
                          edge='start'
                          aria-label='toggle password visibility'
                          onClick={handleClickPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                />
              </Grid>
              {!isLoading && (
                <Button variant='contained' color='primary' type='submit'>
                  Submit
                </Button>
              )}

              {isLoading && (
                <Button variant='contained' disabled>
                  <CircularProgress color='text.onLight' />
                  &emsp;Logging In...
                </Button>
              )}
            </Grid>
          </Form>
        </Box>
      )}
    </Formik>
  )
}

export default Login
/*
{errors.username && errors.password && (
            <Box p={3} border='2' borderColor='error.main'>
              <Typography variant='h5' color='error' align='center'>
                Username and/or Password incorrect.
              </Typography>{' '}
            </Box>
          )}
          */
