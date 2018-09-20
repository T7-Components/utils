// Dependencies.
import { exists } from './'

/*
  Helper to format UK currency.
*/
const formatMoneyUK = (value = '') => {
  // Early exit.
  if (!exists(value)) {
    return ''
  }

  // To string.
  value = String(value)

  // Ensure numeric.
  value = value.replace(/[^0-9.]/g, '')

  // To number.
  value = parseFloat(value)

  // Not numeric?
  if (isNaN(value)) {
    return ''
  }

  // Format.
  value = value.toLocaleString('en-gb', {
    currency: 'gbp',
    style: 'currency'
  })

  // Expose string.
  return value
}

// Export.
export default formatMoneyUK
