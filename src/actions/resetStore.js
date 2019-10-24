export const resetTypes = {
  RESET: 'RESET'
}

export const resetStore = () => dispatch => {
  dispatch({
    type: resetTypes.RESET
  })
}
