import React from 'react'
import { useHistory } from 'react-router-dom'
import { OnboardingLayout } from '../components'
import { Button, Grid, Typography } from '@material-ui/core'

const Launch = () => {
  const history = useHistory()
  return (
    <OnboardingLayout>
      <Grid
        container
        spacing={2}
        alignContent='center'
        direction='column'
        justify='center'
      >
        <Grid item>
          <Typography color='primary' variant='h3' align='center'>
            Life GPA
          </Typography>
        </Grid>
        <Grid item>
          <Button
            fullWidth
            variant='outlined'
            color='primary'
            onClick={() => history.push('/register')}
          >
            Create Account
          </Button>
        </Grid>

        <Grid item>
          <Button
            fullWidth
            variant='contained'
            color='primary'
            onClick={() => history.push('/login')}
          >
            Login
          </Button>
        </Grid>
      </Grid>
    </OnboardingLayout>
  )
}

export default Launch
