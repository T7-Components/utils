// Utility methods.
import utils from './'

// Describe test.
describe('utils.today', () => {
  // One day, in milliseconds.
  const oneDay = 86400000

  // =======================
  // Test for "today" value.
  // =======================

  it('handles "today" value', () => {
    const isEqual = (
      utils.today() ===
        new Date().getTime()
    )

    expect(isEqual)
      .toBe(true)
  })

  // ===========================
  // Test for "yesterday" value.
  // ===========================

  it('handles "yesterday" value', () => {
    const today = utils.today()
    const yesterday = utils.today(-1)
    const diff = today - yesterday

    expect(today)
      .toBeGreaterThan(yesterday)

    expect(diff === oneDay)
      .toBe(true)
  })

  // ==========================
  // Test for "tomorrow" value.
  // ==========================

  it('handles "tomorrow" value', () => {
    const today = utils.today()
    const tomorrow = utils.today(+1)
    const diff = tomorrow - today

    expect(today)
      .toBeLessThan(tomorrow)

    expect(diff === oneDay)
      .toBe(true)
  })
})
