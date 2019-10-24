import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'

export default () => (
  <AppBar position='static'  >
    <Toolbar className="nav">
      <Typography variant='h3' className="navtext">
        LifeGPA
      </Typography>
    </Toolbar>
  </AppBar>
)
