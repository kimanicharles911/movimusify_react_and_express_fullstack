const axios = require('axios');

exports.search = (term, media) =>{
  axios.get('https://jsonplaceholder.typicode.com/users/2')
    .then((response) => {
      return res.json(response.data);
    }).catch(err => {
      return res.status(404).send("An error occurred while fetching in the backend.");
    })

};

/* const request = await fetch(`${api.base}weather?q=${city}&units=metric&APPID=${api.key}`)
const response = await request.json();
expect(response.sys.country).toBe("KE");
}); */
// https://jsonplaceholder.typicode.com/users/2