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
  typography: {
    common: {
      lineHeight: 1.2,
      fontWeight: 300,
      letterSpacing: '-0.05em',
      textAlign: 'left',
    },
    xs: {
      h1: {
        fontSize: '2.5rem',
      },
      h2: {
        fontSize: '2.0rem',
      },
      h3: {
        fontSize: '1.25rem'
      },
      h4: {
        fontSize: '1.0rem'
      },
    },
    md: {
      h1: {
        fontSize: '3.5rem'
      },
      h2: {
        fontSize: '2.25rem',
      },
      h3: {
        fontSize: '1.5rem'
      },
      h4: {
        fontSize: '1.1rem'
      },
    },

  },
  spacing: {
    unit: 8,
  }
}

export default theme