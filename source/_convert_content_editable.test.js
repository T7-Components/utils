// Utility methods.
import utils from './'

// Describe test.
describe('utils.convertContentEditable', () => {
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
    target: {
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
    utils.convertContentEditable(event)

    expect(event.target.innerHTML)
      .toBe(DIV_HTML_PARSED)
  })
})
