import React from "react";
import styles from './Footer.module.css'

export default function Footer () {
    return (
        <>
            <footer className={styles.containerFooter}>
                <div className={styles.divContainer}>
                    <div className={styles.divContact}>
                        <span className={styles.suscribe}>Contact Me:</span>
                        <a href="https://github.com/Armando-Amezquita" target='_blank' > <span className={styles.spanGit}></span></a>
                        <a href="https://www.linkedin.com/in/armando-amezquita-molina/" target='_blank'> <span className={styles.spanLinkedin}></span></a>
                    </div>
                    <div>
                        <p className={styles.suscribe}>@Armando-Amezquita</p>
                    </div>
                </div>
            </footer>
        </>
    )
}