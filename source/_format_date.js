// Dependencies.
import { exists } from './'

/*
  Helper to format dates.

  BEFORE:

  - "01012018"
  - "1/1/2018"
  - "1/01/2018"
  - "01/1/2018"

  AFTER:

  - "01/01/2018"
*/
const formatDate = (value) => {
  // Early exit.
  if (!exists(value)) {
    return ''
  }

  // To string.
  value = String(value)

  // Clean up.
  value = value.replace(/^\//g, '')
  value = value.replace(/[^0-9/]/g, '')
  value = value.replace(/\/+/g, '/')

  // Numbers only.
  const numbersOnly =
    value.replace(/\D/g, '').slice(0, 8)

  // Close enough?
  if (numbersOnly.length === 8) {
    value = numbersOnly
  }

  // Two slashes?
  if ((value.match(/\//g) || []).length >= 2) {
    // Split apart.
    const arr = value.split('/')

    // Month.
    let M = (arr[0] || '').slice(0, 2)

    // Day.
    let D = (arr[1] || '').slice(0, 2)

    // Year.
    const Y = (arr[2] || '').slice(0, 4)

    // Valid?
    if (
      M.length &&
      D.length &&
      Y.length === 4
    ) {
      // Pad month.
      if (M.length === 1) {
        M = '0' + M
      }

      // Pad day.
      if (D.length === 1) {
        D = '0' + D
      }

      // Build string.
      value = [
        M,
        D,
        Y
      ].join('')
    }
  }

  // Format.
  value = value.replace(
    /^(\d{2})(\d{2})(\d{4})/,
    '$1/$2/$3'
  )

  // Cap length.
  value = value.slice(0, 10)

  // Expose string.
  return value
}

// Export.
export default formatDate
