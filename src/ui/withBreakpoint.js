import React from 'react'
import withSizes from 'react-sizes'
import { getKeyForValue } from 'ui/breakpoints'

const withBreakpoints = Component => {
  function WithBreakpoints(props) {
    return (
      <Component
        breakpoint={getKeyForValue(props.width)}
        {...props}
      />
    )
  }
  const mapSizesToProps = ({ width }) => ({
    width: width
  })
  return withSizes(mapSizesToProps)(WithBreakpoints)
}

export default withBreakpoints
