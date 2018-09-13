// Dependencies.
import { trimMultiLine } from './'

// Describe test.
describe('trimMultiLine', () => {
  // ================================
  // Test for `null` and `undefined`.
  // ================================

  it('handles `null` and `undefined`', () => {
    expect(trimMultiLine(null))
      .toBe('')

    expect(trimMultiLine(undefined))
      .toBe('')
  })

  // ====================================
  // Test for "single line" string value.
  // ====================================

  it('handles "single line" string value', () => {
    const OLD = '  FOO  BAR  '
    const NEW = 'FOO BAR'

    expect(trimMultiLine(OLD))
      .toBe(NEW)
  })

  // ===================================
  // Test for "multi-line" string value.
  // ===================================

  it('handles "multi-line" string value', () => {
    const OLD = '  FOO  \n \n  BAR  '
    const NEW = 'FOO \n\n BAR'

    expect(trimMultiLine(OLD))
      .toBe(NEW)
  })
})
