// Dependencies.
import {
  contentToText,
  contentToMarkup,
  trim
} from './'

/*
  This event converts `contenteditable="true"`
  content into plain text, and back into HTML.
*/
const contentOnChange = (e = {}) => {
  // Get element.
  const {
    type,
    currentTarget: el = {}
  } = e

  // Event type.
  const isBlur = type === 'blur'

  // Get value.
  let {
    innerHTML: value
  } = el

  // Set in conditional.
  let placeholder = ''

  // Get placeholder.
  if (typeof el.getAttribute === 'function') {
    placeholder = trim(
      el.getAttribute('placeholder')
    )
  }

  value = (
    contentToText(value) ||
    placeholder
  )

  // Blur event?
  if (isBlur) {
    value = contentToMarkup(value)
    el.innerHTML = value
  }
}

// Expose function.
export default contentOnChange
