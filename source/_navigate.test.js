// Dependencies.
import { navigate } from './'

// Describe test.
describe('navigate', () => {
  // ==========================
  // Test for "navigate" event.
  // ==========================

  it('handles "navigate" event', () => {
    navigate('TEST')

    expect(window.location.hash)
      .toBe('#/TEST')
  })
})
