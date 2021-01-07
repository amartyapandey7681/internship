const axios = require('axios');
//organization name can be any string i have chosen adobe
axios.get('https://api.github.com/orgs/adobe/repos')
  .then(response => {
    console.log(response.data);
    
  })
  .catch(error => {
    console.log(error);
  });
