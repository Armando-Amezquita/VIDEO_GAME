import axios from 'axios';
import constantes from '../Constantes';
import { GET_ALL_VIDEOGAMES, GET_GENRES, GET_VIDEOGAMES_DETAILS, DELETE_STATE } from "./Constantes";


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