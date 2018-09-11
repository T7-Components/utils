/*
  This file exists so that we can handle all
  importing and exporting in a single file,
  but still use `index.js` to make methods
  available individually and as a bundle.

  It allows for different use cases:

  ```
  import utils from '@t7/utils'
  ```

  OR:

  ```
  import { bind, trim } from '@t7/utils'
  ```
*/

// Import all.
import bind from './_bind'
import convertContentEditable from './_convert_content_editable'
import convertContentFocus from './_convert_content_focus'
import convertOnPaste from './_convert_on_paste'
import convertToMarkup from './_convert_to_markup'
import convertToText from './_convert_to_text'
import exists from './_exists'
import navigate from './_navigate'
import parseFormData from './_parse_form_data'
import path from './_path'
import regex from './_regex'
import save from './_save'
import stop from './_stop'
import storage from './_storage'
import title from './_title'
import today from './_today'
import trim from './_trim'
import unique from './_unique'

// Export all.
export {
  bind,
  convertContentEditable,
  convertContentFocus,
  convertOnPaste,
  convertToMarkup,
  convertToText,
  exists,
  navigate,
  parseFormData,
  path,
  regex,
  save,
  stop,
  storage,
  title,
  today,
  trim,
  unique
}
