/**
 * MultiReplaces is part of @hyfi06/str-utils
 * @copyright Copyright (c) 2023 Héctor Olvera Vital
 * @license MIT
 */

/**
 * Replaces all pattern:value in a given string.
 *
 * @example
 * const str = 'foo biz foobiz';
 * const replace = {
 *  'foo': 'biz',
 *  'biz': 'foo',
 * };
 *
 * multiReplaces(str, replace) // return 'foo foo foofoo', replaces in the order of the keys
 *
 * @param {string} str
 * @param {Any} replace
 * @returns {string}
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
