// Import required dependencies
const router = require("express").Router()
const homeRoutes = require('./homeRoutes')
const apiRoutes = require("./api")

// Mounting the apiRoutes module on the "/api" path and homeRoutes module on the root path ("/")
router.use("/api", apiRoutes)
router.use("/", homeRoutes)

// Export the router module 
module.exports = router