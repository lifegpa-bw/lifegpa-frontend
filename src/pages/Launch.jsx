import React from 'react'
import { OnboardingLayout } from '../components'
import { Button } from '@material-ui/core'

const Launch = () => {
  return (
    <OnboardingLayout>
      <Button variant='contained' color='primary'>
        Create Account
      </Button>
      <Button variant='contained' color='secondary'>
        Login
      </Button>
    </OnboardingLayout>
  )
}

export default Launch
