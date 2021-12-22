import axios from 'axios';
import constantes from '../Constantes';
import { GET_ALL_VIDEOGAMES, GET_GENRES, GET_VIDEOGAMES_DETAILS, DELETE_STATE, ORDER_BY_NAME, FILTER_CREATE, FILTER_BY_GENRE, FILTER_BY_RATING, GET_NAME_VIDEOGAME } from "./Constantes";


export const getVideogames = () => {
    return async(dispatch) => {
        const data = await axios(constantes.VIDEOGAMES_URL)
            dispatch({
                type: GET_ALL_VIDEOGAMES,
                payload: data
            });
    }
}

export const getGenres = () => {
    return async(dispatch) => {
        const data = await axios(constantes.GENRES_URL)
            dispatch({
                type: GET_GENRES,
                payload: data
            });
    }
}

export const getVideoGamesDetails = (id)=>{
    return async(dispatch) => {
        try {
            const videogame = await axios.get(`${constantes.VIDEOGAME_DETAILS_URL}${id}`)
            return dispatch({type: GET_VIDEOGAMES_DETAILS, payload: videogame.data})
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
        type: ORDER_BY_NAME, //Orden alfabético
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
    return {
        type: FILTER_BY_RATING,
        payload
    }
}

export const getNameCharacters = (payload) => { 
    return async function (dispatch){
        try {
            let json = await axios.get(`${constantes.VIDEOGAMES_URL}?name=${payload}`)
            return dispatch({
                type: GET_NAME_VIDEOGAME,
                payload: json.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}