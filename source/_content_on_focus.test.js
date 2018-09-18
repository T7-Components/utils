// Dependencies.
import { contentOnFocus } from './'

// Describe test.
describe('contentOnFocus', () => {
  // =============
  // Dummy values.
  // =============

  const DIV_PLACEHOLDER = 'DIV_PLACEHOLDER'

  // =============
  // Dummy events.
  // =============

  const event = {
    currentTarget: {
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
    contentOnFocus(event)

    expect(event.currentTarget.innerHTML)
      .toBe('')
  })
})
