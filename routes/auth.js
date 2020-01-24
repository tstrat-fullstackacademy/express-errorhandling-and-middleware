const express = require('express');
const router = express.Router();

// We will only get TO this route if the checkLogin middlware calls "next()"
router.get('/', (req, res, next) => {
  res.status(200).send('You are logged in so you can see this, right?');
});

module.exports = router;
