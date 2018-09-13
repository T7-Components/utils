// Dependencies.
import { storage } from './'

// Describe test.
describe('storage', () => {
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
    storage.set(KEY, VALUE)

    expect(storage.get(KEY))
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
    storage.set(KEY, VALUE)

    expect(storage.get(KEY))
      .toBe(VALUE)

    // Remove.
    storage.remove(KEY)

    expect(storage.get(KEY))
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
    storage.set(KEY_1, VALUE_1)
    storage.set(KEY_2, VALUE_2)

    expect(storage.get(KEY_1))
      .toBe(VALUE_1)

    expect(storage.get(KEY_2))
      .toBe(VALUE_2)

    // Clear.
    storage.clear()

    expect(storage.get(KEY_1))
      .toBe(undefined)

    expect(storage.get(KEY_2))
      .toBe(undefined)
  })

  // ==========================
  // Test for "protected" keys.
  // ==========================

  it('handles "protected" keys', () => {
    // Key/value.
    const VALUE = 'VALUE'

    expect(() => {
      storage.set('clear', VALUE)
    }).toThrow()

    expect(() => {
      storage.set('getItem', VALUE)
    }).toThrow()

    expect(() => {
      storage.set('key', VALUE)
    }).toThrow()

    expect(() => {
      storage.set('length', VALUE)
    }).toThrow()

    expect(() => {
      storage.set('removeItem', VALUE)
    }).toThrow()

    expect(() => {
      storage.set('setItem', VALUE)
    }).toThrow()
  })
})
