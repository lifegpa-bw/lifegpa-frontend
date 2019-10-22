// +++++ POST ++++++
export const postTypes = {
  START: 'START',
  SUCCESS: 'SUCCESS',
  FAIL: 'FAIL'
}

export const postItem = item => dispatch => {
  // set store.isFetching : true
  dispatch({ type: postTypes.START })
  axios
    .post(`http://localhost:3333/smurfs`, item)
    .then(res => {
      // if the api call is successful trigger the SUCCESS action
      // console.log('Post Respose',res)
      dispatch({ type: postTypes.SUCCESS, payload: res.data })
    })
    .catch(err => {
      // if the api call fails trigger the FAIL action
      dispatch({ type: postTypes.FAIL, payload: err.response })
    })
}
