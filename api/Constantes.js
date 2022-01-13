const {API_KEY} = require('./src/db');

const API_URL_GAMES_FIRST_PAGE = `https://api.rawg.io/api/games${API_KEY}&page=2&page_size=40`;
const API_URL_GAMES_SECOND_PAGE = `https://api.rawg.io/api/games${API_KEY}&page=10&page_size=40`; 
const API_URL_GAMES_THIRD_PAGE = `https://api.rawg.io/api/games${API_KEY}&page=15&page_size=20`; 
const API_URL_GENRES = `https://api.rawg.io/api/genres${API_KEY}`; 
const API_URL_DETAILS = `https://api.rawg.io/api/games/`;
const API_URL_SPECIFIC_VIDEOGAMES = `https://api.rawg.io/api/games${API_KEY}&search=`;

module.exports ={
    API_URL_GAMES_FIRST_PAGE,
    API_URL_GAMES_SECOND_PAGE,
    API_URL_GAMES_THIRD_PAGE,
    API_URL_GENRES,
    API_URL_DETAILS,
    API_URL_SPECIFIC_VIDEOGAMES
}