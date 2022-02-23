import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Cards from "../../Components/Cards/Cards";
import SearchBar from "../../Components/SearchBar/SearchBar";
import Paginado from "../../Components/Paginado/Paginado";
import { orderByname, filterCreate, filterByGenre, filterByRating } from "../../Actions";
import styles from './Home.module.css';

export default function Home (){

    const dispatch = useDispatch();
    const videogames = useSelector(state => state.videogames);
    const genres = useSelector(state => state.genres);
    
    const [currentPage, setCurrentPage] = useState(1); 
    const [videogamePerPage] = useState(15);
    
    let lastVideoGameInPage = currentPage * videogamePerPage;  
    let firstVideoGameInPage = lastVideoGameInPage - videogamePerPage;  

    let currentVideoGamesItems = videogames?.slice(firstVideoGameInPage, lastVideoGameInPage); 
    const numOfPages = Math.ceil(videogames?.length / videogamePerPage); 

    function pagination (e, page){
        e.preventDefault();
        setCurrentPage(page);
    }

    function handelFilterByName(e) {
        e.preventDefault();
        dispatch(orderByname(e.target.value));
        setCurrentPage(1); 
    }

    function handleFilterCreate(e){
        e.preventDefault();
        dispatch(filterCreate(e.target.value));
    }

    function handleFilterByGenre(e){
        e.preventDefault();
        dispatch(filterByGenre(e.target.value));
    }

    function handleFilterByRating(e){
        e.preventDefault();
        dispatch(filterByRating(e.target.value));
    }

    return(
        <main className={styles.containerHome}>
            <section className={styles.SearchBar}>
                <SearchBar />
            </section>
            <section className={styles.containerFilters}>
                <div className={styles.filterByName}>
                    <div>
                        <p className={styles.pOrderByName}>Order By Name</p>
                    </div>
                    <div>
                        <select onChange={e => handelFilterByName(e)} className={styles}>
                            <option selected disabled>--Select--</option>
                            <option value="asc">Ascending</option>
                            <option value="desc">Descending</option>
                        </select>
                    </div>
                </div>
                <div className={styles.filterByCreateOrExisting}>
                    <div>
                        <p className={styles.pOrderByName}>Filter Create Or Existing</p>
                    </div>
                    <div>
                        <select onChange={e => handleFilterCreate(e)}>
                            <option selected disabled>--Select--</option>
                            <option value="All">All</option>
                            <option value="Created">Created</option>
                            <option value="Api">API</option>
                        </select>
                    </div>
                </div>
                <div className={styles.filterByGenre}>
                    <div>
                    <p className={styles.pOrderByName}>Filter By Genre</p>
                    </div>
                    <div>
                        <select className={styles.selects} onChange={e => handleFilterByGenre(e)}> {/* size='4' */}
                            <option selected disabled>--Select--</option>
                            {
                                genres?.map(genre => (
                                    <option key={genre.id} name={genre.name} value={genre.name}>{genre.name}</option>
                                    ))
                                }
                        </select>
                    </div>
                </div>
                <div className={styles.filterByRating}>
                    <div>
                    <p className={styles.pOrderByName}>Filter By Rating</p>
                    </div>
                    <div>
                        <select onChange={e => handleFilterByRating(e)} className={styles}>
                            <option selected disabled>--Select--</option>
                            <option value='All'>All Rating</option>
                            <option value="Min">Min</option>
                            <option value="Max">Max</option>
                        </select>
                    </div>
                </div>
            </section>
            {
                videogames ?
                <Cards videogames={currentVideoGamesItems} />
                : <p className={styles.loading}></p>
            }
            <Paginado numOfPages={numOfPages} pagination={pagination}/>
        </main>
    )
}

