// Utility methods.
import utils from './'

// Describe test.
describe('utils.regex', () => {
  // ======================
  // Test for string value.
  // ======================

  it('handles string value', () => {
    const regex = utils.regex('ABC?')

    expect(regex)
      .toEqual(/ABC\?/g)
  })

  // =====================
  // Test for array value.
  // =====================

  it('handles array value', () => {
    const regex = utils.regex([
      'ABC?',
      'XYZ?'
    ])

    expect(regex)
      .toEqual(/ABC\?|XYZ\?/g)
  })
})
