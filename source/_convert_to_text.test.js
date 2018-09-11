// Utility methods.
import utils from './'

// Describe test.
describe('utils.convertToText', () => {
  // =============
  // Dummy values.
  // =============

  const EXAMPLE_VALUE_HTML = utils.trim(`
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
      utils.convertToText(EXAMPLE_VALUE_HTML)

    expect(value)
      .toBe(EXAMPLE_VALUE_STRING)
  })
})
