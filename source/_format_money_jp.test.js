// Dependencies.
import { formatMoneyJP } from './'

// Describe test.
describe('formatMoneyJP', () => {
  // ===========================
  // Test for "existing" values.
  // ===========================

  it('handles "existing" values', () => {
    expect(formatMoneyJP(1000).replace(/\s+/g, ''))
      .toBe('¥1,000')
  })

  // =======================================
  // Test for `null` and `undefined` values.
  // =======================================

  it('handles `null` and `undefined` values', () => {
    expect(formatMoneyJP(null))
      .toBe('')

    expect(formatMoneyJP(undefined))
      .toBe('')
  })
})
