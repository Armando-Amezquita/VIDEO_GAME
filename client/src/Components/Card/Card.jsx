import React from "react";
import { Link } from "react-router-dom";
import styles from './Card.module.css';

export default function Card ({ name, image, id, released, genre, rating }){
    return(
        <article className={styles.articleCard}>
            <Link to={`/videogame/${id}`} className={styles.linkCard}>
                <img className={styles.img} src={image} alt={name} />
                <h1 className={styles.name}>{name}</h1>
                <button className={styles.buttonCard}>Details</button>
            </Link>
        </article>
    )
}


/* Card key={game.id} id={game.id} name={game.name} image={game.image} released={game.released} genre={game.genres} rating={game.rating} */