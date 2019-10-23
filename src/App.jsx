import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { PrivateRoute } from './components'
import {
  Launch,
  Login,
  Register,
  Dashboard,
  History,
  Habits,
  DailyReport
} from './pages'

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={Launch} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <PrivateRoute path='/history' component={History} />
        <PrivateRoute path='/dashboard' component={Dashboard} />
        <PrivateRoute path='/report' component={DailyReport} />
        <PrivateRoute path='/habits' component={Habits} />
      </Switch>
    </div>
  )
}

export default App
