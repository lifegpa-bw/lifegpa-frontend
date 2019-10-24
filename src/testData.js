
export const specifications =
{
  "exercise": 0,
  "diet": 0,
  "hygiene": 0,
  "social": 0,
  "drugs": 0
}


// console.log(specifications.exercise =+ 1)
export const testData = {
  username: '',
  categories: [
    { id: 1, description: 'exercise', color: '#10aff4' },
    { id: 2, description: 'diet', color: '#ff11fa' },
    { id: 3, description: 'hygiene', color: 'yellow' },
    { id: 4, description: 'social', color: '#454a11' },
    { id: 5, description: 'drugs', color: 'red' }
  ],
  history: [
    {
      date: 10172019,
      habits: [
        {
          description: 'stretch for 15 minutes',
          type: 'good',
          category: 1,
          performed: false
        },
        {
          description: 'ate  a fruit',
          type: 'good',
          category: 2,
          performed: false
        },
        {
          description: 'brush teeth',
          type: 'good',
          category: 3,
          performed: false
        },
        {
          description: 'socialize for 1 hour',
          type: 'good',
          category: 4,
          performed: true
        },
        {
          description: 'Smoke cigarettes',
          type: 'bad',
          category: 5,
          performed: false
        }
      ]
    },
    {
      date: 10182019,
      habits: [
        {
          description: 'stretch for 15 minutes',
          type: 'good',
          category: 1,
          performed: true
        },
        {
          description: 'ate  a fruit',
          type: 'good',
          category: 2,
          performed: true
        },
        {
          description: 'brush teeth',
          type: 'good',
          category: 3,
          performed: false
        },
        {
          description: 'socialize for 1 hour',
          type: 'good',
          category: 4,
          performed: true
        },
        {
          description: 'Smoke cigarettes',
          type: 'bad',
          category: 5,
          performed: true
        }
      ]
    },
    {
      date: 10192019,
      habits: [
        {
          description: 'stretch for 15 minutes',
          type: 'good',
          category: 1,
          performed: false
        },
        {
          description: 'ate  a fruit',
          type: 'good',
          category: 2,
          performed: false
        },
        {
          description: 'brush teeth',
          type: 'good',
          category: 3,
          performed: false
        },
        {
          description: 'socialize for 1 hour',
          type: 'good',
          category: 4,
          performed: true
        },
        {
          description: 'Smoke cigarettes',
          type: 'bad',
          category: 5,
          performed: false
        }
      ]
    },
    {
      date: 10202019,
      habits: [
        {
          description: 'stretch for 15 minutes',
          type: 'good',
          category: 1,
          performed: false
        },
        {
          description: 'ate  a fruit',
          type: 'good',
          category: 2,
          performed: false
        },
        {
          description: 'brush teeth',
          type: 'good',
          category: 3,
          performed: false
        },
        {
          description: 'socialize for 1 hour',
          type: 'good',
          category: 4,
          performed: true
        },
        {
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

  let trueCounterExercise = 0;
  let trueCounterDiet = 0;
  let trueCounterHygiene = 0;
  let trueCounterSocial = 0;
  let trueCounterDrugs = 0;

  return testData.history.map(ele => (
     ele.habits.map(ele2 => {
      if(ele2.description === "stretch for 15 minutes" && ele2.performed === true) {
        trueCounterExercise ++;
        specifications.exercise = trueCounterExercise;
      }
      if(ele2.description === "stretch for 15 minutes" && ele2.performed === true) {
        trueCounterDiet ++;
        specifications.diet = trueCounterDiet;
      }
      if(ele2.description === "stretch for 15 minutes" && ele2.performed === true) {
        trueCounterHygiene ++;
        specifications.hygiene = trueCounterHygiene;
      }
      if(ele2.description === "stretch for 15 minutes" && ele2.performed === true) {
        trueCounterSocial ++;
        specifications.social = trueCounterSocial;
      }
      if(ele2.description === "stretch for 15 minutes" && ele2.performed === true) {
        trueCounterDrugs ++;
        specifications.drugs = trueCounterDrugs;
      }
    }  )
  ))
}
specificationHabitAdder();
console.log("ssss: ", specifications)