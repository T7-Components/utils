// Import individual files.
import bind from './_bind'
import convertContentEditable from './_convert_content_editable'
import convertContentFocus from './_convert_content_focus'
import convertOnPaste from './_convert_on_paste'
import convertToMarkup from './_convert_to_markup'
import convertToText from './_convert_to_text'
import exists from './_exists'
import getDataByName from './_get_data_by_name'
import navigate from './_navigate'
import parseFormData from './_parse_form_data'
import path from './_path'
import placeholder from './_placeholder'
import regex from './_regex'
import save from './_save'
import stop from './_stop'
import storage from './_storage'
import title from './_title'
import today from './_today'
import trim from './_trim'
import unique from './_unique'

// Bundle up methods.
const utils = {
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
  placeholder,
  regex,
  save,
  stop,
  storage,
  title,
  today,
  trim,
  unique
}

export {
  bind,
  convertContentEditable,
  convertContentFocus,
  convertOnPaste,
  convertToMarkup,
  convertToText,
  exists,
  getDataByName,
  navigate,
  parseFormData,
  path,
  placeholder,
  regex,
  save,
  stop,
  storage,
  title,
  today,
  trim,
  unique
}

// Expose object.
export default utils
