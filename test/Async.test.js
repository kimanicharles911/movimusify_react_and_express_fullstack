/* 
  * I imported the axios http client for making fetch requests.
  * I imported the expect library from chai used for test assertions.
*/
const axios = require('axios');
const expect = require('chai').expect;

it('Axios get request test', () => {
  return axios.get('https://itunes.apple.com/search?term=jack+jackson&media=music')
    .then((response) => {
      let data = response.data;
      expect(data.results[0]).to.have.property('artistName');
      expect(data.results).to.have.lengthOf(50);
      expect(typeof response).to.equal('object');
    })
}).timeout(10000);

/* 
  * I wrote a test function that tests whether the API is fetched as expected.
  * I utilised axios which fetches the API data from itunes.
  * I then create two assertions on the API data received
    1. That the first element of the data array must have artistName as one of it's property.
    2. The length of the data array received should be 50.
  * I also wrote a test assertion on the response that makes sure the response is of the object type.
  * I increased the default mocha timeout by setting it to 10 seconds which makes sure the API will receive a response by that time.
*/