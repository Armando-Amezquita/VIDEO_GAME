const { API_URL_GAMES_FIRST_PAGE, API_URL_GAMES_SECOND_PAGE, API_URL_GAMES_THIRD_PAGE } = require('../../Constantes');
const {Videogame, Genre} = require('../db');
const axios = require('axios');


const getDataApi = async() => {
    let dataFirstPage = await axios.get(API_URL_GAMES_FIRST_PAGE); 
    dataFirstPage = await dataFirstPage.data.results;
    let dataSecondPage = await axios.get(API_URL_GAMES_SECOND_PAGE); 
    dataSecondPage = await dataSecondPage.data.results;    
    let dataThirdPage = await axios.get(API_URL_GAMES_THIRD_PAGE); 
    dataThirdPage = await dataThirdPage.data.results

    const dataApi = await [...dataFirstPage, ...dataSecondPage, ...dataThirdPage];
    const games = await dataApi.map(game => {
        return {
            id: game.id,
            name: game.name,
            description: game.slug,
            released: game.released,
            rating: game.rating,
            image: game.background_image,
            platforms: game.platforms.map(ele => ele.platform).map(ele => ele.name),
            genres: game.genres.map(ele => ele.name)
        }
    })    
    return games;
}

const getDataDb = async() => {
    let dataDb = await Videogame.findAll({
        include: {
            model: Genre,
                attributes: ['name'],
                through: { 
                    attributes: [] 
                }
        }
    })
    return dataDb;
}

const getAllInformation = async() => {
    let dataApi = await getDataApi();
    let dataDb = await getDataDb();
    let all = dataDb.concat(dataApi)
    return all
}


module.exports = {
    getAllInformation
}
