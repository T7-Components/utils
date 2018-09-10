// Helper for returning a unique string.
const unique = () => {
  // Build string.
  let x = new Date().getTime()
  x = x + '_'
  x = x + Math.random()
  x = x.replace('0.', '')

  // Expose string.
  return x
}

// Expose function.
export default unique
