/**
 * Test script for the JavaScript Playground
 */

// Import classes
const Logger = require('./src/Logger');
const PerformanceMonitor = require('./src/PerformanceMonitor');
const AlgorithmExamples = require('./src/AlgorithmExamples');
const Playground = require('./src/Playground');

// Create instances
const logger = new Logger();
const performanceMonitor = new PerformanceMonitor(logger);
const algorithmExamples = new AlgorithmExamples();
const playground = new Playground(logger, performanceMonitor, algorithmExamples);

// Initialize the playground
playground.initialize();

// Test the sum function
console.log('\n--- Testing sum function ---');
const arr = [1, 4, 5, 6, 8, 11];
const sum = algorithmExamples.sum(arr);
console.log(`Sum of array [${arr}] = ${sum}`);

// Test variable management
console.log('\n--- Testing variable management ---');
playground.setVariable('testVar', 'Hello, World!');
console.log(`Retrieved variable: ${playground.getVariable('testVar')}`);

// Test performance monitoring
console.log('\n--- Testing performance monitoring ---');
playground.execute(() => {
    // Simulate some processing
    let result = 0;
    for (let i = 0; i < 1000000; i++) {
        result += i;
    }
    return result;
});

// Test running examples
console.log('\n--- Testing example algorithms ---');
playground.runExamples();

console.log('\nAll tests completed successfully!');