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
        return () => {dispatch(deleteState())} 
    }, [dispatch, id]);

    
    return (
        <>
            <main className={styles.detailsContainer}>
                {
                    videogame? 
                    <>
                    <h1 className={styles.title}>{ videogame?.name }</h1>
                    <div className={styles.card}>
                        <div>
                            <div className={styles.containerImg}>
                                <img src={ videogame?.image } alt={videogame?.name} className={styles.imgDetails} />
                            </div>
                            <div className={styles.containerCardDetails}>
                                <h3 className={styles.titleDetails}>Details</h3>
                                <div className={styles.containerDivision}>
                                    <div className={styles.containerCabine}>
                                        <p className={styles.titlePlatforms}>Platforms</p>
                                        <ul>
                                            {
                                                videogame?.platforms? videogame?.platforms.map((plat, id) => ( <li key={id}>{plat}</li>)) : videogame?.platform?.map((plat, id) => (<li key={id}>{plat}</li>))
                                            }
                                        </ul>
                                    </div>
                                    <div className={styles.containerCabine}>
                                        <p className={styles.titlePlatforms}>Released</p>
                                        <li className={styles.biñeta}>{ videogame.released }</li>
                                    </div>
                                    <div className={styles.containerCabine}>
                                        <p className={styles.titlePlatforms}>Genres</p>
                                        <ul>
                                        {
                                            videogame?.genres?.map((genre, id) => (<li key={id}>{genre}</li>))     
                                            // videogame?.genres? videogame?.genres.map((genre, id) => (<li key={id}>{genre}</li>)) : videogame?.genres.map((genre, id) => (<li key={id}>{genre}</li>))    
                                        }
                                        </ul>
                                    </div>
                                    <div className={styles.containerCabine}>
                                        <p className={styles.titlePlatforms}>Rating</p>
                                        <ul><li key={videogame?.rating} className={styles.biñeta}>{ videogame?.rating }</li></ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.containerDescription}>
                            <h3 className={styles.titleDescription}> Description </h3>
                            <p className={styles.pDescription}> {videogame?.description? videogame?.description : <p className={styles.loadingCute}></p>} </p>
                        </div>
                    </div>
                    </>
                    : <p className={styles.loading}></p>
                }
            </main>
        </>
    );
}
