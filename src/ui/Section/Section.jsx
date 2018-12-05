import React from 'react'
import { compose } from 'recompose'
import injectSheet from 'react-jss'
import classNames from 'classnames'
import withBreakpoint from 'ui/withBreakpoint'
import { green } from 'logger'

// const shadowStyle = {
//   boxShadow: 'inset 0 1px 0 0 rgba(0, 0, 0, 0.075)',
// }



const Section = (props) => {

  const { children, classes, className, background='light' } = props
  const clsNames = classNames(
    {
      [classes.dark]: background === 'dark',
    },
    [
      [classes.wrapper],
      className,
    ]

  )
  // green('Section: props', props)
  // green('Section: clsNames', clsNames)
  green('background', background)
  return (
    <section className={clsNames}>
      <div className={classes.inner}>
      {children}
      </div>
    </section>
  )

}

const styles = theme => ({
  wrapper: theme.section.xs,
  inner: {
    maxWidth: 1180,
    margin: 'auto',
  },
  dark: {
    // backgroundColor: '#2b3137',
    backgroundColor: theme.section.colors.background.dark,
    color: 'white',
    boxShadow: theme.section.shadow.dark
  },
})

export default compose(
  withBreakpoint,
  injectSheet(styles)
)(Section)