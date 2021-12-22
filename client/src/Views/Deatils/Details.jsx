import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getVideoGamesDetails, deleteState } from "../../Actions";

export default function Details (){
    const { id } = useParams();
    const dispatch = useDispatch();
    const videogame = useSelector(state => state.videoGameDetails);

    useEffect(()=>{
        dispatch(getVideoGamesDetails(id))
        // return () => {dispatch(deleteState())} // --------------------->>>>>>  REVISAAR  <<<<<<<-------------------------  
    }, [dispatch, id]);
    


    console.log(videogame)

    return (
        <div>
            <h1>Details</h1>
            {
                videogame? (
                    <div>
                        <h1>{videogame[0].name}</h1>
                        <img src={videogame[0].image} alt="" width='400rem' height='300rem' />
                        <p>{videogame[0].description}</p>
                        <p>{videogame[0].platforms}</p>
                        <p>{videogame[0].genres}</p>
                    </div>
                ): <h1>Cargando</h1>
            }
        </div>
    )
}