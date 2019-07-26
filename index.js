const URL = 'https://ndb.rice.edu/static/structures/download/IMR90/IMR90_chr07-0-159Mb.csv';
const axios = require('axios');

axios.get(URL)
  .then(res => {
    console.log(res.data);
  })
  .catch(err => {
    console.log(err);
  })