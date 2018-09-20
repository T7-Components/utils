// Dependencies.
import { exists } from './'

/*
  Helper to format US currency.
*/
const formatMoneyUS = (value = '') => {
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
  value = value.toLocaleString('en-us', {
    currency: 'usd',
    style: 'currency'
  })

  // Expose string.
  return value
}

// Export.
export default formatMoneyUS
