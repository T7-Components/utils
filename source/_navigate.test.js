// Utility methods.
import utils from './'

// Describe test.
describe('utils.navigate', () => {
  // ==========================
  // Test for "navigate" event.
  // ==========================

  it('handles "navigate" event', () => {
    utils.navigate('TEST')

    expect(window.location.hash)
      .toBe('#/TEST')
  })
})
