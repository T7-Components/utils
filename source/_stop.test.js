// Dependencies.
import { stop } from './'

// Describe test.
describe('stop', () => {
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
    stop(event)

    expect(event.preventDefault)
      .toBeCalled()

    expect(event.stopPropagation)
      .toBeCalled()
  })
})
