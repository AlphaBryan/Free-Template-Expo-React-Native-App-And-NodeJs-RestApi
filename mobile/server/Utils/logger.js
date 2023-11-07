/* eslint-disable no-console */

function log(...args) {
  console.log("\x1b[34m%s\x1b[0m", "Server Log:", ...args); // Log in blue
}

function logError(...args) {
  console.error("\x1b[31m%s\x1b[0m", "Server Error:", ...args); // Error in red
}

module.exports = { log, logError };
