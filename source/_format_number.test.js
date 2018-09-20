// Dependencies.
import { formatNumber } from './'

// Describe test.
describe('formatNumber', () => {
  // ===========================
  // Test for "existing" values.
  // ===========================

  it('handles "existing" values', () => {
    expect(formatNumber(' '))
      .toBe('')

    expect(formatNumber(0))
      .toBe('0')

    expect(formatNumber('!@#$ABC 1.123 !@#$ABC'))
      .toBe('1.123')
  })

  // =======================================
  // Test for `null` and `undefined` values.
  // =======================================

  it('handles `null` and `undefined` values', () => {
    expect(formatNumber(null))
      .toBe('')

    expect(formatNumber(undefined))
      .toBe('')
  })
})
