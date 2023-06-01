const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const routes = require('./routes');

// const homeRoutes = require('./routes/homeRoutes')
// const apiRoutes = require("./routes/api/notes")


// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
// app.use("/", homeRoutes);
// app.use("/api", apiRoutes);
app.use(routes);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);

