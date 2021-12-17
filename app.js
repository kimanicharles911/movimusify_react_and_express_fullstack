const express = require('express');
const app = express();
const port = require('./config');
app.use(express.json());
const fileSystem = require('fs');
const path = require('path');
const axios = require('axios');
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

// this is just dummy api testing code (line 20 - 26)
app.get('/api', (req, res) => {
  axios.get('https://itunes.apple.com/search?term=jack+johnson')
    .then((res) => {
      console.log(res.data);
    })
})
// https://itunes.apple.com/search?term=jack+johnson

app.listen(port.EXPRESS_APP_PORT, () => {
  console.log(`App server listening at http://localhost:${port.EXPRESS_APP_PORT}`)
})