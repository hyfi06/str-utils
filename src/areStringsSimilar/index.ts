/**
 * areStringsSimilar is part of @hyfi06/str-utils
 * @copyright Copyright (c) 2023 Héctor Olvera Vital
 * @license MIT
 * @requires removeAccents
 * @requires removeSpaces
 */

import { removeAccents } from '../removeAccents';
import { removeSpaces } from '../removeSpaces';

/**
 * Compares two strings for similarity. Removes leading, trailing, and duplicate spaces, removes accents, and converts the strings to uppercase before comparing them.
 *
 * @param str1 - The first string to compare.
 * @param str2 - The second string to compare.
 * @returns Returns `true` if the processed strings are equal, `false` otherwise.
 *
 * @example
 * const str1 = '  HéllO  my  friend!   ';
 * const str2 = 'hello my friend!';
 * const result = areStringsSimilar(str1, str2);
 * // result is true
 */
function areStringsSimilar(str1: string, str2: string): boolean {
  let processedStr1 = removeAccents(removeSpaces(str1.toUpperCase()));
  let processedStr2 = removeAccents(removeSpaces(str2.toUpperCase()));
  return processedStr1 === processedStr2;
}

export { areStringsSimilar };
