// Dependencies.
import {
  stop,
  trimMultiLine
} from './'

/*
  You would call this when a user pastes from
  the clipboard into a `contenteditable` area.
*/
const contentOnPaste = (e = {}) => {
  // Prevent paste.
  stop(e)

  // Get target.
  const { target } = e

  /*
    Used if the browser doesn't allow us
    to intercept the live `paste` event.
  */
  const fallback = () => {
    window.setTimeout(() => {
      // Get value.
      let value = target.innerText

      // Trim.
      value = trimMultiLine(value)

      // Update text.
      target.innerText = value
    }, 0)
  }

  // Used in conditional.
  let value

  // For IE.
  if (window.clipboardData) {
    value = window.clipboardData.getData('text')
  } else {
    // Other browsers.
    value = e.clipboardData.getData('text/plain')
  }

  // No value?
  if (!value) {
    // Use fallback.
    fallback()

    // Exit.
    return
  }

  // Insert into temp `<textarea>`, read back out.
  const textarea = document.createElement('textarea')
  textarea.innerHTML = value
  value = textarea.innerText

  // Clean up.
  value = trimMultiLine(value)

  // For IE.
  if (document.selection) {
    // For IE8.
    if (document.documentMode === 8) {
      value = value.replace(/\n/g, '<br>')
    }

    document.selection.createRange().pasteHTML(value)
  } else {
    // Other browsers.
    document.execCommand('insertText', false, value)
  }
}

// Expose function.
export default contentOnPaste
