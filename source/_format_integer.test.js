// Dependencies.
import { formatInteger } from './'

// Describe test.
describe('formatInteger', () => {
  // ===========================
  // Test for "existing" values.
  // ===========================

  it('handles "existing" values', () => {
    expect(formatInteger('A~`!@#$%^&*()_+{}[];",.<>?/09'))
      .toBe('9')
  })

  // =======================================
  // Test for `null` and `undefined` values.
  // =======================================

  it('handles `null` and `undefined` values', () => {
    expect(formatInteger(null))
      .toBe('')

    expect(formatInteger(undefined))
      .toBe('')
  })
})
