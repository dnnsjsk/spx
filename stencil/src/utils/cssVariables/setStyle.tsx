import { setVar } from './setVar';
import { setClamp } from './setClamp';

/**
 * Sets clamp or var.
 *
 * @param {string} tag HTML Element tag (without spx).
 * @param {string} type Property type.
 * @param {string} size Var size.
 * @param {number} min Minimum clamp size.
 * @param {number} max Maximum clamp size.
 * @param {boolean} condition Condition.
 * @returns {Function} Var or Clamp function.
 */
export function setStyle(tag, type, size, min, max, condition) {
  if (condition === 'default') {
    return setVar(tag, type, size);
  } else if (condition === 'fluid') {
    return setClamp(tag, type, min, max);
  }
}
