// +++++ POST ++++++
export const POST_START = 'POST_START'
export const POST_SUCCESS = 'POST_SUCCESS'
export const POST_FAIL = 'POST_FAIL'

export const postItem = item => dispatch => {
  // set store.isFetching : true
  dispatch({ type: POST_START })
  axios
    .post(`http://localhost:3333/smurfs`, item)
    .then(res => {
      // if the api call is successful trigger the SUCCESS action
      // console.log('Post Respose',res)
      dispatch({ type: POST_SUCCESS, payload: res.data })
    })
    .catch(err => {
      // if the api call fails trigger the FAIL action
      dispatch({ type: POST_FAIL, payload: err.response })
    })
}
