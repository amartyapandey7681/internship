const axios = require('axios');

axios.get('https://api.github.com/orgs/adobe/repos')
  .then(response => {
    console.log(response.data);
    
  })
  .catch(error => {
    console.log(error);
  });