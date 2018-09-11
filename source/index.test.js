// Import bundled.
import utils, { exists } from './index'

// Import "all" separately.
import * as all from './index.bundle'

// Describe test.
describe('utils - index.js', () => {
  // ======================================
  // Test for individual files, and bundle.
  // ======================================

  it('imports individual files, and bundle', () => {
    // Test single method.
    expect(exists(''))
      .toBe(true)

    // Test exports match.
    expect(utils.exists)
      .toBe(exists)

    // Loop through.
    Object.keys(all).forEach((key) => {
      // Function or object?
      expect(['function', 'object'])
        .toContain(typeof all[key])

      // Identical key/values?
      expect(all[key])
        .toBe(utils[key])
    })
  })
})
