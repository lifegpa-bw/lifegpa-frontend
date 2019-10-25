import { startFetch } from '../actions'

const initialState = {
  isFetching: false
}

function userReducer(state = initialState, action) {
  console.log('reducer', action)

  switch (action.type) {
    // add user data to store after fetching from  server
    default:
      return state
  }
}

export default userReducer
