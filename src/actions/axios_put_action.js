import axios from 'axios'

// +++++ EDIT ++++++
export const SET_EDITING = 'SET_EDITING'
export const PUT_START = 'PUT_START'
export const PUT_SUCCESS = 'PUT_SUCCESS'
export const PUT_FAIL = 'PUT_FAIL'

export const editItem = id => dispatch => {
  dispatch({ type: SET_EDITING, payload: id })
}

export const putItem = (id, data) => dispatch => {
  // set store.isFetching : true
  dispatch({ type: PUT_START })
  axios
    .put(`http://localhost:3333/smurfs/${id}`, data)
    .then(res => {
      // if the api call is successful trigger the SUCCESS action
      // console.log('PUT Response', res)
      dispatch({ type: PUT_SUCCESS, payload: res.data })
    })
    .catch(err => {
      // if the api call fails trigger the FAIL action
      dispatch({ type: PUT_FAIL, payload: err.response })
    })
}
