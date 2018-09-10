/*
  This method sets the page `title`
  with `data-suffix`, if it exists.
*/
const title = (str = '') => {
  // Get document.
  const d = document

  // Get `title` tag.
  const t = d.querySelector('title')

  // Set in conditional.
  let suffix = ''

  // Get suffix.
  if (t) {
    suffix = t.getAttribute('data-suffix')
  }

  // Is there a title?
  if (str) {
    str = [
      str,
      suffix
    ].join(' | ')

  // If no title exists.
  } else {
    str = suffix
  }

  // Set title.
  d.title = str
}

// Expose function.
export default title
