// Import required dependencies
const router = require("express").Router()
const notesRouter = require('./noteRoutes.js');

// Mounting the notesRouter module on the '/notes' path
router.use('/notes', notesRouter);

// Export the router module 
module.exports = router;