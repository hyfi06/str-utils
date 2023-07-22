# Function: areStringsSimilar

The `areStringsSimilar` function compares two strings for similarity. It removes leading, trailing, and duplicate spaces, removes accents, and converts the strings to uppercase before comparing them.

## Parameters

- `str1` (string): The first string to compare.
- `str2` (string): The second string to compare.

## Returns

- (boolean): Returns `true` if the processed strings are equal, `false` otherwise.

## Example

```javascript
const str1 = '  HéllO  my  friend!   ';
const str2 = 'hello my friend!';
const result = areStringsSimilar(str1, str2);
// result is true
```

## Copyright

Copyright (c) 2023 Héctor Olvera Vital

## License

MIT
