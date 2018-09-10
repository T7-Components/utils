// Escape the string.
const esc = (str = '') => {
  return str.replace(/[-*+?.^$|{}()/[\]\\]/g, '\\$&')
}

// Helper for regular expressions.
const regex = (x = '') => {
  // Used later.
  let arr
  let value

  // Is it an array?
  const isArray = (
    typeof x === 'object' &&
    x.length
  )

  // Is it an array?
  if (isArray) {
    arr = []
    let i = x.length

    while (i--) {
      arr.push(esc(x[i]))
    }

    arr = arr.reverse()
    arr = arr.join('|')

    value = new RegExp(arr, 'g')
  } else {
    // Assume individual string.
    value = new RegExp(esc(x), 'g')
  }

  // Expose value.
  return value
}

// Expose function.
export default regex
