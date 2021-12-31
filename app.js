const express = require('express');
const app = express();
const port = require('./config');
app.use(express.json());
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

app.get('/search', (req, res) => {
  const urlPrefix = `https://itunes.apple.com/search?term=${req.query.term}&media=${req.query.media ? req.query.media : ''}`;
  axios.get(urlPrefix)
    .then((response) => {
      return res.json(response.data);
    }).catch(err => {
      return res.status(404).send("An error occurred while fetching in the backend.");
    })
})

if(process.env.NODE_ENV === 'production'){
  app.use(express.static('frontend/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  })
}

app.listen(port.EXPRESS_APP_PORT, () => {
  console.log(`App server listening at http://localhost:${port.EXPRESS_APP_PORT}`)
})