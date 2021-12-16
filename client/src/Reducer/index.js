import { GET_ALL_VIDEOGAMES, GET_GENRES, GET_VIDEOGAMES_DETAILS, DELETE_STATE } from "../Actions/Constantes"

const initialState = {
    videogames: [],
    genres: [],
    videoGameDetails: {}
}

export default function rootReducer(state = initialState, action){
    switch (action.type) {
        case GET_ALL_VIDEOGAMES:
            return {
                ...state,
                videogames: action.payload.data
            }
        case GET_GENRES: 
            return {
                ...state,
                genres: action.payload.data
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
        default:
            return {
                state
            }
    }
}