// Dependencies.
import { formatMoneyKR } from './'

// Describe test.
describe('formatMoneyKR', () => {
  // ===========================
  // Test for "existing" values.
  // ===========================

  it('handles "existing" values', () => {
    expect(formatMoneyKR(1000).replace(/\s+/g, ''))
      .toBe('₩1,000')
  })

  // =======================================
  // Test for `null` and `undefined` values.
  // =======================================

  it('handles `null` and `undefined` values', () => {
    expect(formatMoneyKR(null))
      .toBe('')

    expect(formatMoneyKR(undefined))
      .toBe('')
  })
})
