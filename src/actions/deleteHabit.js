import { axiosWithAuth } from '../utils'

// +++++ DELETE ++++++
export const dhTypes = {
  START: 'DH_START',
  SUCCESS: 'DH_SUCCESS',
  FAIL: 'DH_FAIL'
}

export const deleteHabit = id => dispatch => {
  // set store.isFetching : true
  dispatch({ type: dhTypes.SUCCESS, payload: id})

}


// dispatch({ type: dhTypes.START })
// axiosWithAuth()
//   .delete(`http://localhost:3333/api/${id}`)
//   .then(res => {
//     // if the api call is successful trigger the DELETE action
//     // console.log('Delete Response',res)
//     dispatch({ type: dhTypes.SUCCESS, payload: res.data })
//   })
//   .catch(err => {
//     // if the api call fails trigger the FAIL action
//     dispatch({ type: dhTypes.FAIL, payload: err.response })
//   })