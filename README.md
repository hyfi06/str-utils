# @hyfi06/str-utils

A collection of string utility functions.

## Install

```bash
npm install --save @hyfi06/str-utils
```

## Usage

Here is an example of how to use the `sanitizeStr` function:

```javascript
const { sanitizeStr } = require("@hyfi06/str-utils");

const str = "  HéllO  my  friend!   ";
const config = { removeAccents: true, toUpperCase: true };
const result = sanitizeStr(str, config);

console.log(result); // Prints: 'HELLO MY FRIEND!'
```

## Functions

- [`areStringsSimilar(str1: string, str2: string): boolean`](#areStringsSimilar): Compares two strings for similarity. Removes leading, trailing, and duplicate spaces, removes accents, and converts the strings to uppercase before comparing them.
- [`multiReplace(str: string, replace: { [pattern: string]: string } = {}): string`](#multireplace): Replaces all occurrences of specified patterns in a given string.
- [`removeAccents(str: string): string`](#removeaccents): Removes all accents from a given string.
- [`removeSpaces(str: string): string`](#removespaces): Removes leading, trailing, and duplicate spaces in a given string.
- [`sanitizeJoin(array: any[], separator: string = " "): string`](#sanitizejoin): Joins an array into a string using a specified separator, ignoring any falsy values in the array. It also removes leading, trailing, and duplicate spaces from the resulting string.
- [`sanitizeStr(str: string, config: { removeAccents?: boolean, toUpperCase?: boolean } = {}): string`](#sanitizeStr): Processes a given string based on a configuration object. By default, it removes leading, trailing, and duplicate spaces. If the configuration object specifies, it can also remove accents and convert the string to uppercase.

### areStringsSimilar

The `areStringsSimilar` function compares two strings for similarity. It removes leading, trailing, and duplicate spaces, removes accents, and converts the strings to uppercase before comparing them.

#### Parameters

- `str1` (string): The first string to compare.
- `str2` (string): The second string to compare.

#### Returns

- (boolean): Returns `true` if the processed strings are equal, `false` otherwise.

#### Example

```javascript
const str1 = "  HéllO  my  friend!   ";
const str2 = "hello my friend!";
const result = areStringsSimilar(str1, str2);
// result is true
```

### multiReplace

The `multiReplace` function replaces all occurrences of the keys in the replace object with the corresponding values in the given string.

#### Parameters

- `str` (string): The string to perform replacements on.
- `replace` (object): An object where the keys are the patterns to be replaced and the values are the replacements. Defaults to an empty object.

#### Returns

- (string): A new string where all occurrences of the keys in the replace object in str have been replaced with the corresponding values.

#### Example

```javascript
const str = "foo biz baz";
const replace = {
  foo: "0",
  biz: "1",
  baz: "2",
};
const result = multiReplace(str, replace);
// result is '0 1 2'
```

### removeAccents

The `removeAccents` function removes all accents from a given string.

#### Parameters

- `str` (string): The string to remove accents from.

#### Returns

- (string): The string with all accents removed.

#### Example

```javascript
const str = "Héctor";
const result = removeAccents(str);
// result is 'Hector'
```

### removeSpaces

The `removeSpaces` removes leading, trailing, and duplicate spaces in a given string.

#### Parameters

- `str` (string): The string to remove spaces from.

#### Returns

- (string): The string with all leading, trailing, and duplicate spaces removed.

#### Example

```javascript
const str = "  hello  my  friend!   ";
const result = removeSpaces(str);
// result is 'hello my friend!'
```

### sanitizeJoin

The `sanitizeJoin` function joins an array into a string using a specified separator, ignoring any falsy values in the array. It also removes leading, trailing, and duplicate spaces from the resulting string.

#### Parameters

- `array` (Array): The array to join.
- `separator` (string): The separator to use. Defaults to a single space.

#### Returns

- (string): The joined string with all leading, trailing, and duplicate spaces removed.

#### Example

```javascript
const array = ["hello", "", "my", null, "friend!", "  "];
const separator = " ";
const result = sanitizeJoin(array, separator);
// result is 'hello my friend!'
```

### sanitizeStr

The `sanitizeStr` function processes a given string based on a configuration object. By default, it removes leading, trailing, and duplicate spaces. If the configuration object specifies, it can also remove accents and convert the string to uppercase.

#### Parameters

- `str` (string): The string to process.
- `config` (object): An optional configuration object. Can have the following properties:
  - `removeAccents` (boolean): If `true`, removes accents from the string.
  - `toUpperCase` (boolean): If `true`, converts the string to uppercase.

#### Returns

- (string): The processed string.

#### Example

```javascript
const str = "  HéllO  my  friend!   ";
const config = {
  removeAccents: true,
  toUpperCase: true,
};
const result = sanitizeStr(str, config);
// result is 'HELLO MY FRIEND!'
```

## Copyright

Copyright (c) 2023 Héctor Olvera Vital

## License

This project is licensed under the [MIT License](LICENSE), which means you are free to use, modify, and distribute the code for both commercial and non-commercial purposes. However, the software is provided "as is," without any warranty or guarantee of its effectiveness or suitability for your specific needs. [Please review the license file for more details](LICENSE).
