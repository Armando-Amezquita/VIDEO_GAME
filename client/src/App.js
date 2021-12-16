import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getVideogames, getGenres } from './Actions/index';
import Home from './Views/Home/Home';
import LandingPage from './Views/LandingPage/LandingPage';
import Nav from './Components/Nav/Nav';
import Details from './Views/Deatils/Details';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideogames());
    dispatch(getGenres());
  }, [dispatch]);

  return (
    <>
      <Nav />
      <Routes >
          <Route exact path='/' element={<LandingPage />} />
          <Route exact path='/home' element={<Home />} />
          <Route exact path='/videogame/:id' element={<Details />} />
          {/* <Route exact path='/createDog' element={<CreateDog />} /> */}
      </Routes>
    </>
  );
}

export default App;
