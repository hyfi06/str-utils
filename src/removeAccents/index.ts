/**
 * RemoveAccents is part of @hyfi06/str-utils
 * @copyright Copyright (c) 2023 Héctor Olvera Vital
 * @license MIT
 */

/**
 * Removes all accents from a given string.
 *
 * @param {string} str - The string to remove accents from.
 * @returns {string} The string with all accents removed.
 *
 * @example
 * // returns 'Hector'
 * removeAccents('Héctor')
 */
function removeAccents(str: string): string {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

export { removeAccents };
