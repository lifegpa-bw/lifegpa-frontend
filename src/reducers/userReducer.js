import { dhTypes, getUDTypes, addHabTypes } from '../actions'

// const storageUserName = localStorage.getItem('lgap-username') || ''

const initialState = {
  isFetching: false,
  user: {}
}

function userReducer(state = initialState, action) {
  console.log('reducer', action)

  switch (action.type) {
    case getUDTypes.SUCCESS:
      return {
        isFetching: false,
        user: action.payload
      }

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
