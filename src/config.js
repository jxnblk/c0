
import {
  toHex,
  toRgb,
  darken,
  alpha
} from './colors'

export const black = '#111'
export const blue = '#07c'
export const gray = '#eee' // alpha(black)(1/16)

export const x = [
  0,
  8,
  16,
  32,
  64
]

export const f = [
  48,
  32,
  24,
  20,
  16,
  14,
  12
]

const config = {
  root: {
    fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
    lineHeight: 1.5,
  },
  link: {
    color: blue,
    ':hover': {
      color: darken(blue)(1/4)
    }
  },
  heading: {
    marginTop: x[2],
    marginBottom: 0
  },
  h1: {
    fontSize: f[1]
  },
  h2: {
    fontSize: f[2]
  },
  h3: {
    fontSize: f[3]
  },
  h4: {
    fontSize: f[4]
  },
  h5: {
    fontSize: f[5]
  },
  h6: {
    fontSize: f[6]
  },
  pre: {
    fontFamily: 'SFMono-Regular, Menlo, monospace',
    fontSize: f[5],
    padding: x[1],
    backgroundColor: gray
  },
  container: {
    maxWidth: 768,
    margin: 'auto'
  },
  flex: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: -x[1],
    marginRight: -x[1],
  },
  box: {
    paddingLeft: x[1],
    paddingRight: x[1],
  },

  gx: {
    boxSizing: 'border-box',
    display: 'inline-block',
    verticalAlign: 'top',
    maxWidth: '100%',
  }
}

export default config

