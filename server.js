// Import routes and create an express application
const express = require('express');
const app = express();
const routes = require('./routes');

// Set the user environment
const PORT = process.env.PORT || 3001;

// Middleware for parsing JSON and urlencoded form data, and serve static files
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(routes);

// Listen for connections
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);