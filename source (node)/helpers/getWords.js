const axios = require('axios');
const randomWordAPI = "http://localhost:5000";
module.exports = async function(num){
    const {data} = await axios.get(randomWordAPI);

    if(!data) return -1;

    return data;
}