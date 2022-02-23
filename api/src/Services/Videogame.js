const { API_URL_DETAILS } = require('../../Constantes');
const { API_KEY } = require('../db');
const axios = require('axios');

const getVideoGamesDetails = async(id) => {
    const videogame = await axios(`${API_URL_DETAILS}${id}${API_KEY}`);
    let filterByID = videogame.data;
    if(filterByID){
        const videogame = await {
            id: filterByID.id,
            name: filterByID.name,
            description: filterByID.description_raw,
            released: filterByID.released,
            rating: filterByID.rating,
            image: filterByID.background_image,
            platforms: filterByID.platforms.map(plat => plat.platform.name),
            genres: filterByID.genres.map(ele => ele.name),
        }
        return videogame;
    }
}

module.exports = {
    getVideoGamesDetails
}