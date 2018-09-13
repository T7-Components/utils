// Dependencies.
import { path } from './'

/*
  // Used like so...

  navigate([
    'users',
    userId,
    'items',
    itemId
  ])

  // Which goes to...

  '#/users/123/items/456'
*/

// Helper for page navigation.
const navigate = (...args) => {
  // Change hash.
  window.location.hash = path(args)
}

// Expose function.
export default navigate
