import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameVideogames, getVideogames } from "../../Actions";
import styles from './SearchBar.module.css'

export default function SearchBar (){

    const [state, setState] = useState({
        name: ''
    });
    const dispatch = useDispatch();
    
    function handleReload (e){
        dispatch(getVideogames())
    }

    function handleChange (e){
        e.preventDefault();
        setState({name: e.target.value});
    }

    function handleSubmit(e){
        e.preventDefault()
        dispatch(getNameVideogames(state.name))
        setState({name: ''})
    }

    return(
        <div className={styles.containerSearch}>
            <div>
                <button onClick={handleReload} className={styles.buttonReload}>Reload</button>
            </div>
            <div>
                <input onChange={handleChange} value={state.name} type="text" placeholder='Search Game...' className={styles.inputSearch}/>
                <button onClick={handleSubmit} className={styles.buttonSearch}> Search </button>
            </div>
        </div>
    )
}