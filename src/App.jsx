import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { PrivateRoute } from './components'
import { Launch, Login, Register, Dashboard } from './pages'

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={Launch} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <PrivateRoute to='/dashboard' component={Dashboard} />
      </Switch>
    </div>
  )
}

export default App
