import { axiosWithAuth } from '../utils'

// +++++ DELETE ++++++
export const deleteTypes = {
  DELETE_START: 'DELETE_START',
  DELETE_SUCCESS: 'DELETE_SUCCESS',
  DELETE_FAIL: 'DELETE_FAIL'
}

export const deleteItem = id => dispatch => {
  // set store.isFetching : true
  dispatch({ type: deleteTypes.DELETE_START })
  axiosWithAuth()
    .delete(`http://localhost:3333/smurfs/${id}`)
    .then(res => {
      // if the api call is successful trigger the SUCCESS action
      // console.log('Delete Respose',res)
      dispatch({ type: deleteTypes.DELETE_SUCCESS, payload: res.data })
    })
    .catch(err => {
      // if the api call fails trigger the FAIL action
      dispatch({ type: deleteTypes.DELETE_FAIL, payload: err.response })
    })
}
