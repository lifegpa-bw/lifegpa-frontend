import { deleteTypes, getUDTypes } from '../actions'

const storageUserName = localStorage.getItem('lgap-username') || ''

const initialState = {
  isFetching: false,
  user: {
    username: storageUserName
  }
}

function userReducer(state = initialState, action) {
  console.log('reducer', action)

  switch (action.type) {
    case getUDTypes.SUCCESS:
      return {
        isFetching: false,
        user: action.payload
      }

    /*
    case ASYNC_ACTION_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isFetching: false
      }

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
