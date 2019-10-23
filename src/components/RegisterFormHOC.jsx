import React, { useState, useEffect } from 'react'
import { withFormik, Form, Field } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Register = ({ errors, touched, status }) => {
  const [newUser, setNewUser] = useState([])

  console.log('formik status:', status)

  useEffect(() => {
    if (status) {
      setNewUser([...newUser, status])
    }
  }, [status])

  return (
    <Main>
      <Form2>
        <Title>Register</Title>
        <Text>
          <Input type='text' name='username' placeholder='Create a Username' />
          {touched.username && errors.username && (
            <Errors>{errors.username}</Errors>
          )}
          <Input
            type='password'
            name='password'
            placeholder='Create a Password'
          />
          {touched.password && errors.password && (
            <Errors>{errors.password}</Errors>
          )}
          <Input type='email' name='email' placeholder='Enter Your Email' />
          {touched.email && errors.email && <Errors>{errors.email}</Errors>}
        </Text>
        <Buttonc>
          <Button className='buttonclass'>Register</Button>
        </Buttonc>
      </Form2>
      <Link1 to='/login'>
        <Newlink>Already have an account? Click here.</Newlink>
      </Link1>
    </Main>
  )
}
const FormikSignup = withFormik({
  mapPropsToValues({ username, password, email }) {
    return {
      username: username || '',
      password: password || '',
      email: email || ''
    }
  },
  validationSchema: Yup.object().shape({
    username: Yup.string()
      .required('You must create a username before continuing')
      .min(4, 'must be 4 or more characters')
      .max(15, 'thats a bit long, make it less than 15 characters'),
    password: Yup.string()
      .required('Password must be entered')
      .min(4, 'must be 4 or more characters')
      .max(15, 'thats a bit long, make it less than 15 characters'),
    email: Yup.string().required('You must enter a valid email address')
  }),
  handleSubmit(values, { props, setStatus }) {
    axios
      .post(`https://reqres.in/api/users`, values)
      .then(event => {
        console.log('login information', event)
        setStatus(event.data)
        props.history.push('/login')
      })
      .catch(err => console.log(err.e))
  }
})(Register)
console.log(FormikSignup)
export default FormikSignup

//styles

const Main = styled.div`
  height: 92vh;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`
const Form2 = styled(Form)`
  border: 1px solid black;
  background-color: #fff;
  padding: 20px;
`
const Title = styled.label`
  text-align: center;
  margin: 10%;
`
const Text = styled.div`
  display: flex;
  flex-direction: column;
  padding: 60px;
`
const Input = styled(Field)`
  width: 100%;
  margin-top: 5%;
  margin-bottom: 5%;
`
const Buttonc = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover .buttonclass {
    background-color: black;
    color: #ffeb38;
  }
`
const Button = styled.button`
  background-color: #ffeb38;
  color: black;
  width: 100%;
  text-align: center;
  padding: 5%;
  border-radius: 3px;
  font-size: 1.5rem;
`
const Newlink = styled.p`
  font-size: 10px;
`
const Link1 = styled(Link)`
  color: black;
`

const Errors = styled.p`
  font-size: 1rem;
`
