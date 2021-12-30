import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Cards from "../../Components/Cards/Cards";
import SearchBar from "../../Components/SearchBar/SearchBar";
import Paginado from "../../Components/Paginado/Paginado";
import { orderByname, filterCreate, filterByGenre, filterByRating } from "../../Actions";
import styles from './Home.module.css'

export default function Home (){

    const dispatch = useDispatch();
    const videogames = useSelector(state => state.videogames);
    const genres = useSelector(state => state.genres)
    const [currentPage, setCurrentPage] = useState(1); 
    const [videogamePerPage] = useState(5) 
    const [order, setOrder] = useState('')
    
    let lastVideoGameInPage = currentPage * videogamePerPage;  
    let firstVideoGameInPage = lastVideoGameInPage - videogamePerPage;  

    let currentVideoGamesItems = videogames?.slice(firstVideoGameInPage, lastVideoGameInPage); 
    const numOfPages = Math.ceil(videogames.length / videogamePerPage); 

    function pagination (e, page){
        e.preventDefault();
        setCurrentPage(page);
    }

    function handelFilterByName(e) {
        e.preventDefault();
        dispatch(orderByname(e.target.value));
        setCurrentPage(1); 
        setOrder(`Ordenado ${e.target.value}`); 
    }

    function handleFilterCreate(e){
        e.preventDefault();
        dispatch(filterCreate(e.target.value))
        console.log(e.target.value)
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
                            <option selected disabled>--Selecciona--</option>
                            <option value="asc">Ascendente</option>
                            <option value="desc">Descendente</option>
                        </select>
                    </div>
                </div>
                <div className={styles.filterByCreateOrExisting}>
                    <div>
                        <p className={styles.pOrderByName}>Filter Create Or Existing</p>
                    </div>
                    <div>
                        <select onChange={e => handleFilterCreate(e)}>
                            <option selected disabled>--Selecciona--</option>
                            <option value="All">Todos</option>
                            <option value="create">Creados</option>
                            <option value="api">Existente</option>
                        </select>
                    </div>
                </div>
                <div className={styles.filterByGenre}>
                    <div>
                    <p className={styles.pOrderByName}>Filter By Genre</p>
                    </div>
                    <div>
                        <select className={styles.selects} onChange={e => handleFilterByGenre(e)}> {/* size='4' */}
                            <option selected disabled>--Selecciona--</option>
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
                        <select onChange={handleFilterByRating}>
                            <option selected disabled>--Selecciona--</option>
                            {
                                videogames?.map(game => (
                                    <option key={game.id} name={game.name} value={game.rating}>{game.rating}</option>
                                    ))
                                }
                        </select>
                    </div>
                </div>
            </section>
            <Cards videogames={currentVideoGamesItems} />
            <Paginado numOfPages={numOfPages} pagination={pagination}/>
        </main>
    )
}

/*  Falta filtrar bien por genero los de la base de datos y que se puedan elegir mas de un genero */
