/**
 * Make every first letter from string uppercase.
 *
 * @param {string} str String to make title case.
 * @returns {string} Title case string.
 */
export function titleCase(str) {
  const splitStr = str.toLowerCase().split(' ');
  for (let i = 0; i < splitStr.length; i++) {
    splitStr[i] =
      splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  return splitStr.join(' ');
}
