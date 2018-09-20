// Dependencies.
import { formatDate } from './'

// Describe test.
describe('formatDate', () => {
  // ===========================
  // Test for "existing" values.
  // ===========================

  it('handles "existing" values', () => {
    const OUTPUT = '01/01/2018'

    expect(formatDate('01012018'))
      .toBe(OUTPUT)

    expect(formatDate('1/1/2018'))
      .toBe(OUTPUT)

    expect(formatDate('1/01/2018'))
      .toBe(OUTPUT)

    expect(formatDate('01/1/2018'))
      .toBe(OUTPUT)

    expect(formatDate('011/2018'))
      .toBe(OUTPUT)

    expect(formatDate('1/012018'))
      .toBe(OUTPUT)
  })

  // =======================================
  // Test for `null` and `undefined` values.
  // =======================================

  it('handles `null` and `undefined` values', () => {
    expect(formatDate(null))
      .toBe('')

    expect(formatDate(undefined))
      .toBe('')
  })
})
