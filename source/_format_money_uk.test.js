// Dependencies.
import { formatMoneyUK } from './'

// Describe test.
describe('formatMoneyUK', () => {
  // ===========================
  // Test for "existing" values.
  // ===========================

  it('handles "existing" values', () => {
    expect(formatMoneyUK(1000).replace(/\s+/g, ''))
      .toBe('£1,000.00')
  })

  // =======================================
  // Test for `null` and `undefined` values.
  // =======================================

  it('handles `null` and `undefined` values', () => {
    expect(formatMoneyUK(null))
      .toBe('')

    expect(formatMoneyUK(undefined))
      .toBe('')
  })
})
