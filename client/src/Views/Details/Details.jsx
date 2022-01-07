import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getVideoGamesDetails, deleteState, getDetails } from "../../Actions";
import styles from './Details.module.css';

export default function Details (){
    const { id } = useParams();
    const dispatch = useDispatch();
    const videogame = useSelector(state => state.videoGameDetails);

    useEffect(()=>{
        dispatch(getVideoGamesDetails(id))
        // dispatch(getDetails(id));
        return () => {dispatch(deleteState())} 
    }, [dispatch, id]);

    return (
        <>
            <div className={styles.detailsContainer}>
                {
                    videogame?.length > 0?( videogame?.map(videogame => {
                        return (
                        <>
                        <h1 className={styles.title} >{videogame.name}</h1>
                        <div className={styles.card}>
                            <div className={styles.containerImg}>
                                <img src={videogame?.image} alt="" className={styles.imgDetails} />
                            </div>
                            <div className={styles.containerCardDetails}>
                                <h3 className={styles.titleDetails}>Details</h3>
                                <div className={styles.containerDivision}>
                                    <div className={styles.containerPlaforms}>
                                        <p className={styles.titlePlatforms}>Platforms</p>
                                        <ul>{videogame?.platforms.map((platform, id) => ( <li key={id} className={styles.biñeta}>{platform}</li>))}</ul>
                                        <p className={styles.titlePlatforms}>Released</p>
                                        <li className={styles.biñeta}>{videogame?.released}</li>
                                    </div>
                                    <div className={styles.containerGenre}>
                                        <p className={styles.titlePlatforms}>Genres</p>
                                        <ul>{videogame?.genres.map((genre, id) => ( <li key={id} className={styles.biñeta}>{genre}</li>))}</ul>
                                        <p className={styles.titlePlatforms}>Rating</p>
                                        <ul><li key={videogame?.rating} className={styles.biñeta}>{videogame?.rating}</li></ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                        )
                    })
                    ):( <p className={styles.loading}></p>)
                }
            </div>
        </>
    )

    // if(videogame === Array.isArray){
    // return (
    //     <>
    //         <div className={styles.detailsContainer}>
    //             {
    //                 videogame? ( videogame?.map(videogame => {
    //                     return (
    //                     <>
    //                     <h1 className={styles.title} >{videogame.name}</h1>
    //                     <div className={styles.card}>
    //                         <div className={styles.containerImg}>
    //                             <img src={videogame?.image} alt="" className={styles.imgDetails} />
    //                         </div>
    //                         <div className={styles.containerCardDetails}>
    //                             <h3 className={styles.titleDetails}>Details</h3>
    //                             <div className={styles.containerDivision}>
    //                                 <div className={styles.containerPlaforms}>
    //                                     <p className={styles.titlePlatforms}>Platforms</p>
    //                                     <ul>{videogame?.platforms.map((platform, id) => ( <li key={id} className={styles.biñeta}>{platform}</li>))}</ul>
    //                                     <p className={styles.titlePlatforms}>Released</p>
    //                                     <li className={styles.biñeta}>{videogame?.released}</li>
    //                                 </div>
    //                                 <div className={styles.containerGenre}>
    //                                     <p className={styles.titlePlatforms}>Genres</p>
    //                                     <ul>{videogame?.genres.map((genre, id) => ( <li key={id} className={styles.biñeta}>{genre}</li>))}</ul>
    //                                     <p className={styles.titlePlatforms}>Rating</p>
    //                                     <ul><li key={videogame?.rating} className={styles.biñeta}>{videogame?.rating}</li></ul>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </>
    //                     )
    //                 })
    //                 ):( <p className={styles.loading}></p>)
    //             }
    //         </div>
    //     </>
    // )
    // } else {
    //     return (
    //     <>
    //         <div className={styles.detailsContainer}>
    //             <h1 className={styles.title} >{videogame?.name}</h1>
    //             <div className={styles.card}>
    //                 <div className={styles.containerImg}>
    //                     <img src={videogame?.image} alt="" className={styles.imgDetails} />
    //                 </div>
    //                 <div className={styles.containerCardDetails}>
    //                     <h3 className={styles.titleDetails}>Details</h3>
    //                     <div className={styles.containerDivision}>
    //                         <div className={styles.containerPlaforms}>
    //                             <p className={styles.titlePlatforms}>Platforms</p>
    //                             {
    //                                 videogame?.platforms? <ul>{videogame?.platforms?.map((ele, id) => ( <li className={styles.biñeta} key={id}>{ele}</li>))}</ul> 
    //                                 : <ul>{videogame?.platform?.map((ele, id) => ( <li className={styles.biñeta} key={id}>{ele}</li>))}</ul>
    //                             }
    //                             <p className={styles.titlePlatforms}>Released</p>
    //                             <li className={styles.biñeta}>{videogame?.released}</li>
    //                         </div>
    //                         <div className={styles.containerGenre}>
    //                             <p className={styles.titlePlatforms}>Genres</p>
    //                             <ul>{videogame?.genres?.map((ele, id) => ( <li key={id} className={styles.biñeta} > {ele} </li>))}</ul>
    //                             <p className={styles.titlePlatforms}>Rating</p>
    //                             <ul><li key={videogame?.rating} className={styles.biñeta}>{videogame?.rating}</li></ul>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //             <div className={styles.containerDescription}>
    //                 <h2 className={styles.titleDescription}>Description</h2>
    //                 <p className={styles.pDescription}>{videogame?.description}</p>
    //             </div>
    //         </div>
    //     </>
    //     )
    // }
}
