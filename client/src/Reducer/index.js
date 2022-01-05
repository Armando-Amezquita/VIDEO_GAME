import { GET_ALL_VIDEOGAMES, GET_GENRES, GET_VIDEOGAMES_DETAILS, DELETE_STATE, ORDER_BY_NAME, FILTER_CREATE, FILTER_BY_GENRE, FILTER_BY_RATING, GET_NAME_VIDEOGAME, POST_VIDEOGAME, GET_PLATFORMS } from "../Actions/Constantes"

const initialState = {
    videogames: [], // -----> este siempre va hacer el Array que debo mostrar
    allVideogames: [],
    genres: [],
    videoGameDetails: {},
    platforms: []
}


export default function rootReducer(state = initialState, action){
    switch (action.type) {
        case GET_ALL_VIDEOGAMES:
            return {
                ...state,
                videogames: action.payload.data,
                allVideogames: action.payload.data
            }
        case GET_GENRES: 
            return {
                ...state,
                genres: action.payload.data
            }
        case GET_PLATFORMS: 
            return{
                ...state,
                platforms: action.payload.data
            }
        case POST_VIDEOGAME:
            return {
                ...state
            }
        case GET_VIDEOGAMES_DETAILS: 
            return{
                ...state,
                videoGameDetails: action.payload
            }
        case DELETE_STATE:
            return{
                ...state,
                videoGameDetails: {}
            }
        case ORDER_BY_NAME:
            let sortedArr = action.payload === 'asc' ? state.videogames.sort( function (a,b){
                if(a.name > b.name){
                    return 1;
                }
                if(b.name > a.name){
                    return -1
                }
                return 0;
            }):
            state.videogames.sort(function(a,b){
                if(a.name > b.name){
                    return -1;
                }
                if(b.name > a.name){
                    return 1
                }
                return 0
            })
            return {
                ...state,
                videogames: sortedArr
            }
        case FILTER_CREATE: 
            const all = state.allVideogames;
            const createfilter = action.payload === 'create' ? all.filter(ele => ele.createInDb) : all.filter(ele => !ele.createInDb);
            return {  
                ...state,
                videogames: action.payload === 'All' ? state.allVideogames : createfilter
            }
        case FILTER_BY_GENRE: 
            const allVideogames2 = state.allVideogames;
            const videoGamesFilter = allVideogames2.filter(ele => ele.genres.includes(action.payload));
            return {
                ...state,
                videogames: videoGamesFilter
            }
        case FILTER_BY_RATING: 
            const allVideogames3 = state.allVideogames;
            parseFloat(action.payload);
            const filterByRating = allVideogames3.filter(ele => ele.rating == action.payload);
            return {
                ...state, 
                videogames: filterByRating
            }
        case GET_NAME_VIDEOGAME:
            return{
                ...state,
                videogames: action.payload
                }
        
        default:
            return {
                state
            }
    }
}