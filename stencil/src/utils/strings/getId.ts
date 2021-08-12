import { customAlphabet } from 'nanoid';

/**
 * Get a unique project code.
 *
 * @returns {string} Unique ID.
 */
export function getId() {
  const alphabet =
    '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const nanoid = customAlphabet(alphabet, 10);
  return nanoid();
}
