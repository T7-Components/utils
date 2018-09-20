// Dependencies.
import { exists } from './'

/*
  Helper to format numbers.
*/
const formatNumber = (value) => {
  // Early exit.
  if (!exists(value)) {
    return ''
  }

  // To string.
  value = String(value)

  // Format.
  value = value.replace(/[^0-9.]/g, '')
  value = parseFloat(value)

  // Ensure numeric.
  if (isNaN(value)) {
    value = ''
  }

  // Expose string.
  return String(value)
}

// Export.
export default formatNumber
