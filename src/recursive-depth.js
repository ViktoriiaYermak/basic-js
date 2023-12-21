const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    const calculateRecursive = (arr, depth) => {
      let currentDepth = depth;

      for (const item of arr) {
        if (Array.isArray(item)) {
          const itemDepth = calculateRecursive(item, depth + 1);
          currentDepth = Math.max(currentDepth, itemDepth);
        }
      }
      return currentDepth;
    };
    return calculateRecursive(arr, 1);
  }
}

module.exports = {
  DepthCalculator
};
