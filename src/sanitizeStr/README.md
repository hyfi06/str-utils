# Function: sanitizeStr

The `sanitizeStr` function processes a given string based on a configuration object. By default, it removes leading, trailing, and duplicate spaces. If the configuration object specifies, it can also remove accents and convert the string to uppercase.

## Parameters

- `str` (string): The string to process.
- `config` (object): An optional configuration object. Can have the following properties:
  - `removeAccents` (boolean): If `true`, removes accents from the string.
  - `toUpperCase` (boolean): If `true`, converts the string to uppercase.

## Returns

- (string): The processed string.

## Example

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

MIT
