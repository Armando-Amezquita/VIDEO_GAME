import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Cards from "../../Components/Cards/Cards";
import SearchBar from "../../Components/SearchBar/SearchBar";
import Paginado from "../../Components/Paginado/Paginado";
import { getVideogames, orderByname, filterCreate, filterByGenre, filterByRating } from "../../Actions";

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
    function volverCargar (e){
        e.preventDefault();
        dispatch(getVideogames());
        console.log('Se actualizo')
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
        <div>
            <SearchBar />
            <button onClick={volverCargar}>Volver a cargar</button>
            <select onChange={e => handelFilterByName(e)}>
                <option value="asc">Ascendente</option>
                <option value="desc">Descendente</option>
            </select>
            <select onChange={e => handleFilterCreate(e)}>
                    <option value="All">Todos</option>
                    <option value="create">Creados</option>
                    <option value="api">Existente</option>
            </select>
            <select onChange={e => handleFilterByGenre(e)}>
                {
                    genres?.map(genre => (
                            <option key={genre.id} name={genre.name} value={genre.name}>{genre.name}</option>
                    ))
                }
            </select>
            <select onChange={handleFilterByRating}>
                {
                    videogames?.map(game => (
                            <option key={game.id} name={game.name} value={game.rating}>{game.rating}</option>
                    ))
                }
            </select>
            <Paginado numOfPages={numOfPages} pagination={pagination}/>
            <Cards videogames={currentVideoGamesItems} />
        </div>
    )
}

/*  Falta filtrar bien por genero los de la base de datos y que se puedan elegir mas de un genero */