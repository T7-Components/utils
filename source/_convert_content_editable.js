// Utility methods.
import utils from './'

/*
  This event converts `contenteditable="true"`
  content into plain text, and back into HTML.
*/
const convertContentEditable = (e = {}) => {
  // Get target.
  const {
    type,
    target = {}
  } = e

  // Event type.
  const isBlur = type === 'blur'

  // Used in conditional.
  let value = target.innerHTML
  value = utils.convertToText(value)

  // Get placeholder.
  let placeholder = target.getAttribute('placeholder')
  placeholder = utils.trim(placeholder)

  // Placeholder fallback.
  value = (
    value ||
    placeholder
  )

  // Blur event?
  if (isBlur) {
    value = utils.convertToMarkup(value)
    target.innerHTML = value
  }
}

// Expose function.
export default convertContentEditable
