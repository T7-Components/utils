// Returns 1 day, in milliseconds.
const today = (offset) => {
  // Get today.
  let day = new Date().getTime()

  // Valid offset?
  if (!isNaN(offset)) {
    day = day + (offset * 86400000)
  }

  // Expose number.
  return day
}

// Expose function.
export default today
