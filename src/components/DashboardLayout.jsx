import React from 'react'
import { AppBar } from '@material-ui/core'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Fab from '@material-ui/core/Fab'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import ScrollTop from './ScrollTop'

const DashboardLayout = props => {
  return (
    <React.Fragment>
      <AppBar>
        <Toolbar>
          <Typography variant='h6'>LifeGPA</Typography>
        </Toolbar>
      </AppBar>
      <Toolbar id='scroll-anchor' />
      <Container>
        <Box my={2}>{props.children}</Box>
      </Container>
      <ScrollTop {...props}>
        <Fab color='secondary' size='small' aria-label='scroll back to top'>
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  )
}

export default DashboardLayout
