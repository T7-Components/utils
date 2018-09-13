// Dependencies.
import { exists } from './'

/*
  This method cleans up a
  "multi-line" string, as
  might be used within:

  `<textarea>`
*/
const trimMultiLine = (value) => {
  if (!exists(value)) {
    return ''
  }

  // Ensure string.
  value = '' + value

  // Remove extra spaces.
  value = value.trim()
  value = value.replace(/[ ]+/g, ' ')

  // Mix of newlines, spaces.
  value = value.replace(/\n+\s+\n+/g, '\n\n')

  // Continuous newlines.
  value = value.replace(/\n\n+/g, '\n\n')

  // Expose string.
  return value
}

// Expose function.
export default trimMultiLine
