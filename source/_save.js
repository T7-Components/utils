/*

  This method allows you to save data as a `console.json`
  file, when perusing a large JSON object via console.log
  would be too time consuming and/or laborious. Enjoy! :)

  // Called like so…

  save(json, 'my_file_name.json')

*/
const save = (
  data = {},
  fileName = 'console.json'
) => {
  /*
    Ensure all the necessary featuers are
    available to actually create a file.
  */
  const hasFeatures = (
    typeof window.Blob === 'function' &&
    typeof window.URL === 'function' &&
    typeof document.createElement === 'function' &&
    typeof document.createEvent === 'function'
  )

  // Early exit.
  if (!hasFeatures) {
    return
  }

  // Format nicely.
  if (typeof data === 'object') {
    data = JSON.stringify(data, null, 2)
  }

  // Set type.
  const type = 'text/json'

  // Create blob.
  const blob = new window.Blob([data], { type })

  // Create event.
  const e = document.createEvent('MouseEvents')

  // Tailor event.
  e.initMouseEvent(
    'click',
    true,
    false,
    window,
    0,
    0,
    0,
    0,
    0,
    false,
    false,
    false,
    false,
    0,
    null
  )

  // Create tag.
  const a = document.createElement('a')

  // Use file name.
  a.download = fileName

  // Set the path.
  a.href = window.URL.createObjectURL(blob)

  // Set the URL.
  a.dataset.downloadurl = [
    type,
    a.download,
    a.href
  ].join(':')

  // Fire event.
  a.dispatchEvent(e)
}

// Expose function.
export default save
