import axios from 'axios';
import constantes from '../Constantes';
import { GET_ALL_VIDEOGAMES, GET_GENRES, GET_VIDEOGAMES_DETAILS, DELETE_STATE, ORDER_BY_NAME, FILTER_CREATE, FILTER_BY_GENRE, FILTER_BY_RATING, GET_NAME_VIDEOGAME, POST_VIDEOGAME, GET_PLATFORMS } from "./Constantes";


// export const getVideogames = () => {
//     return async(dispatch) => {
//         const data = await axios(constantes.VIDEOGAMES_URL)
//             dispatch({
//                 type: GET_ALL_VIDEOGAMES,
//                 payload: data
//             });
//     }
// }
export const getVideogames = () => {
    return (dispatch) => {
        axios(constantes.VIDEOGAMES_URL)
        .then(data => {
            dispatch({type: GET_ALL_VIDEOGAMES, payload: data})
        })
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

export const getPlatforms = () => {
    return async(dispatch) => {
        const data = await axios(constantes.PLATFORMS_URL)
        // const data = await axios('http://localhost:3001/platforms')
            dispatch({
                type: GET_PLATFORMS,
                payload: data
            });
    }
}

// export const PostVideogame = (payload) => {
//     return async(dispatch) => {
//         const data = await axios.post('http://localhost:3001/videogame');
//         dispatch({
//             type: POST_VIDEOGAME,
//             payload: data.data
//         })
//         console.log('data del post', data)
//         return data;
//     }
// }

export const postVideogame = (payload) => {
    return async() => {
        const data = await axios.post('http://localhost:3001/videogame', payload); // se refiere a que en esa ruta quiero hacer el post del payload
        return data;
    }
}

export const getVideoGamesDetails = (id)=>{
    return async(dispatch) => {
        try {
            const videogame = await axios.get(`${constantes.VIDEOGAME_DETAILS_URL}${id}`)
            dispatch({type: GET_VIDEOGAMES_DETAILS, payload: videogame.data})
        } catch (error) {
            console.error(error)
        }
    }
}
//http://localhost:3001/videogame/3498
// export const getVideoGamesDetails = (id)=>{
//         return async(dispatch) => {
//             try {
//                 const videogame = await axios.get(`http://localhost:3001/videogame/${id}`)
//                 dispatch({type: GET_VIDEOGAMES_DETAILS, payload: videogame.data})
//                 console.log(videogame.data)
//             } catch (error) {
//                 console.error(error)
//             }
//         }
//     }

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
            let game = await axios.get(`${constantes.VIDEOGAMES_URL}?name=${payload}`)
            return dispatch({
                type: GET_NAME_VIDEOGAME,
                payload: game.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}
