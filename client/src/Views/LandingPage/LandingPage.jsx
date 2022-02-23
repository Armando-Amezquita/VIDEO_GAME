import React from "react";
import { Link } from "react-router-dom";
import styles from "./LandingPage.module.css"

export default function LandingPage(){
    return(
        <main className={styles.main}>
            <section className={styles.section}>
                <p className={styles.title}> Welcome</p>
                <Link to='/home'>
                    <button className={styles.button}>Start</button>
                </Link>
                <div className={styles.subContainer}>
                    <span className={styles.fliker1}>♥</span>
                    <span className={styles.fliker2}>♦</span>
                    <span className={styles.fliker3}>♣</span>
                    <span className={styles.fliker3}>☻</span>
                </div>
            </section>
        </main>
    )
}