import { createMuiTheme } from '@material-ui/core/styles'

export default createMuiTheme({
  palette: {
    primary: {
      main: '#FFED00'
    },
    secondary: {
      main: '#6807F9'
    }
  },
  typography: {
    // set base font-size on html element to 10px
    htmlFontSize: 10,
    fontFamily: 'Rajdhani',
    body1: {
      fontSize: '1.7rem',
      fontWeight: 600
    }
  },
  overrides: {
    MuiBackdrop: {
      root: {
        backgroundColor: 'transparent'
      }
    }
  }
})
