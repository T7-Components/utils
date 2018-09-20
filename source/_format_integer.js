// Dependencies.
import { exists } from './'

/*
  Helper to format whole numbers.
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

  // Expose string.
  return String(value)
}

// Export.
export default formatInteger
