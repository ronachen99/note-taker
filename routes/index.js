// Import router module from Express
const router = require("express").Router()

// Import route modules
const homeRoutes = require('./homeRoutes')
const apiRoutes = require("./api")

// Mounting the apiRoutes module on the "/api" path and homeRoutes module on the root path ("/")
router.use("/api", apiRoutes)
router.use("/", homeRoutes)

// Export the router module 
module.exports = router