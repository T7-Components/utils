// Dependencies.
import { exists } from './'

/*
  This method cleans up a
  "single line" string, as
  might be used within:

  `<input value="…">`
*/
const trim = (value) => {
  if (!exists(value)) {
    return ''
  }

  // Ensure string.
  value = '' + value

  // Remove extra spaces.
  value = value.trim()
  value = value.replace(/\s+/g, ' ')

  // Expose string.
  return value
}

// Expose function.
export default trim
