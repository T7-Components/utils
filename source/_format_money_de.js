// Dependencies.
import { exists } from './'

/*
  Helper to format German currency.
*/
const formatMoneyDE = (value = '') => {
  // Early exit.
  if (!exists(value)) {
    return ''
  }

  // To string.
  value = String(value)

  // Ensure numeric.
  value = value.replace(/[^0-9,]/g, '')
  value = value.replace(/,([^,]*)$/, '.' + '$1')

  // To number.
  value = parseFloat(value)

  // Not numeric?
  if (isNaN(value)) {
    return ''
  }

  // Format.
  value = value.toLocaleString('de-de', {
    currency: 'eur',
    style: 'currency'
  })

  // Expose string.
  return value
}

// Export.
export default formatMoneyDE
