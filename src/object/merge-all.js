/** @flow */
import merge from './merge';
/**
 * merge an array of objects
 * @param {array<object>}
 * @returns {object}
 */
export default function mergeAll(arr: Object[]) {
  return merge(...arr);
};