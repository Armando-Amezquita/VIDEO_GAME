import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getVideoGamesDetails, deleteState } from "../../Actions";
import styles from './Details.module.css';

export default function Details (){
    const { id } = useParams();
    const dispatch = useDispatch();
    const videogame = useSelector(state => state.videoGameDetails);

    useEffect(()=>{
        dispatch(getVideoGamesDetails(id))
        // return () => {dispatch(deleteState())} // --------------------->>>>>>  REVISAAR  <<<<<<<-------------------------  
    }, [dispatch, id]);
    

    if(videogame && Array.isArray(videogame)){
    return (
        <>
        <div className={styles.detailsContainer}>
            
            {
                videogame && (Array.isArray(videogame))?(
                <>
                    <h1 className={styles.title} >{videogame[0].name}</h1>
                    <div className={styles.card}>
                        <div className={styles.containerImg}>
                            <img src={videogame[0].image} alt="" className={styles.imgDetails} />
                        </div>
                        <div className={styles.containerCardDetails}>
                            <h3 className={styles.titleDetails}>Details</h3>
                            <div className={styles.containerDivision}>
                                <div className={styles.containerPlaforms}>
                                    <p className={styles.titlePlatforms}>Platforms</p>
                                    <ul>{videogame[0].platforms.map(platform => ( <li className={styles.biñeta}>{platform}</li>))}</ul>
                                </div>
                                <div className={styles.containerGenre}>
                                    <p className={styles.titlePlatforms}>Genres</p>
                                    <ul>{videogame[0].genres.map(genre => ( <li className={styles.biñeta}>{genre}</li>))}</ul>
                                    <p className={styles.titlePlatforms}>Rating</p>
                                    <ul><li className={styles.biñeta}>{videogame[0].rating}</li></ul>
                                </div>
                            </div>
                            <p className={styles.titlePlatforms}>Released</p>
                            <li className={styles.biñeta}>{videogame[0].released}</li>
                        </div>
                    </div>
                </>
                ): <p className={styles.loading}></p>
            }
        </div>
        </>
    )
    }
    else {
        return (
            <>
            <div className={styles.detailsContainer}>                
                {
                    videogame && (typeof videogame === 'object')?(
                    <>
                        <h1 className={styles.title} >{videogame.name}</h1>
                        <div className={styles.card}>
                            <div className={styles.containerImg}>
                                <img src={videogame.image} alt="" className={styles.imgDetails} />
                            </div>
                            <div className={styles.containerCardDetails}>
                                <h3 className={styles.titleDetails}>Details</h3>
                                <div className={styles.containerDivision}>
                                    <div className={styles.containerPlaforms}>
                                        <p className={styles.titlePlatforms}>Platforms</p>
                                        <ul> <li>{videogame.platform} </li></ul>
                                    </div>
                                    <div className={styles.containerGenre}>
                                        <p className={styles.titlePlatforms}>Genres</p>
                                        <ul>{videogame.genres.map(genre => ( <li className={styles.biñeta}>{genre}</li>))}</ul>
                                        <p className={styles.titlePlatforms}>Rating</p>
                                        <ul><li className={styles.biñeta}>{videogame.rating}</li></ul>
                                    </div>
                                </div>
                                <p className={styles.titlePlatforms}>Released</p>
                                <li className={styles.biñeta}>{videogame.released}</li>
                            </div>
                        </div>
                    </>
                    ): <p className={styles.loading}></p>
                }
            </div>
            </>
        )
    }
}