import React from 'react'
import { Container } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles'

const layoutClasses = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.common.black,
    minHeight: '100vh',
    padding: 0,
    '@media screen and (min-width: 1000px)': {
      backgroundColor: 'orange'
    }
  }
}))

const OnboardingLayout = props => {
  const theme = useTheme()
  const classes = layoutClasses(theme)

  return (
    <Container className={classes.root} maxWidth='false'>
      {props.children}
    </Container>
  )
}

export default OnboardingLayout
