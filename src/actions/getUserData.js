import { axiosWithAuth } from '../utils'
import { testData } from '../testData'

export const getUDTypes = {
  START: 'START',
  SUCCESS: 'SUCCESS',
  FAIL: 'FAIL'
}

export const getUData = () => dispatch => {
  dispatch({ type: getUDTypes.SUCCESS, payload: testData })
}
/*
  dispatch({ type: getDataTypes.START })
  axiosWithAuth()
    .get(`http://localhost:3333/smurfs`)
    .then(res => {
      // if the api call is successful trigger the SUCCESS action
      dispatch({ type: getDataTypes.SUCCESS, payload: res.data })
    })
    .catch(err => {
      // if the api call fails trigger the FAIL action
      dispatch({ type: getDataTypes.FAIL, payload: err.response })
    })
*/
