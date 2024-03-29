import React from 'react'
import injectSheet from 'react-jss'
import Home from 'ui/Home'

class App extends React.Component {
  render() {
    return (
      <div>
        <Home />
      </div>
    )
  }
}

const styles = theme => ({
  '@global': {
    html: {
      boxSizing: 'border-box',
      WebkitFontSmoothing: 'antialiased', // Antialiasing.
      MozOsxFontSmoothing: 'grayscale', // Antialiasing.
      fontSize: '12pt',
      [theme.breakpoints.up('sm')]: {
        fontSize: '13pt'
      },
      [theme.breakpoints.up('md')]: {
        fontSize: '14pt'
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: '16pt'
      },
      // backgroundColor: 'orange'
    },
    body: {
      margin: 0,
      fontFamily: "'Source Sans Pro', Helvetica, sans-serif",
      fontSize: '1rem',
      fontWeight: 300,
      lineHeight: 1.65,
      webkitTextSizeAdjust: 'none',
      msOverflowStyle: 'scrollbar',
      '@media print': {
      backgroundColor: 'white',
      minWidth: 320,
      },
    },
    '*, *::before, *::after': {
      boxSizing: 'inherit',
    },
    p: {
      margin: 0,
    },
  },

})

export default injectSheet(styles)(App)