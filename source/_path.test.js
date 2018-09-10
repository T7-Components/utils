// Utility methods.
import utils from './'

// Describe test.
describe('utils.path', () => {
  // ======
  // Reset.
  // ======

  beforeEach(() => {
    window.location.hash =
      '#/DEFAULT?cache-buster=true'
  })

  // =====================
  // Test for blank value.
  // =====================

  it('handles blank value', () => {
    const URL = utils.path()

    expect(URL)
      .toBe('#/DEFAULT')
  })

  // ======================
  // Test for string value.
  // ======================

  it('handles string value', () => {
    const URL = utils.path('TEST')

    expect(URL)
      .toBe('#/TEST')
  })

  // =====================
  // Test for array value.
  // =====================

  it('handles array value', () => {
    const URL = utils.path([
      'UNO',
      'DOS'
    ])

    expect(URL)
      .toBe('#/UNO/DOS')
  })

  // ========================
  // Test for arguments list.
  // ========================

  it('handles arguments list', () => {
    const URL = utils.path(
      'UNO',
      'DOS'
    )

    expect(URL)
      .toBe('#/UNO/DOS')
  })
})
