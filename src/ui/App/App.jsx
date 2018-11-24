import React, { Component } from 'react'
import injectSheet from 'react-jss'
import H1 from 'ui/typography/H1'
import H2 from 'ui/typography/H2'
import H3 from 'ui/typography/H3'
import H4 from 'ui/typography/H4'
const styles = {
}

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <H1>Header One</H1>
          <H2>Header Two</H2>
          <H3>Header Three</H3>
          <H4>Header Four</H4>
          <p>paragraph text</p>

        </header>
      </div>
    )
  }
}

export default injectSheet(styles)(App)
