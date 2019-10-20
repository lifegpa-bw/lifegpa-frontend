import { combineReducers } from 'redux'

//import each reducer
import userReducer from './userReducer'

// Combine reducers
export default combineReducers({
  User: userReducer
})
