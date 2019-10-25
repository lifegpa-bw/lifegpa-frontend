import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import uuid from 'react-uuid'
import { setDR } from '../actions'

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

export default function DailyApprovals() {
  const { dailyReport } = useSelector(store => store.User)
  const dispatch = useDispatch()

  console.log('daily report in store from DailyApprovals:', dailyReport)
  /*
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
*/
  return (
    <div className='wrapper'>
      <p className='daily-report'>Daily Report</p>
      <p className='daily-report currDate'>{getCurrentDate()}</p>
      <hr />

      {dailyReport.habits.map(habit => (
        <div
          key={habit.id}
          className={
            habit.performed ? `${habit.className} report` : `hidden report`
          }
        >
          <div className='reportTitle'>{habit.description}</div>

          <div>
            <button
              className='btn'
              id='btn1'
              // onClick={() => onYesHandle(report.id)}
            >
              Yes
            </button>
            <button
              class='btn'
              id='btn2'
              // onClick={() => onNoHandle(report.id)}
            >
              No
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
