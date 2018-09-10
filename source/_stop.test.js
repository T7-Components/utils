// Utility methods.
import utils from './'

// Describe test.
describe('utils.stop', () => {
  // ======================
  // Test for "stop" event.
  // ======================

  it('handles "stop" event', () => {
    // Dummy event.
    const event = {
      preventDefault: jest.fn(),
      stopPropagation: jest.fn()
    }

    // Fire event.
    utils.stop(event)

    expect(event.preventDefault)
      .toBeCalled()

    expect(event.stopPropagation)
      .toBeCalled()
  })
})
