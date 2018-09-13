// Dependencies.
import {
  contentToText,
  trim
} from './'

// Describe test.
describe('contentToText', () => {
  // =============
  // Dummy values.
  // =============

  const EXAMPLE_VALUE_HTML = trim(`
    <b>
      <em>
        <i>
          <strong>
            <u>
              TEST<br>
              TEST<div></div>
              TEST
              <p>
                TEST
              </p>
            </u>
          </strong>
        <i>
      </em>
    </b>
  `)

  const EXAMPLE_VALUE_STRING =
    'TEST\nTEST\nTEST\nTEST'

  // ======================
  // Test for `edit` event.
  // ======================

  it('handles `edit` event', () => {
    // Fire event.
    const value =
      contentToText(EXAMPLE_VALUE_HTML)

    expect(value)
      .toBe(EXAMPLE_VALUE_STRING)
  })
})
