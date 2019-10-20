// +++++ FETCH ++++++
export const FETCH_START = 'FETCH_START'
export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const FETCH_FAIL = 'FETCH_FAIL'

export const fetchItem = () => dispatch => {
  // set store.isFetching : true
  dispatch({ type: FETCH_START })
  axios
    .get(`http://localhost:3333/smurfs`)
    .then(res => {
      // if the api call is successful trigger the SUCCESS action
      dispatch({ type: FETCH_SUCCESS, payload: res.data })
    })
    .catch(err => {
      // if the api call fails trigger the FAIL action
      dispatch({ type: FETCH_FAIL, payload: err.response })
    })
}
