export const testData = {
  username: '',
  categories: [
    { id: 1, description: 'exercise', color: '#10aff4' },
    { id: 2, description: 'diet', color: '#ff11fa' },
    { id: 3, description: 'hygiene', color: 'cbcc4a' },
    { id: 4, description: 'social', color: '#454a11' },
    { id: 5, description: 'drugs', color: '#bbc184' }
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
