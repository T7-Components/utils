// Utility methods.
import utils from './'

// Describe test.
describe('utils.exists', () => {
  // ========================
  // Test for "truthy" value.
  // ========================

  it('handles "truthy" value', () => {
    expect(utils.exists(0))
      .toBe(true)

    expect(utils.exists(1))
      .toBe(true)

    expect(utils.exists(-1))
      .toBe(true)

    expect(utils.exists(true))
      .toBe(true)

    expect(utils.exists(false))
      .toBe(true)

    expect(utils.exists(''))
      .toBe(true)

    expect(utils.exists('TEST'))
      .toBe(true)

    expect(utils.exists([]))
      .toBe(true)

    expect(utils.exists({}))
      .toBe(true)
  })

  // =======================================
  // Test for `null` and `undefined` values.
  // =======================================

  it('handles `null` and `undefined` values', () => {
    expect(utils.exists(null))
      .toBe(false)

    expect(utils.exists(undefined))
      .toBe(false)
  })
})
