import { axiosWithAuth } from '../utils/axiosWithAuth'

// +++++ POST ++++++
export const addHabTypes = {
  START: 'addHabSTART',
  SUCCESS: 'addHabSUCCESS',
  FAIL: 'addHabFAIL'
}

export const addHabit = newHabit => dispatch => {
  // set store.isFetching : true
  dispatch({ type: addHabTypes.START })
  axiosWithAuth()
    .post(`http://localhost:3333/api`, newHabit)
    .then(res => {
      // if the api call is successful trigger the SUCCESS action
      // console.log('Post Response',res)
      dispatch({ type: addHabTypes.SUCCESS, payload: res.data })
    })
    .catch(err => {
      // if the api call fails trigger the FAIL action
      dispatch({ type: addHabTypes.FAIL, payload: err.response })
    })
}
