// Helper for checking existence.
const exists = (x) => {
  return (
    x !== null &&
    typeof x !== 'undefined'
  )
}

// Expose function.
export default exists
