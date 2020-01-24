const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).send('You are logged in so you can see this, right?');
});

module.exports = router;
