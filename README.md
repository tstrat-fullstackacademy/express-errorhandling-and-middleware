# This file showcases custom error-handling, 404 route handling and custom route-level middleware

```js
  npm install
  npm run start
```

This program uses nodemon to run.  If you do not have nodemon globally installed, try running
```
  node index.js
```
Or install it to the file
```
npm install nodemon
```

### Can be viewed on the following routes
  
  http://localhost:4000/api     --> good route
  
  http://localhost:4000/api/bad --> bad route
  
  http://localhost:4000/noroute --> 404
  
  http://localhost:4000/auth    --> logged in or not
