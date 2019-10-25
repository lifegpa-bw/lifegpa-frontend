import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { useSelector } from 'react-redux'
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles
} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import { DashboardLayout } from '../components'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import Box from '@material-ui/core/Box'

import { calcHabitHistory } from '../utils'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}))

const Donut = ({ description, done, notDone }) => {
  const percent = Math.round((done / (done + notDone)) * 100)
  return (
    <div className='specProBar'>
      <CircularProgressbar
        className='progressBar'
        value={percent}
        text={`${percent}%`}
        styles={buildStyles({
          textColor: 'black',
          pathColor: 'orange',
          trailColor: 'grey'
        })}
      />
      {description}
    </div>
  )
}

function Specifications() {
  const [dayFilter, setDayFilter] = useState('all')
  const classes = useStyles()

  const { user, dailyReport } = useSelector(store => store.User)
  console.log('user data in Spec page', user)
  console.log('dailyReport data in Spec page', dailyReport)

  let domDonuts = []
  if (user.history) {
    let filterVals = {
      all: user.history.length,
      thirty: 30,
      sixty: 60,
      ninety: 60
    }

    const habitHistory = calcHabitHistory(user.history, filterVals[dayFilter])
    let keyInd = 0
    habitHistory.forEach((val, key) => {
      domDonuts.push(
        <Donut
          key={keyInd}
          description={val.description}
          done={val.done}
          notDone={val.notDone}
        />
      )
      keyInd++
    })
  }
  return (
    <DashboardLayout>
      <div className='wrapper'>
        <Typography variant='h3' align='center' className='specH1'>
          Specifications
        </Typography>
        <Box mx='auto' display='flex' justifyContent='center'>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor='DateRange'>Date Range</InputLabel>
            <Select
              value={dayFilter}
              onChange={e => setDayFilter(e.target.value)}
              inputProps={{
                name: 'dateRange',
                id: 'dateRange'
              }}
            >
              <MenuItem value={'all'}>All Days</MenuItem>
              <MenuItem value={'thirty'}>Last Thirty</MenuItem>
              <MenuItem value={'sixty'}>Last Sixty</MenuItem>
              <MenuItem value={'90'}>Last Ninety</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <div className='specifications'>{user.history && domDonuts}</div>
      </div>
    </DashboardLayout>
  )
}

export default Specifications
