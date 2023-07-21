/**
 * sanitizeJoin is part of @hyfi06/str-utils
 * @copyright Copyright (c) 2023 Héctor Olvera Vital
 * @license MIT
 * @requires removeSpaces
 */

import { removeSpaces } from "../removeSpaces";

/**
 * Joins an array into a string using a specified separator, ignoring any falsy values in the array. It also removes leading, trailing, and duplicate spaces from the resulting string.
 *
 * @param {string[]} array - The array to join.
 * @param {string} [separator=' '] - The separator to use. Defaults to a single space.
 * @returns {string} The joined string with all leading, trailing, and duplicate spaces removed.
 *
 * @example
 * const array = ['hello', '', 'my', null, 'friend!', '  '];
 * const separator = ' ';
 *
 * const result = sanitizeJoin(array, separator);
 * // result is 'hello my friend!'
 */
function sanitizeJoin(array: any[], separator: string = " "): string {
  const significantItems: any[] = array.filter((item) => Boolean(item));
  return removeSpaces(significantItems.join(separator));
}

export { sanitizeJoin };
