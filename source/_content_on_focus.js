// Dependencies.
import { trim } from './'

// Convert text, when "content editable" is focused.
const contentOnFocus = (e = {}) => {
  // Get target.
  const {
    target = {}
  } = e

  // Get value.
  let {
    innerHTML: value
  } = target

  value = trim(value)

  // Set in conditional.
  let placeholder = ''

  // Get placeholder.
  if (typeof target.getAttribute === 'function') {
    placeholder = trim(
      target.getAttribute('placeholder')
    )
  }

  // Value is placeholder?
  if (value === placeholder) {
    target.innerHTML = ''
  }
}

// Expose function.
export default contentOnFocus
