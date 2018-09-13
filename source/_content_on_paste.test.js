// Dependencies.
import {
  contentOnPaste,
  trimMultiLine
} from './'

// Fake timers.
jest.useFakeTimers()

// Describe test.
describe('contentOnPaste', () => {
  // ======
  // Reset.
  // ======

  beforeEach(() => {
    document.documentMode = null
    document.execCommand = null
    document.selection = null
    window.clipboardData = null
  })

  // =============
  // Dummy values.
  // =============

  const EMPTY_VALUE = ''

  const EXAMPLE_VALUE =
    'TEST\n TEST\n TEST'

  const EXAMPLE_VALUE_HTML =
    'TEST<br> TEST<br> TEST'

  // ==========
  // Overrides.
  // ==========

  Object.defineProperty(document, 'createElement', {
    writable: true,
    value: (tagName) => {
      if (tagName === 'textarea') {
        return {
          innerText: EXAMPLE_VALUE
        }
      }
    }
  })

  // ==========================
  // Test for IE `paste` event.
  // ==========================

  it('handles IE `paste` event', () => {
    // Overrides.
    document.documentMode = 8
    const pasteHTML = jest.fn()

    document.selection = {
      createRange: () => {
        return {
          pasteHTML
        }
      }
    }

    window.clipboardData = {
      getData: (x) => {
        if (x === 'text') {
          return EXAMPLE_VALUE
        }
      }
    }

    // Dummy event.
    const event = {}

    // Fire event.
    contentOnPaste(event)

    expect(pasteHTML)
      .toBeCalledWith(
        EXAMPLE_VALUE_HTML
      )
  })

  // ==============================
  // Test for non-IE `paste` event.
  // ==============================

  it('handles non-IE `paste` event', () => {
    // Overrides.
    document.execCommand = jest.fn()

    // Dummy event.
    const event = {
      clipboardData: {
        getData: (x) => {
          if (x === 'text/plain') {
            return EXAMPLE_VALUE
          }
        }
      }
    }

    // Fire event.
    contentOnPaste(event)

    expect(document.execCommand)
      .toBeCalledWith(
        'insertText',
        false,
        EXAMPLE_VALUE
      )
  })

  // ================================
  // Test for fallback `paste` event.
  // ================================

  it('handles fallback `paste` event', () => {
    // Dummy event.
    const event = {
      clipboardData: {
        getData: (x) => {
          if (x === 'text/plain') {
            return EMPTY_VALUE
          }
        }
      },
      target: {
        // Add extra space.
        innerText: ' ' + EXAMPLE_VALUE + ' '
      }
    }

    // Fire event.
    contentOnPaste(event)

    // Fast-forward.
    jest.runOnlyPendingTimers()

    expect(event.target.innerText)
      .toBe(trimMultiLine(EXAMPLE_VALUE))
  })
})
