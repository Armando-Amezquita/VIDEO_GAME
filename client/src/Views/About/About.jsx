import React from "react";
import styles from './About.module.css'

export default function About (){
    return(
        <>
        <div className={styles.containerTotal}>
            <section className={styles.firstSection}>
                <div className={styles.containerFirstSection}>
                    <div className={styles.presentation}>
                        <p className={styles.parrafos}>Hello...</p>
                        <h1 className={styles.titleName}>I'm Armando Amezquita Molina</h1>
                        <p className={styles.parrafos}>I'm a Full-Stack Software Developer. </p>
                    </div>
                    <div className={styles.presentationImage}>
                    </div>
                </div>
            </section>
            <section className={styles.secondSection}>
                <div className={styles.containerSecondSection}>
                    <h2 className={styles.titleSecondSection}>About Me</h2>
                    <p className={styles.parrafos2}>👩‍💻 I am a student of computer systems and software development, I am passionate about studying, filling myself with knowledge, and being able to transmit it to many people who want it, I have worked building several personal projects developed on various platforms, depending on what I am developing I try to investigate a lot and take courses on the technology that I should use.
                    💻I am currently studying at Henry a Bootcamp from full stack developer and various software development careers at Platzi, where I stand out the most is in the career of Web Developer.
                    🌏 I am curious, analytical, I have quite a big imagination, I like to work in a team and learn languages.
                    </p>
                </div>
            </section>
            <section className={styles.thirdSection}>
                <p className={styles.titleThirdSection}>In this Project I used</p>
                <div className={styles.containerThirdSection}>
                    <div className={styles.containerThirdSectionLogos}>
                        <div className={styles.divDuo}>
                            <p className={styles.logoJS}></p>
                            <span className={styles.presentationSpan}>Javascript</span>
                        </div>
                        <div className={styles.divDuo}>
                            <p className={styles.logoRedux}></p>
                            <span className={styles.presentationSpan}>Redux</span>
                        </div>
                        <div className={styles.divDuo}>
                            <p className={styles.logoReact}></p>
                            <span className={styles.presentationSpan}>React</span>
                        </div>
                        <div className={styles.divDuo}>
                            <p className={styles.logoSequelize}></p>
                            <span className={styles.presentationSpan}>Sequelize</span>
                        </div>
                        <div className={styles.divDuo}>
                            <p className={styles.logoNode}></p>
                            <span className={styles.presentationSpan}>Node-Js</span>
                        </div>
                        <p className={styles.imageLogos}></p>
                        <p className={styles.imageLogos}></p>
                    </div>
                </div>
            </section>
        </div>
        </>
    )
}