// Dependencies.
import { formatMoneyDE } from './'

// Describe test.
describe('formatMoneyDE', () => {
  // ===========================
  // Test for "existing" values.
  // ===========================

  it('handles "existing" values', () => {
    expect(formatMoneyDE(1000))
      .toContain('€')
  })

  // =======================================
  // Test for `null` and `undefined` values.
  // =======================================

  it('handles `null` and `undefined` values', () => {
    expect(formatMoneyDE(null))
      .toBe('')

    expect(formatMoneyDE(undefined))
      .toBe('')
  })
})
