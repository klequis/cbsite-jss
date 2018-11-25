import React, { Component } from 'react'
import injectSheet from 'react-jss'
import H1 from 'ui/typography/H1'
import H2 from 'ui/typography/H2'
import H3 from 'ui/typography/H3'
import H4 from 'ui/typography/H4'
import St1 from 'ui/typography/St1'
import St2 from 'ui/typography/St2'
import St3 from 'ui/typography/St3'
import Home from 'ui/Home'
import Breakpoint from 'ui/Breakpoint'
const styles = {
}

class App extends Component {
  render() {
    return (
      <div>
          <Breakpoint />
          <H1>Header One</H1>
          <St1>Sub-Heading One</St1>
          <H2>Header Two</H2>
          <St2>Sub-Heading Two</St2>
          <H3>Header Three</H3>
          <St3>Sub-Heading Three</St3>
          <H4>Header Four</H4>
          <p>paragraph text</p>
          {/* <Home /> */}
      </div>
    )
  }
}

export default injectSheet(styles)(App)
