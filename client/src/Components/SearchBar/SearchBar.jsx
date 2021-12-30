import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameCharacters, getVideogames } from "../../Actions";
import styles from './SearchBar.module.css'

export default function SearchBar (){

    const [state, setState] = useState('');
    const dispatch = useDispatch();
    
    function handelReload (e){
        e.preventDefault()
        dispatch(getVideogames())
    }

    function handelChange (e){
        e.preventDefault();
        setState(e.target.value);
        console.log(state)
    }

    function handelSubmit(e){
        e.preventDefault()
        dispatch(getNameCharacters(state))
    }

    return(
        <div className={styles.containerSearch}>
            <div>
                <button onClick={handelReload} className={styles.buttonReload}>Reload</button>
            </div>
            <div>
                <input onChange={handelChange} type="text" placeholder='Search Game...' className={styles.inputSearch}/>
                <button onClick={handelSubmit} className={styles.buttonSearch}> Search </button>
            </div>
        </div>
    )
}