/**
 * Get breakpoint.
 */

export const mq = (value, type = 'max') => {
  return '@media (' + type + '-width: ' + value + 'px)';
};
