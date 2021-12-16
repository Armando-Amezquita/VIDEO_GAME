import React from "react";
import { Link } from "react-router-dom";
import styles from './Card.module.css';

export default function Card ({ name, description, released, rating, image, platforms, id }){
    return(
        <article className={styles.article}>
            <Link to={`/videogame/${id}`}>
                <h1>{name}</h1>
                <img className={styles.img} src={image} alt={name} />
                <p>{released}</p>
                <p>{rating}</p>
                <p>{platforms}</p>
                <p>{description}</p>
            </Link>
        </article>
    )
}
