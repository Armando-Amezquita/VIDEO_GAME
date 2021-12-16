import React from "react";
import { Link } from "react-router-dom";
import styles from "./LandingPage.module.css"

export default function LandingPage(){
    return(
        <main className={styles.main}>
            <h1 className={styles.h1}> Welcome </h1>
            <Link to='/home'>
                <button className={styles.button}>Start</button>
            </Link>
        </main>
    )
}