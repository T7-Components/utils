// Dependencies.
import { contentToMarkup } from './'

// Describe test.
describe('contentToMarkup', () => {
  // =============
  // Dummy values.
  // =============

  const EXAMPLE_VALUE_HTML =
    ' <p>TEST\nTEST\nTEST</p> '

  const EXAMPLE_VALUE_STRING =
    '&lt;p&gt;TEST<br>TEST<br>TEST&lt;/p&gt;'

  // ======================
  // Test for `edit` event.
  // ======================

  it('handles `edit` event', () => {
    // Fire event.
    const value =
      contentToMarkup(EXAMPLE_VALUE_HTML)

    expect(value)
      .toBe(EXAMPLE_VALUE_STRING)
  })
})
