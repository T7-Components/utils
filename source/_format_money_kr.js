// Dependencies.
import { exists } from './'

/*
  Helper to format Korean currency.
*/
const formatMoneyKR = (value = '') => {
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
  value = value.toLocaleString('ko-kr', {
    currency: 'krw',
    style: 'currency'
  })

  // Expose string.
  return value
}

// Export.
export default formatMoneyKR
