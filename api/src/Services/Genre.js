const { API_URL_GENRES } = require('../../Constantes');
const axios = require('axios')


const getGenres = async() => {
    const dataApi = await axios(API_URL_GENRES);
    const dataGenreApi = await dataApi.data.results.map(genre => genre.name);
    return dataGenreApi;
}

const getGenres2 = async() => {
    const dataApi = await axios(API_URL_GENRES);
    const dataFilter = await dataApi.data.results.map(genre => genre.name);
    return dataFilter;
}

module.exports ={
    getGenres,
    getGenres2
}