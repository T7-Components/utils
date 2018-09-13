// Dependencies.
import { trim } from './'

// Describe test.
describe('trim', () => {
  // ================================
  // Test for `null` and `undefined`.
  // ================================

  it('handles `null` and `undefined`', () => {
    expect(trim(null))
      .toBe('')

    expect(trim(undefined))
      .toBe('')
  })

  // ======================
  // Test for string value.
  // ======================

  it('handles string value', () => {
    expect(trim('  FOO  BAR  '))
      .toBe('FOO BAR')
  })
})
