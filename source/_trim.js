// Utility methods.
import utils from './'

// Clean up strings.
const trim = (value) => {
  if (!utils.exists(value)) {
    return ''
  }

  // Clean up.
  value = '' + value
  value = value.trim()
  value = value.replace(/\s+/g, ' ')

  // Expose string.
  return value
}

// Expose function.
export default trim
