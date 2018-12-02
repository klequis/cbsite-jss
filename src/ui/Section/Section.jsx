import React from 'react'
import { compose } from 'recompose'
import ResponsiveImage from 'ui/ResponsiveImage'
import injectSheet from 'react-jss'
import withBreakpoint from 'ui/withBreakpoint'


const shadowStyle = {
  boxShadow: 'inset 0 1px 0 0 rgba(0, 0, 0, 0.075)',
}

const Section = (props) => {

  const { children, classes, breakpoint } = props

  console.log('breakpoint', breakpoint)

  return (
    <section className={classes.wrapper}>
      {children}
    </section>
  )

}

const styles = theme => ({
  wrapper: theme.section,
  x: {
    // padding: '4rem 4rem 2rem 4rem',
    // boxShadow: 'inset 0 1px 0 0 rgba(0, 0, 0, 0.075)',


  //   display: 'flex',
  //   flexDirection: 'column',
  //   margin: 8,
  //   minHeight: 100,
  //   backgroundColor: 'transparent',
  //   [theme.breakpoints.up('md')]: {
  //     flexDirection: 'row',
  //   }
  },
})

export default compose(
  withBreakpoint,
  injectSheet(styles)
)(Section)