zipcelx
=======

Generate XLSX files in the browser, with minimal footprint. The vision is to provide the smallest possible package for generating valid XLSX files in the browser.

If you're looking for advanced functionality, [js-xlsx](https://github.com/SheetJS/js-xlsx) is a solid choice.

## Table of contents
1. [How to use](https://github.com/dixieio/zipcelx/wiki/How-to-use)
2. [The config object](https://github.com/dixieio/zipcelx/wiki/The-config-object)
3. [Contributing](https://github.com/dixieio/zipcelx/wiki/Contributing)

## Dates
Format of dates based on [this](http://www.cpearson.com/excel/datetime.htm) article, where it says that date in xlsx files is the number of days since 1/1/1900 (serial date). Datetime can be implemented by using the format `ddddd.tttttt`, where d is calculated as the date format and t is the fractional part of a 24h day. Time as far as I understand could be implemented by using `0.tttttt`

This fork adds support for the following:
* [x] Date: Use type "date". It uses the number
* [ ] Datetime
* [ ] Time
## Issues
Should it happen that the tool broke down on you please head to our [Issue tracker](https://github.com/dixieio/zipcelx/issues)
1. Search if the issue is already discussed or explained.
2. If no luck feel free to open a new issue and we will get back to you as soon as possible.
