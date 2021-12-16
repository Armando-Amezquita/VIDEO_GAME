import React from "react";
import { Link } from "react-router-dom";
import styles from './Nav.module.css'

export default function Nav () {
    return (
        <nav className={styles.nav}>
            <Link to='home'>
                <h1 className={styles.font}>Logo</h1>
            </Link>
            <Link to='/hola'>
                <p className={styles.font}>About</p>
            </Link>
            <Link to='/'>
                <p className={styles.font}>Cerrar</p>
            </Link>
        </nav>
    )
}

/* [ ] Input de búsqueda para encontrar videojuegos por nombre
[ ] Área donde se verá el listado de videojuegos. Deberá mostrar su:
Imagen
Nombre
Géneros */