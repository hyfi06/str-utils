/**
 * removeSpaces is part of @hyfi06/str-utils
 * @copyright Copyright (c) 2023 Héctor Olvera Vital
 * @license MIT
 */

/**
 * Remove the fists, ends and duplicate space in a given string
 *
 * @param {string} str - The string to remove spaces from.
 * @returns {string} The string with all leading, trailing, and duplicate spaces removed.
 *
 * @example
 * // returns 'hello my friend!'
 * removeSpaces('  hello  my  friend!   ')
 */
function removeSpaces(str: string): string {
  let newStr: string = str;
  newStr = newStr.replace(/\s+/g, " ");
  newStr = newStr.trim();
  return newStr;
}

export { removeSpaces };
