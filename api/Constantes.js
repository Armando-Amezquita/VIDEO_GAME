const {API_KEY} = require('./src/db');

const API_URL_GAMES_FIRST_PAGE = `https://api.rawg.io/api/games${API_KEY}&page=1&page_size=5`; 
const API_URL_GAMES_SECOND_PAGE = `https://api.rawg.io/api/games${API_KEY}&page=2&page_size=5`; 
const API_URL_GAMES_THIRD_PAGE = `https://api.rawg.io/api/games${API_KEY}&page=3&page_size=5`; 
const API_URL_GENRES = `https://api.rawg.io/api/genres${API_KEY}`; 
const API_URL_PLATSFORMS = `https://api.rawg.io/api/platforms${API_KEY}`;
const API_DETAILS = `https://api.rawg.io/api/games/`

//https://api.rawg.io/api/games/3498?key=d0e09f787b57497bb836b8c8bfea4c6e

module.exports ={
    API_URL_GAMES_FIRST_PAGE,
    API_URL_GAMES_SECOND_PAGE,
    API_URL_GAMES_THIRD_PAGE,
    API_URL_GENRES,
    API_URL_PLATSFORMS,
    API_DETAILS
}