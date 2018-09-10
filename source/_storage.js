// ================================
// Flag for `localStorage` support.
// ================================

const hasStorageSupport = (() => {
  // Assume no support.
  let bool = false

  // Used in the `try`.
  const key = 'TEST_KEY'
  const val = 'TEST_VAL'

  // Rigorously test for support.
  try {
    // Set the key/value.
    window.localStorage.setItem(key, val)

    // Are we able to read it?
    bool = window.localStorage.getItem(key) === val

    // Delete the key/value.
    window.localStorage.removeItem(key)
  } catch (e) {}

  // Return the boolean.
  return bool
})()

// =======================
// Cache: Alias to object.
// =======================

const cacheFallback = {
  clear: () => {
    for (const key in cache) {
      if (
        key !== 'clear' &&
        cache.hasOwnProperty(key)
      ) {
        delete cache[key]
      }
    }
  }
}

const cache = (
  hasStorageSupport
    ? window.localStorage
    : cacheFallback
)

// =======================
// Cache: Clear key/value.
// =======================

const clear = () => {
  cache.clear()
}

// ==============
// Cache: Getter.
// ==============

const get = (key) => {
  let data = cache[key]

  // Exit, if no data.
  if (!data) {
    return
  }

  try {
    // Attempt to parse.
    data = JSON.parse(data)
  } catch (e) {
    // Set to original.
    data = cache[key]
  }

  return data
}

// ==============
// Cache: Setter.
// ==============

const set = (key, data) => {
  if (
    key === 'clear' ||
    key === 'getItem' ||
    key === 'key' ||
    key === 'length' ||
    key === 'removeItem' ||
    key === 'setItem'
  ) {
    throw new Error(
      'Cannot overwrite: window.localStorage.' + key
    )
  }

  if (typeof data === 'object') {
    data = JSON.stringify(data)
  }

  cache[key] = data
}

// ==========================
// Cache: Remove single item.
// ==========================

const remove = (key) => {
  delete cache[key]
}

// ==============
// Export object.
// ==============

const storage = {
  clear,
  get,
  remove,
  set
}

// Expose methods.
export default storage
