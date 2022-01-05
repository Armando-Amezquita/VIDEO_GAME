const { API_URL_PLATSFORMS } = require('../../Constantes');
const axios = require('axios')


const getPlatforms = async() => {
    const dataApi = await axios(API_URL_PLATSFORMS);
    const dataPlatformsApi = await dataApi.data.results.map(platform => platform.name)
    return dataPlatformsApi;
}

module.exports ={
    getPlatforms
}