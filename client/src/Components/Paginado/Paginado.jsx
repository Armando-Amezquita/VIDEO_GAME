import React from "react";
import styles from './Paginado.module.css'

export default function Paginado ({ numOfPages, pagination }){
    
    const pages = [];
    for (let i = 1; i <= numOfPages; i++) {
        pages.push(i)
    }

    const renderPage = pages.map(page => (
        <p key={page}> 
            <button className={styles.buttons} onClick={e => pagination(e, page)}>{page} </button>
        </p>
    ))

    return (
        <nav className={styles.nav}>
            <ul className={styles.container} >{renderPage}</ul>
        </nav>
    )
}