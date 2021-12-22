import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from './CreateVideogame.module.css'
import { useSelector } from "react-redux";

// function validate (input){
//     let errors = {};
//     if(!input.name){
//         errors.name = 'Se requiere un nombre';
//     }
//     else if(!input.description){
//         errors.description = 'El nickname debe estar completo';
//     }
//     return errors;
// }

export default function CreateVideogame (){

    const genres = useSelector(state=> state.genres);

    const [state, setState] = useState({
        name: '',
        description: '',
        released: '',
        rating: '',
        genre: [],
        platforms: [],
        platform: ''
    });

    const [button, setButton] = useState(true);

    const [errors, setErrors] = useState({
        name: '',
        description: '',
        released: '',
        rating: '',
        platform: '',
        genre: [],
        platforms: [],
        image: ''
    }) 

    useEffect(()=>{
        state.name && state.description && 
        state.released && state.rating && 
        state.image ? setButton(false) : setButton(true);
    },[state])

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
    })
    
    
    //Validacion de errores 
    // setErrors(validate({
    //     ...errors,
    //     [e.target.name]: e.target.value
    // })) 

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        //axios.post(constantes.DOGS_URL, input)
        axios.post(`http://localhost:3001/videogame`, state) //-----> Cambiar por constantes
    }

    // import {useHistory} from 'react-router-dom'
    // const history = useHistory()
    /* hay algo que se puede hacer cuando se crea el personaje y se hace con algo de react  
        en la function que crea el personaje puedo redigir a alguna ruta cuando se cree el personaje
        history.push('/home)
        */

        
    /* 
        y dberia renderizar asi:
        <ul><li>{input.temperament.map(ele => ele +  ' ,'</li></ul>
    } */

    function handleChangeGenre (e){
        e.preventDefault();
        setState({
            ...state,
            genres: [...state.genre, e.target.value]
        });
    }

    return (
        <form className={styles.container} onSubmit={handleSubmit}>
            {/* <Link to='/'> <button>Volver al home</button> </Link> */}
            <label htmlFor="name">
                name:
                <input id='name' type="text" onChange={handleChange} name='name' />
                {/* {errors.name && ( <p className='error'>{errors.name}</p>)} */}
            </label>
            <label htmlFor="description">
                Description:
                <input id='description' type="text" onChange={handleChange} name='description' />
            </label>
            <label htmlFor="released">
                Released:
                <input id='released' type="text" onChange={handleChange} name='released' />
            </label>
            <label htmlFor="rating">
                Rating:
                <input id='rating' type="text" onChange={handleChange} name='rating' />
            </label>
            <label htmlFor="image">
                image:
                <input id='image' type="text" onChange={handleChange} name='image' />
            </label>
            <label htmlFor="platform">
            platform:
                <input id='platform' type="text" onChange={handleChange} name='platform' />
            </label>
                <select name="" id="">
                    {
                        genres?.map(genre => (
                            <option key={genre.id} onClick={handleChangeGenre} value={genre.name}>{genre.name}</option>
                        ))
                    }
                </select>
            <button disabled={button} type='submit' > Create Videogame </button>
        </form>
    )
}

/* [
[ ] Posibilidad de seleccionar/agregar varios géneros
[ ] Posibilidad de seleccionar/agregar varias plataformas */