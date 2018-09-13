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
    expect(trimMultiLine('  FOO  BAR  '))
      .toBe('FOO BAR')
  })

  // ===================================
  // Test for "multi-line" string value.
  // ===================================

  it('handles "multi-line" string value', () => {
    const BEFORE = '  FOO  \n \n  BAR  '
    const AFTER = 'FOO \n\n BAR'

    expect(trimMultiLine(BEFORE))
      .toBe(AFTER)
  })
})
