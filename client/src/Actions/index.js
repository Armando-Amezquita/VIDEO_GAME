import axios from 'axios';
import constantes from '../Constantes';
import { GET_ALL_VIDEOGAMES, GET_NAME_VIDEOGAME, GET_GENRES, GET_VIDEOGAMES_DETAILS, DELETE_STATE, ORDER_BY_NAME, FILTER_CREATE, FILTER_BY_GENRE, FILTER_BY_RATING , GET_PLATFORMS } from "./Constantes";

export const getVideogames = () => {
    return (dispatch) => {
        axios(constantes.VIDEOGAMES_URL)
        .then(data => {
            dispatch({type: GET_ALL_VIDEOGAMES, payload: data})
        })
    }
};
export const getNameVideogames = (payload) => { 
    return async function (dispatch){
        try {
            let game = await axios(`${constantes.VIDEOGAMES_URL}?name=${payload}`)
            return dispatch({
                type: GET_NAME_VIDEOGAME,
                payload: game.data
            })
        } catch (error) {
            console.log(error)
        }
    }
};

export const getGenres = () => {
    return async(dispatch) => {
        const data = await axios(constantes.GENRES_URL)
            dispatch({
                type: GET_GENRES,
                payload: data
            });
    }
}

export const getPlatforms = () => {
    return async(dispatch) => {
        const data = await axios(constantes.PLATFORMS_URL);
            dispatch({
                type: GET_PLATFORMS,
                payload: data
            });
    }
}

export const postVideogame = (payload) => {
    return async() => {
        const data = await axios.post(constantes.POST_VIDEOGAME, payload); 
        return data;
    }
}

export const getVideoGamesDetails = (id)=>{
    return async(dispatch) => {
        try {
            const videogame = await axios(`${constantes.VIDEOGAME_DETAILS_URL}${id}`)
            dispatch({type: GET_VIDEOGAMES_DETAILS, payload: videogame.data})
        } catch (error) {
            console.error(error)
        }
    }
}

export const deleteState = () =>{
    return {
        type: DELETE_STATE
    }
}

export const orderByname = (payload) => {
    return {
        type: ORDER_BY_NAME, 
        payload
    }
}

export const filterCreate = (payload) =>{
    return{
        type: FILTER_CREATE,
        payload: payload
    }
}

export const filterByGenre = (payload) => {
    return {
        type: FILTER_BY_GENRE,
        payload
    }
}

export const filterByRating = (payload) => {
    console.log(payload)
    return {
        type: FILTER_BY_RATING,
        payload
    }
}


