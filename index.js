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

// Asynchronous behavior in JavaScript
// playground.execute(function asyncFunctions() {
//   const getResponse = async (id) => {
//     try {
//       const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
//
//       console.log("Await should not be blocking Main thread!");
//
//       if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
//
//       const data = await response.json();
//
//       return data;
//     } catch (error) {
//       console.error(`Failed to fetch todo #${id}:`, error);
//
//       throw error;
//     }
//   };
//
//   const processTodosSequentially = async () => {
//     for (let todoId = 1; todoId <= 10; todoId++) {
//       try {
//         const result = await getResponse(todoId);
//         logger.log(result);
//         logger.log(`Completed todo #${result.id}`);
//       } catch (error) {
//         logger.log(`Failed processing todo #${todoId}: ${error.message}`)
//       }
//     }
//   }
//
//   void processTodosSequentially();
// });

// Lexical scoping
// playground.execute(() => {
//   // Lexical scoping
//   let a = 11;
//
//   function outer() {
//     const b = 22;
//
//
//     const inner = function () {
//       const c = 33;
//       // logger.log(d, "info"); // variable is not defined.
//
//       var d = 44;
//       logger.log([a, b, c], "info");
//     };
//
//     inner();
//   }
//
//   outer();
// });

// Closure
// playground.execute(() => {
//   function outer() {
//     let counter = 0;
//
//     function inner() {
//       counter++;
//       logger.log(counter);
//     }
//
//     // inner();
//     return inner; // returns function definition and its scope (counter);
//   }
//
//   // outer(); // 1
//   // outer(); // 1
//   // outer(); // 1
//
//   const fn = outer();
//
//   fn(); // 1 -> Concept of Closures
//   fn(); // 2 -> Concept of Closures
// });

// Function Currying fn(a, b, c) -> f(a)(b)(c)
// playground.execute(function currying() {
//   function sum(...args) {
//     logger.log(args);
//
//     const result = args.reduce((a, b) => a + b, 0);
//
//     logger.log(result);
//
//     return result;
//   }
//
//   sum(1, 2, 3); // 6
//
//   function curry(fn) {
//     return function (a) {
//       return function (b) {
//         return function (c) {
//           return fn(a, b, c);
//         }
//       }
//     }
//   }
//
//   // curry(sum(1, 2, 3));
//   const curriedFn = curry(sum);
//   curriedFn(2)(4)(6);
// });

// Prototype In Practice
// playground.execute(function prototypeInPractice() {
//     //
//     function Person(fName, lName) {
//         this.firstName = fName;
//         this.lastName = lName;
//     }
//
//     const person1 = new Person('John', 'Doe');
//     const person2 = new Person('Jane', 'Doe');
//
//     Person.prototype.getFullName = function () {
//         return `${this.firstName} ${this.lastName}`;
//     }
//
//     logger.log(person1.getFullName());
//     logger.log(person2.getFullName());
// })

// Generator Function
// playground.execute(function fnGenerator() {
//     function* generatorFunction() {
//         yield "Hello"
//         yield "World"
//     }
//
//     const generatorObject = generatorFunction();
//
//     for (const word of generatorObject) {
//         logger.log(word);
//     }
// })

// Run the example algorithms
// Uncomment the line below to run examples
// playground.runExamples();
