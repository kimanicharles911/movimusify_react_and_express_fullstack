const express = require('express');
const app = express();
import cors from 'cors';
const port = require('./config');
import corsOptions from './config/corsOptions.module.js';
app.use(cors(corsOptions));
app.use(express.json());
const axios = require('axios');
const helmet = require('helmet');
app.use(helmet());
app.use(
  helmet.contentSecurityPolicy({
    useDefaults: true,
    directives: {
      "script-src": ["'self'", "'unsafe-inline'", "example.com"],
      "img-src": ["'self'", "https: data:"]
    }
  })
)

/* 
  * I defined a GET route that utilises an external 3rd party API from itunes
  * The API url is stored in the URL constant variable.
  * The API's URL utilises the term and media values received from the called GET request query object.
  * I used axios to fetch the API data from itunes with appropriate error handling.
  Example test URLS:
  1. https://itunes.apple.com/search?term=jack+johnson&media=music
  2. https://itunes.apple.com/search?term=jack+johnson
*/
app.get('/search', (req, res) => {
  const URL = `https://itunes.apple.com/search?term=${req.query.term}&media=${req.query.media ? req.query.media : ''}`;
  axios.get(URL)
    .then((response) => {
      return res.json(response.data);
    }).catch(err => {
      return res.status(404).send("An error occurred while fetching in the backend.");
    })
})

/* 
  * I created a function that enables serving of static files from the frontend.
  * I begun with a condition that ensures that the operating environment is production.
  * I then set the static folder location.
  * I then set the route to all other possible routes so as to load the frontend root file which in react is a index.html file.
*/
if(process.env.NODE_ENV === 'production'){
  app.use(express.static('frontend/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  })
}

app.listen(port.EXPRESS_APP_PORT, () => {
  console.log(`App server listening at http://localhost:${port.EXPRESS_APP_PORT}`)
})

/* 
 * I first imported the express module.
  * I then stored the called express function in a variable app.
  * I stored the EXPRESS_APP_PORT module from the config folder in a variable called port.
  * I executed the .json() middleware function on the express app function to enable sending of data in JSON format.
  * I imported the axios http client for making fetch requests.
  * I imported the helmet library which improves the security of my App.
  * I then executed the helmet middleware function on the the express ap function.
  * From the app object with the express function I used the listen method and set the port.
  * I then added a get request that returns a fail message for any request to an undefined route.
*/

/* 
REFERENCES
==========>
* Learnt to deploy a fullstack application from: https://youtu.be/71wSzpLyW9k
* Learnt to debug helmet deployment issue on contentSecurityPolicy from: https://helmetjs.github.io/
*/