// Import the Express module and route modules
const express = require('express');
const routes = require('./routes');

// Create an express application
const app = express();

// Set the user environment
const PORT = process.env.PORT || 3001;

// Middleware for parsing JSON
app.use(express.json());

// Middleware for URL-encoded form data
app.use(express.urlencoded({ extended: true }));

// Middleware for serving static files from the 'public' directory
app.use(express.static('public'));

// Mounting the routes module to handle incoming requests
app.use(routes);

// Listen for connections
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);