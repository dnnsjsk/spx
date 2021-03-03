import { setVar } from './setVar';
import { setClamp } from './setClamp';

/**
 * Sets clamp or var.
 */

export const setVarOrClamp = (tag, type, size, min, max, condition) => {
  if (condition === 'default') {
    return setVar(tag, type, size);
  } else if (condition === 'fluid') {
    return setClamp(tag, type, min, max);
  }
};
