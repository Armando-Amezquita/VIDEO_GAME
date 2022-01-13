const { API_URL_GENRES } = require('../../Constantes');
const axios = require('axios')


const getGenres = async() => {
    const dataApi = await axios.get(API_URL_GENRES);
    const dataGenreApi = await dataApi.data.results.map(genre => genre.name);
    return dataGenreApi;
}

module.exports ={
    getGenres
}