// Utility methods.
import utils from './'

// Describe test.
describe('utils.parseFormData', () => {
  // ============
  // Dummy names.
  // ============

  const CHECKBOX_1_NAME =
    'CHECKBOX_1_NAME'

  const INPUT_1_NAME =
    'INPUT_1_NAME'

  const INPUT_2_NAME =
    'INPUT_2_NAME'

  const RADIO_1_NAME =
    'RADIO_1_NAME'

  const SELECT_1_NAME =
    'SELECT_1_NAME'

  const TEXT_AREA_1_NAME =
    'TEXT_AREA_1_NAME'

  const TEXT_DIV_1_NAME =
    'TEXT_DIV_1_NAME'

  const TEXT_DIV_2_NAME =
    'TEXT_DIV_2_NAME'

  // =============
  // Dummy values.
  // =============

  const CHECKBOX_1_VALUE =
    'CHECKBOX_1_VALUE'

  const INPUT_1_VALUE =
    'INPUT_1_VALUE'

  const INPUT_2_VALUE =
    'INPUT_2_VALUE'

  const RADIO_1_VALUE =
    'RADIO_1_VALUE'

  const SELECT_1_VALUE =
    'SELECT_1_VALUE'

  const TEXT_AREA_1_VALUE =
    'TEXT_AREA_1_VALUE'

  const TEXT_DIV_1_VALUE =
    'TEXT_DIV_1_VALUE'

  const TEST_DIV_2_PLACEHOLDER =
    'TEST_DIV_2_PLACEHOLDER'

  // ===========
  // Dummy HTML.
  // ===========

  document.body.innerHTML = `
    <form>

      <input
        name="${INPUT_1_NAME}"
        value="${INPUT_1_VALUE}"
        type="text"
      />

      <input
        name="${INPUT_2_NAME}"
        value="${INPUT_2_VALUE}"
        disabled="disabled"
        type="text"
      />

      <input
        name="${CHECKBOX_1_NAME}"
        value="${CHECKBOX_1_VALUE}"
        type="checkbox"
        checked="checked"
      />

      <input
        name="${RADIO_1_NAME}"
        value="${RADIO_1_VALUE}"
        type="radio"
        checked="checked"
      />

      <select
        name="${SELECT_1_NAME}"
      >
        <option
          value="${SELECT_1_VALUE}"
          selected="selected"
        ></option>
      </select>

      <textarea
        name="${TEXT_AREA_1_NAME}"
      >${TEXT_AREA_1_VALUE}</textarea>

      <div
        name="${TEXT_DIV_1_NAME}"
        contenteditable="true"
      >${TEXT_DIV_1_VALUE}</div>

      <div
        name="${TEXT_DIV_2_NAME}"
        placeholder="${TEST_DIV_2_PLACEHOLDER}"
        contenteditable="true"
      >${TEST_DIV_2_PLACEHOLDER}</div>

    </form>
  `

  // ================
  // Expected result.
  // ================

  const DATA_RESULT = [
    {
      name: INPUT_1_NAME,
      value: INPUT_1_VALUE
    },
    {
      name: CHECKBOX_1_NAME,
      value: CHECKBOX_1_VALUE,
      checked: true
    },
    {
      name: RADIO_1_NAME,
      value: RADIO_1_VALUE,
      checked: true
    },
    {
      name: SELECT_1_NAME,
      value: SELECT_1_VALUE
    },
    {
      name: TEXT_AREA_1_NAME,
      value: TEXT_AREA_1_VALUE
    },
    {
      name: TEXT_DIV_1_NAME,
      value: TEXT_DIV_1_VALUE
    },
    {
      name: TEXT_DIV_2_NAME,
      value: ''
    }
  ]

  // ============
  // Get content.
  // ============

  const form = document.querySelector('form')

  // =====================
  // Test for data output.
  // =====================

  it('handles data output', () => {
    const data =
      utils.parseFormData(form)

    expect(data)
      .toEqual(DATA_RESULT)
  })
})
