// Import the Express app from the old backend location
const app = require('../api-old/index.js');

// Export for Vercel serverless
module.exports = app;
