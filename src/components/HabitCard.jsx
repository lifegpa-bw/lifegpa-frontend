import React, { useState } from 'react';
import Habits from '../components/CreateHabit';
import { testData } from '../testData'
import { Category } from '@material-ui/icons';

const Habit = () => {
  const [addHabit, setAddHabits] = useState(testData); 

  return (
    <div>
      {/* {addHabit.map(habit => {
        <p> {habit.description} </p>
        

      })} */}
    </div>
  )
}
export default Habit;