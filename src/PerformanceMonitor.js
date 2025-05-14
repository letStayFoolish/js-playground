/**
 * PerformanceMonitor class for measuring execution time of functions
 */
class PerformanceMonitor {
    /**
     * Create a new PerformanceMonitor instance
     * @param {Logger} logger - Logger instance for outputting performance results
     */
    constructor(logger) {
        this.logger = logger;
    }

    /**
     * Get the current high-resolution time in milliseconds
     * Works in both Node.js and browser environments
     * @returns {number} - Current time in milliseconds
     */
    getNow() {
        if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
            // Browser environment
            return performance.now();
        } else if (typeof process !== 'undefined' && typeof process.hrtime === 'function') {
            // Node.js environment
            const [seconds, nanoseconds] = process.hrtime();
            return seconds * 1000 + nanoseconds / 1000000;
        } else {
            // Fallback to Date.now() (less precise)
            return Date.now();
        }
    }

    /**
     * Measure the performance of a function execution
     * @param {Function} fn - The function to measure
     * @param {...any} args - Arguments to pass to the function
     * @returns {any} - The result of the function execution
     */
    measurePerformance(fn, ...args) {
        const start = this.getNow();
        const result = fn(...args);
        const end = this.getNow();

        this.logger.log(`Executing: ${fn.name === "" ? "anonymous" : fn.name}-function. Execution time: ${(end - start).toFixed(2)} ms`, 'performance');
        return result;
    }
}

export default PerformanceMonitor;
