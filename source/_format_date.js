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

  /*
    Zero pad: month.

    Matches: "M/DDYYYY" or "M/DD/YYYY"
  */
  value = value.replace(
    /^(\d{1})\/(\d{2})\/?(\d{4})/,
    '0$1/$2/$3'
  )

  /*
    Zero pad: day.

    Matches: "MM/D/YYYY" or "MMD/YYYY"
  */
  value = value.replace(
    /^(\d{2})\/?(\d{1})\/(\d{4})/,
    '$1/0$2/$3'
  )

  /*
    Zero pad: month and day.

    Matches: "M/D/YYYY"
  */
  value = value.replace(
    /^(\d{1})\/(\d{1})\/(\d{4})/,
    '0$1/0$2/$3'
  )

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
