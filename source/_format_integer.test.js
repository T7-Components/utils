// Dependencies.
import { formatInteger } from './'

// Describe test.
describe('formatInteger', () => {
  // ===========================
  // Test for "existing" values.
  // ===========================

  it('handles "existing" values', () => {
    expect(formatInteger(' '))
      .toBe('')

    expect(formatInteger(0))
      .toBe('0')

    expect(formatInteger('!@#$ABC 01.123 !@#$ABC'))
      .toBe('01123')
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
