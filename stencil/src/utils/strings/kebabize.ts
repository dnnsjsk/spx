/**
 * @param {string} str String to convert.
 * @returns {string} kebab-case string.
 */
export function kebabize(str) {
  return str
    .split('')
    .map((letter, idx) => {
      return letter.toUpperCase() === letter
        ? `${idx !== 0 ? '-' : ''}${letter.toLowerCase()}`
        : letter;
    })
    .join('');
}
