export const editHabitTypes = {
  EDIT: 'EDIT_HABIT'
}

export const editHabit = updates => dispatch => {
  console.log('data in editHabit action', updates)
  dispatch({ type: editHabitTypes.EDIT, payload: updates })
}
