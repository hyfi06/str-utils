/**
 * RemoveAccents is part of @hyfi06/str-utils
 * @copyright Copyright (c) 2023 Héctor Olvera Vital
 * @license MIT
 */

/**
 * Remove accents in a give string.
 *
 * @example
 * const str = 'Héctor';
 *
 * removeAccents(str) // return 'Hector'
 *
 * @param {string} str
 * @returns {string}
 */
function removeAccents(str: string): string {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

export { removeAccents };
