
import convert from 'color-convert'

export const toHex = (str) => {
  const raw = str.replace(/^#/, '')
  let hex = raw
  if (raw.length === 3) {
    hex = raw.split('').reduce((a, b) => {
      return a + b + b
    }, '')
  }
  console.log('hex', hex)
  return hex
}

export const toRgb = (hex) => {
  const rgb = []
  for (let i = 0; i < 6; i +=2) {
    rgb.push(parseInt(hex.substr(i, 2), 16))
  }
  console.log('rgb', rgb)
  return rgb
}

export const toHsl = ([_r, _g, _b]) => {
  const r = _r / 255
  const g = _g / 255
  const b = _b / 255
  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)

  const l = (max + min) / 2

  const s = 0 // l < 0.5

  const h = 0 // idk



  const hsl = [h, s, l]
  console.log('custom hsl', hsl)
  return hsl
}

export const darken = c => d => {
  const hex = toHex(c) // c.split('#')[1]
  const rgb = toRgb(''+ hex)
  const althsl = toHsl(rgb)

  const hsl = convert.hex.hsl(hex)
  hsl[2] = hsl[2] * d

  const val = convert.hsl.hex(...hsl)
  console.log('convert', hex, hsl, val, '(rgb)', rgb)
  return val
}

// To do
export const alpha = c => a => c


/*
export const _toHsl = (rgb) => {
  // from https://codepen.io/pankajparashar/pen/oFzIg
  let [r, g, b] = rgb
  r /= 255
  g /= 255
  b /= 255
  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  let h
  let s
  let l = (max + min) / 2

  if (max == min) {
    h = s = 0
  } else {
    const d = max - min
    s = l > 0.5
      ? d / (2 - max - min)
      : d / (max + min)

    switch (max){
      case r:
        h = (g - b) / d + (g < b ? 6 : 0)
      break
      case g:
        h = (b - r) / d + 2
      break
      case b:
        h = (r - g) / d + 4
      break
    }

    h /= 6
  }

  const hsl = [
    (h * 100 + 0.5) | 0,
    ((s * 100 + 0.5) | 0),
    ((l * 100 + 0.5) | 0)
  ]
  console.log('hsl', hsl)
  return hsl
}
*/
