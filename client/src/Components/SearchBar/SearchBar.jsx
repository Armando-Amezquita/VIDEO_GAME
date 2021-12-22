import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameCharacters } from "../../Actions";

export default function SearchBar (){

    const [state, setState] = useState('');
    const dispatch = useDispatch()
    

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
        <div>
            <input onChange={handelChange} type="text" placeholder='search game'/>
            <button onClick={handelSubmit}>Buscar</button>
        </div>
    )
}