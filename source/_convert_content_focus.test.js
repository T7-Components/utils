// Utility methods.
import utils from './'

// Describe test.
describe('utils.convertContentFocus', () => {
  // =============
  // Dummy values.
  // =============

  const DIV_PLACEHOLDER = 'DIV_PLACEHOLDER'

  // =============
  // Dummy events.
  // =============

  const event = {
    target: {
      innerHTML: DIV_PLACEHOLDER,
      getAttribute: (attr) => {
        if (attr === 'placeholder') {
          return DIV_PLACEHOLDER
        }
      }
    }
  }

  // ======================
  // Test for `edit` event.
  // ======================

  it('handles `edit` event', () => {
    // Fire event.
    utils.convertContentFocus(event)

    expect(event.target.innerHTML)
      .toBe('')
  })
})
