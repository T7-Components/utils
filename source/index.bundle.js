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
import contentOnChange from './_content_on_change'
import contentOnFocus from './_content_on_focus'
import contentOnPaste from './_content_on_paste'
import contentToMarkup from './_content_to_markup'
import contentToText from './_content_to_text'
import exists from './_exists'
import formatAlphanumeric from './_format_alphanumeric'
import formatDate from './_format_date'
import formatInteger from './_format_integer'
import formatMoneyDE from './_format_money_de'
import formatMoneyIN from './_format_money_in'
import formatMoneyJP from './_format_money_jp'
import formatMoneyKR from './_format_money_kr'
import formatMoneyUK from './_format_money_uk'
import formatMoneyUS from './_format_money_us'
import formatNumber from './_format_number'
import formatPhoneUS from './_format_phone_us'
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
import trimMultiLine from './_trim_multi_line'
import unique from './_unique'

// Export all.
export {
  bind,
  contentOnChange,
  contentOnFocus,
  contentOnPaste,
  contentToMarkup,
  contentToText,
  exists,
  formatAlphanumeric,
  formatDate,
  formatInteger,
  formatMoneyDE,
  formatMoneyIN,
  formatMoneyJP,
  formatMoneyKR,
  formatMoneyUK,
  formatMoneyUS,
  formatNumber,
  formatPhoneUS,
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
  trimMultiLine,
  unique
}
