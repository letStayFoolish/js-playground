# JavaScript Playground

A simple JavaScript playground for testing algorithms and code snippets, built with a class-based architecture.

## Project Structure

The project is organized into the following classes:

- **Playground**: The main class that orchestrates the playground functionality
- **Logger**: Handles logging to console and HTML (in browser environments)
- **PerformanceMonitor**: Measures execution time of functions
- **AlgorithmExamples**: Contains example algorithms like bubble sort, binary search, and fibonacci

## Getting Started

### Prerequisites

- Node.js (>= 14.0.0)

### Installation

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```

### Running the Playground

#### In Node.js

Run the playground in Node.js:

```
npm start
```

Or use the development mode with auto-reloading:

```
npm run dev
```

#### In Browser

Serve the playground in a browser:

```
npm run serve
```

## Usage

### Basic Usage

The main `index.js` file demonstrates how to use the playground:

```javascript
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

// Using the playground to execute a function
playground.execute(() => {
    const sum = algorithmExamples.sum(arr);
    logger.log(`Sum of array: ${sum}`);
    return sum;
});
```

### Async/Await Example

The playground supports async/await for handling asynchronous operations:

```javascript
playground.execute(() => {
    const getResponse = async (id) => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);

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
```

### Variable Management

The playground provides methods to manage variables:

```javascript
// Set a variable
playground.setVariable('myName', 'John');

// Get a variable
const myName = playground.getVariable('myName');
```

### Running Example Algorithms

Uncomment the following line in `index.js` to run the example algorithms:

```javascript
// playground.runExamples();
```

### Adding Your Own Algorithms

You can add your own algorithms to the `AlgorithmExamples` class or create new classes for different categories of algorithms.

## Code Formatting

This project uses Prettier for consistent code formatting. The configuration is defined in `.prettierrc` and includes:

- Single quotes
- 2 space indentation
- 100 character line length
- Semicolons at the end of statements
- ES5 trailing commas
- And more...

### Format Your Code

To format all JavaScript, JSON, HTML, and CSS files:

```
npm run format
```

### Check Formatting

To check if your files are formatted correctly without modifying them:

```
npm run format:check
```

### Ignored Files

Some files and directories are excluded from formatting. See `.prettierignore` for the complete list.

## Building the Project

This project uses webpack for bundling the JavaScript code and assets. The webpack configuration is defined in `webpack.config.js` and includes:

- Babel for transpiling modern JavaScript to be compatible with older browsers
- CSS loaders for handling CSS files
- HTML Webpack Plugin for generating an HTML file that includes the bundled JavaScript

### Building for Production

To build the project for production (minified and optimized):

```
npm run build
```

This will create a `dist` directory with the bundled files.

### Building for Development

To build the project for development (with source maps and without minification):

```
npm run build:dev
```

### Development Server

To start the webpack development server with hot reloading:

```
npm run serve:dev
```

This will start a development server at http://localhost:9000 and automatically open your browser.

## Testing

Run the test script to verify that everything is working correctly:

```
node test.js
```

## License

This project is licensed under the MIT License.
