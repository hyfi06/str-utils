# Function: multiReplace

The `multiReplace` function replaces all occurrences of the keys in the replace object with the corresponding values in the given string.

## Parameters

- `str` (string): The string to perform replacements on.
- `replace` (object): An object where the keys are the patterns to be replaced and the values are the replacements. Defaults to an empty object.

## Returns

- (string): A new string where all occurrences of the keys in the replace object in str have been replaced with the corresponding values.

## Example

```javascript
const str = 'foo biz baz';
const replace = {
  foo: '0',
  biz: '1',
  baz: '2',
};
const result = multiReplace(str, replace);
// result is '0 1 2'
```

## Copyright

Copyright (c) 2023 Héctor Olvera Vital

## License

MIT
