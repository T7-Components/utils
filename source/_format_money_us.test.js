// Dependencies.
import { formatMoneyUS } from './'

// Describe test.
describe('formatMoneyUS', () => {
  // ===========================
  // Test for "existing" values.
  // ===========================

  it('handles "existing" values', () => {
    expect(formatMoneyUS(1000).replace(/\s+/g, ''))
      .toBe('$1,000.00')
  })

  // =======================================
  // Test for `null` and `undefined` values.
  // =======================================

  it('handles `null` and `undefined` values', () => {
    expect(formatMoneyUS(null))
      .toBe('')

    expect(formatMoneyUS(undefined))
      .toBe('')
  })
})
