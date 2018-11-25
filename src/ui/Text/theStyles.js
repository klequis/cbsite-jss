function theStyles (theme, heading) {

  const common = theme.typography.headings.common
  const xs = theme.typography.headings.xs[heading]
  const md = theme.typography.headings.md[heading]
  return ({
    common,
    font: {
      fontSize: xs.fontSize,
      lineHeight: xs.lineHeight,
      [theme.breakpoints.up('md')]: {
        fontSize: md.fontSize,
        lineHeight: md.lineHeight,
      }
    }
  })
}

export default theStyles