// Dependencies.
import { exists } from './'

// Describe test.
describe('exists', () => {
  // ===========================
  // Test for "existing" values.
  // ===========================

  it('handles "existing" values', () => {
    expect(exists(0))
      .toBe(true)

    expect(exists(1))
      .toBe(true)

    expect(exists(-1))
      .toBe(true)

    expect(exists(true))
      .toBe(true)

    expect(exists(false))
      .toBe(true)

    expect(exists(NaN))
      .toBe(true)

    expect(exists(''))
      .toBe(true)

    expect(exists('TEST'))
      .toBe(true)

    expect(exists([]))
      .toBe(true)

    expect(exists({}))
      .toBe(true)

    expect(exists(() => {}))
      .toBe(true)
  })

  // =======================================
  // Test for `null` and `undefined` values.
  // =======================================

  it('handles `null` and `undefined` values', () => {
    expect(exists(null))
      .toBe(false)

    expect(exists(undefined))
      .toBe(false)
  })
})
