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

  // Used in conditional.
  let value = target.innerHTML
  value = contentToText(value)

  // Get placeholder.
  let placeholder = target.getAttribute('placeholder')
  placeholder = trim(placeholder)

  // Placeholder fallback.
  value = (
    value ||
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
