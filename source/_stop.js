// Helper to cancel events.
const stop = (e = {}) => {
  // Prevent default.
  if (typeof e.preventDefault === 'function') {
    e.preventDefault()
  }

  // Stop propagation.
  if (typeof e.stopPropagation === 'function') {
    e.stopPropagation()
  }
}

// Expose function.
export default stop
