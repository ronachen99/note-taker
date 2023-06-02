// Import required dependencies
const router = require("express").Router()
const path = require('path');
console.log(path.join(__dirname, '../public/index.html'))
// Route for the root path ('/')
router.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/index.html'))
);

// Route for the '/notes' path
router.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/pages/notes.html'))
);

// Wildcard route to handle any other paths
router.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/index.html'))
);

// Export the router module 
module.exports = router