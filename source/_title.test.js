// Dependencies.
import { title } from './'

// Describe test.
describe('title', () => {
  // Dummy value.
  const TEST_TITLE = 'TEST_TITLE'
  const TEST_SUFFIX = 'TEST_SUFFIX'

  // Helper.
  const setSuffix = () => {
    document
      .querySelector('title')
      .setAttribute('data-suffix', TEST_SUFFIX)
  }

  // ============
  // Reset title.
  // ============

  beforeEach(() => {
    // Create tag.
    document.head.innerHTML = '<title></title>'

    // Clear text.
    document.title = ''
  })

  // ======================
  // Test for title change.
  // ======================

  it('handles title change', () => {
    title(TEST_TITLE)

    expect(document.title)
      .toBe(TEST_TITLE)
  })

  // ===========================
  // Test for title with suffix.
  // ===========================

  it('handles title with suffix', () => {
    setSuffix()

    title(TEST_TITLE)

    expect(document.title)
      .toBe(
        [
          TEST_TITLE,
          TEST_SUFFIX
        ].join(' | ')
      )
  })

  // =========================
  // Test for suffix fallback.
  // =========================

  it('handles suffix fallback', () => {
    setSuffix()

    title()

    expect(document.title)
      .toBe(TEST_SUFFIX)
  })
})
