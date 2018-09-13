// Dependencies.
import { regex } from './'

// Describe test.
describe('regex', () => {
  // ======================
  // Test for string value.
  // ======================

  it('handles string value', () => {
    const r = regex('ABC?')

    expect(r)
      .toEqual(/ABC\?/g)
  })

  // =====================
  // Test for array value.
  // =====================

  it('handles array value', () => {
    const r = regex([
      'ABC?',
      'XYZ?'
    ])

    expect(r)
      .toEqual(/ABC\?|XYZ\?/g)
  })
})
