const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).send('Here is your data');
});

router.get('/bad', (req, res, next) => {
  try {
    throw Error('my first error');
    throw Error('my second error');
    throw Error('my third error');
  } catch (error) {
    next(error);
  }
});

module.exports = router;
