// Helper to cancel events.
const stop = (event = {}) => {
  // Peel apart.
  const {
    preventDefault: p,
    stopPropagation: s
  } = event

  // Prevent default.
  if (typeof p === 'function') {
    p()
  }

  // Stop propagation.
  if (typeof s === 'function') {
    s()
  }
}

// Expose function.
export default stop
