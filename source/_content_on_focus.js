// Dependencies.
import { trim } from './'

// Convert text, when "content editable" is focused.
const contentOnFocus = (e = {}) => {
  // Get target.
  const {
    target = {}
  } = e

  // Get value.
  let value = target.innerHTML
  value = trim(value)

  // Get placeholder.
  let placeholder = target.getAttribute('placeholder')
  placeholder = trim(placeholder)

  // Is the value the placeholder?
  if (value === placeholder) {
    target.innerHTML = ''
  }
}

// Expose function.
export default contentOnFocus
