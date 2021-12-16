import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Cards from "../../Components/Cards/Cards";
import SearchBar from "../../Components/SearchBar/SearchBar";
import Paginado from "../../Components/Paginado/Paginado";

export default function Home (){

    // const dispatch = useDispatch();
    const videogames = useSelector(state => state.videogames);
    const [currentPage, setCurrentPage] = useState(1); 
    const [videogamePerPage] = useState(5) 
    // const [order, setOrder] = useState('')
    
    let lastVideoGameInPage = currentPage * videogamePerPage;  
    let firstVideoGameInPage = lastVideoGameInPage - videogamePerPage;  

    let currentVideoGamesItems = videogames?.slice(firstVideoGameInPage, lastVideoGameInPage); 
    const numOfPages = Math.ceil(videogames.length / videogamePerPage); 

    function pagination (e, page){
        e.preventDefault();
        setCurrentPage(page);
    }

    return(
        <div>
            <SearchBar />
            <Paginado numOfPages={numOfPages} pagination={pagination}/>
            <Cards videogames={currentVideoGamesItems} />
        </div>
    )
}