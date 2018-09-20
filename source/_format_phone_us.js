// Dependencies.
import { exists } from './'

/*
  Helper to format US phone number.

  BEFORE:

  - "5558675309"

  AFTER:

  - "555-867-5309"
*/
const formatPhoneUS = (value) => {
  // Early exit.
  if (!exists(value)) {
    return ''
  }

  // To string.
  value = String(value)

  // Clean up.
  value = value.replace(/^-/, '')
  value = value.replace(/[^0-9-]/, '')
  value = value.replace(/-+/g, '-')

  // Numbers only.
  const numbersOnly =
    value.replace(/\D/g, '').slice(0, 10)

  // Close enough?
  if (numbersOnly.length === 10) {
    value = numbersOnly
  }

  // Format.
  value = value.replace(
    /^(\d{3})(\d{3})(\d{4})/,
    '$1-$2-$3'
  )

  // Cap length.
  value = value.slice(0, 12)

  // Expose string.
  return value
}

// Export.
export default formatPhoneUS
