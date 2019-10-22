import axios from 'axios'

// +++++ EDIT ++++++
export const editTypes = {
  EDITING: 'EDITING',
  START: 'START',
  SUCCESS: 'SUCCESS',
  FAIL: 'FAIL'
}

export const editItem = id => dispatch => {
  dispatch({ type: editTypes.EDITING, payload: id })
}

export const putItem = (id, data) => dispatch => {
  // set store.isFetching : true
  dispatch({ type: editTypes.START })
  axios
    .put(`http://localhost:3333/smurfs/${id}`, data)
    .then(res => {
      // if the api call is successful trigger the SUCCESS action
      // console.log('PUT Response', res)
      dispatch({ type: editTypes.SUCCESS, payload: res.data })
    })
    .catch(err => {
      // if the api call fails trigger the FAIL action
      dispatch({ type: editTypes.FAIL, payload: err.response })
    })
}
