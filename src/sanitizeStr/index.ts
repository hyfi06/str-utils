/**
 * sanitizeStr is part of @hyfi06/str-utils
 * @copyright Copyright (c) 2023 Héctor Olvera Vital
 * @license MIT
 * @requires removeAccents
 * @requires removeSpaces
 */

import { removeAccents } from '../removeAccents';
import { removeSpaces } from '../removeSpaces';

/**
 * Processes a given string based on a configuration object. By default, it removes leading, trailing, and duplicate spaces. If the configuration object specifies, it can also remove accents and convert the string to uppercase.
 *
 * @param {string} str - The string to process.
 * @param {Object} [config] - An optional configuration object. Can have the following properties:
 * @param {boolean} [config.removeAccents] - If `true`, removes accents from the string.
 * @param {boolean} [config.toUpperCase] - If `true`, converts the string to uppercase.
 * @returns {string} The processed string.
 *
 *  * @example
 * const str = '  HéllO  my  friend!   ';
 * const config = {
 *  removeAccents: true,
 *  toUpperCase: true,
 * };
 *
 * const result = sanitizeStr(str, config);
 * // result is 'HELLO MY FRIEND!'
 */
function sanitizeStr(
  str: string,
  config: {
    removeAccents?: boolean;
    toUpperCase?: boolean;
  } = {},
): string {
  let newStr = removeSpaces(str);
  if (config.toUpperCase) {
    newStr = newStr.toUpperCase();
  }
  if (config.removeAccents) {
    newStr = removeAccents(newStr);
  }
  return newStr;
}

export { sanitizeStr };
