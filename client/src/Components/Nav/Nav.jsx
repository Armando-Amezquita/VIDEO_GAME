import React from "react";
import { Link } from "react-router-dom";
import styles from './Nav.module.css'

export default function Nav () {
    return (
        <nav className={styles.nav}>
            <Link to='home' className={styles.underline}>
                <p className={styles.font} >@ARMANDO-AMEZQUITA</p>
            </Link>
            <Link to='/about' className={styles.underline}>
                <p className={styles.font}>About</p>
            </Link>
            <Link to='/createVideogame' className={styles.underline}>
                <p className={styles.font}>Create VideoGame</p>
            </Link>
            <Link to='/' className={styles.underline}>
                <p className={styles.font}>Exit</p>
            </Link>
        </nav>
    )
}