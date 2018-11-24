import React from 'react'
import { ThemeProvider } from 'react-jss'
import theme from 'theme'

function withTheme(Component) {
  function WithTheme(props) {
    return (
      <ThemeProvider theme={theme}>
        <Component {...props} />
      </ThemeProvider>
    )
  }

  return WithTheme
}

export default withTheme