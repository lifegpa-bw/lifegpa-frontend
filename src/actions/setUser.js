import { axiosWithAuth } from '../utils'

export const setUserTypes = {
  START: 'START',
  SUCCESS: 'SET_USER_SUCCESS',
  FAIL: 'SET_USER_FAIL'
}

export const setUser = data => dispatch => {
  // dispatch({ type: setUserTypes.START })
  axiosWithAuth()
    .post(`https://reqres.in/api/login`, {
      email: 'eve.holt@reqres.in',
      password: 'cityslicka'
    })
    // .post(`https://bw-life-gpa.herokuapp.com/login`, data)
    .then(res => {
      console.log('login response', res.data)
      if (window.localStorage) {
        localStorage.setItem('token', 'thisisajwttokenyessir')
      }

      dispatch({ type: setUserTypes.SUCCESS, payload: data.username })
    })
    .catch(err => {
      console.log('error on login:', err.response)
      // dispatch({ type: setUserTypes.FAIL, payload: err.response })
    })
}
