// Dependencies.
import { save } from './'

// Describe test.
describe('save', () => {
  // =============
  // Unhappy path.
  // =============

  Object.defineProperty(window, 'Blob', {
    writable: true,
    value: null
  })

  Object.defineProperty(window.URL, 'createObjectURL', {
    writable: true,
    value: null
  })

  Object.defineProperty(document, 'createElement', {
    writable: true,
    value: null
  })

  Object.defineProperty(document, 'createEvent', {
    writable: true,
    value: null
  })

  // Fire, for coverage.
  save()

  // =============
  // Dummy values.
  // =============

  const EXAMPLE_BLOB = 'EXAMPLE_BLOB'
  const EXAMPLE_NAME = 'FILE_NAME.json'
  const EXAMPLE_TYPE = 'text/json'

  const EXAMPLE_DATA = {
    foo: 1
  }

  const EXAMPLE_EVENT = {
    initMouseEvent: jest.fn()
  }

  // ========
  // Tracker.
  // ========

  const TRACKER = {
    dataset: {},
    dispatchEvent: jest.fn()
  }

  // ==========
  // Overrides.
  // ==========

  Object.defineProperty(window, 'Blob', {
    writable: true,
    value: (arr = [], obj = {}) => {
      TRACKER.json = arr[0]
      TRACKER.type = obj.type
    }
  })

  Object.defineProperty(window.URL, 'createObjectURL', {
    writable: true,
    value: () => {
      return EXAMPLE_BLOB
    }
  })

  Object.defineProperty(document, 'createElement', {
    writable: true,
    value: (tagName) => {
      TRACKER.tagName = tagName
      return TRACKER
    }
  })

  Object.defineProperty(document, 'createEvent', {
    writable: true,
    value: () => {
      return EXAMPLE_EVENT
    }
  })

  // ======================
  // Test for "save" event.
  // ======================

  it('handles "save" event', () => {
    // Fire event.
    save(EXAMPLE_DATA, EXAMPLE_NAME)

    expect(JSON.parse(TRACKER.json))
      .toEqual(EXAMPLE_DATA)

    expect(TRACKER.type)
      .toBe(EXAMPLE_TYPE)

    expect(TRACKER.dataset.downloadurl)
      .toBe([
        EXAMPLE_TYPE,
        EXAMPLE_NAME,
        EXAMPLE_BLOB
      ].join(':'))

    expect(EXAMPLE_EVENT.initMouseEvent)
      .toBeCalledWith(
        'click',
        true,
        false,
        window,
        0,
        0,
        0,
        0,
        0,
        false,
        false,
        false,
        false,
        0,
        null
      )
  })
})
