// Utility methods.
import utils from './'

// Describe test.
describe('utils.trim', () => {
  // ================================
  // Test for `null` and `undefined`.
  // ================================

  it('handles `null` and `undefined`', () => {
    expect(utils.trim(null))
      .toBe('')

    expect(utils.trim(undefined))
      .toBe('')
  })

  // ======================
  // Test for string value.
  // ======================

  it('handles string value', () => {
    expect(utils.trim('  FOO  BAR  '))
      .toBe('FOO BAR')
  })
})
