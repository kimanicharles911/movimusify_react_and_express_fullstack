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