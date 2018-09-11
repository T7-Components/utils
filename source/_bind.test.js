// Utility methods.
import utils from './'

// Describe test.
describe('utils.bind', () => {
  // ============
  // Dummy class.
  // ============

  class F {
    example () {}
    setState () {}
  }

  // Spy.
  F.prototype.example.bind =
    jest.fn()

  F.prototype.setState.bind =
    jest.fn()

  // ======================
  // Test for "bind" event.
  // ======================

  it('handles "bind" event', () => {
    // Get instance.
    const f = new F()

    // Fire event.
    utils.bind(f)

    expect(F.prototype.example.bind)
      .toBeCalled()

    expect(F.prototype.setState.bind)
      .toBeCalled()
  })
})
