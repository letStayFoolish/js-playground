/**
 * AlgorithmExamples class containing example algorithms
 */
class AlgorithmExamples {
  /**
   * Create a new AlgorithmExamples instance
   */
  constructor() {
    // No initialization needed
  }

  /**
   * Bubble sort algorithm
   * @param {Array} arr - The array to sort
   * @returns {Array} - The sorted array
   */
  bubbleSort(arr) {
    const result = [...arr]; // Create a copy to avoid modifying the original
    const n = result.length;

    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (result[j] > result[j + 1]) {
          // Swap elements
          [result[j], result[j + 1]] = [result[j + 1], result[j]];
        }
      }
    }

    return result;
  }

  /**
   * Binary search algorithm
   * @param {Array} arr - The sorted array to search in
   * @param {any} target - The value to search for
   * @returns {number} - The index of the target or -1 if not found
   */
  binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      if (arr[mid] === target) {
        return mid; // Found the target
      }

      if (arr[mid] < target) {
        left = mid + 1; // Search in the right half
      } else {
        right = mid - 1; // Search in the left half
      }
    }

    return -1; // Target not found
  }

  /**
   * Fibonacci sequence (recursive with memoization)
   * @param {number} n - The position in the Fibonacci sequence
   * @param {Object} memo - Memoization object to store previously calculated values
   * @returns {number} - The nth Fibonacci number
   */
  fibonacci(n, memo = {}) {
    if (n in memo) return memo[n];
    if (n <= 1) return n;

    memo[n] = this.fibonacci(n - 1, memo) + this.fibonacci(n - 2, memo);
    return memo[n];
  }

  /**
   * Sum all elements in an array
   * @param {Array} args - The array of numbers to sum
   * @returns {number} - The sum of all elements
   */
  sum(args) {
    let sumValue = 0;

    for (let i = 0; i < args.length; i++) {
      sumValue += args[i];
    }

    return sumValue;
  }
}

export default AlgorithmExamples;
