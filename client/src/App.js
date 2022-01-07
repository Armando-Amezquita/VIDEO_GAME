import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getVideogames, getGenres, getPlatforms } from './Actions/index';
import Home from './Views/Home/Home';
import LandingPage from './Views/LandingPage/LandingPage';
import Details from './Views/Details/Details';
import CreateVideogame from './Views/CreateVideogame/CreateVideogame.jsx';
import Header from './Components/Nav/Nav.jsx';
import About from './Views/About/About';
import Footer from './Views/Footer/Footer';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideogames());
    dispatch(getGenres());
    dispatch(getPlatforms());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Routes >
          <Route exact path='/' element={<LandingPage />} />
          <Route exact path='/home' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/videogame/:id' element={<Details />} />
          <Route exact path='/createVideogame' element={<CreateVideogame />} />
      </Routes>
      <Footer />
      
    </>
  );
}

export default App;
