const express = require('express');
const app = express();
const routes = require('./routes');

// Serve static files from the public directory
app.use(express.static('public'));

// Use the routes defined in the routes directory
app.use('/6digi', routes);

// Start the server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
