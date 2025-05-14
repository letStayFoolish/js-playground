/**
 * Logger class for handling logging to console and HTML
 */
class Logger {
    /**
     * Create a new Logger instance
     */
    constructor() {
        // No initialization needed
    }

    /**
     * Log a message to console and HTML (if in browser environment)
     * @param {any} message - The message to log
     * @param {string} type - The type of log (info, success, error, performance)
     */
    log(message, type = 'info') {
        // Log to console
        console.log(message);

        // Log to HTML if available (browser environment)
        if (typeof document !== 'undefined') {
            const outputElement = document.getElementById('output');
            if (outputElement) {
                const logItem = document.createElement('div');
                logItem.className = `log-item log-${type}`;

                // Format objects and arrays for better display
                let formattedMessage = typeof message === 'object'
                    ? JSON.stringify(message, null, 2)
                    : message;

                logItem.textContent = formattedMessage;

                // Clear "Results will appear here..." message on first log
                if (outputElement.querySelector('p')?.textContent === 'Results will appear here...') {
                    outputElement.innerHTML = '';
                }

                outputElement.appendChild(logItem);

                // Scroll to bottom
                outputElement.scrollTop = outputElement.scrollHeight;
            }
        }
    }
}

export default Logger;
