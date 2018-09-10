# utils

"utils" is a collection of utilities that have been currated from multiple projects to perform simple targeted tasks.

The entire library can be imported (`import utils from 'utils'`) or individual utilities can be imported as needed to keep production code bases as small as possible (`import { ajax, log } from 'utils'`).


Available utilities:
- bind: bind is a ReactJs specific utility that will bind all inline functions withing a module to the "this" context.  
eg. `utils.bind()` vs `myfunction = this.myfunction.bind(this)`  
- convert_content-editable: dynaically applies the `contentEditable` attribute to an HTML element  

- convert_content_focused: converts text, when "content editable" is focused  
- convert_on_paste: converts text to `contentEditable` format when pasted from clipboard  

- convert_to_markup: converts plain text received from an API call for use in a `contentEditable` area  
- convert_to_text: convert innerHTML content to plain text  
- exists: verifies that a `variable` exists (is not equal to `undefined` or `null`)  
- get_data_by_name: Loops through an array, and returns child object with matching `*.name`  
- log: a helper function for `console.log` (especially usefull if linting rules forbid the use of `console.log`)  

- navigate: method for navigating React routes  
eg. `utils.navigate([ 'users', userId, 'items', itemId ])`  

- parse_form_data: Parses all inputs in a `<form>` and returns a formatted object  

- path: generate React routes  
eg. `const url = utils.path(['users', userId, 'items', itemId`  
- placeholder: a "faux" placeholder  
- regex: a helper function to "escape" a string or an array of strings  
- save: allows you to save data as a `console.json` file (similar to `npm` package `console.json`)  
- stop: calls `preventDefault` and `stopPropagation` for event callback functions  
- storage: provides `get`, `set` and `clear` functions for `localStorage`  
- title: dynamically constructs/assignes a page title  
- today: returns 1 day, in milliseconds  
- trim: helper for JavaScript `trim` function (ensures that the value is a valid string)  
- unique: helper to return a unique string (useful for generating unique keys)  
