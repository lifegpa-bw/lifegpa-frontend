import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { DashboardLayout } from '../components'
import { getUData, setDR } from '../actions'
import { calcAvgGpa } from '../utils'

import {
  CircularProgressbar,
  buildStyles,
  CircularProgressbarWithChildren
} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const Dashboard = props => {
  const { user, dailyReport } = useSelector(store => store.User)
  const dispatch = useDispatch()
  const history = useHistory()

  let percentage = 9

  useEffect(() => {
    dispatch(getUData())
    if (user.history) {
      const today = new Date()
      console.log('user history slice', user.history.slice(-1)[0].habits)

      let newReport = {}
      newReport = {
        ...newReport,
        date: today,
        habits: user.history.slice(-1)[0].habits
      }
      // check if data exits for the current date in user.history
      // if yes, pass it to setDR
      dispatch(setDR(newReport))

      // if no, create a new dailyReport object and pass to setDR.
      // get last day in history
      // if history is empty create object with date and emtpy habits array
      // newReport = { date: today, habits: [] }

      console.log('score for one day:', calcAvgGpa(user.history, 1))
      console.log('score for three days:', calcAvgGpa(user.history, 3))
    }
  }, [user, dispatch])

  console.log('User data in store from dashboard:', user)
  console.log(' dailyReport in store from dashboard:', dailyReport)

  if (user.history) {
    percentage = calcAvgGpa(user.history, 3)
  }
  return (
    <DashboardLayout>
      <div className='dash-board'>
        <div className='progress-bar'>
          <CircularProgressbarWithChildren
            value={percentage}
            styles={buildStyles({
              textColor: 'black',
              pathColor: 'yellow',
              trailColor: 'grey'
            })}
          >
            <div style={{ fontSize: 20, marginTop: -5 }}>LGPA</div>
            <div style={{ fontSize: 80, marginTop: -5 }}>
              <strong>{percentage}</strong>
            </div>
          </CircularProgressbarWithChildren>
        </div>
        <div className='begin-button'>
          <button onClick={() => history.push('/report')}>
            Begin Daily Report
          </button>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default Dashboard
