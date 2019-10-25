export const perfHabitTypes = {
  PERFORM: 'PERFORM_HABIT'
}

export const perfHabit = data => dispatch => {
  dispatch({ type: perfHabitTypes.PERFORM, payload: data })
}
