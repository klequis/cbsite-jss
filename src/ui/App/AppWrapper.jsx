import React from 'react'
import withTheme from 'ui/withTheme'
import App from './App'
import injectSheet from 'react-jss'
import { compose } from 'recompose'

const styles = {
  '@global': {
    'html, body, div, span, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, ver, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thread, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video': {
      margin: 0,
      padding: 0,
      border: 0,
      fontSize: '100%',
      font: 'inherit',
      verticalAlign: 'baseline',
    },
    'body': {
      lineHeight: 1,
      '-webkit-text-size-adjust': 'none'
    },
    'html': {
      fontSize: 18,
    },
    // lg
    '@media screen and (max-width: 1680px)': {
      html: {
        fontSize: 14,
        color: 'red',
      },
    },
    // md
    '@media screen and (max-width: 1280px)': {
      html: {
        fontSize: 12,
        color: 'blue',
      },
    },
    // sm
    '@media screen and (max-width: 736px)': {
      html: {
        fontSize: 11,
        color: 'green',
      },
    },
    // xs
    '@media screen and (max-width: 360px)': {
        html: {
          fontSize: 10,
          color: 'orange',
        },
    },

    'body, input, select, textarea': {
      fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
      fontSize: '1rem',
      fontWeight: 300,
      lineHeight: 1.65,
    },
  }, // global
} // styles

const AppWrapper = () => {
  return (
    <App />
  )
}

export default compose(
  withTheme,
  injectSheet(styles)
)(AppWrapper)

// export default AppWrapper