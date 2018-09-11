// Utility methods.
import utils from './'

// Convert text, when "content editable" is focused.
const convertContentFocus = (e = {}) => {
  // Get target.
  const {
    target = {}
  } = e

  // Get value.
  let value = target.innerHTML
  value = utils.trim(value)

  // Get placeholder.
  let placeholder = target.getAttribute('placeholder')
  placeholder = utils.trim(placeholder)

  // Is the value the placeholder?
  if (value === placeholder) {
    target.innerHTML = ''
  }
}

// Expose function.
export default convertContentFocus
