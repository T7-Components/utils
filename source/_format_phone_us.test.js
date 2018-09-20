// Dependencies.
import { formatPhoneUS } from './'

// Describe test.
describe('formatPhoneUS', () => {
  // ===========================
  // Test for "existing" values.
  // ===========================

  it('handles "existing" values', () => {
    expect(formatPhoneUS('5558675309'))
      .toBe('555-867-5309')

    expect(formatPhoneUS('5-5-5-8-6-7-5-3-0-9'))
      .toBe('555-867-5309')
  })

  // =======================================
  // Test for `null` and `undefined` values.
  // =======================================

  it('handles `null` and `undefined` values', () => {
    expect(formatPhoneUS(null))
      .toBe('')

    expect(formatPhoneUS(undefined))
      .toBe('')
  })
})
