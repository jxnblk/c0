
import c0, {
  root,
  div,
  container,
  h1,
  h2,
  h3,
  a,
  pre,

  flex,
  box,
  gx
} from '../src'

console.log('hello c0')

const example = `import { root, h1 } from 'c0'

const tree = root(
  h1('hello')
)`

const tree = root(
  container(
    div(
      h1('hello c0'),
      a({ href: 'https://github.com/jxnblk/c0' })('GitHub'),
    ),
    div(
      h2('Basic Usage'),
      pre(example)
    )
  ),
  div(
    h2('c0.gx grid'),
    gx()(
      h3('c0.gx'),
      pre('gx()(children)')
    ),
    gx()(
      h3('c0.gx'),
      pre('gx()(children)')
    ),
    gx({ col: 4 })(
      h3('c0.gx'),
      pre('gx({ col: 4 })(children)')
    ),
    gx({ col: 4 })(
      h3('c0.gx'),
      pre('gx({ col: 4 })(children)')
    ),
    gx({ col: 4 })(
      h3('c0.gx'),
      pre('gx({ col: 4 })(children)')
    )
  )
)

document.body.appendChild(tree)

