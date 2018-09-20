// Dependencies.
import { formatAlphanumeric } from './'

// Describe test.
describe('formatAlphanumeric', () => {
  // ===========================
  // Test for "existing" values.
  // ===========================

  it('handles "existing" values', () => {
    expect(formatAlphanumeric('A~`!@#$%^&*()_+{}[];",.<>?/09'))
      .toBe('A09')
  })

  // =======================================
  // Test for `null` and `undefined` values.
  // =======================================

  it('handles `null` and `undefined` values', () => {
    expect(formatAlphanumeric(null))
      .toBe('')

    expect(formatAlphanumeric(undefined))
      .toBe('')
  })
})
