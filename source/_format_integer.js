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
  value = parseFloat(value)

  // Ensure numeric.
  if (isNaN(value)) {
    value = ''
  }

  // Expose string.
  return String(value)
}

// Export.
export default formatInteger
