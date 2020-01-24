const express = require('express');
const router = express.Router();

// usually the first routes will be '/' just so they are clearly visible
router.get('/', (req, res, next) => {
  res.status(200).send('Here is your data');
});

router.get('/bad', (req, res, next) => {
  // the catch block will always catch the first error to happen and will not even run the rest of the try block
  try {
    throw Error('my first error');
    throw Error('my second error');
    throw Error('my third error');
  } catch (error) {
    // calling next with an error will send it to the next available error-handling route
    // express has a default one, but we can write our own
    next(error);
  }
});

// Export the entire router
module.exports = router;
