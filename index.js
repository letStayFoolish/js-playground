'use strict'
// Import classes
import Logger from './src/Logger.js';
import PerformanceMonitor from './src/PerformanceMonitor.js';
import AlgorithmExamples from './src/AlgorithmExamples.js';
import Playground from './src/Playground.js';

// Create instances
const logger = new Logger();
const performanceMonitor = new PerformanceMonitor(logger);
const algorithmExamples = new AlgorithmExamples();
const playground = new Playground(logger, performanceMonitor, algorithmExamples);

// Initialize the playground
playground.initialize();

// Example usage
const arr = [1, 4, 5, 6, 8, 11];

// Using the playground to execute the sum function
// playground.execute(() => {
//     const sum = algorithmExamples.sum(arr);
//     logger.log(`Sum of array: ${sum}`);
//     return sum;
// });

// Using the playground to manage variables
// playground.setVariable('myName', 'Nemanja');

// Using the playground to execute a custom function
// playground.execute(() => {
//     const myName = playground.getVariable('myName');
//     playground.setVariable('myName', 'Marko');
//
//     // Simulate some processing
//     // for(let i = 0; i < 1000000; i++) {}
//
//     const updatedName = playground.getVariable('myName');
//     // logger.log(updatedName);
//     // return updatedName;
// });

playground.execute(() => {
    const getResponse = async (id) => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);

            console.log("Await should not be blocking Main thread!");

            if(!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

            const data = await response.json();

            return data;
        } catch (error) {
            console.error(`Failed to fetch todo #${id}:`, error);

            throw error;
        }
    };

    const processTodosSequentially = async () => {
        for (let todoId = 1; todoId <= 10; todoId++) {
            try {
                const result = await getResponse(todoId);
                logger.log(result);
                logger.log(`Completed todo #${result.id}`);
            } catch (error) {
                logger.log(`Failed processing todo #${todoId}: ${error.message}`)
            }
        }
    }

    void processTodosSequentially();
});

// Run the example algorithms
// Uncomment the line below to run examples
// playground.runExamples();