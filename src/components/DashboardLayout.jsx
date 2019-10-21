import React from 'react'
import { AppBar } from '@material-ui/core'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Fab from '@material-ui/core/Fab'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import ScrollTop from './ScrollTop'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import AccountCircle from '@material-ui/icons/AccountCircle'
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import Divider from '@material-ui/core/Divider'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { ArrowLeftRounded } from '@material-ui/icons'

const drawerWidth = 240

const useStyles = makeStyles(theme => ({
  drawer: {
    // use fixed width drawer on sm and larger
    [theme.breakpoints.up('md')]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appBar: {
    // app bar is always above menu
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: theme.palette.common.black
  },
  menuButton: {
    marginRight: theme.spacing(2),
    // hide menu button on sm and larger
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  // sets the height based on screen size
  toolbar: {
    minHeight: theme.mixins.toolbar.minHeight,
    backgroundColor: theme.palette.common.black,
    boxShadow: theme.shadows[4]
  },
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    // add margin to content  md up
    [theme.breakpoints.up('md')]: {
      marginLeft: drawerWidth
    }
  }
}))

const DashboardLayout = props => {
  const { container } = props
  const classes = useStyles()
  const theme = useTheme()
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <div>
      <Box className={classes.toolbar}>
        <IconButton
          color='primary'
          className={classes.button}
          aria-label='close drawer'
          onClick={handleDrawerToggle}
        >
          <ArrowBackIosRoundedIcon />
        </IconButton>
      </Box>
      <Divider />
      <List>
        {['dashboard', 'daily report', 'my habits', 'history'].map(
          (text, index) => (
            <ListItem button key={index}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          )
        )}
      </List>
    </div>
  )

  return (
    <Box display='flex' flexDirection='column'>
      <Toolbar id='scroll-anchor' />
      <AppBar position='fixed' className={classes.appBar}>
        <Toolbar>
          <IconButton
            color='primary'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' align='center' color='primary'>
            LifeGPA
          </Typography>
        </Toolbar>
      </AppBar>
      {/* <Toolbar id='scroll-anchor' /> */}
      {/* Drawer */}
      <nav className={classes.drawer} aria-label='mailbox folders'>
        {/* Props for sm and larger */}
        <Hidden mdUp implementation='css'>
          <Drawer
            container={container}
            variant='temporary'
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>

        {/* Props for mobile only */}
        <Hidden smDown implementation='css'>
          <Drawer
            classes={{
              paper: classes.drawerPaper
            }}
            variant='permanent'
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>

      {/* Page Content */}
      <Box component='main' px={3} flexGrow={1} className={classes.content}>
        <Box my={2}>{props.children}</Box>
      </Box>
      {/* Scroll to top icon */}
      <ScrollTop {...props}>
        <Fab color='primary' size='small' aria-label='scroll back to top'>
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </Box>
  )
}

export default DashboardLayout
