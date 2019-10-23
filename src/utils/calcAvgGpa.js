export function calcAvgGpa(data, days) {
  // pull a number of days out of history
  let daysArray = data.slice(0, days)
  // track total score
  let sum = 0
  // track total habits
  let numHabits = 0
  // loop over list of habits for each day
  daysArray.forEach(day => {
    day.habits.forEach(habit => {
      if (habit.type === 'good') {
        // add one point for peforming good habits
        if (habit.performed) sum++
      } else {
        // add one point for NOT peforming BAD habits
        if (!habit.performed) sum++
      }
      numHabits++
    })
  })
  return Math.round((sum / numHabits) * 100)
}
