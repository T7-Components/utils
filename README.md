# @t7/utils

```
npm install @t7/utils --save-dev
```

https://www.npmjs.com/package/@t7/utils

T7's "utils" is a collection of utilities that have been curated from multiple projects to perform simple targeted tasks.

The entire library can be imported…

```
import utils from '@t7/utils'
```

Or, individual utilities can be imported as needed to keep the production code base as small as possible…

```
import { exists } from '@t7/utils'
```

## Available utilities:

### `utils.bind`

A helper to bind React `class` methods, rather than typing `this.foo = this.foo.bind(this)` repeatedly.

```
constructor (props) {
  super(props)

  // Bind context.
  utils.bind(this)
}
```

---

### `utils.convertContentEditable`

Handles an `onChange` event in `[contenteditable="true"]`, normalizing browser inconsistencies in the HTML.

---

### `utils.convertContentFocused`

Handles an `onFocus` event in `[contenteditable="true"]`, clearing out `placeholder="…"` content.

---

### `utils.convertOnPaste`

Handles an `onPaste` event in `[contenteditable="true"]`, changes pasted text into `<br>` separated new lines.

---

### `utils.convertToMarkup`

Used within `utils.convertContentEditable` to sanitize HTML content into a simpler `<textarea>` textual format.

---

### `utils.convertToText`

Used within `utils.convertContentEditable` to strip "rich text" formatting, and ensure consistent HTML output.

---

### `utils.exists`

Used to ensure that a variable exists. For example: `''` and `0` pass, but `undefined` and `null` do not.

```
// Yields: `true`.
utils.exists(0)

// Yields: `true`.
utils.exists('')

// Yields: `true`.
utils.exists(false)

// Yields: `false`.
utils.exists(null)

// Yields: `false`.
utils.exists(undefined)
```

---

### `utils.navigate`

This will take parameters, or an array, and redirect to a URL hash.

```
// Redirects to: "#/users/A1B2C3".
utils.navigate('users', userID)
```

---

### `utils.path`

This will take parameters, or an array, and return a URL hash. It is used internally by `utils.navigate`.

```
// Yields string: "#/users/A1B2C3".
utils.path('users', userID)
```

---

### `utils.parseFormData`

This will harvest all inputs in a `<form>` by their `name="…"` and return an array of objects representing their data. It will skip elements that are `disabled`.

```
const formData = utils.parseFormData(form)

/*
  [
    {
      name: 'input_id',
      value: 'text here'
    },
    {
      name: 'checkbox_id',
      value: 'checkbox value',
      checked: true
    }
  ]
*/

console.log(formData)
```

---

### `utils.regex`

Helper function to "escape" a string or an array of strings, so that one need not memorize all special character cases.

```
const r = utils.regex('Hello world. What?')

// Yields: /Hello world\. What\?/g
console.log(r)
```

---

### `utils.save`

Allows you to save data to a `*.json` file that would otherwise be cumbersome to traverse via `console.log`.

```
const data = {
  foo: 1,
  bar: 1
}

// Causes a file download.
utils.save(data, 'file_name.json')
```

---

### `utils.stop`

This will call `*.preventDefault` and `*.stopPropagation` on an event, if they exist.

```
handleClick (e) {
  utils.stop(e)

  // Etc.
}
```

---

### `utils.storage`

This provides a proxy to `localStorage` and falls back to an in-memory object if it's not supported. For instance, older versions of Safari in private browing mode would report support for `localStorage` but wouldn't actually work correctly in practice. By contrast, `utils.storage.get` works regardless.

It also retrieves data as the correct type, whereas getting and setting directly with `localStorage` only uses strings.

```
// Setting a number `1`.
localStorage.setItem('foo', 1)

// Returns a string of "1".
localStorage.getItem('foo')

// Setting a number `1`.
utils.storage.set('foo', 1)

// Returns a number `1`.
utils.storage.get('foo')
```

Functionally, the `clear` and `remove` methods are the same.

```
// Functionally identical.
localStorage.removeItem('foo')
utils.storage.remove('foo')
```

```
// Functionally identical.
localStorage.clear()
utils.storage.clear()
```

---

### `utils.title`

This dynamically sets the page title. This can be helpful in React apps, where the `<head>` of a parent page is not directly in the React render tree. It will optionally read from `<title data-suffix="…">` to append a site name, etc.

```
// With this HTML:
<title data-suffix="ACME Inc."></title>

// Running this:
utils.title('About Us')

// Yields this:
<title data-suffix="ACME Inc.">
About Us | ACME Inc.
</title>
```

---

### `utils.today`

This method returns "today" in milliseconds, if called without an argument. If a non-zero number is passed, it will provide an offset from today.

```
// Today.
utils.today()

// Also today.
utils.today(0)

// Yesterday.
utils.today(-1)

// Tomorrow.
utils.today(+1)
```

---

### `utils.trim`

This method will do a typical `string.trim()` but will also replace continuous spaces with a single space. This is helpful for cleaning up strings that are going into markup, where more than one space is treated as a single space anyway.

```
// Yields: "A B C".
utils.trim('  A  B  C  ')
```

---

### `utils.unique`

This generates a unique string. It can be helpful when attempting to have a matching `<label for="…">` and `<input id="…">` where the actual string doesn't matter, as long as the two are correlated for accessibility.

```
render () {
  // Yields: "1536711203446_28184486614563675"
  const id = utils.unique()

  return (
    <p>
      <label htmlFor={id}>
        First name
      </label>
      <input
        id={id}
        type='text'
        name='firstName'
        value={firstName}
      />
    </p>
  )
}
```