import { axiosWithAuth } from '../utils'
import { testData } from '../testData'
import { startFetch } from './startFetch'

export const getUDTypes = {
  SUCCESS: 'GET_UD_SUCCESS',
  FAIL: 'GET_UD_FAIL'
}

export const getUData = () => dispatch => {
  // dispatch({ type: startFetch })
  axiosWithAuth()
    .get(`https://reqres.in/api/users/2`)
    // .get(`https://bw-life-gpa.herokuapp.com/user`, )
    .then(res => {
      console.log('get user data response', res.data)
      dispatch({ type: getUDTypes.SUCCESS, payload: testData })
    })
    .catch(err => {
      console.log('error on login:', err.response)
      // dispatch({ type: getUDTypes.FAIL, payload: err.response })
    })
}
