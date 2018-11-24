import createBreakpoints from 'ui/createBreakpoints'
// const breakpoints = createBreakpoints(breakpointsInput)
const breakpoints = createBreakpoints({})
console.log('breakpoints', breakpoints.up)
const theme = {
  breakpoints: {
    keys: breakpoints.keys,
    values: breakpoints.values,
    up: breakpoints.up,
    down: breakpoints.down,
    between: breakpoints.between,
    only: breakpoints.only,
  },


  spacing: {
    unit: 8,
  }
}

export default theme