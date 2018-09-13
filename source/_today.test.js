// Dependencies.
import { today } from './'

// Describe test.
describe('today', () => {
  // One day, in milliseconds.
  const oneDay = 86400000

  // =======================
  // Test for "TODAY" value.
  // =======================

  it('handles "TODAY" value', () => {
    const TODAY = today()
    const NOW = new Date().getTime()

    expect(NOW >= TODAY)
      .toBe(true)
  })

  // ===========================
  // Test for "YESTERDAY" value.
  // ===========================

  it('handles "YESTERDAY" value', () => {
    const TODAY = today()
    const YESTERDAY = today(-1)
    const diff = TODAY - YESTERDAY

    expect(diff >= oneDay)
      .toBe(true)
  })

  // ==========================
  // Test for "TOMORROW" value.
  // ==========================

  it('handles "TOMORROW" value', () => {
    const TODAY = today()
    const TOMORROW = today(+1)
    const diff = TOMORROW - TODAY

    expect(diff >= oneDay)
      .toBe(true)
  })
})
