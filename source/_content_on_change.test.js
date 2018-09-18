// Dependencies.
import { contentOnChange } from './'

// Describe test.
describe('contentOnChange', () => {
  // =============
  // Dummy values.
  // =============

  const DIV_HTML_RAW = '<b>DIV_HTML</b>'
  const DIV_HTML_PARSED = 'DIV_HTML'
  const DIV_PLACEHOLDER = 'DIV_PLACEHOLDER'

  // =============
  // Dummy events.
  // =============

  const event = {
    type: 'blur',
    currentTarget: {
      innerHTML: DIV_HTML_RAW,
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
    contentOnChange(event)

    expect(event.currentTarget.innerHTML)
      .toBe(DIV_HTML_PARSED)
  })
})
