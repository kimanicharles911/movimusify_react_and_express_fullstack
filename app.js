const express = require('express');
const app = express();
const port = require('./config');
app.use(express.json());
const fileSystem = require('fs');
const path = require('path');
const helmet = require('helmet');
app.use(helmet());
app.use(
  helmet.contentSecurityPolicy({
    useDefaults: true,
    directives: {
      "script-src": ["'self'", "'unsafe-inline'", "example.com"]
    }
  })
)

app.listen(port.EXPRESS_APP_PORT, () => {
  console.log(`App server listening at http://localhost:${port.EXPRESS_APP_PORT}`)
})