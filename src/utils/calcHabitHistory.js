export function calcHabitHistory(data, days) {
  // pull a number of days out of history
  let daysArray = data.slice(0, days)
  // return value
  let historyValues = new Map()

  // loop over list of habits for each day
  daysArray.forEach(day => {
    day.habits.forEach(habit => {
      if (historyValues.has(habit.id)) {
        const current = historyValues.get(habit.id)
        if (habit.performed) {
          historyValues.set(habit.id, {
            ...current,
            done: (current.done += 1)
          })
        } else {
          historyValues.set(habit.id, {
            ...current,
            notDone: (current.notDone += 1)
          })
        }
      } else {
        historyValues.set(habit.id, {
          description: habit.description,
          done: habit.performed ? 1 : 0,
          notDone: habit.performed ? 0 : 1
        })
      }
    })
  })
  return historyValues
}
