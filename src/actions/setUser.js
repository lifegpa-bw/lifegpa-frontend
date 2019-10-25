import axios from 'axios'
import { startFetch } from './startFetch'

export const setUserTypes = {
  SUCCESS: 'SET_USER_SUCCESS',
  FAIL: 'SET_USER_FAIL'
}

export const setUser = data => dispatch => {
  dispatch({ type: startFetch })
  axios
    .post(
      'https://bw-life-gpa.herokuapp.com/login',
      `grant_type=password&username=${data.username}&password=${data.password}`,
      {
        headers: {
          // btoa is converting our client id/client secret into base64
          Authorization: `Basic ${btoa('lambda-client:lambda-secret')}`,
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    )
    .then(res => {
      console.log(res)
      localStorage.setItem('token', res.data.access_token)
      localStorage.setItem('username', data.username)
      //props.setUserID(res.data.<whatever the user id is>)
      dispatch({ type: setUserTypes.SUCCESS, payload: data.username })
    })
    .catch(err => {
      console.log(err.response)
      dispatch({
        type: setUserTypes.FAIL,
        payload: err.response.data.error_description
      })
    })
}

/*
// dispatch({ type: setUserTypes.START })
  axiosWithAuth()
    // .post(`https://reqres.in/api/login`, {
    //   email: 'eve.holt@reqres.in',
    //   password: 'cityslicka'
    // })
    .post(`/login`, data)
    .then(res => {
      console.log('login response', res.data)
      // localStorage.setItem('token', 'thisisajwttokenyessir')
      localStorage.setItem('token', res.data)

      dispatch({ type: setUserTypes.SUCCESS, payload: data.username })
    })
    .catch(err => {
      console.log('error on login:', err.response)
      // dispatch({ type: setUserTypes.FAIL, payload: err.response })
    })
    */
