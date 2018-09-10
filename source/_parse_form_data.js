/*
  Parses all inputs in a `<form>`,
  and returns a formatted object.
*/

// Utility methods.
import utils from './'

const parseFormData = (form) => {
  // Array method.
  const f = Array.prototype.map

  // Build selector.
  const str = [
    '[contenteditable="true"]',
    'input',
    'select',
    'textarea'
  ].join(',')

  // Get elements.
  const list =
    form.querySelectorAll(str)

  // Build in a loop.
  const data = []

  // Loop through.
  f.call(list, (el) => {
    // Exit if disabled.
    if (
      el.disabled ||
      el.hasAttribute('disabled')
    ) {
      return
    }

    // Get attributes.
    const name =
      el.getAttribute('name')

    const type =
      el.getAttribute('type')

    const isTextdiv =
      el.getAttribute('contenteditable')

    // Set in conditional.
    let value

    // If it's a <Textdiv>, treat differently.
    if (isTextdiv) {
      // Get placeholder.
      const placeholder =
        el.getAttribute('placeholder')

      // Get value.
      value =
        utils.convertToText(el.innerHTML)

      // Ensure value isn't placeholder.
      if (value === placeholder) {
        value = ''
      }

    // Else, typical form element.
    } else {
      value = el.value
    }

    const item = {
      name,
      value
    }

    // Pass `checked`?
    if (
      type === 'radio' ||
      type === 'checkbox'
    ) {
      item.checked = el.checked
    }

    // Add to data.
    data.push(item)
  })

  // Send back object.
  return data
}

// Expose function.
export default parseFormData
