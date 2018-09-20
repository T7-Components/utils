// Dependencies.
import { exists } from './'

/*
  Helper to format alphanumeric strings.

  BEFORE:

  - "A!@#$%^&*()_+9"

  AFTER:

  - "A9"
*/
const formatAlphanumeric = (value) => {
  // Early exit.
  if (!exists(value)) {
    return ''
  }

  // To string.
  value = String(value)

  // Format.
  value = value.replace(/[^A-Z0-9]/gi, '')

  // Expose string.
  return value
}

// Export.
export default formatAlphanumeric
