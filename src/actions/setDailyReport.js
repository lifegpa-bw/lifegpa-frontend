// Simplify updates of daily report
export const drTypes = {
  SET: 'SET_DR'
}

export const setDR = data => {
  return {
    type: drTypes.SET,
    payload: data
  }
}
