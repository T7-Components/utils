// Utility methods.
import utils from './'

// Convert text, when "content editable" is focused.
const convertContentFocus = (e = {}) => {
  const el = e.target

  // Get placeholder.
  let placeholder = el.getAttribute('placeholder')
  placeholder = utils.trim(placeholder)
  placeholder = placeholder.replace(/\s+/g, ' ')

  // Get value.
  let value = el.innerHTML
  value = utils.trim(value)
  value = value.replace(/\s+/g, ' ')

  // Is the value the placeholder?
  if (value === placeholder) {
    el.innerHTML = ''
  }
}

// Expose function.
export default convertContentFocus
