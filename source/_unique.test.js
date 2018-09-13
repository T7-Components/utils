// Dependencies.
import { unique } from './'

// Describe test.
describe('unique', () => {
  // ======================
  // Test for string value.
  // ======================

  it('generates a string value', () => {
    // Get values.
    const value1 = unique()
    const value2 = unique()

    // Has a separator?
    expect(value1)
      .toContain('_')

    // Truly unique?
    expect(value1)
      .not
      .toBe(value2)

    // Mostly numeric?
    expect(
      isNaN(
        parseFloat(
          value1.replace(/_/g, '')
        )
      )
    ).toBe(false)
  })
})
