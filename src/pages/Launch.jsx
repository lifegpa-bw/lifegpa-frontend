import React from 'react'
import { OnboardingLayout } from '../components'
import { Button, Grid } from '@material-ui/core'

const Launch = () => {
  return (
    <OnboardingLayout>
      <Grid
        container
        spacing='2'
        alignContent='center'
        direction='column'
        justify='center'
      >
        <Grid item>
          <Button variant='contained' color='primary'>
            Create Account
          </Button>
        </Grid>

        <Grid item>
          <Button fullWidth variant='outlined' color='primary'>
            Login
          </Button>
        </Grid>
      </Grid>
    </OnboardingLayout>
  )
}

export default Launch
