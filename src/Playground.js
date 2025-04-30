/**
 * Playground class for running JavaScript code examples
 */
class Playground {
  /**
   * Create a new Playground instance
   * @param {Logger} logger - Logger instance for output
   * @param {PerformanceMonitor} performanceMonitor - PerformanceMonitor instance for measuring execution time
   * @param {AlgorithmExamples} algorithmExamples - AlgorithmExamples instance with example algorithms
   */
  constructor(logger, performanceMonitor, algorithmExamples) {
    this.logger = logger;
    this.performanceMonitor = performanceMonitor;
    this.algorithmExamples = algorithmExamples;
    this.variables = {}; // Store for user-defined variables
  }

  /**
   * Initialize the playground
   */
  initialize() {
    this.logger.log('JavaScript Playground - Ready for testing algorithms!', 'success');

    // Add event listeners if in browser environment
    if (typeof document !== 'undefined') {
      // This code will only run in a browser environment
      document.addEventListener('DOMContentLoaded', () => {
        this.logger.log('DOM loaded. Ready to interact with the page.', 'info');
      });
    }
  }

  /**
   * Run example algorithms to demonstrate the playground
   */
  runExamples() {
    // Test bubble sort
    const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
    this.logger.log('Original array:', 'info');
    this.logger.log(unsortedArray);

    const sortedArray = this.performanceMonitor.measurePerformance(
      () => this.algorithmExamples.bubbleSort(unsortedArray)
    );
    this.logger.log('Sorted array (bubble sort):', 'success');
    this.logger.log(sortedArray);

    // Test binary search
    const target = 22;
    const searchResult = this.performanceMonitor.measurePerformance(
      () => this.algorithmExamples.binarySearch(sortedArray, target)
    );
    this.logger.log(
      `Binary search for ${target}: ${searchResult !== -1 ? `Found at index ${searchResult}` : 'Not found'}`,
      searchResult !== -1 ? 'success' : 'error'
    );

    // Test fibonacci
    const fibN = 20;
    this.logger.log(`Calculating Fibonacci(${fibN})...`, 'info');
    const fibResult = this.performanceMonitor.measurePerformance(
      () => this.algorithmExamples.fibonacci(fibN)
    );
    this.logger.log(`Fibonacci(${fibN}) = ${fibResult}`, 'success');
  }

  /**
   * Set a variable in the playground
   * @param {string} name - Variable name
   * @param {any} value - Variable value
   */
  setVariable(name, value) {
    this.variables[name] = value;
    return value;
  }

  /**
   * Get a variable from the playground
   * @param {string} name - Variable name
   * @returns {any} - Variable value
   */
  getVariable(name) {
    return this.variables[name];
  }

  /**
   * Execute a custom function in the playground
   * @param {Function} fn - The function to execute
   * @param {...any} args - Arguments to pass to the function
   * @returns {any} - The result of the function execution
   */
  execute(fn, ...args) {
    return this.performanceMonitor.measurePerformance(fn, ...args);
  }
}

export default Playground;
