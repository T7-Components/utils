// Dependencies.
import { path } from './'

// Describe test.
describe('path', () => {
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
    const URL = path()

    expect(URL)
      .toBe('#/DEFAULT')
  })

  // ======================
  // Test for string value.
  // ======================

  it('handles string value', () => {
    const URL = path('TEST')

    expect(URL)
      .toBe('#/TEST')
  })

  // =====================
  // Test for array value.
  // =====================

  it('handles array value', () => {
    const URL = path([
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
    const URL = path(
      'UNO',
      'DOS'
    )

    expect(URL)
      .toBe('#/UNO/DOS')
  })
})
