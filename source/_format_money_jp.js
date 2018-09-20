// Dependencies.
import { exists } from './'

/*
  Helper to format Japanese currency.
*/
const formatMoneyJP = (value = '') => {
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
  value = value.toLocaleString('en-jp', {
    currency: 'jpy',
    style: 'currency'
  })

  // Expose string.
  return value
}

// Export.
export default formatMoneyJP
