// Dependencies.
import { trim } from './'

// Convert text, when "content editable" is focused.
const contentOnFocus = (e = {}) => {
  // Get element.
  const {
    currentTarget: el = {}
  } = e

  // Get value.
  let {
    innerHTML: value
  } = el

  value = trim(value)

  // Set in conditional.
  let placeholder = ''

  // Get placeholder.
  if (typeof el.getAttribute === 'function') {
    placeholder = trim(
      el.getAttribute('placeholder')
    )
  }

  // Value is placeholder?
  if (value === placeholder) {
    el.innerHTML = ''
  }
}

// Expose function.
export default contentOnFocus
