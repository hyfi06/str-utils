# Function: sanitizeJoin

The `sanitizeJoin` function joins an array into a string using a specified separator, ignoring any falsy values in the array. It also removes leading, trailing, and duplicate spaces from the resulting string.

## Parameters

- `array` (Array): The array to join.
- `separator` (string): The separator to use. Defaults to a single space.

## Returns

- (string): The joined string with all leading, trailing, and duplicate spaces removed.

## Example

```javascript
const array = ["hello", "", "my", null, "friend!", "  "];
const separator = " ";
const result = sanitizeJoin(array, separator);
// result is 'hello my friend!'
```

## Copyright

Copyright (c) 2023 Héctor Olvera Vital

## License

MIT
