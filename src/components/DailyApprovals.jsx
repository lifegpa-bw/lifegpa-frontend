import React, { useState } from 'react'
import uuid from 'react-uuid'

function getCurrentDate() {
  const nth = function(d) {
    if (d > 3 && d < 21) return 'th'
    switch (d % 10) {
      case 1:
        return 'st'
      case 2:
        return 'nd'
      case 3:
        return 'rd'
      default:
        return 'th'
    }
  }

  const monthArr = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]

  let newDate = new Date()
  let day = newDate.getDate()
  let month = monthArr[newDate.getMonth()]
  let year = newDate.getFullYear()

  return `Today ${month} ${day}${nth(day)}, Did you... ?`
}

const reports = [
  {
    id: uuid(),
    title: 'Run 10 km',
    done: false,
    className: ''
  },
  {
    id: uuid(),
    title: 'Walk 10 km',
    done: false,
    className: ''
  },
  {
    id: uuid(),
    title: 'Eat fruit',
    done: false,
    className: ''
  },
  {
    id: uuid(),
    title: 'Have breakfast early',
    done: false,
    className: ''
  },
  {
    id: uuid(),
    title: 'Work during lunch',
    done: false,
    className: ''
  },
  {
    id: uuid(),
    title: 'Make the bed',
    done: false,
    className: ''
  },
  {
    id: uuid(),
    title: 'Open slack',
    done: false,
    className: ''
  },
  {
    id: uuid(),
    title: 'Do housework',
    done: false,
    className: ''
  },
  {
    id: uuid(),
    title: 'Write ideas in Post-it',
    done: false,
    className: ''
  },
  {
    id: uuid(),
    title: 'Drink less alcohol',
    done: false,
    className: ''
  },
  {
    id: uuid(),
    title: 'Study spanish',
    done: false,
    className: ''
  },
  {
    id: uuid(),
    title: 'Use forks correctly',
    done: false,
    className: ''
  },
  {
    id: uuid(),
    title: 'Call mum',
    done: false,
    className: ''
  }
]

export default function DailyApprovals() {
  const [state, setState] = useState({ data: reports })

  function onYesHandle(id) {
    setState(state => ({
      data: state.data.map(item => {
        if (item.id === id) {
          return {
            ...item,
            className: 'done1',
            done: !item.done
          }
        } else {
          return item
        }
      })
    }))
  }

  function onNoHandle(id) {
    setState(state => ({
      data: state.data.map(item => {
        if (item.id === id) {
          return {
            ...item,
            className: 'done2',
            done: !item.done
          }
        } else {
          return item
        }
      })
    }))
  }

  return (
    <div className='wrapper'>
      <p className='daily-report'>Daily Report</p>
      <p className='daily-report currDate'>{getCurrentDate()}</p>
      <hr />

      {state.data.map(report => (
        <div
          key={report.id}
          className={
            report.done ? `${report.className} report` : `hidden report`
          }
        >
          <div className='reportTitle'>{report.title}</div>

          <div>
            <button id='btn1' onClick={() => onYesHandle(report.id)}>
              Yes
            </button>
            <button id='btn2' onClick={() => onNoHandle(report.id)}>
              No
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
