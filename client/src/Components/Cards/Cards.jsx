import React from "react";
import Card from "../Card/Card";
import styles from './Cards.module.css';

export default function Cards ({videogames}){
    return(
        <div className={styles.main}>
            {
                videogames? videogames.map(game => (
                    <Card key={game.id} id={game.id} name={game.name} image={game.image} released={game.released} rating={game.rating}/>
                ))
                : <h1>Loading...</h1>
            }
        </div>
    )
} 
