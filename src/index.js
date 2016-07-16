
import h from 'h0'
import cxs from 'cxs'
import config from './config'

export const div = h('div')

export const root = h('div')({
  class: cxs(config.root)
})

export const h1 = h('h1')({
  class: cxs({
    ...config.heading,
    ...config.h1
  })
})

export const h2 = h('h2')({
  class: cxs({
    ...config.heading,
    ...config.h2
  })
})

export const h3 = h('h3')({
  class: cxs({
    ...config.heading,
    ...config.h3
  })
})

export const h4 = h('h4')({
  class: cxs({
    ...config.heading,
    ...config.h4
  })
})

export const h5 = h('h5')({
  class: cxs({
    ...config.heading,
    ...config.h5
  })
})

export const h6 = h('h6')({
  class: cxs({
    ...config.heading,
    ...config.h6
  })
})

export const a = h('a')({
  class: cxs(config.link)
})

export const pre = h('pre')({ class: cxs(config.pre) })

export const container = h('div')({ class: cxs(config.container) })
export const flex = h('div')({ class: cxs(config.flex) })
export const box = h('div')({ class: cxs(config.box) })

export const gx = ({
  col = 6,
  breakpoint = 512
} = {}) => h('div')({
  class: cxs({
    boxSizing: 'border-box',
    display: 'inline-block',
    verticalAlign: 'top',
    minWidth: `${col / 12 * 100}%`,
    maxWidth: '100%',
    width: `calc(${breakpoint * breakpoint}px - ${100 * breakpoint}%)`
  })
})

const c0 = {
  div,
  root,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  a,
  pre,

  container,
  flex,
  box,
  gx
}

export default c0

