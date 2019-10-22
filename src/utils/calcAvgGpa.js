export function calcAvgGpa(data, days) {
  // pull a number of days out of history
  let daysArray = data.slice(0, days)
  console.log('daysArray', daysArray)

  // track total score
  let sum = 0
  // track total habits
  let numHabits = 0

  // loop over list of habits for each day
  daysArray.forEach(day => {
    console.log('day', day)
    day.habits.forEach(habit => {
      console.log('habit', habit)
      if (habit.type === 'good') {
        // add one point for peforming good habits
        if (habit.performed) sum++
      } else {
        // add one point for NOT peforming BAD habits
        if (!habit.performed) sum++
      }
      numHabits++
      console.log('sum', sum)
      console.log('numHabits', numHabits)
    })
  })
  return Math.round((sum / numHabits) * 100)
}
