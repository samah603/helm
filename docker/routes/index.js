const express = require('express');
const router = express.Router();

// Route to generate a random 6-digit number
router.get('/random-number', (req, res) => {
  const randomNumber = Math.floor(Math.random() * 900000) + 100000;
  res.send(`<h1>Random Number : ${randomNumber}</h1>`);
});

// Export the router
module.exports = router;
