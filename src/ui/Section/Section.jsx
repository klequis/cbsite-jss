import React from 'react'
import { compose } from 'recompose'
import injectSheet from 'react-jss'
import classNames from 'classnames'
import withBreakpoint from 'ui/withBreakpoint'


// const shadowStyle = {
//   boxShadow: 'inset 0 1px 0 0 rgba(0, 0, 0, 0.075)',
// }

const Section = (props) => {

  const { children, classes, className } = props
  const clsNames = classNames([
    [classes.wrapper],
    className
  ])

  return (
    <section className={clsNames}>
      {children}
    </section>
  )

}

const styles = theme => ({
  wrapper: theme.section,
})

export default compose(
  withBreakpoint,
  injectSheet(styles)
)(Section)