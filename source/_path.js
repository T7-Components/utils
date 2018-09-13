/*
  // Used like so...

  const url = path([
    'users',
    userId,
    'items',
    itemId
  ])

  // Which yields...

  '#/users/123/items/456'
*/

// Helper to generate "#" URL.
const path = (...args) => {
  if (!args.length) {
    // Remove cache buster.
    return window.location.hash.split('?')[0]
  }

  // Set in conditional.
  let x

  // Array passed in?
  if (Array.isArray(args[0])) {
    x = args[0].join('/')
  } else {
    x = args.join('/')
  }

  // Clean up.
  x = x.replace(/#/g, '')
  x = '#/' + x
  x = x.replace(/\/+/g, '/')

  // Expose string.
  return x
}

// Expose function.
export default path
