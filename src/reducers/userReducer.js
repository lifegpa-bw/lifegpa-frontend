import { dhTypes, getUDTypes, addHabTypes, drTypes } from '../actions'

// const storageUserName = localStorage.getItem('lgap-username') || ''

const initialState = {
  isFetching: false,
  user: {},
  dailyReport: {}
}

function userReducer(state = initialState, action) {
  console.log('reducer', action)

  switch (action.type) {
    // add user data to store after fetching from  server
    case getUDTypes.SUCCESS:
      return {
        ...state,
        isFetching: false,
        user: action.payload
      }

    // add a habit to the daily report
    case addHabTypes.SUCCESS:
      const currentDay = state.user.history[0].habits
      currentDay = [...currentDay, action.payload]
      return {
        ...state,
        user: {
          ...state.user,
          history: [currentDay, ...state.user.history]
        },
        isFetching: false
      }

    // store  user's daily report in separate object to simplify operations
    case drTypes.SET:
      return {
        ...state,
        dailyReport: action.payload
      }

    /*
    case ASYNC_ACTION_FAIL:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      }
*/
    default:
      return state
  }
}

export default userReducer
