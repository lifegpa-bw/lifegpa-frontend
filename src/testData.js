import React from "react";
import {reports} from "./components/DailyApprovals"


export const specifications = {
  exercise: 0,
  diet: 0,
  hygiene: 0,
  social: 0,
  drugs: 0
}

// console.log(specifications.exercise =+ 1)
export const testData = {
  categories: [
    { id: 1, description: 'exercise', color: '#10aff4' },
    { id: 2, description: 'diet', color: '#ff11fa' },
    { id: 3, description: 'hygiene', color: 'yellow' },
    { id: 4, description: 'social', color: '#454a11' },
    { id: 5, description: 'drugs', color: 'red' }
  ],
  history: [
    {
      date: new Date(2019, 9, 1),
      habits: [
        {
          id: 1,
          description: 'stretch for 15 minutes',
          type: 'good',
          category: 1,
          performed: false
        },
        {
          id: 2,
          description: 'ate  a fruit',
          type: 'good',
          category: 2,
          performed: false
        },
        {
          id: 3,
          description: 'brush teeth',
          type: 'good',
          category: 3,
          performed: false
        },
        {
          id: 4,
          description: 'socialize for 1 hour',
          type: 'good',
          category: 4,
          performed: true
        },
        {
          id: 5,
          description: 'Smoke cigarettes',
          type: 'bad',
          category: 5,
          performed: false
        }
      ]
    },
    {
      date: new Date(2019, 9, 2),
      habits: [
        {
          id: 1,
          description: 'stretch for 15 minutes',
          type: 'good',
          category: 1,
          performed: true
        },
        {
          id: 2,
          description: 'ate  a fruit',
          type: 'good',
          category: 2,
          performed: true
        },
        {
          id: 3,
          description: 'brush teeth',
          type: 'good',
          category: 3,
          performed: false
        },
        {
          id: 4,
          description: 'socialize for 1 hour',
          type: 'good',
          category: 4,
          performed: true
        },
        {
          id: 5,
          description: 'Smoke cigarettes',
          type: 'bad',
          category: 5,
          performed: true
        }
      ]
    },
    {
      date: new Date(2019, 9, 3),
      habits: [
        {
          id: 1,
          description: 'stretch for 15 minutes',
          type: 'good',
          category: 1,
          performed: false
        },
        {
          id: 2,
          description: 'ate  a fruit',
          type: 'good',
          category: 2,
          performed: false
        },
        {
          id: 3,
          description: 'brush teeth',
          type: 'good',
          category: 3,
          performed: false
        },
        {
          id: 4,
          description: 'socialize for 1 hour',
          type: 'good',
          category: 4,
          performed: true
        },
        {
          id: 5,
          description: 'Smoke cigarettes',
          type: 'bad',
          category: 5,
          performed: false
        }
      ]
    },
    {
      date: new Date(2019, 9, 4),
      habits: [
        {
          id: 1,
          description: 'stretch for 15 minutes',
          type: 'good',
          category: 1,
          performed: false
        },
        {
          id: 2,
          description: 'ate  a fruit',
          type: 'good',
          category: 2,
          performed: false
        },
        {
          id: 3,
          description: 'brush teeth',
          type: 'good',
          category: 3,
          performed: false
        },
        {
          id: 4,
          description: 'socialize for 1 hour',
          type: 'good',
          category: 4,
          performed: true
        },
        {
          id: 5,
          description: 'Smoke cigarettes',
          type: 'bad',
          category: 5,
          performed: false
        }
      ]
    }
  ]
}

function specificationHabitAdder(params) {
  let trueCounterExercise = 0
  let trueCounterDiet = 0
  let trueCounterHygiene = 0
  let trueCounterSocial = 0
  let trueCounterDrugs = 0

  return testData.history.map(ele =>
    ele.habits.map(ele2 => {
      if (
        ele2.description === 'stretch for 15 minutes' &&
        ele2.performed === true
      ) {
        trueCounterExercise++
        specifications.exercise = ((trueCounterExercise / testData.history.length) * 100).toFixed(2)
        console.log("?????: ", testData.history.length)
      }
      if (
        ele2.description === 'stretch for 15 minutes' &&
        ele2.performed === true
      ) {
        trueCounterDiet++
        specifications.diet = ((trueCounterDiet / testData.history.length) * 100).toFixed(2)
      }
      if (
        ele2.description === 'stretch for 15 minutes' &&
        ele2.performed === true
      ) {
        trueCounterHygiene++
        specifications.hygiene = ((trueCounterHygiene / testData.history.length) * 100).toFixed(2)
      }
      if (
        ele2.description === 'stretch for 15 minutes' &&
        ele2.performed === true
      ) {
        trueCounterSocial++
        specifications.social = ((trueCounterSocial / testData.history.length) * 100).toFixed(2)
      }
      if (
        ele2.description === 'stretch for 15 minutes' &&
        ele2.performed === true
      ) {
        trueCounterDrugs++
        specifications.drugs = ((trueCounterDrugs / testData.history.length) * 100).toFixed(2)
      }
    })
  )
}
specificationHabitAdder()
console.log('ssss: ', specifications)
