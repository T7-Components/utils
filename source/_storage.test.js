// Utility methods.
import utils from './'

// Describe test.
describe('utils.storage', () => {
  // =========================
  // Test for `set` and `get`.
  // =========================

  it('handles `set` and `get` methods', () => {
    // Key/value.
    const KEY = 'KEY'

    const VALUE = {
      foo: 1,
      bar: true,
      baz: false
    }

    // Set.
    utils.storage.set(KEY, VALUE)

    expect(utils.storage.get(KEY))
      .toEqual(VALUE)
  })

  // ==================
  // Test for `remove`.
  // ==================

  it('handles `remove` method', () => {
    // Key/value.
    const KEY = 'KEY'
    const VALUE = 'VALUE'

    // Set.
    utils.storage.set(KEY, VALUE)

    expect(utils.storage.get(KEY))
      .toBe(VALUE)

    // Remove.
    utils.storage.remove(KEY)

    expect(utils.storage.get(KEY))
      .toBe(undefined)
  })

  // ==================
  // Test for `clear`.
  // ==================

  it('handles `clear` method', () => {
    // Key/value.
    const KEY_1 = 'KEY_1'
    const KEY_2 = 'KEY_2'
    const VALUE_1 = 'VALUE_1'
    const VALUE_2 = 'VALUE_2'

    // Set.
    utils.storage.set(KEY_1, VALUE_1)
    utils.storage.set(KEY_2, VALUE_2)

    expect(utils.storage.get(KEY_1))
      .toBe(VALUE_1)

    expect(utils.storage.get(KEY_2))
      .toBe(VALUE_2)

    // Clear.
    utils.storage.clear()

    expect(utils.storage.get(KEY_1))
      .toBe(undefined)

    expect(utils.storage.get(KEY_2))
      .toBe(undefined)
  })

  // ==========================
  // Test for "protected" keys.
  // ==========================

  it('handles "protected" keys', () => {
    // Key/value.
    const VALUE = 'VALUE'

    expect(() => {
      utils.storage.set('clear', VALUE)
    }).toThrow()

    expect(() => {
      utils.storage.set('getItem', VALUE)
    }).toThrow()

    expect(() => {
      utils.storage.set('key', VALUE)
    }).toThrow()

    expect(() => {
      utils.storage.set('length', VALUE)
    }).toThrow()

    expect(() => {
      utils.storage.set('removeItem', VALUE)
    }).toThrow()

    expect(() => {
      utils.storage.set('setItem', VALUE)
    }).toThrow()
  })
})
