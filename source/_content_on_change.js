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
  // Get target.
  const {
    type,
    target = {}
  } = e

  // Event type.
  const isBlur = type === 'blur'

  // Get value.
  let {
    innerHTML: value
  } = target

  // Set in conditional.
  let placeholder = ''

  // Get placeholder.
  if (typeof target.getAttribute === 'function') {
    placeholder = trim(
      target.getAttribute('placeholder')
    )
  }

  value = (
    contentToText(value) ||
    placeholder
  )

  // Blur event?
  if (isBlur) {
    value = contentToMarkup(value)
    target.innerHTML = value
  }
}

// Expose function.
export default contentOnChange
