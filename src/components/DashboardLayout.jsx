import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

// Mui
import {
  AppBar,
  Toolbar,
  Typography,
  Fab,
  IconButton,
  MenuItem,
  Menu,
  Divider,
  Drawer,
  Hidden,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box
} from '@material-ui/core'
import MenuRoundedIcon from '@material-ui/icons/MenuRounded'
import TimelineIcon from '@material-ui/icons/Timeline'
import DonutLargeRoundedIcon from '@material-ui/icons/DonutLargeRounded'
import KeyboardArrowUpRoundedIcon from '@material-ui/icons/KeyboardArrowUpRounded'
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded'
import AccountCircleTwoToneIcon from '@material-ui/icons/AccountCircleTwoTone'
import ListAltTwoToneIcon from '@material-ui/icons/ListAltTwoTone'
import BallotTwoToneIcon from '@material-ui/icons/BallotTwoTone'
import CategoryRoundedIcon from '@material-ui/icons/CategoryRounded'
import { makeStyles, useTheme } from '@material-ui/core/styles'

// Custom Components
import ScrollTop from './ScrollTop'

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
    width: drawerWidth,
    borderRight: 0,
    backgroundColor: theme.palette.grey[500]
  },
  content: {
    // add margin to content  md up
    [theme.breakpoints.up('md')]: {
      marginLeft: drawerWidth
    }
  },
  navLink: {
    // background: `linear-gradient(45deg, orange 30%, ${theme.palette.primary.main} 60%, orange)`,
    color: theme.palette.text.primary,
    transition: 'background 0.3s',
    '&:hover': {
      background: theme.palette.primary.main
    }
  },
  'navLink-active': {
    // background: `linear-gradient(0deg,  orange 15%,  ${theme.palette.primary.light} 60%)`,
    background: theme.palette.primary.main,
    color: theme.palette.text.primary
  }
}))

const DashboardLayout = props => {
  const { container } = props
  const location = useLocation()
  const classes = useStyles()
  const theme = useTheme()
  const [mobileOpen, setMobileOpen] = React.useState(false)
  console.log('location:', location)

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
        <ListItem
          to='/dashboard'
          component={NavLink}
          className={
            location.pathname === '/dashboard'
              ? classes['navLink-active']
              : classes.navLink
          }
        >
          <ListItemIcon>
            <DonutLargeRoundedIcon />
          </ListItemIcon>
          <ListItemText primary='Dashboard' />
        </ListItem>

        <ListItem
          to='/report'
          component={NavLink}
          className={
            location.pathname === '/report'
              ? classes['navLink-active']
              : classes.navLink
          }
        >
          <ListItemIcon>
            <BallotTwoToneIcon />
          </ListItemIcon>
          <ListItemText primary='Daily Report' />
        </ListItem>

        <ListItem
          to='/history'
          component={NavLink}
          className={
            location.pathname === '/history'
              ? classes['navLink-active']
              : classes.navLink
          }
        >
          <ListItemIcon>
            <TimelineIcon />
          </ListItemIcon>
          <ListItemText primary='History' />
        </ListItem>

        <ListItem
          to='/habits'
          component={NavLink}
          className={
            location.pathname === '/habits'
              ? classes['navLink-active']
              : classes.navLink
          }
        >
          <ListItemIcon>
            <ListAltTwoToneIcon />
          </ListItemIcon>
          <ListItemText primary='My Habits' />
        </ListItem>
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
            <MenuRoundedIcon />
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
          <KeyboardArrowUpRoundedIcon />
        </Fab>
      </ScrollTop>
    </Box>
  )
}

export default DashboardLayout
