/**
 * MultiReplaces is part of @hyfi06/str-utils
 * @copyright Copyright (c) 2023 Héctor Olvera Vital
 * @license MIT
 */

/**
 * Replaces all occurrences of the keys in the replace object with the corresponding values in the given string.
 *
 * @param {string} str - The string to perform replacements on.
 * @param {Object.<string, string>} [replace={}]  - An object where the keys are the patterns to be replaced and the values are the replacements. Defaults to an empty object.
 * @returns {string} A new string where all occurrences of the keys in the replace object in str have been replaced with the corresponding values.
 *
 * @example
 * // returns '0 1 2'
 *
 * multiReplaces('foo biz baz', { 'foo': 0, 'biz': 1, 'baz': 2 });
 */
function multiReplace(
  str: string,
  replace: { [pattern: string]: string } = {}
): string {
  let newStr: string = str;
  Object.entries(replace).forEach((entry) => {
    const [pattern, value] = entry;
    newStr = newStr.replace(new RegExp(pattern, "g"), value);
  });
  return newStr;
}

export { multiReplace };
