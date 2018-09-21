// Dependencies.
import { exists } from './'

/*
  Helper to format integers.
*/
const formatInteger = (value) => {
  // Early exit.
  if (!exists(value)) {
    return ''
  }

  // To string.
  value = String(value)

  // Format.
  value = value.replace(/\D/g, '')

  // Expose string.
  return value
}

// Export.
export default formatInteger
