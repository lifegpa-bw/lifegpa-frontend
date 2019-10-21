import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'
import { axiosWithAuth } from '../utils'
import { useHistory } from 'react-router-dom'

const Login = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' })
  const [isLoading, setIsLoading] = useState(false)
  const [invalidError, setInvalidError] = useState(false)

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
          setInvalidError(false)
          // send the user to the page they were trying to access
          history.push('/protected')
        })
        .catch(err => {
          if (err.response.status === 403) {
            setIsLoading(false)
            setInvalidError(true)
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

  return (
    <Form onSubmit={login}>
      {invalidError && (
        <div className={' p-3  text-danger border border-danger rounded'}>
          Username or Password incorrect.
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
  )
}

export default Login
