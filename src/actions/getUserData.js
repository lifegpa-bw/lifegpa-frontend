import { axiosWithAuth } from '../utils'
import { testData } from '../testData'

export const getUDTypes = {
  START: 'GET_UD_START',
  SUCCESS: 'GET_UD_SUCCESS',
  FAIL: 'GET_UD_FAIL'
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
