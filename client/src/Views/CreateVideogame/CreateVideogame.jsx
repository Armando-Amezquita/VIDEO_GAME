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
        <div className={styles.containerTotal}>
            <div>
            </div>
            <div className={styles.containerForm}>
                <form className={styles.Form} onSubmit={handleSubmit}>
                    {/* <Link to='/'> <button>Volver al home</button> </Link> */}
                    <h1 className={styles.titleForm}>Create a VideoGame</h1>
                    <label htmlFor="name" className={styles.labels}>
                        <span className={styles.text}>Name:</span>
                        <input id='name'  type="text" onChange={handleChange} name='name' className={styles.inputForm} />
                        {/* {errors.name && ( <p className='error'>{errors.name}</p>)} */}
                        {/* en la etiqueta input required= va a obligar a ser un campo requerido */}
                    </label>
                    <label htmlFor="description" className={styles.labels}>
                        <span className={styles.text}>Description:</span>
                        <input id='description' type="text" onChange={handleChange} name='description' className={styles.inputForm} />
                    </label>
                    <label htmlFor="released" className={styles.labels}>
                        <span className={styles.text}>Released:</span>
                        <input id='released' type="text" onChange={handleChange} name='released' className={styles.inputForm}/>
                    </label>
                    <label htmlFor="rating" className={styles.labels}>
                        <span className={styles.text}>Rating:</span>
                        <input id='rating' type="text" onChange={handleChange} name='rating' className={styles.inputForm} />
                    </label>
                    <label htmlFor="image" className={styles.labels}>
                        <span className={styles.text}>Image:</span>
                        <input id='image' type="text" onChange={handleChange} name='image'className={styles.inputForm} />
                    </label>
                    <label htmlFor="platform" className={styles.labels}>
                        <span className={styles.text}>Platform:</span>
                        <input id='platform' type="text" onChange={handleChange} name='platform' className={styles.inputForm}/>
                    </label>
                        <select name="" id="">
                            <option selected disabled>--Select--</option>
                            {
                                genres?.map(genre => (
                                    <option key={genre.id} onClick={handleChangeGenre} value={genre.name}>{genre.name}</option>
                                    ))
                                }
                        </select>
                    <button disabled={button} type='submit' className={styles.buttonSend} > Create Videogame </button>
                </form>
            </div>
        </div>
    )
}

/* [
[ ] Posibilidad de seleccionar/agregar varios géneros
[ ] Posibilidad de seleccionar/agregar varias plataformas */