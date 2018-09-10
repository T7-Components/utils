// Returns 1 day, in milliseconds.
const today = (offset) => {
  // One day, in milliseconds.
  const oneDay = 86400000

  // Get today.
  let day = new Date().getTime()

  // Valid offset?
  if (!isNaN(offset)) {
    day = day + (offset * oneDay)
  }

  // Expose number.
  return day
}

// Expose function.
export default today
