import React, { useState, useEffect } from "react";
import {getGenres, postVideogame, getPlatforms} from '../../Actions/index';
import styles from './CreateVideogame.module.css'
import { useDispatch, useSelector } from "react-redux";
import swal from 'sweetalert'


function validate (input){
    let errors = {};
    const regexRating = /^[0-9]$/g;
    const regexName = /^[A-Z]/g;
    const regexDescription = /^[A-Z]/g;

    if(!input.name) errors.name = 'Needs to enter a name ';
    else if (!regexName.test(input.name)) {errors.name = 'The first letter must be uppercase'}
    else{errors.name = ''};
    
    if(!input.description) errors.description = 'Needs to enter a description';
    else if (!regexDescription.test(input.description)) {errors.description = 'The first letter must be uppercase'}
    else{errors.description = ''};

    if(!input.released) errors.released = 'Is require date';
    else{errors.released = ''};

    if(input.rating === '') errors.rating = 'Is require rating';
    else if (!regexRating.test(input.rating)) {errors.rating = 'You can only enter numbers from 1 to 5'}
    else{errors.rating = ''};

    return errors;
}

export default function CreateVideogame (){

    const genres = useSelector(state => state.genres);
    const platforms = useSelector(state => state.platforms);
    const dispatch = useDispatch();


    const [state, setState] = useState({
        name: '',
        description: '',
        released: '',
        rating: '',
        genre: [],
        platform: [],
        image: ''
    });

    const [button, setButton] = useState(true);

    const [errors, setErrors] = useState({
        name: '',
        description: '',
        released: '',
        rating: '',
        genre: [],
        platform: []
    }) 

    useEffect(() => {
        dispatch(getPlatforms);
    }, []);
    
        useEffect(() => {
            dispatch(getGenres);
        }, []);

    useEffect(()=>{
        state.name && state.description && 
        state.released && state.rating
        ? setButton(false) : setButton(true);
    },[state]);


    const handleImage = (e) => {
        const regexImage = /^((ftp|http|https):\/\/)?www\.([A-z]+)\.([A-z]{2,})/gi;
        if(e.target.value !== regexImage.test(e.target.value) || !e.target.value){
            setState({
                ...state,
                // image: 'https://cdn.arstechnica.net/wp-content/uploads/2020/12/ars-games-of-the-year-2020-760x380.jpg'
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-3IPJ6WxDXjcBFEft2tZQNerNl_NqnNu__A&usqp=CAU'
            })
        }
    }

    const handleChange = (e) => {
        e.preventDefault();
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
        setErrors(
            validate({
                ...state,
                [e.target.name]: e.target.value
            })
        ) 
    }
    const handleSubmit = async(e) => {
        e.preventDefault();
        dispatch(postVideogame(state))
        swal('Videogame was Created');
        setState({
            name: '',
            description: '',
            released: '',
            rating: '',
            genre: [],
            platform: [],
            image: ''
        })
    }

    function handleChangeGenre (e){
        e.preventDefault();
        if(!state.genre.includes(e.target.value)){
            setState({
                ...state,
                genre: [...state.genre, e.target.value]
            });
        }
    }
    function handleChangePlatform (e){
        e.preventDefault();
        setState({
            ...state,
            platform: [...state.platform, e.target.value]
        })
    }
    function handelDeleteGenre(e){
        setState({
            ...state,
            genre: state.genre.filter( ele => ele !== e)
        })
    }
    function handelDeletePlatform(e){
        setState({
            ...state,
            platform: state.platform.filter( ele => ele !== e)
        })
    }


    return (
        <div className={styles.containerTotal}>
            <div>
            </div>
            <div className={styles.containerForm}>
                <form id='formulario' className={styles.Form} onSubmit={handleSubmit}>
                    <h1 className={styles.titleForm}>Create a VideoGame</h1>
                    <label htmlFor="name" className={styles.labels}>
                        <span className={styles.text}>Name:</span>
                        <input id='name' value={state.name} type="text" onChange={handleChange} name='name' className={styles.inputForm} />
                        {
                            errors.name && (
                                <p className={styles.errors}>{errors.name}</p>
                            )
                        }
                    </label>
                    <label htmlFor="description" className={styles.labels}>
                        <span className={styles.text}>Description:</span>
                        <input id='description' value={state.description} type="text" onChange={handleChange} name='description' className={styles.inputForm} />
                        {
                            errors.description && (
                                <p className={styles.errors}>{errors.description}</p>
                            )
                        }
                    </label>
                    <label htmlFor="released" className={styles.labels}>
                        <span className={styles.text}>Released:</span>
                        <input id='released' value={state.released} type="date" onChange={handleChange} name='released' className={styles.inputFormDate}/>
                        {
                            errors.released && (
                                <p className={styles.errors}> {errors.released}</p>
                            )
                        }
                    </label>
                    <label htmlFor="rating" className={styles.labels}>
                        <span className={styles.text}>Rating:</span>
                        <input id='rating' value={state.rating} type="text" onChange={handleChange} name='rating' className={styles.inputForm} />
                        {
                            errors.rating && (
                                <p className={styles.errors}> {errors.rating}</p>
                            )
                        }
                    </label>
                    <label htmlFor="image" className={styles.labels}>
                        <span className={styles.text}>Image:</span>
                        <input id='image' value={state.image} type="text" onChange={handleImage} name='image'className={styles.inputForm} />
                    </label>
                    <div className={styles.containerGenresPlatformsInputs}>
                        <select name="genre" onChange={handleChangeGenre} >
                            <option selected disabled>--Genres--</option>
                            {
                                genres?.map(genre => (
                                    <option key={genre.id} value={genre.name}>{genre.name}</option>
                                    ))
                                }
                        </select>
                        <select name="platform" onChange={handleChangePlatform} >
                            <option selected disabled>--Platforms--</option>
                            {
                                platforms?.map(platform => (
                                    <option key={platform.id} value={platform.name}>{platform.name}</option>
                                    ))
                                }
                        </select>
                    </div>
                    <button disabled={button} type='submit' className={styles.buttonSend} > Create Videogame </button>
                </form>

                {/* ------------------->>>>>>>>>>> Renderizado de generos y plataformas escogidas <<<<<<<<--------- */}
                <div className={styles.containerGenresPlatforms}>
                    <div className={styles.containerGenresState}>
                        <div>
                            <h3 className={styles.genresSeletedTitle}>Genres Seleted</h3>
                        </div>
                        <div>
                        {
                            state.genre?.map((genre, id) => 
                            <div key={id} name={genre} className={styles.containerStateGenres}>
                                    <p className={styles.pStateGenres}>{genre}</p>
                                    <button className={styles.buttonStateGenres} onClick={() => handelDeleteGenre(genre)}> x </button>
                                </div>
                            )
                        }
                        </div>
                    </div>
                    <div className={styles.containerGenresState}>
                        <div>
                            <h3 className={styles.genresSeletedTitle}>Platforms Seleted</h3>
                        </div>
                        <div>
                        {
                            state.platform?.map((platform, id) => 
                            <div key={id} name={platform} className={styles.containerStateGenres}>
                                    <p className={styles.pStateGenres}>{platform}</p>
                                    <button className={styles.buttonStateGenres} onClick={() => handelDeletePlatform(platform)}> x </button>
                                </div>
                            )
                        }
                        </div>    
                    </div>
                </div>
            </div>
        </div>
    )
}