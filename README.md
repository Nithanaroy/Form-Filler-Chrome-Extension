# Form Filler Chrome Extension

Fill forms quickly with dynamic information

## Installation
- Download / Clone / Fork this repo
- Follows standard Chrome extension naming conventions
- Install in chrome using [https://developer.chrome.com/extensions/getstarted#unpacked](https://developer.chrome.com/extensions/getstarted#unpacked)

## Usage
- The forms that are to be filled should have form label `innerText` as Keys in the JSON input. The value however changes based on form field type.
	- For textbox, value in JSON will be value of the textbox
	- For each checkbox, this is to be checked, it should be true. Also each check box should be its own key
	- For select, option's `innerText` should be value
