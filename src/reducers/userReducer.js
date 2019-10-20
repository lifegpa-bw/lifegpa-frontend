import { deleteItem, deleteTypes } from '../actions'

const initialState = {
  username: '',
  error: '',
  isFetching: false
}

function userReducer(state = initialState, action) {
  console.log('reducer', action)
  switch (action.type) {
    /*
    case ASYNC_ACTION_START:
      return {
        ...state,
        isFetching: true
      }

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
