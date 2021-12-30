import React from "react";
import { Link } from "react-router-dom";
import styles from './Card.module.css';

export default function Card ({ name, description, released, rating, image, platforms, id, genres }){
    return(
        <article className={styles.articleCard}>
            <Link to={`/videogame/${id}`} className={styles.linkCard}>
                <img className={styles.img} src={image} alt={name} />
                <h1 className={styles.name}>{name}</h1>
                {/* <p>{released}</p>
                <p>{rating}</p>
                <p>{platforms}</p>
                <p>{description}</p>
                <p>{genres}</p> */}
                <button className={styles.buttonCard}>Details</button>
            </Link>
        </article>
    )
}
