import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { axiosWithAuth } from '../utils/axiosAuth'
import * as Yup from 'yup'
import { CircularProgress } from '@material-ui/core'

const newFriendSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Name must be 2 characters at minimum')
    .required('Name is required'),
  age: Yup.number()
    .typeError('Age must be a number')
    .positive('Age must be a positive number')
    .integer('Age must be an integer')
    .required('Age is required'),
  email: Yup.string()
    .email('Invalid email address format')
    .required('Email is required')
})

const AddFriendForm = props => {
  const [isLoading, setIsLoading] = useState(false)
  const initForm = {
    name: '',
    age: '',
    email: ''
  }

  const addFriend = friend => {
    setTimeout(() => {
      axiosWithAuth()
        .post('/api/friends', friend)
        .then(res => {
          console.log('server post-friends response: ', res)
          props.setData(res.data)
          setIsLoading(false)
          // setInvalidError(false)
        })
        .catch(err => {
          if (err.response.status === 403) {
            setIsLoading(false)
            // setInvalidError(true)
          }
        })
    }, 1500)
  }

  return (
    <Formik
      initialValues={initForm}
      validationSchema={newFriendSchema}
      onSubmit={(values, { setSubmitting }) => {
        setIsLoading(true)
        addFriend(values)
      }}
    >
      {({ touched, errors }) => (
        <Form className={'border border-primary rounded p-3'}>
          <div className='form-group'>
            <label htmlFor='name'>Name</label>
            <Field
              type='text'
              name='name'
              placeholder='Enter name'
              className={`form-control ${
                touched.name && errors.name ? 'is-invalid' : ''
              }`}
            />
            <ErrorMessage
              component='div'
              name='name'
              className='invalid-feedback'
            />
          </div>

          <div className='form-group'>
            <label htmlFor='age'>Age</label>
            <Field
              type='text'
              name='age'
              placeholder='Enter Age'
              className={`form-control ${
                touched.age && errors.age ? 'is-invalid' : ''
              }`}
            />
            <ErrorMessage
              component='div'
              name='age'
              className='invalid-feedback'
            />
          </div>

          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <Field
              type='email'
              name='email'
              placeholder='Enter email'
              className={`form-control ${
                touched.email && errors.email ? 'is-invalid' : ''
              }`}
            />
            <ErrorMessage
              component='div'
              name='email'
              className='invalid-feedback'
            />
          </div>

          {!isLoading && (
            <button type='submit' className='btn btn-primary btn-block'>
              Add Friend
            </button>
          )}

          {isLoading && (
            <button disabled className='btn btn-primary btn-block'>
              <CircularProgress color='text.onLight' />
              &emsp;Please Wait...
            </button>
          )}
        </Form>
      )}
    </Formik>
  )
}

export default AddFriendForm
