/**
 * Insert element before another one.
 *
 * @param {HTMLElement} newNode New node to be inserted.
 * @param {HTMLElement} existingNode Existing node that will be used as
 *   reference for new node.
 */
export function insertBefore(newNode, existingNode) {
  existingNode.parentNode.insertBefore(newNode, existingNode);
}
