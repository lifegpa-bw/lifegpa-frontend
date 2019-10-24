import {
  dhTypes,
  getUDTypes,
  addHabTypes,
  drTypes,
  setUserTypes,
  startFetch,
  resetTypes,
  editHabitTypes
} from '../actions'

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
      const { categories, history } = action.payload
      return {
        ...state,
        isFetching: false,
        user: {
          ...state.user,
          categories,
          history
        }
      }

    case setUserTypes.SUCCESS:
      return {
        ...state,
        isFetching: false,
        user: {
          username: action.payload
        }
      }

    // store  user's daily report in separate object to simplify operations
    case drTypes.SET:
      return {
        ...state,
        dailyReport: action.payload
      }
    case dhTypes.SUCCESS:
      return {
        ...state,
        dailyReport: {
          ...state.dailyReport,
          habits: state.dailyReport.habits.filter(
            habit => habit.id !== action.payload
          )
        }
      }

    case addHabTypes.SUCCESS:
      return {
        ...state,
        dailyReport: {
          ...state.dailyReport,
          habits: [...state.dailyReport.habits, action.payload]
        }
      }

    case resetTypes.RESET:
      return { ...initialState }

    case editHabitTypes.EDIT:
      console.log('payload in reducer', action.payload)
      return {
        ...state,
        dailyReport: {
          ...state.dailyReport,
          habits: state.dailyReport.habits.map(habit => {
            if (habit.id === action.payload.id) {
              return {
                ...habit,
                description: action.payload.description,
                type: action.payload.type
              }
            } else {
              return habit
            }
          })
        }
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

// add a habit to the daily report
// case addHabTypes.SUCCESS:
//   const currentDay = state.user.history[0].habits
//   currentDay = [...currentDay, action.payload]
//   return {
//     ...state,
//     user: {
//       ...state.user,
//       history: [currentDay, ...state.user.history]
//     },
//     isFetching: false
//   }
