// NPM packages
const express = require('express');
const morgan = require('morgan');
const { green, red } = require('chalk');

// My modules
const api = require('./routes/api');
const auth = require('./routes/auth');

// App
const app = express();
const PORT = 4000;

// Top-Level Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use('/api', api);

app.use('/auth', checkLogin, auth);

const login = true;
/* 
    Normally this would come from 
    a part of the request, but we aren't
    up to authentication yet so I'm just
    mocking the value.  Flip it from true
    to false to see it change permission
    in the browser!
*/
// checking auth middleware (added JUST to the auth route)
function checkLogin(req, res, next) {
  if (login) {
    next();
  } else {
    res.status(403).send('You are not logged in');
  }
}

// // Error - Handling Middleware

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send(/* Some friendly content */ 'You done messed up!');
});

// 404 not found
app.use((req, res) => {
  res.status(404).send('Not Found. Hello?');
});

// App start
app.listen(PORT, () => console.log(green('Server Start Success!👍')));
