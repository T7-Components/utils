// Dependencies.
import { formatMoneyIN } from './'

// Describe test.
describe('formatMoneyIN', () => {
  // ===========================
  // Test for "existing" values.
  // ===========================

  it('handles "existing" values', () => {
    expect(formatMoneyIN(1000).replace(/\s+/g, ''))
      .toBe('₹1,000.00')
  })

  // =======================================
  // Test for `null` and `undefined` values.
  // =======================================

  it('handles `null` and `undefined` values', () => {
    expect(formatMoneyIN(null))
      .toBe('')

    expect(formatMoneyIN(undefined))
      .toBe('')
  })
})
